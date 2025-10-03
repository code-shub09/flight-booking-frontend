import { createContext ,useState} from "react";

export const Wrapper= createContext();


function DataProvider({children}){
    console.log('data pr:')

    const [IsRemoveButVis,setIsRemoveButVis]=useState(false);
    const [Depart,setDepart]=useState({});
    const [User,setUser]=useState({})
    return(
        <Wrapper.Provider value={{IsRemoveButVis,setIsRemoveButVis}} >
            {children}
        </Wrapper.Provider>
    )
}

export default DataProvider