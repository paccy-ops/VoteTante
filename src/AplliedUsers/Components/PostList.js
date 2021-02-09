import PostItem from './PostItem';
import './PostList.css';
const PostList = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <div className='apllication-center'>
        <h1>No Application to show </h1>
      </div>
    );
  }
  return (
    <div className='application-active'>
      <h1>Accapted Application </h1>
      <ul className='application-list'>
        {posts.map((post, index) => (
          <PostItem
            key={index}
            id={post.id}
            image={post.image}
            firstname={post.firstname}
            lastName={post.lastname}
            position={post.position}
            discription={post.discription}
          />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
