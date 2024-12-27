import { FastifyInstance } from 'fastify';
import { xhub } from '../utils/validate-x-hub.js';

export async function whatsapp(app: FastifyInstance) {
    app.post('/whatsapp', async (request, reply) => {
        try {
            if (!xhub(request)) {
                reply.status(401).send('Invalid X-Hub Signature');
                return;
            }

            const body = request.body;
            console.log(JSON.stringify(body, null, 2));

        } catch (error) {
            console.error(error);
            reply.status(500).send('Internal Server Error');
        }
    });
}