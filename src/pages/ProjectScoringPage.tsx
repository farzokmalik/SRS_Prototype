import React, { useState, useMemo } from 'react';
import { useForm } from '../context/FormContext';
import { AlertTriangle, XCircle, CheckCircle2, BarChart3, Info, Sparkles, Paperclip, Upload } from 'lucide-react';
import '../styles/ProjectScoring.css';

/* ───────── Types ───────── */
interface Option { score: number; label: string; explanation: string; }
interface Factor { id: string; name: string; description: string; question: string; displayNum: string; weight: number; minScore: number | null; options: Option[]; }

/* ───────── Data ───────── */
const STRATEGIC_FACTORS: Factor[] = [
  { 
    id:'f1', 
    name:'Alignment with Government Development Goals', 
    description: 'This factor measures how well a project aligns with the specific strategic goals outlined in the Punjab Growth Strategy, SDGs, Vision 2025, or sectoral plans. Respondents must explicitly reference the relevant goal(s) from these documents and provide evidence of the project’s contribution. Projects that directly target high-priority goals or measurable outcomes will receive higher scores.',
    question:'Cite specific goals and targets from Punjab Growth Strategy.', 
    displayNum:'[PS-2.1]', 
    weight:0.20, 
    minScore:2, 
    options:[
      {score:4,label:'Fully aligned',explanation:'The project explicitly supports one or more high-priority goals from the Punjab Growth Strategy or equivalent documents. Clear evidence, such as references to goals, sections, or specific targets, is provided. Example: A maternal health initiative linked to Ensuring a Healthy Punjab Strategy with measurable outcome targets – reduce maternal mortality rate of 180 per 100,000 live births by 20% in 5 years.'},
      {score:3,label:'Substantially aligned',explanation:'The project supports a strategic goal but may not address a top priority or lacks direct measurable outcomes. References are provided but may need additional clarity. Example: A road construction project improving connectivity but not targeting underserved areas.'},
      {score:2,label:'Moderately aligned',explanation:'The project has some relevance to strategic goals but lacks a strong connection or measurable impact. Goal references are vague or indirect. Example: A skills training program indirectly linked to the employment goal without focusing on target demographics.'},
      {score:1,label:'Marginally aligned',explanation:'The project has a weak or peripheral link to strategic goals and limited developmental impact. Minimal or unclear goal references. Example: A beautification project in a well-served urban area with no alignment to strategic needs.'},
      {score:0,label:'Not aligned',explanation:'The project does not contribute to any strategic goals in the Punjab Growth Strategy or equivalent documents. No references or evidence provided. Example: A luxury development project in direct conflict with equity or poverty-reduction goals.'},
    ]
  },
  { 
    id:'f2', 
    name:'Economic/Social Returns', 
    description: 'This factor evaluates the anticipated economic and social benefits derived from the project. High-scoring projects provide substantial, measurable improvements in areas such as employment, income generation, public service delivery, or social equity. Projects with minimal or no demonstrable benefits score lower.',
    question:'Provide evidence of quantified benefits.', 
    displayNum:'[PS-2.2]', 
    weight:0.10, 
    minScore:null, 
    options:[
      {score:4,label:'Very high returns',explanation:'The project is expected to deliver significant, measurable economic and/or social benefits. Example: A rural electrification project expected to increase household incomes by 20% in 3 years.'},
      {score:3,label:'High returns',explanation:'The project delivers notable benefits but with some limitations in scale or scope. Example: A public transit project reducing commuting time for urban workers without significant expansion into underserved areas.'},
      {score:2,label:'Moderate returns',explanation:'The project generates some benefits, but its impact is limited or not well-documented. Example: A digital literacy program with limited outreach or unmeasured long-term impacts.'},
      {score:1,label:'Low returns',explanation:'The project’s benefits are minimal, localized, or difficult to quantify. Example: A landscaping project in a city centre with limited economic or social value.'},
      {score:0,label:'No returns',explanation:'The project has no discernible economic or social benefits. Example: A stalled infrastructure project that does not deliver any service improvements.'},
    ]
  },
  { 
    id:'f3', 
    name:'Programmatic Alignment', 
    description: 'This factor assesses whether the project is part of a broader program or complements other projects to maximize developmental impact. Projects that are well-integrated into larger initiatives or leverage synergies score higher, while isolated, stand-alone projects with no connection to broader strategies score lower.',
    question:'Document linkages with other initiatives.', 
    displayNum:'[PS-2.3]', 
    weight:0.05, 
    minScore:null, 
    options:[
    {score:4,label:'Strongly programmatic',explanation:'The project is a core component of a broader program, creating significant synergies with other initiatives. Example: A feeder road network project designed to complement a major highway initiative, improving regional connectivity.'},
    {score:3,label:'Moderately programmatic',explanation:'The project supports a broader initiative but with less direct integration or limited synergies. Example: A standalone training program aligned with a national employment strategy but not formally linked to other projects.'},
    {score:2,label:'Mildly programmatic',explanation:'The project has some relevance to other initiatives but operates independently with limited synergies. Example: A small water supply project in an area without integrated sanitation initiatives.'},
    {score:1,label:'Weakly programmatic',explanation:'The project is loosely related to other initiatives but lacks tangible connections or impact. Example: A community park project with no alignment to urban planning goals.'},
    {score:0,label:'Stand-alone',explanation:'The project is entirely independent, with no connection to broader programs or strategies. Example: A one-off cultural event unrelated to developmental goals.'},
  ]},
];

const IMPLEMENTATION_FACTORS: Factor[] = [
  { 
    id:'f4', 
    name:'Quality of Preparation and Risk Assessment', 
    description: 'This factor evaluates the comprehensiveness and adequacy of preparatory work for the project, including the quality of concept notes, pre-feasibility, and feasibility studies, with particular attention to technical design soundness and environmental impact assessment. Higher scores are given to projects with well-documented, detailed, and high-quality preparatory materials that adhere to prescribed guidelines.',
    question:'Reference feasibility studies and technical validations.', 
    displayNum:'[PS-3.1]', 
    weight:0.20, 
    minScore:2, 
    options:[
      {score:4,label:'Excellent',explanation:'The project preparation is thorough, with high-quality feasibility studies and concept notes adhering fully to PDB guidelines, including comprehensive technical design validation and environmental impact assessment.'},
      {score:3,label:'Above average',explanation:'Preparatory work is generally strong but may lack detail in technical design validation or environmental assessment aspects.'},
      {score:2,label:'Average',explanation:'The project preparation is adequate but includes gaps in technical documentation or environmental considerations.'},
      {score:1,label:'Below average',explanation:'Preparatory work is weak, with significant omissions in required documentation, technical design validation, or environmental impact studies.'},
      {score:0,label:'Poor',explanation:'The project has no meaningful preparatory work, feasibility studies, technical design validation, or environmental assessment.'},
    ]
  },
  { 
    id:'f5', 
    name:'Implementation Feasibility', 
    description: 'This factor assesses the readiness of the project for execution, including the availability of land, procurement plans, institutional capacity, and other prerequisites. It evaluates whether the implementing agency possesses the necessary technical expertise, management capability, and organizational structure to execute the project effectively. The assessment examines both operational preparedness through secured prerequisites and the institution\'s demonstrated capacity to implement projects of similar scope and complexity.',
    question:'Detail operational readiness and capacity.', 
    displayNum:'[PS-3.2]', 
    weight:0.10, 
    minScore:2, 
    options:[
      {score:4,label:'Highly feasible',explanation:'All implementation prerequisites are secured and institutional capacity is fully demonstrated. Implementing agency has proven track record and adequate technical staff.'},
      {score:3,label:'Feasible with minor gaps',explanation:'Most implementation requirements are in place and institutional capacity is largely adequate but may require some enhancement.'},
      {score:2,label:'Moderately feasible',explanation:'Several prerequisites are incomplete and institutional capacity shows notable gaps.'},
      {score:1,label:'Feasible with major gaps',explanation:'Key prerequisites are missing and institutional capacity is significantly limited.'},
      {score:0,label:'Not feasible',explanation:'The project lacks fundamental prerequisites and implementing agency demonstrates insufficient capacity.'},
    ]
  },
  { 
    id:'f6', 
    name:'Affordability and Financing', 
    description: 'This factor evaluates whether the project is fiscally sustainable and adequately financed. It considers the availability of funds, alignment with budget ceilings, and the ability to secure financing throughout the project lifecycle. Projects that are fully financed and within budget constraints score higher.',
    question:'Outline financial sustainability evidence.', 
    displayNum:'[PS-3.3]', 
    weight:0.10, 
    minScore:2, 
    options:[
      {score:4,label:'Fully affordable',explanation:'The project is well within the departmental budget ceiling, fully financed, and has a sustainable long-term funding plan.'},
      {score:3,label:'Affordable with minor gaps',explanation:'The project is largely within budget limits but has minor financing uncertainties.'},
      {score:2,label:'Moderately affordable',explanation:'The project exceeds budget ceilings or has significant funding uncertainties but is still partially financed.'},
      {score:1,label:'Barely affordable',explanation:'The project exceeds budget limits significantly or has major unresolved financing gaps.'},
      {score:0,label:'Not affordable',explanation:'The project is fiscally unsustainable, with no clear or realistic financing plan.'},
    ]
  },
];

const COMMUNITY_FACTORS: Factor[] = [
  { 
    id:'f7', 
    name:'Community Needs', 
    description: 'This factor evaluates how well the project addresses the genuine needs and priorities of the community it aims to serve. Projects developed through robust stakeholder engagement or that respond to critical community demands score higher, while those lacking relevance to local needs score lower.',
    question:'Document stakeholder consultations.', 
    displayNum:'[PS-4.1]', 
    weight:0.10, 
    minScore:null, 
    options:[
      {score:4,label:'Fully demand-driven',explanation:'The project directly addresses well-documented and critical community needs identified through participatory processes.'},
      {score:3,label:'Substantially demand-driven',explanation:'The project reflects significant community needs but with limited stakeholder input or partial alignment.'},
      {score:2,label:'Moderately demand-driven',explanation:'The project has some relevance to community needs but lacks evidence of criticality or direct demand.'},
      {score:1,label:'Weakly demand-driven',explanation:'The project is loosely linked to community needs and lacks a clear basis for its selection.'},
      {score:0,label:'Not demand-driven',explanation:'The project does not address any identifiable community needs or priorities.'},
    ]
  },
  { 
    id:'f8', 
    name:'Equity Aspects', 
    description: 'This factor assesses the project\'s contribution to reducing regional disparities and promoting inclusivity, particularly in underserved or marginalized areas. Projects targeting historically neglected regions or communities score higher, while those reinforcing existing inequities or providing disproportionate benefits to already advantaged groups score lower.',
    question:'Analyse distribution of benefits.', 
    displayNum:'[PS-4.2]', 
    weight:0.07, 
    minScore:null, 
    options:[
      {score:4,label:'Highly equitable',explanation:'The project directly targets underserved regions or marginalized communities, addressing critical gaps in public service delivery or economic opportunities.'},
      {score:3,label:'Moderately equitable',explanation:'The project benefits underserved groups but also includes elements that support better-served regions or populations.'},
      {score:2,label:'Limited equity impact',explanation:'The project has some relevance to equity but primarily benefits relatively advantaged regions or groups.'},
      {score:1,label:'Marginally equitable',explanation:'The project has minimal impact on reducing disparities and provides limited benefit to underserved populations.'},
      {score:0,label:'Reinforces inequities',explanation:'The project exacerbates regional or social disparities, providing disproportionate benefits to already privileged groups.'},
    ]
  },
  { 
    id:'f9a', 
    name:'Political Viability & Governance Alignment (Macro)', 
    description: 'This sub-factor evaluates the project\'s alignment with governance structures, institutional relationships, and its political feasibility. Projects that strengthen governance systems, foster collaboration, and align with systemic reforms score higher, while those creating governance conflicts score lower.',
    question:'Assess institutional arrangements.', 
    displayNum:'[PS-4.3]', 
    weight:0.04, 
    minScore:null, 
    options:[
      {score:4,label:'Excellent alignment',explanation:'The project is politically viable, strengthens governance, and promotes institutional reforms or capacity building.'},
      {score:3,label:'Good alignment',explanation:'The project aligns with governance objectives and has some potential to improve institutional relationships.'},
      {score:2,label:'Moderate alignment',explanation:'The project has some alignment with governance or reform objectives but lacks significant systemic impact.'},
      {score:1,label:'Weak alignment',explanation:'The project is weakly aligned with governance objectives and risks creating institutional conflicts.'},
      {score:0,label:'No alignment or adverse impact',explanation:'The project creates governance challenges or institutional conflicts without offering systemic benefits.'},
    ]
  },
  { 
    id:'f9b', 
    name:'Community-Level Analysis (Micro)', 
    description: 'This sub-factor assesses whether the project team has identified beneficiaries and adversely affected groups and whether strategies are in place to manage community dynamics. Projects that proactively manage support from beneficiaries and mitigate resistance from adversely affected groups score higher.',
    question:'Assess stakeholder dynamics.', 
    displayNum:'[PS-4.4]', 
    weight:0.04, 
    minScore:null, 
    options:[
      {score:4,label:'Comprehensive analysis',explanation:'The project team has fully identified winners and losers, designed awareness campaigns for beneficiaries, and devised strategies to mitigate resistance from adversely affected groups.'},
      {score:3,label:'Good analysis',explanation:'The project team has identified beneficiaries and adverse groups, but strategies to address resistance are incomplete.'},
      {score:2,label:'Moderate analysis',explanation:'The project identifies beneficiaries and adverse groups, but plans for community engagement are vague.'},
      {score:1,label:'Limited analysis',explanation:'Minimal identification of winners and losers, with no clear community management strategies.'},
      {score:0,label:'No analysis',explanation:'No effort to identify or address community-level dynamics.'},
    ]
  },
];

const ALL_FACTORS = [...STRATEGIC_FACTORS, ...IMPLEMENTATION_FACTORS, ...COMMUNITY_FACTORS];

const PROJECTS = [
  'Punjab Solar Energy Optimization Project',
  'Lahore Metro Bus Extension — Phase III',
  'South Punjab Rural Water Supply Scheme',
  'Digital Literacy Program — Multan Division',
  'Faisalabad Industrial Estate Development',
  'Bahawalpur Healthcare Infrastructure Upgrade',
  'DG Khan Flood Protection & Irrigation',
  'Rawalpindi Smart City Traffic Management',
];

const CATEGORIES = [
  { name: 'Strategic Factors', weight: '35%', color: '#3B82F6', factors: STRATEGIC_FACTORS },
  { name: 'Implementation Readiness', weight: '40%', color: '#10B981', factors: IMPLEMENTATION_FACTORS },
  { name: 'Community & Political', weight: '25%', color: '#8B5CF6', factors: COMMUNITY_FACTORS },
];

function getClassification(score: number) {
  if (score >= 3.4) return { label: 'Highly Recommended', color: '#10B981', bg: '#ECFDF5', range: '85-100%' };
  if (score >= 2.8) return { label: 'Recommended', color: '#3B82F6', bg: '#EFF6FF', range: '70-84%' };
  if (score >= 2.2) return { label: 'Conditionally Recommended', color: '#F59E0B', bg: '#FFFBEB', range: '55-69%' };
  if (score >= 1.6) return { label: 'Needs Substantial Revision', color: '#F97316', bg: '#FFF7ED', range: '40-54%' };
  return { label: 'Not Recommended', color: '#EF4444', bg: '#FEF2F2', range: 'Below 40%' };
}

/* ───────── Shared option renderer ───────── */
const FactorQuestion: React.FC<{
  factor: Factor;
  answers: Record<string, number | null>;
  onSelect: (factorId: string, score: number) => void;
}> = ({ factor, answers, onSelect }) => (
  <div className="scoring-factor-block">
    <div className="scoring-factor-header">
      <span className="scoring-factor-num">{factor.displayNum}</span>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h4 className="scoring-factor-name">
              {factor.name}
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'hsl(var(--accent))', marginLeft: '0.75rem', background: 'hsl(var(--accent-soft))', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                Weight: {(factor.weight * 100).toFixed(0)}%
              </span>
            </h4>
            <p style={{ fontSize: '0.8125rem', color: 'hsl(var(--text-muted))', lineHeight: '1.5', marginBottom: '0.75rem', maxWidth: '800px' }}>
              {factor.description}
            </p>
            <p className="scoring-factor-question">
              {factor.question}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="scoring-options">
      {factor.options.map(opt => {
        const selected = answers[factor.id] === opt.score;
        return (
          <button key={opt.score} className={`scoring-option ${selected ? 'selected' : ''}`} onClick={() => onSelect(factor.id, opt.score)}>
            <div className="scoring-option-radio">{selected && <div className="scoring-option-radio-dot" />}</div>
            <div>
              <span className="scoring-option-label">{opt.label}</span>
              <p className="scoring-option-desc">{opt.explanation}</p>
            </div>
          </button>
        );
      })}
    </div>
  </div>
);

/* ───────── Section Components ───────── */

// Shared state – lifted to parent & passed via context
interface ScoringState {
  selectedProject: string;
  setSelectedProject: (v: string) => void;
  answers: Record<string, number | null>;
  setAnswers: React.Dispatch<React.SetStateAction<Record<string, number | null>>>;
  submitted: boolean;
  setSubmitted: (v: boolean) => void;
  viewMode: 'internal' | 'external';
  setViewMode: (v: 'internal' | 'external') => void;
}

const ScoringCtx = React.createContext<ScoringState>(null!);

const Section_ProjectSelect: React.FC = () => {
  const { selectedProject, setSelectedProject, viewMode, setViewMode, setAnswers } = React.useContext(ScoringCtx);
  const { setSection } = useForm();
  return (
    <div className="card" style={{ padding: '1.75rem' }}>
      <div style={{ marginBottom: '1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <label className="label" style={{ marginBottom: '0.5rem', display: 'block' }}>Evaluation Perspective</label>
          <div style={{ 
            display: 'inline-flex', 
            background: 'hsl(var(--bg-main))', 
            padding: '0.25rem', 
            borderRadius: 'var(--radius-md)',
            border: '1px solid hsl(var(--border))'
          }}>
            <button 
              className="tooltip-trigger"
              onClick={() => setViewMode('internal')}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                borderRadius: 'calc(var(--radius-md) - 2px)',
                border: 'none',
                cursor: 'pointer',
                background: viewMode === 'internal' ? 'white' : 'transparent',
                color: viewMode === 'internal' ? 'hsl(var(--accent))' : 'hsl(var(--text-muted))',
                boxShadow: viewMode === 'internal' ? 'var(--shadow-sm)' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease'
              }}
            >
              Department Review
              <div className="tooltip">Internal Departmental Evaluation Perspective</div>
            </button>
            <button 
              className="tooltip-trigger"
              onClick={() => setViewMode('external')}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                borderRadius: 'calc(var(--radius-md) - 2px)',
                border: 'none',
                cursor: 'pointer',
                background: viewMode === 'external' ? 'white' : 'transparent',
                color: viewMode === 'external' ? 'hsl(var(--accent))' : 'hsl(var(--text-muted))',
                boxShadow: viewMode === 'external' ? 'var(--shadow-sm)' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease'
              }}
            >
              PND Review
              <div className="tooltip">Planning & Development Board External Audit</div>
            </button>
          </div>
        </div>
        <div style={{ color: 'hsl(var(--accent))', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Info size={16} />
          <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>Selection based on role profiling</span>
        </div>
      </div>

      <div style={{ marginBottom: '1.75rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem' }}>
        <div className="input-group" style={{ marginBottom: 0, flex: 1 }}>
          <label className="label" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="scoring-factor-num">[PS-1.1]</span>
            Project Name
          </label>
          <select className="select" value={selectedProject} onChange={e => setSelectedProject(e.target.value)} id="project-selector">
            <option value="">— Select a project to evaluate —</option>
            {PROJECTS.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>

        {viewMode === 'external' && (
          <button 
            className="btn btn-primary"
            onClick={() => {
              if (!selectedProject) {
                alert("Please select a project first.");
                return;
              }
              const newAnswers: Record<string, number> = {};
              ALL_FACTORS.forEach(f => {
                const randomOption = f.options[Math.floor(Math.random() * f.options.length)];
                newAnswers[f.id] = randomOption.score;
              });
              setAnswers(newAnswers);
              setSection(6);
            }}
            style={{ 
              padding: '0.75rem 1.5rem', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              background: 'hsl(var(--accent))',
              color: 'white',
              border: 'none',
              boxShadow: '0 4px 12px hsl(var(--accent) / 0.25)',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <Sparkles size={18} color="white" />
            <span style={{ color: 'white' }}>Instant AI Review</span>
          </button>
        )}
      </div>
    </div>
  );
};

const Section_Attachments: React.FC = () => {
  const [files, setFiles] = React.useState<Record<string, File | null>>({});

  const handleFileChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFiles(prev => ({ ...prev, [id]: file }));
  };

  return (
    <div className="card" style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
        <div style={{ width: '32px', height: '32px', background: 'hsl(var(--accent-soft))', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--accent))' }}>
          <Paperclip size={18} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.125rem', margin: 0, fontWeight: 700 }}>
            <span className="scoring-factor-num">[PS-5.1]</span>
            Supporting Documents
          </h3>
          <p style={{ fontSize: '0.8125rem', color: 'hsl(var(--text-muted))', margin: 0 }}>Attach proof of feasibility, technical validations, and stakeholder consultations.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {[
          { label: 'Complete PC-I Form', id: 'pci', desc: 'Adhering to prescribed ADP format' },
          { label: 'Feasibility Study', id: 'feasibility', desc: 'Including technical design validation' },
          { label: 'Environmental Impact Assessment', id: 'eia', desc: 'Where applicable' },
          { label: 'Cost Estimates & Financing Plan', id: 'finance', desc: 'Detailed breakdown and sustainability' },
          { label: 'Land Acquisition Status', id: 'land', desc: 'Supported by documentation' },
          { label: 'Procurement Strategy', id: 'procurement', desc: 'Timeline and method' },
          { label: 'Implementation Schedule', id: 'schedule', desc: 'Defined milestones' },
          { label: 'Risk Assessment & Mitigation', id: 'risk', desc: 'Strategies and assessment' },
          { label: 'Technical Approvals', id: 'approvals', desc: 'Regulatory permits and technical sanctions' },
        ].map(doc => (
          <div key={doc.id} 
            onClick={() => document.getElementById(`file-${doc.id}`)?.click()}
            style={{ 
              border: files[doc.id] ? '2px solid hsl(var(--success))' : '2px dashed hsl(var(--border))', 
              borderRadius: 'var(--radius-lg)', 
              padding: '2rem', 
              textAlign: 'center',
              background: files[doc.id] ? 'hsl(var(--success-soft))' : 'hsl(var(--bg-main) / 0.3)',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            <input 
              type="file" 
              id={`file-${doc.id}`} 
              style={{ display: 'none' }} 
              onChange={(e) => handleFileChange(doc.id, e)} 
            />
            {files[doc.id] ? (
              <CheckCircle2 size={24} color="hsl(var(--success))" style={{ marginBottom: '1rem' }} />
            ) : (
              <Upload size={24} color="hsl(var(--text-muted))" style={{ marginBottom: '1rem' }} />
            )}
            <p style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem' }}>{doc.label}</p>
            {doc.desc && <p style={{ fontSize: '0.7rem', color: files[doc.id] ? 'hsl(var(--success))' : 'hsl(var(--accent))', marginBottom: '0.5rem', fontWeight: 500 }}>{doc.desc}</p>}
            
            {files[doc.id] ? (
              <p style={{ fontSize: '0.75rem', color: 'hsl(var(--success))', fontWeight: 600 }}>{files[doc.id]?.name}</p>
            ) : (
              <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))' }}>Click to upload or drag and drop</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const SectionFactors: React.FC<{ factors: Factor[]; catColor: string }> = ({ factors, catColor }) => {
  const { answers, setAnswers } = React.useContext(ScoringCtx);
  const handleSelect = (factorId: string, score: number) => setAnswers(prev => ({ ...prev, [factorId]: score }));

  return (
    <div className="card" style={{ padding: '1.75rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ width: 14, height: 14, borderRadius: 4, background: catColor, flexShrink: 0 }} />
        <div>
          {/* Category Weight removed per user request */}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {factors.map((f) => (
          <FactorQuestion key={f.id} factor={f} answers={answers} onSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
};

const Section_Results: React.FC = () => {
  const { answers, submitted, setSubmitted, setAnswers, setSelectedProject } = React.useContext(ScoringCtx);
  const allAnswered = ALL_FACTORS.every(f => answers[f.id] !== undefined && answers[f.id] !== null);

  const results = useMemo(() => {
    if (!allAnswered) return null;
    let totalWeightedScore = 0;
    const categoryScores: Record<string, { total: number; maxPossible: number; factors: { name: string; score: number; weight: number; weighted: number; minScore: number | null }[] }> = {};
    const minScoreViolations: string[] = [];

    for (const f of ALL_FACTORS) {
      const score = answers[f.id] ?? 0;
      const weighted = score * f.weight;
      totalWeightedScore += weighted;

      const catName = STRATEGIC_FACTORS.includes(f) ? 'Strategic Factors' : IMPLEMENTATION_FACTORS.includes(f) ? 'Implementation Readiness' : 'Community & Political';
      if (!categoryScores[catName]) categoryScores[catName] = { total: 0, maxPossible: 0, factors: [] };
      categoryScores[catName].total += weighted;
      categoryScores[catName].maxPossible += 4 * f.weight;
      categoryScores[catName].factors.push({ name: f.name, score, weight: f.weight, weighted, minScore: f.minScore });
      if (f.minScore !== null && score < f.minScore) minScoreViolations.push(f.name);
    }
    return { totalWeightedScore, categoryScores, classification: getClassification(totalWeightedScore), minScoreViolations };
  }, [answers, allAnswered]);

  if (!allAnswered) {
    const remaining = ALL_FACTORS.filter(f => answers[f.id] === undefined || answers[f.id] === null);
    return (
      <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
        <AlertTriangle size={40} color="hsl(var(--warning))" style={{ marginBottom: '1rem' }} />
        <h3 style={{ marginBottom: '0.5rem' }}>Incomplete Evaluation</h3>
        <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9375rem' }}>
          Please score all factors before viewing results. {remaining.length} factor{remaining.length > 1 ? 's' : ''} remaining.
        </p>
        <ul style={{ marginTop: '1rem', textAlign: 'left', maxWidth: 400, margin: '1rem auto 0', listStyle: 'none', padding: 0 }}>
          {remaining.map(f => (
            <li key={f.id} style={{ padding: '0.35rem 0', fontSize: '0.8125rem', color: 'hsl(var(--error))', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <XCircle size={14} /> {f.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (!submitted) {
    return (
      <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
        <CheckCircle2 size={48} color="hsl(var(--success))" style={{ marginBottom: '1rem' }} />
        <h3 style={{ marginBottom: '0.5rem' }}>All Factors Scored</h3>
        <p style={{ color: 'hsl(var(--text-muted))', marginBottom: '1.5rem', fontSize: '0.9375rem' }}>
          Click below to calculate the weighted score and view the project classification.
        </p>
        <button className="btn btn-primary" style={{ padding: '0.75rem 2.5rem', fontSize: '1rem' }} onClick={() => setSubmitted(true)}>
          <BarChart3 size={20} /> Calculate Score
        </button>
      </div>
    );
  }

  if (!results) return null;

  return (
    <div className="card scoring-results" style={{ padding: '1.75rem' }}>
      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <BarChart3 size={20} color="hsl(var(--accent))" /> Scoring Results
      </h3>

      <div className="scoring-result-overall" style={{ background: results.classification.bg, borderColor: results.classification.color }}>
        <div>
          <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em', color: results.classification.color, marginBottom: '0.25rem' }}>Classification</p>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: results.classification.color, margin: 0 }}>{results.classification.label}</h3>
          <p style={{ fontSize: '0.8125rem', color: 'hsl(var(--text-muted))', marginTop: '0.25rem' }}>{results.classification.range}</p>
        </div>
        <div className="scoring-result-score-circle" style={{ borderColor: results.classification.color, color: results.classification.color }}>
          <span style={{ fontSize: '1.75rem', fontWeight: 800, lineHeight: 1 }}>{results.totalWeightedScore.toFixed(2)}</span>
          <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>/ 4.00</span>
        </div>
      </div>

      {results.minScoreViolations.length > 0 && (
        <div className="scoring-violations">
          <AlertTriangle size={18} /> <strong>Minimum Score Violations:</strong>&nbsp;{results.minScoreViolations.join(', ')}
        </div>
      )}

      <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, margin: '1.5rem 0 1rem' }}>Category Breakdown</h4>
      {CATEGORIES.map(cat => {
        const cs = results.categoryScores[cat.name];
        if (!cs) return null;
        const pct = (cs.total / cs.maxPossible) * 100;
        return (
          <div key={cat.name} className="scoring-cat-result">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: 600, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: cat.color, display: 'inline-block' }} /> {cat.name}
              </span>
              <span style={{ fontWeight: 700, fontSize: '0.875rem', color: cat.color }}>Performance Score: {cs.total.toFixed(2)}</span>
            </div>
            <div className="scoring-progress-track" style={{ height: '8px' }}>
              <div className="scoring-progress-fill" style={{ width: `${pct}%`, background: cat.color }} />
            </div>
            <div style={{ marginTop: '0.75rem' }}>
              {cs.factors.map(f => (
                <div key={f.name} style={{ marginBottom: '1rem' }}>
                  <div className="scoring-factor-result-row" style={{ borderBottom: f.minScore !== null && f.score < f.minScore ? 'none' : '' }}>
                    <span>{f.name}</span>
                    <span style={{ fontWeight: 600 }}>Score: {f.score} / 4</span>
                  </div>
                  {f.minScore !== null && f.score < f.minScore && (
                    <div className="factor-violation" style={{ marginTop: '0.25rem', padding: '0.75rem' }}>
                      <AlertTriangle className="factor-violation-icon" size={14} />
                      <div className="factor-violation-content">
                        <span className="factor-violation-title" style={{ fontSize: '0.75rem' }}>Critical Compliance Warning</span>
                        <p className="factor-violation-text" style={{ fontSize: '0.7rem' }}>
                          Min score of {f.minScore} not met. <strong>Required Action:</strong> Mandatory revision of project documentation or implementation strategy is required.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <button className="btn btn-secondary" onClick={() => { setSubmitted(false); setAnswers({}); setSelectedProject(''); }} style={{ padding: '0.5rem 1.5rem' }}>
          Start New Evaluation
        </button>
      </div>
    </div>
  );
};

/* ───────── State Provider (must wrap OUTSIDE DashboardLayout) ───────── */
export const ScoringStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState('');
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [submitted, setSubmitted] = useState(false);
  const [viewMode, setViewMode] = useState<'internal' | 'external'>('internal');

  const ctx: ScoringState = { selectedProject, setSelectedProject, answers, setAnswers, submitted, setSubmitted, viewMode, setViewMode };

  return <ScoringCtx.Provider value={ctx}>{children}</ScoringCtx.Provider>;
};

/* ───────── Main Content (switched by sidebar section) ───────── */
export const ProjectScoringContent: React.FC = () => {
  const { currentSection } = useForm();

  switch (currentSection) {
    case 1: return <Section_ProjectSelect />;
    case 2: return <SectionFactors factors={STRATEGIC_FACTORS} catColor="#3B82F6" />;
    case 3: return <SectionFactors factors={IMPLEMENTATION_FACTORS} catColor="#10B981" />;
    case 4: return <SectionFactors factors={COMMUNITY_FACTORS} catColor="#8B5CF6" />;
    case 5: return <Section_Attachments />;
    case 6: return <Section_Results />;
    default: return <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>Section under development.</div>;
  }
};

