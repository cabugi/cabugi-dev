# Install  
```  
cd judge-dev/backend/  
npm install  
npm install sqlite3  
npx knex migrate:latest  
```  
  
### Judge    
```  
sudo apt install git python-dev python-pip build-essential libseccomp-dev python3-pip  
pip install virtualenv  
cd backend/judge/judge  
git checkout v2.0.0  
pip install -r requirements.txt  
python setup.py develop  
```
