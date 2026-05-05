#!/usr/bin/env python3
"""
Fix PC-N Data Dictionary: restore Cross Reference column and add proper Data Flow column.
The previous script incorrectly overwrote Cross Reference values with Data Flow values
for tables that didn't have a Data Flow column header.
"""
import re
import os

BASE = r"c:\Users\Rafia\Documents\Dev Projects\DesignProject\docs\DFD_PCS"

# Original PC-N cross-reference data (manually restored from the original file)
# Fields that are referenced downstream get DF labels; others get "Sustained"
# PC-N-1.1 → used in PC-I (DF-1) and PC-II (DF-2) = "DF-1, DF-2"
# PC-N-1.2 → used in PC-I (DF-1) and PC-II (DF-2) = "DF-1, DF-2"
# PC-N-5.1 → used in PC-I (DF-1) = "DF-1"
# PC-N-5.2 → used in PC-I (DF-1) = "DF-1"
# PC-N-9.1 → used in PC-I and PC-II = "DF-1, DF-2"
# PC-N-9.2 → used in PC-I and PC-II = "DF-1, DF-2"
# PC-N-10.1 → used in PC-I and PC-II = "DF-1, DF-2"
# All others → "Sustained"

# Original cross-reference values that were overwritten
original_crossrefs = {
    "PC-N-2.1": "Manual Entry",
    "PC-N-2.2": "Manual Entry",
    "PC-N-2.3": "Manual Entry",
    "PC-N-2.4": "Manual Entry",
    "PC-N-2.5": "Manual Entry",
    "PC-N-2.6": "Manual Entry",
    "PC-N-3.1": "Manual Entry",
    "PC-N-4.1": "Manual Entry",
    "PC-N-4.2": "Manual Entry",
    "PC-N-5.1": "Manual Entry",
    "PC-N-5.2": "Manual Entry",
    "PC-N-6.1": "Manual Entry",
    "PC-N-7.1": "Manual Entry",
    "PC-N-7.2": "Manual Entry",
    "PC-N-7.3": "Manual Entry",
    "PC-N-7.4": "Manual Entry",
    "PC-N-8.1": "Manual Entry",
    "PC-N-8.2": "Manual Entry",
    "PC-N-8.3": "Manual Entry",
    "PC-N-9.1": "Manual Entry",
    "PC-N-9.2": "Manual Entry",
    "PC-N-10.1": "Manual Entry",
    "PC-N-10.2": "Manual Entry",
    "PC-N-10.3": "Manual Entry",
    "PC-N-10.4": "Manual Entry",
    "PC-N-11.1": "Manual Entry",
    "PC-N-11.2": "Manual Entry",
    "PC-N-11.3": "Manual Entry",
    "PC-N-11.4": "Manual Entry",
    "PC-N-11.5": "Manual Entry",
    "PC-N-12.1": "Manual Entry",
    "PC-N-12.2": "Manual Entry",
    "PC-N-13.1": "Manual Entry",
    "PC-N-13.2": "Manual Entry",
    "PC-N-13.3": "Manual Entry",
    "PC-N-13.4": "Manual Entry",
    "PC-N-13.5": "Manual Entry",
    "PC-N-14.1": "Manual Entry",
    "PC-N-14.2": "Manual Entry",
    "PC-N-15.1": "Manual Entry",
    "PC-N-15.2": "Manual Entry",
}

# Data flow mappings
dataflow_map = {
    "PC-N-1.1": "DF-1, DF-2",
    "PC-N-1.2": "DF-1, DF-2",
    "PC-N-5.1": "DF-1",
    "PC-N-5.2": "DF-1",
    "PC-N-9.1": "DF-1, DF-2",
    "PC-N-9.2": "DF-1, DF-2",
    "PC-N-10.1": "DF-1, DF-2",
}

filepath = os.path.join(BASE, "Copy of PC_N Data Dictionary_v2.docx.md")

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    # Check if this is a header row without Data Flow
    if '| Sr. No.' in line and 'Data Flow' not in line:
        line = line.rstrip()
        if line.endswith('|'):
            line = line[:-1] + ' Data Flow |\n'
        new_lines.append(line)
        continue
    
    # Check if this is a separator row that needs extending
    if '| :----' in line:
        cols = line.strip().split('|')
        # Count non-empty separators
        sep_count = len([c for c in cols if c.strip()])
        # Check if the next expected column count (from previous header) needs +1
        # We'll add one more separator if this line has 6 separators (no DF)
        if sep_count == 6:
            line = line.rstrip()
            if line.endswith('|'):
                line = line[:-1] + ' :---- |\n'
        new_lines.append(line)
        continue
    
    # Check if this is a data row with PC-N field
    field_match = re.match(r'\|\s*(PC-N-\d+\.\d+)\s*\|', line)
    if field_match:
        field_id = field_match.group(1)
        df_value = dataflow_map.get(field_id, "Sustained")
        
        # Check if the line already has correct number of columns (7 = has DF)
        cols = line.strip().split('|')
        non_empty = [c for c in cols if c.strip()]
        
        if len(non_empty) == 7:
            # Already has 7 columns including DF - this is from Section 1, leave as-is
            new_lines.append(line)
            continue
        
        # 6 columns - the last one might have been overwritten
        # Need to restore Cross Reference and add Data Flow
        if field_id in original_crossrefs:
            # The last column currently has the DF value (wrongly placed)
            # We need to set it back to original crossref and add DF
            parts = line.rstrip().split('|')
            # parts: ['', ' field_id ', ' info ', ' component ', ' rules ', ' example ', ' wrongly_placed_df ', '']
            if len(parts) >= 3:
                # Restore the cross reference in its position
                parts[-2] = f' {original_crossrefs[field_id]} '
                # Add Data Flow column
                line = '|'.join(parts[:-1]) + f' | {df_value} |\n'
            else:
                line = line.rstrip() + f' | {df_value} |\n'
        else:
            line = line.rstrip() + f' | {df_value} |\n'
        
        new_lines.append(line)
        continue
    
    new_lines.append(line)

with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("PC-N Data Dictionary fixed successfully!")
print("- Restored Cross Reference values")
print("- Added Data Flow column to all tables")
