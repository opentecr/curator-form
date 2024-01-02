<script lang="ts">
    export let hasFreeUnit: boolean = false;
    export let choices: string[] = [];
    export let min: number | null = null;
    export let max: number | null = null;
</script>

{#if hasFreeUnit}
    <div class="flex flex-row gap-x-2 min-w-max w-1/2">
        <input class="input w-4/5" type="number" placeholder="" />
        <input class="input w-1/5" type="text" placeholder="Unit" />
    </div>
{:else if choices.length == 0}
    <div class="min-w-max w-1/2">
        <input class="input" type="number" placeholder="" />
    </div>
{:else}
    <div class="min-w-max w-1/2 input-group input-group-divider grid-cols-[1fr_auto]">
        <input class="input" type="number" placeholder="" />
        <select>
            {#each choices as choice}
                <option>{choice}</option>
            {/each}
        </select>
    </div>
{/if}
