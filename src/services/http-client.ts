import Axios from 'axios';
import { HomeDestaqProps } from '../types';

type RequestHomeDestaq = {
  config: any;
  data: HomeDestaqProps;
  headers: any;
  request: any;
  status: any;
  statusText: any;
};

export const getHomeDestaqData = async (
  username: string,
): Promise<RequestHomeDestaq> =>
  Axios.get(`https://api.github.com/users/${username}`);
