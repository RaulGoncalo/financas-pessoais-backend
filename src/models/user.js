import Sequelize from "sequelize";
import db from "../db/configDB.js";

const User = db.define(
	"users",
	{
		user_id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	},
	{ underscored: true }
);

export default User;
