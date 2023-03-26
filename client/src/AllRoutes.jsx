import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Questions from "./pages/Questions/Questions";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./pages/Questions/DisplayQuestion";
import Tags from "./pages/Tags/Tags";
import Users from "./pages/Users/Users";
import UserProfile from "./pages/UserProfile/UserProfile";
import SubscriptionForm from "./components/SubscriptionForm";
import Community from "./pages/Community/Community";
import CreatePost from "./pages/Community/CreatePost/CreatePost";
import MyFriends from "./pages/Community/My friends/MyFriends";
import FindPage from "./pages/Community/Find Friend/FindedFriend";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
      <Route path="/Questions/:id" element={<DisplayQuestion />} />
      <Route path="/Tags" element={<Tags />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/Users/:id" element={<UserProfile />} />
      <Route path="/Subscription" element={<SubscriptionForm />} />
      <Route path="/Community" element={<Community />} />
      <Route path="Community/CreatePost" element={<CreatePost />} />
      <Route path="Community/MyFriends" element={<MyFriends />} />
      <Route path="/FindPage" element={<FindPage />} />
    </Routes>
  );
};

export default AllRoutes;
