# Tracking progress on integrating Grab API
## 24 Feb 2023
### Actual Grab API attempt
- Looked for existing Grab API, found one called Farefeed API under Grab Developer [website](https://developer.grab.com). More details can be viewed [here](https://developer.grab.com/docs/partner-farefeed). 
- Can't get the authorisation token from them without any prior notice. The next step is to contact them about our interest and ask them if they could let us use the API for free.
- Sent the application form to express our interest in using their API through their developer [contact form](https://developer.grab.com/contact-us). **Waits Patiently... 
### Web Scrapping? 
Possible website for web scrapping -> https://www.grab.com/sg/fare-check/  
Python Selenium and Web Driver Chrome would be suffice.  
Code Example: [Click Me](./index.py)  
Average time for one request: 9 seconds
  
To install all the dependencies:
``` pip install -U -r requirements.txt ```   
To run the program:
``` python index.py ```

## 5 March 2023
- No news from Grab yet...

## 4 April 2023   
- Fuah it's now April!   
- To run the app, just:   
``` flask run ```   
- API Example:   
``` http://localhost:5000/farecheck?pickup=Nanyang%20Technological%20University&dropoff=National%20University%20Singapore ```   
- Return Json:   
{
	"fare": "SGD 13.44 - 18.48"
}
- One small problem, it doesn't work with axios even tho it works with Postman, probably some firewall issues(?)
