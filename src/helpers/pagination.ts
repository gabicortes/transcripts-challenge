import { Item, PaginatedResult, PaginationInfo } from "../types";

export const paginate = (
  items: Item[],
  page: number,
  itemsPerPage: number
): PaginatedResult => {
  const start_index = (page - 1) * itemsPerPage;
  const end_index = start_index + itemsPerPage;

  const paginatedItems = items.slice(start_index, end_index);

  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginationInfo: PaginationInfo = {
    currentPage: page,
    itemsPerPage: itemsPerPage,
    totalItems: totalItems,
    totalPages: totalPages,
  };

  return { paginatedItems, paginationInfo };
};
