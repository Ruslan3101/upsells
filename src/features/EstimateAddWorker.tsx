import { useState } from "react";

interface InputId {
  id: number;
  text: string;
}

export interface WorkerInput {
  handleAddTechClick: () => void;
  handleRemoveTechClick: (id: number) => void;
  addTech: InputId[];
}

export function EstimateAddWorker(): WorkerInput {
  const [addTech, setAddTech] = useState<InputId[]>([]);

  const handleAddTechClick = () => {
    setAddTech((originalTech) => [
      ...originalTech,
      {
        id: originalTech.length + 1,
        text: "Extra Tech in count $65",
      },
    ]);
  };

  const handleRemoveTechClick = (id: number) => {
    const updatedTechList = addTech.filter((tech) => tech.id !== id);
    setAddTech([...updatedTechList]);
  };

  return {
    handleAddTechClick,
    handleRemoveTechClick,
    addTech,
  };
}
