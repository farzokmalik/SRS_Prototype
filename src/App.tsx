import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { FormProvider } from './context/FormContext';
import { FormConfigProvider } from './context/FormConfigContext';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { DashboardHome } from './pages/DashboardHome';
import { LoginPage } from './pages/LoginPage';
import { useForm } from './context/FormContext';
import { PC1_SECTIONS, PC2_SECTIONS, PCN_SECTIONS, PC3A_SECTIONS, PC3B_SECTIONS, PC4_SECTIONS, PC5_SECTIONS, PC4_PROGRAMS_SECTIONS, PC5_PROGRAMS_SECTIONS } from './constants';

import { Section1_Overview } from './components/sections/pc1_projects/Section1_Overview';
import { Section2_RevisionHistory } from './components/sections/pc1_projects/Section20_ Addition of Upward Revision of Development Project';
import { Section3_Location } from './components/sections/pc1_projects/Section3_Location';
import { Section3_Responsibilities } from './components/sections/pc1_projects/Section3_Responsibilities';
import { Section4_Funding } from './components/sections/pc1_projects/Section4_Funding';
import { Section5_Objectives } from './components/sections/pc1_projects/Section5_Objectives';
import { Section6_Description } from './components/sections/pc1_projects/Section6_Description';
import { Section7_CostEstimation } from './components/sections/pc1_projects/Section7_CostEstimation';
import { Section8_OperatingCost } from './components/sections/pc1_projects/Section8_OperatingCost';
import { Section9_DemandSupply } from './components/sections/pc1_projects/Section9_DemandSupply';
import { Section10_FinancialPlan } from './components/sections/pc1_projects/Section10_FinancialPlan';
import { Section11_Benefits } from './components/sections/pc1_projects/Section11_Benefits';
import { Section12_Schedule } from './components/sections/pc1_projects/Section12_Schedule';
import { Section13_Management } from './components/sections/pc1_projects/Section13_Management';
import { Section14_AdditionalProjects } from './components/sections/pc1_projects/Section14_AdditionalProjects';
import { Section15_Certificate } from './components/sections/pc1_projects/Section15_Certificate';
import { Section16_Checklist } from './components/sections/pc1_projects/Section16_Checklist';
import { Section17_Relation } from './components/sections/pc1_projects/Section17_Relation';
import { Section18_Appraisal } from './components/sections/pc1_projects/Section18_Appraisal';
import { Section19_FocusOnMarginalisation } from './components/sections/pc1_projects/Section19_FocusOnMarginalisation';

import { PC2Section1_Overview } from './components/pc2/PC2Section1_Overview';
import { PC2Section3_Location } from './components/pc2/PC2Section3_Location';
import { PC2Section4_Funding } from './components/pc2/PC2Section4_Funding';
import { PC2Section5_Objectives } from './components/pc2/PC2Section5_Objectives';
import { PC2Section6_Description } from './components/pc2/PC2Section6_Description';
import { PC2Section7_CostEstimation } from './components/pc2/PC2Section7_CostEstimation';
import { PC2Section8_StudyTORS } from './components/pc2/PC2Section8_StudyTORS';
import { PC2Section9_StudyTORS2 } from './components/pc2/PC2Section9_StudyTORS2';
import { PC2Section10_ActivitiesPlan } from './components/pc2/PC2Section10_ActivitiesPlan';
import { PC2Section11_StudiesUndertaken } from './components/pc2/PC2Section11_StudiesUndertaken';
import { PC2Section12_ManagementManpower } from './components/pc2/PC2Section12_ManagementManpower';
import { PC2Section14_InitialScrutinyChecklist } from './components/pc2/PC2Section14_InitialScrutinyChecklist';

// PCN Sections
import { Section1_ProjectTitle as PCN_Section1 } from './components/sections/pcn/Section1_ProjectTitle';
import { Section2_ProponentInfo as PCN_Section2 } from './components/sections/pcn/Section2_ProponentInfo';
import { Section3_GoalsObjectives as PCN_Section3 } from './components/sections/pcn/Section3_GoalsObjectives';
import { Section4_FundingRationale as PCN_Section4 } from './components/sections/pcn/Section4_FundingRationale';
import { Section5_GeographicalCoverage as PCN_Section5 } from './components/sections/pcn/Section5_GeographicalCoverage';
import { Section6_StrategicAlignment as PCN_Section6 } from './components/sections/pcn/Section6_StrategicAlignment';
import { Section7_SDGCompliance as PCN_Section7 } from './components/sections/pcn/Section7_SDGCompliance';
import { Section8_SimilarFacility as PCN_Section8 } from './components/sections/pcn/Section8_SimilarFacility';
import { Section9_GestationPeriod as PCN_Section9 } from './components/sections/pcn/Section9_GestationPeriod';
import { Section10_FinancialPhasing as PCN_Section10 } from './components/sections/pcn/Section10_FinancialPhasing';
import { Section11_OperatingCost as PCN_Section11 } from './components/sections/pcn/Section11_OperatingCost';
import { Section12_Beneficiaries as PCN_Section12 } from './components/sections/pcn/Section12_Beneficiaries';
import { Section13_ExpectedOutputs as PCN_Section13 } from './components/sections/pcn/Section13_ExpectedOutputs';
import { Section14_Priority as PCN_Section14 } from './components/sections/pcn/Section14_Priority';
import { Section15_GrowthStrategy as PCN_Section15 } from './components/sections/pcn/Section15_GrowthStrategy';

// PC-III Form A Sections
import { Section1_Overview as PC3A_Section1 } from './components/sections/pc3/a/Section1_Overview';
import { Section5_AnnualWorkPlan as PC3A_Section2 } from './components/sections/pc3/a/Section5_AnnualWorkPlan';
import { Section6_QuarterlyWorkPlan as PC3A_Section3 } from './components/sections/pc3/a/Section6_QuarterlyWorkPlan';
import { Section7_CashPlan as PC3A_Section4 } from './components/sections/pc3/a/Section7_CashPlan';
import { Section8_Indicators as PC3A_Section5 } from './components/sections/pc3/a/Section8_Indicators';

// PC-III Form B Sections
import { Section1_MonthlyOverview as PC3B_Section1 } from './components/sections/pc3/b/Section1_MonthlyOverview';
import { Section3_PhysicalStatus as PC3B_Section2 } from './components/sections/pc3/b/Section3_PhysicalStatus';
import { Section4_MonthlyIndicators as PC3B_Section3 } from './components/sections/pc3/b/Section4_MonthlyIndicators';
import { Section5_Bottlenecks as PC3B_Section4 } from './components/sections/pc3/b/Section5_Bottlenecks';

// PC-I Programs Sections
import { Section1_Overview as PC1P_Section1 } from './components/sections/pc1_programs/Section1_Overview';
import { Section2_RevisionHistory as PC1P_Section2_Rev } from './components/sections/pc1_programs/Section20_ Addition of Upward Revision of Development Project';
import { Section3_Location as PC1P_Section3 } from './components/sections/pc1_programs/Section3_Location';
import { Section3_Responsibilities as PC1P_Section3_Resp } from './components/sections/pc1_programs/Section3_Responsibilities';
import { Section4_Funding as PC1P_Section4 } from './components/sections/pc1_programs/Section4_Funding';
import { Section5_Objectives as PC1P_Section5 } from './components/sections/pc1_programs/Section5_Objectives';
import { Section6_Description as PC1P_Section6 } from './components/sections/pc1_programs/Section6_Description';
import { Section7_CostEstimation as PC1P_Section7 } from './components/sections/pc1_programs/Section7_CostEstimation';
import { Section8_OperatingCost as PC1P_Section8 } from './components/sections/pc1_programs/Section8_OperatingCost';
import { Section9_DemandSupply as PC1P_Section9 } from './components/sections/pc1_programs/Section9_DemandSupply';
import { Section10_FinancialPlan as PC1P_Section10 } from './components/sections/pc1_programs/Section10_FinancialPlan';
import { Section11_Benefits as PC1P_Section11 } from './components/sections/pc1_programs/Section11_Benefits';
import { Section12_Schedule as PC1P_Section12 } from './components/sections/pc1_programs/Section12_Schedule';
import { Section13_Management as PC1P_Section13 } from './components/sections/pc1_programs/Section13_Management';
import { Section14_AdditionalPrograms as PC1P_Section14 } from './components/sections/pc1_programs/Section14_AdditionalProjects';
import { Section15_Certificate as PC1P_Section15 } from './components/sections/pc1_programs/Section15_Certificate';
import { Section16_Checklist as PC1P_Section16 } from './components/sections/pc1_programs/Section16_Checklist';
import { Section17_Relation as PC1P_Section17 } from './components/sections/pc1_programs/Section17_Relation';
import { Section18_Appraisal as PC1P_Section18 } from './components/sections/pc1_programs/Section18_Appraisal';
import { Section19_FocusOnMarginalisation as PC1P_Section19 } from './components/sections/pc1_programs/Section19_FocusOnMarginalisation';
// PC-4 Sections
import { Section1_Identification as PC4_Section1 } from './components/sections/pc4_projects/Section1_Identification';
import { Section2_Sector as PC4_Section2 } from './components/sections/pc4_projects/Section2_Sector';
import { Section3_AuthoritiesResponsible as PC4_Section3 } from './components/sections/pc4_projects/Section3_AuthoritiesResponsible';
import { Section4_DateOfApprovalForum as PC4_Section4 } from './components/sections/pc4_projects/Section4_DateOfApprovalForum';
import { ReAppropriationPage } from './components/re_appropriation/ReAppropriationPage';
import { Section7_Schedule as PC4_Section5 } from './components/sections/pc4_projects/Section7_Schedule';
import { Section6_TotalCost as PC4_Section6 } from './components/sections/pc4_projects/Section6_TotalCost';
import { Section7_FinancingOfProject as PC4_Section7 } from './components/sections/pc4_projects/Section7_FinancingOfProject';
import { Section8_ProjectAccounts as PC4_Section8 } from './components/sections/pc4_projects/Section8_ProjectAccounts';
import { Section9_FinancialPhasing as PC4_Section9 } from './components/sections/pc4_projects/Section9_FinancialPhasing';
import { Section10_PhysicalTargets as PC4_Section10 } from './components/sections/pc4_projects/Section10_PhysicalTargets';
import { Section11_ItemWisePlannedActual as PC4_Section11 } from './components/sections/pc4_projects/Section11_ItemWisePlannedActual';
import { Section12_RecurringCostAfterCompletion as PC4_Section12 } from './components/sections/pc4_projects/Section12_RecurringCostAfterCompletion';
import { Section13_AchievementOfObjectives as PC4_Section13 } from './components/sections/pc4_projects/Section13_AchievementOfObjectives';
import { Section14_YearWiseIncome as PC4_Section14 } from './components/sections/pc4_projects/Section14_YearWiseIncome';
import { Section15_ResultBasedMonitoring as PC4_Section15 } from './components/sections/pc4_projects/Section15_ResultBasedMonitoring';
import { Section16_ProjectDirectors as PC4_Section16 } from './components/sections/pc4_projects/Section16_ProjectDirectors';
import { Section17_AssetsResponsibility as PC4_Section17 } from './components/sections/pc4_projects/Section17_AssetsResponsibility';
import { Section18_ImpactAfterCompletion as PC4_Section18 } from './components/sections/pc4_projects/Section18_ImpactAfterCompletion';
import { Section19_SustainabilityMechanism as PC4_Section19 } from './components/sections/pc4_projects/Section19_20_Assets';
import {
  Section21_ImpactEvaluation as PC4_Section21,
  Section22_ImpactAnalysis as PC4_Section22,
  Section23_Suggestions as PC4_Section23Nav,
  Section23_EconomicAnalysis as PC4_Section23,
} from './components/sections/pc4_projects/Section21_23_Impact';
import { Section24_Certificate as PC4_Section24, Section25_ProjectAppraisalDocumentation as PC4_Section25 } from './components/sections/pc4_projects/Section24_25_IssuesLessons';

// PC-4 Programs
import { Section1_Identification as PC4P_Section1 } from './components/sections/pc4_programs/Section1_Identification';
import { Section2_Sector as PC4P_Section2 } from './components/sections/pc4_programs/Section2_Sector';
import { Section3_Sponsoring as PC4P_Section3, Section4_Executing as PC4P_Section4, Section5_OM as PC4P_Section5 } from './components/sections/pc4_programs/Section3_5_Agencies';
import { Section6_Approval as PC4P_Section6 } from './components/sections/pc4_programs/Section6_Approval';
import { Section7_Schedule as PC4P_Section7 } from './components/sections/pc4_programs/Section7_Schedule';
import { Section8_CapitalCost as PC4P_Section8 } from './components/sections/pc4_programs/Section8_CapitalCost';
import { Section9_Financing as PC4P_Section9, Section10_Accounts as PC4P_Section10 } from './components/sections/pc4_programs/Section9_10_Accounts';
import { Section11_PhasingExpenditure as PC4P_Section11 } from './components/sections/pc4_programs/Section11_PhasingExpenditure';
import { Section12_PhysicalAchievements as PC4P_Section12 } from './components/sections/pc4_programs/Section12_PhysicalAchievements';
import { Section13_ItemWiseExpenditure as PC4P_Section13 } from './components/sections/pc4_programs/Section13_ItemWiseExpenditure';
import { Section14_RecurringCosts as PC4P_Section14, Section15_ObjectivesAchievement as PC4P_Section15 } from './components/sections/pc4_programs/Section14_15_Objectives';
import { Section16_ClimateCoBenefits as PC4P_Section16, Section17_ProjectIncome as PC4P_Section17 } from './components/sections/pc4_programs/Section16_17_Income';
import { Section18_RBMIndicators as PC4P_Section18 } from './components/sections/pc4_programs/Section18_RBMIndicators';
import { Section19_PDHistory as PC4P_Section19, Section20_Assets as PC4P_Section20 } from './components/sections/pc4_programs/Section19_20_Assets';
import { Section21_ImpactEvaluation as PC4P_Section21, Section22_ImpactAnalysis as PC4P_Section22, Section23_EconomicAnalysis as PC4P_Section23 } from './components/sections/pc4_programs/Section21_23_Impact';
import { Section24_Issues as PC4P_Section24, Section25_Lessons as PC4P_Section25 } from './components/sections/pc4_programs/Section24_25_IssuesLessons';
import { Section26_AdditionalInfo as PC4P_Section26, Section27_Submission as PC4P_Section27 } from './components/sections/pc4_programs/Section26_27_Submission';
// Constants

// PC-5 Sections
import { Section1_Identification as PC5_Section1, Section2_Objectives as PC5_Section2 } from './components/sections/pc5_projects/Section1_2_Identification';
import { Section3_RecurringCost as PC5_Section3, Section4_Manpower as PC5_Section4 } from './components/sections/pc5_projects/Section3_4_Performance';
import { Section5_PhysicalOutput as PC5_Section5, Section6_ProjectIncome as PC5_Section6, Section7_EconomicBenefits as PC5_Section7 } from './components/sections/pc5_projects/Section5_7_OutputIncome';
import { Section8_SocialBenefits as PC5_Section8, Section9_ClimateResilience as PC5_Section9, Section10_CostPerUnit as PC5_Section10 } from './components/sections/pc5_projects/Section8_10_CostSocial';
import { Section11_Marketing as PC5_Section11, Section12_Maintenance as PC5_Section12, Section13_OutputTargets as PC5_Section13 } from './components/sections/pc5_projects/Section11_13_Operations';
import { Section14_LessonsLearned as PC5_Section14, Section15_ManagementChanges as PC5_Section15, Section16_Suggestions as PC5_Section16, Section17_Submission as PC5_Section17 } from './components/sections/pc5_projects/Section14_17_Submission';

// PC-5 Programs
import { Section1_Identification as PC5P_Section1, Section2_Objectives as PC5P_Section2 } from './components/sections/pc5_programs/Section1_2_Identification';
import { Section3_RecurringCost as PC5P_Section3, Section4_Manpower as PC5P_Section4 } from './components/sections/pc5_programs/Section3_4_Performance';
import { Section5_PhysicalOutput as PC5P_Section5, Section6_ProjectIncome as PC5P_Section6, Section7_EconomicBenefits as PC5P_Section7 } from './components/sections/pc5_programs/Section5_7_OutputIncome';
import { Section8_SocialBenefits as PC5P_Section8, Section9_ClimateResilience as PC5P_Section9, Section10_CostPerUnit as PC5P_Section10 } from './components/sections/pc5_programs/Section8_10_CostSocial';
import { Section11_Marketing as PC5P_Section11, Section12_Maintenance as PC5P_Section12, Section13_OutputTargets as PC5P_Section13 } from './components/sections/pc5_programs/Section11_13_Operations';
import { Section14_LessonsLearned as PC5P_Section14, Section15_ManagementChanges as PC5P_Section15, Section16_Suggestions as PC5P_Section16, Section17_Submission as PC5P_Section17 } from './components/sections/pc5_programs/Section14_17_Submission';

const PC1FormContent = () => {
  const { currentSection } = useForm();

  switch (currentSection) {
    case 1:  return <Section1_Overview />;
    case 2:  return <Section3_Location />;
    case 3:  return <Section3_Responsibilities />;
    case 4:  return <Section4_Funding />;
    case 5:  return <Section5_Objectives />;
    case 6:  return <Section6_Description />;
    case 7:  return <Section7_CostEstimation />;
    case 8:  return <Section8_OperatingCost />;
    case 9:  return <Section9_DemandSupply />;
    case 10: return <Section10_FinancialPlan />;
    case 11: return <Section11_Benefits />;
    case 12: return <Section12_Schedule />;
    case 13: return <Section13_Management />;
    case 14: return <Section14_AdditionalProjects />;
    case 15: return <Section15_Certificate />;
    case 16: return <Section16_Checklist />;
    case 17: return <Section17_Relation />;
    case 18: return <Section18_Appraisal />;
    case 19: return <Section19_FocusOnMarginalisation />;
    case 20: return <Section2_RevisionHistory />;
    default: return <div className="card">Section {currentSection} is under development.</div>;
  }
};

const PC2FormContent = () => {
  const { currentSection } = useForm();

  switch (currentSection) {
    case 1:  return <PC2Section1_Overview />;
    case 2:  return <PC2Section3_Location />;
    case 3:  return <PC2Section4_Funding />;
    case 4:  return <PC2Section5_Objectives />;
    case 5:  return <PC2Section6_Description />;
    case 6:  return <PC2Section7_CostEstimation />;
    case 7:  return <PC2Section8_StudyTORS />;
    case 8:  return <PC2Section9_StudyTORS2 />;
    case 9:  return <PC2Section10_ActivitiesPlan />;
    case 10: return <PC2Section11_StudiesUndertaken />;
    case 11: return <PC2Section12_ManagementManpower />;
    case 12: return <Section15_Certificate />;
    case 13: return <PC2Section14_InitialScrutinyChecklist />;
    case 14: return <Section18_Appraisal />;
    default: return <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
      <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9375rem' }}>
        Section {currentSection} is under development.
      </p>
    </div>;
  }
};

const PCNFormContent = () => {
  const { currentSection } = useForm();

  switch (currentSection) {
    case 1:  return <PCN_Section1 />;
    case 2:  return <PCN_Section2 />;
    case 3:  return <PCN_Section3 />;
    case 4:  return <PCN_Section4 />;
    case 5:  return <PCN_Section5 />;
    case 6:  return <PCN_Section6 />;
    case 7:  return <PCN_Section7 />;
    case 8:  return <PCN_Section8 />;
    case 9:  return <PCN_Section9 />;
    case 10: return <PCN_Section10 />;
    case 11: return <PCN_Section11 />;
    case 12: return <PCN_Section12 />;
    case 13: return <PCN_Section13 />;
    case 14: return <PCN_Section14 />;
    case 15: return <PCN_Section15 />;
    default: return <div className="card">Section {currentSection} is under development.</div>;
  }
};

const PC3AFormContent = () => {
  const { currentSection } = useForm();
  switch (currentSection) {
    case 1: return <PC3A_Section1 />;
    case 2: return <PC3A_Section2 />;
    case 3: return <PC3A_Section3 />;
    case 4: return <PC3A_Section4 />;
    case 5: return <PC3A_Section5 />;
    default: return <div className="card">Section {currentSection} is under development.</div>;
  }
};

const PC3BFormContent = () => {
  const { currentSection } = useForm();
  switch (currentSection) {
    case 1: return <PC3B_Section1 />;
    case 2: return <PC3B_Section2 />;
    case 3: return <PC3B_Section3 />;
    case 4: return <PC3B_Section4 />;
    default: return <div className="card">Section {currentSection} is under development.</div>;
  }
};

const PC1ProgramFormContent = () => {
  const { currentSection } = useForm();

  switch (currentSection) {
    case 1:  return <PC1P_Section1 />;
    case 2:  return <PC1P_Section3 />;
    case 3:  return <PC1P_Section3_Resp />;
    case 4:  return <PC1P_Section4 />;
    case 5:  return <PC1P_Section5 />;
    case 6:  return <PC1P_Section6 />;
    case 7:  return <PC1P_Section7 />;
    case 8:  return <PC1P_Section8 />;
    case 9:  return <PC1P_Section9 />;
    case 10: return <PC1P_Section10 />;
    case 11: return <PC1P_Section11 />;
    case 12: return <PC1P_Section12 />;
    case 13: return <PC1P_Section13 />;
    case 14: return <PC1P_Section14 />;
    case 15: return <PC1P_Section15 />;
    case 16: return <PC1P_Section16 />;
    case 17: return <PC1P_Section17 />;
    case 18: return <PC1P_Section18 />;
    case 19: return <PC1P_Section19 />;
    case 20: return <PC1P_Section2_Rev />;
    default: return <div className="card">Section {currentSection} is under development.</div>;
  }
};

const PC4FormContent = () => {
  const { currentSection } = useForm();

  switch (currentSection) {
    case 1:  return <PC4_Section1 />;
    case 2:  return <PC4_Section2 />;
    case 3:  return <PC4_Section3 />;
    case 4:  return <PC4_Section4 />;
    case 5:  return <PC4_Section5 />;
    case 6:  return <PC4_Section6 />;
    case 7:  return <PC4_Section7 />;
    case 8:  return <PC4_Section8 />;
    case 9:  return <PC4_Section9 />;
    case 10: return <PC4_Section10 />;
    case 11: return <PC4_Section11 />;
    case 12: return <PC4_Section12 />;
    case 13: return <PC4_Section13 />;
    case 14: return <PC4_Section14 />;
    case 15: return <PC4_Section15 />;
    case 16: return <PC4_Section16 />;
    case 17: return <PC4_Section17 />;
    case 18: return <PC4_Section18 />;
    case 19: return <PC4_Section19 />;
    case 20: return <PC4_Section23 />;
    case 21: return <PC4_Section21 />;
    case 22: return <PC4_Section22 />;
    case 23: return <PC4_Section23Nav />;
    case 24: return <PC4_Section24 />;
    case 25: return <PC4_Section25 />;
    default: return <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
      <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9375rem' }}>
        Section {currentSection} is under development.
      </p>
    </div>;
  }
};

const PC5FormContent = () => {
  const { currentSection } = useForm();

  switch (currentSection) {
    case 1:  return <PC5_Section1 />;
    case 2:  return <PC5_Section2 />;
    case 3:  return <PC5_Section3 />;
    case 4:  return <PC5_Section4 />;
    case 5:  return <PC5_Section5 />;
    case 6:  return <PC5_Section6 />;
    case 7:  return <PC5_Section7 />;
    case 8:  return <PC5_Section8 />;
    case 9:  return <PC5_Section9 />;
    case 10: return <PC5_Section10 />;
    case 11: return <PC5_Section11 />;
    case 12: return <PC5_Section12 />;
    case 13: return <PC5_Section13 />;
    case 14: return <PC5_Section14 />;
    case 15: return <PC5_Section15 />;
    case 16: return <PC5_Section16 />;
    case 17: return <PC5_Section17 />;
    default: return <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
      <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9375rem' }}>
        Section {currentSection} is under development.
      </p>
    </div>;
  }
};

const PC4ProgramFormContent = () => {
  const { currentSection } = useForm();

  switch (currentSection) {
    case 1:  return <PC4P_Section1 />;
    case 2:  return <PC4P_Section2 />;
    case 3:  return <PC4P_Section3 />;
    case 4:  return <PC4P_Section4 />;
    case 5:  return <PC4P_Section5 />;
    case 6:  return <PC4P_Section6 />;
    case 7:  return <PC4P_Section7 />;
    case 8:  return <PC4P_Section8 />;
    case 9:  return <PC4P_Section9 />;
    case 10: return <PC4P_Section10 />;
    case 11: return <PC4P_Section11 />;
    case 12: return <PC4P_Section12 />;
    case 13: return <PC4P_Section13 />;
    case 14: return <PC4P_Section14 />;
    case 15: return <PC4P_Section15 />;
    case 16: return <PC4P_Section16 />;
    case 17: return <PC4P_Section17 />;
    case 18: return <PC4P_Section18 />;
    case 19: return <PC4P_Section19 />;
    case 20: return <PC4P_Section20 />;
    case 21: return <PC4P_Section21 />;
    case 22: return <PC4P_Section22 />;
    case 23: return <PC4P_Section23 />;
    case 24: return <PC4P_Section24 />;
    case 25: return <PC4P_Section25 />;
    case 26: return <PC4P_Section26 />;
    case 27: return <PC4P_Section27 />;
    default: return <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
      <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9375rem' }}>
        Section {currentSection} is under development.
      </p>
    </div>;
  }
};

const PC5ProgramFormContent = () => {
  const { currentSection } = useForm();

  switch (currentSection) {
    case 1:  return <PC5P_Section1 />;
    case 2:  return <PC5P_Section2 />;
    case 3:  return <PC5P_Section3 />;
    case 4:  return <PC5P_Section4 />;
    case 5:  return <PC5P_Section5 />;
    case 6:  return <PC5P_Section6 />;
    case 7:  return <PC5P_Section7 />;
    case 8:  return <PC5P_Section8 />;
    case 9:  return <PC5P_Section9 />;
    case 10: return <PC5P_Section10 />;
    case 11: return <PC5P_Section11 />;
    case 12: return <PC5P_Section12 />;
    case 13: return <PC5P_Section13 />;
    case 14: return <PC5P_Section14 />;
    case 15: return <PC5P_Section15 />;
    case 16: return <PC5P_Section16 />;
    case 17: return <PC5P_Section17 />;
    default: return <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
      <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9375rem' }}>
        Section {currentSection} is under development.
      </p>
    </div>;
  }
};

const PC1_CONFIG = {
  label: 'PC-I',
  title: 'Development Project Proposal',
  breadcrumb: 'PC-I Application',
  sections: PC1_SECTIONS,
  totalSections: PC1_SECTIONS.length,
};

const PC2_CONFIG = {
  label: 'PC-II',
  title: 'Feasibility Study',
  breadcrumb: 'PC-II Application',
  sections: PC2_SECTIONS,
  totalSections: PC2_SECTIONS.length,
};

const PC1_PROGRAMS_CONFIG = {
  label: 'PC-I',
  title: 'Development Program Proposal',
  breadcrumb: 'PC-I Program Application',
  sections: PC1_SECTIONS,
  totalSections: PC1_SECTIONS.length,
};

const PCN_CONFIG = {
  label: 'PCN',
  title: 'Project Concept Note',
  breadcrumb: 'PCN Application',
  sections: PCN_SECTIONS,
  totalSections: PCN_SECTIONS.length,
};

const PC3A_CONFIG = {
  label: 'PC-III',
  title: 'Annual Physical Targets',
  breadcrumb: 'PC-III Form A',
  sections: PC3A_SECTIONS,
  totalSections: PC3A_SECTIONS.length,
};

const PC3B_CONFIG = {
  label: 'PC-III',
  title: 'Monthly Progress Report',
  breadcrumb: 'PC-III Form B',
  sections: PC3B_SECTIONS,
  totalSections: PC3B_SECTIONS.length,
};

const PC4_CONFIG = {
  label: 'PC-IV',
  title: 'Project Completion Report',
  breadcrumb: 'PC-IV Application',
  sections: PC4_SECTIONS,
  totalSections: PC4_SECTIONS.length,
};

const PC5_CONFIG = {
  label: 'PC-V',
  title: 'Post-Completion Evaluation',
  breadcrumb: 'PC-V Application',
  sections: PC5_SECTIONS,
  totalSections: PC5_SECTIONS.length,
};

const PC4_PROGRAMS_CONFIG = {
  label: 'PC-IV',
  title: 'Program Completion Report',
  breadcrumb: 'PC-IV Program Application',
  sections: PC4_PROGRAMS_SECTIONS,
  totalSections: PC4_PROGRAMS_SECTIONS.length,
};

const PC5_PROGRAMS_CONFIG = {
  label: 'PC-V',
  title: 'Post-Completion Evaluation',
  breadcrumb: 'PC-V Program Application',
  sections: PC5_PROGRAMS_SECTIONS,
  totalSections: PC5_PROGRAMS_SECTIONS.length,
};

const REAPPROPRIATION_CONFIG = {
  label: 'Financials',
  title: 'Fund Management',
  breadcrumb: 'Re-Appropriation',
  sections: [
    { id: 1, title: 'Surrender of Funds' },
    { id: 2, title: 'Re-Appropriation (Allocation)' },
    { id: 3, title: 'Pool Ledger' },
    //  { id: 4, title: 'Departmental Report' },
  ],
  totalSections: 4,
};

const PC1Page = () => (
  <FormConfigProvider config={PC1_CONFIG}>
    <DashboardLayout>
      <PC1FormContent />
    </DashboardLayout>
  </FormConfigProvider>
);

const PC2Page = () => (
  <FormConfigProvider config={PC2_CONFIG}>
    <DashboardLayout>
      <PC2FormContent />
    </DashboardLayout>
  </FormConfigProvider>
);

const PC1ProgramPage = () => (
  <FormConfigProvider config={PC1_PROGRAMS_CONFIG}>
    <DashboardLayout>
      <PC1ProgramFormContent />
    </DashboardLayout>
  </FormConfigProvider>
);

const PCNPage = () => (
  <FormConfigProvider config={PCN_CONFIG}>
    <DashboardLayout>
      <PCNFormContent />
    </DashboardLayout>
  </FormConfigProvider>
);

const PC3APage = () => (
  <FormConfigProvider config={PC3A_CONFIG}>
    <DashboardLayout>
      <PC3AFormContent />
    </DashboardLayout>
  </FormConfigProvider>
);

const PC3BPage = () => (
  <FormConfigProvider config={PC3B_CONFIG}>
    <DashboardLayout>
      <PC3BFormContent />
    </DashboardLayout>
  </FormConfigProvider>
);

const PC4Page = () => (
  <FormConfigProvider config={PC4_CONFIG}>
    <DashboardLayout>
      <PC4FormContent />
    </DashboardLayout>
  </FormConfigProvider>
);

const PC5Page = () => (
  <FormConfigProvider config={PC5_CONFIG}>
    <DashboardLayout>
      <PC5FormContent />
    </DashboardLayout>
  </FormConfigProvider>
);

const PC4ProgramPage = () => (
  <FormConfigProvider config={PC4_PROGRAMS_CONFIG}>
    <DashboardLayout>
      <PC4ProgramFormContent />
    </DashboardLayout>
  </FormConfigProvider>
);

const PC5ProgramPage = () => (
  <FormConfigProvider config={PC5_PROGRAMS_CONFIG}>
    <DashboardLayout>
      <PC5ProgramFormContent />
    </DashboardLayout>
  </FormConfigProvider>
);

const ComingSoonPage = ({ label, title }: { label: string; title: string }) => (
  <div style={{
    minHeight: '100vh',
    background: 'hsl(var(--bg-main))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '1rem',
  }}>
    <p style={{
      fontSize: '0.8rem', fontWeight: 700, color: 'hsl(var(--accent))',
      textTransform: 'uppercase', letterSpacing: '0.05em',
    }}>
      {label}
    </p>
    <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>{title}</h1>
    <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9375rem', marginBottom: '1rem' }}>
      This proforma is under development and will be available soon.
    </p>
    <a href="/" className="btn btn-primary" style={{ textDecoration: 'none' }}>
      Back to Dashboard
    </a>
  </div>
);

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) return <Navigate to="/" replace />;
  return <>{children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <FormProvider>
          <Routes>
            <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />

            <Route path="/" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
            <Route path="/pc-1" element={<ProtectedRoute><PC1Page /></ProtectedRoute>} />
            <Route path="/pc-1-programs" element={<ProtectedRoute><PC1ProgramPage /></ProtectedRoute>} />
            <Route path="/PCN" element={<ProtectedRoute><PCNPage /></ProtectedRoute>} />
            <Route path="/pc-3-a" element={<ProtectedRoute><PC3APage /></ProtectedRoute>} />
            <Route path="/pc-3-b" element={<ProtectedRoute><PC3BPage /></ProtectedRoute>} />
            <Route path="/pc-2" element={<ProtectedRoute><PC2Page /></ProtectedRoute>} />
            <Route path="/pc-3" element={<ProtectedRoute><ComingSoonPage label="PC-III" title="Quarterly Progress Report" /></ProtectedRoute>} />
            <Route path="/pc-4" element={<ProtectedRoute><PC4Page /></ProtectedRoute>} />
            <Route path="/pc-4-programs" element={<ProtectedRoute><PC4ProgramPage /></ProtectedRoute>} />
            <Route path="/pc-5" element={<ProtectedRoute><PC5Page /></ProtectedRoute>} />
            <Route path="/pc-5-programs" element={<ProtectedRoute><PC5ProgramPage /></ProtectedRoute>} />
            <Route path="/re-appropriation" element={
              <ProtectedRoute>
                <FormConfigProvider config={REAPPROPRIATION_CONFIG}>
                  <ReAppropriationPage />
                </FormConfigProvider>
              </ProtectedRoute>
            } />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </FormProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
