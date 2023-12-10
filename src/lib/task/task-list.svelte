<script>
	import { v4 as uuidv4 } from 'uuid';
	import { tasks } from './store';
	import TaskItem from './task-item.svelte';
	import { PlusIcon } from 'lucide-svelte';

	function addTask() {
		$tasks = [
			...$tasks,
			{
				id: uuidv4(),
				type: 'once',
				title: '',
				description: '',
				completion: [],
			},
		];
	}
</script>

<div class="todo-list">
	<ul>
		{#each $tasks as _, i}
			<TaskItem index={i} />
		{/each}
	</ul>
	<button class="add-button" on:click={addTask}>
		<PlusIcon size="20" />할 일 추가
	</button>
</div>

<style>
	.todo-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}

	.add-button {
		display: flex;
		font-size: var(--size-5);
		/* justify-content: center; */
		align-items: center;
		gap: var(--space-4);
	}

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		margin-bottom: var(--space-3);
	}
</style>
