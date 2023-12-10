<script lang="ts">
	import { intlFormat, getDate, getDay } from 'date-fns';
	import { config } from '../config/store';
	import { range } from '$lib/utils/array';
	import Dayblock from './dayblock.svelte';

	export let date: Date;

	const dayName = intlFormat(date, { weekday: 'short' }, { locale: $config.locale });
	const dayDate = getDate(date);
</script>

<section class="day">
	<header>
		<span class="name">
			{dayName}
		</span>
		<span class="date">
			{dayDate}
		</span>
	</header>
	<main>
		{#each range(0, 6) as i}
			<Dayblock index={i} />
		{/each}
	</main>
</section>

<style>
	.day:not(:last-child) {
		border-right: 1px solid var(--slate-4);
	}

	.day {
		display: flex;
		flex-direction: column;
	}

	header {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}

	.date {
		font-size: 2rem;
		font-weight: bold;
	}

	main {
		display: flex;
		flex-direction: column;
		width: 100%;
		flex: 1;
		padding: var(--space-3);
		gap: var(--space-3);
	}
</style>
