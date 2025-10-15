import express from 'express';
import cors from 'cors';
import path from 'path';
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
