import { Block } from "./types";

export const binarySearchForPlaybackTime = (
  blocks: Block[],
  playbackTime: number
): number => {
  let left = 0;
  let right = blocks.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (blocks[mid].start <= playbackTime && blocks[mid].end > playbackTime) {
      return mid;
    } else if (blocks[mid].end <= playbackTime) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};
