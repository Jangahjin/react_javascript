import "../css/TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };
  const onClickBtn = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckBox} />
      <div className="content">{content}</div>
      <div className="data">{new Date(date).toLocaleDateString}</div>
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