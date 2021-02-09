import PostList from '../Components/PostList';
const Post = () => {
  const POST = [
    {
      id: 'u1',

      title: 'Manager',
      application: 1,
      image: 'https://www.harshwal.com/images/remote-business-manager.jpg',

      discription:
        'Accomplishes department objectives by managing staff planning and evaluating department activities Pacifique department objectives by managing staff planning and evaluating department activities.',
    },
    {
      id: 'u1',
      title: 'President',
      application: 4,

      image:
        'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=401&q=80',
      discription:
        'Accomplishes department objectives by managing staff planning and evaluating department activities.',
    },
    {
      id: 'u1',

      title: 'Ast.Director',
      application: 3,
      image:
        'https://images.unsplash.com/photo-1566915309730-82a0a01c0f00?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
      discription:
        'Accomplishes department objectives by managing staff planning and evaluating department activities.',
    },
    {
      id: 'u1',

      title: 'Director',
      application: 10,
      image:
        'https://images.unsplash.com/photo-1571984269640-474565658a7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      discription:
        'Accomplishes department objectives by managing staff planning and evaluating department activities.',
    },
  ];
  return (
    <div>
      <PostList posts={POST} />
    </div>
  );
};

export default Post;
