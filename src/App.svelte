<script lang="ts">
  import Hangman from "./components/hangman.svelte";
  import Keyboard from "./components/keyboard.svelte";
  import { Reveal, SelectedWord, WrongPresses } from "./stores";
  import Word from "./components/word.svelte";
  import words from "./words.json";
  import MdRefresh from "svelte-icons/md/MdRefresh.svelte";
  import MdRemoveRedEye from "svelte-icons/md/MdRemoveRedEye.svelte";

  let length = words.length;
  let word: string = "";
</script>

<main class="hero h-screen">
  <div class="flex justify-center align-middle flex-col gap-6 p-4">
    {#if $SelectedWord.length > 0}
      <!-- {$SelectedWord} -->
      <Hangman />

      <Word word={$SelectedWord} />
      {#if $WrongPresses >= 7}
        <button class="w-8 self-center" on:click={() => ($Reveal = true)}>
          <MdRemoveRedEye />
        </button>
      {/if}

      <Keyboard />
      <button on:click={() => window.location.reload()} class="w-8 self-center">
        <MdRefresh />
      </button>
    {:else}
      <div class="flex flex-row">
        <p class="text-center text-xl">Write a word or click</p>
        <p class="text-center text-xl font-mono px-1 mx-1 bg-base-200 rounded-md">Random</p>
        <p class="text-center text-xl">to pick a random word</p>
      </div>
      <div class="input-group justify-center">
        <button
          class="btn"
          on:click={() =>
            ($SelectedWord =
              words[Math.floor(Math.random() * length)].toUpperCase())}
        >
          Random
        </button>
        <input
          type="text"
          class="input border-base-300"
          bind:value={word}
          pattern="[a-zA-Z]+"
          on:keypress={(event) => {
            const key = event.keyCode;
            // debugger;
            if (key >= 65 && key <= 90) {
              word += event.key;
            } else if (key >= 97 && key <= 122) {
              word += event.key.toUpperCase();
            }
            event.preventDefault();
          }}
        />
        <button
          class="btn"
          on:click={() => ($SelectedWord = word.toUpperCase())}
        >
          Apply
        </button>
      </div>
    {/if}
  </div>
</main>
