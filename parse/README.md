# Graph API Webhooks Parse Sample

This is a sample client for [Facebook's Graph API Webhooks](https://developers.facebook.com/docs/graph-api/webhooks/) and [Instagram's Subscriptions API](https://www.instagram.com/developer/subscriptions/), powered by [Parse Cloud Code](https://parse.com/docs/js/guide#cloud-code).
## Setup

### Parse
1. Download the files in this directory.
1. Create a new [Parse application](https://parse.com/apps).
1. Set your Parse application's [subdomain name](https://parse.com/docs/js/guide#hosting-choosing-a-subdomain-name).
1. Install the [Parse command line tool](https://parse.com/docs/js/guide#command-line).
1. Run the `parse new` command from the root directory of this repository to initialize the cloud code with your Parse app keys (enter `cloud` for the directory name to use this sample code).
1. Navigate to the `/cloud` directory and run the `parse deploy` command to deploy the Cloud Code.
1. Test your deployment with `curl https://<your-subdomain>.parseapp.com` - you should see "It works!".


### Facebook
1. Create a new [Facebook application](https://developers.facebook.com/apps).
1. Set up your Facebook application's [Graph API Webhooks subscription](https://developers.facebook.com/docs/graph-api/webhooks/#setup) using `https://<your-subdomain>.parseapp.com/facebook` as the callback URL and `token` as the verify_token.

### Instagram
1. Register an [Instagram API client](https://instagram.com/developer/clients/manage/).
1. Set up your client's [subscription](https://www.instagram.com/developer/subscriptions/) using your `https://<your-subdomain>.parseapp.com/instagram` as the callback URL and `token` as the verify_token.

Read more about using Parse objects to save your Facebook data in the [Parse JavaScript Guide](https://parse.com/docs/js/guide).
