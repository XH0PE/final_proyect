import { Router, request } from "express";
const router = Router()

router.get('/', (req, res) => res.render('juego', {title: 'Juego'}))
router.get('/inf', (req, res) => res.render('info', {title: 'Requisitos'}))
router.get('/cap', (req, res) => res.render('capturas', {title: 'Capturas'}))
router.get('/about', (req, res) => res.render('acerca', {title: 'Acerca de'}))

export default router