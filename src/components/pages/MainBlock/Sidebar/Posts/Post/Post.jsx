import React, { useState } from 'react'
import './Post.css'
import { ReactComponent as HeartIcon } from '../../../../../../images/heart.svg'
import narutoPost from '../../../../../../images/post.jpg'
export const Post = ({ title, descripthion, liked }) => {
  const [isLiked, setIsLiked] = useState(liked);
  const customFilling = isLiked ? 'crimson' : 'black'
  const like = () => setIsLiked(!isLiked)
  const finalDecription = (
    <p>
      {
        descripthion.length ? (
          <>
            {descripthion.slice(0, 101)}...
            <a href="/">Подробнее</a>

          </>
        ) : descripthion
      }
    </p>

  )

  return (
    <section className='post'>
      <div>
        <img className='postImg' src={narutoPost} alt="post" />
        <h2>
          {title}
        </h2>
        {
          finalDecription
        }
        <button onClick={like} className='like'>
          <HeartIcon fill={customFilling} />
        </button>

      </div>
    </section>
  )
}
