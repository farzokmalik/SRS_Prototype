import React, { useRef, useState } from 'react';
import { X, Trash2 } from 'lucide-react';

export type PC4AttachmentFile = {
  title: string;
  name: string;
  size: string;
  type: string;
  date: string;
};

export function emptyPC4AttachmentMeta(
  name: string,
  size: string,
  type: string,
  date: string,
): PC4AttachmentFile {
  return { title: '', name, size, type, date };
}

export function normalizePC4Attachments(raw: unknown): PC4AttachmentFile[] {
  const list = (raw as PC4AttachmentFile[]) || [];
  return list.map((f) => ({
    title: f.title ?? '',
    name: f.name || 'File',
    size: f.size ?? '',
    type: f.type ?? '',
    date: f.date ?? '',
  }));
}

const thStyle: React.CSSProperties = {
  color: '#fff',
  background: 'linear-gradient(180deg, hsl(207 72% 48%) 0%, hsl(207 72% 42%) 100%)',
  fontSize: '0.625rem',
  fontWeight: 700,
  letterSpacing: '0.03em',
  textTransform: 'uppercase',
  padding: '0.55rem 0.5rem',
  textAlign: 'left',
  border: '1px solid hsl(var(--border))',
  verticalAlign: 'middle',
};

const cellStyle: React.CSSProperties = {
  padding: '0.5rem',
  border: '1px solid hsl(var(--border))',
  verticalAlign: 'top',
  background: '#fff',
};

type Props = {
  files: PC4AttachmentFile[];
  onChange: (next: PC4AttachmentFile[]) => void;
  /** Optional heading above the block (e.g. "Attachment(s)") */
  label?: string;
  /** Second column header (default "Title") */
  titleColumnHeader?: string;
  placeholder?: string;
  emptyMessage?: string;
};

export const PC4AttachmentBlock: React.FC<Props> = ({
  files,
  onChange,
  label,
  titleColumnHeader = 'Title',
  placeholder = 'Title',
  emptyMessage = 'No attachments yet',
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pendingFiles = useRef<FileList | null>(null);
  const [pendingHint, setPendingHint] = useState('');

  const onPickFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    pendingFiles.current = e.target.files;
    const fl = e.target.files;
    if (fl?.length) {
      setPendingHint(Array.from(fl).map((f) => f.name).join(', '));
    } else {
      setPendingHint('');
    }
    e.target.value = '';
  };

  const doUpload = () => {
    const fl = pendingFiles.current;
    if (!fl?.length) return;
    const added = Array.from(fl).map((f) =>
      emptyPC4AttachmentMeta(f.name, `${(f.size / 1024).toFixed(1)} KB`, f.type, new Date().toLocaleDateString()),
    );
    onChange([...files, ...added]);
    pendingFiles.current = null;
    setPendingHint('');
  };

  const clearPending = () => {
    pendingFiles.current = null;
    setPendingHint('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div>
      {label ? (
        <p
          style={{
            fontSize: '0.9375rem',
            fontWeight: 700,
            margin: '0 0 0.75rem',
            color: 'hsl(var(--text-main))',
          }}
        >
          {label}
        </p>
      ) : null}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(260px, 1fr) minmax(320px, 1.4fr)',
          gap: '1.25rem',
          alignItems: 'start',
        }}
      >
        <div
          style={{
            background: 'hsl(var(--bg-main) / 0.35)',
            border: '1px dashed hsl(var(--border))',
            borderRadius: 'var(--radius-md)',
            padding: '1rem',
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              margin: '0 0 0.75rem',
              color: 'hsl(var(--text-muted))',
              textAlign: 'center',
            }}
          >
            Select file(s)
          </p>
          <input ref={fileInputRef} type="file" multiple hidden onChange={onPickFiles} />
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'stretch', marginBottom: '0.75rem' }}>
            <input
              readOnly
              className="input"
              placeholder="Choose File"
              value={pendingHint}
              style={{ flex: 1, fontSize: '0.8125rem', background: '#fff', cursor: 'default' }}
            />
            <button
              type="button"
              className="btn btn-primary"
              style={{ fontSize: '0.8125rem', flexShrink: 0 }}
              onClick={() => fileInputRef.current?.click()}
            >
              Browse
            </button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ fontSize: '0.8125rem', color: 'hsl(var(--error))' }}
              onClick={clearPending}
            >
              <X size={16} style={{ marginRight: '0.35rem', verticalAlign: 'middle' }} />
              Clear
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ fontSize: '0.8125rem', color: 'hsl(var(--success))' }}
              onClick={doUpload}
            >
              Upload
            </button>
          </div>
          <p style={{ fontSize: '0.7rem', color: 'hsl(var(--text-muted))', margin: '0.75rem 0 0' }}>
            Choose files with Browse, then Upload to add them to the list.
          </p>
        </div>

        <div style={{ overflowX: 'auto', border: '1px dashed hsl(var(--border))', borderRadius: 'var(--radius-md)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
            <thead>
              <tr>
                <th style={{ ...thStyle, width: '3rem', textAlign: 'center' }}>Sr #</th>
                <th style={thStyle}>{titleColumnHeader}</th>
                <th style={{ ...thStyle, width: '4rem', textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {files.length === 0 ? (
                <tr>
                  <td colSpan={3} style={{ ...cellStyle, textAlign: 'center', color: 'hsl(var(--text-muted))', padding: '1.25rem' }}>
                    {emptyMessage}
                  </td>
                </tr>
              ) : (
                files.map((f, i) => (
                  <tr key={`${f.name}-${i}`}>
                    <td style={{ ...cellStyle, textAlign: 'center', fontWeight: 600 }}>{i + 1}</td>
                    <td style={cellStyle}>
                      <input
                        className="input"
                        placeholder={placeholder}
                        value={f.title}
                        onChange={(e) => {
                          const next = [...files];
                          next[i] = { ...next[i], title: e.target.value };
                          onChange(next);
                        }}
                        style={{ fontSize: '0.8125rem' }}
                      />
                    </td>
                    <td style={{ ...cellStyle, textAlign: 'center' }}>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        title="Remove"
                        onClick={() => onChange(files.filter((_, j) => j !== i))}
                        style={{ padding: '0.35rem', color: 'hsl(var(--error))' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
