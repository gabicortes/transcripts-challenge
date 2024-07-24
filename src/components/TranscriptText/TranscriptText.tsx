import { Block } from "../../types";

type TranscriptTextProps = {
    blocks?: Block[];
};

export const TranscriptText = ({ blocks }: TranscriptTextProps) => {
    if (!blocks) return null;
    return (
        <>
            {blocks.map((block) => (
                <p key={`${block.start}-${block.end}`}>{block.text}</p>
            ))}
        </>
    );
};
