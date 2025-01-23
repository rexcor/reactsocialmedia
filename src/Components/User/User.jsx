import React from "react";
import UserHeader from "./UserHeader";
import { Routes, Route } from "react-router-dom";
import Feed from "../Feed/Feed.jsx";
import UserPhotoPost from "./UserPhotoPost.jsx";
import UserStats from "./UserStats.jsx";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
