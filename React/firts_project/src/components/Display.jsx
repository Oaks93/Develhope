import React, {useContext} from 'react'
import { UserContext } from '../context/userProvider'

export default function Display() {
    const user = useContext(UserContext)
    console.log(user);
  return (
    <div>Display</div>
  )
}
