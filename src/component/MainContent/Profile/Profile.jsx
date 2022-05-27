import React, { useState, useEffect } from 'react'
import './Profile.css'
import Post from './addPosts/addPost';
import { BlockPosts } from './BlockPosts/BlockPosts';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { db, auth } from '../../../base';
import { getDoc, doc, updateDoc } from 'firebase/firestore'

const Profile = ({ userStatus }) => {
    const [user, setUser] = useState()
    useEffect(() => {
        const unsub = auth.onAuthStateChanged((authObj) => {
            unsub();
            const uid = auth.currentUser.uid;

            if (authObj) {
                getDoc(doc(db, "users",uid)).then(
                    (docShap) => {
                        if (doc && docShap.exists) {
                            setUser(docShap.data())
                            
                        }
                    }
                )
            }
            console.log(user);
        });

    }, [])
    const [posts, setPost] = useState([
        { body: 'Как?', id: 1 },
        { body: 'Нормально?', id: 2 },
        { body: 'Почему тут нету помощи ?', id: 3 },

    ]);

    function createPost(newPost) {
        setPost([...posts, newPost])
    }
    function removePost(post) {
        setPost(posts.filter(p => p.id !== post.id))
    }

    return  user? (
       <>
            <div>
                <Post createPost={createPost} posts={posts} />
                <div style={{ textAlign: 'center', marginTop: '40px' }}>{user.status}</div>
                <TransitionGroup>
                    {
                        posts.map((post) =>
                            <CSSTransition
                                key={post.id}
                                timeout={500}
                                classNames="post"
                            >
                                <BlockPosts removePost={removePost} post={post}  />
                            </CSSTransition>
                        )}
                </TransitionGroup>
            </div>
        </>
    ):null
}
export default Profile
