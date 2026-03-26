import React from 'react';
import { FormProvider } from './context/FormContext';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { useForm } from './context/FormContext';
import { Section1_Overview } from './components/sections/Section1_Overview';
import { Section2_Cost } from './components/sections/Section2_Cost';
import { Section3_Location } from './components/sections/Section3_Location';
import { Section4_Funding } from './components/sections/Section4_Funding';
import { Section5_Objectives } from './components/sections/Section5_Objectives';
import { Section6_Description } from './components/sections/Section6_Description';
import { Section7_CostEstimation } from './components/sections/Section7_CostEstimation';
import { Section8_OperatingCost } from './components/sections/Section8_OperatingCost';
import { Section9_DemandSupply } from './components/sections/Section9_DemandSupply';
import { Section10_FinancialPlan } from './components/sections/Section10_FinancialPlan';
import { Section11_Benefits } from './components/sections/Section11_Benefits';
import { Section12_Schedule } from './components/sections/Section12_Schedule';
import { Section13_Management } from './components/sections/Section13_Management';
import { Section14_AdditionalProjects } from './components/sections/Section14_AdditionalProjects';
import { Section15_Certificate } from './components/sections/Section15_Certificate';
import { Section16_Checklist } from './components/sections/Section16_Checklist';
import { Section17_Relation } from './components/sections/Section17_Relation';
import { Section18_Appraisal } from './components/sections/Section18_Appraisal';

const FormContent = () => {
  const { currentSection } = useForm();
  
  switch(currentSection) {
    case 1: return <Section1_Overview />;
    case 2: return <Section2_Cost />;
    case 3: return <Section3_Location />;
    case 4: return <Section4_Funding />;
    case 5: return <Section5_Objectives />;
    case 6: return <Section6_Description />;
    case 7: return <Section7_CostEstimation />;
    case 8: return <Section8_OperatingCost />;
    case 9: return <Section9_DemandSupply />;
    case 10: return <Section10_FinancialPlan />;
    case 11: return <Section11_Benefits />;
    case 12: return <Section12_Schedule />;
    case 13: return <Section13_Management />;
    case 14: return <Section14_AdditionalProjects />;
    case 15: return <Section15_Certificate />;
    case 16: return <Section16_Checklist />;
    case 17: return <Section17_Relation />;
    case 18: return <Section18_Appraisal />;
    default: return <div className="card">Section {currentSection} is under development.</div>;
  }
};

function App() {
  return (
    <FormProvider>
      <DashboardLayout>
        <FormContent />
      </DashboardLayout>
    </FormProvider>
  );
}

export default App;
