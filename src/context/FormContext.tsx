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
  sectionA: any;
  pc3a: any;
  pc3b: any;
  pc4: any;
  pc4p: any;
  pc5: any;
  pc5p: any;
}

const initialFormState: FormState = {
  section1: {
    projectId: '',
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
    equityAttachments: [],
    equityAnnexures: [],
    debt: '',
    debtAttachments: [],
    debtAnnexures: [],
    grant: '',
    grantAttachments: [],
    grantAnnexures: [],
    weightCost: '',
    weightCostAttachments: [],
    weightCostAnnexures: [],
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
  },
  sectionA: {
    local: '', foreign: '', cap: '', rev: '', total: '',
    tf27_28: '', tf28_29: '', tfBeyond: ''
  },
  pc3a: {
    s1: { projectId: '', projectName: '' },
    s2: { capitalCost: '' },
    s3: { actual: '', accrued: '', total: '' },
    s4: { total: '', local: '', fec: '' },
    s5: { workPlan: [], nodeData: {} },
    s6: { quarterlyWorkPlan: [] },
    s7: { q1: '', q2: '', q3: '', q4: '', annualTotal: '' },
    s8: { indicators: [] }
  },
  pc3b: {
    s1: { projectName: '', month: '', year: '' },
    s2: { psdpFunding: '', cashPlanReq: '', releases: '', expenditure: '' },
    s3: { physicalStatus: [], narrative: '' },
    s4: { indicators: [] },
    s5: { bottlenecks: [], otherBottleneck: '', remarks: '' }
  },
  pc4: {
    s1: { projectId: '', projectName: '', locations: '' },
    s2: { sector: '', subSector: '' },
    s3: { name: '', address: '' },
    s4: { name: '', address: '' },
    s5: { name: '', address: '' },
    s6: { approvalForum: '', originalDate: '', revisedDate: '', decisionCopy: [] },
    s7: { plannedCommencement: '', actualCommencement: '', plannedCompletion: '', actualCompletion: '', duration: '', extensions: [{ date: '', months: '', days: '', authority: '' }] },
    s8: { 
      capitalCost: { 
        original: { local: '', fe: '', total: '' }, 
        revised: { local: '', fe: '', total: '' }, 
        actual: { local: '', fe: '', total: '' } 
      }, 
      climateCoBenefits: { adaptation: '', mitigation: '' } 
    },
    s9: { 
      financing: { 
        federal: { local: '', fe: '', total: '' }, 
        provincial: { local: '', fe: '', total: '' }, 
        donors: { local: '', fe: '', total: '' } 
      }, 
      exchangeRateNote: '' 
    },
    s10: { accounts: [], closureStatus: '', closureDate: '', closureReasons: '' },
    s11: { annualPhasing: [{ year: '', pciPhasing: { total: '', fe: '' }, psdpAllocation: { total: '', fe: '' }, releases: { total: '', fe: '' }, expenditure: { total: '', fe: '' } }] },
    s12: { physicalAchievements: [{ item: '', unit: '', planned: '', actual: '' }] },
    s13: { itemWiseExpenditure: [{ item: '', pciEstimate: { local: '', fec: '', total: '' }, actual: { local: '', fec: '', total: '' } }], climateSubTable: [] },
    s14: { recurringCosts: [{ item: '', pciEstimate: '', actual: '', source: '' }] },
    s15: { objectives: [{ objective: '', status: 'Achieved', reasons: '' }] },
    s16: { adaptation: [{ description: '', cost: '' }], mitigation: [{ description: '', cost: '' }] },
    s17: { income: [{ year: '', estimated: '', actual: '' }] },
    s18: { indicators: [{ input: '', output: '', outputIndicator: '', outcomeIndicator: '', baseline: '', target: '', targetedImpact: '', impactIndicator: '' }] },
    s19: { pdHistory: [{ name: '', fromDate: '', toDate: '' }] },
    s20: { assetOwnershipAgency: '', assets: [{ name: '', type: 'Moveable' }] },
    s21: { social: '', economic: '', environmental: '', technological: '', regional: '', sectoral: '', employment: '' },
    s22: { impactAnalysis: '' },
    s23: { 
      npvFinancial: { pci: '', completion: '' }, 
      bcrFinancial: { pci: '', completion: '' }, 
      ifrr: { pci: '', completion: '' }, 
      npvEconomic: { pci: '', completion: '' }, 
      bcrEconomic: { pci: '', completion: '' }, 
      ierr: { pci: '', completion: '' }, 
      unitCost: { pci: '', completion: '' } 
    },
    s24: { a: '', b: '', c: '', d: '', e: '' },
    s25: { a: '', b: '', c: '', d: '', e: '', f: '' },
    s26: { additionalInfo: '' },
    s27: { name: '', designation: '', telephone: '', email: '', date: '', signature: [] }
  },
  pc5: {
    s1: { projectId: '', projectName: '', reportingYear: '', yearAfterCompletion: 1 },
    s2: { objectives: '', extentMet: '', status: 'Fully met' },
    s3: { plannedCost: '', actualCost: '', components: [{ name: '', planned: '', actual: '' }] },
    s4: [{ category: 'Administrative', designation: '', planned: '', actual: '' }],
    s5: [{ item: '', unit: '', planned: '', actual: '' }],
    s6: [{ type: '', planned: '', assumptions: '', actual: '' }],
    s7: [{ description: '', unit: '', planned: '', actual: '' }],
    s8: [{ description: '', targetGroup: '', planned: '', actual: '', extentMet: '' }],
    s9: { 
      adaptation: [{ activity: '', planned: '', actual: '', extentMet: '' }], 
      mitigation: [{ activity: '', planned: '', actual: '', extentMet: '' }], 
      disasterOccurred: false, 
      disasterDetails: '' 
    },
    s10: { unitType: '', plannedCost: '', actualCost: '', wacc: '' },
    s11: { marketingPCI: '', differsFromPCI: false, details: '' },
    s12: { arrangements: '', annualMaintenance: false, reasons: '' },
    s13: { status: 'Yes', reasons: '' },
    s14: { operation: '', maintenance: '', marketing: '', management: '', climate: '' },
    s15: { managementChange: false, changes: [{ name: '', designation: '', date: '' }], justification: '' },
    s16: { suggestions: '' },
    submission: { name: '', designation: '', telephone: '', email: '', date: '', signature: [] }
  },
  pc4p: {
    s1: { projectId: '', programName: '', locations: '' },
    s2: { sector: '', subSector: '' },
    s3: { name: '', address: '' },
    s4: { name: '', address: '' },
    s5: { name: '', address: '' },
    s6: { approvalForum: '', originalDate: '', revisedDate: '', decisionCopy: [] },
    s7: { plannedCommencement: '', actualCommencement: '', plannedCompletion: '', actualCompletion: '', duration: '', extensions: [{ date: '', months: '', days: '', authority: '' }] },
    s8: { 
      capitalCost: { 
        original: { local: '', fe: '', total: '' }, 
        revised: { local: '', fe: '', total: '' }, 
        actual: { local: '', fe: '', total: '' } 
      }, 
      climateCoBenefits: { adaptation: '', mitigation: '' } 
    },
    s9: { 
      financing: { 
        federal: { local: '', fe: '', total: '' }, 
        provincial: { local: '', fe: '', total: '' }, 
        donors: { local: '', fe: '', total: '' } 
      }, 
      exchangeRateNote: '' 
    },
    s10: { accounts: [], closureStatus: '', closureDate: '', closureReasons: '' },
    s11: { annualPhasing: [{ year: '', pciPhasing: { total: '', fe: '' }, psdpAllocation: { total: '', fe: '' }, releases: { total: '', fe: '' }, expenditure: { total: '', fe: '' } }] },
    s12: { physicalAchievements: [{ item: '', unit: '', planned: '', actual: '' }] },
    s13: { itemWiseExpenditure: [{ item: '', pciEstimate: { local: '', fec: '', total: '' }, actual: { local: '', fec: '', total: '' } }], climateSubTable: [] },
    s14: { recurringCosts: [{ item: '', pciEstimate: '', actual: '', source: '' }] },
    s15: { objectives: [{ objective: '', status: 'Achieved', reasons: '' }] },
    s16: { adaptation: [{ description: '', cost: '' }], mitigation: [{ description: '', cost: '' }] },
    s17: { income: [{ year: '', estimated: '', actual: '' }] },
    s18: { indicators: [{ input: '', output: '', outputIndicator: '', outcomeIndicator: '', baseline: '', target: '', targetedImpact: '', impactIndicator: '' }] },
    s19: { pdHistory: [{ name: '', fromDate: '', toDate: '' }] },
    s20: { assetOwnershipAgency: '', assets: [{ name: '', type: 'Moveable' }] },
    s21: { social: '', economic: '', environmental: '', technological: '', regional: '', sectoral: '', employment: '' },
    s22: { impactAnalysis: '' },
    s23: { 
      npvFinancial: { pci: '', completion: '' }, 
      bcrFinancial: { pci: '', completion: '' }, 
      ifrr: { pci: '', completion: '' }, 
      npvEconomic: { pci: '', completion: '' }, 
      bcrEconomic: { pci: '', completion: '' }, 
      ierr: { pci: '', completion: '' }, 
      unitCost: { pci: '', completion: '' } 
    },
    s24: { a: '', b: '', c: '', d: '', e: '' },
    s25: { a: '', b: '', c: '', d: '', e: '', f: '' },
    s26: { additionalInfo: '' },
    s27: { name: '', designation: '', telephone: '', email: '', date: '', signature: [] }
  },
  pc5p: {
    s1: { projectId: '', programName: '', reportingYear: '', yearAfterCompletion: 1 },
    s2: { objectives: '', extentMet: '', status: 'Fully met' },
    s3: { plannedCost: '', actualCost: '', components: [{ name: '', planned: '', actual: '' }] },
    s4: [{ category: 'Administrative', designation: '', planned: '', actual: '' }],
    s5: [{ item: '', unit: '', planned: '', actual: '' }],
    s6: [{ type: '', planned: '', assumptions: '', actual: '' }],
    s7: [{ description: '', unit: '', planned: '', actual: '' }],
    s8: [{ description: '', targetGroup: '', planned: '', actual: '', extentMet: '' }],
    s9: { 
      adaptation: [{ activity: '', planned: '', actual: '', extentMet: '' }], 
      mitigation: [{ activity: '', planned: '', actual: '', extentMet: '' }], 
      disasterOccurred: false, 
      disasterDetails: '' 
    },
    s10: { unitType: '', plannedCost: '', actualCost: '', wacc: '' },
    s11: { marketingPCI: '', differsFromPCI: false, details: '' },
    s12: { arrangements: '', annualMaintenance: false, reasons: '' },
    s13: { status: 'Yes', reasons: '' },
    s14: { operation: '', maintenance: '', marketing: '', management: '', climate: '' },
    s15: { managementChange: false, changes: [{ name: '', designation: '', date: '' }], justification: '' },
    s16: { suggestions: '' },
    submission: { name: '', designation: '', telephone: '', email: '', date: '', signature: [] }
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
