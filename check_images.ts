import fs from 'fs';
import path from 'path';

const dir = 'src/assets/images';
const files = fs.readdirSync(dir);

files.forEach(file => {
  const filePath = path.join(dir, file);
  const stats = fs.statSync(filePath);
  console.log(`${file}: ${stats.size} bytes`);
});
