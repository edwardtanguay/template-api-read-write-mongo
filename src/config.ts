export const getPort = () => {
	return 4206;
};

export const dbUrl = (): string => {
	const dbUrl = process.env.DB_URL;
	if (typeof dbUrl === "string") {
		return dbUrl;
	} else {
		return "";
	}
};
