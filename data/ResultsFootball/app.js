const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const tableRows = $('.standing-table__row');

    const data = [];

    tableRows.each((index, element) => {
      const row = $(element);
      const ranking = row.find('.standing-table__cell').eq(0).text().trim();
      const team = row.find('.standing-table__cell--name-link').text().trim();
      const played = row.find('.standing-table__cell').eq(2).text().trim();
      const win = row.find('.standing-table__cell').eq(3).text().trim();
      const draw = row.find('.standing-table__cell').eq(4).text().trim();
      const lose = row.find('.standing-table__cell').eq(5).text().trim();
      const scored = row.find('.standing-table__cell').eq(6).text().trim();
      const conceed = row.find('.standing-table__cell').eq(7).text().trim();
      const goalDifference = row.find('.standing-table__cell').eq(8).text().trim();
      const points = row.find('.standing-table__cell').eq(9).text().trim();
      const lastSixMatches = row.find('.standing-table__form span').map((i, el) => $(el).attr('title')).get();

      const rowData = {
        ranking,
        team,
        played,
        win,
        draw,
        lose,
        scored,
        conceed,
        goalDifference,
        points,
        lastSixMatches
      };

      data.push(rowData);
    });

    return data;
  } catch (error) {
    throw error;
  }
};

app.get('/premierLeague', async (req, res) => {
  try {
    const data = await fetchData('https://www.skysports.com/premier-league-table');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/laliga', async (req, res) => {
  try {
    const data = await fetchData('https://www.skysports.com/la-liga-table');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/seriea', async (req, res) => {
    try {
      const data = await fetchData('https://www.skysports.com/serie-a-table');
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/premierleague', async (req, res) => {
    try {
      const data = await fetchData('https://www.skysports.com/premier-league-table');
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/ligue1', async (req, res) => {
    try {
      const data = await fetchData('https://www.skysports.com/ligue-1-table');
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/eredivisie', async (req, res) => {
    try {
      const data = await fetchData('https://www.skysports.com/eredivisie-table');
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  app.get('/bundesliga', async (req, res) => {
    try {
      const data = await fetchData('https://www.skysports.com/bundesliga-table');
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
