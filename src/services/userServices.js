import userRepositories from "../repositories/userRepositories.js";

async function createUser(user) {
	const email = await userRepositories.getUserByEmail(user.email);
	if (email) {
		throw new Error("Usuário já cadastrado");
	}
	return await userRepositories.createUser(user);
}

async function getUser(userId) {
	return await userRepositories.getUser(userId);
}

async function updateUser(user) {
	return await userRepositories.updateUser(user);
}

export default { createUser, getUser, updateUser };
