import depositRepositories from "../repositories/depositRepositories.js";

async function createDeposit(deposit) {
	return await depositRepositories.createDeposit(deposit);
}

// async function getDeposit(deposit_id) {
// 	return await depositRepositories.getDeposit(deposit_id);
// }
async function getDeposits(user_id) {
	return await depositRepositories.getDeposits(user_id);
}

async function deleteDeposit(deposit_id) {
	await depositRepositories.deleteDeposit(deposit_id);
}

async function updateDeposit(deposit) {
	return await depositRepositories.updateDeposit(deposit);
}

export default { createDeposit, getDeposits, deleteDeposit, updateDeposit };
