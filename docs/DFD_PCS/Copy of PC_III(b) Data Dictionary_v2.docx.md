# **PC-III(b) Data Dictionary**

<style>@page { size: landscape; }</style>

**Section 1 — Monthly Overview**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(b)-1.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project Name</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Search or enter project name</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Punjab Solar Energy Optimization Project</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(a)-1.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(b)-1.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project ID</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Select Unique ProjectID</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PRJ-2024-0010</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(a)-1.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(b)-1.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Reporting Month</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Calendar month selection (January \\- December)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Selected Valid Option</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(b)-1.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Reporting Year</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Calendar year selection (2023 \\- 2027\\)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">2024-2025</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(b)-1.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PSDP Funding</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Pre-filled Display</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Fetched value in Rs. Millions (Read-only)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">readonly</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(a)-1.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(b)-1.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Qtr Cash Plan Req</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Pre-filled Display</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Quarter cash plan requirement fetched (Read-only)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">readonly</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(a)-4.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(b)-1.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Releases During Month</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Funds released this month in Rs. Millions</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">January</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(b)-1.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Expenditure During Month</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Total expenditure incurred this month in Rs. Millions</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

**Section 2 — Physical Status**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(b)-2.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Physical Highlights</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Area</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Narrative describing major physical achievements during the month</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(b)-2.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Item Description</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">E.g. Concrete Layer, Pillar Construction</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(b)-2.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unit</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Measurement unit (e.g. Cft, No.)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Nos</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(b)-2.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Quantity Achieved</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Count / volume achieved during the month</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

**Section 3 — Monthly Output Indicators**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(b)-3.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Indicator Name</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Description of the tracked metric</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Dr. Tariq Mahmood</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(b)-3.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Value Achieved</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Number/Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Result achieved for the indicator this month</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

**Section 4 — Bottlenecks & Problems**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(b)-4.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Predefined Categories</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Checkboxes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Multiple selection allowed from standard list (e.g., 'Land Acquisition', 'Procurement Problems')</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Yes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(b)-4.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Custom Bottlenecks</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Input \\+ Add button</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">User can add custom issues, which turn into selected checkboxes. Can be removed</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Domain specific input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(b)-4.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General Remarks / Action</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Area</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Narrative describing actions taken. Enabled ONLY IF at least one bottleneck is tracked/checked. Disabled and semi-transparent otherwise.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

