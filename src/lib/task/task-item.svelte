<script lang="ts">
	import { tasks } from './store';

	export let index: number;
</script>

<li class="todo-item">
	<input class="title" bind:value={$tasks[index].title} placeholder="할 일 제목" />
</li>

<style lang="postcss">
	.todo-item {
		border-radius: var(--radius-1);
		background: var(--elevation-1);
		border: 1px solid var(--slate-3);
		padding: var(--space-5);
		list-style: none;
	}

	.title {
		padding: 0;
		margin: 0;
		background-color: transparent;
		border: none;
		font-size: var(--size-6);
	}
</style>
