# TripSmart
![alt text](./tripsmart.gif)   
Introducing TripSmart, a trip aggregator platform that facilitates a cost-effective and efficient mode of transportation selection based on individual commuting preferences. 

Our platform consolidates estimated travel time and fare data from multiple transportation sources to enable informed decisions for time and money savings. We aim to support Singapore's smart nation vision by optimizing the transportation industry and encouraging smart mobility, empowering regular commuters with the ability to compare available options.

## Getting Started

### Prerequisites

0. If you are TA and want to start the application, please use the code submitted in the SVN, which lets you to skip step 3.

1. To start the application on the machine, you must have the following environment setup in your machine. The installation guide is attached for reference.
* Node 19+ <a href="https://nodejs.org/en">(Link)</a>
* Yarn <a href="https://classic.yarnpkg.com/lang/en/docs/install/">(Link)</a>
* Python 3.9+ <a href="https://www.python.org/downloads/">(Link)</a>

2. After that, you must install all the Python dependencies for the Grab scrapper Flask server. You can do this by typing the following:
* ``` pip install -r front-end/servers/GrabAPI/requirements.txt ```

3. Lastly, you have to setup the .env file. (Skip this if you are using the code submitted in SVN)
* You will create a new .env file in front-end folder, by copy the .env.example content in the exact same folder.
* Fill in every single line with the proper api key. You will have to request them yourselves. You can get the Google_Maps_Api_Key <a href="https://developers.google.com/maps/documentation/javascript">here</a>.

### Start Application

1. First, install node dependencies for the application.
* ``` cd frontend ```   
* ``` yarn ```
2. Then, start the program (expo server and Flask Grab scrapper server).
* ``` yarn starts ```
3. Lastly, use your mobile phone / android emulator to access the application. If you need guide for opening Expo application, click <a href="https://docs.expo.dev/workflow/run-on-device/">here</a>.

## File Structure
```
~
├── Deliverables                    # Lab deliverables
│    ├── Lab2                          # Lab 2 deliverables
│    ├── Lab3                          # Lab 3 deliverables
|    ├── Lab5                          # Lab 5 deliverables (latest)
├── Miscellaneous                   # Unused code, contains testing and development code
├── front-end                       # Codebase
│    ├── assets                        # Img used in app
│    ├── components                    # Boundary Classes Helper
|    ├── controller                    # Controller Classes
|    ├── locales                       # Language File
|    ├── screens                       # Boundary Classes
|    ├── servers                       # Web scrapping server
│    ├── services                      # APIs Helper
│    └── types                         # Custom Type
├── .gitignore
└── README.md
```

## Tech Used  
  <p>
    <img src="https://img.shields.io/badge/Expo-8b0000?style=for-the-badge&logo=expo" />
    <img src="https://img.shields.io/badge/yarn-096AB0?style=for-the-badge&logo=yarn" />
    <img src="https://img.shields.io/badge/typescript-8b7700?style=for-the-badge&logo=typescript" />
    <img src="https://img.shields.io/badge/python-096AB?style=for-the-badge&logo=python" />
    <img src="https://img.shields.io/badge/selenium-8b0080?style=for-the-badge&logo=selenium" />
    <img src="https://img.shields.io/badge/flask-7C96AB?style=for-the-badge&logo=flask" /> 
    <img src="https://img.shields.io/badge/Socket.io-701430?style=for-the-badge&logo=socketdotio" /> 
    <img src="https://img.shields.io/badge/mongodb-536AB0?style=for-the-badge&logo=mongodb" />
    <img src="https://img.shields.io/badge/react-5b7700?style=for-the-badge&logo=react" />
    <img src="https://img.shields.io/badge/npm-8096Af?style=for-the-badge&logo=npm" />
    <img src="https://img.shields.io/badge/googlemaps-fbff80?style=for-the-badge&logo=googlemaps" />
  </p>

## Final Report   
<a href="/Deliverables/Lab5/SRS.pdf">(Link)</a>
## Diagrams   
<a href="/Deliverables/Lab5/Diagrams">(Link)</a>
## Demo Video
<a href="https://www.youtube.com/watch?v=--SPR8MP-l4">(Link)</a>
