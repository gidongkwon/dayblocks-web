<script lang="ts">
	import '../app.css';
	import WeekCalendar from '$lib/calendar/week-calendar.svelte';
	import Modal from '$lib/common/modal.svelte';
	import type { UniversityLectureTask } from '$lib/task/types';
	import { parseEverytimeXML } from '$lib/importer/everytime';
	import TodoList from '$lib/task/task-list.svelte';
	import { ChevronLeftIcon, ChevronRightIcon, MoonIcon, SunIcon } from 'lucide-svelte';
	import ThemeSwitcher from './theme-switcher.svelte';
	import { addWeeks, format, startOfDay } from 'date-fns';

	// let showImporterModal = false;
	// function openImpoter() {
	// 	showImporterModal = true;
	// }

	let referenceDate = startOfDay(new Date());

	function showPrevWeek() {
		referenceDate = addWeeks(referenceDate, -1);
	}

	function showNextWeek() {
		referenceDate = addWeeks(referenceDate, 1);
	}

	$: yearMonth = format(referenceDate, 'yyyy. MM');
</script>

<div class="container">
	<header>
		<nav>
			<button on:click={showPrevWeek}><ChevronLeftIcon /></button>
			<p>{yearMonth}</p>
			<button on:click={showNextWeek}><ChevronRightIcon /></button>
		</nav>
		<!-- <button on:click={openImpoter}>가져오기</button> -->
		<ThemeSwitcher />
	</header>
	<aside>
		<h1>할 일</h1>
		<TodoList />
	</aside>
	<main>
		<WeekCalendar {referenceDate} />
	</main>
	<!-- {#if showImporterModal}
		<Modal bind:showModal={showImporterModal}>
			<span slot="title">에브리타임 시간표</span>
			<form class="everytime-form" on:submit|preventDefault={handleEverytimeSubmit}>
				<textarea bind:value={timeTableXMLText}></textarea>
				<button type="submit">가져오기</button>
			</form>
		</Modal>
	{/if} -->
</div>

<style lang="postcss">
	.container {
		flex: 1 1 0;
		display: grid;
		grid-template:
			'todo header' auto
			'todo calendar' 1fr
			/ 24rem 1fr;
	}
	header {
		grid-area: header;
		padding: 1em;
		display: flex;
	}

	nav {
		display: flex;
		gap: var(--space-3);
		align-items: center;

		button {
			background-color: var(--background);
			color: var(--text);
		}

		p {
			font-size: var(--size-9);
			font-weight: bold;
		}
	}

	main {
		grid-area: calendar;
		display: flex;
		justify-content: stretch;
	}

	aside {
		grid-area: todo;
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		margin: var(--space-3);
		border-radius: var(--radius-1);
		align-content: stretch;

		h1 {
			font-size: var(--size-9);
		}
	}

	/* .everytime-form {
		margin-top: var(--space-4);
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.everytime-form textarea {
		color: var(--slate-12);
		background-color: var(--slate-1);
		border-radius: 0.8rem;
		width: 100%;
		min-height: 8em;
	} */
</style>
