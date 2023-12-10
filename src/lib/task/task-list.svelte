<script>
	import { range } from '$lib/utils/array';
	import TaskItem from './task-item.svelte';
</script>

<div class="todo-list">
	{#each range(0, 10) as i}
		<TaskItem />
	{/each}
</div>

<style>
	.todo-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}
</style>
