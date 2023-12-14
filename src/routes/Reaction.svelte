<script lang="ts">
    import { Step } from '@skeletonlabs/skeleton';

    export let lockedState: boolean = true;
</script>

<Step locked={lockedState}>
    <svelte:fragment slot="header">Reaction</svelte:fragment>
    <label class="label">
        <span>Name or Identifier</span>
        <input class="input" type="text" placeholder="e.g., RHEA:10740" />
    </label>
</Step>
