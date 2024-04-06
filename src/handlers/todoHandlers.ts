import { Todo } from "../schemas/todoSchema";

export const getAllTodos = async () => {
	return new Promise((resolve, reject) => {
		(async () => {
			try {
				const users = await Todo.find();
				resolve(users);
			} catch (e) {
				reject({
					message: "cannot get todos"
				})
			}
		})();
	});
};
