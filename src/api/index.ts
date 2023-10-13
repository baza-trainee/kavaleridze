import axios from 'axios';
import { IFormInput } from '../types';

const BASE_URL = import.meta.env.VITE_SERVER_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

export const sendFeedbackForm = (data: IFormInput) => {
  console.log('BASE-URL from environment', BASE_URL);
  console.log('axios base url', instance.getUri());
  console.log('data', data);
  return instance.post('/api/feedback/submit', data);
};

export const getEvents = (size = 5, page = 1) => {
  return instance.get(`/events?size=${size}&page=${page}`);
};

export const getPageContent = (title: string) => {
  return instance.get(`/api/article/${title}`);
};
