/* =========================================================
   IBPS RRB PO PRELIMS — 70 DAY MASTER TRACKER
   ========================================================= */

const STORAGE_KEY = "rrb_po_70_day_tracker";

let savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
    tasks: {},
    mocks: {},
    errors: [],
    targets: {},
    strategy: {}
};


/* =========================================================
   70-DAY QUANT PLAN
   ========================================================= */

const quantData = [

["Simplification — Concepts + 60 Q","Inequality support: basic calculations","Calculation practice — squares 1–30","Simplification review + errors"],

["Approximation — Concepts + 60 Q","R1 Simplification — 15 Q","Approximation timed practice","Simplification + Approximation errors"],

["Number Series — Concepts + 50 Q","R1 Approximation — 15 Q","Number Series timed practice","Series errors + calculation drill"],

["Number System — Concepts + 50 Q","R1 Number Series — 15 Q","Number System practice","Series + Number System revision"],

["HCF & LCM + 50 Q","R1 Number System — 15 Q","HCF/LCM practice","Number System + HCF/LCM errors"],

["Percentage I — Concepts + 60 Q","R1 HCF/LCM — 15 Q","Percentage calculations","Percentage error review"],

["Percentage II + R1 Percentage","Mixed Percentage — 20 Q","Quant 20-min sectional","Analyse sectional + revise Percentage"],

["Ratio — Concepts + 60 Q","R2 Percentage — 15 Q","Ratio practice","Ratio errors + Percentage revision"],

["Ratio continued — 50 Q","R1 Ratio — 15 Q","Ratio/Proportion timed practice","Ratio + Percentage mixed"],

["Average — Concepts + 60 Q","R2 Ratio — 15 Q","Average practice","Ratio + Average errors"],

["Profit & Loss — Concepts + 60 Q","R1 Average — 15 Q","P&L practice","P&L timed practice + errors"],

["Discount + 50 Q","R1 P&L — 20 Q","P&L + Discount mixed","P&L/Discount error notebook"],

["Simple Interest — Concepts + 50 Q","R1 Discount — 15 Q","SI practice","SI + P&L revision"],

["SI + CI — R1 SI","CI basics + formulas","SI/CI mixed practice","Quant sectional — 20 min"],

["Compound Interest — 50 Q","R1 CI — 15 Q","CI timed practice","CI + SI revision"],

["Time & Work — Concepts + 60 Q","R1 CI — 15 Q","T&W practice","T&W errors + CI revision"],

["Pipes & Cisterns — 50 Q","R1 T&W — 15 Q","Pipes practice","T&W + Pipes mixed"],

["Time-Speed-Distance — 60 Q","R1 Pipes — 15 Q","TSD practice","TSD errors + Pipes revision"],

["Boats & Streams — 50 Q","R1 TSD — 15 Q","Boats/TSD mixed","TSD + Boats revision"],

["Partnership — 50 Q","R1 Boats — 15 Q","Partnership practice","Partnership + Boats revision"],

["Mixture & Alligation — 50 Q","R1 Partnership — 15 Q","Mixture practice","Quant sectional — 20 min"],

["Ages — 50 Q","R1 Mixture — 15 Q","Ages practice","Ages + Mixture revision"],

["Mensuration — 50 Q","R1 Ages — 15 Q","Mensuration practice","Mensuration + Ages revision"],

["Probability — 40 Q","R1 Mensuration — 15 Q","Probability basics","Probability + Mensuration revision"],

["Permutation & Combination — 40 Q","R1 Probability — 15 Q","P&C basics","Probability + P&C revision"],

["Table DI — 4 sets","R1 P&C — 15 Q","Table DI timed practice","DI calculation practice"],

["Bar DI — 4 sets","R1 Table DI — 1 set","Bar DI timed practice","DI calculation + errors"],

["Line + Pie DI — 5 sets","R1 Bar DI — 1 set","DI mixed practice","FULL MOCK #1 + 90+ min analysis"],

["Quadratic Equations + Simplification — 80 Q","R1 Line/Pie DI — 2 sets","Quadratic timed practice","P&L 15 + Ratio 15 + T&W 15 + DI 1 set"],

["Algebraic Identities + Number Series — 60 Q","Quadratic revision","Algebra/Series timed practice","P&L 15 + Percentage 15 + TSD 15"],

["Quant Data Sufficiency + Percentage — 50 Q","Ratio/Average revision","Data Sufficiency practice","P&L 15 + Ratio 15 + DI 1 set"],

["Arithmetic Mixed — 80 Q","P&L/Discount revision","Mixed arithmetic timed practice","Quant 20-min sectional"],

["Arithmetic Mixed — 80 Q","P&L + Discount intensive revision","Weak arithmetic practice","P&L 15 + T&W 15 + TSD 15 + DI 1 set"],

["Weakest 3 Quant Chapters — 100 targeted Q","Formula revision","Weak-topic timed practice","Quant + Reasoning sectionals + analysis"],

["Complete Quant Formula Revision","100 Mixed Quant Q","Calculation speed drill","FULL MOCK #2"],

["Simplification + Approximation — 100 Q @ 25 sec","P&L R6 — 15 Q","Calculation marathon","Percentage R5 — 15 Q + Quant sectional"],

["Series + Quadratic — 80 Q @ 30–35 sec","Ratio R6 — 15 Q","Series/Quadratic speed drill","Average R5 — 15 Q"],

["Percentage + Ratio — 60 Q @ 45 sec","P&L — 15 Q","Percentage/Ratio timed drill","SI/CI — 15 Q + Quant sectional"],

["Average + P&L — 60 Q @ 50 sec","P&L R5 — 15 Q","Arithmetic speed practice","Ratio 15 Q + P&L timed 15 Q"],

["SI + CI — 60 Q","SI/CI formula revision","SI/CI timed practice","Quant sectional — 20 min"],

["T&W + Pipes — 60 Q","T&W R5 — 15 Q","Work/Pipes speed drill","P&L 15 Q + T&W 15 Q"],

["TSD + Boats — 60 Q","TSD revision","TSD/Boats timed practice","FULL MOCK #3"],

["Mixture + Partnership — 60 Q","Formula revision","Mixture/Partnership timed practice","DI + arithmetic revision"],

["Ages + Mensuration — 60 Q","Ages/Mensuration formulas","Mixed arithmetic practice","Quant sectional — 20 min"],

["DI — 6 sets","DI calculation revision","DI timed practice","Reasoning support + arithmetic revision"],

["Simplification + Series + Quadratic — 100 Q","P&L/Percentage revision","Speed calculation drill","Combined 45-min simulation"],

["Arithmetic Mixed — 80 Q","Weak-topic revision","Arithmetic timed practice","Quant sectional — 20 min"],

["DI + Arithmetic — 6 DI + 30 Q","Formula revision","Mixed DI timed practice","Arithmetic + DI errors"],

["FULL MOCK #4","Mock analysis","Reattempt wrong Quant questions","Error notebook update"],

["Simplification 30 + Approx 30 + Series 30 + Quadratic 20","Formula revision","Calculation speed test","P&L + Percentage revision"],

["Percentage + Ratio + Average + P&L — 70 Q","R5 revisions","Arithmetic @ 45–55 sec/Q","Quant sectional — 20 min"],

["SI + CI + T&W + Pipes — 60 Q","Formula revision","Timed arithmetic","Quant sectional + analysis"],

["TSD + Boats + Mixture + Partnership — 70 Q","Weak-topic revision","Timed arithmetic","P&L + Ratio + Percentage"],

["DI — 6 sets + DS 20 Q","DI formulas/calculation","Data Sufficiency practice","Quant sectional"],

["Calculation Marathon — 100 short Q","Simplification/Approx speed","Series @ 35 sec + Quadratic @ 35 sec","Full Quant speed simulation"],

["FULL MOCK #5","Mock analysis","Reattempt wrong Quant","Error notebook update"],

["Weak Quant Chapters — 60 timed Q","Weak-topic formulas","Targeted practice","Quant sectional"],

["Mixed Quant — 80 Q","Formula revision","Mixed timed practice","Quant sectional"],

["DI — 5 sets + 30 arithmetic Q","DI calculation revision","Arithmetic speed drill","Combined simulation"],

["FULL MOCK #6","Deep mock analysis","Reattempt Quant mistakes","Create Top 20 Mistakes list"],

["Top 5 Weak Quant Chapters — 70 Q","Formula revision","Weak-topic timed practice","Quant sectional"],

["Mixed Quant — 80 Q","Formula + error revision","Quant speed test","Quant 20-min sectional"],

["FULL MOCK #7","Mock analysis","Reattempt wrong Quant","Error notebook update"],

["Weakest Quant Topics — 60 timed Q","Formula revision","Targeted practice","Quant sectional"],

["Arithmetic Revision — 80 mixed Q","Percentage + Ratio + Average","P&L + SI/CI + T&W","TSD + Mixture + arithmetic errors"],

["20 Simplification + 20 Approx + 20 Series + 20 Quadratic","Formula revision","Calculation speed test","FULL MOCK #8"],

["Error Notebook — 50 Quant mistakes","Formula/shortcut revision","Reattempt recurring errors","Final Quant formula revision"],

["Mixed Quant — 80 Q","DI revision","Arithmetic timed practice","FULL MOCK #9"],

["Rapid: 15 Simplification + 15 Approx + 15 Series + 15 Quadratic","10 Percentage + 10 Ratio + 10 P&L","10 SI/CI + 10 T&W + 10 TSD + 10 Mixture + 2 DI sets","Light revision — No heavy study"],

["Light formulas + calculations","FULL MOCK #10 — Actual 20-min Quant timing","Mock analysis + mistakes","Final formulas + selection strategy — No new chapter"]

];


/* =========================================================
   70-DAY REASONING PLAN
   ========================================================= */

const reasoningData = [

["Quant calculation support","Inequality — Concepts + 40 Q","Inequality timed practice","Error analysis"],

["Quant support","Syllogism — Concepts + 40 Q","Syllogism practice","R1 Inequality — 15 Q"],

["Quant support","Coding-Decoding — 40 Q","Coding practice","R1 Syllogism — 15 Q"],

["Quant support","Blood Relation — 40 Q","Blood Relation practice","R1 Coding — 15 Q"],

["Quant support","Direction & Distance — 40 Q","Direction practice","R1 Blood Relation — 15 Q"],

["Quant support","Order & Ranking — 40 Q","Ranking timed practice","R1 Direction — 15 Q"],

["Quant support","Inequality + Syllogism revision","25-min Reasoning sectional","Sectional analysis"],

["Quant support","Linear Seating Arrangement — 2 sets","Linear Seating timed sets","R2 Percentage support / Reasoning errors"],

["Quant support","Circular Seating — 2 sets","Circular Seating timed sets","Linear + Circular revision"],

["Quant support","Floor Puzzle — 2 sets","Floor Puzzle timed sets","Seating revision"],

["Quant support","Box Puzzle — 2 sets","Box Puzzle timed sets","Floor + Box revision"],

["Quant support","Month/Date Puzzle — 2 sets","Month/Date timed sets","Puzzle error analysis"],

["Quant support","Selection/Distribution — 2 sets","Selection practice","Puzzle revision"],

["Quant support","Mixed Puzzles — 2 sets","Reasoning sectional — 25 min","Analyse sectional"],

["Quant support","Linear + Circular Seating — 3 sets","Seating timed practice","Seating error analysis"],

["Quant support","Floor + Box Puzzles — 3 sets","Puzzle timed practice","Puzzle revision"],

["Quant support","Coding + Blood + Direction mixed — 60 Q","Coded questions practice","Quick-topic speed drill"],

["Quant support","Month/Day/Year + Scheduling — 3 sets","Scheduling timed practice","Puzzle error analysis"],

["Quant support","Mixed Seating — 3 sets","Seating timed practice","Quick reasoning revision"],

["Quant support","Input-Output — 3 sets","I/O timed practice","I/O errors + revision"],

["Quant support","Data Sufficiency — 30 Q","Reasoning sectional — 25 min","Sectional analysis"],

["Quant support","Statement & Conclusion — 40 Q","Statement practice","Quick-topic revision"],

["Quant support","Statement & Assumption + Argument — 40 Q","Critical reasoning practice","Error analysis"],

["Quant support","Cause & Effect + Analogy/Classification — 40 Q","Mixed practice","Quick-topic revision"],

["Quant support","Word Formation + Pair Formation + Odd One Out — 40 Q","Miscellaneous reasoning","Error analysis"],

["Quant support","Mixed Puzzle — 2 sets","Puzzle timed practice","Quick-topic revision"],

["Quant support","Coded Inequality/Blood/Direction — 60 Q","Coded reasoning timed","Error analysis"],

["Quant support","Complete Reasoning Mixed — 60 Q","5 mixed sets","FULL MOCK #1 analysis"],

["Quant support","Syllogism + Inequality — 60 Q","3 puzzles","Mixed quick topics"],

["Quant support","Coding + Series — 60 Q","Coding timed practice","Quick-topic revision"],

["Quant support","Mixed Puzzles — 3 sets","Seating/Puzzle timed practice","Quick-topic revision"],

["Quant support","Seating — 3 sets","Mixed reasoning timed practice","Reasoning sectional — 25 min"],

["Quant support","Complete Reasoning Mixed — 80 Q","Puzzle selection practice","Quick-topic speed drill"],

["Quant support","Weakest 3 Reasoning Topics","Targeted practice","Reasoning sectionals + analysis"],

["Quant support","Mixed Reasoning — 100 Q","Puzzle + Seating practice","FULL MOCK #2"],

["Quant support","Inequality + Syllogism — 60 Q","Quick-topic speed drill","Quant support + Reasoning timing"],

["Quant support","Coding + Direction + Ranking — 60 Q","Timed mixed practice","Reasoning 25-min sectional"],

["Quant support","Blood + Coding + Inequality","Mixed timed practice","Quick-topic revision"],

["Quant support","Seating — 3 sets @ 5–6 min","Seating timed practice","Puzzle selection practice"],

["Quant support","Floor + Box — 3 sets","Puzzle timed practice","Reasoning revision"],

["Quant support","Month/Day + Scheduling — 3 sets","Scheduling timed practice","Reasoning sectional"],

["Quant support","Mixed Puzzles — 3 sets","Puzzle selection practice","FULL MOCK #3"],

["Quant support","Input-Output — 3 sets","I/O timed practice","Quick-topic revision"],

["Quant support","Data Sufficiency + Statements — 50 Q","Critical reasoning practice","Reasoning sectional"],

["Quant support","Seating — 3 sets","Mixed seating timed practice","Reasoning sectional"],

["Quant support","Syllogism + Inequality + Coding — 80 Q","Quick-topic speed drill","Combined 45-min simulation"],

["Quant support","Puzzle Selection Strategy","Mixed puzzles","Reasoning sectional"],

["Quant support","Mixed Reasoning — 80 Q","Puzzle + Seating practice","Reasoning sectional"],

["Quant support","FULL MOCK #4","Mock analysis","Reattempt wrong Reasoning questions"],

["Quant support","Inequality + Syllogism + Coding — 60 Q","Quick-topic timed practice","Puzzle revision"],

["Quant support","Ranking + Blood + Direction + Coding — 60 Q","Timed mixed practice","Reasoning sectional"],

["Quant support","4 Puzzle Sets","Puzzle selection practice","Reasoning sectional"],

["Quant support","Seating — 3 sets","Input-Output — 2 sets","Quick-topic revision"],

["Quant support","Statement/Critical Reasoning — 50 Q","Mixed reasoning practice","Reasoning sectional"],

["Quant support","Mixed Reasoning — 80 Q","Speed drill","Error notebook revision"],

["Quant support","FULL MOCK #5","Mock analysis","Reattempt wrong Reasoning"],

["Quant support","Weak Reasoning Chapters — 3 sets + 40 Q","Targeted weak-topic practice","Reasoning sectional"],

["Quant support","Mixed Reasoning — 80 Q","Timed mixed practice","Reasoning sectional"],

["Quant support","3 Puzzles + 30 Quick Q","Puzzle selection practice","Combined simulation"],

["Quant support","FULL MOCK #6","Mock analysis","Create Top 20 Mistakes"],

["Quant support","Top 5 Weak Reasoning Topics — 70 Q","Targeted practice","2 sectionals + analysis"],

["Quant support","Mixed Reasoning — 80 Q","Timed mixed practice","Reasoning 25-min sectional"],

["Quant support","FULL MOCK #7","Mock analysis","Reattempt wrong Reasoning"],

["Quant support","Weakest Reasoning Topics — 60 Q","Targeted timed practice","Reasoning sectional"],

["Quant support","3 Best Puzzle Types","Mixed quick topics","Reasoning sectional"],

["Quant support","Quick Topics — 50 Q","Syllogism/Inequality/Coding speed","FULL MOCK #8"],

["Quant support","Error Notebook — 50 Reasoning mistakes","Reattempt recurring errors","Final quick-topic revision"],

["Quant support","Mixed Reasoning — 80 Q","Timed mixed practice","FULL MOCK #9"],

["Quant support","Inequality 10 + Syllogism 10 + Coding 10","Blood 10 + Direction 10 + Ranking 10","3 Puzzles + light revision"],

["Quant support","Final light revision","FULL MOCK #10 — Actual 25-min Reasoning timing","Final mistakes + selection strategy — No new topic"]

];


/* =========================================================
   NAVIGATION
   ========================================================= */

function showSection(sectionId) {

    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });

    const section = document.getElementById(sectionId);

    if (section) {
        section.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   STORAGE
   ========================================================= */

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
}


/* =========================================================
   CREATE TASK
   ========================================================= */

function createTask(text, id) {

    const wrapper = document.createElement("div");
    wrapper.className = "task";

    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.dataset.id = id;

    checkbox.checked = !!savedData.tasks[id];

    const span = document.createElement("span");

    span.textContent = text;

    if (checkbox.checked) {
        wrapper.classList.add("completed");
    }

    checkbox.addEventListener("change", function() {

        savedData.tasks[id] = this.checked;

        if (this.checked) {
            wrapper.classList.add("completed");
        } else {
            wrapper.classList.remove("completed");
        }

        saveData();
        updateDashboard();

    });

    wrapper.appendChild(checkbox);
    wrapper.appendChild(span);

    return wrapper;
}


/* =========================================================
   RENDER QUANT
   ========================================================= */

function renderQuant() {

    const table = document.getElementById("quantTable");

    table.innerHTML = "";

    quantData.forEach((day, index) => {

        const dayNumber = index + 1;

        const row = document.createElement("tr");

        const dayCell = document.createElement("td");

        dayCell.textContent = dayNumber;

        row.appendChild(dayCell);

        day.forEach((task, taskIndex) => {

            const cell = document.createElement("td");

            const id = `quant-${dayNumber}-${taskIndex}`;

            cell.appendChild(
                createTask(task, id)
            );

            row.appendChild(cell);

        });

        table.appendChild(row);

    });

}


/* =========================================================
   RENDER REASONING
   ========================================================= */

function renderReasoning() {

    const table = document.getElementById("reasoningTable");

    table.innerHTML = "";

    reasoningData.forEach((day, index) => {

        const dayNumber = index + 1;

        const row = document.createElement("tr");

        const dayCell = document.createElement("td");

        dayCell.textContent = dayNumber;

        row.appendChild(dayCell);

        day.forEach((task, taskIndex) => {

            const cell = document.createElement("td");

            const id = `reasoning-${dayNumber}-${taskIndex}`;

            cell.appendChild(
                createTask(task, id)
            );

            row.appendChild(cell);

        });

        table.appendChild(row);

    });

}


/* =========================================================
   MOCK TRACKER
   ========================================================= */

const mockDays = [28,35,42,49,56,60,63,66,68,70];

function renderMocks() {

    const table = document.getElementById("mockTable");

    table.innerHTML = "";

    mockDays.forEach((day, index) => {

        const mockNumber = index + 1;

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>Mock ${mockNumber}</td>
            <td>${day}</td>

            <td>
                <input
                    class="error-input"
                    placeholder="Score"
                    value="${savedData.mocks[mockNumber]?.score || ""}"
                    onchange="saveMock(${mockNumber}, 'score', this.value)"
                >
            </td>

            <td>
                <input
                    class="error-input"
                    placeholder="Quant"
                    value="${savedData.mocks[mockNumber]?.quant || ""}"
                    onchange="saveMock(${mockNumber}, 'quant', this.value)"
                >
            </td>

            <td>
                <input
                    class="error-input"
                
