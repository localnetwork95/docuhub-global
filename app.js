const hubDatabase = [
    {
        id: "inv-01",
        category: "accounting",
        title: "Standard Commercial Tax Invoice",
        desc: "Official tax invoice with auto calculation engine",
        fields: [
            { id: "compName", label: "Company Name", val: "Acme Global Solutions Ltd." },
            { id: "clientName", label: "Client Name", val: "Nexus International Corp" },
            { id: "invNo", label: "Invoice Number", val: "INV-2026-001" },
            { id: "desc1", label: "Item Description", val: "Professional Consulting & Software Services" },
            { id: "amount", label: "Amount Payable ($/PKR)", val: "50000" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-8 bg-white font-sans text-slate-800 rounded-sm">
                <div class="flex justify-between items-start border-b-2 border-slate-800 pb-4 mb-6">
                    <div>
                        <h2 class="text-2xl font-bold text-slate-900 tracking-tight">${f.compName}</h2>
                        <p class="text-xs text-slate-500">Commercial Invoicing & Accounts Department</p>
                    </div>
                    <div class="text-right">
                        <span class="bg-blue-600 text-white font-bold px-3 py-1 text-xs rounded tracking-widest uppercase">Tax Invoice</span>
                        <p class="text-xs mt-2 font-mono">Date: ${new Date().toLocaleDateString()}</p>
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
                            <td class="py-3 px-3 text-right font-mono">${f.amount}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex justify-end text-lg font-bold border-t-2 border-slate-800 pt-4">
                    <span>Total Payable: ${f.amount}</span>
                </div>
            </div>`
    },
    {
        id: "hr-01",
        category: "hr",
        title: "Official Employee Salary Slip",
        desc: "Monthly salary statement with allowance breakdown",
        fields: [
            { id: "empName", label: "Employee Name", val: "John Doe" },
            { id: "designation", label: "Designation", val: "Operations Manager" },
            { id: "basicSalary", label: "Basic Salary", val: "100000" },
            { id: "allowance", label: "Allowances", val: "20000" }
        ],
        render: (f) => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-8 bg-white font-sans text-slate-800">
                <div class="text-center border-b pb-4 mb-6">
                    <h2 class="text-xl font-bold uppercase tracking-wider text-slate-900">Global Enterprise Ltd</h2>
                    <p class="text-xs text-slate-500">Employee Payslip — Monthly Statement</p>
                </div>
                <div class="grid grid-cols-2 gap-3 text-sm mb-6 bg-slate-50 p-4 rounded">
                    <div><strong>Employee Name:</strong> ${f.empName}</div>
                    <div><strong>Designation:</strong> ${f.designation}</div>
                </div>
                <table class="w-full text-sm border text-left mb-6">
                    <tr class="bg-slate-100 border-b"><th class="p-2.5">Earnings Breakup</th><th class="p-2.5 text-right">Amount</th></tr>
                    <tr class="border-b"><td class="p-2.5">Basic Pay</td><td class="p-2.5 text-right font-mono">${f.basicSalary}</td></tr>
                    <tr class="border-b"><td class="p-2.5">Conveyance Allowance</td><td class="p-2.5 text-right font-mono">${f.allowance}</td></tr>
                    <tr class="font-bold bg-slate-50"><td class="p-2.5">Net Salary Paid</td><td class="p-2.5 text-right font-mono text-blue-700">${Number(f.basicSalary) + Number(f.allowance)}</td></tr>
                </table>
            </div>`
    },
    {
        id: "veh-01",
        category: "vehicle",
        title: "Daily Fuel & Oil Service Log Sheet",
        desc: "Track petrol refill history, oil changes & mileage",
        fields: [],
        render: () => `
            <div class="max-w-2xl mx-auto border border-slate-300 p-6 bg-white font-sans text-slate-800">
                <div class="border-b pb-3 mb-4 flex justify-between items-center">
                    <div>
                        <h2 class="text-lg font-bold text-slate-900">Vehicle Fleet Fuel & Maintenance Register</h2>
                        <p class="text-xs text-slate-500">Fleet ID: FLT-701 — Recommended Oil Change Interval: 1,000 KM</p>
                    </div>
                    <span class="text-xs bg-slate-100 px-2.5 py-1 rounded font-mono">Status: Active Log</span>
                </div>
                <table class="w-full text-xs border border-collapse text-left">
                    <thead>
                        <tr class="bg-slate-100 border-b">
                            <th class="p-2 border">Date</th>
                            <th class="p-2 border">Odometer (KM)</th>
                            <th class="p-2 border">Fuel Refill Details</th>
                            <th class="p-2 border">Oil Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b"><td class="p-2 border">01-Jan-2026</td><td class="p-2 border">10,000</td><td class="p-2 border">10.0 Ltrs</td><td class="p-2 border">Level Normal</td></tr>
                        <tr class="border-b"><td class="p-2 border">10-Jan-2026</td><td class="p-2 border">11,000</td><td class="p-2 border">12.0 Ltrs</td><td class="p-2 border text-emerald-700 font-bold">Engine Oil Replaced</td></tr>
                        <tr class="border-b"><td class="p-2 border">20-Jan-2026</td><td class="p-2 border">12,000</td><td class="p-2 border">10.0 Ltrs</td><td class="p-2 border">Level Normal</td></tr>
                    </tbody>
                </table>
            </div>`
    },
    {
        id: "calc-01",
        category: "calculators",
        title: "Live GST & Sales Tax Calculator",
        desc: "Real-time GST calculation engine",
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
                        <div class="flex justify-between text-sm"><span>Tax Amount:</span> <strong id="resTax">1800</strong></div>
                        <div class="flex justify-between text-base border-t border-blue-200 pt-2 font-bold"><span>Total with Tax:</span> <strong id="resTotal" class="text-blue-700">11800</strong></div>
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
            <span class="text-xs px-2 py-0.5 rounded bg-slate-100 font-mono text-slate-600">${item.category}</span>
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
            fieldDiv.innerHTML = `
                <label class="block text-xs font-medium text-slate-600 mb-1">${f.label}</label>
                <input type="text" id="${f.id}" value="${f.val}" oninput="updateLivePreview()" class="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500">
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
