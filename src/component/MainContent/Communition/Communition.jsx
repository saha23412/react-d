import React, { useEffect, useState } from 'react'
import { db, auth,storage } from '../../../base'
import { collection, query, where, onSnapshot, addDoc, Timestamp,orderBy} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import classes from './Communition.module.css'
import Users from '../../User/Users'
import Img from '../../../images/avatarjpg.jpg'
import MessageForm from '../../MessageForm/MessageForm'
import 'firebase/storage'
import {ref,getDownloadURL,uploadBytes,} from 'firebase/storage'
import Message from '../../Message/Message'
const Communition = () => {

  const [users, setUsers] = useState([]);
  const [chat, setSchat] = useState('')
  const [text, setText] = useState('')
  const [img, setImg] = useState('')
  const [msgs, setMsgs] = useState([])
  const user1 = auth.currentUser.uid
  useEffect(() => {
    const unsubs = auth.onAuthStateChanged((authObj) => {
      if (authObj) {
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where("uid", "not-in", [user1]))
        const unsub = onSnapshot(q, (queryShapshot) => {
          let users = [];
          queryShapshot.forEach((doc) => {
            users.push(doc.data())
          });
          setUsers(users)
        });
        return () => unsub();
      }
    });
    unsubs()
  }, []);

  const selectUser = (user) => {
    setSchat(user)
    const user2 = user.uid
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`
    const msgRef= collection(db, 'messages',id,'chat')
    const q = query(msgRef,orderBy('createdAt','asc'))
    onSnapshot(q,queryShapshot=>{
      let msgs=[]
      queryShapshot.forEach(doc=>{
        msgs.push(doc.data())
      })
      setMsgs(msgs)
    })
  }
  console.log(msgs);
  const handleSubmit = async e => {

    e.preventDefault()

    const user2 = chat.uid
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`
    let  url;
    if(img){
      const imgRef = ref(storage,
        `images/${new Date().getTime()}-${img.name}`
        )
        const snap = await uploadBytes(imgRef,img)
        const dlUrl = await getDownloadURL(ref(storage,snap.ref.fullPath))
        url = dlUrl
    }
    await addDoc(collection(db, 'messages', id, 'chat'), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media:url||''

    });
    setText('')
  }










  return (
    user1?(
      <div style={{ width: '100%' }}>

      <div className={classes.containerFriends}>
        <ul className={classes.usersFriends}>
          {users.map(user => <Users key={user.uid} user={user} selectUser={selectUser} />)}
        </ul>
      </div>


      <div className={classes.cont}>

        {chat ? <> <div className={classes.messages_user}>
          <div className={classes.friendsInfo}>

            <h3>{chat.name}</h3>
            <div className={classes.imges}><img src={chat.avatar || Img} alt="friends" className={classes.friends} /></div>


          </div>

        </div>
          <div className={classes.messages}>
              {
                msgs.length 
                ?msgs.map((msg,i)=><Message key={i}msg={msg} user1={user1}/>)
                :null
              }
          </div>
          <MessageForm
            handleSubmit={handleSubmit}
            text={text}
            setText={setText}
            setImg={setImg}
          />
        </>
          : <div><h3 style={{ textAlign: 'center', marginTop: '10px' }}>Выберитеe чат</h3></div>
        }
      </div>
    </div>
    ):null
 
  )
}
export default Communition
