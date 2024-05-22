import { Client } from 'fauna';

export const client = new Client({
    secret: process.env.FAUNA_KEY as string,
})