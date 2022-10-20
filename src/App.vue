<template>
	<ul>
		<li>
			<router-link :to="{ name: 'home' }">Home</router-link>
		</li>
		<li>
			<router-link :to="{ name: 'login' }">Login</router-link>
		</li>
		<li>
			<router-link :to="{ name: 'signup' }">Sign Up</router-link>
		</li>
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
