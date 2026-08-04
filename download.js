process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import fs from 'fs';
import path from 'path';
import https from 'https';

const urls = [
  'https://vod.linom.org/download/d-azar-1398.rar',
  'https://vod.linom.org/download/d-khordad-1398.rar',
  'https://vod.linom.org/download/d-esfand-1399.rar',
  'https://vod.linom.org/download/d-shahrivar-1399.rar',
  'https://vod.linom.org/download/d-day-1399.rar',
  'https://vod.linom.org/download/d-esfand-1400.rar',
  'https://vod.linom.org/download/d-shahrivar-1400.rar',
  'https://vod.linom.org/download/d-aban-1400.rar',
  'https://vod.linom.org/download/d-khordad-1400.rar',
  'https://vod.linom.org/download/d-shahrivar-1401.rar',
  'https://vod.linom.org/download/p-esfand-1401.rar',
  'https://vod.linom.org/download/p-shahrivar-1401.rar'
];

const destDir = '/home/mahdi/.gemini/antigravity/scratch/dentallearn/downloads';
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function downloadFile(url) {
  const fileName = path.basename(url);
  const destPath = path.join(destDir, fileName);
  console.log(`Downloading ${url}...`);

  return new Promise((resolve, reject) => {
    https.get(url, { rejectUnauthorized: false }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        console.error(`Failed ${fileName}: Status ${res.statusCode}`);
        return resolve();
      }
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Saved: ${fileName} (${fs.statSync(destPath).size} bytes)`);
        resolve();
      });
    }).on('error', (err) => {
      console.error(`Error downloading ${fileName}:`, err.message);
      resolve();
    });
  });
}

async function main() {
  for (const u of urls) {
    await downloadFile(u);
  }
  console.log('Done downloading all archive files!');
}

main();
