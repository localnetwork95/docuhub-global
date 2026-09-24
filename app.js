const hubDatabase = [
    // ----------------------------------------------------
    // 1. HR & EMPLOYMENT LETTERS
    // ----------------------------------------------------
    {
        id: "letter-resignation",
        category: "hr",
        title: "Resignation Letter (Standard / Health / Education)",
        desc: "Official resignation letter with notice period, reason selection and dynamic dates",
        fields: [
            { id: "empName", label: "Employee Name", val: "Shah Rukh Siddiqui" },
            { id: "designation", label: "Your Designation", val: "Senior Accountant" },
            { id: "company", label: "Company Name", val: "Acme Global Trading" },
            { id: "manager", label: "Manager / HR Name", val: "HR Manager" },
            { id: "resDate", label: "Resignation Date", val: "2026-09-24", type: "date" },
            { id: "lastDate", label: "Last Working Day", val: "2026-10-24", type: "date" },
            { id: "reason", label: "Reason for Resignation", val: "personal reasons and pursuing higher professional goals" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-serif text-slate-800 leading-relaxed shadow-sm">
                <div class="border-b-2 border-slate-800 pb-4 mb-6">
                    <h2 class="text-xl font-bold uppercase tracking-wider text-slate-900">${f.company}</h2>
                    <p class="text-xs text-slate-500 font-sans">Official Employment Correspondence</p>
                </div>
                <div class="text-sm font-sans mb-6">
                    <p><strong>Date:</strong> ${f.resDate}</p>
                    <p class="mt-2"><strong>To:</strong> ${f.manager}</p>
                    <p><strong>Company:</strong> ${f.company}</p>
                </div>
                <div class="text-sm space-y-4">
                    <p class="font-bold border-b pb-1">Subject: Formal Resignation — ${f.designation}</p>
                    <p>Dear ${f.manager},</p>
                    <p>Please accept this letter as formal notification that I am resigning from my position as <strong>${f.designation}</strong> at <strong>${f.company}</strong>. My resignation is due to <strong>${f.reason}</strong>.</p>
                    <p>My last working day with the company will be <strong>${f.lastDate}</strong>, in accordance with my required notice period.</p>
                    <p>I am grateful for the opportunities I have had during my time with ${f.company}. I will ensure a smooth handover of my daily responsibilities and accounting ledgers before my final departure date.</p>
                    <p class="pt-6">Sincerely,</p>
                    <p class="font-bold text-base mt-2">${f.empName}</p>
                    <p class="text-xs text-slate-500 font-sans">${f.designation}</p>
                </div>
            </div>`
    },
    {
        id: "letter-experience",
        category: "hr",
        title: "Experience & Service Certificate",
        desc: "Relieving letter and work experience certificate for departing employees",
        fields: [
            { id: "empName", label: "Employee Name", val: "John Doe" },
            { id: "designation", label: "Designation", val: "Operations Manager" },
            { id: "company", label: "Company Name", val: "Global Enterprise Ltd" },
            { id: "joinDate", label: "Joining Date", val: "2022-01-15", type: "date" },
            { id: "relDate", label: "Relieving Date", val: "2026-08-31", type: "date" },
            { id: "issueDate", label: "Issue Date", val: "2026-09-24", type: "date" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-serif text-slate-800 leading-relaxed">
                <div class="text-center border-b-2 border-slate-900 pb-4 mb-8">
                    <h1 class="text-2xl font-bold uppercase tracking-widest text-slate-900">${f.company}</h1>
                    <p class="text-xs font-sans text-slate-500 mt-1">HUMAN RESOURCES DEPARTMENT — EXPERIENCE CERTIFICATE</p>
                </div>
                <div class="text-right text-xs font-sans mb-6">Date: ${f.issueDate}</div>
                <div class="text-center my-6">
                    <span class="border-b-2 border-slate-800 pb-1 text-lg font-bold uppercase tracking-wider">TO WHOM IT MAY CONCERN</span>
                </div>
                <div class="text-sm space-y-4 text-justify mt-6 font-sans leading-7">
                    <p>This is to certify that <strong>${f.empName}</strong> was employed with <strong>${f.company}</strong> as a <strong>${f.designation}</strong> from <strong>${f.joinDate}</strong> to <strong>${f.relDate}</strong>.</p>
                    <p>During their tenure with us, we found them to be hardworking, dedicated, and professional in performing all assigned duties. Their character and conduct were excellent throughout their service period.</p>
                    <p>We accept their resignation and relieve them from their duties effective <strong>${f.relDate}</strong>. We wish them all the best in their future career endeavors.</p>
                </div>
                <div class="mt-16 pt-6 border-t border-slate-300 flex justify-between items-end font-sans text-xs">
                    <div>
                        <p class="font-bold text-sm">Authorized Signatory</p>
                        <p class="text-slate-500">Human Resources Department</p>
                        <p class="text-slate-500">${f.company}</p>
                    </div>
                    <div class="border p-2 text-center text-slate-400 font-mono text-[10px]">
                        [ OFFICIAL HR STAMP ]
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-offer",
        category: "hr",
        title: "Official Appointment & Offer Letter",
        desc: "Formal offer letter with salary terms, probation and joining date",
        fields: [
            { id: "candidate", label: "Candidate Name", val: "Ali Hassan" },
            { id: "designation", label: "Designation Offered", val: "Assistant Accountant" },
            { id: "company", label: "Company Name", val: "Taj Al Huda General Trading" },
            { id: "salary", label: "Monthly Gross Salary (PKR/$)", val: "75000" },
            { id: "joinDate", label: "Joining Date", val: "2026-10-01", type: "date" },
            { id: "probation", label: "Probation Period", val: "3 Months" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-sans text-slate-800 leading-relaxed">
                <div class="flex justify-between items-center border-b pb-4 mb-6">
                    <div>
                        <h2 class="text-xl font-bold text-slate-900">${f.company}</h2>
                        <p class="text-xs text-slate-500">Employment Offer Document</p>
                    </div>
                    <span class="text-xs font-mono bg-slate-100 px-3 py-1 rounded">REF: OFF-2026-99</span>
                </div>
                <div class="text-sm space-y-4">
                    <p>Dear <strong>${f.candidate}</strong>,</p>
                    <p>We are pleased to offer you the position of <strong>${f.designation}</strong> at <strong>${f.company}</strong> under the following terms and conditions:</p>
                    <div class="bg-slate-50 p-4 rounded border text-xs space-y-2 font-mono">
                        <div>• <strong>Position:</strong> ${f.designation}</div>
                        <div>• <strong>Monthly Remuneration:</strong> ${f.salary}</div>
                        <div>• <strong>Probation Duration:</strong> ${f.probation}</div>
                        <div>• <strong>Official Joining Date:</strong> ${f.joinDate}</div>
                    </div>
                    <p>Please sign and return a copy of this offer letter to confirm your acceptance of the position.</p>
                    <div class="pt-12 flex justify-between text-xs">
                        <div>
                            <p class="font-bold">For ${f.company}</p>
                            <p class="mt-6 border-t pt-1">HR Manager / Director</p>
                        </div>
                        <div>
                            <p class="font-bold">Accepted By Candidate</p>
                            <p class="mt-6 border-t pt-1">Signature & Date</p>
                        </div>
                    </div>
                </div>
            </div>`
    },
    {
        id: "letter-salary-cert",
        category: "hr",
        title: "Salary Certificate (Bank / Loan Purpose)",
        desc: "Official salary certificate for bank accounts, loan applications or visa process",
        fields: [
            { id: "empName", label: "Employee Name", val: "Shah Rukh Siddiqui" },
            { id: "designation", label: "Designation", val: "Senior Accountant" },
            { id: "company", label: "Company Name", val: "Burqur Corporation" },
            { id: "salary", label: "Gross Monthly Salary", val: "120000" },
            { id: "issueDate", label: "Issue Date", val: "2026-09-24", type: "date" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-10 bg-white font-serif text-slate-800">
                <div class="text-center border-b pb-4 mb-6">
                    <h1 class="text-xl font-bold uppercase tracking-wider text-slate-900">${f.company}</h1>
                    <p class="text-xs font-sans text-slate-500">ACCOUNTS & FINANCE DEPARTMENT</p>
                </div>
                <div class="text-right text-xs font-sans mb-6">Date: ${f.issueDate}</div>
                <h3 class="text-center font-bold font-sans text-base border-b pb-1 mb-6">SALARY CERTIFICATE</h3>
                <div class="text-sm font-sans space-y-4 leading-6">
                    <p>This is to certify that <strong>${f.empName}</strong> is a bonafide employee of <strong>${f.company}</strong>, working in the capacity of <strong>${f.designation}</strong>.</p>
                    <p>Their current gross monthly remuneration is <strong>PKR / USD ${f.salary}</strong> per month.</p>
                    <p>This certificate is being issued upon the employee's request for banking / official documentation purposes without any financial liability on our company.</p>
                </div>
                <div class="mt-16 pt-6 font-sans text-xs border-t">
                    <p class="font-bold">Finance & Accounts Manager</p>
                    <p class="text-slate-500">${f.company}</p>
                </div>
            </div>`
    },

    // ----------------------------------------------------
    // 2. ACCOUNTING & TAX INVOICES (STANDARD + MANUAL TAX)
    // ----------------------------------------------------
    {
        id: "inv-01",
        category: "accounting",
        title: "Commercial Tax Invoice (Manual & Preset Tax Engine)",
        desc: "Invoice with auto-calc tax engine: 18%, 15%, 5% (Pakistan GST) or custom rate",
        fields: [
            { id: "compName", label: "Company Name", val: "Acme Global Solutions Ltd." },
            { id: "clientName", label: "Client Name", val: "Bait Al Ezz Curtains" },
            { id: "invNo", label: "Invoice Number", val: "INV-2026-09" },
            { id: "invDate", label: "Invoice Date", val: "2026-09-24", type: "date" },
            { id: "desc1", label: "Item / Service Description", val: "Supply of Curtain Fabrics & Sofasticated Upholstery" },
            { id: "amount", label: "Base Amount Payable", val: "50000" },
            { id: "taxRate", label: "Tax Rate % (e.g. 18, 15, 5 or Custom)", val: "5" }
        ],
        render: (f) => {
            const base = parseFloat(f.amount) || 0;
            const rate = parseFloat(f.taxRate) || 0;
            const taxVal = (base * rate) / 100;
            const total = base + taxVal;
            return `
            <div class="max-w-2xl mx-auto border border-slate-300 p-8 bg-white font-sans text-slate-800 rounded-sm">
                <div class="flex justify-between items-start border-b-2 border-slate-800 pb-4 mb-6">
                    <div>
                        <h2 class="text-2xl font-bold text-slate-900 tracking-tight">${f.compName}</h2>
                        <p class="text-xs text-slate-500">Commercial Invoicing & Accounts Department</p>
                    </div>
                    <div class="text-right">
                        <span class="bg-blue-600 text-white font-bold px-3 py-1 text-xs rounded tracking-widest uppercase">Tax Invoice</span>
                        <p class="text-xs mt-2 font-mono">Date: ${f.invDate}</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4 text-sm mb-6 bg-slate-50 p-4 rounded border border-slate-200">
                    <div><span class="text-xs text-slate-400 block font-semibold uppercase">Billed To:</span><strong>${f.clientName}</strong></div>
                    <div><span class="text-xs text-slate-400 block font-semibold uppercase">Invoice Ref:</span><strong>${f.invNo}</strong></div>
                </div>
                <table class="w-full text-left text-sm mb-6 border-collapse">
                    <thead>
                        <tr class="border-b bg-slate-100 text-slate-700">
                            <th class="py-2.5 px-3">Description</th>
                            <th class="py-2.5 px-3 text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b">
                            <td class="py-3 px-3">${f.desc1}</td>
                            <td class="py-3 px-3 text-right font-mono">${base.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="space-y-1.5 text-sm text-right border-t pt-4">
                    <div class="flex justify-end gap-8"><span class="text-slate-500">Subtotal Base Amount:</span><span class="font-mono font-semibold">${base.toFixed(2)}</span></div>
                    <div class="flex justify-end gap-8"><span class="text-slate-500">Sales Tax / GST (${rate}%):</span><span class="font-mono text-blue-600">+${taxVal.toFixed(2)}</span></div>
                    <div class="flex justify-end gap-8 text-lg font-bold border-t-2 border-slate-800 pt-2 text-slate-900">
                        <span>Total Amount Due:</span><span class="font-mono">${total.toFixed(2)}</span>
                    </div>
                </div>
            </div>`;
        }
    },

    // ----------------------------------------------------
    // 3. DETAILED SALARY SLIP (ALL ALLOWANCES INCLUDED)
    // ----------------------------------------------------
    {
        id: "hr-payslip-detailed",
        category: "hr",
        title: "Detailed Employee Salary Slip (Full Allowance Breakdown)",
        desc: "Includes Basic Salary, House Rent, Utility, Fuel, Medical Allowances & Deductions",
        fields: [
            { id: "empName", label: "Employee Name", val: "Shah Rukh Siddiqui" },
            { id: "designation", label: "Designation", val: "Senior Accountant" },
            { id: "payMonth", label: "Salary Month / Year", val: "September 2026" },
            { id: "basic", label: "Basic Salary", val: "60000" },
            { id: "hra", label: "House Rent Allowance (HRA)", val: "25000" },
            { id: "utility", label: "Utility Allowance", val: "8000" },
            { id: "fuel", label: "Fuel / Conveyance Allowance", val: "12000" },
            { id: "medical", label: "Medical Allowance", val: "10000" },
            { id: "taxDed", label: "Tax Deduction / EOBI", val: "3000" }
        ],
        render: (f) => {
            const b = parseFloat(f.basic) || 0;
            const hr = parseFloat(f.hra) || 0;
            const ut = parseFloat(f.utility) || 0;
            const fl = parseFloat(f.fuel) || 0;
            const md = parseFloat(f.medical) || 0;
            const ded = parseFloat(f.taxDed) || 0;
            const gross = b + hr + ut + fl + md;
            const net = gross - ded;

            return `
            <div class="max-w-2xl mx-auto border border-slate-300 p-8 bg-white font-sans text-slate-800 shadow-sm">
                <div class="text-center border-b-2 border-slate-900 pb-4 mb-6">
                    <h2 class="text-xl font-bold uppercase tracking-wider text-slate-900">Bahria Town / Taj Al Huda</h2>
                    <p class="text-xs text-slate-500">Official Monthly Payslip Statement — ${f.payMonth}</p>
                </div>
                <div class="grid grid-cols-2 gap-3 text-xs mb-6 bg-slate-50 p-4 rounded border">
                    <div><strong>Employee Name:</strong> ${f.empName}</div>
                    <div><strong>Designation:</strong> ${f.designation}</div>
                    <div><strong>Pay Period:</strong> ${f.payMonth}</div>
                    <div><strong>Payment Mode:</strong> Bank Transfer / Direct Deposit</div>
                </div>
                <table class="w-full text-xs border border-collapse text-left mb-6">
                    <thead>
                        <tr class="bg-slate-100 border-b">
                            <th class="p-2 border">Earnings & Allowances Component</th>
                            <th class="p-2 border text-right">Amount (PKR)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b"><td class="p-2 border">Basic Salary</td><td class="p-2 border text-right font-mono">${b.toFixed(2)}</td></tr>
                        <tr class="border-b"><td class="p-2 border">House Rent Allowance (HRA)</td><td class="p-2 border text-right font-mono">${hr.toFixed(2)}</td></tr>
                        <tr class="border-b"><td class="p-2 border">Utility Allowance</td><td class="p-2 border text-right font-mono">${ut.toFixed(2)}</td></tr>
                        <tr class="border-b"><td class="p-2 border">Fuel & Conveyance Allowance</td><td class="p-2 border text-right font-mono">${fl.toFixed(2)}</td></tr>
                        <tr class="border-b"><td class="p-2 border">Medical Allowance</td><td class="p-2 border text-right font-mono">${md.toFixed(2)}</td></tr>
                        <tr class="border-b bg-slate-50 font-semibold"><td class="p-2 border">Total Gross Earnings</td><td class="p-2 border text-right font-mono text-slate-900">${gross.toFixed(2)}</td></tr>
                        <tr class="border-b text-red-600"><td class="p-2 border">Deductions (Income Tax / EOBI / Provident Fund)</td><td class="p-2 border text-right font-mono">-${ded.toFixed(2)}</td></tr>
                    </tbody>
                </table>
                <div class="flex justify-between items-center p-4 bg-blue-50 border border-blue-200 rounded text-slate-900">
                    <span class="font-bold text-sm">NET SALARY PAYABLE:</span>
                    <span class="font-mono font-bold text-lg text-blue-700">${net.toFixed(2)}</span>
                </div>
            </div>`;
        }
    },

    // ----------------------------------------------------
    // 4. VEHICLE FUEL & MAINTENANCE LOG SHEET
    // ----------------------------------------------------
    {
        id: "veh-01",
        category: "vehicle",
        title: "Daily Fuel & Oil Service Log Sheet",
        desc: "Track petrol refill history, 10W-40 oil changes & odometer readings",
        fields: [
            { id: "vName", label: "Vehicle / Bike Name", val: "Union Star 70cc" },
            { id: "vID", label: "Vehicle ID / Plate No", val: "KHI-7070" },
            { id: "logDate", label: "Service Log Date", val: "2026-09-24", type: "date" },
            { id: "odoMeter", label: "Odometer Reading (KM)", val: "14,850" },
            { id: "fuelDetails", label: "Fuel Refill", val: "3.2 Liters (Hi-Octane)" },
            { id: "oilStatus", label: "Oil Service Status", val: "Hyundai 10W-40 Replaced (850 KM Interval)" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-6 bg-white font-sans text-slate-800">
                <div class="border-b pb-3 mb-4 flex justify-between items-center">
                    <div>
                        <h2 class="text-lg font-bold text-slate-900">${f.vName} — Fuel & Maintenance Log</h2>
                        <p class="text-xs text-slate-500">Plate/ID: ${f.vID} — Recommended Oil Interval: 850-900 KM</p>
                    </div>
                    <span class="text-xs bg-slate-100 px-2.5 py-1 rounded font-mono">Active Service Register</span>
                </div>
                <table class="w-full text-xs border border-collapse text-left">
                    <thead>
                        <tr class="bg-slate-100 border-b">
                            <th class="p-2 border">Log Date</th>
                            <th class="p-2 border">Odometer (KM)</th>
                            <th class="p-2 border">Fuel Refill Details</th>
                            <th class="p-2 border">Oil Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b">
                            <td class="p-2 border font-medium">${f.logDate}</td>
                            <td class="p-2 border font-mono">${f.odoMeter}</td>
                            <td class="p-2 border">${f.fuelDetails}</td>
                            <td class="p-2 border text-emerald-700 font-bold">${f.oilStatus}</td>
                        </tr>
                    </tbody>
                </table>
            </div>`
    },

    // ----------------------------------------------------
    // 5. LIVE CALCULATORS
    // ----------------------------------------------------
    {
        id: "calc-01",
        category: "calculators",
        title: "Live GST & Sales Tax Calculator",
        desc: "Real-time GST calculation engine with custom rate percentage",
        fields: [],
        render: () => `
            <div class="max-w-md mx-auto p-6 bg-slate-50 border border-slate-200 rounded-xl shadow-sm">
                <h2 class="font-bold text-slate-800 mb-4 text-center text-lg">Sales Tax / GST Calculator</h2>
                <div class="space-y-4 text-sm">
                    <div>
                        <label class="block text-xs font-semibold mb-1">Base Amount</label>
                        <input type="number" id="calcBase" value="10000" oninput="runTaxCalc()" class="w-full p-2.5 border rounded-lg bg-white">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold mb-1">GST Tax Rate (%)</label>
                        <input type="number" id="calcRate" value="18" oninput="runTaxCalc()" class="w-full p-2.5 border rounded-lg bg-white">
                    </div>
                    <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg text-slate-800 space-y-2">
                        <div class="flex justify-between text-sm"><span>Tax Amount:</span> <strong id="resTax">1800.00</strong></div>
                        <div class="flex justify-between text-base border-t border-blue-200 pt-2 font-bold"><span>Total with Tax:</span> <strong id="resTotal" class="text-blue-700">11800.00</strong></div>
                    </div>
                </div>
            </div>`
    }
];

let currentCategory = 'all';
let currentItem = hubDatabase[0];

function filterContent() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const listEl = document.getElementById('itemsList');
    listEl.innerHTML = '';
    
    const filtered = hubDatabase.filter(item => {
        const matchesCat = currentCategory === 'all' || item.category === currentCategory;
        const matchesSearch = item.title.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query);
        return matchesCat && matchesSearch;
    });

    filtered.forEach(item => {
        const div = document.createElement('div');
        div.className = `p-3.5 rounded-lg border cursor-pointer transition flex items-center justify-between ${item.id === currentItem.id ? 'bg-blue-50 border-blue-300 ring-1 ring-blue-300' : 'bg-white border-slate-200 hover:border-slate-300'}`;
        div.onclick = () => selectItem(item);
        div.innerHTML = `
            <div>
                <h4 class="font-semibold text-slate-800 text-sm">${item.title}</h4>
                <p class="text-xs text-slate-500">${item.desc}</p>
            </div>
            <span class="text-xs px-2 py-0.5 rounded bg-slate-100 font-mono text-slate-600 uppercase">${item.category}</span>
        `;
        listEl.appendChild(div);
    });
}

function renderItemsList() { filterContent(); }

function selectItem(item) {
    currentItem = item;
    document.getElementById('activeItemTitle').innerText = item.title;
    renderItemsList();
    
    const inputsContainer = document.getElementById('interactiveInputs');
    const fieldsContainer = document.getElementById('inputFormFields');
    fieldsContainer.innerHTML = '';

    if (item.fields && item.fields.length > 0) {
        inputsContainer.classList.remove('hidden');
        item.fields.forEach(f => {
            const fieldDiv = document.createElement('div');
            const inputType = f.type || 'text';
            fieldDiv.innerHTML = `
                <label class="block text-xs font-medium text-slate-600 mb-1">${f.label}</label>
                <input type="${inputType}" id="${f.id}" value="${f.val}" oninput="updateLivePreview()" class="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500">
            `;
            fieldsContainer.appendChild(fieldDiv);
        });
    } else {
        inputsContainer.classList.add('hidden');
    }

    updateLivePreview();
}

function updateLivePreview() {
    const previewEl = document.getElementById('documentPreview');
    if (currentItem.fields && currentItem.fields.length > 0) {
        const currentVals = {};
        currentItem.fields.forEach(f => {
            const inputEl = document.getElementById(f.id);
            currentVals[f.id] = inputEl ? inputEl.value : f.val;
        });
        previewEl.innerHTML = currentItem.render(currentVals);
    } else {
        previewEl.innerHTML = currentItem.render();
    }
}

function runTaxCalc() {
    const base = parseFloat(document.getElementById('calcBase').value) || 0;
    const rate = parseFloat(document.getElementById('calcRate').value) || 0;
    const tax = (base * rate) / 100;
    const total = base + tax;
    document.getElementById('resTax').innerText = tax.toFixed(2);
    document.getElementById('resTotal').innerText = total.toFixed(2);
}

function setCategory(cat) {
    currentCategory = cat;
    renderItemsList();
}

function copyToClipboard() {
    const text = document.getElementById('documentPreview').innerText;
    navigator.clipboard.writeText(text);
    alert('Format copied to clipboard!');
}

// Initial Run
renderItemsList();
selectItem(hubDatabase[0]);
