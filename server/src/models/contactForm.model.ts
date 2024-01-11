import { Table, Model, Column, DataType } from 'sequelize-typescript'

@Table({
	timestamps: true,
	tableName: "contactoDeAyuda",
})

export class ContactoAyuda extends Model {
	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	nombre!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	apellido!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	usuario!: string;

	@Column({
		type: DataType.BOOLEAN,
		allowNull: false,
	})
	faltaObraSocial!: boolean;

	@Column({
		type: DataType.BOOLEAN,
		allowNull: false,
	})
	faltaEspecialidadPrestador!: boolean;

	@Column({
		type: DataType.BOOLEAN,
		allowNull: false,
	})
	faltaPrestacion!: boolean;

	@Column({
		type: DataType.BOOLEAN,
		allowNull: false,
	})
	otro!: boolean;

	@Column({
		type: DataType.TEXT,
		allowNull: false,
	})
	detalle!: string;
}