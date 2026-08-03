import '../css/Editor.css'
import { useState, useRef  } from 'react'

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState('')
  const inputRef =  useRef();


  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onSumbit = () => {
    if (content === "") ; 
    onCreate(content)
    setContent("") 
    return;
  }


const onKeyDownContent = (e) => {
  if (e.key === '13') { // 👈 e.key === 'Enter' 사용 추천
    onSumbit();
  }
}

  return (
    <div className="Editor">
      <input 
        type="text" 
        value={content} 
        onChange={onChangeContent} 
        placeholder="오늘의 할 일을 입력" 
        onChange={onChangeContent}
        onKeyDown={onKeyDownContent}
      />
      <button onClick={onSumbit}>추가</button>
    </div>
  )
}

export default Editor;