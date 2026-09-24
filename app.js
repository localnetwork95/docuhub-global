{
        id: "letter-probation-confirm",
        category: "hr",
        title: "Probation Confirmation Letter",
        desc: "Official confirmation letter upon successfully completing the probation period",
        fields: [
            { id: "empName", label: "Employee Name", val: "Ali Hassan" },
            { id: "designation", label: "Designation", val: "Assistant Accountant" },
            { id: "company", label: "Company Name", val: "Taj Al Huda" },
            { id: "joinDate", label: "Joining Date", val: "2026-06-01", type: "date" },
            { id: "confDate", label: "Confirmation Date", val: "2026-09-01", type: "date" },
            { id: "newSalary", label: "Revised Monthly Salary", val: "85000" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800 leading-relaxed">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">${f.company}</h2>
                    <p class="text-xs text-slate-500">Human Resources Department</p>
                </div>
                <div class="text-sm space-y-4">
                    <p class="text-right text-xs">Date: ${f.confDate}</p>
                    <p>Dear <strong>${f.empName}</strong>,</p>
                    <p>Consequent to your performance review during the probation period starting <strong>${f.joinDate}</strong>, we are pleased to confirm your appointment as <strong>${f.designation}</strong> effective <strong>${f.confDate}</strong>.</p>
                    <p>Your revised monthly salary will be <strong>PKR/USD ${f.newSalary}</strong>. All other terms and conditions of your employment remain unchanged.</p>
                    <p>We look forward to your continued contribution to the growth of ${f.company}.</p>
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
            { id: "company", label: "Company Name", val: "Burqur Corporation" },
            { id: "stipend", label: "Monthly Stipend", val: "25000" },
            { id: "duration", label: "Duration", val: "3 Months" },
            { id: "startDate", label: "Start Date", val: "2026-10-01", type: "date" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">${f.company}</h2>
                    <p class="text-xs text-slate-500">Internship Program Engagement</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>Dear <strong>${f.internName}</strong>,</p>
                    <p>We are pleased to offer you an internship position in our <strong>${f.dept}</strong> department at <strong>${f.company}</strong> for a duration of <strong>${f.duration}</strong> starting from <strong>${f.startDate}</strong>.</p>
                    <p>You will receive a monthly stipend of <strong>${f.stipend}</strong>. During this program, you will gain hands-on operational experience under professional guidance.</p>
                    <div class="pt-12 flex justify-between text-xs">
                        <div><p class="font-bold">For ${f.company}</p><p class="mt-6 border-t pt-1">Authorized Official</p></div>
                        <div><p class="font-bold">Accepted By</p><p class="mt-6 border-t pt-1">Intern Signature</p></div>
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
            { id: "company", label: "Company Name", val: "Burqur Corporation" },
            { id: "startDate", label: "Start Date", val: "2026-06-01", type: "date" },
            { id: "endDate", label: "End Date", val: "2026-08-31", type: "date" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-serif text-slate-800">
                <div class="text-center border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold uppercase tracking-widest">${f.company}</h2>
                    <p class="text-xs font-sans text-slate-500">INTERNSHIP COMPLETION CERTIFICATE</p>
                </div>
                <div class="text-sm font-sans space-y-4 my-8 text-justify leading-7">
                    <p>This is to certify that <strong>${f.internName}</strong> has successfully completed an internship program in the <strong>${f.dept}</strong> department at <strong>${f.company}</strong> from <strong>${f.startDate}</strong> to <strong>${f.endDate}</strong>.</p>
                    <p>During their tenure, they demonstrated good technical learning aptitude and professional dedication. We wish them all success in their future career.</p>
                </div>
                <div class="mt-16 pt-6 border-t text-xs font-sans">
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
            { id: "empName", label: "Employee Name", val: "Tariq Mahmood" },
            { id: "oldDept", label: "Current Department/Branch", val: "Karachi Workshop" },
            { id: "newDept", label: "New Department/Branch", val: "Head Office Accounts" },
            { id: "company", label: "Company Name", val: "Taj Al Huda" },
            { id: "effDate", label: "Effective Date", val: "2026-10-01", type: "date" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">${f.company}</h2>
                    <p class="text-xs text-slate-500">Internal Office Order — Departmental Transfer</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>Dear <strong>${f.empName}</strong>,</p>
                    <p>This is to formally notify you that you are being transferred from <strong>${f.oldDept}</strong> to <strong>${f.newDept}</strong> effective <strong>${f.effDate}</strong>.</p>
                    <p>Your designation and employment terms will remain unchanged unless specified otherwise in a separate amendment. Please report to the manager of your new location on the effective date.</p>
                    <div class="pt-10">
                        <p class="font-bold">Operations Director</p>
                        <p class="text-xs text-slate-500">${f.company}</p>
                    </div>
                </div>
            </div>`
    },
{
        id: "letter-relieving",
        category: "hr",
        title: "Official Relieving Order Letter",
        desc: "Formal discharge and relieving letter issued on the employee's final working day",
        fields: [
            { id: "empName", label: "Employee Name", val: "Shah Rukh Siddiqui" },
            { id: "designation", label: "Designation", val: "Senior Accountant" },
            { id: "company", label: "Company Name", val: "Bahria Town" },
            { id: "lastDate", label: "Last Working Day", val: "2026-09-30", type: "date" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">${f.company}</h2>
                    <p class="text-xs text-slate-500">HR Clearance & Separation Order</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>Dear <strong>${f.empName}</strong>,</p>
                    <p>With reference to your resignation letter, we hereby relieve you from your responsibilities as <strong>${f.designation}</strong> at <strong>${f.company}</strong> at the close of business hours on <strong>${f.lastDate}</strong>.</p>
                    <p>We confirm that all company assets and ledger handovers assigned to you have been completed satisfactorily.</p>
                    <div class="pt-10">
                        <p class="font-bold">Human Resources Manager</p>
                        <p class="text-xs text-slate-500">${f.company}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-termination",
        category: "hr",
        title: "Official Employment Termination Letter",
        desc: "Formal letter ending employment due to contract end, redundancy, or policy breach",
        fields: [
            { id: "empName", label: "Employee Name", val: "Kashif Bilal" },
            { id: "designation", label: "Designation", val: "Sales Executive" },
            { id: "company", label: "Company Name", val: "Arshe Autos" },
            { id: "termDate", label: "Termination Date", val: "2026-09-30", type: "date" },
            { id: "reason", label: "Reason/Policy Ref", val: "business restructuring and department downsizing" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-red-700">${f.company}</h2>
                    <p class="text-xs text-slate-500">Notice of Employment Termination</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>Dear <strong>${f.empName}</strong>,</p>
                    <p>This letter serves as formal notice that your employment as <strong>${f.designation}</strong> with <strong>${f.company}</strong> will terminate effective <strong>${f.termDate}</strong> due to <strong>${f.reason}</strong>.</p>
                    <p>Your final dues and encashments will be settled after completing the official clearance process.</p>
                    <div class="pt-10">
                        <p class="font-bold">Director Human Resources</p>
                        <p class="text-xs text-slate-500">${f.company}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-resignation-immediate",
        category: "hr",
        title: "Immediate Resignation Letter (Health / Emergency)",
        desc: "Resignation notice requesting waiver of standard notice period due to emergencies",
        fields: [
            { id: "empName", label: "Employee Name", val: "Shah Rukh Siddiqui" },
            { id: "designation", label: "Designation", val: "Accountant" },
            { id: "company", label: "Company Name", val: "Burqur Corp" },
            { id: "resDate", label: "Resignation Date", val: "2026-09-24", type: "date" },
            { id: "reason", label: "Emergency Reason", val: "unforeseen family medical condition requiring immediate relocation" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">Urgent Communication</h2>
                    <p class="text-xs text-slate-500">Immediate Resignation Request</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>Date: ${f.resDate}</p>
                    <p>To Management, <strong>${f.company}</strong></p>
                    <p>Please accept this letter as my immediate resignation from the post of <strong>${f.designation}</strong> effective <strong>${f.resDate}</strong> due to <strong>${f.reason}</strong>.</p>
                    <p>I request management to kindly waive my standard notice period under these exceptional circumstances.</p>
                    <div class="pt-8">
                        <p class="font-bold">${f.empName}</p>
                        <p class="text-xs text-slate-500">${f.designation}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-character-cert",
        category: "hr",
        title: "Character & Conduct Certificate Letter",
        desc: "Certificate confirming employee good standing, conduct, and behavior",
        fields: [
            { id: "empName", label: "Employee Name", val: "Muhammad Bilal" },
            { id: "designation", label: "Designation", val: "Store Officer" },
            { id: "company", label: "Company Name", val: "Bait Al Ezz" },
            { id: "issueDate", label: "Issue Date", val: "2026-09-24", type: "date" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-serif text-slate-800">
                <div class="text-center border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold uppercase tracking-wider">${f.company}</h2>
                    <p class="text-xs font-sans text-slate-500">CHARACTER CERTIFICATE</p>
                </div>
                <div class="text-sm font-sans space-y-4 my-6 text-justify leading-7">
                    <p>This is to certify that Mr./Ms. <strong>${f.empName}</strong> was employed with us as <strong>${f.designation}</strong>. During their tenure, we found them to be honest, punctual, and of high moral character.</p>
                    <p>To the best of our knowledge, they bear a commendable conduct record and hold no disciplinary liabilities.</p>
                </div>
                <div class="mt-12 pt-6 border-t font-sans text-xs">
                    <p class="font-bold">General Manager</p>
                    <p class="text-slate-500">${f.company}</p>
                </div>
            </div>`
    },
{
        id: "letter-warning-performance",
        category: "hr",
        title: "Performance Warning Letter",
        desc: "Official written warning notice regarding sub-standard performance or output",
        fields: [
            { id: "empName", label: "Employee Name", val: "Hamza Sheikh" },
            { id: "designation", label: "Designation", val: "Accounts Assistant" },
            { id: "company", label: "Company Name", val: "Taj Al Huda" },
            { id: "issueDate", label: "Issue Date", val: "2026-09-24", type: "date" },
            { id: "issueDetails", label: "Performance Deficit", val: "repeated delays in daily ledger entries and reconciliation errors" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-amber-600">${f.company}</h2>
                    <p class="text-xs text-slate-500">HR Disciplinary Notice — First Performance Warning</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>Date: ${f.issueDate}</p>
                    <p>To: <strong>${f.empName}</strong> (${f.designation})</p>
                    <p>This letter serves as a formal written warning regarding your recent performance regarding <strong>${f.issueDetails}</strong>.</p>
                    <p>You are requested to show immediate improvement in your daily output within the next 30 days. Failure to meet standard expectations may lead to further administrative action.</p>
                    <div class="pt-8">
                        <p class="font-bold">HR Compliance Officer</p>
                        <p class="text-xs text-slate-500">${f.company}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-show-cause",
        category: "hr",
        title: "Show Cause Notice / Explanation Letter",
        desc: "Formal notice seeking written explanation for unauthorized absence or policy breach",
        fields: [
            { id: "empName", label: "Employee Name", val: "Faisal Naeem" },
            { id: "company", label: "Company Name", val: "Bahria Town" },
            { id: "issueDate", label: "Issue Date", val: "2026-09-24", type: "date" },
            { id: "incident", label: "Incident / Policy Violation", val: "unauthorized absence from duty for 5 consecutive days without prior leave approval" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-red-700">${f.company}</h2>
                    <p class="text-xs text-slate-500">SHOW CAUSE NOTICE</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>Date: ${f.issueDate}</p>
                    <p>To: <strong>${f.empName}</strong></p>
                    <p>It has been brought to the attention of management that you have committed a policy breach: <strong>${f.incident}</strong>.</p>
                    <p>You are hereby directed to submit a written explanation within 48 hours of receiving this notice to explain why disciplinary action should not be initiated against you.</p>
                    <div class="pt-8">
                        <p class="font-bold">Head of Disciplinary Committee</p>
                        <p class="text-xs text-slate-500">${f.company}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-warning-attendance",
        category: "hr",
        title: "Attendance & Tardiness Warning Letter",
        desc: "Formal notice issued for chronic late arrival or unannounced leaves",
        fields: [
            { id: "empName", label: "Employee Name", val: "Zubair Ahmed" },
            { id: "company", label: "Company Name", val: "Sofasticated Fabrics" },
            { id: "lateDays", label: "Late Arrivals Count", val: "8 Days in Current Month" },
            { id: "issueDate", label: "Issue Date", val: "2026-09-24", type: "date" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-amber-700">${f.company}</h2>
                    <p class="text-xs text-slate-500">Attendance Policy Violation Notice</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>To: <strong>${f.empName}</strong></p>
                    <p>Our attendance records indicate that you have logged unexcused late arrivals for <strong>${f.lateDays}</strong>.</p>
                    <p>Punctuality is essential to maintain smooth workplace operations. Continued violation of shift timings will result in salary deductions as per company policy.</p>
                    <div class="pt-8">
                        <p class="font-bold">Human Resources Department</p>
                        <p class="text-xs text-slate-500">${f.company}</p>
                    </div>
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
            { id: "company", label: "Company Name", val: "Burqur Corporation" },
            { id: "duration", label: "Suspension Duration", val: "7 Days" },
            { id: "effDate", label: "Effective Date", val: "2026-09-25", type: "date" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-red-800">${f.company}</h2>
                    <p class="text-xs text-slate-500">Official Order — Administrative Suspension</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>To: <strong>${f.empName}</strong></p>
                    <p>You are hereby placed under administrative suspension for a period of <strong>${f.duration}</strong> starting <strong>${f.effDate}</strong> pending the outcome of an internal investigation.</p>
                    <p>During this period, you are required to remain available to answer inquiries from the investigation committee.</p>
                    <div class="pt-8">
                        <p class="font-bold">Managing Director</p>
                        <p class="text-xs text-slate-500">${f.company}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-promotion",
        category: "hr",
        title: "Promotion & Designation Revision Letter",
        desc: "Official announcement of employee designation elevation and salary revision",
        fields: [
            { id: "empName", label: "Employee Name", val: "Shah Rukh Siddiqui" },
            { id: "oldTitle", label: "Former Designation", val: "Accountant" },
            { id: "newTitle", label: "New Designation", val: "Senior Accountant" },
            { id: "company", label: "Company Name", val: "Taj Al Huda" },
            { id: "effDate", label: "Effective Date", val: "2026-09-01", type: "date" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">${f.company}</h2>
                    <p class="text-xs text-slate-500">Letter of Promotion</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>Dear <strong>${f.empName}</strong>,</p>
                    <p>In recognition of your outstanding dedication and performance, management is pleased to promote you from <strong>${f.oldTitle}</strong> to <strong>${f.newTitle}</strong> effective <strong>${f.effDate}</strong>.</p>
                    <p>We appreciate your valuable contributions and wish you continued leadership success in your elevated role.</p>
                    <div class="pt-8">
                        <p class="font-bold">Chief Executive Officer</p>
                        <p class="text-xs text-slate-500">${f.company}</p>
                    </div>
                </div>
            </div>`
    },
{
        id: "letter-b2b-proposal",
        category: "accounting",
        title: "Commercial Business Proposal Cover Letter",
        desc: "Professional proposal cover page for presenting client quotes and deals",
        fields: [
            { id: "clientName", label: "Client/Company Name", val: "Sofasticated Fabrics" },
            { id: "senderComp", label: "Your Company Name", val: "Taj Al Huda Trading" },
            { id: "project", label: "Proposal Subject", val: "Supply of Premium Curtain Fabrics & Accessories" },
            { id: "date", label: "Date", val: "2026-09-24", type: "date" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">${f.senderComp}</h2>
                    <p class="text-xs text-slate-500">Commercial Proposal Submission</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>Date: ${f.date}</p>
                    <p>To: Procurement Department, <strong>${f.clientName}</strong></p>
                    <p><strong>Subject: Business Proposal — ${f.project}</strong></p>
                    <p>We are pleased to present our official commercial proposal for <strong>${f.project}</strong>. Our team is committed to delivering top-tier quality and competitive wholesale rates.</p>
                    <p>Please review the enclosed technical and commercial specifications. We look forward to establishing a mutually beneficial partnership.</p>
                    <div class="pt-8">
                        <p class="font-bold">Sales & Business Head</p>
                        <p class="text-xs text-slate-500">${f.senderComp}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-payment-reminder-1",
        category: "accounting",
        title: "Soft Payment Reminder Letter",
        desc: "Polite initial reminder letter for overdue invoice recovery",
        fields: [
            { id: "clientName", label: "Client Name", val: "Bait Al Ezz Curtains" },
            { id: "invNo", label: "Invoice Reference", val: "INV-2026-88" },
            { id: "amount", label: "Overdue Amount", val: "45,000 PKR" },
            { id: "dueDate", label: "Original Due Date", val: "2026-09-10", type: "date" },
            { id: "myComp", label: "Your Company Name", val: "Taj Al Huda" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">${f.myComp}</h2>
                    <p class="text-xs text-slate-500">Accounts Receivable Department</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>To: Accounts Payable, <strong>${f.clientName}</strong></p>
                    <p><strong>Subject: Payment Friendly Reminder — Invoice ${f.invNo}</strong></p>
                    <p>This is a polite reminder that invoice <strong>${f.invNo}</strong> for the amount of <strong>${f.amount}</strong> was due on <strong>${f.dueDate}</strong>.</p>
                    <p>If payment has already been remitted, please accept our thanks. Otherwise, kindly expedite the transfer at your earliest convenience.</p>
                    <div class="pt-8">
                        <p class="font-bold">Accounts Manager</p>
                        <p class="text-xs text-slate-500">${f.myComp}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-payment-reminder-2",
        category: "accounting",
        title: "Urgent Payment Demand Letter",
        desc: "Final warning letter for overdue balance collection prior to legal recovery",
        fields: [
            { id: "clientName", label: "Client Name", val: "Nexus Corp" },
            { id: "invNo", label: "Invoice No", val: "INV-2026-102" },
            { id: "amount", label: "Unpaid Balance", val: "120,000 PKR" },
            { id: "myComp", label: "Your Company Name", val: "Taj Al Huda" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-red-700">${f.myComp}</h2>
                    <p class="text-xs text-slate-500">FINAL DEMAND NOTICE</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>To: Management, <strong>${f.clientName}</strong></p>
                    <p>Despite previous reminders, invoice <strong>${f.invNo}</strong> totaling <strong>${f.amount}</strong> remains unpaid.</p>
                    <p>Please note that unless full settlement is made within 5 business days, we will be compelled to suspend further deliveries and initiate official recovery protocols.</p>
                    <div class="pt-8">
                        <p class="font-bold">Head of Finance & Recovery</p>
                        <p class="text-xs text-slate-500">${f.myComp}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-quotation-cover",
        category: "accounting",
        title: "Quotation Transmittal Cover Letter",
        desc: "Cover letter sent along with formal price quotes to prospective buyers",
        fields: [
            { id: "client", label: "Client Name", val: "Arshe Autos" },
            { id: "quoteNo", label: "Quote Number", val: "QT-2026-44" },
            { id: "myComp", label: "Your Company Name", val: "Burqur Corporation" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">${f.myComp}</h2>
                    <p class="text-xs text-slate-500">Commercial Sales Division</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>To: <strong>${f.client}</strong></p>
                    <p>Thank you for your interest in our products. Enclosed please find our formal Quotation Reference <strong>${f.quoteNo}</strong> as per your request.</p>
                    <p>This quotation remains valid for 15 days. Please feel free to reach out for any technical adjustments.</p>
                    <div class="pt-8">
                        <p class="font-bold">Sales Executive</p>
                        <p class="text-xs text-slate-500">${f.myComp}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-vendor-approval",
        category: "accounting",
        title: "Official Vendor Registration & Approval Letter",
        desc: "Letter confirming supplier onboarding into official vendor list",
        fields: [
            { id: "vendorName", label: "Vendor/Supplier Name", val: "Union Star Spare Parts" },
            { id: "vCode", label: "Assigned Vendor Code", val: "VND-2026-09" },
            { id: "myComp", label: "Your Company Name", val: "Taj Al Huda" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">${f.myComp}</h2>
                    <p class="text-xs text-slate-500">Procurement & Supply Chain Management</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>Dear <strong>${f.vendorName}</strong>,</p>
                    <p>We are pleased to inform you that your registration as an approved vendor has been finalized under Vendor Code <strong>${f.vCode}</strong>.</p>
                    <p>You are now eligible to receive official Purchase Orders (POs) from our accounting department.</p>
                    <div class="pt-8">
                        <p class="font-bold">Procurement Manager</p>
                        <p class="text-xs text-slate-500">${f.myComp}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-legal-notice",
        category: "hr",
        title: "Contract Breach Legal Warning Notice",
        desc: "Formal notice alleging contract violation prior to filing litigation",
        fields: [
            { id: "partyName", label: "Defaulting Party Name", val: "Apex Traders" },
            { id: "clause", label: "Violated Agreement Clause", val: "Clause 12 (Non-payment & Delivery Delay)" },
            { id: "myComp", label: "Your Company Name", val: "Taj Al Huda" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-red-800">${f.myComp}</h2>
                    <p class="text-xs text-slate-500">LEGAL COMPLIANCE NOTICE</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>To: <strong>${f.partyName}</strong></p>
                    <p>Take notice that you are in breach of our mutual agreement under <strong>${f.clause}</strong>.</p>
                    <p>You are hereby called upon to rectify this breach within 7 days, failing which legal proceedings will be initiated at your sole risk and cost.</p>
                    <div class="pt-8">
                        <p class="font-bold">Legal Counsel</p>
                        <p class="text-xs text-slate-500">${f.myComp}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-po-transmittal",
        category: "accounting",
        title: "Purchase Order (PO) Transmittal Letter",
        desc: "Formal cover letter accompanying official Purchase Orders to suppliers",
        fields: [
            { id: "vendor", label: "Vendor Name", val: "KMC Chain Suppliers" },
            { id: "poNo", label: "PO Number", val: "PO-2026-901" },
            { id: "myComp", label: "Your Company Name", val: "Arshe Autos" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">${f.myComp}</h2>
                    <p class="text-xs text-slate-500">Official Purchase Order Dispatch</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>To: <strong>${f.vendor}</strong></p>
                    <p>Please find attached our official Purchase Order <strong>${f.poNo}</strong>. Kindly confirm receipt and provide an estimated delivery timeline.</p>
                    <div class="pt-8">
                        <p class="font-bold">Purchase Officer</p>
                        <p class="text-xs text-slate-500">${f.myComp}</p>
                    </div>
                </div>
            </div>`
    },
{
        id: "letter-leave-app",
        category: "hr",
        title: "Casual / Sick Leave Application Letter",
        desc: "Formal application letter requesting leave approval from management",
        fields: [
            { id: "empName", label: "Your Name", val: "Shah Rukh Siddiqui" },
            { id: "designation", label: "Designation", val: "Senior Accountant" },
            { id: "leaveType", label: "Type of Leave", val: "Casual Leave" },
            { id: "days", label: "Number of Days", val: "2 Days" },
            { id: "fromDate", label: "Start Date", val: "2026-09-28", type: "date" },
            { id: "reason", label: "Reason for Leave", val: "urgent domestic personal work" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">Application for Leave</h2>
                    <p class="text-xs text-slate-500">Employee Formal Leave Request</p>
                </div>
                <div class="text-sm space-y-4">
                    <p>To: The Management / HR</p>
                    <p>Respected Sir/Madam,</p>
                    <p>I am writing to request <strong>${f.days}</strong> of <strong>${f.leaveType}</strong> starting from <strong>${f.fromDate}</strong> due to <strong>${f.reason}</strong>.</p>
                    <p>I will ensure all urgent accounting ledgers are up to date prior to proceeding on leave.</p>
                    <div class="pt-8">
                        <p class="font-bold">${f.empName}</p>
                        <p class="text-xs text-slate-500">${f.designation}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-advance-salary",
        category: "hr",
        title: "Advance Salary / Loan Application Letter",
        desc: "Formal request for advance pay deduction from upcoming month salary",
        fields: [
            { id: "empName", label: "Your Name", val: "Shah Rukh Siddiqui" },
            { id: "amount", label: "Requested Advance Amount", val: "30,000 PKR" },
            { id: "reason", label: "Reason", val: "urgent motorcycle maintenance and family expenses" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">Advance Salary Request</h2>
                </div>
                <div class="text-sm space-y-4">
                    <p>To: Finance Department</p>
                    <p>I request an advance salary of <strong>${f.amount}</strong> to cover <strong>${f.reason}</strong>. I authorize the company to deduct this amount from my upcoming salary.</p>
                    <div class="pt-8">
                        <p class="font-bold">${f.empName}</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-noc",
        category: "hr",
        title: "No Objection Certificate (NOC) Letter",
        desc: "Official NOC for visa, higher studies, or bank account processing",
        fields: [
            { id: "empName", label: "Employee Name", val: "Shah Rukh Siddiqui" },
            { id: "company", label: "Company Name", val: "Taj Al Huda" },
            { id: "purpose", label: "NOC Purpose", val: "higher education and personal banking procedures" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-serif text-slate-800">
                <div class="text-center border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold tracking-wider">${f.company}</h2>
                    <p class="text-xs font-sans text-slate-500">NO OBJECTION CERTIFICATE</p>
                </div>
                <div class="text-sm font-sans space-y-4 my-6 text-justify">
                    <p>This is to certify that <strong>${f.company}</strong> has no objection to Mr. <strong>${f.empName}</strong> pursuing <strong>${f.purpose}</strong>.</p>
                </div>
                <div class="mt-12 pt-6 border-t font-sans text-xs">
                    <p class="font-bold">Authorized HR Signatory</p>
                    <p class="text-slate-500">${f.company}</p>
                </div>
            </div>`
    },
    {
        id: "letter-grievance",
        category: "hr",
        title: "Workplace Grievance & Complaint Letter",
        desc: "Formal letter addressing internal workplace issues to management",
        fields: [
            { id: "empName", label: "Your Name", val: "Shah Rukh Siddiqui" },
            { id: "issue", label: "Grievance Subject", val: "workstation lighting and ventilation maintenance in accounting office" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6"><h2 class="text-xl font-bold">Formal Grievance Communication</h2></div>
                <div class="text-sm space-y-4">
                    <p>To: HR / Admin Department</p>
                    <p>I am bringing to your attention an operational concern regarding <strong>${f.issue}</strong>. Kindly look into resolving this matter to ensure a productive environment.</p>
                    <div class="pt-8"><p class="font-bold">${f.empName}</p></div>
                </div>
            </div>`
    },
    {
        id: "letter-recommendation",
        category: "hr",
        title: "Letter of Recommendation (LOR)",
        desc: "Endorsement letter written by manager for employee higher education or job",
        fields: [
            { id: "empName", label: "Candidate Name", val: "Shah Rukh Siddiqui" },
            { id: "manager", label: "Manager Name", val: "Finance Director" },
            { id: "company", label: "Company Name", val: "Burqur Corporation" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-serif text-slate-800">
                <div class="text-center border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold uppercase">${f.company}</h2>
                    <p class="text-xs font-sans text-slate-500">LETTER OF RECOMMENDATION</p>
                </div>
                <div class="text-sm font-sans space-y-4 my-6 text-justify leading-7">
                    <p>I am writing this recommendation for <strong>${f.empName}</strong>, who worked closely under my supervision. They exhibited exemplary financial acumen, dedication, and problem-solving capabilities.</p>
                    <p>I recommend them without reservation for any advanced role or academic pursuit.</p>
                </div>
                <div class="mt-12 pt-6 border-t font-sans text-xs">
                    <p class="font-bold">${f.manager}</p>
                    <p class="text-slate-500">${f.company}</p>
                </div>
            </div>`
    },
    {
        id: "letter-authorization",
        category: "hr",
        title: "Official Authorization Letter",
        desc: "Letter delegating authority to a representative to collect official documents",
        fields: [
            { id: "authorizer", label: "Your Name", val: "Shah Rukh Siddiqui" },
            { id: "delegate", label: "Authorized Person Name", val: "Ali Hassan" },
            { id: "task", label: "Authorized Action / Document", val: "collecting tax certificates and ledger books" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6"><h2 class="text-xl font-bold">AUTHORIZATION LETTER</h2></div>
                <div class="text-sm space-y-4">
                    <p>To Whom It May Concern,</p>
                    <p>I, <strong>${f.authorizer}</strong>, hereby authorize Mr. <strong>${f.delegate}</strong> to act on my behalf for <strong>${f.task}</strong>.</p>
                    <p>Any action taken by them in this regard shall be deemed fully authorized by me.</p>
                    <div class="pt-8 flex justify-between text-xs">
                        <div><p class="font-bold">Authorizer Signature</p><p>${f.authorizer}</p></div>
                        <div><p class="font-bold">Delegate Specimen Signature</p><p>${f.delegate}</p></div>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-explanation-reply",
        category: "hr",
        title: "Reply to Show Cause / Warning Notice",
        desc: "Employee formal written reply explaining an incident to management",
        fields: [
            { id: "empName", label: "Your Name", val: "Shah Rukh Siddiqui" },
            { id: "refNotice", label: "Notice Reference", val: "SCN-2026-04" },
            { id: "replyText", label: "Your Clarification", val: "unavoidable road traffic delay due to heavy rainfall in Karachi" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6"><h2 class="text-xl font-bold">Written Clarification / Reply</h2></div>
                <div class="text-sm space-y-4">
                    <p>To: HR Disciplinary Committee</p>
                    <p>With reference to notice <strong>${f.refNotice}</strong>, I respectfully submit that the situation occurred due to <strong>${f.replyText}</strong>.</p>
                    <p>I assure management of my full compliance with workplace protocols in the future.</p>
                    <div class="pt-8"><p class="font-bold">${f.empName}</p></div>
                </div>
            </div>`
    },
    {
        id: "letter-job-app-cover",
        category: "hr",
        title: "Job Application Cover Letter",
        desc: "Professional cover letter sent along with CV for job applications",
        fields: [
            { id: "applicant", label: "Your Name", val: "Shah Rukh Siddiqui" },
            { id: "targetRole", label: "Target Position", val: "Senior Accountant" },
            { id: "targetComp", label: "Target Company", val: "Global Logistics Ltd" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6"><h2 class="text-xl font-bold">Job Application Cover Letter</h2></div>
                <div class="text-sm space-y-4">
                    <p>To: Hiring Manager, <strong>${f.targetComp}</strong></p>
                    <p>I am writing to express my strong interest in the <strong>${f.targetRole}</strong> position at <strong>${f.targetComp}</strong>. With extensive experience in accounting ledgers, tax filings, and payroll, I am confident in my ability to contribute value to your team.</p>
                    <p>My resume is attached for your review. I look forward to the opportunity for an interview.</p>
                    <div class="pt-8"><p class="font-bold">${f.applicant}</p></div>
                </div>
            </div>`
    }
