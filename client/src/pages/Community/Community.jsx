import React, { useEffect, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";

import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
// import AllPosts from './Posts/AllPosts'
import FindFriend from "./Find Friend/FindFriend";
import { fetchAllPosts } from "../../actions/Post";
import { setCurrentUser } from "../../actions/currentUser";
import { fetchAllUsers } from "../../actions/users";
import AllPosts from "./Posts/AllPosts";

const Community = () => {
  const dispatch = useDispatch();
  const Posts = useSelector((state) => state.fetchPostsReducer);
  const currentUser = useSelector((state) => state.currentUserReducer);
  const users = useSelector((state) => state.usersReducer);

  useEffect(() => {
    dispatch(fetchAllPosts());
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    dispatch(fetchAllUsers());
  }, []);

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <Suspense fallback={<div>Loading</div>}>
          <AllPosts
            postsProps={{ Posts: Posts, currentUser: currentUser, users }}
          />
        </Suspense>
        <div className="find-friend-component">
          <FindFriend />
        </div>
      </div>
    </div>
  );
};

export default Community;
