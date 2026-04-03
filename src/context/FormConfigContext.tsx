import React, { createContext, useContext, useEffect } from 'react';
import type { FormSection } from '../constants';
import { useForm } from './FormContext';

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
}> = ({ config, children }) => {
  const { setSection } = useForm();

  // Reset to section 1 whenever a different module mounts
  useEffect(() => {
    setSection(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.label]);

  return (
    <FormConfigContext.Provider value={config}>
      {children}
    </FormConfigContext.Provider>
  );
};

export const useFormConfig = () => {
  const ctx = useContext(FormConfigContext);
  if (!ctx) throw new Error('useFormConfig must be used within FormConfigProvider');
  return ctx;
};
