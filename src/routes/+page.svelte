<script lang="ts">
    import { Stepper, Step } from '@skeletonlabs/skeleton';

    import PersonalInfo from './PersonalInfo.svelte';
    import Publication from './Publication.svelte';
    import Reaction from './Reaction.svelte';
    import CuratedMeasurements from './CuratedMeasurements.svelte';

    let lockedState: boolean = false;
</script>

<Stepper>
    <PersonalInfo {lockedState} />
    <Publication {lockedState} />
    <Reaction {lockedState} />
    <CuratedMeasurements {lockedState} />
</Stepper>
