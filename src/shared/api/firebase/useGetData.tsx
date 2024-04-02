import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./connectDB";
import { Estimate } from "../../../components/types/types";

export function useGetData(key: string){
    const [value, setValue] = useState<Estimate[]>([])
    useEffect(() => {
        const getData = async () => {
          const getColRef = query(collection(db, key));
          onSnapshot(getColRef, (snapshot) => {
            setValue(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              })) as Estimate[]
            );
          });
        };
        getData();
      }, []);
    
      return [value, setValue];
}