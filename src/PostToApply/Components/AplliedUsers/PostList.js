import PostItem from './PostItem';
import './PostList.css';
const PostList = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <div className='center'>
        <h1>No Application </h1>
      </div>
    );
  }
  return (
    <div className='post-active'>
      <h1>Available Post to apply</h1>
      <ul className='posts-list'>
        {posts.map((post, index) => (
          <PostItem
            key={index}
            id={post.id}
            image={post.image}
            title={post.title}
            application={post.application}
            discription={post.discription}
          />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
