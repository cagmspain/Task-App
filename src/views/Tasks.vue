<template>
	<div class="mt-5">
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
				<button type="submit" class="mt-2 button is-info">Publicar</button>
			</div>
		</form>
	</div>
</template>
<script setup>
import { ref } from "vue";
import { useAuthStore, useTaskStore } from "../store/index";
import { newTask, supabase } from "../api/index";

const message = ref("");
const title = ref("");
const authStore = useAuthStore();
const taskStore = useTaskStore();
const id = authStore.id;

const onSubmit = async () => {
	const response = await supabase.from("task").insert({
		user_id: id,
		title: title.value,
		description: message.value,
	});
	console.log(response);
};
</script>
<style scoped></style>
