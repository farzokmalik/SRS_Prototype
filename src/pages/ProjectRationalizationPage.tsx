import React, { useState, useMemo } from 'react';
import { useForm } from '../context/FormContext';
import { AlertTriangle, XCircle, CheckCircle2, BarChart3, Info } from 'lucide-react';
import '../styles/ProjectScoring.css';

/* ───────── Types ───────── */
interface Option { score: number; label: string; explanation: string; }
interface Factor { id: string; name: string; question: string; displayNum: string; weight: number; minScore: number | null; options: Option[]; }

/* ───────── Data ───────── */
const AUTH_PERF_FACTORS: Factor[] = [
  { id:'r1', name:'Approval Status', question:'Indicate whether the project has formal approval.', displayNum:'1', weight:0.20, minScore:2, options:[
    {score:4,label:'Fully approved',explanation:'The project has completed all required approvals, including feasibility studies, technical and financial evaluations, and sanctioning by relevant authorities. Example: A road construction project approved under the Punjab Annual Development Plan with detailed documentation.'},
    {score:2,label:'Pending approval',explanation:'The project has initiated the approval process but is awaiting formal sanctioning. Example: A hospital project with submitted feasibility reports under review.'},
    {score:0,label:'Not approved',explanation:'The project has not undergone any formal approval process or is included in the plan without adequate documentation. Example: A housing project added to the development plan without a feasibility study or technical review.'},
  ]},
  { id:'r2', name:'Implementation Status', question:'Include milestones, timelines, and budgets.', displayNum:'2', weight:0.20, minScore:2, options:[
    {score:4,label:'On track',explanation:'The project is progressing smoothly, meeting its planned milestones, timelines, and budget without significant issues. Example: A school construction project achieving 80% completion as per the project schedule.'},
    {score:3,label:'Minor issues',explanation:'The project is progressing but faces minor challenges that can be addressed without significant restructuring. Example: A road rehabilitation project with minor delays due to material shortages but is on budget.'},
    {score:2,label:'Moderate issues',explanation:'The project is experiencing moderate challenges, such as timeline slippage or cost escalations, requiring targeted interventions. Example: A healthcare facility project delayed due to contractor issues but salvageable with re-planning.'},
    {score:1,label:'Significant issues',explanation:'The project is experiencing major delays, cost overruns, or mismanagement, requiring significant restructuring to continue. Example: A stalled irrigation project with unresolved design flaws.'},
    {score:0,label:'Severely underperforming',explanation:'The project is not progressing meaningfully or is at a standstill, with no clear path for resolution. Example: A completely stalled housing project with no work completed for 12 months.'},
  ]},
];

const STRATEGIC_FACTORS: Factor[] = [
  { id:'r3', name:'Alignment with Development Goals', question:'Cite specific goals in the Punjab Growth Strategy.', displayNum:'3', weight:0.15, minScore:null, options:[
    {score:4,label:'Fully aligned',explanation:'The project explicitly supports one or more high-priority goals from the Punjab Growth Strategy or equivalent documents. Clear evidence, such as references to goals, sections, or specific targets, is provided. Example: A maternal health initiative linked to Ensuring a Healthy Punjab Strategy with measurable outcome targets – reduce maternal mortality rate of 180 per 100,000 live births by 20% in 5 years.'},
    {score:3,label:'Substantially aligned',explanation:'The project supports a strategic goal but may not address a top priority or lacks direct measurable outcomes. References are provided but may need additional clarity. Example: A road construction project improving connectivity but not targeting underserved areas.'},
    {score:2,label:'Moderately aligned',explanation:'The project has some relevance to strategic goals but lacks a strong connection or measurable impact. Goal references are vague or indirect. Example: A skills training program indirectly linked to the employment goal without focusing on target demographics.'},
    {score:1,label:'Marginally aligned',explanation:'The project has a weak or peripheral link to strategic goals and limited developmental impact. Minimal or unclear goal references. Example: A beautification project in a well-served urban area with no alignment to strategic needs.'},
    {score:0,label:'Not aligned',explanation:'The project does not contribute to any strategic goals in the Punjab Growth Strategy or equivalent documents. No references or evidence provided. Example: A luxury development project in direct conflict with equity or poverty-reduction goals.'},
  ]},
  { id:'r4', name:'Economic / Social Returns', question:'Provide evidence of measurable benefits.', displayNum:'4', weight:0.10, minScore:null, options:[
    {score:4,label:'Very high returns',explanation:'The project is expected to deliver significant, measurable economic and/or social benefits. Example: A rural electrification project expected to increase household incomes by 30% and improve access to education and healthcare.'},
    {score:3,label:'High returns',explanation:'The project delivers notable benefits but with some limitations in scale or scope. Example: A public transit project reducing commuting time for urban workers without significant expansion into underserved areas.'},
    {score:2,label:'Moderate returns',explanation:'The project generates some benefits, but its impact is limited or not well-documented. Example: A digital literacy program with limited outreach or unmeasured long-term impacts.'},
    {score:1,label:'Low returns',explanation:'The project’s benefits are minimal, localized, or difficult to quantify. Example: A landscaping project in a city centre with limited economic or social value.'},
    {score:0,label:'No returns',explanation:'The project has no discernible economic or social benefits. Example: A stalled infrastructure project that does not deliver any service improvements.'},
  ]},
];

const INTEGRATION_FACTORS: Factor[] = [
  { id:'r5', name:'Programmatic Alignment', question:'Describe synergies with other initiatives.', displayNum:'5', weight:0.15, minScore:null, options:[
    {score:4,label:'Strongly programmatic',explanation:'The project is a core component of a broader program, creating significant synergies with other initiatives. Example: A feeder road network project designed to complement a major highway initiative, improving regional connectivity.'},
    {score:3,label:'Moderately programmatic',explanation:'The project supports a broader initiative but with less direct integration or limited coordination. Example: A standalone training program aligned with a national employment strategy but not formally linked to other projects.'},
    {score:2,label:'Mildly programmatic',explanation:'The project has some relevance to other initiatives but operates independently with limited synergies. Example: A small water supply project in an area without integrated sanitation initiatives.'},
    {score:1,label:'Weakly programmatic',explanation:'The project is loosely related to other initiatives but lacks tangible connections or impact. Example: A community park project with no alignment to urban planning goals.'},
    {score:0,label:'Stand-alone',explanation:'The project is entirely independent, with no connection to broader programs or strategies. Example: A one-off cultural event unrelated to developmental goals.'},
  ]},
  { id:'r6', name:'Community Needs', question:'Detail stakeholder engagement or needs assessments.', displayNum:'6', weight:0.10, minScore:null, options:[
    {score:4,label:'Fully demand-driven',explanation:'The project directly addresses well-documented and critical community needs identified through participatory processes. Example: A flood protection project requested by affected communities during consultations.'},
    {score:3,label:'Substantially demand-driven',explanation:'The project reflects significant community needs but with limited stakeholder input or partial alignment. Example: A health clinic addressing general healthcare gaps but with no direct engagement from the community.'},
    {score:2,label:'Moderately demand-driven',explanation:'The project has some relevance to community needs but lacks evidence of criticality or direct demand. Example: A small road improvement project initiated without consulting local residents.'},
    {score:1,label:'Weakly demand-driven',explanation:'The project is loosely linked to community needs and lacks a clear basis for its selection. Example: A community center built without evidence of usage demand.'},
    {score:0,label:'Not demand-driven',explanation:'The project does not address any identifiable community needs or priorities. Example: A project driven by administrative priorities with no local relevance.'},
  ]},
  { id:'r7', name:'Equity Aspects', question:'Highlight contributions to underserved areas.', displayNum:'7', weight:0.10, minScore:null, options:[
    {score:4,label:'Highly equitable',explanation:'The project directly targets underserved regions or marginalized communities, addressing critical gaps in public service delivery or economic opportunities. Example: A water supply project in rural South Punjab providing access to clean water for villages without prior service.'},
    {score:3,label:'Moderately equitable',explanation:'The project benefits underserved groups but also includes elements that support better-served regions or populations. Example: A vocational training program targeting women in rural areas but with limited geographic reach.'},
    {score:2,label:'Limited equity impact',explanation:'The project has some relevance to equity but primarily benefits relatively advantaged regions or groups. Example: An urban road expansion project improving traffic flow but not targeting underprivileged neighbourhoods.'},
    {score:1,label:'Marginally equitable',explanation:'The project has minimal impact on reducing disparities and provides limited benefit to underserved populations. Example: A city beautification project that does not address basic needs.'},
    {score:0,label:'Reinforces inequities',explanation:'The project exacerbates regional or social disparities, providing disproportionate benefits to already privileged groups. Example: A luxury infrastructure project in a wealthy area while ignoring pressing needs in deprived regions.'},
  ]},
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
  answers: Record<string, number | null>;
  onSelect: (factorId: string, score: number) => void;
}> = ({ factor, answers, onSelect }) => (
  <div className="scoring-factor-block">
    <div className="scoring-factor-header">
      <span className="scoring-factor-num">{factor.displayNum}</span>
      <div>
        <h4 className="scoring-factor-name">{factor.name}</h4>
        <p className="scoring-factor-question">{factor.question}</p>
          {/* Weight label removed per user request */}
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
  const { selectedProject, setSelectedProject, viewMode, setViewMode } = React.useContext(RatCtx);
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
              Internal View
              <div className="tooltip">This will be selected automatically based on role in future</div>
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
              External View
              <div className="tooltip">This will be selected automatically based on role in future</div>
            </button>
          </div>
        </div>
        <div style={{ color: 'hsl(var(--accent))', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Info size={16} />
          <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>Selection based on role profiling</span>
        </div>
      </div>

      <div className="input-group" style={{ marginBottom: 0 }}>
        <label className="label">Project Name</label>
        <select className="select" value={selectedProject} onChange={e => setSelectedProject(e.target.value)} id="rat-project-selector">
          <option value="">— Select a project to evaluate —</option>
          {PROJECTS.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>
    </div>
  );
};

const SectionFactors: React.FC<{ factors: Factor[]; catColor: string }> = ({ factors, catColor }) => {
  const { answers, setAnswers } = React.useContext(RatCtx);
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
        {factors.map(f => (
          <FactorQuestion key={f.id} factor={f} answers={answers} onSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
};

const Section_Results: React.FC = () => {
  const { answers, submitted, setSubmitted, setAnswers, setSelectedProject } = React.useContext(RatCtx);
  const allAnswered = ALL_FACTORS.every(f => answers[f.id] !== undefined && answers[f.id] !== null);

  const results = useMemo(() => {
    if (!allAnswered) return null;
    let totalWeightedScore = 0;
    const categoryScores: Record<string, { total: number; maxPossible: number; factors: { name: string; score: number; weight: number; weighted: number }[] }> = {};
    const minScoreViolations: string[] = [];

    for (const f of ALL_FACTORS) {
      const score = answers[f.id] ?? 0;
      const weighted = score * f.weight;
      totalWeightedScore += weighted;

      const catName = AUTH_PERF_FACTORS.includes(f) ? 'Authorization & Performance' : STRATEGIC_FACTORS.includes(f) ? 'Strategic Alignment' : 'Integration & Impact';
      if (!categoryScores[catName]) categoryScores[catName] = { total: 0, maxPossible: 0, factors: [] };
      categoryScores[catName].total += weighted;
      categoryScores[catName].maxPossible += 4 * f.weight;
      categoryScores[catName].factors.push({ name: f.name, score, weight: f.weight, weighted });
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

      {/* Required Action */}
      <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: results.classification.bg, border: `1px solid ${results.classification.color}30`, marginBottom: '1rem' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: results.classification.color, marginBottom: '0.25rem' }}>Required Action</p>
        <p style={{ fontSize: '0.875rem', color: 'hsl(var(--text-main))' }}>{results.classification.action}</p>
      </div>

      {results.minScoreViolations.length > 0 && (
        <div className="scoring-violations">
          <AlertTriangle size={18} /> <strong>Critical Threshold Violations:</strong>&nbsp;{results.minScoreViolations.join(', ')}
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
                <div key={f.name} className="scoring-factor-result-row">
                  <span>{f.name}</span>
                  <span style={{ fontWeight: 600 }}>Score: {f.score} / 4</span>
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
    case 2: return <SectionFactors factors={AUTH_PERF_FACTORS} catColor="#EF4444" />;
    case 3: return <SectionFactors factors={STRATEGIC_FACTORS} catColor="#3B82F6" />;
    case 4: return <SectionFactors factors={INTEGRATION_FACTORS} catColor="#8B5CF6" />;
    case 5: return <Section_Results />;
    default: return <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>Section under development.</div>;
  }
};
