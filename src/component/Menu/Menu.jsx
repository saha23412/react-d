import React, { useState, useEffect} from 'react'
import MyInput from '../UI/MyInput/MyInput'
import imgs from '../../images/iconsMess.png'
import { signOut } from 'firebase/auth'
import iconsMan from '../../images/iconsMan.png'
import classes from './Menu.module.css'
import imgAvatar from '../../images/avatarjpg.jpg'
import Camera from '../Camera/Camera'
import { useNavigate } from 'react-router-dom'
import { getDoc, doc, updateDoc } from 'firebase/firestore'
import { ref, getDownloadURL, uploadBytes,  deleteObject } from 'firebase/storage'
import { storage, db, auth } from '../../base'
import MyButton from '../UI/Button/Button'
export const Menu = (props) => {
    const [img, setImg] = useState('')
    const [userInf, setUser] = useState()
    const navigate =  useNavigate()

    const handleSignout = async () => {
        await updateDoc(doc(db, 'users', auth.currentUser.uid), {
            isOnline: false
        })
        await signOut(auth)
        navigate("/login")
    }
    useEffect(() => {
        const unsub = auth.onAuthStateChanged((authObj) => {
            unsub();
            const uid = auth.currentUser.uid;
            getDoc(doc(db, 'users', uid)).then((docSnap) => {
                if (doc && docSnap.exists) {
                    setUser(docSnap.data())
                }
            }
            )
            if (img) {
                const uploadImg = async () => {
                    const imgRef = ref(
                        storage,
                        `avatar/${new Date().getTime()}-${img.name}`
                    );
                    try {
                        if (userInf.avatarPath) {
                            await deleteObject(ref(storage, userInf.avatarPath))
                        }
                        const snap = await uploadBytes(imgRef, img)
                        const url = await getDownloadURL(ref(storage, snap.ref.fullPath))
                        await updateDoc(doc(db, 'users', uid), {
                            avatar: url,
                            avatarPatg: snap.ref.fullPath
                        })
                        setImg("")
                    }
                    catch (error) {
                        console.log(error.message);
                    }

                }
                uploadImg("")
            }
        });
    }, [img]);

    return userInf ? (

        <ul className={classes.menu} >
            <div className={classes.main_menu}>
               
                <MyInput value={props.value} />
                <li><img src={imgs} alt="img" /></li>
                <div className={classes.User}>
                    <p >{userInf.name}</p>
                </div>
                <div className={classes.iconsMan}>

                    <img src={userInf.avatar || imgAvatar} alt="img" />
                    <div >
                        <div className={classes.overlay}>
                            <label htmlFor="photo">
                                <Camera />
                            </label>
                            <input
                                type="file"
                                accept='images/*'
                                style={{ display: "none" }}
                                id="photo"
                                onChange={e => setImg(e.target.files[0])}
                            />
                        </div>

                    </div>
                </div>
                        <MyButton  onClick={handleSignout}>Выйти</MyButton>
            </div>
        </ul>
    ) : null;
}; 
