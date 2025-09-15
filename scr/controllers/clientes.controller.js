import { pool } from "../../db_connection.js";
// Obtener todas las categorías
export const obtenerClientes = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM clientes");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los Categorias.",
      error: error,
    });
  }
};

export const obtenerCliente = async (req, res) => {
  try {
    const id_cliente = req.params.id_cliente;
    const [result] = await pool.query("SELECT * FROM clientes WHERE id_cliente= ?",[id_cliente]
    );
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_cliente} no encontrado.`,
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos de los clientes.",
    });
  }
};


export const registrarCliente = async (req, res) => {
  try {
    const { primer_nombre, segundo_nombre,primer_apellido, segundo_apellido, celular, direccion, cedula } = req.body;
    const [result] = await pool.query(
      "INSERT INTO clientes (primer_nombre,segundo_nombre,primer_apellido,segundo_apellido, celular, direccion, cedula) VALUES (?, ?,?,?,?,?,?)" ,
      [primer_nombre, 
      segundo_nombre,
      primer_apellido, 
      segundo_apellido, 
      celular, 
      direccion, 
      cedula]
    );
    res.status(201).json({ id_cliente: result.insertId });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al registrar la categoría.",
      error: error,
    });
  }
};