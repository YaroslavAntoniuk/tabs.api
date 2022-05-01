const express = require('express');
const app = express();
const { readFile } = require('fs/promises');

app.get('/', async (req, res, next) => {
  try {
    const articles = JSON.parse(await readFile('articles.json', 'utf8'));

    res.status(200).send(articles);
  } catch (error) {
    res
      .status(500)
      .send(
        'Oops, something went wrong. Please, let developers know about this.',
      );
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
