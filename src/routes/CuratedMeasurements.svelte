<script lang="ts">
    import { Step } from '@skeletonlabs/skeleton';

    import { currentCuratedMeasurement } from '$lib/stores';
    import { type IScalarMeasurement } from '$lib/types';

    import Card from '$components/Card.svelte';
    import MeasurementInput from '$components/MeasurementInput.svelte';

    export let lockedState: boolean = true;

    let equilibriumConstant: IScalarMeasurement;
    let hydrogenPotential: IScalarMeasurement;
    let magnesiumPotential: IScalarMeasurement;
    let temperature: IScalarMeasurement;
    let ionicStrength: IScalarMeasurement;

    $: {
        currentCuratedMeasurement.update((current) => {
            return {
                ...current,
                measurement: { ...current.measurement, equilibriumConstant }
            };
        });
    }

    $: {
        currentCuratedMeasurement.update((current) => {
            return {
                ...current,
                measurement: { ...current.measurement, hydrogenPotential }
            };
        });
    }

    $: {
        currentCuratedMeasurement.update((current) => {
            return {
                ...current,
                measurement: { ...current.measurement, magnesiumPotential }
            };
        });
    }

    $: {
        currentCuratedMeasurement.update((current) => {
            return {
                ...current,
                measurement: { ...current.measurement, temperature }
            };
        });
    }

    $: {
        currentCuratedMeasurement.update((current) => {
            return {
                ...current,
                measurement: { ...current.measurement, ionicStrength }
            };
        });
    }
</script>

<Step locked={lockedState}>
    <svelte:fragment slot="header">Curated Measurements</svelte:fragment>
    <Card>
        <header class="card-header h3 text-center"><p class="">Measurement</p></header>
        <section>
            <fieldset class="flex flex-col gap-x-4 gap-y-4">
                <MeasurementInput
                    label="Equilibrium Constant"
                    bind:measurement={equilibriumConstant}
                />
                <MeasurementInput
                    label="Hydrogen Potential (pH)"
                    bind:measurement={hydrogenPotential}
                />
                <MeasurementInput
                    label="Magnesium Potential (pMg)"
                    bind:measurement={magnesiumPotential}
                />
                <MeasurementInput
                    label="Temperature"
                    choices={['K', '°C', 'F']}
                    bind:measurement={temperature}
                />
                <MeasurementInput
                    label="Ionic Strength"
                    hasFreeUnit={true}
                    bind:measurement={ionicStrength}
                />
            </fieldset>
        </section>
    </Card>
</Step>
