import express from "express";
import { Register, getStudent, DeleteStudent, UpdateStudent } from "../Controller/Register.js";
const router = express.Router();

router.post('/register', Register);
router.get('/getStudent', getStudent);
router.delete('/DeleteStudent/:id', DeleteStudent);
router.patch('/UpdateStudent/:id', UpdateStudent);

export default router

