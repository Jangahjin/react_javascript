import "../css/TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App"; 

const TodoItem = ({ id, isDone, content, date }) => {
  // App.jsx에서 이 함수들이 useCallback으로 최적화되어 있어야 이 컴포넌트도 메모이징됩니다.
  const { onUpdate, onDelete } = useContext( TodoDispatchContext );

  const onChangeCheckBox = () => {
    onUpdate(id);
  };
  const onClickBtn = () => {
    onDelete(id);
  };

  return ( 
    <div className="TodoItem"> 
      <input 
        onChange={onChangeCheckBox} 
        checked={isDone} 
        type="checkbox" 
      /> 
      <div className="content">{content}</div> 
      <div className="date"> 
        {new Date(date).toLocaleDateString()} 
      </div> 
      <button onClick={onClickBtn}>삭제</button> 
    </div> 
  ); 
};
export default memo(TodoItem);

//React.memo 문제점 : props 객체 값이 변동에 대한 작동은 잘 된다. 핸들로함수는 함수자체 재생성 시키기에 문제가 발생
//이런 방식 => 고차 컴포넌트(higher order Component : HOC)로 방어해야 함.
// export default memo(TodoItem, (prevProps, nextProps) => { 
//   if (prevProps.id !== nextProps.id) return false; 
//   if (prevProps.isDone !== nextProps.isDone) return false; 
//   if (prevProps.content !== nextProps.content) return false; 
//   if (prevProps.date !== nextProps.date) return false; 
 
//   return true; 
// });