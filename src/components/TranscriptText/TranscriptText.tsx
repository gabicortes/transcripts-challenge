import classNames from "classnames";
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";
import { useRef } from "react";
import { Block } from "../../types";
import { binarySearchForPlaybackTime } from "../../helpers";
import styles from "./TranscriptText.module.css";

type TranscriptTextProps = {
    blocks?: Block[];
    playbackTime: number | undefined;
    seekToTime: (seconds: number) => void;
};

export const TranscriptText = ({
    blocks,
    playbackTime,
    seekToTime,
}: TranscriptTextProps) => {
    const virtuosoRef = useRef<VirtuosoHandle>(null);

    const getCurrentBlock = () => {
        if (playbackTime === undefined) return -1;
        return binarySearchForPlaybackTime(playbackTime, blocks);
    };

    const handleClick = (index: number, seconds: number) => {
        seekToTime(seconds);
        if (virtuosoRef.current) {
            virtuosoRef.current.scrollToIndex({
                index,
                align: 'start',
                behavior: 'smooth'
            });
        }
    };

    const currentBlockIndex = getCurrentBlock();

    return (
        <article className={styles.wrapper}>
            {blocks && (
                <Virtuoso
                    ref={virtuosoRef}
                    data={blocks}
                    itemContent={(index, block) => (
                        <p
                            className={classNames({
                                [styles.highlight]: index === currentBlockIndex,
                            })}
                            onClick={() => handleClick(index, block.start)}
                            key={`${block.start}-${block.end}`}
                        >
                            {block.text}
                        </p>
                    )}
                />
            )}
        </article>
    );
};
