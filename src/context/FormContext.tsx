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
  section19: any;
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
  section13: { 
    management: '',
    adminManpower: [],
    execManpower: [],
    postManpower: []
  },
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
  section18: { category: '', title: '', attachments: [] },
  section19: {
    responses: [
      { id: '1', category: 'Description & Objectives', criteria: 'Do the description / Objectives of the PC-I specify link / alignment with provincial strategies and sectoral policies?', yesNo: '', action: '', comments: '' },
      { id: '2', category: 'Use of Gender Disaggregated Data', criteria: 'Was gender disaggregated data used to determine rationale / need of the project for select beneficiaries?', yesNo: '', action: '', comments: '' },
      { id: '3', category: 'Social Impact', criteria: 'Do project objectives/justification include focus on marginalised groups (women, PWDs, minorities, transgender, poor etc.)?', yesNo: '', action: '', comments: '' },
      { id: '4', category: 'Social Impact', criteria: 'Have marginalised groups (Women, PWDs, Minorities, Transgender Persons, Poor etc.) been included in project objectives / justification and / or as beneficiaries of the project?', yesNo: '', action: '', comments: '' },
      { id: '5', category: 'Social Impact', criteria: 'Does the PC-I include specific provisions for capacity building / training of marginalised group (if applicable)?', yesNo: '', action: '', comments: '' },
      { id: '6', category: 'Results Based Monitoring', criteria: 'Does the PC-I include a Results Based Monitoring Framework (RBMF)/Logical Framework?', yesNo: '', action: '', comments: '' },
      { id: '7', category: 'Results Based Monitoring', criteria: 'Were SDG indicators used for determining targets included in the PC-I?', yesNo: '', action: '', comments: '' },
      { id: '8', category: 'Inclusion/Participation', criteria: 'Did the Stakeholder consultation(s) held during ADP Formulation and / or PC-I development include experts and representatives of marginalised groups and CSOs?', yesNo: '', action: '', comments: '' },
      { id: '9', category: 'Monitoring & Evaluation', criteria: 'Does the project provide a role to communities in project monitoring and/or implementation (if relevant)?', yesNo: '', action: '', comments: '' },
      { id: '10', category: 'Monitoring & Evaluation', criteria: 'Does the project include formation of a Steering Committee and/or Project Implementation Committees?', yesNo: '', action: '', comments: '' },
      { id: '11', category: 'Monitoring & Evaluation', criteria: 'Is there a provision to ensure representation of women in these committees?', yesNo: '', action: '', comments: '' }
    ]
  }
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
