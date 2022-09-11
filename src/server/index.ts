import express from 'express';
import router from '../route';
import generateDependencies from '../dependency';

const deps = generateDependencies();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router(deps.cnsApi));

export { app, deps };