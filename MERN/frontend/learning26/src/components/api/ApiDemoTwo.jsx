import axios from "axios";
import React, { useState } from "react";

export const ApiDemoTwo = () => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const response = await axios.get("https://dummyjson.com/comments");
    console.log(response.data.comments); 
    setComments(response.data.comments);
    
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO Two</h1>
      <button
        onClick={() => {
          getComments();
        }}
      >
        GET
      </button>
      <table border="2" align="center">
        <thead>
          <tr>
            <th>id</th>
            <th>Body</th>
            <th>Likes</th>
            <th>postId</th>
            <th>PostUserId</th>
            <th>PostUserName</th>
            <th>PostUserFullName</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => {
            return (
              <tr>
                <td>{comment.id}</td>
                <td>{comment.body}</td>
                <td>{comment.likes}</td>
                <td>{comment.postId}</td>
                <td>{comment.user.id}</td>
                <td>{comment.user.username}</td>
                <td>{comment.user.fullName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
