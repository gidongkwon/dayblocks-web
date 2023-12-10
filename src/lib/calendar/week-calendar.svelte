<script lang="ts">
	import { range } from '$lib/utils/array';
	import WeekDay from './week-day.svelte';
	import { startOfWeek, addDays } from 'date-fns';

	export let referenceDate: Date;

	$: startOfWeekDate = startOfWeek(referenceDate);
	$: weekDates = range(0, 7).map((index) => addDays(startOfWeekDate, index));
</script>

<main>
	{#each weekDates as date}
		<WeekDay {date} />
	{/each}
</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		flex: 1;
	}
</style>
