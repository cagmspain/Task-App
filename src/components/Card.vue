<template>
	<div class="card" v-if="(estado = !task.isCreated)">
		<div v-if="!editMode">
			<header class="card-header">
				<p class="card-header-title">{{ props.task.title }}</p>
			</header>
			<div class="card-content">
				<div class="content">
					{{ props.task.description }}
				</div>
			</div>
			<footer class="card-footer">
				<button
					class="card-footer-item button is-danger is-light"
					@click="eliminateTask(props.task.id)"
				>
					Delete
				</button>
				<button
					class="card-footer-item button"
					@click="doneTask(props.task.id)"
				>
					Done
				</button>
				<button
					class="card-footer-item button"
					@click="toggleEdit(props.task.id)"
				>
					Edit
				</button>
			</footer>
		</div>
		<div v-else>
			<header class="card-header">
				<input
					v-model="title"
					type="text"
					:placeholder="props.task.title"
					class="card-header-title"
				/>
			</header>
			<div class="card-content">
				<textarea
					v-model="description"
					:placeholder="props.task.title"
					class="content"
				>
				</textarea>
			</div>
			<footer class="card-footer">
				<button
					class="card-footer-item button"
					@click="editedTask(props.task.id)"
				>
					Guardar
				</button>
				<button
					class="card-footer-item button"
					@click="toggleEdit(props.task.id)"
				>
					Cancel
				</button>
			</footer>
		</div>
	</div>

	<div class="done" v-else>
		<header class="card-header">
			<p class="card-header-title">{{ props.task.title }}</p>
		</header>
		<div class="card-content">
			<div class="content">
				{{ props.task.description }}
			</div>
		</div>
		<footer class="card-footer">
			<button
				class="card-footer-item button is-light is-danger"
				@click="eliminateTask(props.task.id)"
			>
				Delete
			</button>
			<button
				class="card-footer-item button is-primary is-light"
				@click="undoTask(props.task.id)"
			>
				Deshacer
			</button>
		</footer>
	</div>
</template>
<script setup>
import { ref, onMounted, pushScopeId } from "vue";
import { useAuthStore, useTaskStore } from "../store";

import { deleteTask, getTasks, statusTask, updateTask } from "../API";
const editMode = ref(false);
const toggleEdit = () => {
	editMode.value = !editMode.value;
};
const authStore = useAuthStore();
const taskStore = useTaskStore();
const props = defineProps({
	task: Object,
});
const eliminateTask = async (id) => {
	taskStore.setTask();
	await deleteTask(id);
	taskStore.deleteTask(id);
};
let estado = ref("");
let title = ref("");
let description = ref("");
const doneTask = async (id) => {
	estado = true;
	//taskStore.updateTask()
	await statusTask(id, estado);
	taskStore.setTask();
};
const undoTask = async (id) => {
	estado = false;
	//taskStore.updateTask()
	await statusTask(id, estado);
	taskStore.setTask();
};
const editedTask = async (id) => {
	await updateTask(id, title.value, description.value);
	taskStore.setTask();
	toggleEdit();
};
</script>
<style scoped>
.done .card-header-title {
	background-color: rgba(0, 0, 0, 0.3);
	border-radius: 5px;
	text-decoration: line-through;
}
.done .content {
	text-decoration: line-through;
}
.done .card-content {
	background-color: rgba(0, 0, 0, 0.3);
	border-radius: 5px;
}
</style>
