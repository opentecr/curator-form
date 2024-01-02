<script lang="ts">
    import { Step } from '@skeletonlabs/skeleton';

    import Card from '$components/Card.svelte';

    export let lockedState: boolean = true;
</script>

<Step locked={lockedState}>
    <svelte:fragment slot="header">Reaction</svelte:fragment>
    <Card>
        <label class="label">
            <span>Name or Identifier</span>
            <input class="input" type="text" placeholder="e.g., RHEA:10740" />
        </label>
    </Card>
</Step>
