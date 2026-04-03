import React, { useState, useRef, useEffect } from 'react';
import { useForm } from '../../../../context/FormContext';
import { InputField } from '../../../ui/FormElements';
import {
  Plus, Trash2, FolderOpen, FileText, ChevronRight, ChevronDown,
  BarChart3, GitBranch, LayoutGrid, X, Activity,
} from 'lucide-react';

// ─────────────────────────────────────────────
// Types (Synced with PC-1 Section 7)
// ─────────────────────────────────────────────
interface DetailRow {
  id: string; year: string; localCost: string; foreignCost: string;
}
interface ObjectCode {
  id: string; code: string; name: string; details: DetailRow[];
}
interface FinancialPlan {
  finComponent: string; grantNo: string; costCenter: string; loNo: string;
  fundingType: string; fundCenter: string; acToCredit: string; functionCode: string;
  objectCodes: ObjectCode[];
}
interface WbsNode {
  id: string; title: string; type: 'summary' | 'dictionary'; level: string;
  children: WbsNode[]; collapsed?: boolean; planData?: FinancialPlan;
}

// ─────────────────────────────────────────────
// Quarter & Annual Work types
// ─────────────────────────────────────────────
interface QuarterData {
  unit: string; pciQty: string; achievement: string; target: string;
}

interface AnnualWorkItem {
  id: string;
  description: string;
  unit: string;
  quarters: { q1: QuarterData; q2: QuarterData; q3: QuarterData; q4: QuarterData; };
}

const emptyQuarter = (): QuarterData => ({ unit: '', pciQty: '', achievement: '', target: '' });
const emptyAW = (): AnnualWorkItem => ({
  id: Math.random().toString(36).slice(2) + Date.now().toString(36),
  description: '', unit: '',
  quarters: { q1: emptyQuarter(), q2: emptyQuarter(), q3: emptyQuarter(), q4: emptyQuarter() },
});

// ─────────────────────────────────────────────
// Cost helpers
// ─────────────────────────────────────────────
const nodeCost = (node: WbsNode): number => {
  if (node.type === 'dictionary' && node.planData)
    return node.planData.objectCodes.reduce((s, obj) =>
      s + obj.details.reduce((ss, d) => ss + (parseFloat(d.localCost) || 0) + (parseFloat(d.foreignCost) || 0), 0), 0);
  return node.children.reduce((s, c) => s + nodeCost(c), 0);
};
const nodeLocal = (node: WbsNode): number => {
  if (node.type === 'dictionary' && node.planData)
    return node.planData.objectCodes.reduce((s, obj) =>
      s + obj.details.reduce((ss, d) => ss + (parseFloat(d.localCost) || 0), 0), 0);
  return node.children.reduce((s, c) => s + nodeLocal(c), 0);
};
const nodeForeign = (node: WbsNode): number => {
  if (node.type === 'dictionary' && node.planData)
    return node.planData.objectCodes.reduce((s, obj) =>
      s + obj.details.reduce((ss, d) => ss + (parseFloat(d.foreignCost) || 0), 0), 0);
  return node.children.reduce((s, c) => s + nodeForeign(c), 0);
};

const fmt = (v: number) => v > 0 ? v.toLocaleString(undefined, { maximumFractionDigits: 2 }) : '—';

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
export const Section5_AnnualWorkPlan: React.FC = () => {
  const { formData, updateSection } = useForm();
  const projectTitle = formData.section1?.projectTitle || 'Main Project';
  const wbs: WbsNode = formData.section7?.wbs || {
    id: 'root', title: projectTitle, type: 'summary', level: '1', children: [], collapsed: false,
  };
  const nodeData: Record<string, AnnualWorkItem[]> = formData.pc3a?.s5?.nodeData || {};

  const [view, setView] = useState<'table' | 'diagram'>('table');
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [collapsedNodes, setCollapsedNodes] = useState<Record<string, boolean>>({});
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedNodeId) {
      const node = findNode([wbs], selectedNodeId);
      if (node?.type === 'dictionary') {
        setTimeout(() => detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNodeId]);

  // ── Persist helpers ──────────────────────────
  const saveNodeData = (nodeId: string, items: AnnualWorkItem[]) => {
    updateSection('pc3a', { s5: { ...formData.pc3a.s5, nodeData: { ...nodeData, [nodeId]: items } } });
  };
  const addAW = (nodeId: string) => saveNodeData(nodeId, [...(nodeData[nodeId] || []), emptyAW()]);
  const removeAW = (nodeId: string, awId: string) =>
    saveNodeData(nodeId, (nodeData[nodeId] || []).filter((i: AnnualWorkItem) => i.id !== awId));
  const updateAW = (nodeId: string, awId: string, patch: Partial<AnnualWorkItem>) =>
    saveNodeData(nodeId, (nodeData[nodeId] || []).map((i: AnnualWorkItem) => i.id !== awId ? i : { ...i, ...patch }));
  const updateQuarter = (nodeId: string, awId: string, q: 'q1'|'q2'|'q3'|'q4', patch: Partial<QuarterData>) =>
    saveNodeData(nodeId, (nodeData[nodeId] || []).map((i: AnnualWorkItem) =>
      i.id !== awId ? i : { ...i, quarters: { ...i.quarters, [q]: { ...i.quarters[q], ...patch } } }));

  // ── Tree helpers ─────────────────────────────
  const findNode = (nodes: WbsNode[], id: string): WbsNode | null => {
    if (id === 'root') return wbs;
    for (const n of nodes) { if (n.id === id) return n; const f = findNode(n.children, id); if (f) return f; }
    return null;
  };

  // Count all dictionary-type work items below a node
  const countWorkItems = (node: WbsNode): number => {
    if (node.type === 'dictionary') return (nodeData[node.id] || []).length;
    return node.children.reduce((s, c) => s + countWorkItems(c), 0);
  };

  const selectedNode = selectedNodeId ? findNode([wbs], selectedNodeId) : null;
  const totalCost = nodeCost(wbs);
  const totalLocal = nodeLocal(wbs);
  const totalForeign = nodeForeign(wbs);

  // ── Table Row ────────────────────────────────
  const WbsRow: React.FC<{ node: WbsNode; depth: number }> = ({ node, depth }) => {
    const isSelected = selectedNodeId === node.id;
    const isCollapsed = collapsedNodes[node.id];
    const hasChildren = node.children.length > 0;
    const cost = nodeCost(node);
    const local = nodeLocal(node);
    const foreign = nodeForeign(node);
    const workCount = countWorkItems(node);

    return (
      <>
        <div
          onClick={() => setSelectedNodeId(isSelected ? null : node.id)}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 120px 120px 120px 160px',
            alignItems: 'center',
            padding: '0.7rem 1.25rem',
            paddingLeft: `${1.25 + depth * 1.75}rem`,
            background: isSelected
              ? 'linear-gradient(90deg, hsl(230,80%,96%) 0%, hsl(230,90%,98%) 100%)'
              : depth === 0 ? 'hsl(220,25%,98%)' : 'white',
            borderBottom: '1px solid hsl(220,20%,93%)',
            cursor: 'pointer',
            transition: 'background 0.15s',
            borderLeft: isSelected ? '4px solid hsl(var(--accent))' : '4px solid transparent',
          }}
          onMouseEnter={e => { if (!isSelected) e.currentTarget.style.background = 'hsl(230,90%,97%)'; }}
          onMouseLeave={e => { if (!isSelected) e.currentTarget.style.background = depth === 0 ? 'hsl(220,25%,98%)' : 'white'; }}
        >
          {/* Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', minWidth: 0 }}>
            {hasChildren ? (
              <button
                onClick={e => { e.stopPropagation(); setCollapsedNodes(p => ({ ...p, [node.id]: !isCollapsed })); }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px', color: 'hsl(220,30%,50%)', flexShrink: 0 }}
              >
                {isCollapsed ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
              </button>
            ) : <div style={{ width: 18, flexShrink: 0 }} />}

            {node.type === 'summary'
              ? <FolderOpen size={15} style={{ color: 'hsl(220,70%,50%)', flexShrink: 0 }} />
              : <FileText size={15} style={{ color: 'hsl(220,80%,55%)', flexShrink: 0 }} />
            }

            <span style={{
              fontSize: '0.65rem', fontWeight: 700, color: 'hsl(220,20%,60%)',
              background: 'hsl(220,20%,94%)', padding: '1px 5px', borderRadius: 3, flexShrink: 0
            }}>{node.level}</span>

            <span style={{
              fontWeight: node.type === 'summary' ? 700 : 500,
              fontSize: '0.875rem',
              color: node.type === 'summary' ? 'hsl(220,40%,20%)' : 'hsl(220,20%,35%)',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
            }}>{node.title}</span>

            {node.type === 'dictionary' && (
              <span style={{
                fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase' as const,
                background: 'hsl(220,80%,93%)', color: 'hsl(220,80%,45%)',
                padding: '1px 5px', borderRadius: 3, flexShrink: 0
              }}>Dict</span>
            )}
          </div>

          {/* Numeric cols */}
          <div style={{ textAlign: 'right', fontSize: '0.8rem', color: 'hsl(220,20%,40%)', fontVariantNumeric: 'tabular-nums' }}>
            {fmt(local)}
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.8rem', color: 'hsl(220,20%,40%)', fontVariantNumeric: 'tabular-nums' }}>
            {fmt(foreign)}
          </div>
          <div style={{
            textAlign: 'right', fontSize: '0.8rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums',
            color: cost > 0 ? 'hsl(220,80%,45%)' : 'hsl(220,20%,65%)'
          }}>
            {fmt(cost)}
          </div>

          {/* Work items badge + action */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem' }} onClick={e => e.stopPropagation()}>
            {node.type === 'dictionary' ? (
              <>
                <span style={{
                  fontSize: '0.65rem', fontWeight: 700, whiteSpace: 'nowrap',
                  background: workCount > 0 ? 'hsl(var(--accent) / 0.12)' : 'hsl(var(--bg-main))',
                  color: workCount > 0 ? 'hsl(var(--accent))' : 'hsl(var(--text-muted))',
                  padding: '2px 8px', borderRadius: 4,
                }}>
                  {workCount} {workCount === 1 ? 'item' : 'items'}
                </span>
                <button
                  onClick={() => setSelectedNodeId(node.id)}
                  title="Open Work Plan"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                    fontSize: '0.65rem', fontWeight: 700, padding: '0.25rem 0.6rem',
                    background: isSelected ? 'hsl(var(--accent))' : 'hsl(var(--accent) / 0.08)',
                    color: isSelected ? 'white' : 'hsl(var(--accent))',
                    border: 'none', borderRadius: 5, cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  <Activity size={11} />
                  {isSelected ? 'Open ↓' : 'Plan'}
                </button>
              </>
            ) : (
              workCount > 0 && (
              <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'hsl(var(--text-muted))' }}>
                {workCount} total
              </span>
              )
            )}
          </div>
        </div>

        {!isCollapsed && node.children.map(child => (
          <WbsRow key={child.id} node={child} depth={depth + 1} />
        ))}
      </>
    );
  };

  // ── Diagram Node ─────────────────────────────
  const DiagramNode: React.FC<{ node: WbsNode }> = ({ node }) => {
    const cost = nodeCost(node);
    const isSelected = selectedNodeId === node.id;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
          onClick={() => setSelectedNodeId(node.id)}
          style={{
            padding: '1rem 1.25rem', minWidth: 170, textAlign: 'center', cursor: 'pointer',
            borderRadius: 10,
            border: isSelected
              ? '2px solid hsl(var(--accent))'
              : node.type === 'dictionary' ? '1.5px dashed hsl(var(--accent) / 0.5)' : '1px solid hsl(220,20%,88%)',
            background: node.type === 'summary'
              ? (isSelected ? 'hsl(var(--accent) / 0.08)' : 'hsl(var(--bg-main))')
              : (isSelected ? 'hsl(var(--primary))' : 'white'),
            color: isSelected && node.type === 'dictionary' ? 'white' : 'inherit',
            boxShadow: isSelected ? 'var(--shadow-md)' : 'var(--shadow-sm)',
            transition: 'all 0.2s',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
            {node.type === 'summary'
              ? <FolderOpen size={18} style={{ color: 'hsl(220,70%,50%)' }} />
              : <FileText size={18} style={{ color: isSelected ? 'white' : 'hsl(220,70%,50%)' }} />}
          </div>
          <p style={{ fontSize: '0.6rem', color: isSelected && node.type === 'dictionary' ? 'rgba(255,255,255,0.7)' : 'hsl(220,20%,55%)', fontWeight: 700 }}>{node.level}</p>
          <p style={{ fontSize: '0.8125rem', fontWeight: 700, color: isSelected && node.type === 'dictionary' ? 'white' : 'hsl(220,30%,20%)', marginBottom: '0.25rem' }}>{node.title}</p>
          {cost > 0 && (
            <p style={{ fontSize: '0.75rem', fontWeight: 800, color: isSelected && node.type === 'dictionary' ? 'rgba(255,255,255,0.9)' : 'hsl(var(--accent))' }}>
              {cost.toLocaleString(undefined, { maximumFractionDigits: 0 })} M
            </p>
          )}
          {node.type === 'dictionary' && (
            <div style={{
              marginTop: '0.4rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
              fontSize: '0.6rem', fontWeight: 700, padding: '0.15rem 0.5rem',
              background: isSelected ? 'rgba(255,255,255,0.2)' : 'hsl(var(--accent) / 0.1)',
              color: isSelected ? 'white' : 'hsl(var(--accent))',
              borderRadius: 20,
            }}>
              <Activity size={10} />
              {isSelected ? 'Form open ↓' : 'Click to plan →'}
            </div>
          )}
        </div>

        {node.children.length > 0 && (
          <>
            <div style={{ width: 1, height: 24, background: 'hsl(220,20%,80%)' }} />
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', position: 'relative' }}>
              <div style={{
                position: 'absolute', top: 0, left: '50%', right: '50%',
                height: 1, background: 'hsl(220,20%,80%)',
                marginLeft: node.children.length > 1 ? 'calc(-50% + 1px)' : 0,
                width: node.children.length > 1 ? '100%' : 0,
              }} />
              {node.children.map(child => (
                <div key={child.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: 1, height: 24, background: 'hsl(220,20%,80%)' }} />
                  <DiagramNode node={child} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  // ── Quarter Labels ──────────────────────────
  const QUARTER_LABELS: Record<string, { label: string; color: string }> = {
    q1: { label: 'Q1 · Jul–Sep', color: 'hsl(200, 70%, 50%)' },
    q2: { label: 'Q2 · Oct–Dec', color: 'hsl(280, 60%, 50%)' },
    q3: { label: 'Q3 · Jan–Mar', color: 'hsl(30, 80%, 50%)' },
    q4: { label: 'Q4 · Apr–Jun', color: 'hsl(140, 60%, 40%)' },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

      {/* ── Summary Cards ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {[
          { label: 'Total PC-I Cost', value: totalCost, color: 'hsl(var(--primary))' },
          { label: 'Local Component', value: totalLocal, color: 'hsl(var(--primary))' },
          { label: 'Foreign Component', value: totalForeign, color: 'hsl(var(--primary))' },
        ].map((item, i) => (
          <div key={i} style={{
            padding: '1.25rem 1.5rem', background: 'white', borderRadius: 'var(--radius-md)',
            border: '1px solid hsl(var(--border))', borderTop: `4px solid ${item.color}`, boxShadow: 'var(--shadow-sm)',
          }}>
            <p style={{ fontSize: '1.75rem', fontWeight: 800, color: 'hsl(var(--primary))', display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginBottom: '0.2rem' }}>
              {item.value.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'hsl(var(--text-muted))', opacity: 0.6 }}>M</span>
            </p>
            <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'hsl(var(--text-muted))' }}>{item.label}</span>
          </div>
        ))}
      </div>

      {/* ── Toolbar ── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'inline-flex', background: 'hsl(var(--bg-main))', borderRadius: 'var(--radius-md)', padding: '0.3rem', border: '1px solid hsl(var(--border))' }}>
          {(['table', 'diagram'] as const).map(v => (
            <button key={v} onClick={() => setView(v)} style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.4rem 1rem', borderRadius: 'var(--radius-sm)', fontWeight: 600, fontSize: '0.8125rem',
              border: 'none', cursor: 'pointer', transition: 'var(--transition)',
              background: view === v ? 'white' : 'transparent',
              color: view === v ? 'hsl(var(--accent))' : 'hsl(var(--text-muted))',
              boxShadow: view === v ? 'var(--shadow-sm)' : 'none',
            }}>
              {v === 'table' ? <BarChart3 size={14} /> : <GitBranch size={14} />}
              {v === 'table' ? 'Table View' : 'Diagram View'}
            </button>
          ))}
        </div>
        <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))' }}>
          Structure imported from <strong>PC-I Section 7</strong> (read-only)
        </p>
      </div>

      {/* ── WBS Workspace ── */}
      <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-sm)' }}>
        {view === 'table' ? (
          <>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 120px 120px 120px 160px',
              padding: '0.6rem 1.25rem', background: 'hsl(var(--bg-main))',
              borderBottom: '2px solid hsl(var(--border))',
              fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase',
              letterSpacing: '0.06em', color: 'hsl(var(--text-muted))',
            }}>
              <div>Work Breakdown Structure</div>
              <div style={{ textAlign: 'right' }}>Local (M)</div>
              <div style={{ textAlign: 'right' }}>Foreign (M)</div>
              <div style={{ textAlign: 'right' }}>Total (M)</div>
              <div style={{ textAlign: 'right' }}>Work Plan</div>
            </div>
            <WbsRow node={wbs} depth={0} />
            {wbs.children.length === 0 && (
              <div style={{ padding: '4rem', textAlign: 'center', background: 'white' }}>
                <LayoutGrid size={40} style={{ color: 'hsl(var(--border))', marginBottom: '1rem' }} />
                <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9rem' }}>
                  No work areas defined yet. Go to <strong>PC-I Section 7 (Cost Estimation)</strong> to build your WBS.
                </p>
              </div>
            )}
          </>
        ) : (
          <div style={{ padding: '3rem 2rem', overflowX: 'auto', background: 'hsl(var(--bg-main))' }}>
            <div style={{ display: 'flex', justifyContent: 'center', minWidth: 'max-content' }}>
              <DiagramNode node={wbs} />
            </div>
          </div>
        )}
      </div>

      {/* ── Detail Panel: Financial Plan + Annual Work ── */}
      {selectedNode && selectedNode.type === 'dictionary' && (
        <div ref={detailRef} style={{
          borderRadius: 'var(--radius-lg)', overflow: 'hidden',
          border: '1.5px solid hsl(var(--border))', boxShadow: 'var(--shadow-md)', marginTop: '0.5rem',
        }}>
          {/* Panel Header */}
          <div style={{
            padding: '1.5rem 1.75rem', background: 'white',
            borderBottom: '2px solid hsl(var(--accent))',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ background: 'hsl(var(--accent) / 0.1)', padding: '0.5rem', borderRadius: 'var(--radius-md)' }}>
                <FileText size={24} color="hsl(var(--accent))" />
              </div>
              <div>
                <p style={{ fontSize: '0.7rem', color: 'hsl(var(--text-muted))', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.1rem' }}>
                  Financial Plan · {selectedNode.level}
                </p>
                <p style={{ fontSize: '1.25rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>
                  {selectedNode.title}
                </p>
              </div>
            </div>
            <button onClick={() => setSelectedNodeId(null)} className="btn btn-outline" style={{ padding: '0.5rem', borderRadius: 'var(--radius-md)', display: 'flex', border: '1px solid hsl(var(--border))' }}>
              <X size={20} />
            </button>
          </div>

          <div style={{ padding: '1.75rem', background: 'white' }}>

            {/* ── Financial Plan Info (Read-Only from PC-1) ── */}
            {selectedNode.planData && (
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'hsl(var(--primary))', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid hsl(var(--border))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  PC-I Financial Metadata (Read-Only)
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
                  {[
                    { label: 'Financial Component', value: selectedNode.planData.finComponent },
                    { label: 'Grant Number', value: selectedNode.planData.grantNo },
                    { label: 'Cost Center', value: selectedNode.planData.costCenter },
                    { label: 'LO No.', value: selectedNode.planData.loNo },
                    { label: 'Funding Type', value: selectedNode.planData.fundingType },
                    { label: 'Fund Center', value: selectedNode.planData.fundCenter },
                    { label: 'A/C To Credit', value: selectedNode.planData.acToCredit },
                    { label: 'Function Code', value: selectedNode.planData.functionCode },
                  ].map((f, i) => (
                    <div key={i} style={{ padding: '0.6rem 0.75rem', background: 'hsl(var(--bg-main) / 0.3)', borderRadius: 8, border: '1px solid hsl(var(--border) / 0.5)' }}>
                      <p style={{ fontSize: '0.6rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>{f.label}</p>
                      <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: f.value ? 'hsl(var(--primary))' : 'hsl(var(--text-muted))' }}>{f.value || '—'}</p>
                    </div>
                  ))}
                </div>

                {/* Object Codes Summary (Read-Only) */}
                {selectedNode.planData.objectCodes.length > 0 && (
                  <div style={{ marginTop: '1.5rem' }}>
                    <h4 style={{ fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--primary))', marginBottom: '0.75rem' }}>Object Codes from PC-I</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {selectedNode.planData.objectCodes.map(obj => {
                        const objTotal = obj.details.reduce((s, d) => s + (parseFloat(d.localCost) || 0) + (parseFloat(d.foreignCost) || 0), 0);
                        return (
                          <div key={obj.id} style={{
                            padding: '0.5rem 0.75rem', background: 'white', borderRadius: 8,
                            border: '1px solid hsl(var(--border))', display: 'flex', alignItems: 'center', gap: '0.5rem'
                          }}>
                            <span style={{ fontSize: '0.65rem', fontWeight: 800, background: 'hsl(var(--primary))', color: 'white', padding: '1px 4px', borderRadius: 3 }}>{obj.code}</span>
                            <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{obj.name}</span>
                            {objTotal > 0 && (
                              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'hsl(var(--accent))', marginLeft: '0.25rem' }}>
                                {objTotal.toLocaleString(undefined, { maximumFractionDigits: 2 })} M
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ── Annual Work Plan Items ── */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid hsl(var(--border))' }}>
                <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>
                  Annual Work Plan Items
                </h3>
                <button className="btn btn-primary" onClick={() => addAW(selectedNode.id)} style={{ gap: '0.4rem', fontSize: '0.8125rem', padding: '0.5rem 1.1rem' }}>
                  <Plus size={15} /> Add Work Plan Item
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {(nodeData[selectedNode.id] || []).length === 0 && (
                  <div style={{ padding: '3rem', textAlign: 'center', borderRadius: 10, border: '2px dashed hsl(var(--border))', background: 'hsl(var(--bg-main))' }}>
                    <Activity size={36} style={{ color: 'hsl(var(--border))', marginBottom: '0.75rem' }} />
                    <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.875rem' }}>
                      No annual work items yet. Click <strong>Add Work Plan Item</strong> to begin tracking quarterly progress.
                    </p>
                  </div>
                )}

                {(nodeData[selectedNode.id] || []).map((aw: AnnualWorkItem, awIdx: number) => (
                  <div key={aw.id} style={{
                    border: '1px solid hsl(var(--border))', borderRadius: 12, overflow: 'hidden',
                    boxShadow: 'var(--shadow-sm)', animation: 'fadeIn 0.3s ease',
                  }}>
                    {/* Work item header */}
                    <div style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '1rem 1.25rem', background: 'hsl(var(--bg-main))', borderBottom: '1px solid hsl(var(--border))',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, background: 'hsl(var(--accent))', color: 'white', padding: '2px 8px', borderRadius: 4 }}>
                          #{awIdx + 1}
                        </span>
                        <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>
                          {aw.description || 'Untitled Work Item'}
                        </span>
                      </div>
                      <button onClick={() => removeAW(selectedNode.id, aw.id)} style={{
                        padding: '0.35rem', background: 'hsl(var(--error) / 0.06)', border: '1px solid hsl(var(--error) / 0.15)',
                        borderRadius: 6, cursor: 'pointer', color: 'hsl(var(--error))',
                      }}>
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div style={{ padding: '1.25rem' }}>
                      {/* Description + Unit row */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: '1.25rem', marginBottom: '1.5rem' }}>
                        <InputField label="Item Description" placeholder="e.g. Earth Work, Pipe Laying, Structure..." value={aw.description} onChange={e => updateAW(selectedNode.id, aw.id, { description: e.target.value })} />
                        <InputField label="Unit of Measurement" placeholder="e.g. M3, Km, No." value={aw.unit} onChange={e => updateAW(selectedNode.id, aw.id, { unit: e.target.value })} />
                      </div>

                      {/* 4 Quarters */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                        {(['q1', 'q2', 'q3', 'q4'] as const).map((q) => {
                          const qInfo = QUARTER_LABELS[q];
                          const qd = aw.quarters[q];
                          return (
                            <div key={q} style={{
                              padding: '1rem', background: 'white',
                              borderRadius: 10, border: '1px solid hsl(var(--border))',
                              position: 'relative', overflow: 'hidden',
                            }}>
                              {/* Quarter accent bar */}
                              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: qInfo.color }} />

                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', paddingTop: '0.25rem' }}>
                                <div style={{
                                  width: 26, height: 26, background: qInfo.color, color: 'white',
                                  borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                  fontSize: '0.65rem', fontWeight: 800
                                }}>
                                  {q.toUpperCase()}
                                </div>
                                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'hsl(var(--text-muted))' }}>
                                  {qInfo.label}
                                </span>
                              </div>

                              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                <div>
                                  <label style={{ fontSize: '0.6rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>Unit</label>
                                  <input className="input" style={{ background: '#fff', fontSize: '0.8rem', padding: '0.4rem 0.6rem' }} placeholder={aw.unit || 'Unit'} value={qd.unit} onChange={e => updateQuarter(selectedNode.id, aw.id, q, { unit: e.target.value })} />
                                </div>
                                <div>
                                  <label style={{ fontSize: '0.6rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>PC-I Qty</label>
                                  <input type="number" className="input" style={{ background: '#fff', fontSize: '0.8rem', padding: '0.4rem 0.6rem' }} placeholder="0" value={qd.pciQty} onChange={e => updateQuarter(selectedNode.id, aw.id, q, { pciQty: e.target.value })} />
                                </div>
                                <div>
                                  <label style={{ fontSize: '0.6rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>Achievement</label>
                                  <input type="number" className="input" style={{ background: '#fff', fontSize: '0.8rem', padding: '0.4rem 0.6rem' }} placeholder="0" value={qd.achievement} onChange={e => updateQuarter(selectedNode.id, aw.id, q, { achievement: e.target.value })} />
                                </div>
                                <div>
                                  <label style={{ fontSize: '0.6rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>CY Target</label>
                                  <input type="number" className="input" style={{ background: '#fff', fontSize: '0.8rem', padding: '0.4rem 0.6rem' }} placeholder="0" value={qd.target} onChange={e => updateQuarter(selectedNode.id, aw.id, q, { target: e.target.value })} />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Prompt when no dictionary node selected */}
      {(!selectedNode || selectedNode.type !== 'dictionary') && (
        <div style={{ padding: '3rem', textAlign: 'center', border: '1px dashed hsl(var(--border))', borderRadius: 'var(--radius-lg)', color: 'hsl(var(--text-muted))', background: 'white' }}>
          <LayoutGrid size={40} style={{ opacity: 0.15, marginBottom: '1rem' }} />
          <p style={{ fontSize: '0.9rem' }}>Select a <strong>Financial Item</strong> (Dict node) from the WBS above to define its Annual Work Plan.</p>
        </div>
      )}
    </div>
  );
};
