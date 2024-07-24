import { Block } from "./types";

export const binarySearchForPlaybackTime = (
  playbackTime: number,
  blocks?: Block[]
): number => {
  if (!blocks) return -1;

  let left = 0;
  let right = blocks.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (blocks[mid].start <= playbackTime && playbackTime < blocks[mid].end) {
      return mid;
    } else if (blocks[mid].start < playbackTime) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};
