import React, { createContext, useContext, useState } from 'react';

export interface FormState {
  section1: any;
  section2: any;
  section3: any;
  section4: any;
  section5: any;
  section6: any;
  section7: any;
  section8: any;
  section9: any;
  section10: any;
  section11: any;
  section12: any;
  section13: any;
  section14: any;
  section15: any;
  section16: any;
  section17: any;
  section18: any;
}

const initialFormState: FormState = {
  section1: {
    projectTitle: '',
    startYear: '',
    gsNo: '',
    mainSector: '',
    sector: '',
    startDate: '',
    endDate: '',
    adminDept: '',
    locationType: '',
    statusType: [],
    projectStatus: ''
  },
  section2: {
    foreignFunding: 'No',
    fec: '',
    foreignCost: '',
    foreignCapitalCost: '',
    foreignRevenueCost: '',
    source: '',
    currency: '',
    percentage: '',
    exchangeRate: '',
    financialComponents: '',
    localCost: '',
    approvalForum: '',
    beneficiaryShares: [{ adminDept: '', name: '', amount: '' }],
    totalCost: '',
    attachments: []
  },
  section3: {
    divisions: [],
    districts: [],
    tehsils: [],
    na: [],
    pp: [],
    unionCouncil: [],
    lat: '',
    long: '',
    mapUrl: '',
    attachments: [],
    executingAgencies: [],
    sponsoringAgency: '',
    federalMinistry: '',
    omAgency: ''
  },
  section4: {
    fundingSource: '',
    gsNoSearch: '',
    smdpNo: '',
    gsNoResult: '',
    totalAllocation: '',
    reappropriationType: '',
    proposedAllocation: '',
    purpose: '',
    comments: ''
  },
  section5: { objective: '', attachments: [], annexures: [] },
  section6: {
    objective: '', objectiveAttachments: [], objectiveAnnexures: [],
    sectoralInfo: '', sectoralInfoAttachments: [], sectoralInfoAnnexures: []
  },
  section7: {
    localCost: '',
    remainingLocalCost: '',
    foreignCost: '',
    remainingForeignCost: '',
    plans: [],
    objectCodes: []
  },
  section8: {
    grantNo: '',
    costCenter: '',
    loNo: '',
    runningCostType: '',
    fundCenter: '',
    operatingEstimates: []
  },
  section9: { data: '', attachments: [], annexures: [] },
  section10: {
    equity: '',
    debt: '',
    grant: '',
    weightCost: '',
    attachments: [],
    annexures: []
  },
  section11: {
    social: '', socialAttachments: [], socialAnnexures: [],
    environmental: '', environmentalAttachments: [], environmentalAnnexures: [],
    economic: '', economicAttachments: [], economicAnnexures: [],
    financial: '', financialAttachments: [], financialAnnexures: []
  },
  section12: {
    schedule: '', scheduleAttachments: [], scheduleAnnexures: [],
    monitoring: '', monitoringAttachments: [], monitoringAnnexures: [],
    implementationPlan: '', implementationPlanAttachments: [], implementationPlanAnnexures: [],
    mePlan: '', mePlanAttachments: [], mePlanAnnexures: [],
    riskPlan: '', riskPlanAttachments: [], riskPlanAnnexures: [],
    procurementPlan: '', procurementPlanAttachments: [], procurementPlanAnnexures: []
  },
  section13: { management: '' },
  section14: { filter: 'New Scheme', gsNo: '', description: '', attachments: [], annexures: [] },
  section15: {
    name: '',
    designation: '',
    email: '',
    tel: '',
    fax: '',
    address: '',
    attachments: [],
    annexures: []
  },
  section16: { checklist: [] },
  section17: { filter: 'New Scheme', gsNo: '', attachments: [], annexures: [] },
  section18: { category: '', title: '', attachments: [] }
};

interface FormContextType {
  formData: FormState;
  updateSection: (section: keyof FormState, data: any) => void;
  currentSection: number;
  setSection: (section: number) => void;
  dirtySections: number[];
  visitedSections: number[];
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [currentSection, setCurrentSection] = useState(1);
  const [dirtySections, setDirtySections] = useState<number[]>([]);
  const [visitedSections, setVisitedSections] = useState<number[]>([1]);

  const updateSection = (section: keyof FormState, data: any) => {
    const sectionNum = parseInt(section.replace('section', ''));
    if (!dirtySections.includes(sectionNum)) {
      setDirtySections(prev => [...prev, sectionNum]);
    }

    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const handleSetSection = (num: number) => {
    if (!visitedSections.includes(num)) {
      setVisitedSections(prev => [...prev, num]);
    }
    setCurrentSection(num);
  };

  return (
    <FormContext.Provider value={{ 
      formData, 
      updateSection, 
      currentSection, 
      setSection: handleSetSection,
      dirtySections,
      visitedSections
    }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) throw new Error('useForm must be used within FormProvider');
  return context;
};
