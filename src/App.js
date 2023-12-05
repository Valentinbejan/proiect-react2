import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import { Button, Layout } from 'antd';
import AllPosts from './components/AllPosts';
import AllComments from './components/AllComments';
import AllPhotos from './components/AllPhotos';
import Layout1 from './components/Layout1';
import AllIconite from './components/AllIconite';

const { Sider, Content } = Layout;

function App() {
  const [showPosts, setShowPosts] = useState(false);

  const togglePosts = () => {
    setShowPosts(!showPosts);
  };


  const [showComments, setComments] = useState(false);

  const toggleComments = () => {
    setComments(!showComments);
  };

  const [showPhotos, setPhotos] = useState(false);

  const togglePhotos = () => {
    setPhotos(!showPhotos);
  };



  
  return (
    <div className="App " >
     <Layout style={{ minHeight: '100vh' }}>
        <Sider width={170}  style={{ backgroundColor: '#00ccff', position: 'fixed', height: '300vh'}}> 
      {/* <h1>Aceasta este pagina de Home</h1> */}
      <div className="posts">
      <Button style={{
                position: 'absolute',
                top: '100px',
                left: '10px' }} onClick={togglePosts}>
        {showPosts ? 'Ascunde Posts' : 'Arata Posts'}
      </Button>
      {/* {showPosts && <AllPosts />} */}
      </div>
      <div className="comments">
      <Button style={{
                position: 'absolute',
                top: '200px',
                left: '10px' }} onClick={toggleComments}>
        {showComments ? 'Ascunde Comments' : 'Arata Comments'}
      </Button>
      {/* {showComments && <AllComments />} */}
        
      </div>
        
        <div>
        <Button style={{
                position: 'absolute',
                top: '300px',
                left: '10px' }} onClick={togglePhotos}>
        {showPhotos ? 'Ascunde Photos' : 'Arata Photos'}
      </Button>
      {/* {showPhotos && <AllPhotos />} */}
        </div>

          <div>
          <AllIconite />
          </div>

          
          </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <h1 style={{ fontSize: 40 }}>Aceasta este pagina de Home</h1>
        <br></br>
        <br></br>
          {showPosts && <AllPosts />}
          <br></br>
          <br></br>
          {showComments && <AllComments />}
          <br></br>
          <br></br>
          {showPhotos && <AllPhotos />}
        </Content>
      </Layout>
        </div>  
      
  );
}

export default App;
