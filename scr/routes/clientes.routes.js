import { Router } from 'express';
import {obtenerClientes,obtenerCliente, registrarCliente,eliminarCliente} from '../controllers/clientes.controller.js';

const router = Router();

// Obtener todas las categorías
router.get('/clientes', obtenerClientes);

// Obtener una categoría por su ID
router.get('/cliente/:id_cliente', obtenerCliente);

// Ruta para registrar una nueva cliente
router.post('/registrarcliente', registrarCliente);

// Ruta para eliminar un cliente
router.delete('/eliminarcliente/:id_cliente', eliminarCliente);

export default router;