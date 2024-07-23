export type TranscriptTextProps = {
  id?: string;
};

export type Block = {
  end: number;
  start: number;
  text: string;
};

export type Transcript = {
  audioUrl: string;
  blocks: Block[];
  id: string;
  title: string;
};
