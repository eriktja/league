<script lang="ts">
	import AuthCheck from '$lib/components/AuthCheck.svelte';
	import { user } from '$lib/firebase';
	import { redirect } from '@sveltejs/kit';
	import { onMount } from 'svelte';



	const toggle = () => {
		hidden = !hidden;
	};
	let hidden = true;

	onMount(() => {
		if (!$user) {
			const a = document.createElement('a');
			a.href = '/login';
			a.click();
		}
	});
</script>

<!-- HTML -->

<AuthCheck />

<div class="card">
</div>