<template>
	<div class="section">
		<div class="container">
			<form @submit.prevent="onSubmit">
				<div class="field">
					<label class="label">Email</label>
					<div class="control">
						<input
							v-model="email"
							class="input"
							type="email"
							placeholder="email"
						/>
					</div>
				</div>
				<div class="field">
					<label class="label">Password</label>
					<div class="control">
						<input
							v-model="password"
							class="input"
							type="password"
							placeholder="password"
						/>
					</div>
				</div>
				<div class="field">
					<div class="control">
						<button
							class="button is-link is-fullwidth"
							type="submit"
							placeholder="Text input"
						>
							Iniciar sesión
						</button>
					</div>
				</div>
			</form>
			<hr />
			<button class="button is-info is-fullwidth" @click="closeModal">
				Crea una cuenta
			</button>
		</div>
	</div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";
import { logIn, supabase } from "../API";
const router = useRouter();
const authStore = useAuthStore();
const email = ref("");
const password = ref("");
const emits = defineEmits(["close"]);

const onSubmit = async () => {
	try {
		const data = await logIn(email.value, password.value);
		if (data.user) {
			const id = data.user.id;
			authStore.login(email.value, password.value, id);
			router.push({ name: "home" });
		} else {
			alert("usuario o contraseña invalida");
		}
	} catch (error) {
		console.log(error.error_description || error.message);
	}
};

//modal emit
const closeModal = () => {
	emits("close");
};
</script>
<style scoped></style>
