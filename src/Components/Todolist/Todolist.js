import React from 'react';
import './Todolist.css';
import PropTypes from 'prop-types';
import Todoitem from '../Todoitem/Todoitem';

function Todolist(props) {
  const { todos } = props;

  return (
    <div className="todo-list">
      {todos.map(item => <Todoitem todo={item} key={item.id} />)}
    </div>

  );
}

Todolist.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    userid: PropTypes.number,
    id: PropTypes.number,
    tittle: PropTypes.string,
    complated: PropTypes.bool,
  })).isRequired,
};
export default Todolist;
