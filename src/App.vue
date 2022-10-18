<template>
	<div>
		<h1>MI APP TASK APP</h1>
	</div>
	<ul>
		<li><RouterLink :to="{ name: 'home' }">HOME</RouterLink></li>
		<li><RouterLink :to="{ name: 'login' }">LOGIN</RouterLink></li>
	</ul>

	<RouterView></RouterView>
</template>
<script setup>
console.log(process.env.NODE_ENV);
</script>
<style scoped></style>
