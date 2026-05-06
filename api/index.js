import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const htmlPath = path.join(process.cwd(), 'public', 'glean_intelligence_brief.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
  
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(htmlContent);
}
