import React,{useState,createContext} from 'react'
import data from './../../../data/titles.json'
import styles from './Data.css'
// export const Globalinfo=createContext()
// export const Globalinfo=createContext()
function Data(props) {
     
      let {itm} =props
    //   console.log(itm)
    let movies=data.movies;
    let show=data.shows
    // const getval=(itm)=>{
    //     console.log(itm)
    //    }
  return (
  
        <div>
         <div >
         <div className={styles.flex}>
         
      
      <h2 className={styles.movies_heading}> movies</h2>
     
          </div>
         </div>
      
{
    movies.filter((e)=>{
     if(itm==""){
        return e
     }else if(e.title.toLocaleLowerCase().includes(itm.toLocaleLowerCase()))
       return e


    }).map((e,i)=>{
       
        return (
            <div key={i} className={styles.flex}>
              
                <div className={styles.image_align}>
                    <img className={styles.image} src={e.img}alt='image'/>
                </div>
            
                <div className={styles.image_align}>{e.title}</div>
            </div>
        )
    })
}
<br/>
<hr/>
<h2  className={styles.movies_heading}> populat shows</h2>

{
    show.filter((e)=>{
        if(itm==""){
           return e
        }else if(e.title.toLocaleLowerCase().includes(itm.toLocaleLowerCase()))
          return e
   
   
       }).map((e,i)=>{
        return (
            <div key={i} className={styles.flex}>
                  <div className={styles.image_align}>
                    <img className={styles.image} src={e.img} alt='image'/>
                </div>
                <div className={styles.image_align}><b>{e.title}</b></div>
            </div>
        )
    })
}


    </div>
  )
}

export default Data