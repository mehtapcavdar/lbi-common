<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { clickOutside } from '../utils/clickOutside';
	import { Commands } from '../enums/yes_no_popup_commands.enum';
	import Icon from './Icon.svelte';
	import Button from './Button.svelte';
	import { ButtonType } from '../enums/buttontype.enum';
	import { Size } from '../enums/size.enum';
	import { CROSS_SVG } from '../config/constants';


	export let belongingId: string;
	export let selectedId: string;
	export let loadingOnWaitingForResponse: boolean;

	export let headerText: string;
	export let questionText: string;
	export let confirmationText: string;
	export let cancelationText: string;

	export let popupTestingId = '';
	export let headerTestingId = '';
	export let questionTestingId = '';
	export let confirmationTestingId = '';
	export let cancelationTestingId = '';

	const dispatch = createEventDispatcher();

	function sendCommand(event: any, command: Commands) {
		event.preventDefault();
		event.stopPropagation();

		if (command === Commands.StopAction) {
			return;
		}
		dispatch(command);
	}
</script>

{#if selectedId && selectedId === belongingId}
	<div
		data-cy-id={popupTestingId}
		id={belongingId}
		class="absolute cursor-default border border-solid border-amadeusgray rounded items-center bg-white top-9 right-2 z-[42] s:w-max min-w-[300px] shadow-lg"
		use:clickOutside
		on:click_outside={(e) => sendCommand(e, Commands.ActionCanceled)}
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div on:click={(e) => sendCommand(e, Commands.StopAction)} class="pointer-events-auto">
			<div data-cy-id={headerTestingId} class="flex pl-3 py-3 border-b-2 text-lg">
				{headerText}
				<Icon
					iconSVG={CROSS_SVG}
					width={17}
					height={17}
					classes={'self-center cursor-pointer ml-auto mr-2'}
					fill="#9a9a9a"
					clickLogic={(e) => sendCommand(e, Commands.ActionCanceled)}
				/>
			</div>
			<div data-cy-id={questionTestingId} class="flex p-3 py-3 border-b-2 main-question">
				{questionText}
			</div>
			<div class="flex justify-around mx-4 pt-2 pb-3">
				<Button
					label={confirmationText}
					additionalClasses={'pointer-events-auto mr-4 w-16 w-auto'}
					clickLogic={(e) => sendCommand(e, Commands.ActionConfirmed)}
					buttonSize={Size.Small}
					type={ButtonType.OutlinePrimary}
					loading={loadingOnWaitingForResponse}
					isDisabled={loadingOnWaitingForResponse}
					testingId={confirmationTestingId}
				/>
				<Button
					label={cancelationText}
					additionalClasses={'pointer-events-auto w-16 w-auto'}
					clickLogic={(e) => sendCommand(e, Commands.ActionCanceled)}
					buttonSize={Size.Small}
					isDisabled={loadingOnWaitingForResponse}
					testingId={cancelationTestingId}
				/>
			</div>
		</div>
	</div>
{/if}
