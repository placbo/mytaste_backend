export interface TagRow {
  tagId: number;
  itemId: number;
  tag: string;
}

export interface ReviewRow {
  reviewId: number;
  itemId: number;
  user: string;
  comment: string;
  rating: number;
}
