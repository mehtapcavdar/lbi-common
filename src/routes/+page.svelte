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

	const PLUS_CIRCLE_SVG: string =
		'M384 250v12c0 6.6-5.4 12-12 12h-98v98c0 6.6-5.4 12-12 12h-12c-6.6 0-12-5.4-12-12v-98h-98c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h98v-98c0-6.6 5.4-12 12-12h12c6.6 0 12 5.4 12 12v98h98c6.6 0 12 5.4 12 12zm120 6c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z';
	
	let values;

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
		label={'mcEierpunsch'}
		additionalClasses="border-red-900"
		clickLogic={() => toast.success('hello')}
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
		<div
						slot="button"
						class="product-instance-row grid col-span-12 grid-cols-12 w-full"
					>
						<div
							class="grid col-span-10 xs:col-span-11 grid-flow-row grid-cols-10 xs:grid-cols-11 gap-1"
						>
							<div
								class="xs:pr-7 pr-6 truncate col-span-5 xs:col-span-3 cursor-default"
								data-cy-id="tableBodyRowDataProductName"
							>
								Product Name
							</div>
							<div
								class="xs:pr-6 ml-[-1.5rem] xs:ml-[-2rem] truncate col-span-5 xs:col-span-3 cursor-default"
								data-cy-id="tableBodyRowDataLicenseOwnerName"
							>
								Legal Owner Name
							</div>
							<div
								class="pr-6 ml-[-1.25rem] truncate xs:col-span-3 cursor-default hidden xs:block"
								data-cy-id="tableBodyRowDataProductInstanceName"
							>
								Product Instance name
							</div>
							<div
								class="pr-6 ml-[-1.5rem] truncate hidden xs:block xs:col-span-2 text-center cursor-default"
								data-cy-id="tableBodyRowDataNumberOfLicensees"
							>
							5
							</div>
						</div>
						<div
							class="col-span-2 xs:col-span-1 grid-cols-2 xs:grid-cols-1 flex justify-end divide-x-2 divide-slate-300 max-h-10"
						>
							<div class="px-2 flex justify-center items-center" data-cy-id="iconCopyUUID">
								<Tooltip
									content="Some tooltip text"
									position="left"
									align="center"
									animation="fade"
									testId="tooltipCopyUUID"
								>
									<Icon
										iconSVG={TRASH_SVG}
										classes={'cursor-pointer'}
										tabIndex={0}
										clickLogic={(event) => {
											event.stopPropagation();
											console.log(event)
										}}
										width={17}
										height={17}
									/>
								</Tooltip>
							</div>
						</div>
					</div>
					<div slot="body">
						You've managed it!
					</div>
	</AccordionItem>
</div>
