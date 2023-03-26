import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";

import FindFriend from "./FindFriend";

const FindPage = () => {
  return (
    <div className="home-container-1">
      <div className="home-container-2">
        <div className="find-friend-wrapper">
          <FindFriend />
        </div>
      </div>
    </div>
  );
};

export default FindPage;
