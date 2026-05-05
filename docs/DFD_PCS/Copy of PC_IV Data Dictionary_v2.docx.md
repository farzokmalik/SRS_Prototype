**PC \- IV Data Dictionary**

<style>@page { size: landscape; }</style>

# **Section 1 — Project Summary & Basic Identification**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-1.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project Title</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">TextAreaField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">As per PC-I.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Punjab Solar Energy Optimization Project</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(b)-1.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-8</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-1.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project ID</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Select Unique ProjectID</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PRJ-2024-0010</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(b)-1.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-8</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-1.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Administrative Department</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">List of Punjab Government Departments.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Energy Department</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-1.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Location type</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rural, Urban, Both.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rural</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.11</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-1.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">District(s)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">MultiSelect</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Geographical districts in Punjab.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Kasur</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-1.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Tehsil(s)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">MultiSelect</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Linked to Selected District(s).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Pattoki</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-1.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">NA (National Assembly)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">MultiSelect</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Linked to Selected NA(s).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">NA-113</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-1.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PP (Provincial Assembly)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">MultiSelect</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Linked to Selected PP(s).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PP-136</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-1.9</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Union Council</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">MultiSelect</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Linked to the Selected Union Council.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Township</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-1.10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Latitude</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Input (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Location Latitude</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">34.8970</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-1.11</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Longitude</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Input (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Location Longitude</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">\-45.9890</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# **Section 2 — Sectoral Classification**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-2.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sector</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Main developmental sector.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Renewable Energy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-2.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sub-sector</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Specific sub-sector within the main sector.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Solar Deployment</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# **Section 3 — Authorities Responsible For**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-3.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sponsoring Authority</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Authority responsible for project funding/proposal.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Communication & Works Department</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-3.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Executing Authority</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Authority responsible for implementation.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Communication & Works Department</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-3.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Operating / Maintaining</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Authority responsible for project after completion.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Selected Valid Option</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# 

# **Section 4 — Approval Details**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-4.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PCI</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Select</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">E.g. Origin</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Origin</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">From Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-4.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Approval Forum</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">e.g., PDWP, DDSC, CDWP, ECNEC.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">CDWP</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.23</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-4.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Finacial year</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">e.g.2021-2015</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">2024 \- 2025</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-N-1.10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-4.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Gestation Start Date</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Date)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">mm/dd/yyyy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">15-Nov-2024</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-N-9.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-4.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Gestation End Date</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Date)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">mm/dd/yyyy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">15-Dec-2024</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-N-9.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-4.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Date of Approval</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Date)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">mm/dd/yyyy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">15-Aug-2024</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-4.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Upload file</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

Section 5 \- Implementation Schedule

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-5.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">As per PC-I Start Date</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Date)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">mm/dd/yyyy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">15-Nov-2024</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-5.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">As per PC-I End Date</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Date)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">mm/dd/yyyy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">15-Dec-2024</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.14</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-5.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Actual Commencement date</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Date)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">mm/dd/yyyy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">15-Aug-2024</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-5.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Actual Completion date</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Date)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">mm/dd/yyyy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">15-Nov-2024</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.15</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-5.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Extensions Start Date</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Date)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">mm/dd/yyyy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">15-Dec-2024</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-5.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Extensions End Date</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Date)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">mm/dd/yyyy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">15-Aug-2024</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-5.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Upload file</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-5.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Total Duration</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto generated</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">E.g. 24 Months</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">E.g. 24 Months</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">From Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# 

# **Section 6 — Total Cost (PC-I Approved vs. Actual)**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-6.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Cost Kind</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Original, Revised, or Actual (as per approval).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-6.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Local — capital</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Approved capital cost for local components.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.14</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-6.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Local — revenue</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Approved revenue cost for local components.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-6.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Foreign — capital</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Approved capital cost for foreign components.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.15</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-6.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Foreign — revenue</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Approved revenue cost for foreign components.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-6.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Total Approved Cost</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">ReadOnly</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sum of all approved cost components.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">readonly</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-6.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Total (Rs.)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Actual total rupee expenditure reported.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-6.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Local — capital</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Total actual capital expenditure (Local).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-6.9</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Local — revenue</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Total actual revenue expenditure (Local).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-6.10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Foreign — capital</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Total actual capital expenditure (Foreign).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-6.11</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Foreign — revenue</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Total actual revenue expenditure (Foreign).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-6.12</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Total Actual Cost</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">ReadOnly</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sum of all reported actual expenditures.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">readonly</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-6.13</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Upload file</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# 

# **Section 7 — Implementation Schedule**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-7.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Financing of the project</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Select</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Federal, province ,etc.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">60000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-7.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Local (Rs. Million)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Enter Price</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">700000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-7.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Foreign (Rs. Million)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Enter Price, 50000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">700000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-7.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Total (Rs. Million)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Read-Only</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto Calculated.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">readonly</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# **Section 8 — Project Accounts**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-8.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PLA — Date of opening</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Date)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">mm/dd/yyyy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">15-Aug-2024</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-8.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PLA — Lapsable / Non-lapsable</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Lapsable or Non-lapsable Selection.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Selected Valid Option</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-8.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Assignment — Date of opening</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Date)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">mm/dd/yyyy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">15-Aug-2024</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-8.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Assignment — Lapsable / Non-lapsable</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Lapsable or Non-lapsable Selection.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Selected Valid Option</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-8.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Current — Date of opening</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Date)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">mm/dd/yyyy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">15-Aug-2024</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-8.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Current — Lapsable / Non-lapsable</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Lapsable or Non-lapsable Selection.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Selected Valid Option</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-8.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Saving — Date of opening</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Date)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">mm/dd/yyyy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">15-Aug-2024</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-8.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Saving — Lapsable / Non-lapsable</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Lapsable or Non-lapsable Selection.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Selected Valid Option</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-8.9</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Other — Date of opening</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Date)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">mm/dd/yyyy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">15-Aug-2024</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-8.10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Other — Lapsable / Non-lapsable</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Lapsable or Non-lapsable Selection.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Selected Valid Option</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-8.11</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Closed Status</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">TextArea</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">If closed, mention the date.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-8.12</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Pending Closure</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">TextArea</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">If not closed, mention reasons and tentative closure date.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# **Section 9 — Financial Phasing & Expenditure**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-9.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Year / Phase</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">e.g. 2024-25</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">2024-2025</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-9.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Object Code</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">e.g. To Others</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">A01101</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-9.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I Phasing — Local</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Local component as per PC-I (Rs. Million).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.14</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-9.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I Phasing — Foreign</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Foreign component as per PC-I (Rs. Million).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.15</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-9.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">ADP Allocation — Local</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Local component allocation (Rs. Million).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(a)-1.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-9.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">ADP Allocation — Foreign</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Foreign component allocation (Rs. Million).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(a)-1.9</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-9.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">P\&D Releases — Local</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Local funds released by P\&D (Rs. Million).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-9.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">P\&D Releases — Foreign</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Foreign funds released by P\&D (Rs. Million).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-9.9</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Controlling Releases — Local</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Local funds released by Controlling Office (Rs. Million).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-9.10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Controlling Releases — Foreign</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Foreign funds released by Controlling Office (Rs. Million).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-9.11</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Expenditure — Local</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Actual local expenditure (Rs. Million).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-9.12</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Expenditure — Foreign</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Actual foreign expenditure (Rs. Million).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-9.13</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Lapsable Funds — Local</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Local funds that lapsed (Rs. Million).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-9.14</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Lapsable Funds — Foreign</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Foreign funds that lapsed (Rs. Million).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-9.15</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Total</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto-Generated</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto-Generated</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">readonly</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# **Section 10 — Physical Targets & Achievements**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-10.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Items</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Description as per PC-I.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Domain specific input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-10.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unit</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">e.g., Nos, KM, SQFT.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Nos</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(a)-2.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-10.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Quantity</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Target quantity.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-III(a)-2.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-8</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-10.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Actual Achievements</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Select</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Fully achieved, Partially, Not achieved, In progress, N/A.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-10.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Remarks</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Explanation for achievement status.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-10.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Attachments</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">FileUpload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Supporting documents for physical progress.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# **Section 11 — Item-wise Planned & Actual Expenditure**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-11.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Items</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Item description as per PC-I.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Domain specific input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-11.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Object Code</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Select</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">A09201, A09202, A09203, A09204, A09205, etc.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">A01101</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.12</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-11.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I Estimates — Local</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Estimated local cost (Rs. Million).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.14</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-11.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I Estimates — FEC</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Estimated Foreign Exchange Component (Rs. Million).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.15</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-11.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Actual Expenditure — Local</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Actual local spend (Rs. Million).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-11.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Actual Expenditure — FEC</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Actual FEC spend (Rs. Million).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-11.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Total</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto-Generated</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto-Generated</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">readonly</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# **Section 12 — Recurring Cost After Completion**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-12.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Management Structure</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">RichTextEditor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manpower requirements information.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-12.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Recurring Component</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Description (e.g. A05270).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Domain specific input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-12.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Cost Estimates (PC-I) — Local</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Estimated Local cost (Rs. Million).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-8.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-8</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-12.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Cost Estimates (PC-I) — FEC</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Estimated FEC (Rs. Million).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-8.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-12.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Cost Actuals — Local</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Actual Local cost (Rs. Million).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-12.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Cost Actuals — FEC</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Actual FEC (Rs. Million).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-12.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Total</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto-Generated</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto-Generated</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">readonly</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# **Section 13 — Achievement of Objectives**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-13.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Objectives (PC-I)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">TextArea</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Objectives as contained in the original PC-I.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-5.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-8</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-13.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Achievement Result</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">TextArea</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Detailed description of actual achievement.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# **Section 14 — Year-wise Income Generation**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-14.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Estimated Income</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">TextArea</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Income from services/revenue as estimated in PC-I.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.28</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-8</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-14.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Actual Income</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">TextArea</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Actual income generated after completion.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# **Section 15 — Result Based Monitoring (RBM)**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-15.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">TextArea</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Resources used for the project.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-15.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Output</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">TextArea</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Direct results produced.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-15.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Baseline Indicators</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Starting point metrics.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Domain specific input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-15.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Future Targets</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Targets to be achieved after project completion.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-15.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Target Impact</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">TextArea</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Broader effect of the project outcomes.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-15.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Supporting Evidence</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">FileUpload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Evidence for RBM results.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# **Section 16 — Project Directors History**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-16.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Name & Designation</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">TextArea</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PD identification since inception.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Dr. Tariq Mahmood</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-16.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Role Duration — From</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Date)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Start date of the role stay.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">10-Oct-2024</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-16.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Role Duration — To</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Date)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">End date of the role stay.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">10-Oct-2024</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-16.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Current Status</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Checkbox</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Is currently in the PD role (Present).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Yes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# **Section 17 — Asset Ownership & Responsibilities**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-17.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Indicate agency</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Select</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Agency owning the asset.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Communication & Works Department</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-17.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Item</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Name of the asset.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Domain specific input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-17.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Description</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Typology/Make of the asset.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Domain specific input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-17.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Specification</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">TextArea</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Detailed technical specs.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-17.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Physical Location</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">TextArea</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Precise location where asset is deployed.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-2.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-17.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unit</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Measurement unit.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Nos</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-17.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Quantity</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number) of items.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-17.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Cost (Rs.)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Individual cost (Rs.).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-17.9</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Total Value (Rs.)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">ReadOnly</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Qty  Cost (Rs.).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">readonly</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# **Section 18 — Post-Completion Impact**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-18.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Financial Impact</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">RichTextEditor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Monetary effects of the project.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-18.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Economic Impact</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">RichTextEditor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Broader economic contributions.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-8</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-18.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Social Impact</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">RichTextEditor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Health, Education, Employment effects.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-18.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Environment Impact</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">RichTextEditor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Ecological considerations.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-18.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Technological</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">RichTextEditor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Tech advancement/innovation.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-18.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Any Other</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">RichTextEditor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Miscellaneous impacts.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-18.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Attachment(s)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">FileUpload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Upload relevant file</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# **Section 19 — Sustainability Mechanism**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-19.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustainability Plan</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">RichTextEditor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Mechanism for sustainability of activities after completion.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-19.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Evidence</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">FileUpload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Supporting sustainability docs.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# 

# **Section 20 — Economic & Financial Analysis**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-20.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">NPV As per PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Select</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Agency accountable for the asset.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Selected Valid Option</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-11.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-20.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">NPV After completion</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Name of the asset.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Domain specific input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-20.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">BCR As per PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Typology/Make of the asset.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Domain specific input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-11.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-20.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">BCR After completion</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">TextArea</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Detailed technical specs.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-20.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">IFRR As per PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">TextArea</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Precise location where asset is deployed.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-11.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-20.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">IFRR After completion</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Measurement unit.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Domain specific input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-20.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unit cost analysis As per PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Number of items.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-8</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-20.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unit cost analysis After completion</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Individual cost (Rs.).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

**Economic**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-20.9</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">NPV As per PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Select</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Agency accountable for the asset.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Selected Valid Option</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-20.10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">NPV After completion</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Name of the asset.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Domain specific input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-20.11</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">BCR As per PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Typology/Make of the asset.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Domain specific input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-20.12</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">BCR After completion</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">TextArea</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Detailed technical specs.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-20.13</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">IFRR As per PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">TextArea</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Precise location where asset is deployed.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-20.14</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">IFRR After completion</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Measurement unit.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Domain specific input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# **Section 21 — Impact Evaluation**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-21.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Org. Management</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">RichTextEditor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Managerial performance evaluation.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-21.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Dept. Capacity</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">RichTextEditor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Capacity of the department concerned.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-21.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Decision Making</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">RichTextEditor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Effectiveness of processes.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-21.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Any Other</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">RichTextEditor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Effectiveness of processes.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-21.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Attachment(s)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">FileUpload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Upload relevant file</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# **Section 22 — Implementation Analysis**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-22.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Identification</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">RichTextEditor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Analysis of project identification.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-22.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Preparation</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">RichTextEditor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Analysis of project preparation/design.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-22.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Approval</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">RichTextEditor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Analysis of the approval process.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-22.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Financing</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">RichTextEditor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Analysis of fund arrangements.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-22.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Implementation</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">RichTextEditor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Analysis of execution efficiency.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-22.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Attachment(s)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">FileUpload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Upload relevant file</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# **Section 23 — Suggestions & Economic Analysis**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-23.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Future Lessons</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">RichTextEditor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Suggestions for future planning/implementation.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-23.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Attachment(s)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Upload Relevant file</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# **Section 24 — Certificate & Focal Person**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-24.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Focal Person Name</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Full name of the responsible officer.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Dr. Tariq Mahmood</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-24.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Designation</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Official rank.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project Director</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-24.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Email</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Email)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Official contact email.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">tariq@punjab.gov.pk</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-24.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Tel. No.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Telephone contact InputField (Number).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">\+92-42-99000000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-24.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Fax No.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Fax contact InputField (Number).</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">\+92-42-99000000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-24.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Address</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">TextArea</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Full postal address.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Energy Secretariat, Lahore</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-24.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Attachment(s)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">FileUpload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General supporting documents.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-24.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Annexure(s)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">FileUpload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project annexures.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

# **Section 25 — Project Appraisal Documentation**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-25.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">MoMs of Approval Forum — Title</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Descriptive title for meeting minutes.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">CDWP</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-25.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">MoMs of Approval Forum — Attachment</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">FileUpload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Supporting document for minutes.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">CDWP</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-25.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Administrative Approval — Title</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Descriptive title for approval letter.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Domain specific input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-25.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Administrative Approval — Attachment</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">FileUpload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Supporting document for administrative approval.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-25.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Issuance Letter — Title</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Descriptive title for final issuance.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Domain specific input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-IV-25.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Issuance Letter — Attachment</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">FileUpload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Supporting document for issuance letter.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

