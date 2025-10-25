import { RowDataPacket } from 'mysql2';

export interface Tag extends RowDataPacket {
  tagId: number;
  itemId: number;
  tag: string;
}

export interface TagWithUsageCount extends RowDataPacket {
  tagId: number;
  itemId: number;
  tag: string;
  usageCount?: number;
}

export interface Review extends RowDataPacket {
  reviewId: number;
  itemId: number;
  user: string;
  userDisplayName?: string;
  comment: string;
  rating: number;
}

export interface Item extends RowDataPacket {
  id: string;
  title: string;
  comment?: string;
  creator?: string;
  created?: string;
  imageURL?: string;
  averageRating?: number;
  averageRatingCount?: number;
}
