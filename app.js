// ==========================================
// DOCUHUB GLOBAL - MASTER APP.JS (32+ TEMPLATES ENGINE)
// ==========================================

const hubDatabase = [
    // 1. HR & RECRUITMENT LETTERS
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
    // 2. COMMERCIAL INVOICES & TAX ENGINE
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
    // 3. VEHICLE MAINTENANCE & FUEL LOG
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
