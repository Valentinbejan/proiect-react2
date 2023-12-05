import React, { Component } from 'react';

class AllPhotos extends Component {
  state = {
    data:[
      {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
      },]
  };

  render() {
    
    return (
      <div>
        {this.state.data.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>url: {item.url}</p>
            <p>{item.thumbnailUrl}</p>
            
            <img 
      src= {item.url}
      alt="new"
      />

          </div>
        ))}
      </div>
    );
  }
}

export default AllPhotos;
