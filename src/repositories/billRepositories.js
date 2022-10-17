import Bill from "../models/bill.js";

async function createBill(bill) {
	try {
		const billCreated = await Bill.create(bill);
		return billCreated;
	} catch (error) {
		throw error;
	}
}

async function getBill(bill_id) {
	try {
		return await Bill.findByPk(bill_id);
	} catch (error) {
		throw error;
	}
}

async function getBills(user_id) {
	try {
		const bills = await Bill.findAll({
			where: {
				user_id: user_id,
			},
		});
		return bills;
	} catch (error) {
		throw error;
	}
}

async function deleteBill(bill_id) {
	try {
		await Bill.destroy({
			where: {
				bill_id: bill_id,
			},
		});
	} catch (error) {
		throw error;
	}
}

async function updateBill(bill) {
	try {
		await Bill.update(bill, {
			where: {
				bill_id: bill.bill_id,
			},
		});

		return await getBill(bill.bill_id);
	} catch (error) {
		throw error;
	}
}

export default { createBill, getBills, deleteBill, updateBill };
