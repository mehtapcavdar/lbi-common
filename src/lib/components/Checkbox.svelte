<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let inputName = '';
	export let labelName = '';
	export let classes = '';
	export let classesForInput = '';
	export let classesForLabel = '';
	export let inputValue: boolean;
	export let required: boolean = false;
	export let testId: string;

	const dispatch = createEventDispatcher();
</script>

<div class="flex flex-row items-center mb-6 {classes}">
	<input
		id={inputName}
		{required}
		data-cy-id={testId}
		type="checkbox"
		class="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer {classesForInput}"
		bind:checked={inputValue}
		on:change={(e) => dispatch('onInputChanges', e)}
	/>
	<label class="ml-2 text-gray-900 cursor-pointer leading-6 {classesForLabel}" for={inputName}
		>{labelName}</label
	>
</div>
