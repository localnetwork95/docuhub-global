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
            { id: "company", label: "Company Name", val: "Taj Al Huda" },
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
            { id: "company", label: "Company Name", val: "Taj Al Huda" },
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
            { id: "company", label: "Company Name", val: "Taj Al Huda" },
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
            { id: "company", label: "Company Name", val: "Taj Al Huda" },
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
            { id: "company", label: "Company Name", val: "Taj Al Huda" }
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
            { id: "company", label: "Company Name", val: "Taj Al Huda" }
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
            { id: "company", label: "Company Name", val: "Taj Al Huda" },
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
            { id: "company", label: "Company Name", val: "Taj Al Huda" },
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
            { id: "company", label: "Company Name", val: "Taj Al Huda" },
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
            { id: "company", label: "Company Name", val: "Taj Al Huda" },
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
            { id: "company", label: "Company Name", val: "Taj Al Huda" },
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
            { id: "company", label: "Company Name", val: "Taj Al Huda" }
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
            { id: "company", label: "Company Name", val: "Taj Al Huda" },
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
            { id: "company", label: "Company Name", val: "Taj Al Huda" },
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
            { id: "company", label: "Company Name", val: "Taj Al Huda" },
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
            { id: "sender", label: "Your Company", val: "Taj Al Huda Trading" },
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
            { id: "purpose", label: "NOC Purpose", val: "higher education and personal banking" },
            { id: "company", label: "Company Name", val: "Taj Al Huda" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6"><h2 class="text-xl font-bold">No Objection Certificate (NOC)</h2></div>
                <div class="text-sm space-y-4">
                    <p>This is to certify that <strong>${f.company}</strong> has no objection to <strong>${f.empName}</strong> undertaking <strong>${f.purpose}</strong>.</p>
                    <div class="pt-8"><p class="font-bold">Director Administration</p></div>
                </div>
            </div>`
    }
];

// UI Controller & State Management
let currentActiveId = hubDatabase[0].id;
let activeCategory = 'all';

function initDocuHub() {
    renderSidebarList();
    loadTemplateEditor(currentActiveId);
    setupEventListeners();
}

function renderSidebarList() {
    const listContainer = document.getElementById('templateList');
    if (!listContainer) return;

    const searchTerm = document.getElementById('searchTemplates')?.value.toLowerCase() || '';
    
    const filtered = hubDatabase.filter(item => {
        const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchTerm) || item.desc.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    listContainer.innerHTML = filtered.map(item => `
        <div onclick="switchTemplate('${item.id}')" 
             class="p-3 mb-2 rounded-lg cursor-pointer transition-all border ${item.id === currentActiveId ? 'bg-blue-50 border-blue-500 shadow-sm' : 'bg-white border-slate-200 hover:bg-slate-50'}">
            <h4 class="text-xs font-bold text-slate-800">${item.title}</h4>
            <p class="text-[10px] text-slate-500 truncate mt-0.5">${item.desc}</p>
        </div>
    `).join('');
}

function switchTemplate(id) {
    currentActiveId = id;
    renderSidebarList();
    loadTemplateEditor(id);
}

function loadTemplateEditor(id) {
    const template = hubDatabase.find(t => t.id === id);
    if (!template) return;

    const titleEl = document.getElementById('activeTemplateTitle');
    const descEl = document.getElementById('activeTemplateDesc');
    const fieldsContainer = document.getElementById('dynamicFieldsContainer');

    if (titleEl) titleEl.innerText = template.title;
    if (descEl) descEl.innerText = template.desc;

    if (fieldsContainer) {
        fieldsContainer.innerHTML = template.fields.map(f => `
            <div class="mb-3">
                <label class="block text-xs font-medium text-slate-700 mb-1">${f.label}</label>
                <input type="${f.type || 'text'}" id="field_${f.id}" value="${f.val}" oninput="updateLivePreview()"
                    class="w-full px-3 py-1.5 text-xs border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none">
            </div>
        `).join('');
    }

    updateLivePreview();
}

function updateLivePreview() {
    const template = hubDatabase.find(t => t.id === currentActiveId);
    if (!template) return;

    const fieldValues = {};
    template.fields.forEach(f => {
        const inputEl = document.getElementById(`field_${f.id}`);
        fieldValues[f.id] = inputEl ? inputEl.value : f.val;
    });

    const previewContainer = document.getElementById('livePreviewArea');
    if (previewContainer) {
        previewContainer.innerHTML = template.render(fieldValues);
    }
}

function setupEventListeners() {
    const searchInput = document.getElementById('searchTemplates');
    if (searchInput) {
        searchInput.addEventListener('input', renderSidebarList);
    }
}

function filterCategory(cat) {
    activeCategory = cat;
    renderSidebarList();
}

function printDocument() {
    window.print();
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initDocuHub);
