import React, { useState, useEffect } from 'react'
import classes from './BlockPosts.module.css'
import iconsDelete from '../../../../images/icons-delete.png'
import { auth, db } from '../../../../base'
import { getDoc, doc } from 'firebase/firestore';
export const BlockPosts = ({ post, removePost }) => {
    const [userInf, setUserInf] = useState()

    useEffect(() => {
        const unsub = auth.onAuthStateChanged((authObj) => {
            const uid = auth.currentUser.uid
            getDoc(doc(db, 'users', uid)).then((docShap) => {
                if (doc && docShap.exists) {
                    setUserInf(docShap.data())
                }
            })
            unsub();
        })
    
     }, [])
    return (
        userInf ? (
            <div className={classes.BlockPosts} >
                <div className={classes.post}>
                    <div className={classes.nameBlock}>
                        <span className={classes.postName} >{userInf.name}</span>
                    </div>
                    <div className={classes.postContent}>
                        <p style={{ fontSize: 14 }}>{post.body}</p>
                        <img src={iconsDelete} onClick={() => removePost(post)} alt="delte" width={30} />
                    </div>
                </div>

            </div>)
            : null

    )
}
