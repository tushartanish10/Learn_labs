import express from 'express'
import { test, signout } from '../controllers/user.controller.js'

const router = express.Router();

router.use('/test', test)
router.post('/signout', signout)

export default router;