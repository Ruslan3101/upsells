export type Estimate = {

  labor_cost: number;
  estimateNumber: string;
  date: string;
  estimateId: string;
  hourlyRate: number;
  workerQuantity: number;
  timeRequired: number;
  salesTax: number;
  profitInPercent: number;
  overhead: number;
  sellingPrice: number;
  laborCost: number;
  materialCost: number;
  estimateDescription: string;
  id: string;
};
// export type EventDate = {
//   date: Date;
//   event: Estimate;
//   active: boolean;
// };

export type InputProps = {
  text?: string;
  ariaLabel?: string;
  className?: string;
  style?: Partial<{
    width: string;
    height: string;
  }
  >;
  value: string;
  onChange: () => void
};
