import { defineStore } from "pinia";

export const useTaskStore = defineStore("task", {
	// arrow function recommended for full type inference
	state: () => {
		return {
			//guardaremnos los task que nos de supabase
			tasks: [],
		};
	},
	actions: {
		setTask() {
			//guardaremos en el esatdo los tasks que nos de supabase
		},
		updateTask(id, task) {
			//todo modificar el estado de una task
			//encontrar el indice de la task y cambiar su contenido
		},
		deleteTask(id) {
			// todo , borrar esa task buscando el indice del id
		},
		addTask() {
			//todo modificar el estado de task haciendo un push de la task
			//el response no retorna id de las task que  se ha creado en caso de no tenerlo tendriamos que hacer el get task
		},
	},
});
