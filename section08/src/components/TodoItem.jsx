import '../css/TodoItem.css'; 

// props로 id, isDone, content, date를 구조 분해 할당하여 받습니다.
const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => { 
  const onChangeCheckBox = () => {
    onUpdate(id)
  }
  const onClickBtn = ()=>{
    onDelete(id)
  }

  return ( 
    <div className="TodoItem"> 
      <input readOnly type="checkbox" checked={isDone} onChange={onChangeCheckBox}/> 
      <div className="content">{content}</div> 
      <div className="date">{new Date(date).toLocaleDateString()}</div> 
      <button>삭제</button> 
    </div> 
  ); 
}; 

export default TodoItem;