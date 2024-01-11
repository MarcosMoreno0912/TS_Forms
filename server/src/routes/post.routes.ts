import { Router } from 'express'
const router = Router();

import { postController } from '../controllers/post.controller'

router.route('/formContact')
	.post(postController)

export default router;