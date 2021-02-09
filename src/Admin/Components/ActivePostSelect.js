import './ActivePostSelect.css';
const ActivePostSelect = () => {
  return (
    <div class='ditails'>
      <div class='active'>
        <h3>
          Active Posts <span>(0)</span>
        </h3>
        <select className='post-active'>
          <option value=''>Select</option>
          <option value=''>President</option>
          <option value=''>Manager</option>
          <option value=''>Director</option>
          <option value=''>Ast.Director</option>
        </select>
      </div>
    </div>
  );
};

export default ActivePostSelect;
