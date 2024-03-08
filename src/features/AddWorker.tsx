import { useState } from "react";

interface ExtraWorkerId {
  id: number;
}

export interface AddWorkerProps {
  handleAddTechClick: () => void;
  handleRemoveTechClick: (id: number) => void;
  addTech: ExtraWorkerId[];
}

export function AddWorker(): AddWorkerProps {
  const [addTech, setAddTech] = useState<ExtraWorkerId[]>([]);

  const handleAddTechClick = () => {
    setAddTech((currentTech) => [
      ...currentTech,
      {
        id: currentTech.length + 1,
      },
    ]);
  };

  const handleRemoveTechClick = (id: number) => {
    setAddTech((currentTech) => {
      return currentTech.filter((tech) => tech.id !== id);
    });
  };

  return {
    handleAddTechClick,
    handleRemoveTechClick,
    addTech,
  };
}
