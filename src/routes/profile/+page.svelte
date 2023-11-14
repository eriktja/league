<script lang="ts">
	import AuthCheck from '$lib/components/AuthCheck.svelte';
	import Avatar from '$lib/components/Avatar.svelte';
	import type { PageData } from './$types';
	import { db, user } from '$lib/firebase';
	import { doc, getDoc, writeBatch } from 'firebase/firestore';
    
	export let data: PageData;

	let username = '';
	let loading = false;
	let isAvailable = false;

	let debounceTimer: NodeJS.Timeout;

	async function checkAvailability() {
		isAvailable = false;
		clearTimeout(debounceTimer);

		loading = true;

		debounceTimer = setTimeout(async () => {
			console.log('checking availability of', username);

			const ref = doc(db, 'usernames', username);
			const exists = await getDoc(ref).then((doc) => doc.exists());

			isAvailable = !exists;
			loading = false;
		}, 500);
	}

	async function confirmUsername() {
		console.log('confirming username', username);
		const batch = writeBatch(db);
		batch.set(doc(db, 'usernames', username), { uid: $user?.uid });
		batch.set(doc(db, 'users', $user!.uid), {
			username,
			photoUrl: $user?.photoURL ?? null,
			published: true
		});

		await batch.commit();

		username = '';
		isAvailable = false;
	}
</script>

<AuthCheck>
	<div class="flex items-center justify-center h-screen w-auto">
		<div class="w-96 bg-base-100 flex flex-col p-20 items-center">
			<Avatar size="20"/>
			<div>
				<h1>Welcome, {$user?.displayName}</h1>
			</div>

			<div class="mt-5">
				<form class="flex flex-col items-center" on:submit|preventDefault={confirmUsername}>
					<input
						type="text"
						placeholder="Username"
						class="input input-bordered w-full max-w-xs"
						bind:value={username}
						on:input={checkAvailability}
					/>

                    {#if isAvailable}
                        <div class="badge badge-success">Username available</div>
                    {:else if loading && username.length > 0}
                    <div class="badge badge-primary">
                        Checking 
                        <span class="loading loading-infinity loading-xs"></span>
                    </div>
                    {:else if username.length > 0}
                        <div class="badge badge-warning">Username not available</div>
                    {/if}

					<button class="btn btn-success mt-5 mb-6" disabled={!isAvailable && loading || username.length == 0}>Confirm username @{username} </button>
				</form>
			</div>
		</div>
	</div>
</AuthCheck>
