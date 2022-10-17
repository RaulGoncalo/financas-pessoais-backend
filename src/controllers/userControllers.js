import userServices from "../services/userServices.js";

async function createUser(req, res, next) {
	try {
		const user = req.body;

		if (!user.name || !user.email || !user.password) {
			throw new Error("Nome, email e senha são nescessários");
		}
		res.status(201).send(await userServices.createUser(user));

		logger.info(`POST /user - ${JSON.stringify(user)}`);
	} catch (error) {
		next(error);
	}
}

async function getUser(req, res, next) {
	try {
		const userId = req.params.id;

		if (!userId) {
			throw new Error("Informe o ID do usuário");
		}

		res.send(await userServices.getUser(parseInt(userId)));
		logger.info(`GET /user - ${JSON.stringify(userId)}`);
	} catch (error) {
		next(error);
	}
}

async function updateUser(req, res, next) {
	try {
		const userUpadate = req.body;

		if (
			!userUpadate.user_id ||
			!userUpadate.name ||
			!userUpadate.email ||
			!userUpadate.password
		) {
			throw new Error(
				"ID do usuário, nome, email e senha são nescessários"
			);
		}

		res.send(await userServices.updateUser(userUpadate));
		logger.info(`PUT /user - ${JSON.stringify(userUpadate)}`);
	} catch (error) {
		next(error);
	}
}

export default { createUser, getUser, updateUser };
