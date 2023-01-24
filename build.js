const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/retrieve-email/runtime.js',
    './dist/retrieve-email/polyfills.js',
    './dist/retrieve-email/main.js'
  ];

  await fs.ensureDir('retrieve-email-build');
  await fs.removeSync('retrieve-email-build/lr-get-email.js');
  await concat(files, 'retrieve-email-build/lr-get-email.js');

  await fs.copy('./src/styles.css', 'retrieve-email-build/styles.css');
})();
