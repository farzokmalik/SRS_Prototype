# **PC-I Data Dictionary**

<style>@page { size: landscape; }</style>

**Section 1 — General Information / Overview**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project Title</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Full formal name of the project</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Punjab Solar Energy Optimization Project</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.1 (← PC-N-1.1)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-N-1.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-4</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project ID</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Select Unique ProjectID</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PRJ-2024-0010</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.2 (← PC-N-1.2)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-N-1.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-4</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Meta Tags</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Search keywords (e.g., Infrastructure, Health)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Solar Energy, Punjab</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project Start Year</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Financial year (e.g., '2023-2024')</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">2024-2025</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.4 (← PC-N-10.1)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-N-10.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Start Date</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Date Picker</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Specific calendar date</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">01-Jul-2024</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.5 (← PC-N-9.1)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-N-9.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">End Date</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Date Picker</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Specific calendar date</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">30-Jun-2026</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.6 (← PC-N-9.2)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-N-9.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">GS No.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Official GS designation (e.g., GS-2024-X10)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">GS-24-X999</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Administrative Department</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'School Education Department', 'Health Department', etc.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Energy Department</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.9</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Main Sector</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Broad category ('Social Sectors', 'Infrastructure', etc.)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Renewable Energy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.9</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sector</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sub-category dependent on Main Sector</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Renewable Energy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.11</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Location Type</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Radio Buttons</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Rural', 'Urban', or 'Both'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rural</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.11</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-4</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.12</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project Status</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Approved', 'Unapproved', or 'Dropped'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Approved</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.12</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.13</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project Status Type</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Multi-Checkbox</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Multiple select ('Flagship', 'PPP', 'PM Package', etc.)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Flagship</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.13</td>
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
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.13</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Foreign Funding</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Radio Buttons</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Yes' or 'No'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Yes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.14</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.14</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Foreign Exchange Component (FEC)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Required if Foreign Funding is Yes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.15</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Foreign Cost</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Value in Millions</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.15 (auto-calculated)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-4</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.16</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Foreign Capital Cost</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Value in Millions</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.16</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.17</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Foreign Revenue Cost</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Value in Millions</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.17</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.18</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Source of Currency</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Organization or country name</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">USD</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.18 (Source of Foreign Funding)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.19</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Exchange Rate</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Numerical rate applied</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">280.50</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.21</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.20</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project Financial Components</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Capital', 'Revenue', or 'Both'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.22</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.21</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Local Cost (PKR)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Value in Millions</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.24 \+ PC-II-1.25</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-4</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.22</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Approval Forum</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'DDSC', 'CDWP', or 'PDWP'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">CDWP</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.26</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.23</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Total Cost (PKR)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Combined final cost in Millions</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.27</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-4</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.24</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Financial Attachments</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Supporting documents (PDF/JPG)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">New upload in PC-I</td>
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
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.25</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Admin Department</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Official sector/department name</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Energy Department</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.28</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.26</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Beneficiary Name</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Title of the beneficiary entity</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Local Farmers, Rural Communities</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.29</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-1.27</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Amount (Million)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Value of their financial share</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.30</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

**Section 2 — Location**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-2.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Division</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">All divisions of Punjab</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Lahore</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-N-5.1 / PC-N-5.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-2.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">District</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Dependent on selected Division</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Kasur</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-N-5.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-4</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-2.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">National Assembly (NA) Seat</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">NA-120 to NA-139</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">NA-130</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-2.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Provincial Assembly (PP) Seat</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PP-140 to PP-159</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">NA-130</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-2.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Latitude (GPS)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">GPS coordinate</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">31.52037</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-2.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Longitude (GPS)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">GPS coordinate</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">31.52037</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-2.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Map URL</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Link to Google Maps or GIS</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">https://maps.google.com/...</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-2.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Location Attachment</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Layout Plan or Map document</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.9 (re-upload)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

**Section 3 — Authorities Responsible**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-3.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sponsoring Agency</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Agency leading / initiating the project</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Communication & Works Department</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.11</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-3.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Executing Agency</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Agency doing the physical work</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Communication & Works Department</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-3.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Federal Ministry (if any)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Applicable Ministry or 'None'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Selected Valid Option</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-3.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Operation & Maintenance Agency</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Entity responsible after project completion</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Communication & Works Department</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-3.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Agency Attachments</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Formal letters, delegation of power documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Communication & Works Department</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.12</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

**Section 4 — Funding / Plan Provision**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-4.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Source of Funding</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Scheme Listed in ADP', 'Re-appropriation', or 'Other'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">World Bank</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-3.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-4.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">GS No. Search</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input \+ Search Button</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto-fills scheme data if ADP is selected</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">readonly</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-3.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-4.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SMDP Scheme No</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto-filled (Read-only)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">System-fetched tracking number</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Domain specific input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-3.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-4.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Total Allocation</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto-filled (Read-only)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">System-fetched amount in Millions</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-3.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-4</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-4.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Re-appropriation Type</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Radio Buttons</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Inter-Sectoral' or 'Intra-Sectoral'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Yes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-4.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Proposed Allocation</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Requested amount in Millions</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-3.9</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-4.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Purpose of Funding</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Radio Buttons</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Pending Liability', 'Court Case', or 'Sub-Scheme'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Yes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-3.10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-4.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Comments</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Long-form narrative, formatting supported</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-3.11</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

**Section 5 — Project Objectives**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-5.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project Objective</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Primary goals with full formatting</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-4.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-4</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-5.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Attachments</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Formal objective documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">New upload in PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-5.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Additional supporting evidence</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">New upload in PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

**Section 6 — Description and Justification**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-6.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Justification of Project</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Detailed rationale for the project</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-5.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-6.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Objective Attachments</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Documents supporting justification</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-5.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-6.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Objective Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Additional justification proofs</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-5.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-6.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sectoral Specific Information</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">How this project impacts the sector</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Renewable Energy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-5.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-6.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sectoral Attachments</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sector-specific supporting documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Renewable Energy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-5.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-6.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sectoral Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Additional sector proofs</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Renewable Energy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">New upload in PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

**Section 7 — Cost Estimates & WBS**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Hierarchy Level</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto-generated</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">System depth indicator (e.g., 1.2.1)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Domain specific input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I (WBS)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Item Title</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Inline Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Name of the work breakdown component</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I (WBS)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-4</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Item Type</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Action Toggle</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Summary Area' (folder) or 'Work Package' (detail)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Domain specific input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I (WBS)</td>
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
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Financial Component</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Capital' or 'Revenue'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Grant Number</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Designated Grant (e.g., PC21015 \- Education)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC21015</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Cost Center</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Geographical admin center (e.g., LH4001)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">LO No.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Liability/Tracking reference number</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">LO-98765</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Funding Cost Type</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Local Cost', 'Foreign Cost', or 'Mixed'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.9</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Fund Center</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Financial controlling center code</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">A/C To Be Credited</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Cash in Hand' or 'Bank Account'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Bank Account</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.11</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Function Code</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Official government accounting code</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">A01101</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.9</td>
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
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.12</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Object Code</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Searchable SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Standard code (e.g., A01101 \- Basic Pay)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">A01101</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-4</td>
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
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.13</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Target Year</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Financial year from 2024-2025 to 2028-2029</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">2024-2025</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.11</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.14</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Local Cost Estimate</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Projected amount in PKR (Millions)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.11</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-4</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-7.15</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Foreign Cost Estimate</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Projected amount in USD (Millions)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.11</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-4</td>
        </tr>
    </tbody>
</table>

**Section 8 — Annual Operating Cost (Post Completion)**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross ReferenceScenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-8.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Grant Number</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Designated Grant</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC21015</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-8.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Cost Center</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Administrative Cost Center</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-8.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">LO No.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Liability/Tracking reference</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">LO-98765</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-8.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Running Cost Type</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Local Cost' or 'Foreign Cost'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-8.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Fund Center (Controlling)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Financial control center code</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
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
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-8.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Target Year</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Up to 5 years maximum</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">2024-2025</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-8.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Local Cost Estimate</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PKR projection</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-4</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-8.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Foreign Cost Estimate</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">USD projection</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-4</td>
        </tr>
    </tbody>
</table>

**Section 9 — Demand & Supply Analysis**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-9.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Analysis Content</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Full demand vs supply narrative</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-9.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Attachments</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Formal analysis reports</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-9.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Additional supporting documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

**Section 10 — Financial Plan and Mode of Financing**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-10.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Equity Information</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Equity structure description</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-10.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Equity Attachments / Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Supporting equity documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-10.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Debt Information</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Debt structure description</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-10.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Debt Attachments / Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Supporting debt documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-10.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Grant Information</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Grant details and disbursement</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-10.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Grant Attachments / Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Supporting grant documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-10.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Weighted Cost of Capital</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">WACC analysis narrative</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-10.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">WACC Attachments / Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Supporting WACC documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

**Section 11 — Project Benefits and Analysis**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-11.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Social Benefits</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Impact on community and society</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-11.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Social Attachments / Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Supporting social documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-11.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Environmental Impact Analysis</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Environmental consequences</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-11.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Environmental Attachments / Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Supporting environmental reports</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-11.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Economic Analysis</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Macro economic impact</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-11.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Economic Attachments / Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Supporting economic documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-11.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Financial Analysis</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Return on investment analysis</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-4</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-11.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Financial Attachments / Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Supporting financial documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

**Section 12 — Implementation Schedule**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-12.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Implementation Schedule Details</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Timeline and milestone overview</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-12.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Schedule Attachments / Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Gantt charts, timeline documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-12.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Result-Based Monitoring Indicators</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">KPIs and measurable targets</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-12.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Monitoring Attachments / Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Monitoring plan documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-12.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Implementation Plan</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Step-by-step execution strategy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-9.1 (Activities / Impl. Plan – partial)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-12.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Plan Attachments / Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Phased plan documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-12.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">M\&E Plan</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Monitoring & Evaluation framework</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-12.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">M\&E Attachments / Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">M\&E framework documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-12.9</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Risk Mitigation Plan</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Identified risks and responses</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-8.4 (Risk & Sensitivity – partial)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-12.10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Risk Attachments / Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Risk register documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-12.11</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Procurement Plan</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Purchasing and tender schedule</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-12.12</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Procurement Attachments / Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Procurement plan documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

**Section 13 — Management Structure & Manpower**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-13.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Management Overview</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Hierarchy narrative and general requirements</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-11.1</td>
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
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-13.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Designation</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Official job title</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project Director</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-11.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-13.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">No. of Posts</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Number of staff required</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-11.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-13.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Job Description</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Area</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Key roles and responsibilities</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-11.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-13.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Qualifications</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Area</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Minimum degree/certification required</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">MSc Renewable Energy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-11.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-13.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Skills</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Area</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Technical / soft skills needed</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PMP, SAP</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-11.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-13.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Experience</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Years of relevant experience</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-11.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-13.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Age Limit</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Maximum/minimum age requirement</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-13.9</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Salary</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Monthly pay in PKR</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">250000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-11.10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-13.10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Employment Type</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Permanent', 'Contract', or 'Daily Wages'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Selected Valid Option</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

**Section 14 — Additional Projects / Decisions Required**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-14.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Scheme Filter</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Radio Buttons</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Existing Scheme' or 'New Scheme'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Yes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-10.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-14.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Scheme Search</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input \+ Search Button</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Lookup scheme by GS No. or name</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-10.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-14.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Decision Requirement Details</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">What action or project is needed</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-10.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-14.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Attachments / Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Supporting decision documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-10.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

**Section 15 — Certificate**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-15.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Focal Person Name</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Name of the responsible officer</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Dr. Tariq Mahmood</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-15.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Designation</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Officer's official title</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project Director</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-15.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Email Address</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Email Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Valid official email</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">tariq.mahmood@example.gov.pk</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-15.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Telephone No.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Contact number</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">\+92-42-99000000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-15.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Fax No.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Fax number</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">\+92-42-99000000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-15.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Physical Address</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Department location</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Energy Secretariat, Lahore</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-15.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Signed Certificate Document</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Signed off by Secretary / Chief Engineer</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

**Section 16 — Checklist for Initial Scrutiny**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-16.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Requirement Criteria</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">System Displayed</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Pre-defined list (e.g., "Signature of Admin Secretary")</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">readonly</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-13.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-16.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Status</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Radio Buttons</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Yes' or 'No'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Yes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-13.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-16.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Page Reference</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Document page where proof appears</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-13.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

**Section 17 — Relation With Other Projects**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-17.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Scheme Filter</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Radio Buttons</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Existing Scheme' or 'New Scheme'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Yes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-17.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Linked Scheme Search</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input \+ Button</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Search for the related project by GS No.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-17.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Attachments / Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Relationship justification documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

**Section 18 — Project Appraisal and Documentation**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-18.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Appraisal Category</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Working Papers', 'Pre MOMs', 'MOMs', 'Admin Approval', 'Others'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Selected Valid Option</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-14.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-18.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Document Title</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Name of the submitted document</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-14.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-18.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Appraisal Document</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Final PDF/document for appraisal</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-14.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

**Section 19 — Focus on Marginalisation**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-19.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Criteria Statement</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">System Displayed</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Predefined social metric question</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">readonly</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-19.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Applies to Project?</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Radio Buttons</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Yes' or 'No'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Yes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-19.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Required Action</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Select the expected response action</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Selected Valid Option</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-19.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Comments / Justification</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Area</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Mandatory. Why it applies or doesn't</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

**Section 20 — Upward Revision of Development Project**

<table style="border-collapse: collapse; width: 100%; font-family: Calibri, sans-serif; font-size: 10pt; border: 1px solid #8497B0;">
    <thead>
        <tr style="background-color: #D9E1F2; font-weight: bold; border: 1px solid #8497B0;">
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Sr. No.</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Information Required</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Input Component</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Expected Data / Business Rules</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Example</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Revision Status</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Original', '1st Revised', '2nd Revised', etc.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Selected Valid Option</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Revised Cost</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Final approved cost in Millions</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Approval Date</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Date Picker</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Date the revision was authorized</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">10-Oct-2024</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Approval Forum</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'PDWP', 'CDWP', 'ECNEC', etc.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">CDWP</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Remarks</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Brief contextual note</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
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
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Financial Year</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'2023-2024' to '2032-2033'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">2024-2025</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">GS No.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Linked tracking ID</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">GS-24-X999</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Original Allocation</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Initial approved budget</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.9</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Revised Allocation</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Adjusted budget</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">P\&D Releases</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Funds released by P\&D</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.11</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">FD Releases</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Funds released by Finance Dept.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.12</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Fund Utilization</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Funds actually spent</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.13</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Expenditure %</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Percentage of budget utilized</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
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
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario A(PC-II filled)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Cross Reference Scenario B(PC-II skipped)</th>
            <th style="border: 1px solid #8497B0; padding: 8px; text-align: left;">Data Flow</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.14</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Reason for Revision</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">System Displayed</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Preset reasons (MRS Rates, Scope increase, Both)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">readonly</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.15</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Reason Applies?</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Radio Buttons</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Yes' or 'No'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Yes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.16</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Cost Impact of Reason</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Financial impact in Millions</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.17</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Approved Scope (Per Item)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Area</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Original approved parameter</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.18</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Revised Scope (Per Item)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Area</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">New proposed parameter</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.19</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Scope Increase Detail</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Area</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">The delta/difference</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.20</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Justification for Increase</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Area</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Official rationale</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.21</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Quantitative Details</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Physical scope narrative</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.22</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Site Map Attachments</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Layout/site maps</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.23</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Future Funding Year</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Target financial year</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">2024-2025</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.24</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Future Funding Allocation</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Required funds in Millions</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.25</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Implementation Period (Approved)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Original duration in months</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.26</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Implementation Period (Revised)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">New proposed duration in months</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.27</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">O\&M Post Completion</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Area</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Maintenance responsibility narrative</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.28</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Annual Income After Completion</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Revenue projections narrative</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-4</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.29</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Recommendation / Approval Notes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Statement of formal recommendation</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-I-20.30</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General Revision Attachments</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Presentations, briefs, other supporting docs</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Unique to PC-I</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
    </tbody>
</table>

