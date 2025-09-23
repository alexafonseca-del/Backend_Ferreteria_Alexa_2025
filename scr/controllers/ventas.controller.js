import { pool } from "../../db_connection.js";
// Obtener todas las categorías
export const obtenerVentas = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM ventas");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los Categorias.",
      error: error,
    });
  }
};


export const obtenerVenta = async (req, res) => {
  try {
    const id_venta = req.params.id_venta;
    const [result] = await pool.query("SELECT * FROM ventas WHERE id_venta= ?",[id_venta]
    );
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_venta} no encontrado.`,
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos de los empleados.",
    });
  }
};

export const registrarVenta = async (req, res) => {
  try {
    const { id_cliente, id_empleado, fecha_venta, total_venta} = req.body;
    const [result] = await pool.query(
      "INSERT INTO Ventas (id_cliente, id_empleado, fecha_venta, total_venta) VALUES (?, ?, ?, ?)", 
      [id_cliente, 
      id_empleado, 
      fecha_venta, 
      total_venta
    ]);
    res.status(201).json({ id_venta: result.insertId });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al registrar la categoría.",
      error: error,
    });
  }
};