<script>
  import { Letters } from "../stores";
  import { LetterPress } from "./functions";
  import Letter from "./kbdLetter.svelte";

  window.addEventListener("keypress", (event) => {
    let key = event.keyCode;
    if (key >= 97 && key <= 122) {
      if (!$Letters[event.key.toUpperCase()]) {
        LetterPress(event.key.toUpperCase());
      }
    }
  });
</script>

<div>
  <div class="flex justify-center flex-wrap gap-1 my-1 w-full">
    <Letter value="Q" />
    <Letter value="W" />
    <Letter value="E" />
    <Letter value="R" />
    <Letter value="T" />
    <Letter value="Z" />
    <Letter value="U" />
    <Letter value="I" />
    <Letter value="O" />
    <Letter value="P" />
  </div>
  <div class="flex justify-center gap-1 my-1 w-full">
    <Letter value="A" />
    <Letter value="S" />
    <Letter value="D" />
    <Letter value="F" />
    <Letter value="G" />
    <Letter value="H" />
    <Letter value="J" />
    <Letter value="K" />
    <Letter value="L" />
  </div>
  <div class="flex justify-center gap-1 my-1 w-full">
    <Letter value="Y" />
    <Letter value="X" />
    <Letter value="C" />
    <Letter value="V" />
    <Letter value="B" />
    <Letter value="N" />
    <Letter value="M" />
    <div class="kbd invisible" />
  </div>
</div>
