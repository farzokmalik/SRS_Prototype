import React from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

interface RTEditorProps {
  label: string;
  value: string;
  onChange: (content: string) => void;
  required?: boolean;
}

export const RTEditor: React.FC<RTEditorProps> = ({ label, value, onChange, required }) => {
  return (
    <div className="form-group" style={{ marginBottom: '2rem' }}>
      <label className="label">{label} {required && <span style={{ color: 'var(--error)' }}>*</span>}</label>
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
