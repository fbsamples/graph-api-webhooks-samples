import { FastifyInstance } from 'fastify';
import axios from 'axios';

export async function sendText(app: FastifyInstance) {
    app.post('/message', {
        schema: {
            body: {
                type: 'object',
                required: ['phone', 'text'],
                properties: {
                    phone: { type: 'string' },
                    text: { type: 'string' },
                },
            },
        },
    },
        async (request, reply) => {
            try {
                const { phone, text } = request.body as { phone: string, text: string };

                // Send text message to the phone number
                if (phone && text) {
                    const data = {
                        messaging_product: "whatsapp",
                        recipient_type: "individual",
                        to: phone,
                        type: "text",
                        text: { // the text object
                            preview_url: false,
                            body: text
                        }
                    };
                    const config = {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${process.env.WHATSAPP_BEARER_TOKEN}`
                        }
                    }
                    const uri = `https://graph.facebook.com/v21.0/${process.env.FROM_PHONE_NUMBER_ID}/messages`
                    const response = await axios.post(uri, data, config);

                    reply.status(response.status).send(response.data);
                }

            } catch (error) {
                console.error(error);
                reply.status(500).send('Internal Server Error');
            }
        });
}