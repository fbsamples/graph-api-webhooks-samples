# Graph API Webhooks Heroku Sample

This is a sample client for Facebook's [Webhooks](https://developers.facebook.com/docs/graph-api/webhooks/) product and Instagram's [Subscriptions API](https://www.instagram.com/developer/subscriptions/), powered by [Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs).

## Setup

### Facebook Webhooks

1. Refer to Facebook's [Webhooks sample app documentation](https://developers.facebook.com/docs/graph-api/webhooks/sample-apps) to see how to use this app.
1. Deploy the sample app on Heroku with this button:

    [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/fbsamples/graph-api-webhooks-samples)

### Instagram Subscription API
1. Register an [Instagram API client](https://instagram.com/developer/clients/manage/).
1. Deploy the sample app on Heroku with this button:

    [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/fbsamples/graph-api-webhooks-samples)

1. Set up your client's [subscription](https://www.instagram.com/developer/subscriptions/) using your `https://<your-subdomain>.herokuapp.com/instagram` as the callback URL. It is recommended that you set a `TOKEN` [config var](https://devcenter.heroku.com/articles/config-vars) as part of the set up of your Heroku app to secure requests. If you choose not to set a config var, then you will need to set a verify token of 'token' when configuring the callback URL.
