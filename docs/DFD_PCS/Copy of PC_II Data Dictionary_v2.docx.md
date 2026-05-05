# **PC-II Data Dictionary**

<style>@page { size: landscape; }</style>

**Section 1 — Project Overview & Basic Information and Cost & Approval Details**

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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project Title</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Full formal name of the project</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Punjab Solar Energy Optimization Project</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-N-1.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project ID</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Select Unique ProjectID</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PRJ-2024-0010</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-N-1.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Meta Tags</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Search keywords / tags (e.g., Feasibility, Survey, Research)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Solar, Energy, Punjab</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project Start Year</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Financial year (e.g., '2023-2024')</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">2024-2025</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-N-10.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Start Date</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Date Picker</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Specific calendar date</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">01-Jul-2024</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">End Date</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Date Picker</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Specific calendar date</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">30-Jun-2026</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">GS No.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Official GS designation (e.g., GS-2024-X10)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">GS-24-X999</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Administrative Department</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'School Education Department', 'Health Department', etc.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Energy Department</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.9</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Main Sector</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Broad category ('Social Sectors', 'Infrastructure', etc.)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Renewable Energy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sector</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sub-category dependent on Main Sector</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Renewable Energy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.11</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Location Type</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Radio Buttons</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Rural', 'Urban', or 'Both'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rural</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.12</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project Status</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Approved', 'Unapproved', or 'Dropped'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Approved</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.13</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project Status Type</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Multi-Checkbox</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Multiple select ('Programme', 'Flagship/Mega Project', 'PPP', etc.)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Flagship</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.14</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Foreign Funding</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Radio Buttons</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Yes' or 'No'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Yes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.15</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Foreign Cost (PKR)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto-calculated</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto-calculated from foreign cost fields</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">readonly</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.16</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Foreign Capital Cost</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Required if Foreign Funding is Yes and Capital/Both selected</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.17</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Foreign Revenue Cost</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Required if Foreign Funding is Yes and Revenue/Both selected</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.18</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Source of Foreign Funding</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Required if Foreign Funding is Yes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Yes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.19</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Currency</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Foreign Currency</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">USD</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.20</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Percentage</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Percentage of foreign funding</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.21</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Exchange Rate</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Exchange Rate</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">280.50</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.22</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project Financial Components</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Capital', 'Revenue', or 'Both'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.23</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Local Cost (PKR)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto-calculated</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto-calculated from local cost fields & beneficiaries</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">readonly</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.24</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Local Capital Cost (PKR)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Local capital cost in Millions</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.25</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Local Revenue Cost (PKR)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Local revenue cost in Millions</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.26</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Approval Forum</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'DDSC', 'CDWP', or 'PDWP'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">CDWP</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.27</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Total Cost (PKR)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto-calculated</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Calculated from all cost fields & beneficiaries</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.28</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Admin Department</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Official sector / department name</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Energy Department</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.29</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Beneficiary Name</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Title of the beneficiary entity</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Local Farmers, Rural Communities</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.30</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Amount (Million)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Value of their financial share in Millions</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-1.31</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Financial Attachments</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Relevant cost documents, budgets, and estimates</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Division</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">All divisions of Punjab</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Lahore</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-N-9.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">District</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Dependent on selected Division</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Kasur</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-N-9.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">National Assembly (NA) Seat</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">NA-51 to NA-100</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">NA-130</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Provincial Assembly (PP) Seat</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PP-1 to PP-50</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">NA-130</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Union Council</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">UC-1 to UC-30</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">UC-12</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Latitude (GPS)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">GPS coordinate</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">31.52037</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Longitude (GPS)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">GPS coordinate</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">31.52037</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Map URL</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Link to Google Maps or GIS</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">https://maps.google.com/...</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.9</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Location Attachment(s)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Layout Plan or Map document</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Executing Agency</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Agency performing the work (e.g. PITB, C\&W)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Communication & Works Department</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.11</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sponsoring Agency</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Agency initiating the project (e.g. School Education, Health)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Communication & Works Department</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-2.12</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Agency Attachment(s)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Upload relevant agency documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Communication & Works Department</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-3.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Source of Funding</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">e.g., 'Scheme Listed in ADP CFY', 'Re-appropriation (Intra-Sectoral)'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">World Bank</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-3.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Search for GS No.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input \+ Search</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Search for GS No., auto-populates scheme details if applicable</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">readonly</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-3.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SMDP Scheme No</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto-filled (Read-only)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">System-fetched tracking number</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Domain specific input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-3.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Total Allocation</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto-filled (Read-only)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">System-fetched amount in Millions</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-3.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Funds Diverted</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto-filled (Read-only)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Fetched if applicable for given source</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Domain specific input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-3.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Balance Funds</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto-filled (Read-only)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Fetched if applicable for given source</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Domain specific input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-3.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Scheme Name</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto-filled (Read-only)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Fetched if applicable for given source</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Dr. Tariq Mahmood</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-3.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sector</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Required if Inter-Sectoral Re-appropriation</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Renewable Energy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-3.9</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Proposed Allocation</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Required if Scheme Proposed for Next ADP</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-3.10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Purpose of Funding</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Radio Buttons</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Pending Liability', 'Court Case', or 'Sub Scheme' if Programme</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Yes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-3.11</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Comments</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Long-form narrative</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-4.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project Objective</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Detailed objective for the project</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-4.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sectoral Attachments / Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">objective-specific supporting documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Renewable Energy</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-5.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Justification of Project</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Detailed rationale for the project</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-5.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Justification Attachments</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Documents supporting justification</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-5.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Justification Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Additional justification proofs</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-5.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Scope of the Project</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Scope narrative</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-5.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Scope Attachments / Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Supporting scope documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-5.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sectoral Specific Information</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sector-specific narrative</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Renewable Energy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-5.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sectoral Attachments / Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sector-specific supporting documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Renewable Energy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Local Cost & Remaining Cost</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto-generated</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Read-only cards tracking unallocated cost compared to Section 1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">readonly</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Financial Components</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Capital' or 'Revenue'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Grant Number</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Designated Grant (e.g., PC21015 \- Education)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PC21015</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Cost Center</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Geographical admin center (e.g., LH4001)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">LO No.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Liability/Tracking reference number</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">LO-98765</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Funding Cost Type</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Local Cost' or 'Foreign Cost'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">5000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Fund Center (Controlling)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Financial controlling center code</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">A/C To Be Credited</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Account-I to Account-IV</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Bank Account</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.9</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Function Code</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Official government accounting code</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">A01101</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Search Object Code</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Auto-suggest SelectField</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Search and add specific object codes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">A01101</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-6.11</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Plan Local Cost / Foreign Cost by Year</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number) grids</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Year-by-year cost array matching project duration</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">2024-2025</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-7.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Brief Background of the Project</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Background details</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-7.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Objectives of Consultancy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Target outcomes of study</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-7.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Scope of Consultancy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Defined limits of the consultant's work</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">This project will solve energy scarcity in 5 remote villages through 10MW solar fields.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-7.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Duties and Responsibilities of Consultants</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Narrative on duties</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-7.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Roles of Client Agency</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Contributions of client agency</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Communication & Works Department</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-7.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Professional Liabilities of Consultants</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Limitations & liability info</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-7.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Time Duration of Proposed Consultancy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Timeframes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-7.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Attachments & Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Uploads</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">A set of File Uploads for each of the fields above</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-8.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Deliverables with Timelines</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Deliverable schedule</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-8.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Core Team of Experts (Quals/Exp/Man-Months)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Requirements for the core team</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-8.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Possibility of Prospective Project Financing</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Financing mode plans</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-8.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Risk and Sensitivity Analysis / Mitigation</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Risk management details</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-8.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Forward Backward Linkages</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Linkages info</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-8.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Expected Output of Feasibility Study</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Goals of the study</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-8.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Attachments & Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Uploads</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">A set of File Uploads for each of the fields above</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-9.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Activities / Implementation Plan</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Full context / description</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-9.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Attachments</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Activity and implementation plan documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-9.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Supporting annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-10.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Scheme Filter</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Radio Buttons</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Existing Schemes' or 'New Schemes'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Yes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-10.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Search / Add Schemes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Selection Interface</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Adds specific Scheme IDs to tracked list</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Selected Valid Option</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-10.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Studies / Surveys Text</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Narrative details of prior studies</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-10.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Attachments / Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Supporting documents / proofs</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-11.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Management Structure / Manpower</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Rich Text Editor</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Includes downloadable Sample Responsibility Matrix</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-11.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Attachments / Annexures</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Documents</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-11.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">No. of Posts</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Team size</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-11.4</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Designation</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Official job title</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Project Director</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-11.5</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Job Description</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Key roles</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-11.6</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Qualifications</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Degrees / certifications</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">MSc Renewable Energy</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-11.7</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Skills</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Specific competencies</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">PMP, SAP</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-11.8</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Experience</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Years expected</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-11.9</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Man Month</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Engagement duration</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">42</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Sustained</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-11.10</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Salary</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">InputField (Number)</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Monthly pay</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">250000</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-13.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Requirement Criteria</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">System Displayed</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Pre-defined checklist items (e.g., "Signature of the Admin. Sec.")</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">readonly</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-13.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Status</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Radio Buttons</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Yes' or 'No'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Yes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-13.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Paging</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">If 'Yes', document page reference where proof appears</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">General narrative text entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
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
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-14.1</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Category</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DropDown</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">“Working Papers”, ”Pre MOMs”, etc.</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Selected Valid Option</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-14.2</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Document Title</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Text Input</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">'Yes' or 'No'</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Yes</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
        <tr style="border: 1px solid #8497B0;">
            <td style="border: 1px solid #8497B0; padding: 8px;">PC-II-14.3</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Appraisal Document</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">File Upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Document upload</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">project\_scope.pdf</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">Manual Entry</td>
            <td style="border: 1px solid #8497B0; padding: 8px;">DF-3</td>
        </tr>
    </tbody>
</table>

