import { FastifyRequest } from 'fastify';
import crypto from 'crypto';

export function xhub(request: FastifyRequest) {
    const header = request.headers['x-hub-signature'] as string;

    if (!header) {
        console.error('Missing X-Hub Signature');
        return false;
    }

    const [algorithm, sign] = header.split('=');
    const secret = process.env.APP_SECRET as string;
    const body = Buffer.from(JSON.stringify(request.body));
    const hash = crypto.createHmac(algorithm, secret).update(body).digest('hex');
    if (sign !== hash) {
        console.log('Invalid X-Hub Signature');
        return false;
    }

    return true;
}