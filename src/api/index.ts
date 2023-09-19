import axios from 'axios';
import { IFormInput } from '../types';

const BASE_URL = import.meta.env.VITE_SERVER_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

export const sendFeedbackForm = async (data: IFormInput) => {
  // return instance.post('/api/feedback/submit', data);
  const response = await fetch(`${BASE_URL}/api/feedback/submit`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Content-Security-Policy': 'upgrade-insecure-requests',
    },
  }).then((res) => res.json());
  return response;
};

export const getEvents = (size = 5, page = 1) => {
  return instance.get(`/events?size=${size}&page=${page}`);
};

export const getPageContent = (title: string) => {
  return instance.get(`/api/article/${title}`);
};
