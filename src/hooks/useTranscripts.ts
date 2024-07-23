import { useEffect, useState } from "react";
import axiosInstance from "../getTranscript";

export const useTranscripts = () => {
  const [transcript, setTranscript] = useState<any>();

  //   useEffect(() => {
  //     const fetchTranscript = async () => {
  //       try {
  //         const response = await axiosInstance.get(`/transcripts/${id}`);
  //         setTranscript(response.data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };

  //     fetchTranscript();
  //   }, [id]);
};
