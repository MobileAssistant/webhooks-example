# Webhooks Example

This is an example of how to receive webhooks from Connect It API.

## Setup

1. Clone the repository
2. Install dependencies `npm install`
3. Create a `.env` file based on the `.env.example` file
4. Start the server `npm start`


## Deploying

You can deploy this code to any server that supports Node.js.

For rapid deployment, you can use our one-click deployment to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMobileAssistant%2Fwebhooks-example&env=WEBHOOK_SECRET&envDescription=Webhook%20secret&envLink=https%3A%2F%2Fdocs.mobileassistant.us%2Fdocs%2Fwebhooks%2F&project-name=mobileassistant-webhook-example&repository-name=mobileassistant-webhook-example)

You'll want to leave the `WEBHOOK_SECRET` blank. You can set it later in the Vercel dashboard.

After deploying, you'll need to register the webhook URL as `https://<your-deployed-url>/webhook`.

### Manual Deployment

If you want to manually deploy this, you can do so by following these steps:

1. Clone the repository
2. Install dependencies `npm install`
3. Create a `.env` file based on the `.env.example` file
4. Start the server `npm start`

Make sure to replace `<your-webhook-secret>` with the webhook secret from your `.env` file.

## Register a webhook

You can register a webhook by following the instructions in the [Connect It API Webhooks Guide](https://docs.mobileassistant.us/docs/webhooks/).

## Testing

Once you've registered the webhook, you can test it by sending a request to the server.

Log into the Connect It Dev Portal and go to `Plugin` -> `Webhooks`. Click on the webhook you want to test and click the `Test Webhook` button.

You should see the webhook payload in the logs of the server that you're running on!
