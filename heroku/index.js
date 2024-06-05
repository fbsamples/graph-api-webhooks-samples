/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.json());

const VERIFY_TOKEN = 'YOUR_VERIFY_TOKEN';

// Route pour la vérification du webhook
app.get('/webhook', (req, res) => {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token) {
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);
        } else {
            res.sendStatus(403);
        }
    }
});

// Route pour gérer les événements
app.post('/webhook', (req, res) => {
    const body = req.body;

    if (body.object === 'page') {
        body.entry.forEach(entry => {
            const webhook_event = entry.messaging[0];
            console.log(webhook_event);

            // Gérer les événements de la page ici

            // Exemple: Si un message est posté, nous pourrions vouloir le modifier
            if (webhook_event.message) {
                const message_id = webhook_event.message.mid;

                // Appel à l'API Graph de Facebook pour modifier le message
                request({
                    uri: `https://graph.facebook.com/v20.0/${message_id}`,
                    qs: { access_token: 'EAFzlgpi4cQMBOzDXAFaeRC7Gdk3Esdl2HCJvABxHQpFZAqSBo0ZBhudFSqcjODwP4hbPh4F9W044lZCI2RW3ZATgiCRRchU5FIjI2FEY6uBAIffCw2R8mdUfWidyOlgJnWxWZAHiwWZBB4IQbF1Y9dPgvnklIIylS0ffVeO1wjtlrXZCYNIAENBbEbeRZC11xNIZD' },
                    method: 'POST',
                    json: {
                        message: 'Votre nouveau message modifié'
                    }
                }, (error, response, body) => {
                    if (!error && response.statusCode == 200) {
                        console.log('Message modifié avec succès');
                    } else {
                        console.error('Erreur lors de la modification du message:', error);
                    }
                });
            }
        });

        res.status(200).send('EVENT_RECEIVED');
    } else {
        res.sendStatus(404);
    }
});

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
