import React, { createContext, useContext } from 'react';
import type { FormSection } from '../constants';

interface FormConfig {
  label: string;
  title: string;
  breadcrumb: string;
  sections: FormSection[];
  totalSections: number;
}

const FormConfigContext = createContext<FormConfig | undefined>(undefined);

export const FormConfigProvider: React.FC<{
  config: FormConfig;
  children: React.ReactNode;
}> = ({ config, children }) => (
  <FormConfigContext.Provider value={config}>
    {children}
  </FormConfigContext.Provider>
);

export const useFormConfig = () => {
  const ctx = useContext(FormConfigContext);
  if (!ctx) throw new Error('useFormConfig must be used within FormConfigProvider');
  return ctx;
};
