import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import RoomController from '../controllers/RoomController';

const roomRouter = Router();
const roomController = new RoomController();

roomRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      capacity: Joi.number().required(),
      type: Joi.string().required(),
    },
  }),
  roomController.create,
);

roomRouter.get('/', roomController.list);

roomRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  roomController.show,
);

export default roomRouter;
