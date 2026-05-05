import React, { useState, useMemo } from 'react';
import { useForm } from '../context/FormContext';
import { AlertTriangle, XCircle, CheckCircle2, BarChart3 } from 'lucide-react';
import '../styles/ProjectScoring.css';

/* ───────── Types ───────── */
interface Option { score: number; label: string; explanation: string; }
interface Factor { id: string; name: string; displayNum: string; weight: number; minScore: number | null; options: Option[]; }

/* ───────── Data ───────── */
const STRATEGIC_FACTORS: Factor[] = [
  { id:'f1', name:'Alignment with Development Goals', displayNum:'1', weight:0.20, minScore:2, options:[
    {score:4,label:'Fully aligned',explanation:'The project explicitly supports one or more high-priority goals from the Punjab Growth Strategy or equivalent documents with clear, measurable targets.'},
    {score:3,label:'Substantially aligned',explanation:'The project supports a strategic goal but may not address a top priority or lacks direct measurable outcomes.'},
    {score:2,label:'Moderately aligned',explanation:'The project has some relevance to strategic goals but lacks a strong connection or measurable impact.'},
    {score:1,label:'Marginally aligned',explanation:'The project has a weak or peripheral link to strategic goals and limited developmental impact.'},
    {score:0,label:'Not aligned',explanation:'The project does not contribute to any strategic goals in the Punjab Growth Strategy or equivalent documents.'},
  ]},
  { id:'f2', name:'Economic / Social Returns', displayNum:'2', weight:0.10, minScore:null, options:[
    {score:4,label:'Very high returns',explanation:'The project is expected to deliver significant, measurable economic and/or social benefits across multiple dimensions.'},
    {score:3,label:'High returns',explanation:'The project delivers notable benefits but with some limitations in scale or scope.'},
    {score:2,label:'Moderate returns',explanation:'The project generates some benefits, but its impact is limited or not well-documented.'},
    {score:1,label:'Low returns',explanation:'The project\'s benefits are minimal, localized, or difficult to quantify.'},
    {score:0,label:'No returns',explanation:'The project has no discernible economic or social benefits.'},
  ]},
  { id:'f3', name:'Programmatic Alignment', displayNum:'3', weight:0.05, minScore:null, options:[
    {score:4,label:'Strongly programmatic',explanation:'The project is a core component of a broader program, creating significant synergies with other initiatives.'},
    {score:3,label:'Moderately programmatic',explanation:'The project supports a broader initiative but with less direct integration or limited synergies.'},
    {score:2,label:'Mildly programmatic',explanation:'The project has some relevance to other initiatives but operates independently with minimal coordination.'},
    {score:1,label:'Weakly programmatic',explanation:'The project is loosely related to other initiatives but lacks tangible connections or coordination.'},
    {score:0,label:'Stand-alone',explanation:'The project is entirely independent, with no connection to broader programs or strategies.'},
  ]},
];

const IMPLEMENTATION_FACTORS: Factor[] = [
  { id:'f4', name:'Quality of Preparation & Risk Assessment', displayNum:'4', weight:0.20, minScore:2, options:[
    {score:4,label:'Excellent',explanation:'The project preparation is thorough, with high-quality feasibility studies and comprehensive risk assessment.'},
    {score:3,label:'Above average',explanation:'Preparatory work is generally strong but may lack detail in technical design validation or risk analysis.'},
    {score:2,label:'Average',explanation:'The project preparation is adequate but includes gaps in technical documentation or risk assessment.'},
    {score:1,label:'Below average',explanation:'Preparatory work is weak, with significant omissions in required documentation and risk planning.'},
    {score:0,label:'Poor',explanation:'The project has no meaningful preparatory work, feasibility studies, or risk assessment.'},
  ]},
  { id:'f5', name:'Implementation Feasibility', displayNum:'5', weight:0.10, minScore:2, options:[
    {score:4,label:'Highly feasible',explanation:'All implementation prerequisites are secured and institutional capacity is fully demonstrated.'},
    {score:3,label:'Feasible with minor gaps',explanation:'Most implementation requirements are in place and institutional capacity is largely adequate.'},
    {score:2,label:'Moderately feasible',explanation:'Several prerequisites are incomplete and institutional capacity shows notable gaps.'},
    {score:1,label:'Feasible with major gaps',explanation:'Key prerequisites are missing and institutional capacity is significantly limited.'},
    {score:0,label:'Not feasible',explanation:'The project lacks fundamental prerequisites and implementing agency demonstrates insufficient capacity.'},
  ]},
  { id:'f6', name:'Affordability & Financing', displayNum:'6', weight:0.10, minScore:2, options:[
    {score:4,label:'Fully affordable',explanation:'The project is well within the departmental budget ceiling, fully financed, and has a sustainable long-term funding plan.'},
    {score:3,label:'Affordable with minor gaps',explanation:'The project is largely within budget limits but has minor financing uncertainties.'},
    {score:2,label:'Moderately affordable',explanation:'The project exceeds budget ceilings or has significant funding uncertainties but is still partially financed.'},
    {score:1,label:'Barely affordable',explanation:'The project exceeds budget limits significantly or has major unresolved financing gaps.'},
    {score:0,label:'Not affordable',explanation:'The project is fiscally unsustainable, with no clear or realistic financing plan.'},
  ]},
];

const COMMUNITY_FACTORS: Factor[] = [
  { id:'f7', name:'Community Needs', displayNum:'7', weight:0.10, minScore:null, options:[
    {score:4,label:'Fully demand-driven',explanation:'The project directly addresses well-documented and critical community needs identified through participatory processes.'},
    {score:3,label:'Substantially demand-driven',explanation:'The project reflects significant community needs but with limited stakeholder input or partial alignment.'},
    {score:2,label:'Moderately demand-driven',explanation:'The project has some relevance to community needs but lacks evidence of criticality or direct demand.'},
    {score:1,label:'Weakly demand-driven',explanation:'The project is loosely linked to community needs and lacks a clear basis for its selection.'},
    {score:0,label:'Not demand-driven',explanation:'The project does not address any identifiable community needs or priorities.'},
  ]},
  { id:'f8', name:'Equity Aspects', displayNum:'8', weight:0.07, minScore:null, options:[
    {score:4,label:'Highly equitable',explanation:'The project directly targets underserved regions or marginalized communities, addressing critical gaps in public service delivery.'},
    {score:3,label:'Moderately equitable',explanation:'The project benefits underserved groups but also includes elements that support better-served regions.'},
    {score:2,label:'Limited equity impact',explanation:'The project has some relevance to equity but primarily benefits relatively advantaged regions or groups.'},
    {score:1,label:'Marginally equitable',explanation:'The project has minimal impact on reducing disparities and provides limited benefit to underserved populations.'},
    {score:0,label:'Reinforces inequities',explanation:'The project exacerbates regional or social disparities, providing disproportionate benefits to privileged groups.'},
  ]},
  { id:'f9a', name:'Political Viability & Governance (Macro)', displayNum:'9a', weight:0.04, minScore:null, options:[
    {score:4,label:'Excellent alignment',explanation:'The project is politically viable, strengthens governance, and promotes institutional reforms or capacity building.'},
    {score:3,label:'Good alignment',explanation:'The project aligns with governance objectives and has some potential to improve institutional relationships.'},
    {score:2,label:'Moderate alignment',explanation:'The project has some alignment with governance or reform objectives but lacks significant systemic impact.'},
    {score:1,label:'Weak alignment',explanation:'The project is weakly aligned with governance objectives and risks creating institutional conflicts.'},
    {score:0,label:'No alignment or adverse impact',explanation:'The project creates governance challenges or institutional conflicts without offering systemic benefits.'},
  ]},
  { id:'f9b', name:'Community-Level Analysis (Micro)', displayNum:'9b', weight:0.04, minScore:null, options:[
    {score:4,label:'Comprehensive analysis',explanation:'The project team has fully identified winners and losers, designed awareness campaigns, and devised strategies to mitigate resistance.'},
    {score:3,label:'Good analysis',explanation:'The project team has identified beneficiaries and adverse groups, but strategies to address resistance are incomplete.'},
    {score:2,label:'Moderate analysis',explanation:'The project identifies beneficiaries and adverse groups, but plans for community engagement are vague.'},
    {score:1,label:'Limited analysis',explanation:'Minimal identification of winners and losers, with no clear community management strategies.'},
    {score:0,label:'No analysis',explanation:'No effort to identify or address community-level dynamics.'},
  ]},
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
      <div>
        <h4 className="scoring-factor-name">{factor.name}</h4>
        <span className="scoring-factor-meta">
          Weight: {(factor.weight * 100).toFixed(0)}%
        </span>
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
}

const ScoringCtx = React.createContext<ScoringState>(null!);

const Section_ProjectSelect: React.FC = () => {
  const { selectedProject, setSelectedProject } = React.useContext(ScoringCtx);
  return (
    <div className="card" style={{ padding: '1.75rem' }}>
      <div className="input-group" style={{ marginBottom: 0 }}>
        <label className="label">Project Name</label>
        <select className="select" value={selectedProject} onChange={e => setSelectedProject(e.target.value)} id="project-selector">
          <option value="">— Select a project to evaluate —</option>
          {PROJECTS.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>
    </div>
  );
};

const SectionFactors: React.FC<{ factors: Factor[]; catColor: string; catWeight: string }> = ({ factors, catColor, catWeight }) => {
  const { answers, setAnswers } = React.useContext(ScoringCtx);
  const handleSelect = (factorId: string, score: number) => setAnswers(prev => ({ ...prev, [factorId]: score }));

  return (
    <div className="card" style={{ padding: '1.75rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ width: 14, height: 14, borderRadius: 4, background: catColor, flexShrink: 0 }} />
        <div>
          <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', fontWeight: 500 }}>Category Weight: {catWeight}</p>
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
    const categoryScores: Record<string, { total: number; maxPossible: number; factors: { name: string; score: number; weight: number; weighted: number }[] }> = {};
    const minScoreViolations: string[] = [];

    for (const f of ALL_FACTORS) {
      const score = answers[f.id] ?? 0;
      const weighted = score * f.weight;
      totalWeightedScore += weighted;

      const catName = STRATEGIC_FACTORS.includes(f) ? 'Strategic Factors' : IMPLEMENTATION_FACTORS.includes(f) ? 'Implementation Readiness' : 'Community & Political';
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
              <span style={{ fontWeight: 700, fontSize: '0.875rem', color: cat.color }}>{cs.total.toFixed(2)} / {cs.maxPossible.toFixed(2)}</span>
            </div>
            <div className="scoring-progress-track" style={{ height: '8px' }}>
              <div className="scoring-progress-fill" style={{ width: `${pct}%`, background: cat.color }} />
            </div>
            <div style={{ marginTop: '0.75rem' }}>
              {cs.factors.map(f => (
                <div key={f.name} className="scoring-factor-result-row">
                  <span>{f.name}</span>
                  <span style={{ fontWeight: 600 }}>{f.score} / 4 <span style={{ color: 'hsl(var(--text-muted))', fontWeight: 400, fontSize: '0.75rem' }}>(weighted: {f.weighted.toFixed(2)})</span></span>
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

  const ctx: ScoringState = { selectedProject, setSelectedProject, answers, setAnswers, submitted, setSubmitted };

  return <ScoringCtx.Provider value={ctx}>{children}</ScoringCtx.Provider>;
};

/* ───────── Main Content (switched by sidebar section) ───────── */
export const ProjectScoringContent: React.FC = () => {
  const { currentSection } = useForm();

  switch (currentSection) {
    case 1: return <Section_ProjectSelect />;
    case 2: return <SectionFactors factors={STRATEGIC_FACTORS} catColor="#3B82F6" catWeight="35%" />;
    case 3: return <SectionFactors factors={IMPLEMENTATION_FACTORS} catColor="#10B981" catWeight="40%" />;
    case 4: return <SectionFactors factors={COMMUNITY_FACTORS} catColor="#8B5CF6" catWeight="25%" />;
    case 5: return <Section_Results />;
    default: return <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>Section under development.</div>;
  }
};

