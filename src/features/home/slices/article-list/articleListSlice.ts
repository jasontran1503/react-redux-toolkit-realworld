import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ArticeListState, ArticleTab } from 'features/home/articleModel';
import articleListThunk from './articleListThunk';

const initialState: ArticeListState = {
  articles: [],
  articlesCount: 0,
  articleTab: ArticleTab.GLOBAL,
  isLoading: false,
  error: null
};

const articleListSlice = createSlice({
  name: 'articleList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get articles global
      .addCase(articleListThunk.getArticlesGlobal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(articleListThunk.getArticlesGlobal.fulfilled, (state, action) => {
        if (action.payload) {
          state.isLoading = false;
          state.articles = action.payload.articles;
          state.articlesCount = action.payload.articlesCount;
          state.articleTab = ArticleTab.GLOBAL;
        }
      })

      // Get articles feed
      .addCase(articleListThunk.getArticlesFeed.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(articleListThunk.getArticlesFeed.fulfilled, (state, action) => {
        if (action.payload) {
          state.isLoading = false;
          state.articles = action.payload.articles;
          state.articlesCount = action.payload.articlesCount;
          state.articleTab = ArticleTab.FEED;
        }
      });
  }
});

export const articleListActions = articleListSlice.actions;

export const selectArticles = (state: RootState) => state.articleList.articles;
export const selectLoading = (state: RootState) => state.articleList.isLoading;
// export const selectErrors = (state: RootState) => state.auth.error?.errors;

const articleListReducer = articleListSlice.reducer;
export default articleListReducer;
