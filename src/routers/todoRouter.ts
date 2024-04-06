import express, { Router } from 'express';
import * as todoHandlers from '../handlers/todoHandlers';

export const todoRouter = Router();

todoRouter.get('/', async (_req, res: express.Response) => {
	const todos = await todoHandlers.getAllTodos();
	res.json(todos);
});