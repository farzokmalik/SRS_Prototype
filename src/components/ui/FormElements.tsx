import React, { useRef } from 'react';
import { Upload, X, File as FileIcon } from 'lucide-react';

interface FieldProps {
  label: string;
  description?: string;
  error?: string;
  required?: boolean;
}

export const InputField: React.FC<FieldProps & React.InputHTMLAttributes<HTMLInputElement>> = ({ 
  label, description, error, required, ...props 
}) => (
  <div className="input-group">
    <label className="label">
      {label} {required && <span style={{ color: 'hsl(var(--error))' }}>*</span>}
    </label>
    <input className="input" {...props} />
    {description && <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', marginTop: '0.4rem' }}>{description}</p>}
  </div>
);

export const TextAreaField: React.FC<FieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ 
  label, description, error, required, ...props 
}) => (
  <div className="input-group">
    <label className="label">
      {label} {required && <span style={{ color: 'hsl(var(--error))' }}>*</span>}
    </label>
    <textarea className="textarea" {...props} />
    {description && <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', marginTop: '0.4rem' }}>{description}</p>}
  </div>
);

export const SelectField: React.FC<FieldProps & React.SelectHTMLAttributes<HTMLSelectElement> & { options: (string | { value: string, label: string })[] }> = ({ 
  label, description, error, required, options, ...props 
}) => (
  <div className="input-group">
    <label className="label">
      {label} {required && <span style={{ color: 'hsl(var(--error))' }}>*</span>}
    </label>
    <select className="select" {...props}>
      <option value="">Select an option</option>
      {(options || []).map((opt, i) => {
        const val = typeof opt === 'string' ? opt : opt.value;
        const lbl = typeof opt === 'string' ? opt : opt.label;
        return <option key={`${val}-${i}`} value={val}>{lbl}</option>;
      })}
    </select>
  </div>
);

export const RadioGroup: React.FC<{ label: string, options: { value: string, label: string }[], value: string, onChange: (val: string) => void, name: string, required?: boolean }> = ({ 
  label, options, value, onChange, name, required 
}) => (
  <div className="input-group">
    <label className="label">
      {label} {required && <span style={{ color: 'hsl(var(--error))' }}>*</span>}
    </label>
    <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
      {(options || []).map((opt, i) => (
        <label key={opt.value || i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '0.9375rem' }}>
          <input 
            type="radio" 
            name={name} 
            value={opt.value} 
            checked={value === opt.value} 
            onChange={() => onChange(opt.value)} 
            style={{ 
              width: '18px', 
              height: '18px', 
              accentColor: 'hsl(var(--accent))' 
            }}
          />
          {opt.label}
        </label>
      ))}
    </div>
  </div>
);

export const MultiCheckGroup: React.FC<{ label: string, options: string[], selected?: string[], value?: string[], onChange: (val: string[]) => void, required?: boolean }> = ({ 
  label, options, selected, value, onChange, required 
}) => {
  const currentSelected = selected || value || [];
  const toggle = (opt: string) => {
    if (currentSelected.includes(opt)) onChange(currentSelected.filter(s => s !== opt));
    else onChange([...currentSelected, opt]);
  };

  return (
    <div className="input-group">
      <label className="label">
        {label} {required && <span style={{ color: 'hsl(var(--error))' }}>*</span>}
      </label>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.75rem', marginTop: '0.5rem' }}>
        {(options || []).map((opt, i) => (
          <label key={`${opt}-${i}`} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '0.9rem' }}>
            <input 
              type="checkbox" 
              checked={currentSelected.includes(opt)} 
              onChange={() => toggle(opt)} 
              style={{ width: '16px', height: '16px', accentColor: 'hsl(var(--accent))' }}
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
};

export const FileUpload: React.FC<{ 
  label: string, 
  files: any[], 
  onUpload: (files: any[]) => void, 
  onRemove: (index: number) => void,
  multiple?: boolean,
  description?: string
}> = ({ label, files, onUpload, onRemove, multiple = true, description }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(f => ({
        name: f.name,
        size: (f.size / 1024).toFixed(1) + ' KB',
        type: f.type,
        date: new Date().toLocaleDateString()
      }));
      onUpload([...files, ...newFiles]);
    }
  };

  return (
    <div className="input-group">
      <label className="label">{label}</label>
      <div 
        onClick={() => inputRef.current?.click()}
        style={{ 
          border: '2px dashed hsl(var(--border))', 
          padding: '2rem', 
          textAlign: 'center', 
          borderRadius: 'var(--radius-lg)', 
          cursor: 'pointer',
          background: 'hsl(var(--bg-main) / 0.3)',
          transition: 'all 0.2s ease',
          marginBottom: files.length > 0 ? '1rem' : 0
        }}
        onMouseOver={(e) => (e.currentTarget.style.borderColor = 'hsl(var(--accent))')}
        onMouseOut={(e) => (e.currentTarget.style.borderColor = 'hsl(var(--border))')}
      >
        <input 
          type="file" 
          multiple={multiple} 
          hidden 
          ref={inputRef} 
          onChange={handleFileChange} 
        />
        <Upload size={32} color="hsl(var(--secondary))" style={{ marginBottom: '0.5rem' }} />
        <p style={{ color: 'hsl(var(--text-main))', fontWeight: 600, fontSize: '0.9375rem' }}>
          {description || 'Click or drag files to upload'}
        </p>
        <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.75rem', marginTop: '0.25rem' }}>
          PDF, PNG, JPG or DOCX (Max 10MB)
        </p>
      </div>

      {files.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {files.map((file, idx) => (
            <div 
              key={idx} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                padding: '0.75rem 1rem', 
                background: 'white', 
                border: '1px solid hsl(var(--border))', 
                borderRadius: 'var(--radius-md)',
                animation: 'fadeIn 0.3s ease forwards'
              }}
            >
              <div style={{ background: 'hsl(var(--bg-main))', padding: '0.5rem', borderRadius: 'var(--radius-sm)', color: 'hsl(var(--accent))' }}>
                <FileIcon size={18} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{file.name}</p>
                <p style={{ fontSize: '0.6875rem', color: 'hsl(var(--text-muted))' }}>{file.size} • {file.date}</p>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); onRemove(idx); }}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  padding: '0.4rem', 
                  cursor: 'pointer', 
                  color: 'hsl(var(--text-muted))',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'hsl(var(--error))')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'hsl(var(--text-muted))')}
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
