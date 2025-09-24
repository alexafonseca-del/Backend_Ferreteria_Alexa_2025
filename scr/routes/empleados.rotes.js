import { Router } from 'express';
import {obtenerEmpleados,obtenerempleado,registrarEmpelado,eliminarEmpleado} from '../controllers/empleado.controller.js';

const router = Router();

// Obtener todas las categorías
router.get('/empleados', obtenerEmpleados);

// Obtener un empleado por ID
router.get('/empleado/:id_empleado', obtenerempleado);

router.post('/registrarempleado', registrarEmpelado);

// Ruta para eliminar un empleado
router.delete('/eliminarEmpleado/:id_empleado', eliminarEmpleado);

export default router;