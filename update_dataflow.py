#!/usr/bin/env python3
"""
Update Data Flow column in all PC Data Dictionary markdown files.

DFD Flow Map (from diagram):
  DF-1: PCN → PC-I
  DF-2: PCN → PC-II (Feasibility)
  DF-3: PC-II → PC-I
  DF-4: PC-I → PC-III(a) (Approval)
  DF-5: PC-III(a) → PC-III(b) (Execution)
  DF-6: PC-III(b) → PC-III(a) (Execution feedback)
  DF-7: PC-III(a) → PC-IV (Complete)
  DF-8: PC-IV → PC-V (Evaluation)
  R-9:  PC-III(a) → PC-I (Revision, blue arrow)

Data Flow column = "where does this field GO next?"
  - PC-N fields: if referenced by PC-I → DF-1; if referenced by PC-II → DF-2; both → DF-1, DF-2
  - PC-II fields: if referenced by PC-I → DF-3; else Sustained
  - PC-I fields: if referenced by PC-III(a)/PC-IV → DF-4; else Sustained
  - PC-III(a) fields: if referenced by PC-III(b) → DF-5; if referenced by PC-IV → DF-7; both → DF-5, DF-7; else Sustained
  - PC-III(b) fields: if referenced by PC-III(a) → DF-6; else Sustained
  - PC-IV fields: if referenced by PC-V → DF-8; else Sustained
  - PC-V fields: always Sustained (end of chain)
"""
import re
import os

BASE = r"c:\Users\Rafia\Documents\Dev Projects\DesignProject\docs\DFD_PCS"

FILES = {
    "PC-N": os.path.join(BASE, "Copy of PC_N Data Dictionary_v2.docx.md"),
    "PC-I": os.path.join(BASE, "Copy of PC_I Data Dictionary.docx.md"),
    "PC-II": os.path.join(BASE, "Copy of PC_II Data Dictionary_v2.docx.md"),
    "PC-III(a)": os.path.join(BASE, "Copy of PC_III(a) Data Dictionary_v2.docx.md"),
    "PC-III(b)": os.path.join(BASE, "Copy of PC_III(b) Data Dictionary_v2.docx.md"),
    "PC-IV": os.path.join(BASE, "Copy of PC_IV Data Dictionary_v2.docx.md"),
    "PC-V": os.path.join(BASE, "Copy of PC_V Data Dictionary_v2.docx.md"),
}

def extract_cross_refs(filepath):
    """Extract all cross-reference mentions of PC-X-Y.Z from a file.
    Returns a set of field IDs like {'PC-N-1.1', 'PC-I-1.2', ...}
    """
    refs = set()
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    # Match patterns like PC-N-1.1, PC-I-1.2, PC-II-3.4, PC-III(a)-1.1, PC-III(b)-2.3, PC-IV-5.1
    pattern = r'PC-(?:N|I{1,3}(?:\(a\)|\(b\))?|IV|V)-\d+\.\d+'
    for m in re.finditer(pattern, content):
        refs.add(m.group())
    return refs

def get_field_ids(filepath):
    """Extract all Sr. No. field IDs from a file (the field IDs defined in this dictionary)."""
    ids = set()
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    # For HTML tables: look in the first <td> of each row
    for m in re.finditer(r'<td[^>]*>\s*(PC-(?:N|I{1,3}(?:\(a\)|\(b\))?|IV|V)-\d+\.\d+)\s*</td>', content):
        ids.add(m.group(1))
    # For Markdown tables: first column after |
    for m in re.finditer(r'\|\s*(PC-(?:N|I{1,3}(?:\(a\)|\(b\))?|IV|V)-\d+\.\d+)\s*\|', content):
        ids.add(m.group(1))
    return ids

# Step 1: Build cross-reference index - for each downstream PC, which upstream field IDs are referenced?
print("Building cross-reference index...")
cross_refs = {}
for name, fpath in FILES.items():
    if os.path.exists(fpath):
        cross_refs[name] = extract_cross_refs(fpath)
        print(f"  {name}: {len(cross_refs[name])} cross-refs found")

# Step 2: For each PC, determine where each field goes
def compute_dataflow(field_id, source_pc):
    """Given a field ID and its source PC, determine Data Flow label(s)."""
    flows = []
    
    if source_pc == "PC-N":
        # PC-N → PC-I (DF-1), PC-N → PC-II (DF-2)
        if field_id in cross_refs.get("PC-I", set()):
            flows.append("DF-1")
        if field_id in cross_refs.get("PC-II", set()):
            flows.append("DF-2")
    
    elif source_pc == "PC-II":
        # PC-II → PC-I (DF-3)
        if field_id in cross_refs.get("PC-I", set()):
            flows.append("DF-3")
    
    elif source_pc == "PC-I":
        # PC-I → PC-III(a) (DF-4)
        if field_id in cross_refs.get("PC-III(a)", set()):
            flows.append("DF-4")
        if field_id in cross_refs.get("PC-IV", set()):
            flows.append("DF-4")  # Still via DF-4 path
    
    elif source_pc == "PC-III(a)":
        # PC-III(a) → PC-III(b) (DF-5), PC-III(a) → PC-IV (DF-7)
        if field_id in cross_refs.get("PC-III(b)", set()):
            flows.append("DF-5")
        if field_id in cross_refs.get("PC-IV", set()):
            flows.append("DF-7")
    
    elif source_pc == "PC-III(b)":
        # PC-III(b) → PC-III(a) (DF-6)
        if field_id in cross_refs.get("PC-III(a)", set()):
            flows.append("DF-6")
    
    elif source_pc == "PC-IV":
        # PC-IV → PC-V (DF-8)
        if field_id in cross_refs.get("PC-V", set()):
            flows.append("DF-8")
    
    elif source_pc == "PC-V":
        pass  # End of chain
    
    # Deduplicate
    flows = list(dict.fromkeys(flows))
    
    if not flows:
        return "Sustained"
    return ", ".join(flows)

# Step 3: Process HTML-based files (PC-I, PC-II, PC-III(a), PC-III(b))
# These already have a Data Flow column - we need to UPDATE the values

def update_html_dataflow(filepath, source_pc):
    """Update existing Data Flow column values in HTML tables."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all data rows and their field IDs, then update the last <td> (Data Flow)
    # Pattern: find each <tr> containing a field ID, identify the last <td> value
    
    def replace_row_dataflow(match):
        row = match.group(0)
        # Extract field ID from first <td>
        field_match = re.search(r'<td[^>]*>\s*(PC-(?:N|I{1,3}(?:\(a\)|\(b\))?|IV|V)-\d+\.\d+)\s*</td>', row)
        if not field_match:
            return row
        
        field_id = field_match.group(1)
        df_value = compute_dataflow(field_id, source_pc)
        
        # Replace the last <td>...</td> in the row (Data Flow column)
        # Find all <td>...</td> matches
        tds = list(re.finditer(r'(<td[^>]*>)(.*?)(</td>)', row, re.DOTALL))
        if tds:
            last_td = tds[-1]
            new_row = row[:last_td.start(2)] + df_value + row[last_td.end(2):]
            return new_row
        return row
    
    # Match each <tr>...</tr> in tbody
    new_content = re.sub(
        r'<tr[^>]*>(?:(?!</tr>).)*?PC-(?:N|I{1,3}(?:\(a\)|\(b\))?|IV|V)-\d+\.\d+(?:(?!</tr>).)*?</tr>',
        replace_row_dataflow,
        content,
        flags=re.DOTALL
    )
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    # Count changes
    field_ids = get_field_ids(filepath)
    print(f"  Updated {len(field_ids)} fields in {os.path.basename(filepath)}")

# Step 4: Process Markdown-based files (PC-N, PC-IV, PC-V)
# PC-IV and PC-V need a new column added, PC-N already has it

def update_md_dataflow(filepath, source_pc, has_column=True):
    """Update or add Data Flow column in Markdown tables."""
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = []
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Check if this is a header row of a markdown table
        if '| Sr. No.' in line:
            if has_column:
                # Already has Data Flow column - keep as is
                new_lines.append(line)
            else:
                # Add Data Flow column to header
                line = line.rstrip()
                if line.endswith('|'):
                    line = line + ' Data Flow |\n'
                else:
                    line = line + ' | Data Flow |\n'
                new_lines.append(line)
            
            i += 1
            # Process separator line
            if i < len(lines) and '| :----' in lines[i]:
                sep_line = lines[i]
                if has_column:
                    new_lines.append(sep_line)
                else:
                    sep_line = sep_line.rstrip()
                    if sep_line.endswith('|'):
                        sep_line = sep_line + ' :---- |\n'
                    else:
                        sep_line = sep_line + ' | :---- |\n'
                    new_lines.append(sep_line)
                i += 1
            continue
        
        # Check if this is a data row with a field ID
        field_match = re.match(r'\|\s*(PC-(?:N|I{1,3}(?:\(a\)|\(b\))?|IV|V)-\d+\.\d+)\s*\|', line)
        if field_match:
            field_id = field_match.group(1)
            df_value = compute_dataflow(field_id, source_pc)
            
            line = line.rstrip()
            if has_column:
                # Replace existing last column value
                parts = line.split('|')
                # parts: ['', ' Sr.No. ', ' Info ', ... , ' old_df_value ', '']
                if len(parts) >= 3:
                    parts[-2] = f' {df_value} '
                    line = '|'.join(parts) + '\n'
                else:
                    line = line + '\n'
            else:
                # Add new column
                if line.endswith('|'):
                    line = line + f' {df_value} |\n'
                else:
                    line = line + f' | {df_value} |\n'
            new_lines.append(line)
            i += 1
            continue
        
        new_lines.append(line)
        i += 1
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    
    field_ids = get_field_ids(filepath)
    print(f"  Updated {len(field_ids)} fields in {os.path.basename(filepath)}")

# Execute updates
print("\n--- Updating Data Flow columns ---\n")

# PC-N: Markdown format, already has Data Flow column
print("Processing PC-N...")
update_md_dataflow(FILES["PC-N"], "PC-N", has_column=True)

# PC-I: HTML format, already has Data Flow column
print("Processing PC-I...")
update_html_dataflow(FILES["PC-I"], "PC-I")

# PC-II: HTML format, already has Data Flow column
print("Processing PC-II...")
update_html_dataflow(FILES["PC-II"], "PC-II")

# PC-III(a): HTML format, already has Data Flow column
print("Processing PC-III(a)...")
update_html_dataflow(FILES["PC-III(a)"], "PC-III(a)")

# PC-III(b): HTML format, already has Data Flow column
print("Processing PC-III(b)...")
update_html_dataflow(FILES["PC-III(b)"], "PC-III(b)")

# PC-IV: Markdown format, DOES NOT have Data Flow column
print("Processing PC-IV...")
update_md_dataflow(FILES["PC-IV"], "PC-IV", has_column=False)

# PC-V: Markdown format, DOES NOT have Data Flow column
print("Processing PC-V...")
update_md_dataflow(FILES["PC-V"], "PC-V", has_column=False)

print("\n✅ All Data Flow columns updated successfully!")
print("\nData Flow Legend:")
print("  DF-1: PCN → PC-I")
print("  DF-2: PCN → PC-II (Feasibility)")
print("  DF-3: PC-II → PC-I")
print("  DF-4: PC-I → PC-III(a) (Approval)")
print("  DF-5: PC-III(a) → PC-III(b) (Execution)")
print("  DF-6: PC-III(b) → PC-III(a) (Execution feedback)")
print("  DF-7: PC-III(a) → PC-IV (Complete)")
print("  DF-8: PC-IV → PC-V (Evaluation)")
print("  Sustained: Field not reused in any subsequent PC")
