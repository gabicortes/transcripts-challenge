import classNames from "classnames";
import { Block } from "../../types";
import styles from "./TranscriptText.module.css";
import { binarySearchForPlaybackTime } from "../../helpers";

type TranscriptTextProps = {
    blocks?: Block[];
    playbackTime: number;
    seekToTime: (seconds: number) => void;
};

export const TranscriptText = ({
    blocks,
    playbackTime,
    seekToTime,
}: TranscriptTextProps) => {
    const currentBlockIndex =
        blocks && binarySearchForPlaybackTime(blocks, playbackTime);

    const handleClick = (seconds: number) => {
        seekToTime(seconds);
    };

    return (
        <article>
            {blocks?.map((block, index) => (
                <p
                    className={classNames({
                        [styles.highlight]: index === currentBlockIndex,
                    })}
                    onClick={() => handleClick(block.start)}
                    key={`${block.start}-${block.end}`}
                >
                    {block.text}
                </p>
            ))}
        </article>
    );
};
