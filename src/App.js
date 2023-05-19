import { useState } from 'react';
import PostsContainer from "./components/Posts/PostsJsx/PostsContainer";
import MyInput from './components/UI/input/MyInput';
import MyButton from './components/UI/button/MyButton';
import classes from './components/Form/Form.module.css'


function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript'},
    {id: 2, title: 'Python'},
  ])

  const [value, setValue] = useState({title: '', })

  const addNewPost = (e) => {
    e.preventDefault()

    setPosts([...posts, {id: Date.now(), ...value}])

    setValue({title: '',})

  }
  console.log({...posts})

  return (
    <div className="App">
      <form className={classes.form}>
        <div>
          <MyInput type='text' placeholder='Текст поста' value={value.title} onChange={e => setValue({...value, title: e.target.value})}/>
        </div>
        <div>
          <MyButton onClick={addNewPost} >Добавить пост</MyButton>
        </div>
      </form>
      <PostsContainer posts={posts}/>
    </div>
  );
}

export default App;
