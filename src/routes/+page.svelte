<script lang="ts">
	import '../app.css';
	import { Button, ButtonType, Icon, Input, Size, TRASH_SVG, toast } from '$lib';
	import SvelteToast from '$lib/components/Toast/SvelteToast.svelte';

	import Tooltip from '$lib/components/Tooltip.svelte';
	import { Direction } from '$lib/enums/direction.enum';

	const PLUS_CIRCLE_SVG: string =
		'M384 250v12c0 6.6-5.4 12-12 12h-98v98c0 6.6-5.4 12-12 12h-12c-6.6 0-12-5.4-12-12v-98h-98c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h98v-98c0-6.6 5.4-12 12-12h12c6.6 0 12 5.4 12 12v98h98c6.6 0 12 5.4 12 12zm120 6c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z';
</script>

<SvelteToast />
<Tooltip content={'mehtap'} position="bottom" align="center" animation="slide">
	<Icon
		classes={'cursor-pointer mt-0.5'}
		clickLogic={() => alert('mehtap')}
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
	direction={Direction.Down}
/>

<Input
	classes="w-full"
	labelName={'mehtap'}
	required={true}
	placeholder={'hallo'}
	testId={'nameInput'}
/>
<Button
	label={'mcEierpunsch'}
	type={ButtonType.Primary}
	additionalClasses="border-red-900"
	buttonSize={Size.Small}
	clickLogic={() => toast.success('mehtap')}
/>
