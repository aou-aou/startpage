import fetch from "node-fetch";

async function complete(req, res) {
  try {
    const query = req.body.query;
    const engine = req.body.engine;

    if (query == undefined || !engine) {
      return res.status(400).json({ error: 'Query and engine are required' });
    }

    const enginesComplete = {
      duck: `https://duckduckgo.com/ac/?q=${query}&kl=us-en`,
      brave: `https://search.brave.com/api/suggest?q=${query}`,
      startpage: `https://www.startpage.com/suggestions?q=${query}&sc=XMfbmie10LzG10&lui=english&segment=startpage.defaultffx&format=opensearch`
    };

    if (!enginesComplete[engine]) {
      return res.status(400).json({ error: 'Invalid engine' });
    }
		
    const response = await fetch(enginesComplete[engine], {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Accept-Language": "en-US,en;q=0.5",
        "Connection": "keep-alive",
        "Cookie": "l=us-en;p=-2",
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:142.0) Gecko/20100101 Firefox/142.0",
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch suggestions.' });
    }

    const data = await response.json();
    res.json(parseSuggestion(data, engine));
  } catch (error) {
			console.log(error);
		  res.status(500).json({ error: 'An error occurred while fetching suggestions.' });
  }
}

function parseSuggestion(data, engine) {
  switch (engine) {
    case 'duck':
      return data.map(item => item.phrase);
    default:
      return data[1];
  }
}

export default complete;
