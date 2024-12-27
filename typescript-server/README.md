# Graph API Webhook TypeScript Sample

This is a sample client for Facebook's [Webhooks](https://developers.facebook.com/docs/graph-api/webhooks/) product and Instagram's [Subscriptions API](https://www.instagram.com/developer/subscriptions/), powered by [Node.js](https://nodejs.org/en) and written in TypeScript.

## Setup

### Prerequisites
Ensure you have Node.js installed.
Create a `.env` file in the `typescript-server` directory with the following content:
```env
APP_SECRET=your_app_secret
TOKEN=your_verify_token
FROM_PHONE_NUMBER_ID=your_phone_number_id
WHATSAPP_BEARER_TOKEN=your_app__bearer_token
```

### Instalation
1. Navigate to the `typescript-server` directory:
    ```bash
    cd typescript-server
    ```
2. Install the dependencies:
    ```node
    npm install
    ```

### Running the Server
1. Start the server in development mode:
    ```node
    npm run dev
    ```
2. Alternatively, build and start the server:
    ```node
    npm start
    ```

### Facebook Webhooks

1. Refer to Facebook's [Webhooks sample app documentation](https://developers.facebook.com/docs/graph-api/webhooks/sample-apps) to see how to use this app.
2. Set up your Facebook application's Graph API Webhooks subscription using `https://<your-domain>/facebook` as the callback URL.

### Instagram Subscription API
1. Register an [Instagram API client](https://instagram.com/developer/clients/manage/).

2. Set up your client's [subscription](https://www.instagram.com/developer/subscriptions/) using `https://<your-domain>/instagram` as the callback URL.

### Threads Webhooks
1. Refer to [Threads' Webhooks Documentation](https://developers.facebook.com/docs/threads/webhooks) and set up Threads Webhooks product as a sub use case under the Threads API main use case.
2. Set up your webhooks callback URL as `https://<your-domain>/threads`.

## Endpoints
`POST /facebook` - Handles Facebook webhook events.<br>
`POST /instagram` - Handles Instagram webhook events.<br>
`POST /threads` - Handles Threads webhook events.<br>
`POST /whatsapp` - Handles WhatsApp webhook events.<br>
`POST /message` - Sends a WhatsApp message.

## License
This project is licensed under the MIT License.