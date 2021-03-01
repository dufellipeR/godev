import { Router } from 'express';
import BalanceController from '../controllers/BalanceController';

const balanceRouter = Router();
const balanceController = new BalanceController();

balanceRouter.get('/', balanceController.create);

export default balanceRouter;
