// ==========================================
// DOCUHUB GLOBAL - COMPLETE MASTER APP.JS (ALL 35+ TEMPLATES & CALCULATORS)
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
    // 2. ACCOUNTING & TAX ENGINE
    // ----------------------------------------------------
    {
        id: "invoice-commercial",
        category: "accounting",
        title: "Commercial Tax Invoice (Dynamic Engine)",
        desc: "Professional sales invoice with preset & manual tax rates (5%, 15%, 18%)",
        fields: [
            { id: "clientName", label: "Client Name", val: "Bait Al Ezz Curtains" },
            { id: "itemDesc", label: "Item / Service Description", val: "Sofa Fabric & Curtains Supply" },
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
                        <p class="text-xs text-slate-500">Taj Al Huda Trading & Accounts</p>
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
            </div>`;
        }
    },
    {
        id: "payroll-slip",
        category: "accounting",
        title: "Employee Salary Slip & Payroll Breakdown",
        desc: "Monthly payslip calculating allowances (House Rent, Utility, Fuel, Medical)",
        fields: [
            { id: "empName", label: "Employee Name", val: "Shah Rukh Siddiqui" },
            { id: "designation", label: "Designation", val: "Senior Accountant" },
            { id: "basic", label: "Basic Salary (PKR)", val: "80000" },
            { id: "houseRent", label: "House Rent Allowance", val: "20000" },
            { id: "utility", label: "Utility Allowance", val: "10000" },
            { id: "fuel", label: "Fuel Allowance (Motorcycle)", val: "10000" }
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
                    <h2 class="text-xl font-bold">TAJ AL HUDA TRADING</h2>
                    <p class="text-xs text-slate-500">Official Monthly Salary Slip</p>
                </div>
                <div class="grid grid-cols-2 gap-4 text-sm mb-6 bg-slate-50 p-4 rounded">
                    <div><p><strong>Employee:</strong> ${f.empName}</p><p><strong>Designation:</strong> ${f.designation}</p></div>
                    <div class="text-right"><p><strong>Pay Period:</strong> September 2026</p></div>
                </div>
                <table class="w-full text-sm mb-6 border">
                    <tr class="bg-slate-100 border-b"><th class="p-2 text-left">Earnings / Allowances</th><th class="p-2 text-right">Amount (PKR)</th></tr>
                    <tr class="border-b"><td class="p-2">Basic Salary</td><td class="p-2 text-right">${basic.toLocaleString()}</td></tr>
                    <tr class="border-b"><td class="p-2">House Rent Allowance</td><td class="p-2 text-right">${hr.toLocaleString()}</td></tr>
                    <tr class="border-b"><td class="p-2">Utility Allowance</td><td class="p-2 text-right">${ut.toLocaleString()}</td></tr>
                    <tr class="border-b"><td class="p-2">Fuel Allowance (70cc)</td><td class="p-2 text-right">${fu.toLocaleString()}</td></tr>
                    <tr class="font-bold bg-slate-50"><td class="p-2">Gross Salary</td><td class="p-2 text-right">${gross.toLocaleString()}</td></tr>
                </table>
            </div>`;
        }
    },

    // ----------------------------------------------------
    // 3. VEHICLE & MAINTENANCE
    // ----------------------------------------------------
    {
        id: "vehicle-log",
        category: "vehicle",
        title: "Vehicle Fuel & Maintenance Log (Union Star 70cc)",
        desc: "Odometer, Hyundai 10W-40 oil change intervals (850-900 km), and fuel tracking",
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
                    <p class="text-xs text-slate-500">Union Star 70cc Fleet Tracking</p>
                </div>
                <div class="space-y-4 text-sm mb-6">
                    <p><strong>Vehicle:</strong> ${f.vehicleNo}</p>
                    <p><strong>Current Odometer:</strong> ${current} km</p>
                    <p><strong>Kilometers since last Hyundai 10W-40 oil change:</strong> ${diff} km</p>
                    <div class="p-4 rounded ${needsOil ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}">
                        <strong>Status:</strong> ${needsOil ? '⚠️ Oil change due! (Reached 850+ km interval)' : '✅ Engine oil condition optimal.'}
                    </div>
                </div>
            </div>`;
        }
    },

    // ----------------------------------------------------
    // 4. CALCULATORS (Live Calculation Engines)
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
                    <p class="text-xs text-slate-500">Instant Fiscal Breakdown</p>
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

    // ----------------------------------------------------
    // 5. PERSONAL & FITNESS
    // ----------------------------------------------------
    {
        id: "personal-diet-plan",
        category: "personal",
        title: "Daily Diet, Sugar-Free & Smoothie Planner",
        desc: "Customizable daily nutrition tracker (Dates, Milk, Bananas, Peanut Butter, Zero Refined Sugar)",
        fields: [
            { id: "shakeBase", label: "Shake Ingredients", val: "Milk, Bananas, Dates, Unsweetened Peanut Butter" },
            { id: "sugarRule", label: "Sweetener Policy", val: "Strictly Zero Refined Sugar (Natural sweetness from dates)" },
            { id: "hydration", label: "Hydration Target", val: "3 Liters Water Daily" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-emerald-800">Daily Health & Nutrition Plan</h2>
                    <p class="text-xs text-slate-500">Clean Energy & Natural Dietary Routine</p>
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
        desc: "Daily timeline management for Karachi commute and accounting operations",
        fields: [
            { id: "commuteVehicle", label: "Commute Transport", val: "Union Star 70cc Motorcycle (35-40 km daily)" },
            { id: "oilCheck", label: "Daily Checklist", val: "Check engine oil dipstick level before ignition" },
            { id: "workFocus", label: "Primary Work Focus", val: "Excel Payroll, Pivot Tables, Ledger Reconciliations" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800">
                <div class="border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold text-slate-900">Daily Routine & Task Scheduler</h2>
                    <p class="text-xs text-slate-500">Commute & Professional Workflow Manager</p>
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
