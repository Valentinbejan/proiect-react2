import { Button } from 'antd';
import React, { Component, useState } from 'react';

const AllPosts = () => {
let [data,useData]=useState([
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },

])
  

    
    return (
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            
          </div>
        ))}
      </div>
    );
}

export default AllPosts;
