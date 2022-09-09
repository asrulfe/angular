import { Article } from '../models/article.model';
import { ArticleAction, ArticleActionType } from '../actions/article.action';

const initialState: Array<Article> = [
  {
    id: '1',
    title: 'Angular State Management with NgRx',
    author: 'Chameera Dulanga',
    publisher: 'SyncFusion'
  },
];

export function ArticleReducer(
   state: Array<Article> = initialState,
   action: ArticleAction
) {
   switch (action.type) {
     case ArticleActionType.ADD_ITEM:
       return [...state, action.payload];
     default:
       return state;
   }
}