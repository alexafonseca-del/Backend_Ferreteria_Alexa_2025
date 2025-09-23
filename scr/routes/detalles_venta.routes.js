import { Router } from 'express';
import {obtenerDetalles_Ventas,obtenerDetalles_Venta,registrarDetallesVentas} from '../controllers/detalles_ventas.controller.js';

const router = Router();

// Obtener todas las categorías
router.get('/detallesventas', obtenerDetalles_Ventas);

// Obtener una categoría por ID
router.get('/detallesventa/:id_detalle_venta', obtenerDetalles_Venta);

router.post('/registrardetallesventa', registrarDetallesVentas);

export default router;