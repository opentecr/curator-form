<script lang="ts">
    export let hasFreeUnit: boolean = false;
    export let choices: string[] = [];
    export let min: number | null = null;
    export let max: number | null = null;
    export let value: number;
    export let unit: string;

    let selected: string;

    if (choices.length > 0) {
        selected = choices[0];
    }
</script>

{#if hasFreeUnit}
    <div class="flex flex-row gap-x-2 min-w-max w-1/2">
        <input class="input w-4/5" type="number" bind:value placeholder="" />
        <input class="input w-1/5" type="text" bind:value={unit} placeholder="Unit" />
    </div>
{:else if choices.length == 0}
    <div class="min-w-max w-1/2">
        <input class="input" type="number" bind:value placeholder="" />
    </div>
{:else}
    <div class="min-w-max w-1/2 input-group input-group-divider grid-cols-[1fr_auto]">
        <input class="input" type="number" bind:value placeholder="" />
        <select
            bind:value={selected}
            on:change={() => {
                unit = selected;
            }}
        >
            {#each choices as choice}
                <option>{choice}</option>
            {/each}
        </select>
    </div>
{/if}
