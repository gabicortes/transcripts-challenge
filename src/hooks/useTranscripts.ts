import { useEffect, useState } from "react";
import axiosInstance from "../getTranscript";
import { useParams } from "react-router-dom";
import { Transcript } from "../types";

export const useTranscripts = () => {
  const { id } = useParams();

  const [transcript, setTranscript] = useState<undefined | Transcript>(
    undefined
  );

  useEffect(() => {
    const fetchTranscript = async () => {
      try {
        const response = await axiosInstance.get(`/transcripts/${id}`);
        setTranscript(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTranscript();
  }, [id]);

  return { transcript };
};
