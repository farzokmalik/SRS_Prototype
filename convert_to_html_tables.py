#!/usr/bin/env python3
"""
Convert Markdown tables in PC-N, PC-IV, PC-V Data Dictionary files
to styled HTML tables matching the format of PC-I, PC-II, PC-III(a), PC-III(b).

Target format:
- border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt
- Header: background-color: #D9E1F2; font-weight: bold
- Borders: 1px solid #8497B0
- Data Flow column: no background color (same as data rows)
"""
import re
import os

BASE = r"c:\Users\Rafia\Documents\Dev Projects\DesignProject\docs\DFD_PCS"

STYLE_TABLE = 'border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;'
STYLE_HEADER_ROW = 'background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;'
STYLE_TH = 'border: 1px solid #8497B0; padding: 8px; text-align: left;'
STYLE_TR = 'border: 1px solid #8497B0;'
STYLE_TD = 'border: 1px solid #8497B0; padding: 8px;'

def md_table_to_html(headers, rows):
    """Convert a markdown table (headers + rows) to styled HTML."""
    lines = []
    lines.append(f'<table style="{STYLE_TABLE}">')
    lines.append(f'    <thead>')
    lines.append(f'        <tr style="{STYLE_HEADER_ROW}">')
    for h in headers:
        lines.append(f'            <th style="{STYLE_TH}">{h.strip()}</th>')
    lines.append(f'        </tr>')
    lines.append(f'    </thead>')
    lines.append(f'    <tbody>')
    for row in rows:
        lines.append(f'        <tr style="{STYLE_TR}">')
        for cell in row:
            lines.append(f'            <td style="{STYLE_TD}">{cell.strip()}</td>')
        lines.append(f'        </tr>')
    lines.append(f'    </tbody>')
    lines.append(f'</table>')
    return '\n'.join(lines)

def parse_md_row(line):
    """Parse a markdown table row into cells."""
    # Remove leading/trailing |
    line = line.strip()
    if line.startswith('|'):
        line = line[1:]
    if line.endswith('|'):
        line = line[:-1]
    return [cell.strip() for cell in line.split('|')]

def is_separator_row(line):
    """Check if a line is a markdown table separator (| :---- | :---- |)."""
    return bool(re.match(r'^\|[\s:*\-|]+\|$', line.strip()))

def convert_file(filepath):
    """Convert all markdown tables in a file to HTML tables."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    result = []
    i = 0
    
    while i < len(lines):
        line = lines[i].rstrip('\r')
        
        # Detect start of a markdown table (header row starting with |)
        if line.strip().startswith('|') and 'Sr. No.' in line:
            # This is a header row
            headers = parse_md_row(line)
            i += 1
            
            # Skip separator row
            if i < len(lines) and is_separator_row(lines[i].rstrip('\r')):
                i += 1
            
            # Collect data rows
            data_rows = []
            while i < len(lines):
                row_line = lines[i].rstrip('\r')
                if row_line.strip().startswith('|') and not is_separator_row(row_line):
                    cells = parse_md_row(row_line)
                    # Ensure same number of columns as headers
                    while len(cells) < len(headers):
                        cells.append('')
                    data_rows.append(cells[:len(headers)])
                    i += 1
                else:
                    break
            
            # Convert to HTML
            html = md_table_to_html(headers, data_rows)
            result.append(html)
            result.append('')  # blank line after table
            continue
        
        # Check for regular markdown table rows that aren't part of a header
        elif line.strip().startswith('|') and not is_separator_row(line):
            # Could be a standalone data table without Sr. No. header - pass through
            result.append(line)
            i += 1
            continue
        
        # Convert section titles to bold format matching other files
        # Keep existing section title formatting
        result.append(line)
        i += 1
    
    # Write back
    output = '\n'.join(result)
    # Clean up excessive blank lines
    output = re.sub(r'\n{3,}', '\n\n', output)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(output)
    
    print(f"  Converted: {os.path.basename(filepath)}")

# Process files
print("Converting Markdown tables to HTML format...\n")

for name, fname in [
    ("PC-N", "Copy of PC_N Data Dictionary_v2.docx.md"),
    ("PC-IV", "Copy of PC_IV Data Dictionary_v2.docx.md"),
    ("PC-V", "Copy of PC_V Data Dictionary_v2.docx.md"),
]:
    fpath = os.path.join(BASE, fname)
    if os.path.exists(fpath):
        print(f"Processing {name}...")
        convert_file(fpath)
    else:
        print(f"  SKIP: {fname} not found")

print("\nDone! All markdown tables converted to styled HTML.")
