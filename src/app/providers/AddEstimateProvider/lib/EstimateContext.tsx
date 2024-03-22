import {
  query,
  collection,
  onSnapshot,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import {
  ReactNode,
  SyntheticEvent,
  createContext,
  useContext,
  useEffect,
  useRef,
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
  estimateNumb: Estimate[];
  hourlyRate: number;
  timeRequired: number;
  materialCost: number;
  estimateDescription: Estimate[];
  laborCost: Estimate[];
  sellingPrice: Estimate[];
  workerQuantity: Estimate[];
  estimateHandleSubmit: () => void;
  fetchDataAndUpdateState: () => void;
  toggleHandler: () => void;
  countEstimatedJobCost: (value: number) => void;
  handlerInputChange: (value: string) => string;
  setEstimateNumb: (value: string) => void;
  setHourlyRate: (value: number) => void;
  setTimeRequired: (value: number) => void;
  setMaterialCost: (value: number) => number;
  setEstimateDescription: (value: string) => void;
  setEstimate: (value: string) => void;
  setLaborCost: (value: number) => void;
  setSellingPrice: (value: number) => void;
  setWorkerQuantity: (value: number) => void;

  // handlerFormChange: (value: string) => void;
}
export const AddEstimateContext = createContext<AddEstimateContextType>(null!);

export function useAddEstimate() {
  return useContext(AddEstimateContext);
}

export function AddEstimateProvider({ children }: AddEstimateProps) {
  const [estimate, setEstimate] = useState<Estimate[]>([]);
  const [toggle, setToggle] = useState(false);
  const [estimateNumb, setEstimateNumb] = useState("");
  const [hourlyRate, setHourlyRate] = useState<number>(0);
  const [timeRequired, setTimeRequired] = useState<number>(0);
  const [materialCost, setMaterialCost] = useState<number>(0);
  const [laborCost, setLaborCost] = useState(0);
  const [workerQuantity, setWorkerQuantity] = useState(0);
  const [estimateDescription, setEstimateDescription] = useState("");

  const [profitInPercent, setProfitInPercent] = useState(0);
  const [profitInMoney, setProfitInMoney] = useState(0);

  const [sellingPrice, setSellingPrice] = useState(0);
  const [markUp, setMarkUp] = useState(0);
  const [jobCost, setJobCost] = useState(0);
  const [estimatedJobCost, setEstimatedJobCost] = useState<number>(0);
  const [companyOverhead, setCompanyOverhead] = useState(0);
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
    inputName: (value: string) => void
  ) => {
    // event.preventDefault();
    inputName(event.target.value);
  };

  const countLaborCost = () => {
    setLaborCost(sellingPrice - materialCost);
  };

  const countEstimatedJobCost = () => {
    setEstimatedJobCost(hourlyRate * timeRequired + materialCost);
    console.log("HR ", typeof hourlyRate);
    console.log("TR ", typeof timeRequired);
    console.log("MC ", typeof materialCost);
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

  const context = {
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
    fetchDataAndUpdateState,
  };
  return (
    <AddEstimateContext.Provider value={context}>
      {children}
    </AddEstimateContext.Provider>
  );
}
