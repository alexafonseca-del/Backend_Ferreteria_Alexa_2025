import { Router } from 'express';
import {obtenerVentas,obtenerVenta,registrarVenta,eliminarVenta} from '../controllers/ventas.controller.js';

const router = Router();

// Obtener todas las categorías
router.get('/ventas', obtenerVentas);
// Obtener una categoría por ID
router.get('/venta/:id_venta', obtenerVenta);

router.post('/registrarventa', registrarVenta);

// Ruta para eliminar una venta
router.delete('/eliminarventa/:id_venta', eliminarVenta);

export default router;