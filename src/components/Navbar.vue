<template>
	<nav
		class="navbar container is-transparent"
		role="navigation"
		aria-label="main navigation"
	>
		<div class="navbar-brand">
			<router-link class="navbar-item" :to="{ name: 'home' }">
				<img src="../assets/logo.png" alt="logo" height="28" />
			</router-link>
			<a
				role="button"
				@click="toggleMenu"
				class="navbar-burger"
				:class="{ 'is-active': isOpen }"
				aria-label="menu"
				aria-expanded="false"
				data-target="navbarBasicExample"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>
		<div
			id="navbarBasicExample"
			class="navbar-menu"
			:class="{ 'is-active': isOpen }"
		>
			<div class="navbar-start">
				<router-link class="navbar-item" :to="{ name: 'home' }"
					>Home</router-link
				>
				<router-link class="navbar-item" :to="{ name: 'tasks' }"
					>Tasks</router-link
				>
				<router-link class="navbar-item" :to="{ name: 'login' }"
					>Login</router-link
				>
				<router-link class="navbar-item" :to="{ name: 'signup' }"
					>Sign Up</router-link
				>
			</div>
		</div>
	</nav>
</template>
<script setup>
import { ref } from "vue";
const isOpen = ref(false);
const toggleMenu = () => {
	isOpen.value = !isOpen.value;
};
</script>
<style scoped>
.navbar {
	background-color: transparent;
}

.navbar-start {
	flex: 1;
	justify-content: flex-end;
}
</style>
