<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { Moon, SunMedium } from 'lucide-svelte';

	const themes = ['light', 'dark', 'system'];
	let currentTheme: string;

	function toggleTheme(theme: string) {
		if (!themes.includes(theme)) return;

		const bodyClassList = window.document.body.classList;
		if (bodyClassList.contains(theme)) {
			theme = 'system';
		}

		window.localStorage.setItem('theme', theme);
		const oneYear = 60 * 60 * 24 * 365;
		document.cookie = `theme=${theme}; max-age=${oneYear}; path=/; SameSite=Lax`;

		window.document.body.classList.remove(...themes);
		window.document.body.classList.add(theme);
		currentTheme = theme;
	}

	onMount(() => {
		if (browser) {
			let theme = window.localStorage.getItem('theme');

			if (!theme || !themes.includes(theme)) {
				theme = 'system';
			}

			window.document.body.classList.add(theme);
			currentTheme = theme;
		}
	});
</script>

<div class="theme-switcher">
	<button class:active={currentTheme === 'light'} on:click={() => toggleTheme('light')}>
		<SunMedium size="16" />
	</button>
	<button class:active={currentTheme === 'dark'} on:click={() => toggleTheme('dark')}>
		<Moon size="16" />
	</button>
</div>

<style>
	div {
		margin-left: auto;
		font-size: var(--size-5);
		flex: 0 0 auto;
		width: fit-content;
		display: flex;
		padding: var(--space-1);
		background-color: var(--mauve-4);
		border-radius: var(--radius-full);
		border: 1px solid var(--border-normal);
	}

	button {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: var(--space-2);
		width: var(--size-9);
		height: var(--size-9);
		background-color: inherit;
		color: var(--text);
		border-radius: var(--radius-full);
		border: none;
	}
	button:hover {
		background-color: var(--background);
	}
	button.active {
		background-color: var(--mauve-1);
		color: var(--text);
		border: 1px solid var(--border-normal);
	}
</style>
