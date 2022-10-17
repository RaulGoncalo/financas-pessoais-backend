import billServices from "../services/billServices.js";

async function createBill(req, res, next) {
	try {
		const bill = req.body;

		if (
			!bill.name ||
			!bill.user_id ||
			!bill.category ||
			!bill.amount ||
			!bill.purchase_date ||
			!bill.payment
		) {
			throw new Error(
				"Nome, categoria, total, data e formada de pagamento da conta são obrigatórios"
			);
		}

		res.status(201).send(await billServices.createBill(bill));

		logger.info(`POST /bill - ${JSON.stringify(bill)}`);
	} catch (error) {
		next(error);
	}
}

// async function getBill(req, res, next) {
// 	try {
// 		const bill_id = req.params.id;

// 		if (!bill_id) {
// 			throw new Error("É nescessário o id da conta");
// 		}

// 		return await billServices.getBill(bill_id);
// 		logger.info(`GET /bill/id - ${JSON.stringify(bill_id)}`);
// 	} catch (error) {
// 		next(error);
// 	}
// }

async function getBills(req, res, next) {
	try {
		const user_id = req.params.userId;

		if (!user_id) {
			throw new Error("É nescessário o id do usuário");
		}

		res.send(await billServices.getBills(user_id));
		logger.info(
			`GET /bill/userId - lista de contad do user: ${JSON.stringify(
				user_id
			)}`
		);
	} catch (error) {
		next(error);
	}
}

async function deleteBill(req, res, next) {
	try {
		const bill_id = req.params.id;

		if (!bill_id) {
			throw new Error("É nescessário o id da conta");
		}

		await billServices.deleteBill(bill_id);
		res.send();

		logger.info(`DELETE /bill/id - ${JSON.stringify(bill_id)}`);
	} catch (error) {
		next(error);
	}
}

async function updateBill(req, res, next) {
	try {
		const bill = req.body;

		if (
			!bill.bill_id ||
			!bill.user_id ||
			!bill.name ||
			!bill.category ||
			!bill.amount ||
			!bill.purchase_date ||
			!bill.payment
		) {
			throw new Error(
				"ID, nome, categoria, total, data e formada de pagamento da conta são obrigatórios"
			);
		}

		res.send(await billServices.updateBill(bill));

		logger.info(`PUT /bill - ${JSON.stringify(bill)}`);
	} catch (error) {
		next(error);
	}
}

export default { createBill, getBills, deleteBill, updateBill };
