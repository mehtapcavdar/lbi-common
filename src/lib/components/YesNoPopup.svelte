<script lang="ts">
	import { Button, Icon } from '$lib';
	import { ButtonType } from '$lib/enums/buttontype.enum';
	import { Size } from '$lib/enums/size.enum';
	import { TEST_IDS } from '$lib/enums/testconstants.enum';
	import { Commands } from '$lib/enums/yes_no_popup_commands.enum';
	import { clickOutside } from '$lib/utils/helpers';
    import { createEventDispatcher } from 'svelte/internal';

    export let belongingId: string;
    export let selectedId: string;
    export let textDeleteQuestion: string;
    export let textDeleteHeader: string;
    export let buttonDeleteYes: string;
    export let buttonDeleteNo: string;

    const CROSS_SVG: string =
	'm194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0';

    const dispatch = createEventDispatcher();

    function sendCommand(event: any, command: Commands) {
        event.preventDefault();
        event.stopPropagation(); 

        if (command === Commands.StopAction) {
            return
        }
        dispatch(command)
    }

</script>


{#if selectedId && selectedId === belongingId}
        <div data-cy-id={TEST_IDS.YesNoPopupId} id={belongingId} class="absolute cursor-default border border-solid border-amadeusgray rounded items-center bg-white top-9 right-2 z-10 w-max shadow-lg"         
        
        use:clickOutside
        on:click_outside={(e) => sendCommand(e, Commands.ActionCanceled)}>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div data-cy-id={TEST_IDS.YesNoPopupMainDivId} on:click={(e) => sendCommand(e, Commands.StopAction)} class="pointer-events-auto">
                <div class="flex pl-3 py-3 border-b-2 text-lg">
                    {textDeleteHeader}
                    <Icon
                        iconSVG={CROSS_SVG}
                        width={17} height={17}
                        classes={'absolute right-0 cursor-pointer mr-2'}
                        fill=fill-amadeusgrey
                        clickLogic={(e) => sendCommand(e, Commands.ActionCanceled)}
                    />
                </div>
                <div class="flex pl-3 py-3 border-b-2">
                    {textDeleteQuestion}
                </div>
                <div class="flex justify-around mx-4 pt-2 pb-3">
                <Button
                    label={buttonDeleteYes}
                    additionalClasses={'pointer-events-auto mr-4 w-16 w-auto'}
                    clickLogic={(e) => sendCommand(e, Commands.ActionConfirmed)}
                    type={ButtonType.OutlinePrimary}
                    buttonSize={Size.Small}
                    testingId={TEST_IDS.YesNoPopupConfirmButtonId}
                    />
                <Button
                    label={buttonDeleteNo}
                    additionalClasses={'pointer-events-auto w-16 w-auto'}
                    clickLogic={(e) => sendCommand(e, Commands.ActionCanceled)}
                    type={ButtonType.Primary}
                    buttonSize={Size.Small}
                    testingId={TEST_IDS.YesNoPopupCancelButtonId}
                    />
                </div>
            </div>    
        </div>
{/if}
<style>
    
</style>