import React, {useState,  createContext} from 'react';

import styles from './Home.css';
// import Headers from './Headers';
import Icon from './../../assets/images/logo.png';
import Head from '../Home/Head';
import Data from './Data';
/* 
    This is just a sample introduction file.
    You can clear the code written in this file and start writing your own code.
*/

// export class Home extends Component {
//     render() {
//         return (
//             <div className={styles.container}>
//                 <div className={styles.header}>
//                     <img src={Icon} />
//                     <h1 className={styles.title}>Netflix Replica</h1>
//                     <p>
//                         Netflix Replica is a replica of the popular streaming website Netflix.
//                     </p>
//                 </div>
//                 <div className={styles.instructions}>
//                     <h2>Instructions</h2>
//                     <p>
//                         This is a boilerplate template to help you start coding with 
//                         your application straightaway.
//                     </p>
//                     <ul>
//                         <li>
//                             Candidates are expected to implement Redux and store.
//                         </li>
//                         <li>
//                             Routing has also been enabled in this template, but the candidate  
//                             is expected to implement the routes on their own.
//                         </li>
//                         <li>
//                             Candidates are free to use CSS, SASS, SCSS or LESS for styling.
//                         </li>
//                         <li>
//                             Images to use in the application are provided in the folder.
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         )
//     }
// }
// const Home=()=>{
//  return (
//     <div>
//         <Head/>
//         <Data/>
//     </div>
//  )
// }

// export default Home;

export const Globalinfo=createContext()

const Home=()=>{
const [itm, setitm] = useState('')
   const getval=(itm)=>{
    setitm(itm)
   }
   
   console.log(itm)
    return (
       <Globalinfo.Provider  value={{getval:getval}}  >
           <Head/>
           <Data itm ={itm}/>
       </Globalinfo.Provider>
    )
   }
   
   export default Home;

