const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const app = express();
const port = 3321;

app.use(express.json());

app.use(bodyParser.json());

const WEBHOOK_SECRET = 'your_webhook_secret';

// Endpoint to receive webhook payloads
app.post('/webhook', (req, res) => {
    const signature = req.headers['x-connect-it-token'];
    const payload = JSON.stringify(req.body);
    const hash = crypto.createHmac('sha256', WEBHOOK_SECRET)
                       .update(payload)
                       .digest('hex');

    if (signature !== hash) {
        console.log('Invalid signature');
        return res.status(400).json({ error: 'Invalid signature' });
    }

    const eventType = req.body.type;

    switch (eventType) {
        case 'transcript.completed':
            console.log('Received transcript.completed event:', req.body);
            // Handle the transcript.completed event
            break;
        default:
            console.log('Invalid event type');
            return res.status(400).json({ error: 'Invalid event type' });
    }

    res.status(200).send();
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});