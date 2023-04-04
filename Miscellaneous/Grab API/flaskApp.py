from flask import Flask, request
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

app = Flask(__name__)

@app.route('/farecheck')
def farecheck():
    pickup = request.args.get('pickup')
    dropoff = request.args.get('dropoff')
    
    # your script goes here
    driver = webdriver.Chrome('/chromedriver')
    wait = WebDriverWait(driver, 10)

    driver.get('https://www.grab.com/sg/fare-check/')
    pickup_input = driver.find_element("xpath","/html/body/div[2]/div/div/div/div/div/section/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div/form/div/div[1]/div/div/div/div/div/div/div/ul/li/div/span[1]/input")
    pickup_input.send_keys(pickup)
    pickup_enter = wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div[4]/div/div/div/ul/li[1]")))
    pickup_input.send_keys(Keys.ENTER)

    dropoff_input = driver.find_element("xpath","/html/body/div[2]/div/div/div/div/div/section/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div/form/div/div[2]/div/div/div/div/div/div/div/ul/li/div/span[1]/input")
    dropoff_input.send_keys(dropoff) 
    time.sleep(3)
    dropoff_enter = wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div[4]/div/div/div/ul/li[1]")))
    dropoff_input.send_keys(Keys.ENTER)

    answer = wait.until(EC.presence_of_element_located((By.XPATH,"/html/body/div[2]/div/div/div/div/div/section/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div/form/div/div[3]/div[1]/div[3]/span")))
    
    fare = answer.get_attribute("innerHTML")
    
    driver.quit()

    # return fare as a variable
    return {'fare': fare}

if __name__ == '__main__':
    app.run(debug=True)
