import Deposit from "../models/deposit.js";

async function createDeposit(deposit) {
	try {
		const depositCreated = await Deposit.create(deposit);
		return depositCreated;
	} catch (error) {
		throw error;
	}
}

async function getDeposit(deposit_id) {
	try {
		return await Deposit.findByPk(deposit_id);
	} catch (error) {
		throw error;
	}
}

async function getDeposits(user_id) {
	try {
		const deposits = await Deposit.findAll({
			where: {
				user_id: user_id,
			},
		});
		return deposits;
	} catch (error) {
		throw error;
	}
}

async function deleteDeposit(deposit_id) {
	try {
		await Deposit.destroy({
			where: {
				deposit_id: deposit_id,
			},
		});
	} catch (error) {
		throw error;
	}
}

async function updateDeposit(deposit) {
	try {
		await Deposit.update(deposit, {
			where: {
				deposit_id: deposit.deposit_id,
			},
		});

		return await getDeposit(deposit.deposit_id);
	} catch (error) {
		throw error;
	}
}

export default { createDeposit, getDeposits, deleteDeposit, updateDeposit };
