<script lang ts>
	import AuthButton from '$lib/components/AuthButton.svelte';
</script>

<h4 class="pt-16">Log in</h4>
<div class="pt-7 flex flex-col gap-3 w-full">
	<AuthButton name="google" />
	<AuthButton name="github" />
	<AuthButton name="email" />
</div>
<div class="inline-flex gap-1.5 pt-5 text-sm">
	<p>Don't you have an account?</p>
	<a href="/signup" class="font-bold text-petia-400 hover:underline">Sign up</a>
</div>
