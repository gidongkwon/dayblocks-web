<script lang="ts">
	import { intlFormat, getDate, getDay } from 'date-fns';
	import { config } from '../config/store';
	import { range } from '$lib/utils/array';

	export let date: Date;

	const dayName = intlFormat(date, { weekday: 'short' }, { locale: $config.locale });
	const dayDate = getDate(date);
</script>

<section>
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
			<div class="dayblock"></div>
		{/each}
	</main>
</section>

<style>
	section:not(:last-child) {
		border-right: 1px solid var(--slate-4);
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

	.dayblock {
		/* position: relative; */
		width: calc(100% - 1.6rem - 2px);
		padding: 0.8rem;
		border: 1px solid;
	}

	main {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
</style>
