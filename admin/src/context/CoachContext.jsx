import { createContext } from "react";

export const CoachContext=createContext()

const CoachContextProvider=(props)=>{
    const value={

    }
    return( <CoachContext.Provider value={value}>
                {props.children}
            </CoachContext.Provider>
    )
}
export default CoachContextProvider
