import 'dotenv/config';
import fastify from 'fastify';

import { subscribe } from './routes/subscribe.js';
import { facebook } from './routes/facebook-event.js';
import { instagram } from './routes/instagram-event.js';
import { threads } from './routes/threads-event.js';
import { whatsapp } from './routes/whatsapp-event.js';
import { sendText } from './routes/whatsapp-message.js';

const app = fastify({ logger: false });

app.register(subscribe);
app.register(facebook);
app.register(instagram);
app.register(threads);
app.register(whatsapp);
app.register(sendText);

async function start() {
    try {
        await app.listen({ port: 3000 });
        console.log(`Server is running at http://localhost:3000`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();