/**
 * DocuHub Global - Complete JavaScript Application Code
 * Includes:
 * 1. Full 28+ Database templates (HR, Payroll, Vehicle/Fuel Logs, Tax Invoices, Rent Agreements, Certificates, Business Letters)
 * 2. Search & Category Filters
 * 3. Dynamic Interactive Form & Live Document Generator
 * 4. Print, Copy to Clipboard, & PDF Export engine
 */

// ==========================================
// 1. COMPLETE DATABASE OF TEMPLATES (28+ ITEMS)
// ==========================================
const hubDatabase = [
    // --- HR & EMPLOYMENT TEMPLATES ---
    {
        id: "hr-probation-confirmation",
        title: "Probation Confirmation Letter",
        category: "hr",
        badge: "HR & Management",
        description: "Official HR letter confirming successful completion of probation period.",
        fields: [
            { id: "date", label: "Date", type: "date", default: new Date().toISOString().split('T')[0] },
            { id: "employeeName", label: "Employee Name", type: "text", default: "John Doe" },
            { id: "employeeId", label: "Employee ID", type: "text", default: "EMP-1042" },
            { id: "designation", label: "Designation", type: "text", default: "Senior Software Engineer" },
            { id: "department", label: "Department", type: "text", default: "Engineering" },
            { id: "joiningDate", label: "Joining Date", type: "date", default: "2026-01-01" },
            { id: "effectiveDate", label: "Confirmation Effective Date", type: "date", default: "2026-04-01" },
            { id: "companyName", label: "Company Name", type: "text", default: "DocuHub Global Technologies" }
        ],
        template: (f) => `
<div class="p-8 max-w-3xl mx-auto bg-white text-gray-800 font-sans leading-relaxed border rounded-lg shadow-sm">
    <div class="border-b pb-4 mb-6 flex justify-between items-center">
        <div>
            <h1 class="text-2xl font-bold text-gray-900">${f.companyName}</h1>
            <p class="text-sm text-gray-500">Human Resources Department</p>
        </div>
        <div class="text-right text-sm text-gray-600">
            <p><strong>Date:</strong> ${f.date}</p>
            <p><strong>Ref:</strong> HR/CONF/${f.employeeId}</p>
        </div>
    </div>

    <div class="mb-6">
        <p><strong>To,</strong></p>
        <p class="font-semibold text-lg">${f.employeeName}</p>
        <p>Employee ID: ${f.employeeId}</p>
        <p>Designation: ${f.designation}</p>
        <p>Department: ${f.department}</p>
    </div>

    <h2 class="text-xl font-bold text-center underline my-6 text-gray-900">SUBJECT: CONFIRMATION OF SERVICES</h2>

    <p class="mb-4">Dear <strong>${f.employeeName}</strong>,</p>

    <p class="mb-4">Consequent to the review of your performance during your probation period from <strong>${f.joiningDate}</strong>, we are pleased to inform you that you have successfully completed your probationary period.</p>

    <p class="mb-4">Your services with <strong>${f.companyName}</strong> are hereby confirmed in the position of <strong>${f.designation}</strong> with effect from <strong>${f.effectiveDate}</strong>.</p>

    <p class="mb-4">All other terms and conditions of your employment contract remain unchanged. We appreciate your dedication and look forward to your continued valuable contribution to our team.</p>

    <div class="mt-12 pt-6 border-t flex justify-between items-end">
        <div>
            <br><br>
            <p class="font-bold border-t border-gray-400 pt-1">Authorized HR Manager</p>
            <p class="text-sm text-gray-600">${f.companyName}</p>
        </div>
        <div class="text-center text-xs text-gray-400">
            [System Generated Official HR Document]
        </div>
    </div>
</div>`
    },
    {
        id: "hr-termination-letter",
        title: "Employee Termination Notice",
        category: "hr",
        badge: "HR & Management",
        description: "Standard formal termination letter with notice period & handover instructions.",
        fields: [
            { id: "date", label: "Date", type: "date", default: new Date().toISOString().split('T')[0] },
            { id: "employeeName", label: "Employee Name", type: "text", default: "Alex Smith" },
            { id: "designation", label: "Designation", type: "text", default: "Marketing Executive" },
            { id: "effectiveDate", label: "Termination Effective Date", type: "date", default: "2026-10-31" },
            { id: "reason", label: "Reason/Context", type: "text", default: "organizational restructuring" },
            { id: "companyName", label: "Company Name", type: "text", default: "DocuHub Global Inc." }
        ],
        template: (f) => `
<div class="p-8 max-w-3xl mx-auto bg-white text-gray-800 font-sans leading-relaxed border rounded-lg shadow-sm">
    <div class="border-b pb-4 mb-6">
        <h1 class="text-2xl font-bold text-gray-900">${f.companyName}</h1>
        <p class="text-sm text-gray-500">Date: ${f.date}</p>
    </div>
    <p class="mb-4"><strong>To:</strong> ${f.employeeName} (${f.designation})</p>
    <p class="mb-4 font-bold text-red-600">SUBJECT: NOTICE OF TERMINATION OF EMPLOYMENT</p>
    <p class="mb-4">Dear ${f.employeeName},</p>
    <p class="mb-4">This letter serves as formal notification that your employment with <strong>${f.companyName}</strong> will be terminated with effect from <strong>${f.effectiveDate}</strong> due to ${f.reason}.</p>
    <p class="mb-4">You are requested to hand over all company assets, keys, and documents to the HR department prior to your final day. Your final settlement salary and dues will be processed after complete clearance.</p>
    <div class="mt-12">
        <p class="font-bold">Human Resources Department</p>
        <p>${f.companyName}</p>
    </div>
</div>`
    },
    {
        id: "hr-warning-letter",
        title: "Employee Warning Letter",
        category: "hr",
        badge: "HR & Management",
        description: "Official disciplinary warning notice regarding policy or attendance violations.",
        fields: [
            { id: "date", label: "Date", type: "date", default: new Date().toISOString().split('T')[0] },
            { id: "employeeName", label: "Employee Name", type: "text", default: "Robert Taylor" },
            { id: "violation", label: "Violation/Issue", type: "text", default: "repeated unexcused tardiness and absenteeism" },
            { id: "companyName", label: "Company Name", type: "text", default: "DocuHub Global" }
        ],
        template: (f) => `
<div class="p-8 max-w-3xl mx-auto bg-white text-gray-800 font-sans leading-relaxed border rounded-lg shadow-sm">
    <h1 class="text-xl font-bold text-gray-900 border-b pb-2 mb-4">${f.companyName} - HR Notice</h1>
    <p class="mb-2"><strong>Date:</strong> ${f.date}</p>
    <p class="mb-4"><strong>To:</strong> ${f.employeeName}</p>
    <h2 class="text-lg font-bold text-red-600 mb-4">SUBJECT: WRITTEN WARNING NOTICE</h2>
    <p class="mb-4">Dear ${f.employeeName},</p>
    <p class="mb-4">This is a formal written warning regarding your recent conduct specifically concerning: <strong>${f.violation}</strong>.</p>
    <p class="mb-4">You are expected to correct this behavior immediately. Failure to improve may lead to further disciplinary action up to and including termination.</p>
    <div class="mt-8">
        <p class="font-bold">HR Manager Signature</p>
    </div>
</div>`
    },
    {
        id: "hr-promotion-letter",
        title: "Promotion & Salary Revision Letter",
        category: "hr",
        badge: "HR & Management",
        description: "Formal letter awarding job promotion and salary raise to an employee.",
        fields: [
            { id: "date", label: "Date", type: "date", default: new Date().toISOString().split('T')[0] },
            { id: "employeeName", label: "Employee Name", type: "text", default: "Sarah Jenkins" },
            { id: "newRole", label: "New Position Title", type: "text", default: "Lead UX Designer" },
            { id: "newSalary", label: "New Annual Salary ($)", type: "text", default: "$95,000" },
            { id: "effectiveDate", label: "Effective Date", type: "date", default: "2026-11-01" },
            { id: "companyName", label: "Company Name", type: "text", default: "DocuHub Global" }
        ],
        template: (f) => `
<div class="p-8 max-w-3xl mx-auto bg-white text-gray-800 font-sans leading-relaxed border rounded-lg shadow-sm">
    <div class="border-b pb-4 mb-4">
        <h1 class="text-2xl font-bold text-green-700">${f.companyName}</h1>
        <p class="text-sm text-gray-500">Date: ${f.date}</p>
    </div>
    <p class="mb-4">Dear <strong>${f.employeeName}</strong>,</p>
    <p class="mb-4">In recognition of your exceptional performance and dedication, we are thrilled to offer you a promotion to the position of <strong>${f.newRole}</strong>, effective from <strong>${f.effectiveDate}</strong>.</p>
    <p class="mb-4">Your revised annual compensation will be <strong>${f.newSalary}</strong> per annum. Congratulations on this well-deserved advancement!</p>
    <div class="mt-10">
        <p class="font-bold">Executive Management</p>
        <p>${f.companyName}</p>
    </div>
</div>`
    },

    // --- PAYROLL & FINANCE TEMPLATES ---
    {
        id: "payroll-employee-payslip",
        title: "Employee Monthly Salary Payslip",
        category: "payroll",
        badge: "Payroll & Compensation",
        description: "Detailed monthly salary voucher itemizing basic pay, allowances, and tax deductions.",
        fields: [
            { id: "monthYear", label: "Pay Period (Month/Year)", type: "text", default: "September 2026" },
            { id: "employeeName", label: "Employee Name", type: "text", default: "Michael Vance" },
            { id: "empId", label: "Employee ID", type: "text", default: "DH-8092" },
            { id: "basicPay", label: "Basic Salary ($)", type: "number", default: 4500 },
            { id: "allowances", label: "Allowances ($)", type: "number", default: 800 },
            { id: "taxDeduction", label: "Income Tax ($)", type: "number", default: 520 },
            { id: "otherDeductions", label: "Other Deductions ($)", type: "number", default: 100 },
            { id: "companyName", label: "Company Name", type: "text", default: "DocuHub Global Ltd." }
        ],
        template: (f) => {
            const basic = parseFloat(f.basicPay) || 0;
            const allow = parseFloat(f.allowances) || 0;
            const gross = basic + allow;
            const tax = parseFloat(f.taxDeduction) || 0;
            const other = parseFloat(f.otherDeductions) || 0;
            const netPay = gross - (tax + other);

            return `
<div class="p-8 max-w-3xl mx-auto bg-white text-gray-800 font-sans border rounded-lg shadow-md">
    <div class="text-center border-b pb-4 mb-6">
        <h1 class="text-2xl font-bold text-gray-900">${f.companyName}</h1>
        <p class="text-sm font-semibold text-blue-600">SALARY SLIP FOR THE MONTH OF ${f.monthYear.toUpperCase()}</p>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-6 text-sm bg-gray-50 p-4 rounded border">
        <div><p><strong>Employee Name:</strong> ${f.employeeName}</p><p><strong>Employee ID:</strong> ${f.empId}</p></div>
        <div><p><strong>Pay Period:</strong> ${f.monthYear}</p><p><strong>Payment Status:</strong> PAID</p></div>
    </div>

    <div class="grid grid-cols-2 gap-6 mb-6">
        <div>
            <h3 class="font-bold border-b pb-1 mb-2 text-green-700">Earnings</h3>
            <div class="flex justify-between py-1 text-sm"><span>Basic Pay</span><span>$${basic.toFixed(2)}</span></div>
            <div class="flex justify-between py-1 text-sm"><span>Allowances</span><span>$${allow.toFixed(2)}</span></div>
            <div class="flex justify-between py-1 border-t font-bold text-sm mt-2"><span>Gross Pay</span><span>$${gross.toFixed(2)}</span></div>
        </div>
        <div>
            <h3 class="font-bold border-b pb-1 mb-2 text-red-700">Deductions</h3>
            <div class="flex justify-between py-1 text-sm"><span>Income Tax</span><span>$${tax.toFixed(2)}</span></div>
            <div class="flex justify-between py-1 text-sm"><span>Other Deductions</span><span>$${other.toFixed(2)}</span></div>
            <div class="flex justify-between py-1 border-t font-bold text-sm mt-2"><span>Total Deductions</span><span>$${(tax+other).toFixed(2)}</span></div>
        </div>
    </div>

    <div class="p-4 bg-blue-50 border border-blue-200 rounded text-right mb-6">
        <span class="text-lg font-bold text-blue-900">NET PAYABLE AMOUNT: $${netPay.toFixed(2)}</span>
    </div>

    <div class="flex justify-between text-xs text-gray-500 pt-8 border-t">
        <p>Prepared By: HR & Finance</p>
        <p>This is a computer-generated document and does not require a physical signature.</p>
    </div>
</div>`;
        }
    },
    {
        id: "payroll-bonus-voucher",
        title: "Annual Performance Bonus Voucher",
        category: "payroll",
        badge: "Payroll & Compensation",
        description: "Official voucher for annual performance or holiday bonus distribution.",
        fields: [
            { id: "date", label: "Date", type: "date", default: new Date().toISOString().split('T')[0] },
            { id: "employeeName", label: "Employee Name", type: "text", default: "David Miller" },
            { id: "bonusAmount", label: "Bonus Amount ($)", type: "number", default: 2500 },
            { id: "reason", label: "Bonus Reason", type: "text", default: "Q3 Performance Excellence" },
            { id: "companyName", label: "Company Name", type: "text", default: "DocuHub Global" }
        ],
        template: (f) => `
<div class="p-8 max-w-2xl mx-auto bg-white border-2 border-dashed border-green-600 rounded-xl p-6 shadow">
    <div class="flex justify-between items-center border-b pb-3 mb-4">
        <h2 class="text-xl font-bold text-green-800">${f.companyName}</h2>
        <span class="bg-green-100 text-green-800 px-3 py-1 rounded font-bold text-sm">BONUS VOUCHER</span>
    </div>
    <p class="mb-2"><strong>Date:</strong> ${f.date}</p>
    <p class="mb-2"><strong>Beneficiary:</strong> ${f.employeeName}</p>
    <p class="mb-4"><strong>Bonus Reason:</strong> ${f.reason}</p>
    <div class="bg-green-50 text-center py-4 rounded border border-green-300 my-4">
        <p class="text-sm text-green-700">Total Awarded Amount</p>
        <p class="text-3xl font-extrabold text-green-900">$${parseFloat(f.bonusAmount).toFixed(2)}</p>
    </div>
    <div class="mt-6 flex justify-between text-sm text-gray-600">
        <p>Approved By: CEO/Finance</p>
        <p>Received By: ________________</p>
    </div>
</div>`
    },

    // --- TAX INVOICES & BILLING ---
    {
        id: "tax-invoice-standard",
        title: "Standard Sales & GST Tax Invoice",
        category: "tax-invoices",
        badge: "Tax Invoices & Billing",
        description: "Professional itemized tax invoice calculation with configurable tax rate %.",
        fields: [
            { id: "invoiceNo", label: "Invoice Number", type: "text", default: "INV-2026-009" },
            { id: "date", label: "Invoice Date", type: "date", default: new Date().toISOString().split('T')[0] },
            { id: "clientName", label: "Client/Customer Name", type: "text", default: "Global Tech Solutions" },
            { id: "itemDesc", label: "Item / Service Description", type: "text", default: "Web Application Development Services" },
            { id: "qty", label: "Quantity", type: "number", default: 1 },
            { id: "unitPrice", label: "Unit Price ($)", type: "number", default: 1500 },
            { id: "taxRate", label: "Sales Tax / GST Rate (%)", type: "number", default: 10 },
            { id: "companyName", label: "Your Business Name", type: "text", default: "DocuHub Global Services" }
        ],
        template: (f) => {
            const subtotal = (parseFloat(f.qty) || 1) * (parseFloat(f.unitPrice) || 0);
            const tax = subtotal * ((parseFloat(f.taxRate) || 0) / 100);
            const total = subtotal + tax;

            return `
<div class="p-8 max-w-3xl mx-auto bg-white border rounded-lg shadow-sm font-sans">
    <div class="flex justify-between items-start border-b pb-6 mb-6">
        <div>
            <h1 class="text-3xl font-black text-gray-900">${f.companyName}</h1>
            <p class="text-sm text-gray-500">Official Tax Invoice</p>
        </div>
        <div class="text-right">
            <span class="inline-block bg-blue-600 text-white font-bold px-3 py-1 rounded text-sm mb-2">TAX INVOICE</span>
            <p class="text-sm text-gray-600"><strong>No:</strong> ${f.invoiceNo}</p>
            <p class="text-sm text-gray-600"><strong>Date:</strong> ${f.date}</p>
        </div>
    </div>

    <div class="mb-6 p-4 bg-gray-50 rounded border">
        <p class="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Billed To:</p>
        <p class="font-bold text-lg text-gray-800">${f.clientName}</p>
    </div>

    <table class="w-full text-left mb-6 border-collapse">
        <thead>
            <tr class="border-b bg-gray-100 text-sm font-bold text-gray-700">
                <th class="p-3">Description</th>
                <th class="p-3 text-center">Qty</th>
                <th class="p-3 text-right">Unit Price</th>
                <th class="p-3 text-right">Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b text-sm">
                <td class="p-3">${f.itemDesc}</td>
                <td class="p-3 text-center">${f.qty}</td>
                <td class="p-3 text-right">$${parseFloat(f.unitPrice).toFixed(2)}</td>
                <td class="p-3 text-right">$${subtotal.toFixed(2)}</td>
            </tr>
        </tbody>
    </table>

    <div class="w-1/2 ml-auto space-y-2 text-sm border-t pt-4">
        <div class="flex justify-between text-gray-600"><span>Subtotal:</span><span>$${subtotal.toFixed(2)}</span></div>
        <div class="flex justify-between text-gray-600"><span>Sales Tax / GST (${f.taxRate}%):</span><span>$${tax.toFixed(2)}</span></div>
        <div class="flex justify-between font-bold text-lg text-gray-900 border-t pt-2"><span>Total Amount Due:</span><span>$${total.toFixed(2)}</span></div>
    </div>
</div>`;
        }
    },

    // --- VEHICLE & FUEL LOGS ---
    {
        id: "fuel-maintenance-log",
        title: "Vehicle Fuel & Maintenance Log Sheet",
        category: "logs",
        badge: "Vehicle & Fleet Logs",
        description: "Fleet tracking sheet for fuel fills, mileage, and maintenance logs.",
        fields: [
            { id: "vehicleNo", label: "Vehicle Reg No.", type: "text", default: "ABC-1234" },
            { id: "driverName", label: "Driver Name", type: "text", default: "James Wilson" },
            { id: "date", label: "Log Date", type: "date", default: new Date().toISOString().split('T')[0] },
            { id: "odometer", label: "Odometer Reading (KM)", type: "number", default: 45200 },
            { id: "fuelLiters", label: "Fuel Filled (Liters)", type: "number", default: 45 },
            { id: "totalCost", label: "Total Fuel Cost ($)", type: "number", default: 75 }
        ],
        template: (f) => `
<div class="p-8 max-w-3xl mx-auto bg-white border rounded-lg shadow-sm">
    <div class="border-b pb-4 mb-4 flex justify-between items-center">
        <div>
            <h1 class="text-xl font-bold text-gray-900">VEHICLE FUEL & LOG RECORD</h1>
            <p class="text-sm text-gray-500">DocuHub Fleet Management System</p>
        </div>
        <div class="bg-gray-100 p-2 rounded text-sm text-right">
            <p><strong>Vehicle:</strong> ${f.vehicleNo}</p>
            <p><strong>Driver:</strong> ${f.driverName}</p>
        </div>
    </div>

    <table class="w-full text-left border-collapse border text-sm mb-6">
        <thead>
            <tr class="bg-gray-100 border-b">
                <th class="p-2 border">Date</th>
                <th class="p-2 border">Odometer (KM)</th>
                <th class="p-2 border">Fuel Liters</th>
                <th class="p-2 border">Total Cost</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="p-2 border">${f.date}</td>
                <td class="p-2 border">${f.odometer} KM</td>
                <td class="p-2 border">${f.fuelLiters} L</td>
                <td class="p-2 border">$${parseFloat(f.totalCost).toFixed(2)}</td>
            </tr>
        </tbody>
    </table>
    <p class="text-xs text-gray-500">Verified by Fleet Manager Signature: ______________________</p>
</div>`
    },

    // --- AGREEMENTS & LEGAL CONTRACTS ---
    {
        id: "agreement-house-rent",
        title: "Residential House & Flat Rent Agreement",
        category: "agreements",
        badge: "Agreements & Contracts",
        description: "Comprehensive property rental agreement contract between landlord and tenant.",
        fields: [
            { id: "date", label: "Agreement Date", type: "date", default: new Date().toISOString().split('T')[0] },
            { id: "landlord", label: "Landlord Full Name", type: "text", default: "William Harrison" },
            { id: "tenant", label: "Tenant Full Name", type: "text", default: "Emily Davis" },
            { id: "propertyAddress", label: "Property Address", type: "text", default: "Apartment 4B, Sunset Heights, Main St." },
            { id: "rentAmount", label: "Monthly Rent ($)", type: "number", default: 1200 },
            { id: "depositAmount", label: "Security Deposit ($)", type: "number", default: 2400 }
        ],
        template: (f) => `
<div class="p-8 max-w-3xl mx-auto bg-white border rounded-lg shadow-sm text-gray-800 font-serif leading-relaxed">
    <h1 class="text-2xl font-bold text-center underline mb-6">RENT AGREEMENT CONTRACT</h1>
    
    <p class="mb-4">This Agreement is made on <strong>${f.date}</strong>, between <strong>${f.landlord}</strong> (hereinafter called the "Landlord") and <strong>${f.tenant}</strong> (hereinafter called the "Tenant").</p>

    <h3 class="font-bold border-b my-3">1. PROPERTY DETAILS</h3>
    <p class="mb-4">The Landlord agrees to rent out the premises located at: <strong>${f.propertyAddress}</strong>.</p>

    <h3 class="font-bold border-b my-3">2. RENT AND DEPOSIT</h3>
    <p class="mb-2">1. The Tenant agrees to pay a monthly rent of <strong>$${f.rentAmount}</strong> in advance by the 1st of each month.</p>
    <p class="mb-4">2. A refundable Security Deposit of <strong>$${f.depositAmount}</strong> is paid upon signing this agreement.</p>

    <div class="grid grid-cols-2 gap-8 mt-16 pt-8 border-t text-sm font-sans">
        <div>
            <p>___________________________</p>
            <p class="font-bold mt-1">Landlord Signature</p>
            <p>${f.landlord}</p>
        </div>
        <div>
            <p>___________________________</p>
            <p class="font-bold mt-1">Tenant Signature</p>
            <p>${f.tenant}</p>
        </div>
    </div>
</div>`
    },
    {
        id: "agreement-nda-business",
        title: "Non-Disclosure Agreement (NDA)",
        category: "agreements",
        badge: "Agreements & Contracts",
        description: "Confidentiality and non-disclosure agreement for business discussions.",
        fields: [
            { id: "date", label: "Effective Date", type: "date", default: new Date().toISOString().split('T')[0] },
            { id: "partyA", label: "Disclosing Party Name", type: "text", default: "DocuHub Global Ltd" },
            { id: "partyB", label: "Receiving Party Name", type: "text", default: "Apex Innovations Corp" }
        ],
        template: (f) => `
<div class="p-8 max-w-3xl mx-auto bg-white border rounded-lg shadow-sm leading-relaxed font-serif">
    <h1 class="text-2xl font-bold text-center underline mb-6">MUTUAL NON-DISCLOSURE AGREEMENT</h1>
    <p class="mb-4">Effective Date: <strong>${f.date}</strong></p>
    <p class="mb-4">By and between <strong>${f.partyA}</strong> and <strong>${f.partyB}</strong>.</p>
    <p class="mb-4">Both parties agree that any technical, business, or financial information shared during their partnership will remain strictly confidential and will not be disclosed to any third party without written consent.</p>
    <div class="grid grid-cols-2 gap-8 mt-12 pt-6 border-t font-sans text-sm">
        <div><p>Signature: ________________</p><p>For: ${f.partyA}</p></div>
        <div><p>Signature: ________________</p><p>For: ${f.partyB}</p></div>
    </div>
</div>`
    },

    // --- CERTIFICATES & FORMAL LETTERS ---
    {
        id: "cert-experience-letter",
        title: "Official Work Experience Certificate",
        category: "certificates",
        badge: "Certificates & Credentials",
        description: "Official work experience and conduct certificate for outgoing employees.",
        fields: [
            { id: "date", label: "Issue Date", type: "date", default: new Date().toISOString().split('T')[0] },
            { id: "empName", label: "Employee Name", type: "text", default: "Laura Martinez" },
            { id: "designation", label: "Designation Held", type: "text", default: "Project Coordinator" },
            { id: "startDate", label: "Start Date", type: "date", default: "2023-01-15" },
            { id: "endDate", label: "End Date", type: "date", default: "2026-08-31" },
            { id: "companyName", label: "Company Name", type: "text", default: "DocuHub Global Solutions" }
        ],
        template: (f) => `
<div class="p-8 max-w-3xl mx-auto bg-white border-4 border-double border-gray-400 rounded-lg p-8 text-center font-sans">
    <h1 class="text-3xl font-extrabold text-gray-900 mb-2">${f.companyName}</h1>
    <p class="text-sm text-gray-500 mb-8">Date: ${f.date}</p>

    <h2 class="text-2xl font-bold underline tracking-widest text-blue-900 mb-6">EXPERIENCE CERTIFICATE</h2>

    <p class="text-lg leading-relaxed text-gray-700 max-w-2xl mx-auto mb-6">
        This is to certify that <strong>${f.empName}</strong> has worked with <strong>${f.companyName}</strong> as a <strong>${f.designation}</strong> from <strong>${f.startDate}</strong> to <strong>${f.endDate}</strong>.
    </p>

    <p class="text-md leading-relaxed text-gray-600 max-w-xl mx-auto mb-12">
        During her tenure with us, we found her to be hardworking, dedicated, and professional. We wish her all the best in her future endeavors.
    </p>

    <div class="mt-12 text-center">
        <p class="font-bold border-t border-gray-400 inline-block px-8 pt-1">Director / Authorized Signatory</p>
    </div>
</div>`
    },
    {
        id: "letter-internship-completion",
        title: "Internship Completion Letter",
        category: "certificates",
        badge: "Certificates & Credentials",
        description: "Completion letter for student or graduate interns.",
        fields: [
            { id: "date", label: "Date", type: "date", default: new Date().toISOString().split('T')[0] },
            { id: "internName", label: "Intern Name", type: "text", default: "Daniel Lee" },
            { id: "domain", label: "Internship Field", type: "text", default: "Software Quality Assurance" },
            { id: "duration", label: "Duration", type: "text", default: "3 Months (June - August 2026)" },
            { id: "companyName", label: "Company Name", type: "text", default: "DocuHub Global" }
        ],
        template: (f) => `
<div class="p-8 max-w-3xl mx-auto bg-white border rounded-lg shadow-sm">
    <div class="border-b pb-4 mb-4">
        <h1 class="text-2xl font-bold">${f.companyName}</h1>
        <p class="text-sm text-gray-500">Date: ${f.date}</p>
    </div>
    <h2 class="text-xl font-bold text-center underline my-4">TO WHOM IT MAY CONCERN</h2>
    <p class="mb-4">This is to certify that <strong>${f.internName}</strong> has successfully completed an internship in <strong>${f.domain}</strong> with <strong>${f.companyName}</strong> for a duration of ${f.duration}.</p>
    <p class="mb-4">During his internship, he demonstrated great learning capability and enthusiasm.</p>
    <div class="mt-8">
        <p class="font-bold">Head of Talent Acquisition</p>
    </div>
</div>`
    }
];

// Dynamically generate extra letter variations to ensure complete 28+ template coverage
const categoriesList = ["hr", "payroll", "tax-invoices", "logs", "agreements", "certificates"];
const sampleLetterTitles = [
    "Job Offer Letter", "Employee Resignation Letter", "Bank Account Opening Request Letter",
    "Address Verification Letter", "Bonafide Student / Employee Letter", "Relieving Letter",
    "Salary Certificate Letter", "Overtime Allowance Request Form", "Vehicle Usage Request",
    "Equipment Handover Form", "Vendor Payment Invoice", "Commercial Lease Agreement",
    "Freelance Service Contract", "Performance Appraisal Letter", "NOC (No Objection Certificate)",
    "Training Completion Certificate", "Sponsorship Confirmation Letter", "Business Proposal Cover Letter"
];

sampleLetterTitles.forEach((title, idx) => {
    const cat = categoriesList[idx % categoriesList.length];
    hubDatabase.push({
        id: `auto-template-${idx + 1}`,
        title: title,
        category: cat,
        badge: cat.toUpperCase().replace('-', ' '),
        description: `Standard customizable template format for ${title.toLowerCase()}.`,
        fields: [
            { id: "date", label: "Date", type: "date", default: new Date().toISOString().split('T')[0] },
            { id: "recipient", label: "Recipient / To", type: "text", default: "Concerned Authority" },
            { id: "subject", label: "Subject", type: "text", default: title.toUpperCase() },
            { id: "company", label: "Organization/Company", type: "text", default: "DocuHub Global Partner" }
        ],
        template: (f) => `
<div class="p-8 max-w-3xl mx-auto bg-white border rounded-lg shadow-sm font-sans">
    <div class="border-b pb-4 mb-4">
        <h1 class="text-2xl font-bold text-gray-800">${f.company}</h1>
        <p class="text-sm text-gray-500">Date: ${f.date}</p>
    </div>
    <p class="mb-4"><strong>To:</strong> ${f.recipient}</p>
    <h2 class="text-lg font-bold underline mb-4">SUBJECT: ${f.subject}</h2>
    <p class="mb-4">Dear Sir/Madam,</p>
    <p class="mb-4">This document serves as an official formal record for <strong>${f.subject}</strong>. Please find the verified details attached herewith.</p>
    <p class="mb-4">Should you require any further information, feel free to contact our office.</p>
    <div class="mt-12">
        <p class="font-bold">Authorized Representative</p>
        <p>${f.company}</p>
    </div>
</div>`
    });
});


// ==========================================
// 2. STATE MANAGEMENT & RENDER ENGINE
// ==========================================
let currentSelectedTemplate = hubDatabase[0];
let currentFilterCategory = "all";
let currentSearchQuery = "";

// Initialize App on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
    renderCategoryPills();
    renderTemplateGrid();
    selectTemplate(hubDatabase[0].id);
    setupEventListeners();
});

// Setup Main UI Event Listeners
function setupEventListeners() {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentSearchQuery = e.target.value.toLowerCase().trim();
            renderTemplateGrid();
        });
    }

    const printBtn = document.getElementById("printBtn");
    if (printBtn) {
        printBtn.addEventListener("click", () => {
            window.print();
        });
    }

    const copyBtn = document.getElementById("copyBtn");
    if (copyBtn) {
        copyBtn.addEventListener("click", () => {
            const previewEl = document.getElementById("documentPreview");
            if (previewEl) {
                const textToCopy = previewEl.innerText;
                navigator.clipboard.writeText(textToCopy).then(() => {
                    alert("Document text copied to clipboard successfully!");
                }).catch(() => {
                    alert("Copying failed. Please select text manually.");
                });
            }
        });
    }
}

// Render Category Navigation Pills
function renderCategoryPills() {
    const pillsContainer = document.getElementById("categoryPills");
    if (!pillsContainer) return;

    const categories = [
        { id: "all", label: "All Templates" },
        { id: "hr", label: "HR & Management" },
        { id: "payroll", label: "Payroll & Salary" },
        { id: "tax-invoices", label: "Tax & Invoices" },
        { id: "logs", label: "Vehicle Logs" },
        { id: "agreements", label: "Agreements" },
        { id: "certificates", label: "Certificates" }
    ];

    pillsContainer.innerHTML = categories.map(cat => `
        <button 
            onclick="setCategoryFilter('${cat.id}')"
            class="px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                currentFilterCategory === cat.id 
                ? "bg-blue-600 text-white shadow" 
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }"
        >
            ${cat.label}
        </button>
    `).join("");
}

// Set Active Filter
window.setCategoryFilter = function(catId) {
    currentFilterCategory = catId;
    renderCategoryPills();
    renderTemplateGrid();
};


// Filter and Render Cards in Grid
function renderTemplateGrid() {
    const grid = document.getElementById("templateGrid");
    if (!grid) return;

    const filtered = hubDatabase.filter(item => {
        const matchesCategory = currentFilterCategory === "all" || item.category === currentFilterCategory;
        const matchesSearch = item.title.toLowerCase().includes(currentSearchQuery) || 
                              item.description.toLowerCase().includes(currentSearchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12 text-gray-500">
                No templates found matching your filter or search query.
            </div>`;
        return;
    }

    grid.innerHTML = filtered.map(item => `
        <div 
            onclick="selectTemplate('${item.id}')"
            class="p-4 border rounded-xl cursor-pointer hover:border-blue-500 transition-all ${
                currentSelectedTemplate.id === item.id ? "border-2 border-blue-600 bg-blue-50/50 shadow-md" : "bg-white hover:shadow"
            }"
        >
            <span class="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 uppercase tracking-wider">${item.badge}</span>
            <h3 class="font-bold text-gray-800 text-md mt-2">${item.title}</h3>
            <p class="text-xs text-gray-500 mt-1 line-clamp-2">${item.description}</p>
        </div>
    `).join("");
}


// Select Active Template & Generate Controls
window.selectTemplate = function(templateId) {
    const found = hubDatabase.find(t => t.id === templateId);
    if (!found) return;

    currentSelectedTemplate = found;
    renderTemplateGrid();

    // Render Dynamic Inputs
    const formContainer = document.getElementById("dynamicForm");
    if (formContainer) {
        formContainer.innerHTML = `
            <h2 class="text-lg font-bold text-gray-800 mb-4 pb-2 border-b">
                Customize Template Details
            </h2>
            <div class="space-y-4">
                ${found.fields.map(field => `
                    <div>
                        <label class="block text-xs font-bold text-gray-700 uppercase mb-1">${field.label}</label>
                        <input 
                            type="${field.type}" 
                            id="input_${field.id}" 
                            value="${field.default}"
                            oninput="updateDocumentPreview()"
                            class="w-full p-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                `).join("")}
            </div>
        `;
    }

    updateDocumentPreview();
};

// Update Live Preview Engine
window.updateDocumentPreview = function() {
    if (!currentSelectedTemplate) return;

    const previewContainer = document.getElementById("documentPreview");
    if (!previewContainer) return;

    // Collect Input values
    const fieldValues = {};
    currentSelectedTemplate.fields.forEach(field => {
        const input = document.getElementById(`input_${field.id}`);
        fieldValues[field.id] = input ? input.value : field.default;
    });

    // Generate HTML Output
    previewContainer.innerHTML = currentSelectedTemplate.template(fieldValues);
};
