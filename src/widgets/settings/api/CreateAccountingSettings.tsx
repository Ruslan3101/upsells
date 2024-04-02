import { Estimate } from "components/types/types";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "shared/api";

export const CreateAccountingSettings = () => {


   const AccountingSettingsHandlerSubmit = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "company_settings"), {
        overhead: companyOverhead || null,
        profit_in_percent: profitInPercent || null,
        sales_tax: salesTax || null,
      });
      console.log({
        overhead: companyOverhead,
        profit_in_percent: profitInPercent,
        sales_tax: salesTax,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (event) {
      console.error("Error adding document: ", event);
    }
  };
}