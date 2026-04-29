import { DashboardLayout } from '../layout/DashboardLayout';
import { SurrenderForm } from './SurrenderForm';
import { ReAppropriationForm } from './ReAppropriationForm';
import { PoolLedger } from './PoolLedger';
import { ReAppropriationReport } from './ReAppropriationReport';
import { useForm } from '../../context/FormContext';

export const ReAppropriationPage: React.FC = () => {
  const { currentSection } = useForm();

  return (
    <DashboardLayout hideFooter>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 1.5rem' }}>
        {/* Content Area mapped to Sidebar Sections */}
        <div style={{ minHeight: '600px' }}>
          {currentSection === 1 && <SurrenderForm />}
          {currentSection === 2 && <PoolLedger />}
          {currentSection === 3 && <ReAppropriationForm />}
          {currentSection === 4 && <ReAppropriationReport />}
        </div>
      </div>
    </DashboardLayout>
  );
};
