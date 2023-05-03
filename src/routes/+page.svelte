<script lang="ts">
    import "../app.css";
	import { Icon, Input, toast } from "$lib";
	import SvelteToast from "$lib/components/Toast/SvelteToast.svelte";

	import Tooltip from '$lib/components/Tooltip.svelte';
	import { Direction } from '$lib/enums/direction.enum';
	import { ButtonType } from '$lib/enums/buttontype.enum';
	import { InputTypes } from '$lib/enums/inputtypes.enum';

	const TRASH_SVG: string =
		'M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z';

	const PLUS_CIRCLE_SVG: string =
		'M384 250v12c0 6.6-5.4 12-12 12h-98v98c0 6.6-5.4 12-12 12h-12c-6.6 0-12-5.4-12-12v-98h-98c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h98v-98c0-6.6 5.4-12 12-12h12c6.6 0 12 5.4 12 12v98h98c6.6 0 12 5.4 12 12zm120 6c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z';
</script>
<SvelteToast/>
<Tooltip content={'mehtap'}
    position="bottom" 
    align="center" 
    animation="slide">
    <Icon classes={'cursor-pointer mt-0.5'} 
    clickLogic={() => alert('mehtap')}
    iconSVG={PLUS_CIRCLE_SVG} 
    width={24} height={24} direction={Direction.Down} 
    testId='iconCreateLegalEntity'/>
</Tooltip>

<Icon iconSVG={TRASH_SVG}
    clickLogic={() => true}
    classes={'cursor-pointer'}
    width={17} height={17} direction={Direction.Down}/>

<Input type={InputTypes.Number}></Input>