import User from "../models/user.js";

async function createUser(user) {
	try {
		const userCreatead = await User.create(user);
		return userCreatead;
	} catch (error) {
		throw error;
	}
}

async function getUser(userId) {
	try {
		return await User.findByPk(userId, {
			attributes: {
				exclude: ["password"],
			},
		});
	} catch (error) {
		throw error;
	}
}

async function getUserByEmail(email) {
	try {
		return await User.findOne({
			where: {
				email: email,
			},
		});
	} catch (error) {
		throw error;
	}
}

async function updateUser(user) {
	try {
		await User.update(user, {
			where: {
				user_id: user.user_id,
			},
		});
		return await getUser(user.user_id);
	} catch (error) {
		throw error;
	}
}

export default { createUser, getUser, getUserByEmail, updateUser };
