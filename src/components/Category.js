import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryActions } from '../redux/categories/category';

function Category() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.category.categories);

  const handleStatus = () => {
    dispatch(categoryActions.checkStatus('Under construction'));
  };

  return (
    <div>
      <p>{status}</p>
      <button type="button" onClick={handleStatus}>Check status</button>
    </div>
  );
}

export default Category;
