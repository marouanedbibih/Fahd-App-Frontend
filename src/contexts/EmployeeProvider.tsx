// Filename: EmployeeProvider.tsx

"use client";

import { IEmployee, IEmployeeRequest } from "@/types/employee";
import React, { createContext, useState, ReactNode, useContext } from "react";

// Define the type for the context state
interface EmployeeContextProps {
  data: IEmployee[] | null;
  setData: (data: IEmployee[] | null) => void;
  request: IEmployeeRequest;
  setRequest: (request: IEmployeeRequest) => void;
  initRequest: () => void;
  searchKeyword: string;
  setSearchKeyword: (searchKeyword: string) => void;
}

// Create the context
const EmployeeContext = createContext<EmployeeContextProps | undefined>(
  undefined
);

// Define the provider component
const EmployeeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<IEmployee[] | null>(null);
  const [request, setRequest] = useState<IEmployeeRequest>({
    username: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    job: "",
    departementId: 1,
    isSecretary: false,
  });

  const initRequest = () => {
    setRequest({
      username: "",
      name: "",
      email: "",
      phone: "",
      password: "",
      job: "",
      departementId: 1,
      isSecretary: false,
    });
  };

  const [searchKeyword, setSearchKeyword] = useState<string>("");

  return (
    <EmployeeContext.Provider
      value={{
        data,
        setData,
        request,
        setRequest,
        initRequest,
        searchKeyword,
        setSearchKeyword,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

// Custom hook to use the context
export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error(
      "useEmployeeContext must be used within an EmployeeProvider"
    );
  }
  return context;
};

export { EmployeeProvider };
