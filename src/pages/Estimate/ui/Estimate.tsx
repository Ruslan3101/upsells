import { EstimateDisplayCard } from "../../../widgets/estimate/ui/EstimateDisplayCard.tsx";
import { EstimateInputForm } from "../../../widgets/estimate/ui/EstimateInputForm.tsx";

export function Estimate() {
  return (
    <div>
      <EstimateInputForm />
      <EstimateDisplayCard />
    </div>
  );
}
