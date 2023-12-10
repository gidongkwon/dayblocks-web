<script lang="ts">
	import { placedTasks } from './store';
	import type { ChangeEventHandler } from 'svelte/elements';

	export let date: Date;
	export let index: number;

	const placeholder = ['오전1', '오전2', '오후1', '오후2', '저녁1', '저녁2'];

	$: key = date.toDateString();
	$: title = $placedTasks.get(key)?.get(index)?.title ?? '';

	const onTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const title = e.currentTarget.value;

		const existing = $placedTasks.get(key);
		if (!existing) {
			$placedTasks.set(key, new Map());
		}

		const target = $placedTasks.get(key)!;
		target.set(index, { title, tasks: [...(target.get(index)?.tasks ?? [])] });
		$placedTasks = $placedTasks;
	};
</script>

<div class="dayblock" data-index={index}>
	<input class="title" placeholder={placeholder[index]} value={title} on:change={onTitleChange} />
</div>

<style lang="postcss">
	.dayblock {
		padding: 0.8rem;
		border: 1px solid var(---border);
		border-radius: var(--radius-2);
		flex: 1;

		&[data-index='0'],
		&[data-index='1'] {
			background-color: var(--orange-1);
			---border: var(--orange-4);

			& .title {
				color: var(--orange-11);
				&::placeholder {
					color: var(--orange-7);
				}
			}
		}
		&[data-index='2'],
		&[data-index='3'] {
			background-color: var(--green-1);
			---border: var(--green-4);

			& .title {
				color: var(--green-11);
				&::placeholder {
					color: var(--green-7);
				}
			}
		}
		&[data-index='4'],
		&[data-index='5'] {
			background-color: var(--blue-1);
			---border: var(--blue-4);

			& .title {
				color: var(--blue-11);
				&::placeholder {
					color: var(--blue-7);
				}
			}
		}
	}

	.title {
		background-color: transparent;
		border: none;
		font-size: var(--size-9);
		width: 100%;
		min-width: none;
	}
</style>
