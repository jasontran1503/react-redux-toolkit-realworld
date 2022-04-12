import axiosClient from 'app/axiosClient';
import { MultipleArticlesResponse, SingleArticleResponse, TagsResponse } from './articleModel';

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

const articleApi = {
  getTags,
  getArticlesGlobal,
  getArticlesFeed,
  getArticle
};

export default articleApi;
