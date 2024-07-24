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

export interface Item {
  end: number;
  start: number;
  text: string;
}

export interface PaginationInfo {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface PaginatedResult {
  paginatedItems: Item[];
  paginationInfo: PaginationInfo;
}
