# Install  
```  
cd judge-dev/backend/  
npm install  
npx knex migrate:latest
cd ../frontend
npm install
```  
  
### Judge    
```  
sudo apt install git python-dev python-pip build-essential libseccomp-dev python3-pip  
pip install virtualenv  
cd backend/judge/judge  
pip install -r requirements.txt  
python setup.py develop  
```
