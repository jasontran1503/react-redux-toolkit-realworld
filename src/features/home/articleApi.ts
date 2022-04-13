import axiosClient from 'app/axiosClient';
import {
  MultipleArticlesResponse,
  NewArticle,
  NewArticleRequest,
  SingleArticleResponse,
  TagsResponse,
  UpdateArticle,
  UpdateArticleRequest
} from './articleModel';

const getTags = () => {
  return axiosClient.get<TagsResponse>('tags');
};

const getArticlesGlobal = (tag: string | undefined, limit = 10, offset = 0) => {
  return axiosClient.get<MultipleArticlesResponse>('articles', {
    params: {
      limit,
      offset,
      tag
    }
  });
};

const getArticlesFeed = (limit = 10, offset = 0) => {
  return axiosClient.get<MultipleArticlesResponse>('articles/feed', {
    params: {
      limit,
      offset
    }
  });
};

const getArticle = (slug: string) => {
  return axiosClient.get<SingleArticleResponse>(`articles/${slug}`);
};

const deleteArticle = (slug: string) => {
  return axiosClient.delete(`articles/${slug}`);
};

const createArticle = (newArticle: NewArticle) => {
  const newArticleRequest: NewArticleRequest = {
    article: newArticle
  };
  return axiosClient.post<SingleArticleResponse>(`articles`, newArticleRequest);
};

const updateArticle = (slug: string, updateArticle: UpdateArticle) => {
  const updateArticleRequest: UpdateArticleRequest = {
    article: updateArticle
  };
  return axiosClient.put<SingleArticleResponse>(`articles/${slug}`, updateArticleRequest);
};

const articleApi = {
  getTags,
  getArticlesGlobal,
  getArticlesFeed,
  getArticle,
  deleteArticle,
  createArticle,
  updateArticle
};

export default articleApi;
