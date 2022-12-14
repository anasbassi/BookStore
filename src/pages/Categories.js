import { useDispatch } from 'react-redux/es/exports';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>Check Status</button>
    </div>
  );
};

export default Categories;
