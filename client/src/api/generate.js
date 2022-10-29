import axios from 'axios';

const url = "http://localhost:5000/openai/";

export const generateTweet = (text) => axios.post(url + "generate-tweet", text);
export const generateTags = (text) => axios.post(url + "generate-tags", text);
export const generateThread = (text) => axios.post(url + "generate-thread", text);