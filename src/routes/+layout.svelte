<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import DarkLight from '$lib/components/DarkLight.svelte';
	import Hamburger from '$lib/components/Hamburger.svelte';
	import Title from '$lib/components/Title.svelte';
	import { user } from '$lib/firebase';
	import '../app.css';
</script>

<svelte:head>
	<title>Olympics</title>
	<meta name="League" content="Nøøørds only. No girls allowed" />
</svelte:head>

{#if $user}
	<div class="card shadow-xl">
		<div class="navbar bg-base-100 flex ">
			<div class="no-flex">
				<Hamburger />
			</div>
			<Title />

			<div class="justify-self-end">
				<a class="font-bold mr-2 hidden sm:block md:block lg:block" href="/profile">{$user.displayName}</a>
				<a class="font-bold mr-2" href="/profile"><Avatar/></a>
				<DarkLight />
			</div>
		</div>
	</div>
{/if}

<main>
	<slot />
</main>
