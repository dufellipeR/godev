import personRouter from '@modules/person/infra/http/routes/person.routes';
import roomRouter from '@modules/room/infra/http/routes/room.routes';
import { Router } from 'express';


const routes = Router();

routes.use('/room', roomRouter)
routes.use('/person', personRouter);


export default routes;
