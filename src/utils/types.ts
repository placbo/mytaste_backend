export interface Tag {
  tagId: number;
  itemId: number;
  tag: string;
}

export interface Review {
  reviewId: number;
  itemId: number;
  user: string;
  comment: string;
  rating: number;
}
