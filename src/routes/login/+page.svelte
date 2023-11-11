<script lang="ts">
	import { onMount } from 'svelte';
	import { signInWithGoogle, logOut } from '$lib/auth/google';
	import { user } from '$lib/firebase';

	let ready = false;

	onMount(() =>
		setTimeout(() => {
			ready = true;
		}, 0)
	);

	let hidden = true;
</script>

<div class="flex items-center justify-center h-screen">
	{#if !ready}
		<div class="">
			<span class="loading loading-infinity loading-lg" />
		</div>
	{/if}
	{#if ready}
		<div class="card w-96 bg-base-100 shadow-xl">
			<figure><img src="/gaming-tournament.svg" class="" alt="Gaming-tournament logo" /></figure>
			<div class="card-body flex align-center">
				{#if $user}
					<h2 class="card-title">Welcome {$user.displayName}!</h2>
					<a class="btn btn-accent btn-lg" href="/">ENTER</a>
					<button class="btn btn-warning" on:click={logOut}>Log out</button>
				{:else}
					<h2 class="card-title">Welcome!</h2>
					<form class="flex flex-col justify-center">
						<div class="form-control w-full max-w-xs">
							<label for="email-input" class="label">
								<span class="label-text">Email</span>
							</label>
							<input
								id="email-input"
								type="text"
								placeholder="oboygutten@dnb.no"
								class="input input-bordered w-full max-w-xs"
							/>
						</div>
						<div class="form-control w-full max-w-xs">
							<label for="password-input" class="label">
								<span class="label-text">Password</span>
							</label>
							<input
								id="password-input"
								type="password"
								placeholder="Nerd123"
								class="input input-bordered w-full max-w-xs"
							/>
						</div>
						<div class="join join-vertical mt-2">
							<button class="btn btn-secondary join-item">Log in</button>
							<button class="btn btn-primary join-item" on:click={signInWithGoogle}
								>Sign in with Google</button
							>
							<a class="btn btn-accent btn-sm btn-outline join-item" href="/create-profile"
								>New account</a
							>
						</div>
					</form>
				{/if}
			</div>
		</div>
	{/if}
</div>
