"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Service = {
  id: number | string;
  title?: string;
  icon?: string;
  text?: string;
  type?: string;
  category?: string;
  skills?: string;
  status?: string;
  details?: string;
  approach?: string;
  expertise?: string;
  imgS?: string;
  imgM?: string;
};

type ServiceContextValue = {
  selectedService: Service | null;
  setSelectedService: (s: Service | null) => void;
};

const ServiceContext = createContext<ServiceContextValue | undefined>(
  undefined
);

export function ServiceProvider({ children }: { children: React.ReactNode }) {
  const [selectedService, setSelectedService] = useState<Service | null>(
    null
  );
  useEffect(() => {
    if (selectedService) {
      document.documentElement.classList.add("popup-active");
    } else {
      document.documentElement.classList.remove("popup-active");
    }
  }, [selectedService]);

  return (
    <ServiceContext.Provider
      value={{ selectedService, setSelectedService }}
    >
      {children}
    </ServiceContext.Provider>
  );
}

export function useService() {
  const ctx = useContext(ServiceContext);
  if (!ctx)
    throw new Error("useService must be used inside <ServiceProvider />");
  return ctx;
}