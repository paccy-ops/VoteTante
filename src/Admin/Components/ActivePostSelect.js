import './ActivePostSelect.css';
import Menu from '@material-ui/icons/MenuOpenOutlined';

const ActivePostSelect = () => {
  return (
    <div className='ditails'>
      <div className='active'>
        <h3>
          <Menu className='menu-icon' />
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
