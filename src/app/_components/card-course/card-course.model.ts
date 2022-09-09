export interface courseI {
  id: number;
  description: string;
  iconUrl: string;
  longDescription: string;
  lessonCount: number,
  category: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED',
} 