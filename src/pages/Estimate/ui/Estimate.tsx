import { SellsPriceCard } from "../../../widgets/estimate/ui/SellsPriceCard.tsx";
import { EstimateInputForm } from "../../../widgets/estimate/ui/EstimateInputForm.tsx";


export function Estimate() {
  return (
    <div>
      <EstimateInputForm />
      <SellsPriceCard />
    </div>
  );
}
