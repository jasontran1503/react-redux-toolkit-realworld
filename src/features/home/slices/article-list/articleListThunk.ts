import { createAsyncThunk } from '@reduxjs/toolkit';
import articleApi from 'features/home/articleApi';

const getArticlesGlobal = createAsyncThunk(
  'auth/getArticlesGlobal',
  async (tag: string | undefined, { rejectWithValue }) => {
    try {
      const response = await articleApi.getArticlesGlobal(tag);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const getArticlesFeed = createAsyncThunk('auth/getArticlesFeed', async (_, { rejectWithValue }) => {
  try {
    const response = await articleApi.getArticlesFeed();
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const articleListThunk = {
  getArticlesGlobal,
  getArticlesFeed
};

export default articleListThunk;
