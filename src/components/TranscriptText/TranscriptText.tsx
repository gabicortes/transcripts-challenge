import classNames from "classnames";
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";
import { useEffect, useRef } from "react";
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

    const handleClick = (seconds: number) => {
        seekToTime(seconds);
    };

    const currentBlockIndex = getCurrentBlock();

    useEffect(() => {
        if (virtuosoRef.current) {
            virtuosoRef.current.scrollToIndex({
                index: currentBlockIndex,
                align: 'center',
                behavior: 'smooth'
            });
        }
    }, [currentBlockIndex])

    return (
        <article>
            {blocks && (
                <Virtuoso
                    ref={virtuosoRef}
                    data={blocks}
                    itemContent={(index, block) => (
                        <p
                            className={classNames(styles.line, {
                                [styles.highlight]: index === currentBlockIndex,
                            })}
                            onClick={() => handleClick(block.start)}
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
