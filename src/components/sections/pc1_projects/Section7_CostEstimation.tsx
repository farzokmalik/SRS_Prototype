import React, { useState, useRef, useEffect } from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField, SelectField } from '../../ui/FormElements';
import {
  Plus, Trash2, Search, Check, X, ChevronRight, ChevronDown,
  FolderOpen, FileText, LayoutGrid, GitBranch, PenLine, 
  BarChart3
} from 'lucide-react';
import { CostEstimationModal } from './CostEstimationModal';

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────
const OBJECT_CODES = [
  { code: 'A01101', name: 'Basic Pay' },
  { code: 'A01202', name: 'House Rent Allowance' },
  { code: 'A03201', name: 'Postage and Telegraph' },
  { code: 'A03202', name: 'Telephone and Trunk Call' },
  { code: 'A03303', name: 'Electricity' },
  { code: 'A03402', name: 'Rent for Office Building' },
  { code: 'A03805', name: 'Travelling Allowance' },
  { code: 'A03807', name: 'POL Charges' },
  { code: 'A03901', name: 'Stationery' },
  { code: 'A03902', name: 'Printing and Publication' },
  { code: 'A09201', name: 'Hardware (IT Equipment)' },
  { code: 'A09202', name: 'Software' },
  { code: 'A09601', name: 'Plant and Machinery' },
  { code: 'A09701', name: 'Furniture and Fixtures' },
];

const FIN_YEARS = ['2024-2025', '2025-2026', '2026-2027', '2027-2028', '2028-2029'];

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
export interface FinancialPlan {
  finComponent: string;
  grantNo: string;
  costCenter: string;
  loNo: string;
  fundingType: string;
  fundCenter: string;
  acToCredit: string;
  functionCode: string;
  objectCodes: ObjectCode[];
}

export interface ObjectCode {
  id: string;
  code: string;
  name: string;
  details: DetailRow[];
}

export interface DetailRow {
  id: string;
  year: string;
  localCost: string;
  foreignCost: string;
  localData?: any;
  foreignData?: any;
}

export interface WbsNode {
  id: string;
  title: string;
  type: 'summary' | 'dictionary';
  level: string;
  children: WbsNode[];
  collapsed?: boolean;
  planData?: FinancialPlan;
}

const emptyPlan = (): FinancialPlan => ({
  finComponent: '', grantNo: '', costCenter: '', loNo: '',
  fundingType: '', fundCenter: '', acToCredit: '', functionCode: '',
  objectCodes: [],
});

// ─────────────────────────────────────────────
// Inline editable title
// ─────────────────────────────────────────────
const EditableTitle: React.FC<{
  value: string;
  onChange: (v: string) => void;
  style?: React.CSSProperties;
  autoEdit?: boolean;
  onEditDone?: () => void;
}> = ({ value, onChange, style, autoEdit, onEditDone }) => {
  const [editing, setEditing] = useState(!!autoEdit);
  const [draft, setDraft] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  // When autoEdit flips to true for a freshly created node, enter edit mode
  useEffect(() => { if (autoEdit) { setEditing(true); setDraft(value); } }, [autoEdit]);
  useEffect(() => { if (editing) inputRef.current?.select(); }, [editing]);

  const commit = () => {
    const trimmed = draft.trim() || value;
    onChange(trimmed);
    setEditing(false);
    onEditDone?.();
  };

  if (editing) {
    return (
      <input
        ref={inputRef}
        value={draft}
        onChange={e => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={e => {
          if (e.key === 'Enter') { e.preventDefault(); commit(); }
          if (e.key === 'Escape') { setDraft(value); setEditing(false); onEditDone?.(); }
        }}
        onClick={e => e.stopPropagation()}
        style={{
          border: 'none', borderBottom: '2px solid hsl(220,80%,55%)', outline: 'none',
          background: 'rgba(220,230,255,0.18)', borderRadius: 3,
          fontSize: 'inherit', fontWeight: 'inherit', color: 'inherit',
          width: '100%', minWidth: 120, padding: '1px 4px', ...style
        }}
        autoFocus
      />
    );
  }
  return (
    <span
      onClick={e => { e.stopPropagation(); setEditing(true); }}
      title="Click to rename"
      style={{ cursor: 'text', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', ...style }}
    >
      {value}
      <PenLine size={12} style={{ opacity: 0.35, flexShrink: 0 }} />
    </span>
  );
};

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
export const Section7_CostEstimation: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section7 || {};
  const projectTitle = formData.section1?.projectTitle || 'Main Project';

  const wbs: WbsNode = data.wbs || {
    id: 'root', title: projectTitle, type: 'summary', level: '1', children: [], collapsed: false,
  };

  const [view, setView] = useState<'table' | 'diagram'>('table');
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [autoEditId, setAutoEditId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSearchPlan, setActiveSearchPlan] = useState<string | null>(null);
  const [modalState, setModalState] = useState<{
    isOpen: boolean; nodeId?: string; codeId?: string; detailId?: string; type?: 'Local' | 'Foreign';
  }>({ isOpen: false });

  const formPanelRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the form panel whenever a dictionary node is selected
  useEffect(() => {
    if (selectedNodeId) {
      const node = findNode([wbs], selectedNodeId);
      if (node?.type === 'dictionary') {
        setTimeout(() => formPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNodeId]);

  const save = (newWbs: WbsNode) => updateSection('section7', { wbs: newWbs });

  // ── Tree helpers ─────────────────────────────
  const findNode = (nodes: WbsNode[], id: string): WbsNode | null => {
    if (id === 'root') return wbs;
    for (const n of nodes) {
      if (n.id === id) return n;
      const f = findNode(n.children, id); if (f) return f;
    }
    return null;
  };

  const patchTree = (nodes: WbsNode[], id: string, patch: Partial<WbsNode>): WbsNode[] =>
    nodes.map(n => n.id === id ? { ...n, ...patch } : { ...n, children: patchTree(n.children, id, patch) });

  const deleteFromTree = (nodes: WbsNode[], id: string): WbsNode[] =>
    nodes.filter(n => n.id !== id).map(n => ({ ...n, children: deleteFromTree(n.children, id) }));

  const addNode = (parentId: string, type: 'summary' | 'dictionary') => {
    const parent = parentId === 'root' ? wbs : findNode([wbs], parentId);
    if (!parent) return;
    const newId = Math.random().toString(36).slice(2) + Date.now().toString(36);
    const newLevel = `${parent.level}.${parent.children.length + 1}`;
    const newNode: WbsNode = {
      id: newId, type, level: newLevel,
      title: type === 'summary' ? 'New Area' : 'New Work Package',
      children: [],
      planData: type === 'dictionary' ? emptyPlan() : undefined,
    };
    const updatedChildren = [...parent.children, newNode];
    if (parentId === 'root') {
      save({ ...wbs, children: updatedChildren });
    } else {
      save({ ...wbs, children: patchTree(wbs.children, parentId, { children: updatedChildren }) });
    }
    // Auto-open inline edit for the new node — no popup
    setAutoEditId(newId);
    setSelectedNodeId(newId);
  };

  const deleteNode = (id: string) => {
    save({ ...wbs, children: deleteFromTree(wbs.children, id) });
    if (selectedNodeId === id) setSelectedNodeId(null);
  };

  const patchNode = (id: string, patch: Partial<WbsNode>) => {
    if (id === 'root') { save({ ...wbs, ...patch }); }
    else { save({ ...wbs, children: patchTree(wbs.children, id, patch) }); }
  };

  // ── Cost rollup ──────────────────────────────
  const nodeCost = (node: WbsNode): number => {
    if (node.type === 'dictionary' && node.planData) {
      return node.planData.objectCodes.reduce((s, obj) =>
        s + obj.details.reduce((ss, d) => ss + (parseFloat(d.localCost) || 0) + (parseFloat(d.foreignCost) || 0), 0), 0);
    }
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

  // ── Plan helpers ─────────────────────────────
  const patchPlan = (nodeId: string, planPatch: Partial<FinancialPlan>) => {
    const node = findNode([wbs], nodeId);
    if (!node || node.type !== 'dictionary') return;
    patchNode(nodeId, { planData: { ...(node.planData as FinancialPlan), ...planPatch } });
  };

  const addObjectCode = (nodeId: string, codeItem: { code: string; name: string }) => {
    const node = findNode([wbs], nodeId);
    if (!node?.planData) return;
    if (node.planData.objectCodes.some(c => c.code === codeItem.code)) { setActiveSearchPlan(null); return; }
    patchPlan(nodeId, {
      objectCodes: [...node.planData.objectCodes, {
        id: Math.random().toString(36).slice(2), code: codeItem.code, name: codeItem.name, details: []
      }]
    });
    setActiveSearchPlan(null); setSearchQuery('');
  };

  const removeObjectCode = (nodeId: string, codeId: string) => {
    const node = findNode([wbs], nodeId);
    if (!node?.planData) return;
    patchPlan(nodeId, { objectCodes: node.planData.objectCodes.filter(c => c.id !== codeId) });
  };

  const addDetailRow = (nodeId: string, codeId: string) => {
    const node = findNode([wbs], nodeId);
    if (!node?.planData) return;
    patchPlan(nodeId, {
      objectCodes: node.planData.objectCodes.map(c =>
        c.id !== codeId ? c : {
          ...c, details: [...c.details, {
            id: Math.random().toString(36).slice(2), year: '2025-2026', localCost: '', foreignCost: ''
          }]
        })
    });
  };

  const updateDetail = (nodeId: string, codeId: string, detailId: string, patch: Partial<DetailRow>) => {
    const node = findNode([wbs], nodeId);
    if (!node?.planData) return;
    patchPlan(nodeId, {
      objectCodes: node.planData.objectCodes.map(c =>
        c.id !== codeId ? c : { ...c, details: c.details.map(d => d.id !== detailId ? d : { ...d, ...patch }) })
    });
  };

  const removeDetail = (nodeId: string, codeId: string, detailId: string) => {
    const node = findNode([wbs], nodeId);
    if (!node?.planData) return;
    patchPlan(nodeId, {
      objectCodes: node.planData.objectCodes.map(c =>
        c.id !== codeId ? c : { ...c, details: c.details.filter(d => d.id !== detailId) })
    });
  };

  const selectedNode = selectedNodeId ? findNode([wbs], selectedNodeId) : null;
  const totalCost = nodeCost(wbs);
  const totalLocal = nodeLocal(wbs);
  const totalForeign = nodeForeign(wbs);

  // ── WBS Table Row ────────────────────────────
  const WbsRow: React.FC<{ node: WbsNode; depth: number }> = ({ node, depth }) => {
    const cost = nodeCost(node);
    const local = nodeLocal(node);
    const foreign = nodeForeign(node);
    const isSelected = selectedNodeId === node.id;
    const isCollapsed = node.collapsed;

    return (
      <>
        <div
          onClick={() => setSelectedNodeId(isSelected ? null : node.id)}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 130px 130px 130px 160px',
            alignItems: 'center',
            padding: '0.75rem 1.25rem',
            paddingLeft: `${1.25 + depth * 2}rem`,
            background: isSelected
              ? 'linear-gradient(90deg, hsl(230,80%,96%) 0%, hsl(230,90%,98%) 100%)'
              : depth === 0 ? 'hsl(220,25%,98%)' : 'white',
            borderBottom: '1px solid hsl(220,20%,93%)',
            cursor: 'pointer',
            transition: 'background 0.15s',
            borderLeft: isSelected ? '4px solid hsl(230,80%,55%)' : '4px solid transparent',
          }}
          onMouseEnter={e => { if (!isSelected) e.currentTarget.style.background = 'hsl(230,90%,97%)'; }}
          onMouseLeave={e => { if (!isSelected) e.currentTarget.style.background = depth === 0 ? 'hsl(220,25%,98%)' : 'white'; }}
        >
          {/* Title col */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', minWidth: 0 }}>
            {node.children.length > 0 ? (
              <button
                onClick={e => { e.stopPropagation(); patchNode(node.id, { collapsed: !isCollapsed }); }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px', color: 'hsl(220,30%,50%)', flexShrink: 0 }}
              >
                {isCollapsed ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
              </button>
            ) : (
              <div style={{ width: 18, flexShrink: 0 }} />
            )}

            {node.type === 'summary'
              ? <FolderOpen size={15} style={{ color: 'hsl(220,70%,50%)', flexShrink: 0 }} />
              : <FileText size={15} style={{ color: 'hsl(220,80%,55%)', flexShrink: 0 }} />
            }

            {depth === 0 && (
              <span style={{
                fontSize: '0.7rem', fontWeight: 700, color: 'hsl(220,20%,60%)',
                background: 'hsl(220,20%,94%)', padding: '1px 5px', borderRadius: 3, flexShrink: 0
              }}>[PC-I-7.1] {node.level}</span>
            )}
            {depth > 0 && (
               <span style={{
                fontSize: '0.7rem', fontWeight: 700, color: 'hsl(220,20%,60%)',
                background: 'hsl(220,20%,94%)', padding: '1px 5px', borderRadius: 3, flexShrink: 0
              }}>{node.level}</span>
            )}

            {depth === 0 && <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'hsl(var(--text-muted))' }}>[PC-I-7.2]</span>}
            <EditableTitle
              value={node.title}
              onChange={v => patchNode(node.id, { title: v })}
              autoEdit={autoEditId === node.id}
              onEditDone={() => setAutoEditId(null)}
              style={{
                fontWeight: node.type === 'summary' ? 700 : 500,
                fontSize: '0.9rem',
                color: node.type === 'summary' ? 'hsl(220,40%,20%)' : 'hsl(220,20%,35%)',
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
              }}
            />

            {node.type === 'dictionary' && (
              <span style={{
                fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase',
                background: 'hsl(220,80%,93%)', color: 'hsl(220,80%,45%)',
                padding: '1px 5px', borderRadius: 3, flexShrink: 0
              }}>
                {depth === 0 ? '[PC-I-7.3] Dict' : 'Dict'}
              </span>
            )}
          </div>

          {/* Numeric cols */}
          <div style={{ textAlign: 'right', fontSize: '0.8125rem', color: 'hsl(220,20%,40%)', fontVariantNumeric: 'tabular-nums' }}>
            {local > 0 ? local.toLocaleString(undefined, { maximumFractionDigits: 2 }) : '—'}
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.8125rem', color: 'hsl(220,20%,40%)', fontVariantNumeric: 'tabular-nums' }}>
            {foreign > 0 ? foreign.toLocaleString(undefined, { maximumFractionDigits: 2 }) : '—'}
          </div>
          <div style={{
            textAlign: 'right', fontSize: '0.875rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums',
            color: cost > 0 ? 'hsl(220,80%,45%)' : 'hsl(220,20%,65%)'
          }}>
            {cost > 0 ? cost.toLocaleString(undefined, { maximumFractionDigits: 2 }) : '—'}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '0.375rem', justifyContent: 'flex-end' }} onClick={e => e.stopPropagation()}>
            {/* Add Sub-Area: only summary nodes */}
            {node.type === 'summary' && (
              <button
                onClick={() => { addNode(node.id, 'summary'); }}
                title="Add Sub-Area"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
                  fontSize: '0.7rem', fontWeight: 600, padding: '0.25rem 0.6rem',
                  background: 'hsl(var(--bg-main))', color: 'hsl(var(--text-muted))',
                  border: '1px solid hsl(var(--border))', borderRadius: 5, cursor: 'pointer',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'hsl(var(--accent))'; e.currentTarget.style.color = 'hsl(var(--accent))'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'hsl(var(--border))'; e.currentTarget.style.color = 'hsl(var(--text-muted))'; }}
              >
                <Plus size={12} />
              </button>
            )}

            {/* Make Financial Plan: only leaf summary nodes (no children) */}
            {node.type === 'summary' && node.children.length === 0 && (
              <button
                onClick={() => {
                  // Convert this leaf to a dictionary (work package) node and open its form
                  patchNode(node.id, { type: 'dictionary', planData: emptyPlan() });
                  setSelectedNodeId(node.id);
                }}
                title="Make Financial Plan"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  padding: '0.25rem 0.4rem',
                  background: 'hsl(var(--accent))', color: 'white',
                  border: 'none', borderRadius: 5, cursor: 'pointer',
                  boxShadow: '0 1px 4px hsl(var(--accent) / 0.3)',
                }}
              >
                <FileText size={12} />
              </button>
            )}

            {/* Delete: all except root */}
            {node.id !== 'root' && (
              <button
                onClick={() => { if (window.confirm(`Delete "${node.title}"?`)) deleteNode(node.id); }}
                title="Delete"
                style={{
                  display: 'inline-flex', alignItems: 'center', padding: '0.25rem 0.35rem',
                  background: 'hsl(var(--bg-main))', color: 'hsl(var(--error))',
                  border: '1px solid hsl(var(--border))', borderRadius: 5, cursor: 'pointer',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'hsl(var(--error) / 0.08)'; e.currentTarget.style.borderColor = 'hsl(var(--error) / 0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'hsl(var(--bg-main))'; e.currentTarget.style.borderColor = 'hsl(var(--border))'; }}
              >
                <Trash2 size={11} />
              </button>
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
            padding: '1rem 1.25rem', minWidth: 180, textAlign: 'center', cursor: 'pointer',
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
              : <FileText size={18} style={{ color: 'hsl(220,70%,50%)' }} />}
          </div>
          <p style={{ fontSize: '0.65rem', color: 'hsl(220,20%,55%)', fontWeight: 700, marginBottom: 3 }}>{node.level}</p>
          <p style={{ fontSize: '0.875rem', fontWeight: 700, color: 'hsl(220,30%,20%)', marginBottom: '0.5rem' }}>{node.title}</p>
          {cost > 0 && (
            <p style={{ fontSize: '0.8rem', fontWeight: 800, color: 'hsl(var(--accent))' }}>
              {cost.toLocaleString(undefined, { maximumFractionDigits: 0 })} M
            </p>
          )}
          {node.type === 'dictionary' && (
            <div style={{
              marginTop: '0.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
              fontSize: '0.65rem', fontWeight: 700, padding: '0.2rem 0.6rem',
              background: isSelected ? 'hsl(var(--accent))' : 'hsl(var(--accent) / 0.1)',
              color: isSelected ? 'white' : 'hsl(var(--accent))',
              borderRadius: 20, letterSpacing: '0.03em',
            }}>
              <FileText size={10} />
              {isSelected ? 'Form open ↓' : 'View / Edit Plan →'}
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
                marginLeft: node.children.length > 1 ? `calc(-50% + 1px)` : 0,
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


  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

      {/* ── Summary Header ── */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        borderRadius: 'var(--radius-lg)',
      }}>
        {[
          { label: 'Total Project Cost', value: totalCost, color: 'hsla(217, 76%, 53%, 1.00)' },
          { label: 'Local Component', value: totalLocal, color: 'hsla(217, 76%, 53%, 1.00)' },
          { label: 'Foreign Component', value: totalForeign, color: 'hsla(217, 76%, 53%, 1.00)'},
        ].map((item, i) => (
          <div key={i} style={{
            padding: '1.25rem 1.5rem',
            background: 'white',
            borderRadius: 'var(--radius-md)',
            border: '1px solid hsl(var(--border))',
            borderTop: `4px solid ${item.color}`,
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: 'fit-content',
          }}>
            <p style={{ 
              fontSize: '2rem', 
              fontWeight: 800, 
              color: 'hsl(var(--primary))', 
              letterSpacing: '-0.03em', 
              display: 'flex', 
              alignItems: 'baseline', 
              gap: '0.4rem',
              marginBottom: '0.25rem'
            }}>
              {item.value.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'hsl(var(--text-muted))', opacity: 0.6 }}>M</span>
            </p>
            <span style={{ 
              fontSize: '0.7rem', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              letterSpacing: '0.08em', 
              color: 'hsl(var(--text-muted))' 
            }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Toolbar ── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* View switcher */}
        <div style={{
          display: 'inline-flex', background: 'hsl(var(--bg-main))', borderRadius: 'var(--radius-md)',
          padding: '0.3rem', border: '1px solid hsl(var(--border))'
        }}>
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

        {/* Add section */}
        <button
          onClick={() => addNode(selectedNodeId || 'root', 'summary')}
          className="btn btn-primary"
          style={{ gap: '0.4rem', fontSize: '0.875rem', padding: '0.55rem 1.25rem' }}
        >
          <Plus size={15} /> <FolderOpen size={15} />
          {selectedNodeId && selectedNodeId !== 'root' ? 'Add Sub-Area Here' : 'Add Area Section'}
        </button>
      </div>

      {/* ── WBS Workspace ── */}
      <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-sm)' }}>
        {view === 'table' ? (
          <>
            {/* Header row */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 130px 130px 130px 160px',
              padding: '0.6rem 1.25rem', background: 'hsl(var(--bg-main))',
              borderBottom: '2px solid hsl(var(--border))',
              fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase',
              letterSpacing: '0.06em', color: 'hsl(var(--text-muted))',
            }}>
              <div>Work Breakdown Structure</div>
              <div style={{ textAlign: 'right' }}>Local (M)</div>
              <div style={{ textAlign: 'right' }}>Foreign (M)</div>
              <div style={{ textAlign: 'right' }}>Total (M)</div>
              <div style={{ textAlign: 'right' }}>Actions</div>
            </div>
            <WbsRow node={wbs} depth={0} />
            {wbs.children.length === 0 && (
              <div style={{ padding: '4rem', textAlign: 'center', background: 'hsl(var(--bg-card))' }}>
                <LayoutGrid size={40} style={{ color: 'hsl(var(--border))', marginBottom: '1rem' }} />
                <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9rem' }}>
                  No work areas yet. Click <strong>Add Area Section</strong> to start building your WBS.
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

      {/* ── Node Detail Panel ── */}
      {selectedNode && selectedNode.type === 'dictionary' && (
        <div ref={formPanelRef} style={{
          borderRadius: 'var(--radius-lg)', overflow: 'hidden',
          border: '1.5px solid hsl(var(--border))',
          boxShadow: 'var(--shadow-md)',
          marginTop: '1rem'
        }}>
          {/* Panel header */}
          <div style={{
            padding: '1.5rem 1.75rem',
            background: 'white',
            borderBottom: '2px solid hsl(var(--accent))',
            color: 'hsl(var(--primary))', 
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ background: 'hsl(var(--accent) / 0.1)', padding: '0.5rem', borderRadius: 'var(--radius-md)' }}>
                <FileText size={24} color="hsl(var(--accent))" />
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.1rem' }}>
                  Financial Plan Details · {selectedNode.level}
                </p>
                <EditableTitle
                  value={selectedNode.title}
                  onChange={v => patchNode(selectedNode.id, { title: v })}
                  style={{ fontSize: '1.25rem', fontWeight: 800, color: 'hsl(var(--primary))' }}
                />
              </div>
            </div>
            <button
              onClick={() => setSelectedNodeId(null)}
              className="btn btn-outline"
              style={{ padding: '0.5rem', borderRadius: 'var(--radius-md)', display: 'flex', border: '1px solid hsl(var(--border))' }}
            >
              <X size={20} />
            </button>
          </div>

          <div style={{ padding: '1.75rem', background: 'white' }}>
            {selectedNode.planData && (
              <>
                {/* ── Financial Plan Fields ── */}
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'hsl(var(--primary))', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid hsl(var(--border))' }}>
                    Metadata
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                    <SelectField
                      label="[PC-I-7.4] Financial Component"
                      value={selectedNode.planData.finComponent}
                      onChange={e => patchPlan(selectedNode.id, { finComponent: e.target.value })}
                      options={['Capital', 'Revenue']}
                    />
                    <SelectField
                      label="[PC-I-7.5] Grant Number"
                      value={selectedNode.planData.grantNo}
                      onChange={e => patchPlan(selectedNode.id, { grantNo: e.target.value })}
                      options={['PC21015 - Education', 'PC21021 - Health', 'PC21033 - Infrastructure']}
                    />
                    <SelectField
                      label="[PC-I-7.6] Cost Center"
                      value={selectedNode.planData.costCenter}
                      onChange={e => patchPlan(selectedNode.id, { costCenter: e.target.value })}
                      options={['LH4001 - Lahore Central', 'LH4002 - Lahore East', 'GW5001 - Gujranwala']}
                    />
                    <InputField
                      label="[PC-I-7.7] LO No."
                      value={selectedNode.planData.loNo}
                      onChange={e => patchPlan(selectedNode.id, { loNo: e.target.value })}
                    />
                    <SelectField
                      label="[PC-I-7.8] Funding Cost Type"
                      value={selectedNode.planData.fundingType}
                      onChange={e => patchPlan(selectedNode.id, { fundingType: e.target.value })}
                      options={['Local Cost', 'Foreign Cost', 'Mixed']}
                    />
                    <InputField
                      label="[PC-I-7.9] Fund Center"
                      value={selectedNode.planData.fundCenter}
                      onChange={e => patchPlan(selectedNode.id, { fundCenter: e.target.value })}
                    />
                    <SelectField
                      label="[PC-I-7.10] A/C To Be Credited"
                      value={selectedNode.planData.acToCredit}
                      onChange={e => patchPlan(selectedNode.id, { acToCredit: e.target.value })}
                      options={['Cash in Hand', 'Bank Account']}
                    />
                    <InputField
                      label="[PC-I-7.11] Function Code"
                      value={selectedNode.planData.functionCode}
                      onChange={e => patchPlan(selectedNode.id, { functionCode: e.target.value })}
                    />
                  </div>
                </div>

                {/* ── Object Codes ── */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid hsl(var(--border))' }}>
                    <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>
                      Object Codes & Cost Estimations
                    </h3>
                  </div>

                  {/* Object code search */}
                  <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                    <div style={{ position: 'relative' }}>
                      <Search size={15} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'hsl(var(--text-muted))', pointerEvents: 'none' }} />
                      <input
                        type="text"
                        placeholder="[PC-I-7.12] Search and add object code (e.g. A01101, Basic Pay...)"
                        value={activeSearchPlan === selectedNode.id ? searchQuery : ''}
                        onFocus={() => setActiveSearchPlan(selectedNode.id)}
                        onChange={e => { setSearchQuery(e.target.value); setActiveSearchPlan(selectedNode.id); }}
                        style={{
                          width: '100%', padding: '0.625rem 1rem 0.625rem 2.5rem',
                          border: '1.5px solid hsl(var(--border))', borderRadius: 8, outline: 'none',
                          fontSize: '0.875rem', background: 'white',
                          transition: 'border 0.2s',
                        }}
                        onFocusCapture={e => e.currentTarget.style.borderColor = 'hsl(var(--accent))'}
                        onBlurCapture={e => e.currentTarget.style.borderColor = 'hsl(var(--border))'}
                      />
                    </div>

                    {activeSearchPlan === selectedNode.id && (
                      <div style={{
                        position: 'absolute', top: '110%', left: 0, right: 0, zIndex: 200,
                        background: 'white', borderRadius: 8, border: '1px solid hsl(var(--border))',
                        boxShadow: 'var(--shadow-lg)', maxHeight: 260, overflowY: 'auto',
                      }}>
                        {OBJECT_CODES.filter(c =>
                          !searchQuery || c.code.toLowerCase().includes(searchQuery.toLowerCase()) || c.name.toLowerCase().includes(searchQuery.toLowerCase())
                        ).map(code => {
                          const already = selectedNode.planData?.objectCodes.some(oc => oc.code === code.code);
                          return (
                            <div
                              key={code.code}
                              onClick={() => !already && addObjectCode(selectedNode.id, code)}
                              style={{
                                padding: '0.65rem 1rem', display: 'flex', justifyContent: 'space-between',
                                alignItems: 'center', cursor: already ? 'default' : 'pointer',
                                borderBottom: '1px solid hsl(var(--bg-main))',
                                background: already ? 'hsl(var(--bg-main))' : 'transparent',
                                transition: 'background 0.1s',
                              }}
                              onMouseEnter={e => { if (!already) e.currentTarget.style.background = 'hsl(var(--bg-main))'; }}
                              onMouseLeave={e => { if (!already) e.currentTarget.style.background = 'transparent'; }}
                            >
                              <span style={{ fontSize: '0.875rem', color: already ? 'hsl(var(--text-muted))' : 'inherit' }}>
                                <b style={{ color: 'hsl(var(--primary))', marginRight: '0.5rem' }}>{code.code}</b>
                                {code.name}
                              </span>
                              {already && <Check size={14} style={{ color: 'hsl(var(--accent))' }} />}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Object code cards */}
                  {selectedNode.planData.objectCodes.length === 0 ? (
                    <div style={{
                      padding: '2.5rem', textAlign: 'center', borderRadius: 8,
                      border: '2px dashed hsl(var(--border))', background: 'hsl(var(--bg-main))',
                    }}>
                      <FileText size={32} style={{ color: 'hsl(var(--border))', marginBottom: '0.75rem' }} />
                      <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.875rem' }}>
                        No object codes linked yet.<br />Search above to attach cost codes to this financial plan.
                      </p>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      {selectedNode.planData.objectCodes.map(obj => {
                        const objTotal = obj.details.reduce((s, d) => s + (parseFloat(d.localCost) || 0) + (parseFloat(d.foreignCost) || 0), 0);
                        return (
                          <div key={obj.id} style={{
                            border: '1px solid hsl(var(--border))', borderRadius: 10, overflow: 'hidden',
                          }}>
                            <div style={{
                              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                              padding: '0.875rem 1.25rem', background: 'hsl(var(--bg-main))',
                              borderBottom: '1px solid hsl(var(--border))',
                            }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <span style={{
                                  display: 'inline-block', padding: '0.2rem 0.6rem', borderRadius: 5,
                                  background: 'hsl(var(--primary))', color: 'white', fontSize: '0.7rem', fontWeight: 800,
                                }}>{obj.code}</span>
                                <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>{obj.name}</span>
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                {objTotal > 0 && (
                                  <span style={{ fontSize: '0.875rem', fontWeight: 800, color: 'hsl(var(--accent))' }}>
                                    {objTotal.toLocaleString(undefined, { maximumFractionDigits: 2 })} M
                                  </span>
                                )}
                                <button onClick={() => addDetailRow(selectedNode.id, obj.id)} className="btn btn-primary" style={{ padding: '0.3rem 0.75rem', fontSize: '0.75rem' }}>
                                  <Plus size={12} /> Add Year
                                </button>
                                <button onClick={() => removeObjectCode(selectedNode.id, obj.id)} className="btn btn-outline" style={{ padding: '0.3rem 0.5rem', borderColor: 'hsl(var(--border))' }}>
                                  <Trash2 size={13} style={{ color: 'hsl(0, 70%, 50%)' }} />
                                </button>
                              </div>
                            </div>

                            <div style={{ padding: obj.details.length ? '0' : '1.25rem' }}>
                              {obj.details.length === 0 ? (
                                <p style={{ textAlign: 'center', color: 'hsl(var(--text-muted))', fontSize: '0.8125rem' }}>
                                  Click <strong>Add Year</strong> to enter yearly cost estimates.
                                </p>
                              ) : (
                                <>
                                  <div style={{
                                    display: 'grid', gridTemplateColumns: '160px 1fr 1fr 140px 140px 36px',
                                    gap: '0.75rem', padding: '0.5rem 1.25rem',
                                    background: 'hsl(var(--bg-main))', borderBottom: '1px solid hsl(var(--border))',
                                    fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase',
                                    color: 'hsl(var(--text-muted))',
                                  }}>
                                    <div>Financial Year</div>
                                    <div>Local Estimate (M)</div>
                                    <div>Foreign Estimate (M)</div>
                                    <div style={{ textAlign: 'center' }}>Local Details</div>
                                    <div style={{ textAlign: 'center' }}>Foreign Details</div>
                                    <div />
                                  </div>
                                  {obj.details.map(d => (
                                    <div key={d.id} style={{
                                      display: 'grid', gridTemplateColumns: '160px 1fr 1fr 140px 140px 36px',
                                      gap: '0.75rem', padding: '0.6rem 1.25rem', alignItems: 'center',
                                      borderBottom: '1px solid hsl(var(--border))',
                                    }}>
                                      <select
                                        value={d.year}
                                        onChange={e => updateDetail(selectedNode.id, obj.id, d.id, { year: e.target.value })}
                                        style={{ padding: '0.4rem 0.625rem', border: '1.5px solid hsl(var(--border))', borderRadius: 6, fontSize: '0.8125rem', background: 'white' }}
                                      >
                                        {FIN_YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                                      </select>
                                      <div style={{ position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: '0.625rem', top: '50%', transform: 'translateY(-50%)', fontSize: '0.7rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>PKR</span>
                                        <input type="number" placeholder="0.00" value={d.localCost} onChange={e => updateDetail(selectedNode.id, obj.id, d.id, { localCost: e.target.value })} style={{ width: '100%', padding: '0.4rem 0.5rem 0.4rem 2.75rem', border: '1.5px solid hsl(var(--border))', borderRadius: 6, fontSize: '0.8125rem', textAlign: 'right' }} />
                                      </div>
                                      <div style={{ position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: '0.625rem', top: '50%', transform: 'translateY(-50%)', fontSize: '0.7rem', fontWeight: 700, color: 'hsl(var(--accent))' }}>USD</span>
                                        <input type="number" placeholder="0.00" value={d.foreignCost} onChange={e => updateDetail(selectedNode.id, obj.id, d.id, { foreignCost: e.target.value })} style={{ width: '100%', padding: '0.4rem 0.5rem 0.4rem 2.75rem', border: '1.5px solid hsl(var(--border))', borderRadius: 6, fontSize: '0.8125rem', textAlign: 'right' }} />
                                      </div>
                                      <button onClick={() => setModalState({ isOpen: true, nodeId: selectedNode.id, codeId: obj.id, detailId: d.id, type: 'Local' })} className="btn btn-outline" style={{ fontSize: '0.7rem', color: 'hsl(var(--primary))' }}> Breakdown </button>
                                      <button onClick={() => setModalState({ isOpen: true, nodeId: selectedNode.id, codeId: obj.id, detailId: d.id, type: 'Foreign' })} className="btn btn-outline" style={{ fontSize: '0.7rem', color: 'hsl(var(--accent))' }}> Breakdown </button>
                                      <button onClick={() => removeDetail(selectedNode.id, obj.id, d.id)} style={{ padding: '0.35rem', border: '1px solid hsl(var(--border))', borderRadius: 6, background: 'transparent' }}>
                                        <X size={13} />
                                      </button>
                                    </div>
                                  ))}
                                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '2rem', padding: '0.75rem 1.25rem', background: 'hsl(var(--bg-main))', fontWeight: 700, fontSize: '0.875rem' }}>
                                    <span style={{ color: 'hsl(var(--text-muted))' }}>Item Total:</span>
                                    <span style={{ color: 'hsl(var(--accent))' }}>{objTotal.toLocaleString(undefined, { maximumFractionDigits: 2 })} M</span>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Backdrop for search results */}
      {activeSearchPlan && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100 }} onClick={() => setActiveSearchPlan(null)} />
      )}

      {/* Cost Estimation Modal */}
      <CostEstimationModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false })}
        costTypeLabel={modalState.type || 'Local'}
        defaultObjectCode={
          modalState.nodeId && modalState.codeId
            ? findNode([wbs], modalState.nodeId)?.planData?.objectCodes?.find(c => c.id === modalState.codeId)?.name
            : undefined
        }
        defaultYear={
          modalState.nodeId && modalState.codeId && modalState.detailId
            ? findNode([wbs], modalState.nodeId)?.planData?.objectCodes?.find(c => c.id === modalState.codeId)?.details?.find(d => d.id === modalState.detailId)?.year
            : undefined
        }
        initialData={
          modalState.nodeId && modalState.codeId && modalState.detailId && modalState.type
            ? (findNode([wbs], modalState.nodeId)?.planData?.objectCodes?.find(c => c.id === modalState.codeId)?.details?.find(d => d.id === modalState.detailId) as any)?.[`${modalState.type.toLowerCase()}Data`]
            : undefined
        }
        onSave={data => {
          if (modalState.nodeId && modalState.codeId && modalState.detailId && modalState.type) {
            const field = modalState.type === 'Local' ? 'localCost' : 'foreignCost';
            updateDetail(modalState.nodeId, modalState.codeId, modalState.detailId, {
              [field]: data.totalCost.toFixed(2),
              [`${modalState.type.toLowerCase()}Data`]: data,
            });
          }
        }}
      />
    </div>
  );
};
