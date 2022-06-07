# Contributing to `graph-api-webhooks-samples`
We want to make contributing to this project as easy and transparent as
possible.

## Pull Requests
We actively welcome your pull requests.

1. Fork the repo and create your branch from `main`.
1. If you're adding a new sample application in a different programming language than our existing samples, please create the sample using the folder structure:
    1. The Facebook Platform (e.g. `instagram-subscriptions`).
    1. The Cloud platform to which the sample is specific, if relevant (e.g., `heroku`, `aws`).
    1. The primary programming language of the application (e.g., `nodejs`).
    1. The sample appliation name, ideally describing its purpose. If there are auxiliary languages such as shell scripts, or Infrastructure-as-Code tools like Terraform or AWS Cloud Development Kit, these could be included in the sample name. For example, an example that used AWS CDK to build an Instagram Subscritpions Webhook using AWS API Gateway and Lambda could be named `instagram-subscriptions/aws/javascript/cdk-api-gateway-lambda`.
1. If you've changed APIs, update the documentation.
1. If you haven't already, complete the Contributor License Agreement ("CLA").

## Contributor License Agreement ("CLA")
In order to accept your pull request, we need you to submit a CLA. You only need
to do this once to work on any of Facebook's open source projects.

Complete your CLA here: <https://code.facebook.com/cla>

## Issues 
We use GitHub issues to track public bugs. Please ensure your description is
clear and has sufficient instructions to be able to reproduce the issue.

Facebook has a [bounty program](https://www.facebook.com/whitehat/) for the safe
disclosure of security bugs. In those cases, please go through the process
outlined on that page and do not file a public issue.
