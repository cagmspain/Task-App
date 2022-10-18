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
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_KEY
);
console.log(supabase);
</script>
<style scoped></style>
