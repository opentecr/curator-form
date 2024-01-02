<script lang="ts">
    import { Stepper, Step } from '@skeletonlabs/skeleton';

    import PersonalInfo from './PersonalInfo.svelte';
    import Publication from './Publication.svelte';
    import Reaction from './Reaction.svelte';
    import CuratedMeasurements from './CuratedMeasurements.svelte';

    let lockedState: boolean = false;
</script>

<Stepper class="min-w-min w-3/4 p-4">
    <PersonalInfo {lockedState} />
    <Publication {lockedState} />
    <Reaction {lockedState} />
    <CuratedMeasurements {lockedState} />
</Stepper>
