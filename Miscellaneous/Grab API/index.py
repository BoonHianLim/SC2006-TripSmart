from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome('/chromedriver')
driver.get('https://www.grab.com/sg/fare-check/')
pickup_input = driver.find_element("xpath","/html/body/div[2]/div/div/div/div/div/section/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div/form/div/div[1]/div/div/div/div/div/div/div/ul/li/div/span[1]/input")
pickup_input.send_keys('Nanyang Technological University')
time.sleep(3)
pickup_input.send_keys(Keys.ENTER)
dropoff_input = driver.find_element("xpath","/html/body/div[2]/div/div/div/div/div/section/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div/form/div/div[2]/div/div/div/div/div/div/div/ul/li/div/span[1]/input")
dropoff_input.send_keys('Marina Bay')
time.sleep(3)
dropoff_input.send_keys(Keys.ENTER)
time.sleep(6)
answer = driver.find_element("xpath","/html/body/div[2]/div/div/div/div/div/section/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div/form/div/div[3]/div[1]/div[3]/span")
print(answer.get_attribute("innerHTML"))