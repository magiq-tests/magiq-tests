// var net = require('net')
const path = require('path')
const express = require('express')

var glob = require("glob")

var paths = []

glob("test_pages/*.html", function (er, files) {
    paths = (files)
})

var port = process.argv.length <= 2 ? 1112 : 1111

const app = express()
    .use(express.static(path.resolve(__dirname, '..')))

const server = app.listen(port, function () {

    console.log('Server running on port:' + port)
    // If run as "node server.js", start the HTTP server for manual testing
    if (process.argv.length <= 2)
        console.log('Server running on port ' + port)   // eslint-disable-line no-console
    // If run as "node server.js file1 file2", run puppetteer on each and show console log
    else {
        (async () => {
            const puppeteer = require('puppeteer')
            const browser = await puppeteer.launch({
                // headless: false,                    // Headless: False will open browser
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            })
            const page = await browser.newPage()
            console.log("page", paths)
            page.on('console', msg => console.log(msg.text))

            for (let i = 0; i < paths.length; i++) {

                try {
                    // var path = paths[i].split("/")[1]
                    let url = 'http://localhost:' + port + '/' + paths[i]
                    await page.goto(url)
                    await page.waitForFunction('window.renderComplete');
                } catch (err) {
                    console.log("Port In use"+err);
                }
            }

            await browser.close()
            server.close()
        })()
    }


})