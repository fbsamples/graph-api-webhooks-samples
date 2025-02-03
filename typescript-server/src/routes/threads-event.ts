import { FastifyInstance } from 'fastify';

export async function threads(app: FastifyInstance) {
    app.post('/threads', async (request, reply) => {
        const body = request.body;
        console.log(JSON.stringify(body, null, 2));
    });
}