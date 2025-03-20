import express from 'express';
import { createContact, getAllContacts, updateContact, deleteContact } from '../controllers/contactController.js';

const router = express.Router();

// Routes for contacts
router.post('/create', createContact);
router.get('/all', getAllContacts);
router.put('/update/:id', updateContact);
router.delete('/delete/:id', deleteContact);

export default router;
