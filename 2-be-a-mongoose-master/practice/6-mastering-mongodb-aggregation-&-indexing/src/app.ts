import cors from 'cors';
import express, { Application } from 'express';
import userRoutes from './app/modules/User/user.route';

const app: Application = express();

//* Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/user', userRoutes);

export default app;

/**
 * NOTE: Modular Pattern Breakdown Process:
 *
 * 1. interface --> user.interface.ts
 * 2. schema & model --> user.model.ts
 * 3. route  --> user.route.ts
 * 4. handle request, response --> user.controller.ts
 * 5. database query function --> user.services.ts
 * 
 * IMP: 
 * route will call controller --> controller will call service
 ** route.ts --> controller.ts --> services.ts

 * */
