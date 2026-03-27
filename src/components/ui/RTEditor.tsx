import React from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

interface RTEditorProps {
  label: string;
  value: string;
  onChange: (content: string) => void;
  required?: boolean;
  headerRight?: React.ReactNode;
}

export const RTEditor: React.FC<RTEditorProps> = ({ label, value, onChange, required, headerRight }) => {
  return (
    <div className="form-group" style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <label className="label" style={{ marginBottom: 0 }}>{label} {required && <span style={{ color: 'var(--error)' }}>*</span>}</label>
        {headerRight}
      </div>
      <div style={{ background: '#fff', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border)' }}>
        <ReactQuill 
          theme="snow" 
          value={value} 
          onChange={onChange} 
          style={{ height: '200px', marginBottom: '42px' }}
        />
      </div>
    </div>
  );
};
