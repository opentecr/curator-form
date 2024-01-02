<script lang="ts">
    import { Step } from '@skeletonlabs/skeleton';

    import ConfidenceRangeInput from '$components/ConfidenceRangeInput.svelte';
    import Card from '$components/Card.svelte';
    import MeasurementInput from '$components/MeasurementInput.svelte';

    export let lockedState: boolean = true;
</script>

<Step locked={lockedState}>
    <svelte:fragment slot="header">Curated Measurements</svelte:fragment>
    <Card>
        <header class="card-header h3 text-center"><p class="">Measurement</p></header>
        <section>
            <fieldset class="flex flex-col gap-x-4 gap-y-4">
                <MeasurementInput label="Equilibrium Constant" />
                <MeasurementInput label="Hydrogen Potential (pH)" />
                <MeasurementInput label="Magnesium Potential (pMg)" />
                <MeasurementInput label="Temperature" choices={['K', '°C', 'F']} />
                <MeasurementInput label="Ionic Strength" hasFreeUnit={true} />
            </fieldset>
        </section>
    </Card>
</Step>
