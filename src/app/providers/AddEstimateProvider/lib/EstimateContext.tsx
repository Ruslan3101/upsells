import {
  query,
  collection,
  onSnapshot,
  addDoc,
  doc,
  updateDoc,
  getDoc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

import { Estimate } from "components/types/types";
import db from "../../../../shared/api/firebase/connectDB";
import { useGetData } from "../../../../shared/api/firebase/useGetData";

export interface AddEstimateProps {
  children: ReactNode;
}
export interface Item {
  id: string;
}
export interface AddEstimateContextType {
  toggle: boolean;
  estimateId: string;
  isButtonDisabled: boolean;
  estimate: Estimate[];
  estimateNumb: string;
  hourlyRate: number;
  timeRequired: number;
  materialCost: number;
  estimateDescription: string;
  laborCost: number;
  sellingPrice: number;
  workerQuantity: number;
  salesTax: number;
  profitInPercent: number;
  accountingSettings: number;
  companyOverhead: number;
  estimateHandlerSubmit: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => Promise<void>;
  AccountingSettingsHandlerSubmit: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => Promise<void>;
  fetchDataAndUpdateState: () => void;
  toggleHandler: () => void;
  countEstimatedJobCost: () => void;
  handlerInputChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    inputName: (value: number | string) => void
  ) => void;
  setEstimateNumb: (value: string) => void;
  setHourlyRate: (value: number) => void;
  setTimeRequired: (value: number) => void;
  setMaterialCost: (value: number) => void;
  setEstimateDescription: (value: string) => void;
  setEstimate: (value: Estimate[]) => void;
  setLaborCost: (value: number) => void;
  setSellingPrice: (value: number) => void;
  setWorkerQuantity: (value: number) => void;
  setProfitInPercent: (value: number) => void;
  setCompanyOverhead: (value: number) => void;
  setSalesTax: (value: number) => void;
  displayCustomerCard(key: string): string;

  // handlerFormChange: (value: string) => void;
}

const defaultContextValue: AddEstimateContextType = {
  // Provide a default value that matches the expected type for all properties.
  // This helps avoid using null! and improves type safety.
  toggle: false,
  isButtonDisabled: false,
  estimate: [],
  estimateNumb: "",
  hourlyRate: 0,
  timeRequired: 0,
  materialCost: 0,
  laborCost: 0,
  sellingPrice: 0,
  workerQuantity: 0,
  salesTax: 0,
  estimateDescription: "",

  estimateHandlerSubmit: async () => {},
  AccountingSettingsHandlerSubmit: async () => {},
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
  setProfitInPercent: () => {},
  setCompanyOverhead: () => {},
  setSalesTax: () => {},
  countEstimatedJobCost: () => {},
};

export const AddEstimateContext =
  createContext<AddEstimateContextType>(defaultContextValue);

export function useAddEstimate() {
  return useContext(AddEstimateContext);
}

export function AddEstimateProvider({ children }: AddEstimateProps) {
  const [toggle, setToggle] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [estimateNumb, setEstimateNumb] = useState<string>("");
  const [estimateId, setEstimateId] = useState<string>("");
  const [hourlyRate, setHourlyRate] = useState<number>(0);
  const [timeRequired, setTimeRequired] = useState<number>(0);
  const [materialCost, setMaterialCost] = useState<number>(0);
  const [materialTaxAmount, setMaterialTaxAmount] = useState<number>(0);
  const [laborCost, setLaborCost] = useState<number>(0);
  const [workerQuantity, setWorkerQuantity] = useState<number>(1);
  const [estimateDescription, setEstimateDescription] = useState<string>("");

  const [profitInPercent, setProfitInPercent] = useState<number>(0);
  const [profitInMoney, setProfitInMoney] = useState<number>(0);
  const [salesTax, setSalesTax] = useState<number>(0);

  const [sellingPrice, setSellingPrice] = useState<number>(0);
  const [markUp, setMarkUp] = useState<number>(0);
  const [jobCost, setJobCost] = useState<number>(0);
  const [estimatedJobCost, setEstimatedJobCost] = useState<number>(0);
  const [companyOverhead, setCompanyOverhead] = useState<number>(0);
  const [settingsInitialState, setSettingsInitialState] = useState({
    companyOverhead: 0,
    profitInPercent: 0,
    salesTax: 0,
  });

  // Custom Hooks
  const [estimate, setEstimate] = useGetData("estimate"); // Displaying Estimates Custom Hook
  const [accountingSettings, setAccountingSettings] =
    useGetData("company_settings"); // Displaying Accounting Settings Custom Hook

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const estimateHandlerSubmit = async (
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
        estimated_job_cost: +estimatedJobCost || null,
        labor_cost: +laborCost,
        selling_price: sellingPrice,
        worker_quantity: workerQuantity,
        mark_up: markUp,
        job_cost: jobCost,
        sales_tax: salesTax,
        material_tax_amount: materialTaxAmount,
        date: serverTimestamp(),
      });
      setEstimateId(docRef.id);
      console.log("Document written with ID: ", docRef.id);
    } catch (event) {
      console.error("Error adding document: ", event);
    }
  };

  const getProfileId = (): string | undefined => {
    if (Array.isArray(accountingSettings) && accountingSettings.length > 0) {
      return accountingSettings[0].id;
    } else return undefined;
  };

  const profileId = getProfileId();

  useEffect(() => {
    const fetchData = async () => {
      if (profileId !== undefined) {
        const docRef = doc(db, "company_settings", profileId);
        try {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setSettingsInitialState({
              companyOverhead: Number(data.overhead),
              profitInPercent: Number(data.profit_in_percent),
              salesTax: Number(data.sales_tax),
            });
            setCompanyOverhead(Number(data.overhead));
            setProfitInPercent(Number(data.profit_in_percent));
            setSalesTax(Number(data.sales_tax));
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching document: ", error);
        }
      }
    };
    fetchData();
  }, [profileId]);

  const hasChanged = () => {
    return (
      companyOverhead !== settingsInitialState.companyOverhead ||
      profitInPercent !== settingsInitialState.profitInPercent ||
      salesTax !== settingsInitialState.salesTax
    );
  };

  // Creating Accounting Settings in DB
  const AccountingSettingsHandlerSubmit = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    if (!hasChanged()) {
      console.log("No Changes to Update");
      return;
    }
    const updateObject = {};
    if (companyOverhead !== settingsInitialState.companyOverhead)
      updateObject.overhead = companyOverhead;
    if (profitInPercent !== settingsInitialState.profitInPercent)
      updateObject.profit_in_percent = profitInPercent;
    if (salesTax !== settingsInitialState.salesTax)
      updateObject.sales_tax = salesTax;
    updateObject.lastUpdated = serverTimestamp();

    setIsButtonDisabled(true);
    if (profileId !== undefined) {
      // Correctly use profileId as the argument to doc()
      const docRef = doc(db, "company_settings", profileId);

      try {
        await updateDoc(docRef, updateObject);
        console.log("Document updated Successfully");
        setSettingsInitialState({
          companyOverhead: companyOverhead,
          profitInPercent: profitInPercent,
          salesTax: salesTax,
        });
      } catch (error) {
        console.error("Error fetching document: ", error);
      } finally {
        setIsButtonDisabled(false);
      }
    }
  };

  const handlerInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    inputName: (value: number | string) => void
  ) => {
    event.preventDefault();
    const numberValue =
      inputName === setEstimateNumb || inputName === setEstimateDescription
        ? event.target.value
        : +event.target.value;
    inputName(numberValue);
    setIsButtonDisabled(false);
  };

  const countEstimatedJobCost = () => {
    accountingSettings.map((data) => {
      setCompanyOverhead(data.overhead);
      setProfitInPercent(data.profit_in_percent);
      setSalesTax(data.sales_tax);
    });
    setMaterialTaxAmount(materialCost * (salesTax / 100));

    setEstimatedJobCost(
      hourlyRate * timeRequired + materialCost + materialTaxAmount
    );

    setLaborCost(Math.ceil(sellingPrice - materialTaxAmount));
    setMarkUp(companyOverhead + profitInPercent);
    setJobCost(100 - markUp);
    setProfitInMoney(sellingPrice * profitInPercent);
    setSellingPrice(
      parseFloat((estimatedJobCost / (jobCost / 100)).toFixed(2))
    );
  };

  useEffect(() => {
    countEstimatedJobCost();
  }, [hourlyRate, timeRequired, materialCost, estimatedJobCost]);

  const contextValue = {
    toggle,
    estimateId,
    toggleHandler,
    estimate,
    salesTax,
    profitInPercent,
    companyOverhead,
    estimateHandlerSubmit,
    estimateNumb,
    setEstimateNumb,
    handlerInputChange,
    setHourlyRate,
    setTimeRequired,
    setMaterialCost,
    setEstimateDescription,
    setProfitInPercent,
    setCompanyOverhead,
    setSalesTax,
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
    isButtonDisabled,
    accountingSettings,
    AccountingSettingsHandlerSubmit,
  };
  return (
    <AddEstimateContext.Provider value={contextValue}>
      {children}
    </AddEstimateContext.Provider>
  );
}
