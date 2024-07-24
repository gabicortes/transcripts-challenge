import classNames from "classnames";
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

    const getCurrentBlock = () => {
        if (playbackTime === undefined) return -1;

        return binarySearchForPlaybackTime(playbackTime, blocks);
    }

    const handleClick = (seconds: number) => {
        seekToTime(seconds);
    };

    const currentBlockIndex = getCurrentBlock();

    return (
        <article className={styles.wrapper}>
            {blocks?.map((block, index) => (
                <p
                    className={classNames({
                        [styles.highlight]: index === currentBlockIndex,
                    })}
                    onClick={() => handleClick(block.start)}
                    key={`${block.start}-${block.end}`}
                >
                    {block.text}
                </p>))
            }
        </article >
    );
};


