import { createAsyncThunk } from '@reduxjs/toolkit';
import articleApi from 'features/home/articleApi';
import { NewArticle, UpdateArticle } from 'features/home/articleModel';

const getArticle = createAsyncThunk(
  'auth/getArticle',
  async (slug: string, { rejectWithValue }) => {
    try {
      const response = await articleApi.getArticle(slug);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const deleteArticle = createAsyncThunk(
  'auth/deleteArticle',
  async (slug: string, { rejectWithValue }) => {
    try {
      const response = await articleApi.deleteArticle(slug);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const createArticle = createAsyncThunk(
  'auth/createArticle',
  async (newArticle: NewArticle, { rejectWithValue }) => {
    try {
      const response = await articleApi.createArticle(newArticle);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const updateArticle = createAsyncThunk(
  'auth/updateArticle',
  async (
    { slug, updateArticle }: { slug: string; updateArticle: UpdateArticle },
    { rejectWithValue }
  ) => {
    try {
      const response = await articleApi.updateArticle(slug, updateArticle);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const articleDetailThunk = {
  getArticle,
  deleteArticle,
  createArticle,
  updateArticle
};

export default articleDetailThunk;
