require('child_process').exec([
    'nodeman',
    '--watch ../../dummy',
    '--watch ../../files',
    '--watch ../../watch',
    '../../files/send_to_browser.js'
].join(' '), {}, console.log)