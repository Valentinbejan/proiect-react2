import { CommentOutlined,UserOutlined,EyeOutlined } from '@ant-design/icons';
const AllIconite = () => {
  return (
    <div>
    
      <CommentOutlined 
       style={{
        position: "absolute",
        top: "130px",
        left: "25px",
        fontSize: '5em',
      }}/>
    
    <UserOutlined  style={{
        position: "absolute",
        top: "20px",
        left: "25px",
        fontSize: '5em',
      }}/>
    

    <EyeOutlined size={70} style={{
        
        position: "absolute",
        top: "230px",
        left: "25px",
        fontSize: '5em',
      }}/>

    </div>
  );
};
export default AllIconite;