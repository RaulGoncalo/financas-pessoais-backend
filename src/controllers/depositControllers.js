import depositServices from "../services/depositServices.js";

async function createDeposit(req, res, next) {
	try {
		const deposit = req.body;

		if (
			!deposit.name ||
			!deposit.user_id ||
			!deposit.description ||
			!deposit.amount ||
			!deposit.payday
		) {
			throw new Error(
				"Nome,  id do usuario, descrição, total, data do depósito (entradas) são obrigatórios"
			);
		}

		res.status(201).send(await depositServices.createDeposit(deposit));

		logger.info(`POST /deposit - ${JSON.stringify(deposit)}`);
	} catch (error) {
		next(error);
	}
}

// async function getDeposit(req, res, next) {
// 	try {
// 		const deposit_id = req.params.id;

// 		if (!deposit_id) {
// 			throw new Error("É nescessário o id da conta");
// 		}

// 		return await depositServices.getDeposit(deposit_id);
// 		logger.info(`GET /deposit/id - ${JSON.stringify(deposit_id)}`);
// 	} catch (error) {
// 		next(error);
// 	}
// }

async function getDeposits(req, res, next) {
	try {
		const user_id = req.params.userId;

		if (!user_id) {
			throw new Error("É nescessário o id do usuário");
		}

		res.send(await depositServices.getDeposits(user_id));
		logger.info(
			`GET /deposit/userId - lista de contad do user: ${JSON.stringify(
				user_id
			)}`
		);
	} catch (error) {
		next(error);
	}
}

async function deleteDeposit(req, res, next) {
	try {
		const deposit_id = req.params.id;

		if (!deposit_id) {
			throw new Error("É nescessário o id do depósito");
		}

		await depositServices.deleteDeposit(deposit_id);
		res.send();

		logger.info(`DELETE /deposit/id - ${JSON.stringify(deposit_id)}`);
	} catch (error) {
		next(error);
	}
}

async function updateDeposit(req, res, next) {
	try {
		const deposit = req.body;
		console.log(deposit);
		if (
			!deposit.deposit_id ||
			!deposit.user_id ||
			!deposit.name ||
			!deposit.description ||
			!deposit.amount ||
			!deposit.payday
		) {
			throw new Error(
				"ID, nome, id do usuario, total, data do depósito são obrigatórios"
			);
		}

		res.send(await depositServices.updateDeposit(deposit));

		logger.info(`PUT /deposit - ${JSON.stringify(deposit)}`);
	} catch (error) {
		next(error);
	}
}

export default { createDeposit, getDeposits, deleteDeposit, updateDeposit };
