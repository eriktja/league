<script>
	import SideBar from '$lib/components/side-bar.svelte';
	import { Button, Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu } from 'flowbite-svelte';
	import { IconOutline, ChevronDownOutline } from 'flowbite-svelte-icons';

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

<Navbar class="bg-indigo-200">
	<NavBrand href="/">
		<img src="/heart-beer.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">League</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />

	<NavUl {hidden}>
		<NavLi href="/">Home</NavLi>
		<NavLi class="cursor-pointer">
			Stuff<ChevronDownOutline class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline" />
		</NavLi>
		<MegaMenu
			full
			items={menu}
			let:item
			ulClass="flex gap-y-4 md:gap-x-5 auto-col-max auto-row-max"
			class="bg-indigo-100 border-2 border-black-100"
		>
			<a
				href={item.href}
				class="hover:underline hover:text-primary-600 dark:hover:text-primary-500"
			>
				{item.name}
			</a>
		</MegaMenu>
	</NavUl>
</Navbar>

<!-- HTML -->
