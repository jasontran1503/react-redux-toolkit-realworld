import { GenericError } from 'appModels';
import { Profile } from 'features/profile/profileModel';

export enum ArticleTab {
  FEED = 'FEED',
  GLOBAL = 'GLOBAL',
  TAG = 'TAG',
  FAVORITE = 'FAVORITE'
}

export interface TagsResponse {
  tags: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
}

export interface SingleArticleResponse {
  article: Article;
}

export interface MultipleArticlesResponse {
  articles: Article[];
  articlesCount: number;
}

export interface NewArticle {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

export interface NewArticleRequest {
  article: NewArticle;
}

export interface UpdateArticle {
  title: string;
  description: string;
  body: string;
}

export interface UpdateArticleRequest {
  article: UpdateArticle;
}

export interface ArticeListState {
  articles: Article[];
  articlesCount: number;
  articleTab: ArticleTab;
  isLoading: boolean;
  error: GenericError | null;
}

export interface ArticeDetailState {
  article: Article | null;
  isLoading: boolean;
  error: GenericError | null;
}
