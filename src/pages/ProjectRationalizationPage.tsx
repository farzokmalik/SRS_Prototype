import React, { useState, useMemo } from 'react';
import { useForm } from '../context/FormContext';
import { AlertTriangle, XCircle, CheckCircle2, BarChart3, Info, Sparkles, Paperclip, Upload } from 'lucide-react';
import '../styles/ProjectScoring.css';

/* ───────── Types ───────── */
interface Option { score: number; label: string; explanation: string; }
interface Factor { id: string; name: string; description: string; question: string; displayNum: string; weight: number; minScore: number | null; options: Option[]; }

/* ───────── Data ───────── */
const AUTH_PERF_FACTORS: Factor[] = [
  { 
    id:'r1', 
    name:'Approval Status', 
    description: 'This factor evaluates whether the project has undergone proper approval processes as required by public investment management protocols. Fully approved projects score higher, as they demonstrate adherence to governance and quality standards, while unapproved projects score lower due to the risks of inefficiency and lack of accountability.',
    question:'Indicate whether the project has formal approval.', 
    displayNum:'[PR-2.1]', 
    weight:0.20, 
    minScore:2, 
    options:[
      {score:4,label:'Fully approved',explanation:'The project has completed all required approvals, including feasibility studies, technical and financial evaluations, and sanctioning by relevant authorities. Example: A road construction project approved under the Punjab Annual Development Plan with detailed documentation.'},
      {score:2,label:'Pending approval',explanation:'The project has initiated the approval process but is awaiting formal sanctioning. Example: A hospital project with submitted feasibility reports under review.'},
      {score:0,label:'Not approved',explanation:'The project has not undergone any formal approval process or is included in the plan without adequate documentation. Example: A housing project added to the development plan without a feasibility study or technical review.'},
    ]
  },
  { 
    id:'r2', 
    name:'Implementation Status', 
    description: 'This factor assesses the progress and performance of a project during its implementation phase. Projects that are on track, meeting milestones, and staying within budget will score higher, while those facing significant delays, cost overruns, or performance issues will score lower.',
    question:'Include milestones, timelines, and budgets.', 
    displayNum:'[PR-2.2]', 
    weight:0.20, 
    minScore:2, 
    options:[
      {score:4,label:'On track',explanation:'The project is progressing smoothly, meeting its planned milestones, timelines, and budget without significant issues. Example: A school construction project achieving 80% completion as per the project schedule.'},
      {score:3,label:'Minor issues',explanation:'The project is progressing but faces minor challenges that can be addressed without significant restructuring. Example: A road rehabilitation project with minor delays due to material shortages but is on budget.'},
      {score:2,label:'Moderate issues',explanation:'The project is experiencing moderate challenges, such as timeline slippage or cost escalations, requiring targeted interventions. Example: A healthcare facility project delayed due to contractor issues but salvageable with re-planning.'},
      {score:1,label:'Significant issues',explanation:'The project is experiencing major delays, cost overruns, or mismanagement, requiring significant restructuring to continue. Example: A stalled irrigation project with unresolved design flaws.'},
      {score:0,label:'Severely underperforming',explanation:'The project is not progressing meaningfully or is at a standstill, with no clear path for resolution. Example: A completely stalled housing project with no work completed for 12 months.'},
    ]
  },
];

const STRATEGIC_FACTORS: Factor[] = [
  { 
    id:'r3', 
    name:'Alignment with Development Goals', 
    description: 'This factor measures how well a project aligns with the specific strategic goals outlined in the Punjab Growth Strategy, SDGs, Vision 2025, or sectoral plans. Respondents must explicitly reference the relevant goal(s) from these documents and provide evidence of the project’s contribution. Projects that directly target high-priority goals or measurable outcomes will receive higher scores.',
    question:'Cite specific goals in the Punjab Growth Strategy.', 
    displayNum:'[PR-3.1]', 
    weight:0.15, 
    minScore:null, 
    options:[
      {score:4,label:'Fully aligned',explanation:'The project explicitly supports one or more high-priority goals from the Punjab Growth Strategy or equivalent documents. Clear evidence, such as references to goals, sections, or specific targets, is provided. Example: A maternal health initiative linked to Goal 3.1 of the Punjab Growth Strategy with measurable outcome targets.'},
      {score:3,label:'Substantially aligned',explanation:'The project supports a strategic goal but may not address a top priority or lacks direct measurable outcomes. References are provided but may need additional clarity. Example: A road construction project improving connectivity but not targeting underserved areas.'},
      {score:2,label:'Moderately aligned',explanation:'The project has some relevance to strategic goals but lacks a strong connection or measurable impact. Goal references are vague or indirect. Example: A skills training program indirectly linked to the employment goal without focusing on target demographics.'},
      {score:1,label:'Marginally aligned',explanation:'The project has a weak or peripheral link to strategic goals and limited developmental impact. Minimal or unclear goal references. Example: A beautification project in a well-served urban area with no alignment to strategic needs.'},
      {score:0,label:'Not aligned',explanation:'The project does not contribute to any strategic goals in the Punjab Growth Strategy or equivalent documents. No references or evidence provided. Example: A luxury development project in direct conflict with equity or poverty-reduction goals.'},
    ]
  },
  { 
    id:'r4', 
    name:'Economic/Social Returns', 
    description: 'This factor evaluates the anticipated economic and social benefits derived from the project. High-scoring projects provide substantial, measurable improvements in areas such as employment, income generation, public service delivery, or social equity. Projects with minimal or no demonstrable benefits score lower.',
    question:'Provide evidence of measurable benefits.', 
    displayNum:'[PR-3.2]', 
    weight:0.10, 
    minScore:null, 
    options:[
      {score:4,label:'Very high returns',explanation:'The project is expected to deliver significant, measurable economic and/or social benefits. Example: A rural electrification project expected to increase household incomes by 30% and improve access to education and healthcare.'},
      {score:3,label:'High returns',explanation:'The project delivers notable benefits but with some limitations in scale or scope. Example: A public transit project reducing commuting time for urban workers without significant expansion into underserved areas.'},
      {score:2,label:'Moderate returns',explanation:'The project generates some benefits, but its impact is limited or not well-documented. Example: A digital literacy program with limited outreach or unmeasured long-term impacts.'},
      {score:1,label:'Low returns',explanation:'The project’s benefits are minimal, localized, or difficult to quantify. Example: A landscaping project in a city centre with limited economic or social value.'},
      {score:0,label:'No returns',explanation:'The project has no discernible economic or social benefits. Example: A stalled infrastructure project that does not deliver any service improvements.'},
    ]
  },
];

const INTEGRATION_FACTORS: Factor[] = [
  { 
    id:'r5', 
    name:'Programmatic Alignment', 
    description: 'This factor assesses whether the project is part of a broader program or complements other projects to maximize developmental impact. Projects that are well-integrated into larger initiatives or leverage synergies score higher, while isolated, stand-alone projects with no connection to broader strategies score lower.',
    question:'Describe synergies with other initiatives.', 
    displayNum:'[PR-4.1]', 
    weight:0.15, 
    minScore:null, 
    options:[
      {score:4,label:'Strongly programmatic',explanation:'The project is a core component of a broader program, creating significant synergies with other initiatives. Example: A feeder road network project designed to complement a major highway initiative, improving regional connectivity.'},
      {score:3,label:'Moderately programmatic',explanation:'The project supports a broader initiative but with less direct integration or limited coordination. Example: A standalone training program aligned with a national employment strategy but not formally linked to other projects.'},
      {score:2,label:'Mildly programmatic',explanation:'The project has some relevance to other initiatives but operates independently with limited synergies. Example: A small water supply project in an area without integrated sanitation initiatives.'},
      {score:1,label:'Weakly programmatic',explanation:'The project is loosely related to other initiatives but lacks tangible connections or impact. Example: A community park project with no alignment to urban planning goals.'},
      {score:0,label:'Stand-alone',explanation:'The project is entirely independent, with no connection to broader programs or strategies. Example: A one-off cultural event unrelated to developmental goals.'},
    ]
  },
  { 
    id:'r6', 
    name:'Community Needs', 
    description: 'This factor evaluates how well the project addresses the genuine needs and priorities of the community it aims to serve. Projects developed through robust stakeholder engagement or that respond to critical community demands score higher, while those lacking relevance to local needs score lower.',
    question:'Detail stakeholder engagement or needs assessments.', 
    displayNum:'[PR-4.2]', 
    weight:0.10, 
    minScore:null, 
    options:[
      {score:4,label:'Fully demand-driven',explanation:'The project directly addresses well-documented and critical community needs identified through participatory processes. Example: A flood protection project requested by affected communities during consultations.'},
      {score:3,label:'Substantially demand-driven',explanation:'The project reflects significant community needs but with limited stakeholder input or partial alignment. Example: A health clinic addressing general healthcare gaps but with no direct engagement from the community.'},
      {score:2,label:'Moderately demand-driven',explanation:'The project has some relevance to community needs but lacks evidence of criticality or direct demand. Example: A small road improvement project initiated without consulting local residents.'},
      {score:1,label:'Weakly demand-driven',explanation:'The project is loosely linked to community needs and lacks a clear basis for its selection. Example: A community center built without evidence of usage demand.'},
      {score:0,label:'Not demand-driven',explanation:'The project does not address any identifiable community needs or priorities. Example: A project driven by administrative priorities with no local relevance.'},
    ]
  },
  { 
    id:'r7', 
    name:'Equity Aspects', 
    description: 'This factor assesses the project\'s contribution to reducing regional disparities and promoting inclusivity, particularly in underserved or marginalized areas. Projects targeting historically neglected regions or communities score higher, while those reinforcing existing inequities or providing disproportionate benefits to already advantaged groups score lower.',
    question:'Highlight contributions to underserved areas.', 
    displayNum:'[PR-4.3]', 
    weight:0.10, 
    minScore:null, 
    options:[
      {score:4,label:'Highly equitable',explanation:'The project directly targets underserved regions or marginalized communities, addressing critical gaps in public service delivery or economic opportunities. Example: A water supply project in rural South Punjab providing access to clean water for villages without prior service.'},
      {score:3,label:'Moderately equitable',explanation:'The project benefits underserved groups but also includes elements that support better-served regions or populations. Example: A vocational training program targeting women in rural areas but with limited geographic reach.'},
      {score:2,label:'Limited equity impact',explanation:'The project has some relevance to equity but primarily benefits relatively advantaged regions or groups. Example: An urban road expansion project improving traffic flow but not targeting underprivileged neighbourhoods.'},
      {score:1,label:'Marginally equitable',explanation:'The project has minimal impact on reducing disparities and provides limited benefit to underserved populations. Example: A city beautification project that does not address basic needs.'},
      {score:0,label:'Reinforces inequities',explanation:'The project exacerbates regional or social disparities, providing disproportionate benefits to already privileged groups. Example: A luxury infrastructure project in a wealthy area while ignoring pressing needs in deprived regions.'},
    ]
  },
];

const ALL_FACTORS = [...AUTH_PERF_FACTORS, ...STRATEGIC_FACTORS, ...INTEGRATION_FACTORS];

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
  { name: 'Authorization & Performance', weight: '40%', color: '#EF4444', factors: AUTH_PERF_FACTORS },
  { name: 'Strategic Alignment', weight: '25%', color: '#3B82F6', factors: STRATEGIC_FACTORS },
  { name: 'Integration & Impact', weight: '35%', color: '#8B5CF6', factors: INTEGRATION_FACTORS },
];

function getClassification(score: number) {
  if (score >= 3.4) return { label: 'High Performing', color: '#10B981', bg: '#ECFDF5', range: '85-100%', action: 'Continue with standard monitoring protocols.' };
  if (score >= 2.8) return { label: 'Satisfactory', color: '#3B82F6', bg: '#EFF6FF', range: '70-84%', action: 'Maintain current implementation with targeted improvements.' };
  if (score >= 2.2) return { label: 'Requires Attention', color: '#F59E0B', bg: '#FFFBEB', range: '55-69%', action: 'Implement comprehensive improvement plan with quarterly progress reviews.' };
  if (score >= 1.6) return { label: 'Critical Review Required', color: '#F97316', bg: '#FFF7ED', range: '40-54%', action: 'Initiate major restructuring assessment to determine viability.' };
  return { label: 'Non-Viable', color: '#EF4444', bg: '#FEF2F2', range: 'Below 40%', action: 'Begin termination process unless exceptional circumstances exist.' };
}

/* ───────── Shared option renderer ───────── */
const FactorQuestion: React.FC<{
  factor: Factor;
  index: number;
  answers: Record<string, number | null>;
  onSelect: (factorId: string, score: number) => void;
}> = ({ factor, index, answers, onSelect }) => (
  <div className="scoring-factor-block">
    <div className="scoring-factor-header">
      <span className="scoring-factor-num">{factor.displayNum}</span>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h4 className="scoring-factor-name">
              {index}. {factor.name}
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
interface RatState {
  selectedProject: string;
  setSelectedProject: (v: string) => void;
  answers: Record<string, number | null>;
  setAnswers: React.Dispatch<React.SetStateAction<Record<string, number | null>>>;
  submitted: boolean;
  setSubmitted: (v: boolean) => void;
  viewMode: 'internal' | 'external';
  setViewMode: (v: 'internal' | 'external') => void;
}

const RatCtx = React.createContext<RatState>(null!);

const Section_ProjectSelect: React.FC = () => {
  const { selectedProject, setSelectedProject, viewMode, setViewMode, setAnswers } = React.useContext(RatCtx);
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
            <span className="scoring-factor-num">[PR-1.1]</span>
            Project Name
          </label>
          <select className="select" value={selectedProject} onChange={e => setSelectedProject(e.target.value)} id="rat-project-selector">
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
            <span className="scoring-factor-num">[PR-5.1]</span>
            Supporting Documents
          </h3>
          <p style={{ fontSize: '0.8125rem', color: 'hsl(var(--text-muted))', margin: 0 }}>Attach proof of milestones achieved, budget expenditures, and progress reports.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {[
          { label: 'Updated PC-I', id: 'updated-pci', desc: 'Revised project documentation' },
          { label: 'Progress Reports', id: 'progress', desc: 'Current implementation status' },
          { label: 'Expenditure Statements', id: 'expenditure', desc: 'Financial utilization proof' },
          { label: 'Timeline Variance Analysis', id: 'variance', desc: 'Analysis of schedule delays' },
          { label: 'Risk Assessment Matrix', id: 'risk', desc: 'Current risk profile and mitigation' },
          { label: 'Budget Utilization Reports', id: 'budget', desc: 'Detailed fund tracking' },
          { label: 'Achievement of Milestones', id: 'milestones', desc: 'Proof of physical progress' },
          { label: 'Stakeholder Feedback', id: 'feedback', desc: 'Summary of community engagement' },
          { label: 'Other', id: 'other', desc: 'Any other relevant supporting documents' },
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

const SectionFactors: React.FC<{ factors: Factor[]; catColor: string; startIndex?: number }> = ({ factors, startIndex = 1 }) => {
  const { answers, setAnswers } = React.useContext(RatCtx);
  const handleSelect = (factorId: string, score: number) => setAnswers(prev => ({ ...prev, [factorId]: score }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {factors.map((f, idx) => (
        <div key={f.id} className="card factor-card" style={{ padding: '1.75rem' }}>
          <FactorQuestion factor={f} index={startIndex + idx} answers={answers} onSelect={handleSelect} />
        </div>
      ))}
    </div>
  );
};

const Section_Results: React.FC = () => {
  const { answers, submitted, setSubmitted, setAnswers, setSelectedProject } = React.useContext(RatCtx);
  const allAnswered = ALL_FACTORS.every(f => answers[f.id] !== undefined && answers[f.id] !== null);

  const results = useMemo(() => {
    if (!allAnswered) return null;
    let totalWeightedScore = 0;
    const categoryScores: Record<string, { total: number; maxPossible: number; factors: { name: string; score: number; weight: number; weighted: number; minScore: number | null; displayNum: string }[] }> = {};
    const minScoreViolations: string[] = [];

    for (const f of ALL_FACTORS) {
      const score = answers[f.id] ?? 0;
      const weighted = score * f.weight;
      totalWeightedScore += weighted;

      const catName = AUTH_PERF_FACTORS.includes(f) ? 'Authorization & Performance' : STRATEGIC_FACTORS.includes(f) ? 'Strategic Alignment' : 'Integration & Impact';
      if (!categoryScores[catName]) categoryScores[catName] = { total: 0, maxPossible: 0, factors: [] };
      categoryScores[catName].total += weighted;
      categoryScores[catName].maxPossible += 4 * f.weight;
      categoryScores[catName].factors.push({ name: f.name, score, weight: f.weight, weighted, minScore: f.minScore, displayNum: f.displayNum });
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
        <BarChart3 size={20} color="hsl(var(--accent))" /> Rationalization Results
      </h3>

      <div style={{ background: results.classification.bg, border: `1px solid ${results.classification.color}`, borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', borderBottom: `1px solid ${results.classification.color}30` }}>
          <div>
            <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em', color: results.classification.color, marginBottom: '0.25rem' }}>Classification</p>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: results.classification.color, margin: 0 }}>{results.classification.label}</h3>
            <p style={{ fontSize: '0.8125rem', color: results.classification.color, opacity: 0.8, marginTop: '0.25rem' }}>{results.classification.range}</p>
          </div>
          <div className="scoring-result-score-circle" style={{ borderColor: results.classification.color, color: results.classification.color, margin: 0 }}>
            <span style={{ fontSize: '1.75rem', fontWeight: 800, lineHeight: 1 }}>{results.totalWeightedScore.toFixed(2)}</span>
            <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>/ 4.00</span>
          </div>
        </div>

        <div style={{ padding: '1.25rem', borderBottom: results.minScoreViolations.length > 0 ? `1px solid ${results.classification.color}20` : 'none' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: results.classification.color, marginBottom: '0.25rem' }}>Required Action</p>
          <p style={{ fontSize: '0.9375rem', color: 'hsl(var(--text-main))', margin: 0, fontWeight: 500 }}>{results.classification.action}</p>
        </div>

        {results.minScoreViolations.length > 0 && (
          <div style={{ padding: '1rem', background: 'hsl(var(--error-soft))', borderTop: `1px solid hsl(var(--error) / 0.2)`, display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'hsl(var(--error))' }}>
            <AlertTriangle size={18} />
            <div style={{ fontSize: '0.875rem' }}>
              <strong style={{ fontWeight: 700 }}>Critical Threshold Violations:</strong>&nbsp;{results.minScoreViolations.join(', ')}
            </div>
          </div>
        )}
      </div>

      <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, margin: '1.5rem 0 1rem' }}>Category Breakdown</h4>
      {(() => {
        let globalFactorIdx = 1;
        return CATEGORIES.map(cat => {
          const cs = results.categoryScores[cat.name];
          if (!cs) return null;
          const pct = (cs.total / cs.maxPossible) * 100;
          return (
            <div key={cat.name} className="scoring-cat-result">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 600, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: cat.color, display: 'inline-block' }} /> {cat.name}
                </span>
                <span style={{ fontWeight: 700, fontSize: '0.875rem', color: cat.color }}>Performance Score: {cs.total.toFixed(2)} / {cs.maxPossible.toFixed(2)}</span>
              </div>
              <div className="scoring-progress-track" style={{ height: '8px' }}>
                <div className="scoring-progress-fill" style={{ width: `${pct}%`, background: cat.color }} />
              </div>
              <div style={{ marginTop: '0.75rem' }}>
                {cs.factors.map((f) => {
                  const currentIdx = globalFactorIdx++;
                  return (
                    <div key={f.name} style={{ marginBottom: '1rem' }}>
                      <div className="scoring-factor-result-row">
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontWeight: 800, fontSize: '0.75rem', color: 'hsl(var(--primary))', opacity: 0.7 }}>{f.displayNum}</span>
                          <span style={{ fontWeight: 700 }}>{currentIdx}.</span> {f.name}
                      {f.minScore !== null && f.score < f.minScore && (
                        <div className="tooltip-trigger tooltip-error">
                          <AlertTriangle size={16} color="#EF4444" />
                          <div className="tooltip" style={{ width: '320px', whiteSpace: 'normal', textAlign: 'left', padding: '1rem', lineHeight: '1.5' }}>
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                              <AlertTriangle size={18} color="white" style={{ flexShrink: 0, marginTop: '2px' }} />
                              <div>
                                <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'white', fontSize: '0.875rem', letterSpacing: '0.01em' }}>Performance Compliance Warning</strong>
                                <p style={{ margin: 0, fontSize: '0.75rem', color: 'rgba(255,255,255,0.9)' }}>
                                  Min score of <strong style={{ color: 'white' }}>{f.minScore}</strong> not met for this factor.
                                </p>
                                <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                                  <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', fontWeight: 800, color: 'white', letterSpacing: '0.05em' }}>Required Action</span>
                                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.75rem', color: 'white', fontWeight: 500 }}>
                                    Immediate project restructuring or remedial action plan required.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </span>
                    <span style={{ fontWeight: 600 }}>Score: {f.score} / 4</span>
                  </div>
                </div>
              );
            })}
              </div>
            </div>
          );
        });
      })()}

      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <button className="btn btn-secondary" onClick={() => { setSubmitted(false); setAnswers({}); setSelectedProject(''); }} style={{ padding: '0.5rem 1.5rem' }}>
          Start New Evaluation
        </button>
      </div>
    </div>
  );
};

/* ───────── State Provider (wraps OUTSIDE DashboardLayout) ───────── */
export const RatStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState('');
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [submitted, setSubmitted] = useState(false);
  const [viewMode, setViewMode] = useState<'internal' | 'external'>('internal');

  const ctx: RatState = { selectedProject, setSelectedProject, answers, setAnswers, submitted, setSubmitted, viewMode, setViewMode };

  return <RatCtx.Provider value={ctx}>{children}</RatCtx.Provider>;
};

/* ───────── Main Content (switched by sidebar section) ───────── */
export const RationalizationContent: React.FC = () => {
  const { currentSection } = useForm();

  switch (currentSection) {
    case 1: return <Section_ProjectSelect />;
    case 2: return <SectionFactors factors={AUTH_PERF_FACTORS} catColor="#EF4444" startIndex={1} />;
    case 3: return <SectionFactors factors={STRATEGIC_FACTORS} catColor="#3B82F6" startIndex={4} />;
    case 4: return <SectionFactors factors={INTEGRATION_FACTORS} catColor="#8B5CF6" startIndex={7} />;
    case 5: return <Section_Attachments />;
    case 6: return <Section_Results />;
    default: return <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>Section under development.</div>;
  }
};
