import { query, collection, onSnapshot, addDoc } from "firebase/firestore";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { Estimate } from "components/types/types";
import db from "../../../../shared/api/firebase/connectDB";

export interface AddEstimateProps {
  children: ReactNode;
}
export interface Item {
  id: string;
}
export interface AddEstimateContextType {
  toggle: boolean;
  estimate: Estimate[];
  estimateNumb: string;
  hourlyRate: number;
  timeRequired: number;
  materialCost: number;
  estimateDescription: string;
  laborCost: number;
  sellingPrice: number;
  workerQuantity: number;
  // estimateHandleSubmit: () => void;
  estimateHandleSubmit: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => Promise<void>;
  fetchDataAndUpdateState: () => void;
  toggleHandler: () => void;
  // countEstimatedJobCost: (value: number) => void;
  countEstimatedJobCost: () => void;
  handlerInputChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    inputName: (value: number | string) => void
  ) => void;
  // handlerInputChange: (value: number) => void;
  setEstimateNumb: (value: string) => void;
  setHourlyRate: (value: number) => void;
  setTimeRequired: (value: number) => void;
  setMaterialCost: (value: number) => void;
  setEstimateDescription: (value: string) => void;
  setEstimate: (value: Estimate[]) => void;
  setLaborCost: (value: number) => void;
  setSellingPrice: (value: number) => void;
  setWorkerQuantity: (value: number) => void;

  // handlerFormChange: (value: string) => void;
}

const defaultContextValue: AddEstimateContextType = {
  // Provide a default value that matches the expected type for all properties.
  // This helps avoid using null! and improves type safety.
  toggle: false,
  estimate: [],
  estimateNumb: "",
  hourlyRate: 0,
  timeRequired: 0,
  materialCost: 0,
  laborCost: 0,
  sellingPrice: 0,
  workerQuantity: 0,
  estimateDescription: "",
  estimateHandleSubmit: async () => {},
  fetchDataAndUpdateState: () => {},
  toggleHandler: () => {},
  handlerInputChange: () => {},
  setEstimateNumb: () => {},
  setHourlyRate: () => {},
  setTimeRequired: () => {},
  setMaterialCost: () => {},
  setLaborCost: () => {},
  setSellingPrice: () => {},
  setWorkerQuantity: () => {},
  setEstimateDescription: () => {},
  setEstimate: () => {},
  countEstimatedJobCost: () => {},
};

export const AddEstimateContext =
  createContext<AddEstimateContextType>(defaultContextValue);

export function useAddEstimate() {
  return useContext(AddEstimateContext);
}

export function AddEstimateProvider({ children }: AddEstimateProps) {
  const [estimate, setEstimate] = useState<Estimate[]>([]);
  const [toggle, setToggle] = useState(false);
  const [estimateNumb, setEstimateNumb] = useState<string>("");
  const [hourlyRate, setHourlyRate] = useState<number>(0);
  const [timeRequired, setTimeRequired] = useState<number>(0);
  const [materialCost, setMaterialCost] = useState<number>(0);
  const [laborCost, setLaborCost] = useState<number>(0);
  const [workerQuantity, setWorkerQuantity] = useState<number>(0);
  const [estimateDescription, setEstimateDescription] = useState<string>("");

  const [profitInPercent, setProfitInPercent] = useState<number>(0);
  const [profitInMoney, setProfitInMoney] = useState<number>(0);

  const [sellingPrice, setSellingPrice] = useState<number>(0);
  const [markUp, setMarkUp] = useState<number>(0);
  const [jobCost, setJobCost] = useState<number>(0);
  const [estimatedJobCost, setEstimatedJobCost] = useState<number>(0);
  const [companyOverhead, setCompanyOverhead] = useState<number>(0);
  // const inputRef = useRef<HTMLInputElement>(null);

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

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const estimateHandleSubmit = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "estimate"), {
        estimate_number: estimateNumb || null,
        hourly_rate: +hourlyRate || null,
        time_required: +timeRequired || null,
        material_cost: +materialCost || null,
        estimate_description: estimateDescription || null,
        // labor_cost: countLaborCost,
        estimated_job_cost: +estimatedJobCost || null,
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

  const handlerInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    inputName: (value: number | string) => void
  ) => {
    event.preventDefault();
    // if(inputName === setEstimateNumb ||  setEstimateDescription){

    // }
    const numberValue =
      inputName === setEstimateNumb || inputName === setEstimateDescription
        ? event.target.value
        : +event.target.value;
    inputName(numberValue);
  };

  const countLaborCost = () => {
    setLaborCost(sellingPrice - materialCost);
  };

  const countEstimatedJobCost = () => {
    setEstimatedJobCost(hourlyRate * timeRequired + materialCost);
  };
  const fetchDataAndUpdateState = async () => {
    const updatedData = await estimateHandleSubmit(); // This is an async call to fetch data
    
    setHourlyRate(updatedData.hourlyRate);
    setTimeRequired(updatedData.timeRequired);
    setMaterialCost(updatedData.materialCost);
  };

  useEffect(() => {
    countEstimatedJobCost();
  }, [hourlyRate, timeRequired, materialCost, estimatedJobCost]);

  const countJobCost = () => {
    setJobCost(100 % -markUp);
  };

  const countMarkUp = () => {
    setMarkUp(companyOverhead + profitInPercent);
  };

  const countProfitInMoney = () => {
    setProfitInMoney(sellingPrice * profitInPercent);
  };

  const AddProfitPercent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfitInPercent(parseInt(event.target.value));
  };

  const contextValue = {
    toggle,
    toggleHandler,
    estimate,
    estimateHandleSubmit,
    estimateNumb,
    setEstimateNumb,
    handlerInputChange,
    setHourlyRate,
    setTimeRequired,
    setMaterialCost,
    setEstimateDescription,
    hourlyRate,
    timeRequired,
    materialCost,
    setEstimate,
    estimateDescription,
    setLaborCost,
    setSellingPrice,
    setWorkerQuantity,
    laborCost,
    sellingPrice,
    workerQuantity,
    countEstimatedJobCost,
    fetchDataAndUpdateState: async () => {
      // This should contain logic to fetch data and update state accordingly
      // For now, it's a placeholder to align with the type definition
    },
  };
  return (
    <AddEstimateContext.Provider value={contextValue}>
      {children}
    </AddEstimateContext.Provider>
  );
}
