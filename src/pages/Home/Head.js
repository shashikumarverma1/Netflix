import React ,{useState} from 'react'
import { useContext } from 'react'
import styles from './Head.css'
import pic from '../../assets/images/man.jpg'
import logo from '../../assets/images/logo.png'
import {Globalinfo} from '../Home/Home.js'
function Head() {
    const {getval} = useContext(Globalinfo)
  
  const [serchItem,setsearchItem]=useState("")
 
  return (
    <div className={styles.header} >
      
      <div >
        <img className={styles.netflix_logo} src={logo} alt='netflix-logo'/>
       </div>
      <div className={styles.header1} >
        <div className={styles.margin_1}>
          <input className={styles.gettext} type="text " placeholder="serch something"  onChange={(e)=>
            {setsearchItem(e.target.value)
            getval(serchItem)
            }}  />
        </div>
        <div className={styles.margin_top_1}>
          <img className={styles.profile_pic} src={pic} alt='profilr_pic'/>
        </div>
      </div>
    </div>
  )
}

export default Head