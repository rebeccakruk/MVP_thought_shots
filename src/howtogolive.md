alias points to the same domain by referencing www
but if your website is only taking up one subdomain of your server name, you only need the subdomain.

opened ssh (transferred the info required onto VM)
cd /etc/apache2/sites-available/
ls
sudo nano animals.conf
shows the server name and document root. skipped the alias in this case because the alias doesn't exist
<virtualHost >
    serverName testing.foodierest.ml
    docroot "/var/www/animals"
</vh>

if we go to the testing it's just a blank Vue page (doesn't have anything on it because the API calls are failing)

now as part of fe, make sure you're pointing to the correct url in the production file
VUE_APP_API_URL https://your site

certbot ssl set up
(instead of following this, this is good enough if you're just using a stand-alone domain)
https://www.linkedin.com/pulse/wildcard-certificates-using-lets-encrypt-certbot-pallavi-udhane/
how to set up a wildcard certificate

back to ssh
run command:
sudo certbot certonly --manual --preferred-challenge-dns --email(useyouractualemailhere) --server https://acme-v02.api.letsencrypt.org/directory --agree-tos -d *.rkruk.ca
(if correctly done, get a prompt from certbot)
whoever you bought your dns record from. option to add a txt record. copy acme-challenge part, then copy past the value that shows 
that proves to certbot that you own the domain name fully and anything under that domain name belongs to you. by editing the .txt record
you can immediately press enter and certbot will query your dns record, then they will do your certification.

sudo nano animals.conf
<virtualHost >
    serverName testing.foodierest.ml
    <!-- docroot "/var/www/animals" -->
    redirect permanent / https://testing.rkruk.ca
</vh>

<vh 443>
    servername testing.rkruk.ca
    no alias
    docroot "/var/www/animals"

    sslengine on 
    sslcertifcatefile /etc/letsencrypt/live/testing.rkruk.ca/fullchain.pem
    sslcertificatekeyfile /etc/letsencrypt/live/testing.rkruk.ca/privkey.pem
</vh>

sudo apachectl -t (checking syntax and cert paths)
sudo systemctl restart apache2

now try https://test.rkruk.ca
(this will be empty because we haven't set up the api)

run npm build, then copy the dist file - stick to the var/www for safety. do not put back and front end in the same folder

BACKEND SET UP
SSH
cd ../animals-api/
ls
(when you clone your repository the venv and dbcreds won't be there)
rm -rf __pycache__/
rm -fr venv/
run pip freeze 
cat requirements.txt (before pushing make sure your backend is frozen)
python3 -m venv venv (this is a blank venv)
source venv/bin/activate
(venv) rebeccakruk-FSD2022$ pip install -r requirements.txt
pm2 list
pm2 delete 0
clear

the thing we weren't able to install on our local machines is bjoern
pip install bjoern
you can try to run the testing mode the check
python --version
python app.py (or) run.py
RUNNING SERVER IN PRODUCTION MODE
(keyboard interrupt that shit)

with each new api that you're creating make sure you reserve a new port number.
pretend it's our tenth api running on the same maching
ports 5000 - 5009 are taken
sudo nano app.py
replace the bjoern.run(app. xxxxx 5010)

check again to ensure the port isn't taken

now you can set up the pm2 job
pm2 start /home/rebeccakruk/projectname_api/app.py --interpreter /home/rebeccakruk/animals-api/venv/bin/python
once you run this, check the status
pm2 status

add another argument and name your application
pm2 start /home/rebeccakruk/projectname_api/app.py --interpreter /home/rebeccakruk/animals-api/venv/bin/python --name animals

pm2 restart animals

the last step is to connect the fe to the api. right now the front end is trying to connect to the /animals-api
that name is not a valid name. apache only knows things that are within the var/www folder. it doesn't know there's another one that is supposed to run
when you're running a webpage its a get request.

if asking for testing.foodierest.ml then you need to go and search for those files
it doesn't know about the api 
make sure you don't create something that is both the front end and the back end

now we use a proxy

all we need to do now is modify the 

cd /etc/apache2/sites-available
sudo nano animals conf
<virtualHost >
    serverName testing.foodierest.ml
    <!-- docroot "/var/www/animals" -->
    redirect permanent / https://testing.rkruk.ca
</vh>

<vh 443>
    servername testing.rkruk.ca
    no alias
    docroot "/var/www/animals"

    proxypreservehost on
    proxypass /api http://127.0.0.1:5010/api (when you're receive a request under the path api, you need to forward that request to http://127.0.0.1:5010/api)
    proxypassreverse /api http:11127.0.0.1:5010/api

    sslengine on 
    sslcertifcatefile /etc/letsencrypt/live/testing.rkruk.ca/fullchain.pem
    sslcertificatekeyfile /etc/letsencrypt/live/testing.rkruk.ca/privkey.pem
</vh>

if there's anything /api, we forward the request to the backend (and viee verse)

sudo apachectl -t
sudo systemctl restart apache2

now if everything was set up correctly, we should be able to see our api request working
this never happens. it's a 500 message in this case. now need to check because might have mismatched the endpoint. checking firefox inspector
api/animals/get
pm2 logs animals
(this shows you what went wrong so you can fix it)





Say you want to make changes to just your API
say you want to change the name of the function
since you're already connected to a remote branch, commit -am "changed function name", git push
now it's on the remote, and on the backend side

ssh git status
git checkout if error
git pull
then after pulling, restart the app (otherwise it will keep running the cached version of the api)
pm2 restart animals

less app.py

git push change 
git pull
look at app.py
until you restart, the error will persist

pm2 restart animals
refresh the page (web) you'll see the api call succeeding

front end change
cd animals
ls
ls -l
that will tell you the timestamp
sudo cp -R ./* /var/www/animals/
ls -l /var/www/animals
easier check is just to refresh the page where you'll see the changes
*make sure the ssh is set up