import React, { useState } from 'react'
import MyInput from '../../../UI/MyInput/MyInput'
import classes from './addPost.module.css'
import iconsAdd from '../../../../images/free-iconAdd.png'

const Post = ({ createPost }) => {

    const [post, setPost] = useState({ body: '' })
    function addNewsPost() {
        let bodyTitle = post.body
        if (/\S/.test(bodyTitle)) {
            const newPost = {
                ...post, id: Date.now()
            }
            console.log(post.body)
            createPost(newPost)
            setPost({ body: '' })
        }

    }

    return (
        <div className={classes.Post}>
            <div className={classes.contentPost}>
                <p>Создайте пост</p>
                <MyInput
                    maxLength={40}
                    value={post.body}
                    onChange={e => setPost({ ...post, body: e.target.value })}
                    placeholder="Что нового?"
                />
                <span><img onClick={addNewsPost} className={classes.imagesAdd} src={iconsAdd} alt="iconsAdd" /></span>
            </div>
        </div>
    )
}
export default Post
