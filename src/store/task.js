import { defineStore } from "pinia";
import { newTask, getTasks, updateTask, deleteTask } from "../API/index";

export const useTaskStore = defineStore("task", {
	// arrow function recommended for full type inference
	state: () => {
		return {
			//guardaremnos los task que nos de supabase
			tasks: [],
		};
	},
	actions: {
		async setTask() {
			const response = await getTasks();
			this.tasks = await response;
			console.log(this.tasks);
		},
		updateTask(id, task) {
			//todo modificar el estado de una task
			//encontrar el indice de la task y cambiar su contenido
			// const mapTask = this.tasks.map((elem) => {
			// 	elem.id === id;
			// 	return (elem = task);
			// });
		},
		deleteTask(id) {
			const findIndex = this.tasks.findIndex((elem) => {
				return elem.id === id;
			});
			console.log("este es el index", findIndex);
			return this.tasks.splice(findIndex, 1);
			// todo , borrar esa task buscando el indice del id
		},
		async addTask(task) {
			const response = await getTasks();
			this.tasks = await response;

			//todo modificar el estado de task haciendo un push de la task
			//el response no retorna id de las task que  se ha creado en caso de no tenerlo tendriamos que hacer el get task
		},
	},
	persist: {
		// Nos activa la persistencia del store
		enabled: true,
		strategies: [
			{
				// Key del store
				key: "task",
				// donde guarda el store
				storage: localStorage,
			},
		],
	},
});
