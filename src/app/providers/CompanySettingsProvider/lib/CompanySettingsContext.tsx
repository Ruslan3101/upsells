import { AddEstimateContext } from "app/providers/AddEstimateProvider/lib/EstimateContext";
import { ReactNode, createContext, useContext, useState } from "react";

export interface AddCompanySettingsProps {
    children: ReactNode;
  }

export const AddCompanySettingsContext= createContext(null!);
export function useAddCompanySettings() {
    return useContext(AddCompanySettingsContext)
}

export function AddCompanySettingsProvider({children}: AddCompanySettingsProps){
    const [profitInPercent, setProfitInPercent] = useState(0);
    const [profitInMoney, setProfitInMoney] = useState(0);
    const [sellingPrice, setSellingPrice] = useState(0);
    const [markUp, setMarkUp] = useState(0);
    const [jobCost, setJobCost] = useState(0);
    const [estimatedJobCost, setEstimatedJobCost] = useState(0);
    const [companyOverhead, setCompanyOverhead] = useState(0)

    

    const context ={};

    return (
        <AddEstimateContext.Provider value={context}>
            {children}
        </AddEstimateContext.Provider>
    )
}