<script lang="ts">
	import { user } from '$lib/firebase';
    
    export let size: string = "10";
</script>

<div class="inline-flex">
    <img class="rounded-full h-{size} w-{size}" src={$user?.photoURL} alt="Profile" />
</div>
