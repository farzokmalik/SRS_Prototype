import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { FormProvider } from './context/FormContext';
import { FormConfigProvider } from './context/FormConfigContext';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { DashboardHome } from './pages/DashboardHome';
import { LoginPage } from './pages/LoginPage';
import { useForm } from './context/FormContext';
import { PC1_SECTIONS, PC2_SECTIONS } from './constants';

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

import { PC2Section1_Overview } from './components/pc2/PC2Section1_Overview';
import { PC2Section2_Cost } from './components/pc2/PC2Section2_Cost';
import { PC2Section3_Location } from './components/pc2/PC2Section3_Location';
import { PC2Section4_Funding } from './components/pc2/PC2Section4_Funding';
import { PC2Section6_Description } from './components/pc2/PC2Section6_Description';
import { PC2Section7_CostEstimation } from './components/pc2/PC2Section7_CostEstimation';
import { PC2Section8_StudyTORS } from './components/pc2/PC2Section8_StudyTORS';
import { PC2Section9_StudyTORS2 } from './components/pc2/PC2Section9_StudyTORS2';
import { PC2Section10_ActivitiesPlan } from './components/pc2/PC2Section10_ActivitiesPlan';
import { PC2Section11_StudiesUndertaken } from './components/pc2/PC2Section11_StudiesUndertaken';
import { PC2Section12_ManagementManpower } from './components/pc2/PC2Section12_ManagementManpower';
import { PC2Section14_InitialScrutinyChecklist } from './components/pc2/PC2Section14_InitialScrutinyChecklist';

const PC1FormContent = () => {
  const { currentSection } = useForm();

  switch (currentSection) {
    case 1:  return <Section1_Overview />;
    case 2:  return <Section2_Cost />;
    case 3:  return <Section3_Location />;
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
    default: return <div className="card">Section {currentSection} is under development.</div>;
  }
};

const PC2FormContent = () => {
  const { currentSection } = useForm();

  switch (currentSection) {
    case 1:  return <PC2Section1_Overview />;
    case 2:  return <PC2Section2_Cost />;
    case 3:  return <PC2Section3_Location />;
    case 4:  return <PC2Section4_Funding />;
    case 5:  return <Section5_Objectives />;
    case 6:  return <PC2Section6_Description />;
    case 7:  return <PC2Section7_CostEstimation />;
    case 8:  return <PC2Section8_StudyTORS />;
    case 9:  return <PC2Section9_StudyTORS2 />;
    case 10: return <PC2Section10_ActivitiesPlan />;
    case 11: return <PC2Section11_StudiesUndertaken />;
    case 12: return <PC2Section12_ManagementManpower />;
    case 13: return <Section15_Certificate />;
    case 14: return <PC2Section14_InitialScrutinyChecklist />;
    case 15: return <Section18_Appraisal />;
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

const PC1Page = () => (
  <FormConfigProvider config={PC1_CONFIG}>
    <FormProvider>
      <DashboardLayout>
        <PC1FormContent />
      </DashboardLayout>
    </FormProvider>
  </FormConfigProvider>
);

const PC2Page = () => (
  <FormConfigProvider config={PC2_CONFIG}>
    <FormProvider>
      <DashboardLayout>
        <PC2FormContent />
      </DashboardLayout>
    </FormProvider>
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
        <Routes>
          <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />

          <Route path="/" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
          <Route path="/pc-1" element={<ProtectedRoute><PC1Page /></ProtectedRoute>} />
          <Route path="/pc-2" element={<ProtectedRoute><PC2Page /></ProtectedRoute>} />
          <Route path="/pc-3" element={<ProtectedRoute><ComingSoonPage label="PC-III" title="Quarterly Progress Report" /></ProtectedRoute>} />
          <Route path="/pc-4" element={<ProtectedRoute><ComingSoonPage label="PC-IV" title="Project Completion Report" /></ProtectedRoute>} />
          <Route path="/pc-5" element={<ProtectedRoute><ComingSoonPage label="PC-V" title="Post-Completion Evaluation" /></ProtectedRoute>} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
