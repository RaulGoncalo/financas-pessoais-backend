import billRepositories from "../repositories/billRepositories.js";

async function createBill(bill) {
	return await billRepositories.createBill(bill);
}

// async function getBill(bill_id) {
// 	return await billRepositories.getBill(bill_id);
// }
async function getBills(user_id) {
	return await billRepositories.getBills(user_id);
}

async function deleteBill(bill_id) {
	await billRepositories.deleteBill(bill_id);
}

async function updateBill(bill) {
	return await billRepositories.updateBill(bill);
}

export default { createBill, getBills, deleteBill, updateBill };
