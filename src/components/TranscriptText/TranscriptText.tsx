import { Block } from "../../types";

type TranscriptTextProps = {
    blocks?: Block[];
    playbackTime: number;
};

export const TranscriptText = ({
    blocks,
    playbackTime,
}: TranscriptTextProps) => {
    const test = blocks?.findIndex(
        (block) => block.start <= playbackTime && block.end >= playbackTime
    );

    // TODO: deberia aplicar la paginacion cuando hago la llamada a la api??
    return (
        <article>
            {blocks?.map((block) => (
                <p key={`${block.start}-${block.end}`}>{block.text}</p>
            ))}
        </article>
    );
};
