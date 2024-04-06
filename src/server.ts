/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import cors from 'cors';
import { todoRouter } from './routers/todoRouter';
import dotenv from 'dotenv';

dotenv.config();

export const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send(`
<html>
	<body>
	<h1>${process.env.APP_TITLE}</h1>
	<ul>
		<li>GET all todos - <a href="/todos">/todos</a></li>
	</ul>
	</body>
</html>
	`)

});

app.use('/todos', todoRouter);
