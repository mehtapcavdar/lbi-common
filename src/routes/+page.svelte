<script lang="ts">
	import '../app.css';
	import { Button, ButtonType, Checkbox, Icon, Input, Size, TRASH_SVG, toast } from '$lib';
	import SvelteToast from '$lib/components/Toast/SvelteToast.svelte';

	import Tooltip from '$lib/components/Tooltip.svelte';
	import { Direction } from '$lib/enums/direction.enum';
	import Select from '$lib/components/Select.svelte';
	import RadioInput from '$lib/components/RadioInput.svelte';
	import UserProfileMenu from '$lib/components/UserProfileMenu.svelte';
	import AccordionItem from '$lib/components/AccordionItem.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import Tabs from '$lib/components/Tabs.svelte';
	import Search from '$lib/components/Search.svelte';
	import YesNoPopup from '$lib/components/YesNoPopup.svelte';

	const PLUS_CIRCLE_SVG: string =
		'M384 250v12c0 6.6-5.4 12-12 12h-98v98c0 6.6-5.4 12-12 12h-12c-6.6 0-12-5.4-12-12v-98h-98c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h98v-98c0-6.6 5.4-12 12-12h12c6.6 0 12 5.4 12 12v98h98c6.6 0 12 5.4 12 12zm120 6c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z';
	
	let values;
	let searchValue: string;
	let belongingId = 'a1'
	let selectedId = 'a2';

	let items = [
		{ label: 'Applications', value: 1, component: Button },
		{ label: 'Header', value: 2, component: Button },
		{ label: 'Tab 3', value: 3, component: Button }
	];
</script>

<div class="p-4">
	<Tabs {items} />
	<SvelteToast />
	<Tooltip content={'hello'} position="bottom" align="center" animation="slide">
		<Icon
			classes={'cursor-pointer mt-0.5'}
			clickLogic={() => alert('hello')}
			iconSVG={PLUS_CIRCLE_SVG}
			width={24}
			height={24}
			direction={Direction.Down}
			testId="iconCreateLegalEntity"
		/>
	</Tooltip>
	
	<Icon
		iconSVG={TRASH_SVG}
		clickLogic={() => true}
		classes={'cursor-pointer'}
		width={17}
		height={17}
		direction={Direction.Up}
	/>
	
	
	
	<Input
		classes="w-full"
		labelName={'hello'}
		required={true}
		placeholder={'hallo'}
		testId={'nameInput'}
	/>
	
	<Input
		labelName={'textarea'}
		required={true}
		textareaInput={true}
		resizableTextarea={false}
		placeholder={'hallo'}
		testId={'nameInput'}
	/>
	
	<Input
		labelName={'textarea'}
		required={true}
		textareaInput={true}
		placeholder={'hallo'}
		testId={'nameInput'}
	/>
	
	<Select classes="w-full" labelName={'hello'} placeholder={'hallo'} testId={'nameInput'} />
	
	<Button
		label={'mcEierpunsch'}
		type={ButtonType.Primary}
		additionalClasses="border-red-900"
		buttonSize={Size.Small}
		clickLogic={() => toast.success('hello')}
	/>

	<Button
		label={'mcEierpunsch'}
		additionalClasses="border-red-900"
		buttonSize={Size.Large}
		clickLogic={() => toast.success('hello')}
	/>

	<Button
		label={'Trigger YesNoPopup'}
		additionalClasses="border-red-900"
		clickLogic={() => selectedId = 'a1'}
	/>

	<YesNoPopup
		{belongingId}
		{selectedId}
		headerText="Delete"
		questionText="Do you want to delete?"
		confirmationText="Delete"
		cancelationText="Cancel"
		popupTestingId="permissionDeletionPopup"
		headerTestingId="permissionDeletionPopupHeader"
		questionTestingId="permissionDeletionPopupQuestion"
		confirmationTestingId="permissionDeletionPopupConfirmationButton"
		cancelationTestingId="permissionDeletionPopupCancelationButton"
		on:actionCanceled={() => {
			selectedId = '';
		}}
		on:actionConfirmed={() => {
			alert("DELETED!");
		}}
	/>

	<Checkbox
		labelName={'test checkbox'}
		inputName="testCheckBox"
		inputValue={false}
		isDisabled={true}
		testId="testCheckbox"
	/>
	
	<RadioInput
		labelText={'test Radio button'}
		inputError='error'
		inputName="limitedProductInstancesOption"
		options={[
			{ name: 'Yes', value: true },
			{ name: 'No', value: false }
		]}
		selectedOption='false'
		isRequired={true}
		testId='testRadioButton'
	/>

	<UserProfileMenu
		classesForDropdownButton={'gap-2'}
		dropdownLabel = {'example.sample@muster.org'}
		func = {() => alert('logout')}
		options ={
			[
				{
				"link": "/#",
				"label": "Lorem Ipsum",
				},
				{
				"link": "/#",
				"label": "Lorem Ipsum",
				},
				{
				"link": "/#",
				"label": "Lorem Ipsum",
				}
			]
		}
		funcLabel = 'Sign Out'
	/>

{#if values}
{#each values as value}
<p>
	{value}
</p>
{/each}
{/if}

<Pagination rows={[
	'hi',
	'bye',
	'lie',
	'tie',
	'fry',
	'cry',
	'pie',
	'my',
	'guy',
	'hi',
	'bye',
	'lie',
	'tie',
	'fry',
	'cry',
	'pie',
	'my',
	'guy'
]} perPage={3} bind:trimmedRows={values} />


	{#each {length: 3} as _, i}
		<AccordionItem disabled={i === 1 ? true : false}>
			<div slot="button">Click me! {i}</div>
			<div slot="body">You've clicked on the button! {i}</div>
		</AccordionItem>
	{/each}

	<AccordionItem>
		<div slot="button">Click Me!</div>
	</AccordionItem>

	<Search bind:searchValue placeholderLabel="Search here" />
	{searchValue}
</div>
