<script lang="ts">
  import { Letters, RightPresses, SelectedWord, WrongPresses } from "../stores";
  import type { LettersSet } from "../types";
  import { LetterPress } from "./functions";
  import Letter from "./letter.svelte";
  import Word from "./word.svelte";
  
  let word: string;

  SelectedWord.subscribe((object) => {
    word = object;
  })

  let letters: LettersSet;

  Letters.subscribe((object) => {
    letters = object;
  });

  export let value: string;

  
</script>

{#if letters[value]}
  <kbd class="kbd text-[#3e4759]">{value}</kbd>
{:else}
  <button on:click={() => LetterPress(value)}>
    <kbd class="kbd">{value}</kbd>
  </button>
{/if}
