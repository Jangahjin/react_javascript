import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
// [오류 수정 1] 상단 import 문에 useMemo를 추가했습니다.
import { useRef, useReducer, useCallback, createContext, useMemo } from "react";
import Exam from "./components/Exam";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

// 1. Reducer 함수 수정
function reducer(todos, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...todos];

    case "UPDATE":
      return todos.map((todo) =>
        todo.id === action.data ? { ...todo, isDone: !todo.isDone } : todo
      );

    case "DELETE":
      return todos.filter((todo) => todo.id !== action.data);

    default:
      return todos;
  }
}

//공유정소를 생성하고 모든 컴포넌트를 import 해서 사용할 수 있도록 export
// export const TodoContext = createContext();

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 생성 핸들러
 const onCreate = useCallback((content) => { 
    dispatch({ 
      type: "CREATE", 
      data: { 
        id: idRef.current++, 
        isDone: false, 
        content: content, 
        date: new Date().getTime(), 
      }, 
    }); 
  }, []);

  // 수정 핸들러 (type: "UPDATE"로 수정)
   const onUpdate = useCallback((Id) => { 
    dispatch({ 
      type: "UPDATE", 
      data: Id, 
    }); 
}, []);

  // 삭제 핸들러
   const onDelete = useCallback((Id) => { 
    dispatch({ 
      type: "DELETE", 
      data: Id,
    }); 
  }, []);

   //딱 한번만 실행한다. 
  const memoizedDispatch = useMemo(() => { 
    return { onCreate, onUpdate, onDelete }; 
  }, [onCreate, onUpdate, onDelete]); 

  
  return (
    <div className="App">
      <Header />
        <TodoStateContext.Provider value={{todos}}> 
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor /> 
          <List /> 
        </TodoDispatchContext.Provider> 
      </TodoStateContext.Provider> 
    </div>
  );
}

export default App;
