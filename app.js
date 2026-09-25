// ==========================================
// DOCUHUB GLOBAL - ULTIMATE MASTER APP.JS (ALL 32+ LETTERS, TEMPLATES & CALCULATORS)
// ==========================================

const hubDatabase = [
    // ----------------------------------------------------
    // 1. HR & RECRUITMENT LETTERS (7 Formats)
    // ----------------------------------------------------
    {
        id: "letter-offer",
        category: "hr",
        title: "Official Employment Offer Letter",
        desc: "Standard formal job offer letter with salary and position details",
        fields: [
            { id: "candName", label: "Candidate Name", val: "Shah Rukh Siddiqui" },
            { id: "designation", label: "Designation", val: "Senior Accountant" },
            { id: "company", label: "Company Name", val: "Enterprise Corp" },
            { id: "salary", label: "Monthly Salary (PKR)", val: "120,000" },
            { id: "joinDate", label: "Joining Date", val: "2026-10-01", type: "date" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800 leading-relaxed shadow-sm">
                <div class="border-b pb-4 mb-6 flex justify-between items-center">
                    <div>
                        <h2 class="text-xl font-bold text-slate-900">${f.company}</h2>
                        <p class="text-xs text-slate-500">Human Resources Division</p>
                    </div>
                    <div class="text-right text-xs text-slate-500">
                        <p>Date: ${new Date().toISOString().split('T')[0]}</p>
                    </div>
                </div>
                <div class="text-sm space-y-4">
                    <p>Dear <strong>${f.candName}</strong>,</p>
                    <p>We are thrilled to offer you the position of <strong>${f.designation}</strong> at <strong>${f.company}</strong> starting from <strong>${f.joinDate}</strong>.</p>
                    <p>Your starting monthly remuneration will be <strong>PKR ${f.salary}</strong>, subject to standard company tax policies and performance reviews.</p>
                    <p>Please sign and return a copy of this letter as token of your acceptance.</p>
                    <div class="pt-12 flex justify-between">
                        <div>
                            <p class="font-bold">Authorized Signatory</p>
                            <p class="text-xs text-slate-500">${f.company}</p>
                        </div>
                        <div class="text-right">
                            <p class="font-bold">Accepted By</p>
                            <p class="text-xs text-slate-500">${f.candName}</p>
                        </div>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-appointment",
        category: "hr",
        title: "Formal Appointment Letter",
        desc: "Comprehensive job appointment order with terms and probation clauses",
        fields: [
            { id: "empName", label: "Employee Name", val: "Shah Rukh Siddiqui" },
            { id: "designation", label: "Designation", val: "Senior Accountant" },
            { id: "company", label: "Company Name", val: "Enterprise Corp" },
            { id: "probation", label: "Probation Period", val: "3 Months" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800 leading-relaxed">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">${f.company}</h2>
                    <p class="text-xs text-slate-500">Appointment & Employment Terms</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>Dear <strong>${f.empName}</strong>,</p>
                    <p>With reference to your application and subsequent interview, we are pleased to appoint you as <strong>${f.designation}</strong> at <strong>${f.company}</strong>.</p>
                    <p>Your employment will be governed by a probation period of <strong>${f.probation}</strong>, during which your performance will be evaluated.</p>
                    <div class="pt-10">
                        <p class="font-bold">Director HR</p>
                        <p class="text-xs text-slate-500">${f.company}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-probation-confirm",
        category: "hr",
        title: "Probation Confirmation Letter",
        desc: "Official confirmation letter upon successfully completing the probation period",
        fields: [
            { id: "empName", label: "Employee Name", val: "Shah Rukh Siddiqui" },
            { id: "designation", label: "Designation", val: "Senior Accountant" },
            { id: "company", label: "Company Name", val: "Enterprise Corp" },
            { id: "confDate", label: "Confirmation Date", val: "2026-09-01", type: "date" },
            { id: "newSalary", label: "Revised Monthly Salary", val: "135,000" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800 leading-relaxed">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">${f.company}</h2>
                    <p class="text-xs text-slate-500">Human Resources Department</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>Dear <strong>${f.empName}</strong>,</p>
                    <p>We are pleased to confirm your appointment as <strong>${f.designation}</strong> effective <strong>${f.confDate}</strong> following successful completion of your probation.</p>
                    <p>Your revised monthly salary is fixed at <strong>PKR ${f.newSalary}</strong>.</p>
                    <div class="pt-10">
                        <p class="font-bold">HR Manager</p>
                        <p class="text-xs text-slate-500">${f.company}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-internship-offer",
        category: "hr",
        title: "Internship Offer Letter",
        desc: "Formal offer letter for internship roles with stipend details",
        fields: [
            { id: "internName", label: "Intern Name", val: "Usman Raza" },
            { id: "dept", label: "Department", val: "Finance & Accounts" },
            { id: "company", label: "Company Name", val: "Enterprise Corp" },
            { id: "stipend", label: "Monthly Stipend", val: "25,000 PKR" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">${f.company}</h2>
                    <p class="text-xs text-slate-500">Internship Program Engagement</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>Dear <strong>${f.internName}</strong>,</p>
                    <p>We welcome you to our <strong>${f.dept}</strong> department at <strong>${f.company}</strong> with a monthly stipend of <strong>${f.stipend}</strong>.</p>
                    <div class="pt-10">
                        <p class="font-bold">HR Coordinator</p>
                        <p class="text-xs text-slate-500">${f.company}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-internship-completion",
        category: "hr",
        title: "Internship Completion Certificate Letter",
        desc: "Official letter issued after completion of internship program",
        fields: [
            { id: "internName", label: "Intern Name", val: "Usman Raza" },
            { id: "dept", label: "Department", val: "Accounts" },
            { id: "company", label: "Company Name", val: "Enterprise Corp" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-serif text-slate-800">
                <div class="text-center border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold uppercase tracking-widest">${f.company}</h2>
                    <p class="text-xs font-sans text-slate-500">INTERNSHIP COMPLETION CERTIFICATE</p>
                </div>
                <div class="text-sm font-sans space-y-4 my-8 text-justify">
                    <p>This is to certify that <strong>${f.internName}</strong> has successfully completed their internship in the <strong>${f.dept}</strong> department at <strong>${f.company}</strong>.</p>
                </div>
                <div class="mt-12 pt-6 border-t text-xs font-sans">
                    <p class="font-bold">Head of Human Resources</p>
                    <p class="text-slate-500">${f.company}</p>
                </div>
            </div>`
    },
    {
        id: "letter-transfer",
        category: "hr",
        title: "Internal Department Transfer Letter",
        desc: "Official order transferring an employee to another branch or department",
        fields: [
            { id: "empName", label: "Employee Name", val: "Shah Rukh Siddiqui" },
            { id: "oldDept", label: "Current Location", val: "Branch Office" },
            { id: "newDept", label: "New Location", val: "Head Office Accounts" },
            { id: "company", label: "Company Name", val: "Enterprise Corp" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">${f.company}</h2>
                    <p class="text-xs text-slate-500">Internal Office Order — Transfer</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>Dear <strong>${f.empName}</strong>,</p>
                    <p>You are hereby transferred from <strong>${f.oldDept}</strong> to <strong>${f.newDept}</strong> effective immediately.</p>
                    <div class="pt-10">
                        <p class="font-bold">Operations Director</p>
                        <p class="text-xs text-slate-500">${f.company}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-salary-cert",
        category: "hr",
        title: "Salary Certificate for Bank / Visa",
        desc: "Employment and income verification letter for financial institutions",
        fields: [
            { id: "empName", label: "Employee Name", val: "Shah Rukh Siddiqui" },
            { id: "designation", label: "Designation", val: "Senior Accountant" },
            { id: "company", label: "Company Name", val: "Enterprise Corp" },
            { id: "salary", label: "Monthly Salary", val: "120,000 PKR" },
            { id: "purpose", label: "Purpose", val: "bank credit card and loan verification" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">${f.company}</h2>
                    <p class="text-xs text-slate-500">TO WHOM IT MAY CONCERN</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>This is to certify that <strong>${f.empName}</strong> is a permanent employee of <strong>${f.company}</strong> working as <strong>${f.designation}</strong>.</p>
                    <p>Their gross monthly salary is <strong>${f.salary}</strong>. This certificate is issued upon their request for <strong>${f.purpose}</strong>.</p>
                    <div class="pt-12">
                        <p class="font-bold">Accounts & Payroll Manager</p>
                        <p class="text-xs text-slate-500">${f.company}</p>
                    </div>
                </div>
            </div>`
    },

    // ----------------------------------------------------
    // 2. SEPARATION & LEAVING LETTERS (5 Formats)
    // ----------------------------------------------------
    {
        id: "letter-resignation",
        category: "hr",
        title: "Standard Resignation Letter",
        desc: "Formal resignation notice with notice period handover",
        fields: [
            { id: "empName", label: "Employee Name", val: "Shah Rukh Siddiqui" },
            { id: "designation", label: "Designation", val: "Senior Accountant" },
            { id: "company", label: "Company Name", val: "Enterprise Corp" },
            { id: "lastDay", label: "Last Working Day", val: "2026-10-31", type: "date" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">Resignation Notice</h2>
                </div>
                <div class="text-sm space-y-4">
                    <p>To Management, <strong>${f.company}</strong></p>
                    <p>Please accept this letter as formal notification that I am resigning from my position as <strong>${f.designation}</strong>. My last working day will be <strong>${f.lastDay}</strong>.</p>
                    <p>I am committed to ensuring a smooth handover of all accounting ledgers before my departure.</p>
                    <div class="pt-10">
                        <p class="font-bold">${f.empName}</p>
                        <p class="text-xs text-slate-500">${f.designation}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-resignation-immediate",
        category: "hr",
        title: "Immediate Resignation Letter (Emergency)",
        desc: "Resignation notice requesting waiver of standard notice period",
        fields: [
            { id: "empName", label: "Employee Name", val: "Shah Rukh Siddiqui" },
            { id: "company", label: "Company Name", val: "Enterprise Corp" },
            { id: "reason", label: "Emergency Reason", val: "unforeseen family medical emergency" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">Immediate Resignation</h2>
                </div>
                <div class="text-sm space-y-4">
                    <p>To Management, <strong>${f.company}</strong></p>
                    <p>Due to <strong>${f.reason}</strong>, I am forced to submit my immediate resignation effective today. I request management to kindly waive my notice period.</p>
                    <div class="pt-10">
                        <p class="font-bold">${f.empName}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-relieving",
        category: "hr",
        title: "Official Relieving Order & Experience Letter",
        desc: "Formal discharge and service certificate issued on final working day",
        fields: [
            { id: "empName", label: "Employee Name", val: "Shah Rukh Siddiqui" },
            { id: "designation", label: "Designation", val: "Senior Accountant" },
            { id: "company", label: "Company Name", val: "Enterprise Corp" },
            { id: "tenure", label: "Tenure Period", val: "2024 to 2026" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">${f.company}</h2>
                    <p class="text-xs text-slate-500">Service & Relieving Certificate</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>This is to certify that <strong>${f.empName}</strong> served as <strong>${f.designation}</strong> at <strong>${f.company}</strong> during <strong>${f.tenure}</strong>. All duties and handovers have been successfully cleared.</p>
                    <div class="pt-10">
                        <p class="font-bold">HR Director</p>
                        <p class="text-xs text-slate-500">${f.company}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-termination",
        category: "hr",
        title: "Official Employment Termination Letter",
        desc: "Formal letter ending employment due to restructuring or policy breach",
        fields: [
            { id: "empName", label: "Employee Name", val: "Kashif Bilal" },
            { id: "company", label: "Company Name", val: "Enterprise Corp" },
            { id: "reason", label: "Reason", val: "department restructuring and downsizing" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-red-700">${f.company}</h2>
                    <p class="text-xs text-slate-500">Notice of Employment Termination</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>Dear <strong>${f.empName}</strong>,</p>
                    <p>This letter serves as formal notice that your employment with <strong>${f.company}</strong> is terminated due to <strong>${f.reason}</strong>.</p>
                    <div class="pt-10">
                        <p class="font-bold">Director Human Resources</p>
                        <p class="text-xs text-slate-500">${f.company}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-character-cert",
        category: "hr",
        title: "Character & Conduct Certificate Letter",
        desc: "Certificate confirming employee good standing and moral character",
        fields: [
            { id: "empName", label: "Employee Name", val: "Muhammad Bilal" },
            { id: "designation", label: "Designation", val: "Store Officer" },
            { id: "company", label: "Company Name", val: "Enterprise Corp" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-serif text-slate-800">
                <div class="text-center border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold uppercase">${f.company}</h2>
                    <p class="text-xs font-sans text-slate-500">CHARACTER CERTIFICATE</p>
                </div>
                <div class="text-sm font-sans space-y-4 my-6 text-justify">
                    <p>This is to certify that <strong>${f.empName}</strong> was employed with us as <strong>${f.designation}</strong>. During their tenure, we found them honest, dedicated, and of exemplary character.</p>
                </div>
                <div class="mt-12 pt-6 border-t font-sans text-xs">
                    <p class="font-bold">General Manager</p>
                    <p class="text-slate-500">${f.company}</p>
                </div>
            </div>`
    },

    // ----------------------------------------------------
    // 3. DISCIPLINARY & COMPLIANCE LETTERS (3 Formats)
    // ----------------------------------------------------
    {
        id: "letter-warning-performance",
        category: "hr",
        title: "Performance Warning Letter",
        desc: "Official written warning notice regarding sub-standard output",
        fields: [
            { id: "empName", label: "Employee Name", val: "Hamza Sheikh" },
            { id: "company", label: "Company Name", val: "Enterprise Corp" },
            { id: "issue", label: "Issue Details", val: "repeated delays in accounting reconciliation" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-amber-600">${f.company}</h2>
                    <p class="text-xs text-slate-500">Performance Warning Notice</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>To: <strong>${f.empName}</strong></p>
                    <p>This letter serves as a formal warning regarding <strong>${f.issue}</strong>. You are required to improve your output within 30 days.</p>
                    <div class="pt-8"><p class="font-bold">HR Compliance Officer</p></div>
                </div>
            </div>`
    },
    {
        id: "letter-show-cause",
        category: "hr",
        title: "Show Cause Notice / Explanation Letter",
        desc: "Formal notice seeking written explanation for unauthorized absence",
        fields: [
            { id: "empName", label: "Employee Name", val: "Faisal Naeem" },
            { id: "company", label: "Company Name", val: "Enterprise Corp" },
            { id: "incident", label: "Incident", val: "unauthorized absence from duty for 3 consecutive days" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-red-700">${f.company}</h2>
                    <p class="text-xs text-slate-500">SHOW CAUSE NOTICE</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>To: <strong>${f.empName}</strong></p>
                    <p>You are directed to submit a written explanation within 48 hours for <strong>${f.incident}</strong>, failing which disciplinary action will follow.</p>
                    <div class="pt-8"><p class="font-bold">Disciplinary Committee</p></div>
                </div>
            </div>`
    },
    {
        id: "letter-suspension",
        category: "hr",
        title: "Official Duty Suspension Order",
        desc: "Temporary suspension letter pending formal internal inquiry",
        fields: [
            { id: "empName", label: "Employee Name", val: "Imran Khan" },
            { id: "company", label: "Company Name", val: "Enterprise Corp" },
            { id: "days", label: "Duration", val: "7 Days" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-red-800">${f.company}</h2>
                    <p class="text-xs text-slate-500">Administrative Suspension Order</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>To: <strong>${f.empName}</strong></p>
                    <p>You are placed under administrative suspension for <strong>${f.days}</strong> pending internal inquiry.</p>
                    <div class="pt-8"><p class="font-bold">Managing Director</p></div>
                </div>
            </div>`
    },

    // ----------------------------------------------------
    // 4. COMMERCIAL & B2B CORRESPONDENCE (5 Formats)
    // ----------------------------------------------------
    {
        id: "letter-b2b-proposal",
        category: "accounting",
        title: "Commercial Business Proposal Cover Letter",
        desc: "Professional proposal cover page for presenting client quotes",
        fields: [
            { id: "client", label: "Client Name", val: "Valued Client" },
            { id: "sender", label: "Your Company", val: "Enterprise Trading" },
            { id: "subject", label: "Proposal Subject", val: "Supply of Commercial Goods & Services" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">${f.sender}</h2>
                    <p class="text-xs text-slate-500">Commercial Proposal Submission</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>To: Procurement, <strong>${f.client}</strong></p>
                    <p><strong>Subject: ${f.subject}</strong></p>
                    <p>We are pleased to present our official commercial proposal. We assure top-tier wholesale rates and high quality standards.</p>
                    <div class="pt-8"><p class="font-bold">Sales & Business Head</p></div>
                </div>
            </div>`
    },
    {
        id: "letter-payment-reminder",
        category: "accounting",
        title: "Soft Payment Reminder Letter",
        desc: "Polite initial reminder letter for overdue invoice recovery",
        fields: [
            { id: "client", label: "Client Name", val: "Valued Client" },
            { id: "invNo", label: "Invoice No", val: "INV-2026-88" },
            { id: "amount", label: "Overdue Amount", val: "45,000 PKR" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6"><h2 class="text-xl font-bold">Payment Reminder</h2></div>
                <div class="text-sm space-y-4">
                    <p>To: <strong>${f.client}</strong></p>
                    <p>This is a friendly reminder that invoice <strong>${f.invNo}</strong> amounting to <strong>${f.amount}</strong> is currently overdue. Kindly remit payment at your earliest.</p>
                    <div class="pt-8"><p class="font-bold">Accounts Manager</p></div>
                </div>
            </div>`
    },
    {
        id: "letter-demand-notice",
        category: "accounting",
        title: "Urgent Payment Demand Letter",
        desc: "Final warning letter for overdue balance collection",
        fields: [
            { id: "client", label: "Client Name", val: "Valued Client" },
            { id: "amount", label: "Total Balance", val: "120,000 PKR" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6"><h2 class="text-xl font-bold text-red-700">FINAL DEMAND NOTICE</h2></div>
                <div class="text-sm space-y-4">
                    <p>To: <strong>${f.client}</strong></p>
                    <p>Your balance of <strong>${f.amount}</strong> remains unpaid despite prior reminders. Legal recovery protocols will initiate in 5 days if unsettled.</p>
                    <div class="pt-8"><p class="font-bold">Head of Finance</p></div>
                </div>
            </div>`
    },
    {
        id: "letter-vendor-approval",
        category: "accounting",
        title: "Vendor Registration & Approval Letter",
        desc: "Letter confirming supplier onboarding into official vendor list",
        fields: [
            { id: "vendor", label: "Vendor Name", val: "Approved Supplier" },
            { id: "code", label: "Vendor Code", val: "VND-2026-09" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6"><h2 class="text-xl font-bold">Vendor Onboarding Approval</h2></div>
                <div class="text-sm space-y-4">
                    <p>Dear <strong>${f.vendor}</strong>,</p>
                    <p>Your registration as an approved vendor has been finalized under code <strong>${f.code}</strong>.</p>
                    <div class="pt-8"><p class="font-bold">Procurement Manager</p></div>
                </div>
            </div>`
    },
    {
        id: "letter-legal-notice",
        category: "accounting",
        title: "Contract Breach Legal Warning Notice",
        desc: "Formal notice alleging contract violation prior to litigation",
        fields: [
            { id: "party", label: "Defaulting Party", val: "Defaulting Party" },
            { id: "clause", label: "Violated Clause", val: "Clause 12 (Delivery Delay)" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6"><h2 class="text-xl font-bold text-red-800">LEGAL COMPLIANCE NOTICE</h2></div>
                <div class="text-sm space-y-4">
                    <p>To: <strong>${f.party}</strong></p>
                    <p>You are in breach of our agreement under <strong>${f.clause}</strong>. Rectify within 7 days to avoid litigation.</p>
                    <div class="pt-8"><p class="font-bold">Legal Counsel</p></div>
                </div>
            </div>`
    },

    // ----------------------------------------------------
    // 5. WORKPLACE REQUESTS & ENDORSEMENTS (8 Formats)
    // ----------------------------------------------------
    {
        id: "letter-leave-app",
        category: "hr",
        title: "Leave Application Letter",
        desc: "Formal application requesting leave approval from management",
        fields: [
            { id: "empName", label: "Your Name", val: "Shah Rukh Siddiqui" },
            { id: "leaveType", label: "Leave Type", val: "Casual Leave" },
            { id: "days", label: "Number of Days", val: "2 Days" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6"><h2 class="text-xl font-bold">Leave Application</h2></div>
                <div class="text-sm space-y-4">
                    <p>To Management / HR,</p>
                    <p>I am writing to request <strong>${f.days}</strong> of <strong>${f.leaveType}</strong> for urgent personal work.</p>
                    <div class="pt-8"><p class="font-bold">${f.empName}</p></div>
                </div>
            </div>`
    },
    {
        id: "letter-advance-salary",
        category: "hr",
        title: "Advance Salary / Loan Application",
        desc: "Formal request for advance pay deduction from upcoming month salary",
        fields: [
            { id: "empName", label: "Your Name", val: "Shah Rukh Siddiqui" },
            { id: "amount", label: "Amount", val: "30,000 PKR" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6"><h2 class="text-xl font-bold">Advance Salary Request</h2></div>
                <div class="text-sm space-y-4">
                    <p>To Finance Department,</p>
                    <p>I request an advance salary of <strong>${f.amount}</strong> to cover emergency expenses, deductible from next month's payroll.</p>
                    <div class="pt-8"><p class="font-bold">${f.empName}</p></div>
                </div>
            </div>`
    },
    {
        id: "letter-noc",
        category: "hr",
        title: "No Objection Certificate (NOC)",
        desc: "Official NOC for visa, higher studies, or banking procedures",
        fields: [
            { id: "empName", label: "Employee Name", val: "Shah Rukh Siddiqui" },
            { id: "purpose", label: "NOC Purpose", val: "higher education and personal banking" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-serif text-slate-800">
                <div class="text-center border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold">NO OBJECTION CERTIFICATE</h2>
                </div>
                <div class="text-sm font-sans space-y-4 my-6">
                    <p>This is to certify that management has no objection to Mr. <strong>${f.empName}</strong> pursuing <strong>${f.purpose}</strong>.</p>
                </div>
                <div class="mt-12 pt-6 border-t font-sans text-xs"><p class="font-bold">Authorized HR Signatory</p></div>
            </div>`
    },
    {
        id: "letter-grievance",
        category: "hr",
        title: "Workplace Grievance Letter",
        desc: "Formal letter addressing internal workplace issues to management",
        fields: [
            { id: "empName", label: "Your Name", val: "Shah Rukh Siddiqui" },
            { id: "issue", label: "Grievance", val: "office workstation lighting and ventilation" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6"><h2 class="text-xl font-bold">Workplace Grievance</h2></div>
                <div class="text-sm space-y-4">
                    <p>To HR / Admin,</p>
                    <p>I am reporting an operational concern regarding <strong>${f.issue}</strong> for prompt resolution.</p>
                    <div class="pt-8"><p class="font-bold">${f.empName}</p></div>
                </div>
            </div>`
    },
    {
        id: "letter-recommendation",
        category: "hr",
        title: "Letter of Recommendation (LOR)",
        desc: "Endorsement letter written by manager for employee",
        fields: [
            { id: "cand", label: "Candidate Name", val: "Shah Rukh Siddiqui" },
            { id: "role", label: "Role / Pursuit", val: "Advanced Accounting Professional" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-serif text-slate-800">
                <div class="text-center border-b pb-4 mb-6"><h2 class="text-xl font-bold">LETTER OF RECOMMENDATION</h2></div>
                <div class="text-sm font-sans space-y-4 my-6">
                    <p>I strongly recommend <strong>${f.cand}</strong> for <strong>${f.role}</strong>. They exhibit exceptional financial acumen and dedication.</p>
                </div>
                <div class="mt-12 pt-6 border-t font-sans text-xs"><p class="font-bold">Finance Director</p></div>
            </div>`
    },
    {
        id: "letter-authorization",
        category: "hr",
        title: "Official Authorization Letter",
        desc: "Letter delegating authority to a representative",
        fields: [
            { id: "me", label: "Your Name", val: "Shah Rukh Siddiqui" },
            { id: "rep", label: "Representative Name", val: "Representative" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6"><h2 class="text-xl font-bold">AUTHORIZATION LETTER</h2></div>
                <div class="text-sm space-y-4">
                    <p>To Whom It May Concern,</p>
                    <p>I, <strong>${f.me}</strong>, authorize Mr. <strong>${f.rep}</strong> to collect official documents and tax ledgers on my behalf.</p>
                    <div class="pt-8"><p class="font-bold">${f.me}</p></div>
                </div>
            </div>`
    },
    {
        id: "letter-explanation-reply",
        category: "hr",
        title: "Reply to Show Cause / Warning",
        desc: "Employee formal written reply explaining an incident",
        fields: [
            { id: "empName", label: "Your Name", val: "Shah Rukh Siddiqui" },
            { id: "explanation", label: "Explanation", val: "unavoidable transit delay due to traffic and weather" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6"><h2 class="text-xl font-bold">Written Clarification</h2></div>
                <div class="text-sm space-y-4">
                    <p>To HR Committee,</p>
                    <p>In response to the inquiry, I clarify that the incident occurred due to <strong>${f.explanation}</strong>.</p>
                    <div class="pt-8"><p class="font-bold">${f.empName}</p></div>
                </div>
            </div>`
    },
    {
        id: "letter-job-app-cover",
        category: "hr",
        title: "Job Application Cover Letter",
        desc: "Professional cover letter sent along with CV",
        fields: [
            { id: "applicant", label: "Your Name", val: "Shah Rukh Siddiqui" },
            { id: "target", label: "Target Role", val: "Senior Accountant" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6"><h2 class="text-xl font-bold">Job Application Cover Letter</h2></div>
                <div class="text-sm space-y-4">
                    <p>To Hiring Manager,</p>
                    <p>I am applying for the <strong>${f.target}</strong> position. With extensive experience in ledgers, tax filings, and payroll, I am confident in adding immediate value.</p>
                    <div class="pt-8"><p class="font-bold">${f.applicant}</p></div>
                </div>
            </div>`
    },

    // ----------------------------------------------------
    // 6. COMMERCIAL INVOICES & TAX ENGINE
    // ----------------------------------------------------
    {
        id: "invoice-commercial",
        category: "accounting",
        title: "Commercial Tax Invoice (Dynamic Engine)",
        desc: "Professional sales invoice with preset & manual tax rates",
        fields: [
            { id: "clientName", label: "Client Name", val: "Valued Client" },
            { id: "itemDesc", label: "Item / Service Description", val: "Professional Supply Services" },
            { id: "rate", label: "Unit Rate (PKR)", val: "50000" },
            { id: "qty", label: "Quantity", val: "3" },
            { id: "taxRate", label: "Sales Tax Rate (%)", val: "18" }
        ],
        render: (f) => {
            const sub = parseFloat(f.rate || 0) * parseFloat(f.qty || 0);
            const tax = sub * (parseFloat(f.taxRate || 0) / 100);
            const total = sub + tax;
            return `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="flex justify-between border-b pb-4 mb-6">
                    <div>
                        <h2 class="text-2xl font-black text-slate-900">TAX INVOICE</h2>
                        <p class="text-xs text-slate-500">Prepared by Shah Rukh Siddiqui</p>
                    </div>
                    <div class="text-right text-xs">
                        <p><strong>Invoice #:</strong> INV-2026-991</p>
                        <p><strong>Date:</strong> ${new Date().toISOString().split('T')[0]}</p>
                    </div>
                </div>
                <div class="mb-6 text-sm">
                    <p class="text-xs text-slate-500 uppercase font-bold">Billed To:</p>
                    <p class="font-bold text-slate-900">${f.clientName}</p>
                </div>
                <table class="w-full text-sm mb-6 border-collapse">
                    <thead>
                        <tr class="bg-slate-100 text-left border-b">
                            <th class="p-2">Description</th>
                            <th class="p-2 text-center">Qty</th>
                            <th class="p-2 text-right">Rate</th>
                            <th class="p-2 text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b">
                            <td class="p-2">${f.itemDesc}</td>
                            <td class="p-2 text-center">${f.qty}</td>
                            <td class="p-2 text-right">${f.rate}</td>
                            <td class="p-2 text-right">${sub.toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex justify-end text-sm space-y-1">
                    <div class="w-48 space-y-1">
                        <div class="flex justify-between"><span>Subtotal:</span> <span>${sub.toLocaleString()}</span></div>
                        <div class="flex justify-between"><span>Tax (${f.taxRate}%):</span> <span>${tax.toLocaleString()}</span></div>
                        <div class="flex justify-between font-bold border-t pt-1 text-base"><span>Total:</span> <span>PKR ${total.toLocaleString()}</span></div>
                    </div>
                </div>
            `;
        }
    },
    {
        id: "payroll-slip",
        category: "accounting",
        title: "Employee Salary Slip & Payroll Breakdown",
        desc: "Monthly payslip calculating allowances",
        fields: [
            { id: "empName", label: "Employee Name", val: "Shah Rukh Siddiqui" },
            { id: "designation", label: "Designation", val: "Senior Accountant" },
            { id: "basic", label: "Basic Salary (PKR)", val: "80000" },
            { id: "houseRent", label: "House Rent Allowance", val: "20000" },
            { id: "utility", label: "Utility Allowance", val: "10000" },
            { id: "fuel", label: "Fuel Allowance", val: "10000" }
        ],
        render: (f) => {
            const basic = parseFloat(f.basic || 0);
            const hr = parseFloat(f.houseRent || 0);
            const ut = parseFloat(f.utility || 0);
            const fu = parseFloat(f.fuel || 0);
            const gross = basic + hr + ut + fu;
            return `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6 text-center">
                    <h2 class="text-xl font-bold">MONTHLY PAYROLL SLIP</h2>
                    <p class="text-xs text-slate-500">Prepared by Shah Rukh Siddiqui</p>
                </div>
                <div class="grid grid-cols-2 gap-4 text-sm mb-6 bg-slate-50 p-4 rounded">
                    <div><p><strong>Employee:</strong> ${f.empName}</p><p><strong>Designation:</strong> ${f.designation}</p></div>
                    <div class="text-right"><p><strong>Pay Period:</strong> Current Month</p></div>
                </div>
                <table class="w-full text-sm mb-6 border">
                    <tr class="bg-slate-100 border-b"><th class="p-2 text-left">Earnings / Allowances</th><th class="p-2 text-right">Amount (PKR)</th></tr>
                    <tr class="border-b"><td class="p-2">Basic Salary</td><td class="p-2 text-right">${basic.toLocaleString()}</td></tr>
                    <tr class="border-b"><td class="p-2">House Rent Allowance</td><td class="p-2 text-right">${hr.toLocaleString()}</td></tr>
                    <tr class="border-b"><td class="p-2">Utility Allowance</td><td class="p-2 text-right">${ut.toLocaleString()}</td></tr>
                    <tr class="border-b"><td class="p-2">Fuel Allowance</td><td class="p-2 text-right">${fu.toLocaleString()}</td></tr>
                    <tr class="font-bold bg-slate-50"><td class="p-2">Gross Salary</td><td class="p-2 text-right">${gross.toLocaleString()}</td></tr>
                </table>
            </div>`;
        }
    },
    {
        id: "accounting-ledger",
        category: "accounting",
        title: "General Ledger Statement",
        desc: "Account ledger statement tracking debits, credits, and running balances",
        fields: [
            { id: "accountName", label: "Account Name", val: "General Ledger Account" },
            { id: "openingBalance", label: "Opening Balance (PKR)", val: "250000" },
            { id: "debit", label: "Debit Amount (Invoiced)", val: "75000" },
            { id: "credit", label: "Credit Amount (Received)", val: "100000" }
        ],
        render: (f) => {
            const op = parseFloat(f.openingBalance || 0);
            const dr = parseFloat(f.debit || 0);
            const cr = parseFloat(f.credit || 0);
            const closing = op + dr - cr;
            return `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">General Ledger Statement</h2>
                    <p class="text-xs text-slate-500">Account: ${f.accountName} | Managed by Shah Rukh Siddiqui</p>
                </div>
                <div class="space-y-3 text-sm mb-6">
                    <div class="flex justify-between border-b pb-2"><span>Opening Balance:</span> <span class="font-bold">PKR ${op.toLocaleString()}</span></div>
                    <div class="flex justify-between border-b pb-2"><span>Total Debit (Invoices):</span> <span class="font-bold text-red-600">+ PKR ${dr.toLocaleString()}</span></div>
                    <div class="flex justify-between border-b pb-2"><span>Total Credit (Payments):</span> <span class="font-bold text-emerald-600">- PKR ${cr.toLocaleString()}</span></div>
                    <div class="flex justify-between border-b pb-2 text-base font-bold bg-slate-50 p-2 rounded"><span>Net Closing Balance:</span> <span>PKR ${closing.toLocaleString()}</span></div>
                </div>
            </div>`;
        }
    },

    // ----------------------------------------------------
    // 7. VEHICLE & MAINTENANCE
    // ----------------------------------------------------
    {
        id: "vehicle-log",
        category: "vehicle",
        title: "Vehicle Fuel & Maintenance Log (Union Star 70cc)",
        desc: "Odometer, oil change intervals (850-900 km), and fuel tracking",
        fields: [
            { id: "vehicleNo", label: "Vehicle Reg No", val: "KHI-70CC-2026" },
            { id: "currentOdo", label: "Current Odometer (km)", val: "4500" },
            { id: "lastOilChange", label: "Last Oil Change Odo", val: "3600" },
            { id: "fuelFilled", label: "Fuel Refill Liters", val: "3.5" }
        ],
        render: (f) => {
            const current = parseFloat(f.currentOdo || 0);
            const lastOil = parseFloat(f.lastOilChange || 0);
            const diff = current - lastOil;
            const needsOil = diff >= 850;
            return `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold">Vehicle Maintenance & Fuel Log</h2>
                    <p class="text-xs text-slate-500">Managed by Shah Rukh Siddiqui</p>
                </div>
                <div class="space-y-4 text-sm mb-6">
                    <p><strong>Vehicle:</strong> ${f.vehicleNo}</p>
                    <p><strong>Current Odometer:</strong> ${current} km</p>
                    <p><strong>Kilometers since last oil change:</strong> ${diff} km</p>
                    <div class="p-4 rounded ${needsOil ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}">
                        <strong>Status:</strong> ${needsOil ? '⚠️ Oil change due! (Reached 850+ km interval)' : '✅ Engine oil condition optimal.'}
                    </div>
                </div>
            </div>`;
        }
    },

    // ----------------------------------------------------
    // 8. CALCULATORS (Salary, Loan, Area, Volume, Size, Birthday)
    // ----------------------------------------------------
    {
        id: "calc-salary-tax",
        category: "calculators",
        title: "Live Salary Tax & Net Pay Calculator",
        desc: "Calculates annual taxable income and estimated monthly tax deduction",
        fields: [
            { id: "monthlyBasic", label: "Monthly Gross Salary (PKR)", val: "150000" },
            { id: "taxSlab", label: "Estimated Tax Rate (%)", val: "5" }
        ],
        render: (f) => {
            const monthly = parseFloat(f.monthlyBasic || 0);
            const annual = monthly * 12;
            const rate = parseFloat(f.taxSlab || 0);
            const annualTax = annual * (rate / 100);
            const monthlyTax = annualTax / 12;
            const netMonthly = monthly - monthlyTax;
            return `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-blue-900">Live Salary & Tax Calculator Engine</h2>
                    <p class="text-xs text-slate-500">Designed by Shah Rukh Siddiqui</p>
                </div>
                <div class="grid grid-cols-2 gap-4 text-sm mb-6 bg-slate-50 p-4 rounded">
                    <div><p>Gross Monthly:</p><p class="font-bold">PKR ${monthly.toLocaleString()}</p></div>
                    <div><p>Annual Gross:</p><p class="font-bold">PKR ${annual.toLocaleString()}</p></div>
                </div>
                <div class="space-y-2 text-sm border-t pt-4">
                    <div class="flex justify-between"><span>Estimated Monthly Tax (${rate}%):</span> <span class="text-red-600 font-bold">- PKR ${Math.round(monthlyTax).toLocaleString()}</span></div>
                    <div class="flex justify-between text-base font-bold border-t pt-2"><span>Net Take-Home Salary:</span> <span class="text-emerald-700">PKR ${Math.round(netMonthly).toLocaleString()}</span></div>
                </div>
            </div>`;
        }
    },
    {
        id: "calc-loan-emi",
        category: "calculators",
        title: "Loan EMI & Financing Calculator",
        desc: "Calculates monthly installments and total mark-up for bank loans",
        fields: [
            { id: "loanAmount", label: "Loan Principal (PKR)", val: "500000" },
            { id: "interestRate", label: "Annual Mark-up Rate (%)", val: "18" },
            { id: "years", label: "Tenure (Years)", val: "2" }
        ],
        render: (f) => {
            const p = parseFloat(f.loanAmount || 0);
            const r = (parseFloat(f.interestRate || 0) / 100) / 12;
            const n = parseFloat(f.years || 0) * 12;
            const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            const totalPayment = emi * n;
            return `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">Loan EMI Calculator</h2>
                    <p class="text-xs text-slate-500">Installment & Repayment Schedule Engine</p>
                </div>
                <div class="space-y-3 text-sm mb-6">
                    <div class="flex justify-between border-b pb-2"><span>Principal Loan Amount:</span> <span class="font-bold">PKR ${p.toLocaleString()}</span></div>
                    <div class="flex justify-between border-b pb-2"><span>Monthly Installment (EMI):</span> <span class="font-bold text-blue-700 text-lg">PKR ${Math.round(emi || 0).toLocaleString()}</span></div>
                    <div class="flex justify-between border-b pb-2"><span>Total Payable with Mark-up:</span> <span class="font-bold">PKR ${Math.round(totalPayment || 0).toLocaleString()}</span></div>
                </div>
            </div>`;
        }
    },
    {
        id: "calc-area-volume",
        category: "calculators",
        title: "Area, Volume & Dimension Calculator",
        desc: "Calculate rectangular area, perimeter, and box volume instantly",
        fields: [
            { id: "length", label: "Length (ft / meters)", val: "15" },
            { id: "width", label: "Width (ft / meters)", val: "10" },
            { id: "height", label: "Height / Depth (for Volume)", val: "8" }
        ],
        render: (f) => {
            const l = parseFloat(f.length || 0);
            const w = parseFloat(f.width || 0);
            const h = parseFloat(f.height || 0);
            const area = l * w;
            const perimeter = 2 * (l + w);
            const volume = l * w * h;
            return `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">Area, Volume & Size Calculator</h2>
                    <p class="text-xs text-slate-500">Geometric Estimation Tool</p>
                </div>
                <div class="space-y-3 text-sm">
                    <div class="flex justify-between border-b pb-2"><span>Total Surface Area:</span> <span class="font-bold text-blue-700">${area.toLocaleString()} sq. units</span></div>
                    <div class="flex justify-between border-b pb-2"><span>Perimeter:</span> <span class="font-bold">${perimeter.toLocaleString()} units</span></div>
                    <div class="flex justify-between border-b pb-2"><span>Total Volume (3D Box):</span> <span class="font-bold text-emerald-700">${volume.toLocaleString()} cubic units</span></div>
                </div>
            </div>`;
        }
    },
    {
        id: "calc-birthday",
        category: "calculators",
        title: "Birthday & Exact Age Calculator",
        desc: "Calculate exact age in years, months, and days from date of birth",
        fields: [
            { id: "dob", label: "Date of Birth", val: "1995-11-21", type: "date" }
        ],
        render: (f) => {
            const birthDate = new Date(f.dob || "1995-11-21");
            const today = new Date();
            let years = today.getFullYear() - birthDate.getFullYear();
            let months = today.getMonth() - birthDate.getMonth();
            let days = today.getDate() - birthDate.getDate();
            if (days < 0) {
                months--;
                days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            }
            if (months < 0) {
                years--;
                months += 12;
            }
            return `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-purple-900">Birthday & Age Calculator</h2>
                    <p class="text-xs text-slate-500">Exact Time Elapsed Calculator</p>
                </div>
                <div class="grid grid-cols-3 gap-4 text-center my-6">
                    <div class="bg-purple-50 p-4 rounded border border-purple-200">
                        <p class="text-2xl font-black text-purple-800">${years}</p>
                        <p class="text-xs text-slate-600 uppercase font-bold mt-1">Years</p>
                    </div>
                    <div class="bg-purple-50 p-4 rounded border border-purple-200">
                        <p class="text-2xl font-black text-purple-800">${months}</p>
                        <p class="text-xs text-slate-600 uppercase font-bold mt-1">Months</p>
                    </div>
                    <div class="bg-purple-50 p-4 rounded border border-purple-200">
                        <p class="text-2xl font-black text-purple-800">${days}</p>
                        <p class="text-xs text-slate-600 uppercase font-bold mt-1">Days</p>
                    </div>
                </div>
            </div>`;
        }
    },

    // ----------------------------------------------------
    // 9. PERSONAL & FITNESS
    // ----------------------------------------------------
    {
        id: "personal-diet-plan",
        category: "personal",
        title: "Daily Diet, Sugar-Free & Smoothie Planner",
        desc: "Customizable daily nutrition tracker",
        fields: [
            { id: "shakeBase", label: "Shake Ingredients", val: "Milk, Bananas, Dates, Unsweetened Peanut Butter" },
            { id: "sugarRule", label: "Sweetener Policy", val: "Strictly Zero Refined Sugar (Natural sweetness from dates)" },
            { id: "hydration", label: "Hydration Target", val: "3 Liters Water Daily" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-emerald-800">Daily Health & Nutrition Plan</h2>
                    <p class="text-xs text-slate-500">Personalized for Shah Rukh Siddiqui</p>
                </div>
                <div class="space-y-4 text-sm">
                    <div class="p-4 bg-emerald-50 border border-emerald-200 rounded">
                        <p class="font-bold text-emerald-900 mb-1">🥤 Energy Shake Formulation:</p>
                        <p class="text-slate-700">${f.shakeBase}</p>
                    </div>
                    <div class="p-4 bg-slate-50 border border-slate-200 rounded">
                        <p class="font-bold text-slate-900 mb-1">🚫 Dietary Guideline:</p>
                        <p class="text-slate-700">${f.sugarRule}</p>
                    </div>
                    <div class="p-4 bg-blue-50 border border-blue-200 rounded">
                        <p class="font-bold text-blue-900 mb-1">💧 Daily Hydration:</p>
                        <p class="text-slate-700">${f.hydration}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "personal-task-schedule",
        category: "personal",
        title: "Daily Office & Commute Routine Scheduler",
        desc: "Daily timeline management for commute and professional operations",
        fields: [
            { id: "commuteVehicle", label: "Commute Transport", val: "70cc Motorcycle (Daily Commute)" },
            { id: "oilCheck", label: "Daily Checklist", val: "Check engine oil dipstick level before ignition" },
            { id: "workFocus", label: "Primary Work Focus", val: "Excel Payroll, Pivot Tables, Ledger Reconciliations" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">Daily Routine & Task Scheduler</h2>
                    <p class="text-xs text-slate-500">Managed by Shah Rukh Siddiqui</p>
                </div>
                <div class="space-y-4 text-sm">
                    <div class="p-3 bg-slate-50 border rounded"><strong>🛵 Transport:</strong> ${f.commuteVehicle}</div>
                    <div class="p-3 bg-slate-50 border rounded"><strong>🔧 Maintenance:</strong> ${f.oilCheck}</div>
                    <div class="p-3 bg-slate-50 border rounded"><strong>📊 Professional Focus:</strong> ${f.workFocus}</div>
                </div>
            </div>`
    }
];

let currentCategory = 'all';
let activeItem = null;

function renderItemsList(filter = '') {
    const listContainer = document.getElementById('itemsList');
    if (!listContainer) return;
    
    listContainer.innerHTML = '';
    const filtered = hubDatabase.filter(item => {
        const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
        const matchesSearch = item.title.toLowerCase().includes(filter.toLowerCase()) || item.desc.toLowerCase().includes(filter.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        listContainer.innerHTML = `<div class="p-4 text-center text-slate-400 text-sm">No formats found.</div>`;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = `p-4 rounded-xl border transition cursor-pointer bg-white ${activeItem && activeItem.id === item.id ? 'border-blue-600 shadow-sm ring-1 ring-blue-600' : 'border-slate-200 hover:border-slate-300'}`;
        card.onclick = () => selectItem(item);
        card.innerHTML = `
            <div class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600 w-max mb-2">${item.category}</div>
            <h3 class="font-bold text-slate-900 text-sm mb-1">${item.title}</h3>
            <p class="text-xs text-slate-500 line-clamp-2">${item.desc}</p>
        `;
        listContainer.appendChild(card);
    });
}

function setCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.className = "cat-btn px-3 py-1.5 rounded-lg whitespace-nowrap text-slate-600 hover:bg-slate-100 text-sm";
    });
    event.target.className = "cat-btn px-3 py-1.5 rounded-lg whitespace-nowrap bg-blue-50 text-blue-700 font-medium text-sm";
    renderItemsList(document.getElementById('searchInput').value);
}

function filterContent() {
    const query = document.getElementById('searchInput').value;
    renderItemsList(query);
}

function selectItem(item) {
    activeItem = item;
    renderItemsList(document.getElementById('searchInput').value);
    
    document.getElementById('activeItemTitle').innerText = item.title;
    document.getElementById('activeBadge').innerText = item.category.toUpperCase();
    
    const fieldsContainer = document.getElementById('inputFormFields');
    fieldsContainer.innerHTML = '';
    
    item.fields.forEach(field => {
        const div = document.createElement('div');
        div.innerHTML = `
            <label class="block text-xs font-semibold text-slate-600 mb-1">${field.label}</label>
            <input type="${field.type || 'text'}" id="field-${field.id}" value="${field.val}" class="w-full text-xs p-2 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none" oninput="updatePreview()">
        `;
        fieldsContainer.appendChild(div);
    });
    
    updatePreview();
}

function updatePreview() {
    if (!activeItem) return;
    const values = {};
    activeItem.fields.forEach(field => {
        const input = document.getElementById(`field-${field.id}`);
        if (input) values[field.id] = input.value;
    });
    document.getElementById('documentPreview').innerHTML = activeItem.render(values);
}

function copyToClipboard() {
    const preview = document.getElementById('documentPreview');
    if (!preview) return;
    navigator.clipboard.writeText(preview.innerText).then(() => {
        alert('Document text copied to clipboard successfully!');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderItemsList();
    if (hubDatabase.length > 0) {
        selectItem(hubDatabase[0]);
    }
});
