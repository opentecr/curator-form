<script lang="ts">
    import { get } from 'svelte/store';
    import { CodeBlock } from '@skeletonlabs/skeleton';
    import { Stepper } from '@skeletonlabs/skeleton';

    import { currentCuratedMeasurement } from '$lib/stores';

    import PersonalInfo from './PersonalInfo.svelte';
    import Publication from './Publication.svelte';
    import Reaction from './Reaction.svelte';
    import CuratedMeasurements from './CuratedMeasurements.svelte';

    let lockedState: boolean = false;
    let isComplete: boolean = false;
    let curatedMeasurement: string = '';

    function onCompleteHandler(event: Event): void {
        curatedMeasurement = JSON.stringify(
            get(currentCuratedMeasurement),
            undefined,
            2
        );
        isComplete = true;
    }
</script>

{#if isComplete}
    <CodeBlock language="json" code={curatedMeasurement}></CodeBlock>
{:else}
    <Stepper on:complete={onCompleteHandler} class="min-w-min w-3/4 p-4">
        <PersonalInfo {lockedState} />
        <Publication {lockedState} />
        <Reaction {lockedState} />
        <CuratedMeasurements {lockedState} />
    </Stepper>
{/if}
