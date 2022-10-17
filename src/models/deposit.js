import Sequelize from "sequelize";
import db from "../db/configDB.js";
import User from "./user.js";

const Deposit = db.define(
	"deposits",
	{
		deposit_id: {
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
		description: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		amount: {
			type: Sequelize.FLOAT,
			allowNull: false,
		},
		payday: {
			type: Sequelize.DATE,
			allowNull: false,
		},
	},
	{ underscored: true }
);

Deposit.belongsTo(User, { foreignKey: "user_id" });

export default Deposit;
