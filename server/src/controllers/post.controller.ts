import { Request, Response } from 'express'
import { ContactoAyuda } from '../models/contactForm.model'

export async function postController(req: Request, res: Response): Promise<Response> {
	try {
		const {
			nombre,
			apellido,
			usuario,
			faltaObraSocial,
			faltaEspecialidadPrestador,
			faltaPrestacion,
			otro,
			detalle,
		} = req.body;

		const nuevoPost = await ContactoAyuda.create({
			nombre,
			apellido,
			usuario,
			faltaObraSocial,
			faltaEspecialidadPrestador,
			faltaPrestacion,
			otro,
			detalle,
		});

		return res.status(201).json(nuevoPost);
	} catch(error: any){
		console.error('Error al crear un nuevo post de consulta:', error.message);
		return res.status(500).json({ error: 'Error interno del servidor' });
	}
}