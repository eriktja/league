<script>
	import AuthCheck from '$lib/components/AuthCheck.svelte';

	let menu = [
		{ name: 'Home', href: '/' },
		{ name: 'Leaderboard', href: '/' },
		{ name: 'Profile', href: '/' },
		{ name: 'Instructions', href: '/' },
		{ name: 'Settings', href: '/' }
	];

	const toggle = () => {
		hidden = !hidden;
	};
	let hidden = true;
</script>

<!-- HTML -->
<svelte:head>
	<title>League</title>
	<meta name="League" content="Nøøørds only. No girls allowed" />
</svelte:head>

<AuthCheck />
