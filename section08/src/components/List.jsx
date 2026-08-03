import '../css/List.css';
import TodoItem from './TodoItem'; 
import { useState } from 'react'; 

const List = ({ todos, onUpdate, onDelete}) => { 
  const [search, setSearch] = useState(''); 

  const onChangeSearch = (e) => { 
    setSearch(e.target.value); 
  }; 

  // search 있는지 없는지 체크해서 1번방식, 2번방식 todos = filter 작업
  const getFilteredData = () => { 
    if (search === '') { 
      return todos; 
    } 
    //search 있다면 filter
    return todos.filter((todo) => 
      todo.content.toLowerCase().includes(search.toLowerCase()) 
    ); 
  }; 

  const filteredTodos = getFilteredData(); 

  return ( 
    <div className="List"> 
      <h4>Todo List</h4> 
      <input 
        value={search} 
        onChange={onChangeSearch} 
        placeholder="검색어를 입력하세요" 
      /> 
      <div className="todos_wrapper"> 
        {filteredTodos.map((todo) => { 
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} />; 
        })} 
      </div> 
    </div> 
  ); 
}; 

export default List;