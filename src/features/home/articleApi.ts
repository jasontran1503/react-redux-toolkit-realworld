import axiosClient from 'app/axiosClient';
import { Tags } from './articleModel';

const getTags = () => {
  return axiosClient.get<Tags>('tags');
};

const articleApi = {
  getTags
};

export default articleApi;
