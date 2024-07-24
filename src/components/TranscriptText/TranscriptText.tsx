import { useMemo } from "react";
import { paginate } from "../../helpers";
import { Block, PaginatedResult } from "../../types";

type TranscriptTextProps = {
    blocks?: Block[];
};

export const TranscriptText = ({ blocks }: TranscriptTextProps) => {

    const paginatedResult = useMemo(() => {
        if (blocks) {
            if (blocks.length > 100) { return paginate(blocks, 1, 15) }
        }
    }, [blocks]);

    console.log(paginatedResult)

    // TODO: deberia aplicar la paginacion cuando hago la llamada a la api??
    return (
        <>
            {paginatedResult?.paginatedItems?.map((block) => (
                <p key={`${block.start}-${block.end}`}>{block.text}</p>
            ))}
        </>
    );
};
