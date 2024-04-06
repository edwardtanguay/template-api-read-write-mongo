import mongoose from 'mongoose';

export const todoSchema = new mongoose.Schema(
	{
		title: String,
		stars: Number,
		finished: Boolean
	},
	{
		collection: 'todos',
		timestamps: true,
		versionKey: false,
	}
);

export const Todo = mongoose.model('Todo', todoSchema);