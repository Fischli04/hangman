<script lang="ts">
  import { RightPresses, SelectedWord, WrongPresses } from "../stores";
  import cupcake from "../assets/cupcake.svg";
  import { VisibleAfter, visibleAfterFinished, visibleBeforeFinished, WordComplete } from "./functions";

</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 200 202" class="w-96">
  <line
    x1="0"
    x2="100"
    y1="200"
    y2="200"
    stroke="white"
    id="stage1"
    class={VisibleAfter($WrongPresses, 1)}
  />
  <line
    x1="50"
    x2="50"
    y1="200"
    y2="000"
    stroke="white"
    id="stage2"
    class={VisibleAfter($WrongPresses, 2)}
  />
  <g class={VisibleAfter($WrongPresses, 3)}>
    <line x1="50" x2="150" y1="0" y2="0" stroke="white" />
    <line x1="50" x2="80" y1="30" y2="0" stroke="white" />
  </g>
  <g id="man" class={visibleBeforeFinished($RightPresses)}>
    <g class={VisibleAfter($WrongPresses, 4)}>
      <line x1="150" x2="150" y1="0" y2="25" stroke="white" />
      <circle r="12.5" cx="150" cy="37.5" stroke="white" fill="none" />
      <circle r="1" cx="154" cy="36" fill="white" />
      <circle r="1" cx="146" cy="36" fill="white" />
    </g>
    <line
      x1="150"
      x2="150"
      y1="50"
      y2="100"
      stroke="white"
      class={VisibleAfter($WrongPresses, 5)}
    />
    <g class={VisibleAfter($WrongPresses, 7)}>
      <line x1="144" x2="148" y1="34" y2="38" stroke="white" />
      <line x1="148" x2="144" y1="34" y2="38" stroke="white" />
      <line x1="152" x2="156" y1="34" y2="38" stroke="white" />
      <line x1="156" x2="152" y1="34" y2="38" stroke="white" />
      <line x1="150" x2="170" y1="100" y2="150" stroke="white" />
      <line x1="150" x2="130" y1="100" y2="150" stroke="white" />
    </g>
    <g class={VisibleAfter($WrongPresses, 6)}>
      <line x1="150" x2="120" y1="50" y2="90" stroke="white" />
      <line x1="150" x2="180" y1="50" y2="90" stroke="white" />
    </g>
  </g>
  <g class={visibleAfterFinished($RightPresses)}>
    <circle r="12.5" cx="150" cy="87.5" stroke="white" fill="none" />
    <line x1="150" x2="150" y1="100" y2="150" stroke="white" />
    <line x1="150" x2="170" y1="150" y2="200" stroke="white" />
    <line x1="150" x2="130" y1="150" y2="200" stroke="white" />
    <line x1="150" x2="135" y1="100" y2="125" stroke="white" />
    <line x1="150" x2="165" y1="100" y2="125" stroke="white" />
    <image href={cupcake} x="130" y="97" width="40" height="40" />
    <line x1="135" x2="145" y1="125" y2="130" stroke="white" />
    <line x1="165" x2="155" y1="125" y2="130" stroke="white" />
    <circle r="1" cx="154" cy="86" fill="white" />
    <circle r="1" cx="146" cy="86" fill="white" />
  </g>
</svg>

<style>
  @keyframes example {
    from {
      rotate: 2deg;
    }
    to {
      rotate: -2deg;
    }
  }

  #man {
    animation-name: example;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    transform-origin: 150px 0;
  }
</style>
