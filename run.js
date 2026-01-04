const fs = require('fs');
const axios = require('axios');

const urls = fs.readFileSync('urls.txt', 'utf8')
  .split('\n')
  .filter(Boolean);

(async () => {
  console.log(`Running ${urls.length} URLs`);

  for (const url of urls) {
    try {
      const res = await axios.get(url, { timeout: 10000 });
      console.log(`SUCCESS ${res.status} ${url}`);
    } catch (e) {
      console.log(`FAILED ${url}`);
    }
  }
})();
