import { Router } from 'express';
import { validate } from 'express-validation';
import { UserController } from 'server/src/controllers';
import { userValidation, options } from 'server/src/validations';

const router = Router();

router.get('/', validate(userValidation.getAll, options), UserController.getAll);

router.get('/:id', UserController.get);

router.post('/', validate(userValidation.create, options), UserController.create);

router.put('/:id', validate(userValidation.update, options), UserController.update);

router.patch('/:id', validate(userValidation.partialUpdate, options), UserController.partialUpdate);

router.delete('/:id', validate(userValidation.destroy, options), UserController.destroy);

export { router as userRouter };
