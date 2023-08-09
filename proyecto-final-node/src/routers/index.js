import { Router, request } from "express";
const router = Router()

router.get('/', (req, res) => res.render('index', {title: 'Home'}))
router.get('/contact', (req, res) => res.render('contact', {title: 'Contact'}))
router.get('/about', (req, res) => res.render('about', {title: 'About'}))

export default router