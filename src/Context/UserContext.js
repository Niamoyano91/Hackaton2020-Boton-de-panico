import React from 'react'
// import { firebase } from '../firebase/firebase'

let UserContext = React.createContext()
let { Provider, Consumer } = UserContext

function UserProvider({ children }) {

    const [check, setCheck] = React.useState([])


  return (
    <Provider value={{ check, setCheck
    }}>
      {children}
    </Provider>
  )
}

export { UserProvider, Consumer as UserConsumer, UserContext }
