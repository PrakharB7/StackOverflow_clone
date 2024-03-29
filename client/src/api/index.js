import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});

export const logIn = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);

export const postQuestion = (questionData) =>
  API.post("/questions/Ask", questionData);
export const getAllquestions = () => API.get("/questions/get");
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id, value) =>
  API.patch(`/questions/vote/${id}`, { value });

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered) =>
  API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered });
export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });

export const getAllUsers = () => API.get("/user/getAllUsers");
export const updateProfile = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);

export const uploadMedia = (formData) => API.post("/Post/media", formData);
export const postComment = (_id, comment) =>
  API.patch(`/Post/comment/${_id}`, comment);
export const postLike = (_id, value) => API.patch(`/Post/like/${_id}`, value);
export const fetchAllPosts = () => API.get("/Post/fetchAllPosts");
export const deletePost = (_id) => API.delete(`/Post/delete/${_id}`);

export const addFriend = (_id, name) => API.patch(`/friend/add/${_id}`, name);
export const acceptRequest = (_id, userDetails) =>
  API.patch(`/friend/accept/${_id}`, userDetails);
export const removeRequest = (_id, userId) =>
  API.patch(`/friend/reject/${_id}`, userId);
export const removeFriend = (_id, userId) =>
  API.patch(`/friend/remove/${_id}`, userId);
