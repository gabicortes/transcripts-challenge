import { useEffect, useState } from "react";
import axiosInstance from "../getTranscript";
import { useParams } from "react-router-dom";
import { Block, Transcript } from "../types";

export const useTranscripts = () => {
  // const { id } = useParams();
  const id = "bk168068-93e8-4bb6-b762-dbc57d172111";
  const [transcript, setTranscript] = useState<undefined | Transcript>(
    undefined
  );
  const [blocks, setBlocks] = useState<Block[] | undefined>(undefined);

  useEffect(() => {
    const fetchTranscript = async () => {
      try {
        const response = await axiosInstance.get(`/transcripts/${id}`);
        setTranscript(response.data);
        setBlocks(response.data.blocks);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTranscript();
  }, [id]);

  return { transcript, blocks };
};
