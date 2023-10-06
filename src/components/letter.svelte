<script lang="ts">
  import { Letters, Reveal } from "../stores";
  import type { LettersSet } from "../types";

  let letters: LettersSet;

  Letters.subscribe((object) => {
    letters = object;
  });

  export let letter: string;
</script>

{#if letters[letter]}
  <p class="border-b-2 w-6 text-center text-xl">{letter}</p>
{:else if $Reveal}
  <p class="border-b-2 w-6 text-center text-xl text-[#61656d]">{letter}</p>
{:else}
  <p class="border-b-2 w-6 text-center text-xl" />
{/if}
