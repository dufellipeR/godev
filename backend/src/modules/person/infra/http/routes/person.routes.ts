import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import PersonController from '../controllers/PersonController';

const personRouter = Router();
const personController = new PersonController();

personRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      last_name: Joi.string(),
    },
  }),
  personController.create,
);

personRouter.get('/', personController.list);

personRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  personController.show,
);

export default personRouter;
