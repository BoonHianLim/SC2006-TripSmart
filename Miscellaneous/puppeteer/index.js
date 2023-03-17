const express = require('express'); // Adding Express
const app = express(); // Initializing Express
const puppeteer = require('puppeteer'); // Adding Puppeteer

// Launching the Puppeteer controlled headless browser and navigate to the Digimon website
puppeteer.launch().then(async function(browser) {
    const page = await browser.newPage();
    await page.goto('http://digidb.io/digimon-list/');

    // Targeting the DOM Nodes that contain the Digimon names
    const digimonNames = await page.$$eval('#digiList tbody tr td:nth-child(2) a', function(digimons) {
    // Mapping each Digimon name to an array
        return digimons.map(function(digimon) {
        return digimon.innerText;
    });
    });

    // Log the array of Digimon names to the terminal
    console.log(digimonNames);

    // Closing the Puppeteer controlled headless browser
    await browser.close();

    app.get('/', function(req, res) {
        // Sending 'Test' back to Postman
        res.send(digimonNames);
    });
});

app.listen(8080, function () {
    console.log(`Running on port 8080.`);
  });

