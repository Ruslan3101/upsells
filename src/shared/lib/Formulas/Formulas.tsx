import { useAddEstimate } from "app/providers/AddEstimateProvider/lib/EstimateContext";

const {
  materialCost,
  sellingPrice,
  setLaborCost,
  setEstimatedJobCost,
  hourlyRate,
  timeRequired,
  setJobCost,
  markUp,
  setMarkUp,
  companyOverhead,
  profitInPercent,
  setProfitInMoney,
  setProfitInPercent
} = useAddEstimate;

export const countLaborCost = () => {
  setLaborCost(sellingPrice - materialCost);
};

export const countEstimatedJobCost = () => {
  setEstimatedJobCost(hourlyRate * timeRequired + materialCost);
};

export const countJobCost = () => {
  setJobCost(100 % -markUp);
};

export const countMarkUp = () => {
  setMarkUp(companyOverhead + profitInPercent);
};

export const countProfitInMoney = () => {
  setProfitInMoney(sellingPrice * profitInPercent);
};

export const AddProfitPercent = (event: React.ChangeEvent<HTMLInputElement>) => {
  setProfitInPercent(parseInt(event.target.value));
};
