import MyButton from "../../UI/button/MyButton";
import classes from './PostsItems.module.css';

const PostsItems = ({post, number}) => {
    return (
        <div className={classes.post} >
            <div className={classes.content}>
                <p>{number}.</p>
                <p>{post.title}</p>
            </div>
            <div>
                <MyButton>Удалить пост</MyButton>
            </div>
        </div>
    )
}

export default PostsItems;