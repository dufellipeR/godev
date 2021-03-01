import balanceRouter from '@modules/person/infra/http/routes/balance.routes';
import personRouter from '@modules/person/infra/http/routes/person.routes';
import roomRouter from '@modules/room/infra/http/routes/room.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/room', roomRouter);
routes.use('/person', personRouter);
routes.use('/balance', balanceRouter);

export default routes;
