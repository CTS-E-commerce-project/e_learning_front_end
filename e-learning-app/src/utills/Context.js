import { createContext, useState } from "react";
import { useEffect } from "react";
import { RiNeteaseCloudMusicLine } from "react-icons/ri";
export const Context = createContext();

const AppContext = ({children}) =>{
    


   const [responseData, setResponseData] = useState(null);
   const [apiData, setApiData] = useState(null);
   const [likedCourses,setLikedCourses] = useState(null);
   const [cartCourses,setCartCourses] = useState(null);
    return <Context.Provider 
        value = {{
            responseData,
            setResponseData, 
            apiData,
            setApiData, 
            likedCourses,
            setLikedCourses,
            cartCourses,
            setCartCourses,
        }}
    >
        
        {children}
    </Context.Provider>
}

export default AppContext;