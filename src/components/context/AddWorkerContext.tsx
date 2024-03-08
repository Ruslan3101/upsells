import { FC, ReactNode, createContext, useContext, useState } from "react";

export interface AddWorkerProps{
  children: ReactNode

}
interface ExtraWorker {
  id: number;
}

export interface AddWorkerContext {
  handleAddTechClick: () => void;
  handleRemoveTechClick: (id: number) => void;
  addTech: ExtraWorker[];
}

export const AddWorkerContext = createContext({} as AddWorkerContext);

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
        },
    ]);
  };

  const handleRemoveTechClick = (id: number) => {
    setAddTech((currentTech) => {
      return currentTech.filter((tech) => tech.id !== id);
    });
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
