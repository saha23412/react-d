import React from 'react'
import Attachmet from '../Attachmet/Attachmet'
import './MessageForm.css'
import MyButton from '../UI/Button/Button'
export default function MessageForm({handleSubmit,text,setText,setImg}) {
    return (
        <div className='containerForm'onSubmit={handleSubmit}>
        <form action="" className="message_form">
            <label htmlFor='img'>
                <Attachmet />
            </label>
            <input
            onChange={e=>setImg(e.target.files[0])}
                type="file"
                id='img'
                    accept='images/*'
                style={{ display: 'none' }}
            />
            <div >
                <input  
                    value={text} 
                    onChange={e=>setText(e.target.value)} 
                    type="text" 
                    placeholder='Cобщение' 

                    />
            </div>
            <div>
                <MyButton >
                    Отправить
                </MyButton>
            </div>
        </form>
        </div>
    )
}
