import * as config from "./config.js";
import { app } from "./server.js";
import mongoose from 'mongoose';

(async () => {
	try {
		mongoose.set("strictQuery", false);
		await mongoose.connect(config.dbUrl());
		app.listen(config.getPort(), () => {
			console.log(`API running at: http://localhost:${config.getPort()}`);
		});
	} catch (error) {
		console.log(`SERVER IS NOT RUNNING BECAUSE: ${error.message}`);
	}
})();
