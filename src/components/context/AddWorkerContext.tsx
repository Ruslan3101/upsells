import { FC, createContext, useContext, useState } from "react";

interface ExtraWorker {
  id: number;
  // text: string;
}

export interface AddWorkerProps {
  handleAddTechClick: () => void;
  handleRemoveTechClick: (id: number) => void;
  addTech: ExtraWorker[];
}

export const AddWorkerContext = createContext<AddWorkerProps>({});

export function useAddWorker() {
  return useContext(AddWorkerContext);
}

export function AddWorkerProvider({ children }: AddWorkerProps) {
  const [addTech, setAddTech] = useState<ExtraWorker[]>([]);

  const handleAddTechClick = () => {
    setAddTech((originalTech) => [
      ...originalTech,
      {
        id: originalTech.length + 1,
        //   text: "Extra Tech in count $65",
      },
    ]);
  };

  const handleRemoveTechClick = (id: number) => {
    const updatedTechList = addTech.filter((tech) => tech.id !== id);
    setAddTech([...updatedTechList]);
  };

  return;
  <AddWorkerContext.Provider
    value={{
      handleAddTechClick,
      handleRemoveTechClick,
      addTech,
    }}
  >
    {children}
  </AddWorkerContext.Provider>;
}
