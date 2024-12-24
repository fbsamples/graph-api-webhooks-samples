import { FastifyInstance } from 'fastify';

export async function instagram(app: FastifyInstance) {
    app.post('/instagram', async (request, reply) => {
        const body = request.body;
        console.log(JSON.stringify(body, null, 2));
    });
}