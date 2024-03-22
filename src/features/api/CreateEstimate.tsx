import { useAddEstimate } from "app/providers/AddEstimateProvider/lib/EstimateContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../shared/api";

export const CreateEstimate = () =>{

  const {
    estimateNumb,
    hourlyRate,
    timeRequired,
    materialCost,
    estimateDescription,
    laborCost,
    sellingPrice,
    workerQuantity,

  } = useAddEstimate();

  const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "estimate"), {
        estimate_number: estimateNumb || null,
        hourly_rate: hourlyRate || null,
        time_required: timeRequired || null,
        material_cost: materialCost || null,
        estimate_description: estimateDescription || null,
        labor_cost: laborCost || null,
        selling_price: sellingPrice || null,
        worker_quantity: workerQuantity || null,
       
      });
      // console.log({
      //   estimate_number: estimateNumb,
      //   hourly_rate: hourlyRate,
      //   time_required: timeRequired,
      //   material_cost: materialCost,
      //   estimate_description: estimateDescription,
      // });
      console.log("Document written with ID: ", docRef.id);
    } catch (event) {
      console.error("Error adding document: ", event);
    }
  };
}
