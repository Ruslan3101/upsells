import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./connectDB";

export function useGetDataCard(key:string, id: string){
    const [value, setValue] = useState()
   useEffect(()=>{
    const getNote = async (id: string) => {
        const noteSnapshot = await getDoc(doc(db, key, id));
        if(noteSnapshot.exists()){
            return noteSnapshot.data();
        }else{
            console.log("Note Doesn't exist");
        }
    }
    getNote(id)
   },[]) 
   return [value, setValue]
}