import React from 'react'
import PostsHeader from './PostsHeader/PostsHeader'
import './Posts.css'
import { Post } from './Post/Post'
const Posts = () => {
    return (
        <div className='postsWrapper'>
            <PostsHeader />
            <section className='posts'>
                <Post title='History' descripthion='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit!'
                    liked
                />
                <Post title='Post' descripthion='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit!'
                    liked
                />
                <Post title='PJS' descripthion='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit!'
                    liked
                />
                <Post title='PQWE' descripthion='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 amet consectetur adipisicing elit!'
                    liked
                />
                <Post title='PEP' descripthion='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit!'
                    liked
                />
                <Post title='Post6' descripthion='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem'
                    liked
                />


            </section>

        </div>
    )
}

export default Posts