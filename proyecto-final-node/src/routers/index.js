import { Router, request } from "express";
const router = Router()

router.get('/', (req, res) => res.render('juego', {title: 'Juego'}))
router.get('/inf', (req, res) => res.render('info', {title: 'Requisitos'}))
router.get('/work', (req, res) => res.render('workshop', {title: 'Workshop'}))
router.get('/about', (req, res) => res.render('acerca', {title: 'Acerca de'}))

export default router