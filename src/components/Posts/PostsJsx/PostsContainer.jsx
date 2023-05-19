import PostsItems from "./PostsItems";
import classes from './PostsContainer.module.css'

const PostsContainer = ({posts}) => {
    return (
        <div className={classes.container}>
            {posts.map((m, index)=> <PostsItems number={index + 1} post={m} key={m.id}/>)}
        </div>
    )
}

export default PostsContainer;