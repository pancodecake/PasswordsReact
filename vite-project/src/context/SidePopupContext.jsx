import React, { useEffect,useContext } from 'react'
import { useState } from 'react'


const usePopupContext = React.createContext()
export const  SidePopupContextProvider = ({children}) => {
    const [currentCardPopupTag,setCurrentCardPopupTag] = useState('')
    const [sidePopupActive,setSidePopupActive] = useState(false)
    const [cardPopups,setCardPopups] = useState([])
    console.log(currentCardPopupTag,'currentCardPopupTag');
    useEffect(() => {
        setCardPopups(oldValue => {  
            return oldValue.map(pop => {
                if(pop.tag === currentCardPopupTag ) {
                    return {...pop,active:sidePopupActive}
                }else{
                    return {...pop,active:false}
                }
            })
        })
        console.log(sidePopupActive,currentCardPopupTag,'sidePopupActive,currentCardPopupTag');
    },[sidePopupActive])
    return (
        <usePopupContext.Provider value={{sidePopupActive,setSidePopupActive,cardPopups,setCardPopups,setCurrentCardPopupTag}}>
            {children}
        </usePopupContext.Provider>
    )
    
}
export const  useSidePopupContext = () => {
    return useContext(usePopupContext)
}
