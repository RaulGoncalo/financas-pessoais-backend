import Sequelize from "sequelize";
import db from "../db/configDB.js";
import User from "./user.js";

const Bill = db.define(
	"bills",
	{
		bill_id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		user_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		category: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		establishment: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		amount: {
			type: Sequelize.FLOAT,
			allowNull: false,
		},
		purchase_date: {
			type: Sequelize.DATE,
			allowNull: false,
		},
		payment: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		installments: {
			type: Sequelize.INTEGER,
			allowNull: true,
		},
	},
	{ underscored: true }
);

Bill.belongsTo(User, { foreignKey: "user_id" });

export default Bill;
