# Graph API Webhooks Heroku Sample

This is a sample client for [Facebook's Graph API Webhooks](https://developers.facebook.com/docs/graph-api/webhooks/) and [Instagram's Subscriptions API](https://www.instagram.com/developer/subscriptions/), powered by [Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs).

## Setup

### Facebook
In order to use this sample app, you must have a [Facebook Developer](https://developers,facebook.com) account and a [Heroku](https://www.heroku.com) account.

1. Refer to Facebook's [Webhooks sample app documentation](https://developers.facebook.com/docs/webhooks/sample-apps) to see how to use this app.
1. Deploy the sample app on Heroku with this button:

    [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/fbsamples/graph-api-webhooks-samples)

### Instagram
1. Register an [Instagram API client](https://instagram.com/developer/clients/manage/).
1. Deploy the sample app on Heroku with this button:

    [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/fbsamples/graph-api-webhooks-samples)

    1. Enter a name for your app or let Heroku assign a random one. (The name of the app will become part of the callback URL.) Click **Deploy App**.
    1. After the app is deployed, click **Manage App** and select the **Settings** tab in the dashboard.
    1. Click **Reveal Config Vars**, and create a `APP_SECRET` [config var](https://devcenter.heroku.com/articles/config-vars) with your Facebook app's App Secret as the value. Then, create a `TOKEN` config var with whatever value you wish; this string is included in verification requests when you configure the Webhooks product in the App Dashboard (the app will validate the request on its own).

    **Note:** It is recommended that you set a `TOKEN` config var as part of the set up of your Heroku app to secure requests. If you choose not to set a config var, then you will need to set a verify token of "token" when configuring the callback URL.  The `APP_SECRET` config var is needed for handling `POST` request validation.

1. Set up your client's [subscription](https://www.instagram.com/developer/subscriptions/) using `https://<your-subdomain>.herokuapp.com/instagram` as the **Callback URL**. If you created a `TOKEN` config var enter it in the **Verify Token** field of the Webhook subscription settings.

## Testing
If you wish to test that everything is working properly, you can send a test notification to your callback URL.

1. In the App Dashboard, go to **Products** > **Webhooks**.
1. Click on a **Test** button for any of the Webhooks fields.
1. A pop-up dialog will show you a sample response.  Click **Send to My Server** to trigger the actual notification.  You should see the Webhooks response at your callback URL in a web browser or by using `curl https://<your-subdomain>.herokuapp.com` from a terminal.
