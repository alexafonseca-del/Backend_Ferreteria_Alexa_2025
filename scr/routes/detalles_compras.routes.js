import { Router } from 'express';
import {obtenerDetalles_Compras,obtenerDetalles_Compra, registrarDetallesCompras,eliminarDetalleCompra} from '../controllers/detalles_compras.controller.js';

const router = Router();

// Obtener todas las categorías
router.get('/detallescompras', obtenerDetalles_Compras);

// Obtener una categoría por ID
router.get('/detallescompra/:id_compra', obtenerDetalles_Compra);

router.post('/registrardetallescompra', registrarDetallesCompras);

// Ruta para eliminar un detalle de compra
router.delete('/eliminarDetallesCompra/:id_detalle', eliminarDetalleCompra);

export default router;