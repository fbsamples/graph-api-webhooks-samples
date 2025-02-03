import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export async function subscribe(app: FastifyInstance) {
    const handler = async (request: FastifyRequest, reply: FastifyReply) => {
        const query = request.query as { [key: string]: string };
        const mode = query['hub.mode'];
        const token = query['hub.verify_token'];
        const challenge = query['hub.challenge'];

        if (mode === 'subscribe' && token === process.env.TOKEN) {
            console.log('Webhook verified');
            reply.status(200).send(challenge);
        } else {
            console.error('Failed to verify webhook');
            reply.status(403).send('Failed to verify webhook');
        }
    };

    const schema = {
        schema: {
            querystring: {
                type: 'object',
                required: ['hub.mode', 'hub.verify_token', 'hub.challenge'],
                properties: {
                    'hub.mode': { type: 'string' },
                    'hub.verify_token': { type: 'string' },
                    'hub.challenge': { type: 'string' },
                },
            },
        },
    };

    app.get('/facebook', schema, handler);
    app.get('/instagram', schema, handler);
    app.get('/threads', schema, handler);
    app.get('/whatsapp', schema, handler);
};