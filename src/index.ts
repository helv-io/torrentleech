import puppeteer from 'puppeteer';

async function visitAndThanks(username: string, password: string) {
    console.log("visitAndThanks function started");
    try {
        console.log("Launching browser");
        const browser = await puppeteer.launch({ headless: true, defaultViewport: { height: 800, width: 1600 } });
        console.log("Opening new page");
        const page = await browser.newPage();

        console.log("Navigating to login page");
        // Navigate to the TorrentLeech Login page
        await page.goto(`https://www.torrentleech.org/user/account/login/`);

        console.log("Waiting for username field to load");
        // Wait for the username field to load
        await page.waitForSelector('[name="username"]');

        console.log("Typing username");
        // Type username
        await page.type('[name="username"]', username.trim());

        console.log("Typing password");
        // Type Password
        await page.type('[name="password"]', password.trim());

        console.log("Submitting login form");
        // Submit login form
        await page.click('button[type="submit"]')

        console.log("Waiting for 10s");
        // Wait for 10s
        await new Promise(f => setTimeout(f, 10000));

        console.log("Entering first torrent");
        // Enter first torrent
        await page.click('.torrents tbody tr:first-of-type td.td-name div.name a');

        console.log("Waiting for 10s");
        // Wait for 10s
        await new Promise(f => setTimeout(f, 10000));

        console.log("Clicking Thank You button");
        // Click Thank You Button
        await page.click('.thankYouButton')

        console.log("Waiting for 10s");
        // Wait for 10s
        await new Promise(f => setTimeout(f, 10000));

        console.log("Closing browser");
        await browser.close();
    } catch (err) {
        console.error(err);
    }
}

(async () => {
    console.log("Checking environment variables");
    console.log(process.env)
    if (process.env.TL_USERNAME && process.env.TL_PASSWORD) {
        console.log("Calling visitAndThanks function");
        visitAndThanks(process.env.TL_USERNAME, process.env.TL_PASSWORD)
    }
})()
