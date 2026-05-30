export interface PaginatedResponse {
    isFirstPage: boolean;
    isLastPage: boolean;
    currentPage: number;
    previousPage: number | null;
    nextPage: number | null;
    totalCount: number;
    pageCount: number;
}
export interface CursorPaginatedResponse {
    nextCursor: number | null;
    hasMore: boolean;
}
