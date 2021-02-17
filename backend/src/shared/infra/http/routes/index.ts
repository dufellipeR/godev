import personRouter from '@modules/person/infra/http/routes/person.routes';
import { Router } from 'express';


const routes = Router();

routes.use('/person', personRouter);


export default routes;
