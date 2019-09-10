import React from 'react';
import './Todoitem.css';
import PropTypes from 'prop-types';
import User from '../User/User';

function Todoitem({ todo }) {
  const { id, title, user } = todo;

  return (
    <div className="todo-item">
      <p className="todo-item__id">{id}</p>
      <p className="todo-item__title">{title}</p>
      <User user={user} />
    </div>
  );
}

Todoitem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    user: PropTypes.object,
  }).isRequired,
};

export default Todoitem;
