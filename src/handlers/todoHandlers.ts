export const getAllTodos = async () => {
	return new Promise((resolve) => {
		(async () => {
			const data = [
				{
					title: "go to store",
					rank: 3,
					finished: false
				},
				{
					title: "read book",
					rank: 4,
					finished: true
				},
			];
			resolve(data);
		})();
	});
};
