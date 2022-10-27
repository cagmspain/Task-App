<template>
	<div class="section">
		<div class="container">
			<h2>Sign up for an account</h2>
			<br />
			<form @submit.prevent="handleSignup">
				<div class="field">
					<label class="label">Name</label>
					<div class="control">
						<input
							v-model="name"
							class="input"
							type="text"
							placeholder="nombre"
						/>
					</div>
				</div>
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
					<label class="label">Confirm your Password</label>
					<div class="control">
						<input
							v-model="confirmPassword"
							class="input"
							type="password"
							placeholder="password"
						/>
					</div>
				</div>
				<div class="field">
					<div class="control">
						<input class="button is-link is-fullwidth" type="submit" />
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { supabase, registro } from "../API";
const router = useRouter();
const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const emits = defineEmits(["close"]);

const verificarPasswordLongitud = () => {
	if (password.value.length < 6) {
		alert("password to short");
	} else if (password.value !== confirmPassword.value) {
		alert("password doesn't match");
		return false;
	} else {
		return true;
	}
};

const handleSignup = async () => {
	try {
		if (verificarPasswordLongitud()) {
			const response = await supabase.auth.signUp({
				email: email.value,
				password: password.value,
			});
			closeModal();
			console.log(response);

			router.push({ name: "home" });
		}
	} catch (error) {
		alert(error.error_description || error.message);
	}
};

//modal
const closeModal = () => {
	emits("close");
};
</script>
<style scoped></style>
