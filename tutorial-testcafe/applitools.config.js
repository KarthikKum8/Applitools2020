module.exports = {
    apiKey: 'L6n9Li14Hv2TtT1QR9ChMH0GE9EKaHA2zSmYmwnu2ao110',
    //
    browser: [
        // Add browsers with different viewports
        {width: 1200, height: 800, name: 'chrome'},
        {width: 1200, height: 800, name: 'firefox'},
        {width: 1200, height: 800, name: 'edgechromium'},
        {width: 1200, height: 800, name: 'safari'},
        // Add mobile emulation devices in Portrait mode
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
        
    ],
    // set batch name to the configuration
    batchName: 'Holiday Shopping',
    concurrency: 1,
    showLogs: true
}