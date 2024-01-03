<script lang="ts">
    import { Step } from '@skeletonlabs/skeleton';

    import { currentCuratedMeasurement } from '$lib/stores';

    import Card from '$components/Card.svelte';

    export let lockedState: boolean = true;

    let reactionId: string = '';

    $: if (reactionId) {
        currentCuratedMeasurement.update((current) => {
            return {
                ...current,
                reaction: { id: reactionId }
            };
        });
    }
</script>

<Step locked={lockedState}>
    <svelte:fragment slot="header">Reaction</svelte:fragment>
    <Card>
        <label class="label">
            <span>Name or Identifier</span>
            <input
                class="input"
                type="text"
                bind:value={reactionId}
                placeholder="e.g., RHEA:10740"
            />
        </label>
    </Card>
</Step>
