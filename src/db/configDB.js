import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
	"postgres://vjyzampv:Z8g_QMyMY2yK0GNuPc-gBHvokejm_HED@babar.db.elephantsql.com/vjyzampv",
	{
		dialect: "postgre",
		define: {
			timestamps: false,
		},
	}
);

export default sequelize;
