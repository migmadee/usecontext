import {useContext} from 'react'
import AppContext from '../hook/AppContext'


const Component5=()=>{
    const {users} = useContext(AppContext)
return(
<>
      <h1>Component 5</h1>
      <h2>{`Hello ${users} again!`}</h2>
    </>
)}
export default Component5