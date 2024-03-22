import { useEffect, useState } from "react";
import { Estimate } from "../components/types/types";
import { db } from "../shared/api/index";
import { addDoc, collection, onSnapshot, query, Timestamp } from "firebase/firestore";
import { useAddEstimate } from "../app/providers/AddEstimateProvider/lib/EstimateContext";



export function CreateEstimate() {
  const {
    estimateNumb,
    setEstimateNumb,
    handleSubmit,
    handlerInputChange,
    setHourlyRate,
    setEstimateDescription,
    setMaterialCost,
    setTimeRequired,
    hourlyRate,
    timeRequired,
    materialCost,
    setEstimate

  } = useAddEstimate();

  useEffect(() => {
    const getCustomerEstimate = async () => {
      const estimateColRef = query(collection(db, "estimate"));
      onSnapshot(estimateColRef, (estimateSnapshot) => {
        const newEstimate = estimateSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Estimate[];
        setEstimate(newEstimate);
      });
    };
    getCustomerEstimate();
  }, []);
  //   const [estimateNumb, setEstimateNumb] = useState<Estimate[]>([]);
  //   //   const [hourlyRate, setHourlyRate] = useState<Event>();
  //   //   const [timeRequired, setTimeRequired] = useState<Event>();
  //   //   const [materialCost, setMaterialCost] = useState<Event>();
  //   //   const [estimateDescription, setEstimateDescription] = useState<Event>();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     addDoc(collection(db, "estimate"), {
  //       estimateNumb,
  //       created: Timestamp.now(),
  //     })
  //       .then((result) => console.log(result))
  //       .catch((error) => console.log(error));

  //     setEstimateNumb(" ");
  //   };
}
