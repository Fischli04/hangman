<script lang="ts">
  import Letter from "./letter.svelte";

  export let word: string;
</script>

<div class="flex flex-row gap-x-2 justify-center h-8">
  {#each word as char}
    <Letter letter={char}/>
  {/each}
</div>
