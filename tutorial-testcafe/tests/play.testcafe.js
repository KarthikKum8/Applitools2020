//play.testcafe.js

// next line is optional, just for IDEs autocomplete :
/// <reference types="@applitools/eyes-testcafe" />

import Eyes from '@applitools/eyes-testcafe';

// Initialize the eyes
const eyes = new Eyes();

// Set page used in the test
fixture`Testcafe Demo App`.page`https://demo.applitools.com/tlcHackathonMasterV2.html`
    // Call Close on eyes to let the server know it should display the results
    //.afterEach(async () => eyes.close())
   
    .after(async () => {
        // Wait and collect all test results
        // we pass false to this method to suppress the exception that is thrown if we
        // find visual differences
        let allTestResults = await eyes.waitForResults(false)
        // Print results
        console.log(allTestResults)
    });

test('Test1', async t => {
    // Call Open on eyes to initialize a test session
    await eyes.open({
        t, // pass testcafe contorller
        appName: 'AppliFashion',
        testName: 'Test 1',
    });

    // check the login page with fluent api, see more info here
    // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
    
    await eyes.checkWindow({
        tag: "main page",
        target: 'window',
        fully: true
    });
    eyes.close()
});    
test('Test2', async t => {
    // Call Open on eyes to initialize a test session
    await eyes.open({
        t, // pass testcafe contorller
        appName: 'AppliFashion',
        testName: 'Test 2',
    });
    await t.click('#SPAN__checkmark__107')
    await t.click('#filterBtn')
    await eyes.checkWindow({
        tag: "filter by color",
        target: 'region',
        selector: {
        type: 'css',
        selector: '#product_grid'
      }
    });
    eyes.close()
   
});
test('Test 3', async t => {
    // Call Open on eyes to initialize a test session
    await eyes.open({
        t, // pass testcafe contorller
        appName: 'AppliFashion',
        testName: 'Test 3',
    });
    await t.click('#IMG__imgfluid__215')
    t.wait(8000)

    await eyes.checkWindow({
        tag: "product details",
        target: 'window',
        fully: true
    });
    eyes.close()
   
});