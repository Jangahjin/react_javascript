import './App.css'
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useState, useRef } from 'react';

  const mockData =[
    {
      id:0, 
      isDone:false,
      content:"레드레드한 인생 돌아보기",
      date: new Date().getTime(),
    },
    {
      id:1, 
      isDone:false,
      content:"앞으로도 레드레드할 인생 예상해보기",
      date: new Date().getTime(),
    },
    {
      id:2, 
      isDone:false,
      content:"잠자기",
      date: new Date().getTime(),
    },
  ];
function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  //핸들러함수
  const onCreate = (content) => {
    const newTodo = {
      id : idRef.current++,
      isDone: false,
      content : content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  }

  //핸들러함수 (수정하기)
  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo
      })
    )
  }

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo)=> {
      return todo.id !== targetId;
    }))
  };

  return (
    <>
      <div className="App">
        <Header />
        <Editor onCreate={onCreate}/>
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
      </div>

    </>
  )
}

export default App
