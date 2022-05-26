# Webhook Sample Applications for Graph API Developers

**Summary**: When you build an App on Facebook Platforms, the platform may notify your App of an event using Webhooks, a type of HTTPS API. This repository contains sample code of applications that implement Webhook servers.

## Introduction to Graph API and Webhooks

When you [develop an Application](https://developers.facebook.com/docs/development/) (or App) using platforms built on Facebook's [Graph API](https://developers.facebook.com/docs/graph-api/), such as [Facebook Messenger Platform](https://developers.facebook.com/docs/messenger-platform/) or [WhatsApp Business Platform's Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api/), your applications often need to receive events from those platforms.

While the Graph API is an HTTPS interface by which your App can make API calls to Facebook, [Webhooks](https://developers.facebook.com/docs/graph-api/webhooks/) are a technology that allows platforms to send events as HTTPS requests back to your App.

For example, in Facebook Messenger Platform or WhatsApp Cloud API, Webhooks are essential for receiving replies to messages that you've sent, or learning that messages have been read, couldn't be delivered, etc. While not all platforms use Webhooks for event notification, many do.

# Sample Applications

These are sample applications that you can use to get started developing Apps that use Webhooks with various Facebook Platforms.

Currently, they include Facebook's [Webhooks](https://developers.facebook.com/docs/graph-api/webhooks/) product and Instagram's [Subscriptions API](https://www.instagram.com/developer/subscriptions/).

1. [Heroku](heroku) - A sample client that receives Webhook events.
1. [Hubot](hubot) - A script that messages a chat room when a Facebook Page post is published using Webhooks.

## Other Sample Applications with Webhooks

The following samples repositories also incorporate Webhook usage as part of the sample:

1. [fbsamples/messenger-bot-samples](https://github.com/fbsamples/messenger-bot-samples): a sample bot for Messenger Platform. The Webhook code is part of [`webhooks.js`](https://github.com/fbsamples/messenger-bot-samples/blob/master/account-linking/routes/webhooks.js)

## License

The sample code is available under the MIT license, as documented in [`LICENSE.md`](LICENSE.md).

## Terms of Service

As with any software that integrates with the Facebook platform, your use of this software is subject to the [Facebook Developer Principles and Policies](http://developers.facebook.com/policy/).

## Copyright

(c) Meta Platforms, Inc. and affiliates.