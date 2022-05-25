# Graph API Webhooks Hubot Sample

This example is a [Hubot](https://hubot.github.com/) script that messages a chat room when a Facebook Page post is published using Facebook's [Graph API Webhooks](https://developers.facebook.com/docs/graph-api/webhooks/).  The message includes a link to the Facebook post.  The bot will post another message with the number of likes on the post after a configurable number of minutes.

These instructions assume you have already set up [Hubot on Heroku](https://hubot.github.com/docs/deploying/heroku/) or Hubot on another platform.

## Setup

1. Download `graph-api-webhooks.coffee`.
1. Add a line to `hubot-scripts.json` with `graph-api-webhooks`.
1. Create a new [Facebook application](https://developers.facebook.com/apps) and/or register an [Instagram API client](https://instagram.com/developer/clients/manage/).
1. Using `token` as the verify_token, set up your Facebook application's [Graph API Webhooks subscription](https://developers.facebook.com/docs/graph-api/webhooks/#setup) using `https://<your-subdomain>.herokuapp.com/facebook` as the callback URL, and/or your Instagram client's [subscription](https://www.instagram.com/developer/subscriptions/) using your `https://<your-subdomain>.herokuapp.com/instagram` as the callback URL.
1. Set the Heroku configuration values defined at the top of `graph-api-webhooks.coffee` before deploying.
    - `FACEBOOK_APP_ACCESS_TOKEN` - [access token](https://developers.facebook.com/docs/facebook-login/access-tokens#apptokens) for your Facebook app
    - `REAL_TIME_ROOM` - chat room for Hubot to post in
    - `WAIT_MINUTES` - number of minutes to wait before retrieving the number of likes on the post
1. Install the Facebook app on your Facebook Page using the [Page subscribed apps endpoint](https://developers.facebook.com/docs/graph-api/reference/page/subscribed_apps).
