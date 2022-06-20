import { Router } from 'express';
import { validate } from 'express-validation';
import { ProjectController } from 'server/src/controllers';
import { projectValidation, options } from 'server/src/validations';

const router = Router();

router.get('/', validate(projectValidation.getAll, options), ProjectController.getAll);

router.get('/:projectName', ProjectController.get);

router.post('/', validate(projectValidation.create, options), ProjectController.create);

router.put('/:projectName', validate(projectValidation.update, options), ProjectController.update);

router.patch('/:projectName', validate(projectValidation.partialUpdate, options), ProjectController.partialUpdate);

router.delete('/:projectName', validate(projectValidation.destroy, options), ProjectController.destroy);

export { router as projectRouter };
