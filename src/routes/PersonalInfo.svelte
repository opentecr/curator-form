<script lang="ts">
    import { Step } from '@skeletonlabs/skeleton';

    import logoBW from '$lib/assets/icons/ORCIDiD_iconbwvector.svg';

    export let lockedState: boolean = true;
    export let allowCustomName: boolean = false;
</script>

<Step locked={lockedState}>
    <svelte:fragment slot="header">Personal Info</svelte:fragment>
    <label class="label">
        <span
            >ORCID <img
                alt="The ORCID logo in black and white."
                src={logoBW}
                class="orcid-logo"
            /></span
        >
        <input class="input" type="text" placeholder="0000-0000-0000-0000" />
    </label>
    <label class="label">
        <span>Name</span>
        <input class="input" type="text" placeholder="" readonly={!allowCustomName} />
    </label>
</Step>
