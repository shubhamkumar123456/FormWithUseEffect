import React ,{useState,useEffect} from "react";


const AuthContext=React.createContext({
    isLoggedIn: false,
    onLogout:()=>{},
    onLogin:(email,collegeName,password)=>{},
});

   export const AuthContextProvider=(props)=>{
    const [isLoggedIn, setisLoggedIn] = useState(false);

    useEffect(()=>{
        const storedUserLoggedInInformation=localStorage.getItem('isLoggedIn')
          if(storedUserLoggedInInformation==='1'){
            setisLoggedIn(true)
          }
          
          },[])

    const logoutHandler=()=>{
        localStorage.removeItem('isLoggedIn');
        setisLoggedIn(false);
    }
    const loginHandler=()=>{
        localStorage.setItem('isLoggedIn', '1');
        setisLoggedIn(true);
    }
        return <AuthContext.Provider value={{isLoggedIn:isLoggedIn, onLogout:logoutHandler,onLogin:loginHandler}}>
            {props.children}
        </AuthContext.Provider>
    }

export default AuthContext;