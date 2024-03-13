<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// App Rail (sidebar)
	import { page } from '$app/stores';
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	let currentTile: number = 0;
</script>

<!-- App Shell -->
<AppShell>
		<!-- App Bar -->
		<AppBar slot="header">
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Skeleton</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://twitter.com/SkeletonUI"
					target="_blank"
					rel="noreferrer"
				>
					Twitter
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>

	<AppRail slot="sidebarLeft">
		<AppRailAnchor href="/" selected={$page.url.pathname === '/'}>
			<svelte:fragment slot="lead">
				<i class="fa-solid fa-house"/>
			</svelte:fragment>
			<span>Home</span>
		</AppRailAnchor>

		<AppRailAnchor href="/wallet" selected={$page.url.pathname === '/wallet'}>
			<svelte:fragment slot="lead">
				<i class="fa-solid fa-wallet"/>
			</svelte:fragment>
			<span>Wallet</span>
		</AppRailAnchor>

		<AppRailAnchor href="/voting" selected={$page.url.pathname === '/voting'}>
			<svelte:fragment slot="lead">
				<i class="fa-solid fa-check-to-slot"/>
			</svelte:fragment>
			<span>Voting</span>
		</AppRailAnchor>
		
		<svelte:fragment slot="trail">
			<AppRailAnchor href="/" target="_blank" title="Account">
				(icon)
			</AppRailAnchor>
		</svelte:fragment>
	</AppRail>
	<!-- Page Route Content -->
	<slot />
</AppShell>
