<script>
	import NavLink from '$lib/components/NavLink.svelte';

	import { base } from '$app/paths';
</script>

<header>
	<div class="container">
		<nav>
			<NavLink href="{base}/user">User</NavLink>
			<NavLink href="{base}/professional">Professional</NavLink>
			<NavLink href="{base}/provider">Provider</NavLink>
		</nav>
	</div>
</header>