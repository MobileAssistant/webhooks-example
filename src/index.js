require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const app = express();
const PORT = process.env.PORT || 3221;

app.use(express.json());

app.use(bodyParser.json());

const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

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
        case 'test.completed':
            // This is an example event, you can delete it once you've tested your webhook
            console.log('Received test.completed event:', req.body);
            break;
        case 'transcript.completed':
            // Handle the transcript.completed event -- your code here
            console.log('Received transcript.completed event:', req.body);
            break;
        default:
            console.log('Invalid event type');
            return res.status(400).json({ error: 'Invalid event type' });
    }

    res.status(200).send();
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});