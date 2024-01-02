<script lang="ts">
    export let value: number = 3;
    const min = 1;
    const max = 5;
</script>

<div class="min-w-max w-1/2">
    <span>Uncertain</span>
    <input type="range" bind:value {min} {max} class="inline-block" />
    <span>Highly Confident</span>
</div>
