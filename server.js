import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import os from 'os';
import { fileURLToPath } from 'url';
import complete from './public/home/js/miniEngine/autocomplete.js';

const app = express();
const PORT = process.env.PORT || 80

app.use(express.json())

app.use(cors({
	origin: "*",	
	methods: ['GET'],
	allowedHeaders: ['Content-Type']
}));

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname,'public/home')));

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
})

app.post('/complete', async (req, res) => {
	await complete(req, res);	
});

app.get('/settings', async (req, res) => {
  res.sendFile(__dirname + '/public/settings/page.html');
});

app.get('/color', (req, res) => {
  const filePath = path.join(os.homedir(), '.cache', 'wal', 'colors.json');

	console.log(filePath);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
			console.log(err)
      res.status(500).send('Erro ao carregar o arquivo  ');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

