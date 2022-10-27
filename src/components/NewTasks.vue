<template>
	<div class="container">
		<form @submit.prevent="onSubmit">
			<div class="field">
				<label class="label">Title</label>
				<div class="control">
					<input
						v-model="title"
						class="input"
						type="text"
						placeholder="title"
					/>
				</div>
			</div>
			<div class="control">
				<label class="label">Description</label>
				<textarea
					v-model="message"
					class="textarea"
					placeholder="Escribe un task"
				></textarea>
			</div>
			<div class="control">
				<button @click="closeModal" type="submit" class="mt-2 button is-info">
					Create!
				</button>
			</div>
		</form>
	</div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useTaskStore } from "../store/task";
import { useAuthStore } from "../store/auth";
import { newTask } from "../api";

const emits = defineEmits(["close"]);
const taskStore = useTaskStore();
const authStore = useAuthStore();
const message = ref("");
const title = ref("");
const id = authStore.id;
const email = authStore.user.email;
const onSubmit = async () => {
	const response = await newTask(id, title.value, message.value);

	const task = {
		title: title.value,
		description: message.value,
		created_at: new Date(),
	};
	taskStore.addTask(task);
	message.value = "";
	title.value = "";
};

//emit event from modal

const closeModal = () => {
	emits("close");
};
</script>
<style scoped></style>
