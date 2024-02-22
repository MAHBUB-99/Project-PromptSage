import express from 'express';
import { createDiscussion,getAllDiscussions,getDiscussionById,deleteDiscussion,updateDiscussionById } from '../controller/discussion.js';

const router = express.Router();

router.post('/create', createDiscussion);
router.get('/', getAllDiscussions);
router.get('/:id', getDiscussionById);
router.delete('/delete/:id', deleteDiscussion);
router.put('/update/:id', updateDiscussionById);
router.patch('/update/:id', updateDiscussionById);

export default router;
