# Description:
#   Copyright 2015-present, Facebook, Inc.
#   All rights reserved.
#
#   This source code is licensed under the license found in the
#   LICENSE file in the root directory of this source tree.
#
#   Router for Facebook's Graph API Webhooks and Instagram's Real-time Photo Updates.
#
# Configuration:
#   FACEBOOK_APP_ACCESS_TOKEN
#   REAL_TIME_ROOM
#   WAIT_MINUTES
#
# Notes:
#   Set up your updates as descried here: https://developers.facebook.com/docs/graph-api/webhooks/
#   And here: https://www.instagram.com/developer/subscriptions/
#
#   The `verify_token` is "token".
#
# Author:
#   adamgross42

module.exports = (robot) ->

  robot.router.get ['/facebook', '/instagram'], (req, res) ->
    if req.param('hub.mode') == 'subscribe' and req.param('hub.verify_token') == 'token'
      res.send req.param('hub.challenge')
    else
      res.send 400

  robot.router.post '/facebook', (req, res) ->
    if req.body.entry[0].changes[0].value.verb == 'add' and req.body.entry[0].changes[0].value.item == 'status'
      res.send 200
      pageId = req.body.entry[0].id
      postId = req.body.entry[0].changes[0].value.post_id
      robot.http("https://graph.facebook.com/#{pageId}?access_token=" + process.env.FACEBOOK_APP_ACCESS_TOKEN)
        .header('Accept', 'application/json')
        .get() (err, res, body) ->
          body = JSON.parse body
          robot.messageRoom "#{process.env.REAL_TIME_ROOM}", "New post on #{body.name} Page: https://www.facebook.com/#{postId.split('_')[1]}."
          # Wait some time before pulling post stats
          setTimeout () ->
            robot.http("https://graph.facebook.com/#{postId.split('_')[1]}/likes?summary=true&access_token=" + process.env.FACEBOOK_APP_ACCESS_TOKEN)
              .header('Accept', 'application/json')
              .get() (err, res, body) ->
                body = JSON.parse body
                if body.summary
                  likes = body.summary.total_count
                else
                  likes = 0
                robot.messageRoom "#{process.env.REAL_TIME_ROOM}", "After #{process.env.WAIT_MINUTES} minutes, the Facebook post https://www.facebook.com/#{postId.split('_')[1]} has #{likes} likes."
          , process.env.WAIT_MINUTES * 60000

  robot.router.post '/instagram', (req, res) ->
    robot.messageRoom "#{process.env.REAL_TIME_ROOM}", "New post on Instagram."
    res.send 200
