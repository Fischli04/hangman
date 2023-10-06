import { Letters, RightPresses, SelectedWord, WrongPresses } from "../stores";
  import type { LettersSet } from "../types";
  import Letter from "./letter.svelte";
  import Word from "./word.svelte";

let letters: LettersSet;
Letters.subscribe((object) => letters = object)

let rightPresses: number;
RightPresses.subscribe((object) => rightPresses = object)

let wrongPresses: number;
WrongPresses.subscribe((object) => wrongPresses = object)

let selectedWord: string;
SelectedWord.subscribe((object) => selectedWord = object)

export function LetterPress(letter: string) {
    if(!WordComplete() && wrongPresses < 7){
      letters[letter] = true;
      Letters.set(letters);
      if(!selectedWord.includes(letter)){
        WrongPresses.increment();
      }
      else {
        RightPresses.increment();
      }
    }
  }

export function WordComplete(){
  let uniqueLetters = new Set(selectedWord).size;
  return uniqueLetters <= rightPresses;
}

/**
 * Returns the "invisible" class if `progress` has reached the `goal`.
 * @param progress Progress to reach the goal.
 * @param goal Goal the progress has to reach.
 * @returns Returns "invisible" if `progress` has reached the `goal`.
 */
export function VisibleAfter(progress: number, goal: number) {
  return progress < goal ? "invisible" : "";
}

export function visibleAfterFinished(a) {
  return WordComplete() ? "" : "invisible"
}

export function visibleBeforeFinished(a) {
  return WordComplete() ? "invisible" : "";
}