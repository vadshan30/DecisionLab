let currentDecision = {};

let factors = [
    {
        id: 1,
        name: "Cost",
        weight: 30
    },
    {
        id: 2,
        name: "Performance",
        weight: 30
    },
    {
        id: 3,
        name: "Long-term Value",
        weight: 25
    },
    {
        id: 4,
        name: "Risk",
        weight: 15
    }
];

let nextFactorId = 5;


function scrollToCreate() {

    document.getElementById("create").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   START ANALYSIS
========================= */

function startAnalysis() {

    const title =
        document.getElementById("decisionTitle").value.trim();

    const description =
        document.getElementById("decisionDescription").value.trim();

    const option1 =
        document.getElementById("option1").value.trim();

    const option2 =
        document.getElementById("option2").value.trim();


    if (!title || !option1 || !option2) {

        alert(
            "Please enter a decision title and both options."
        );

        return;
    }


    currentDecision = {

        title,

        description,

        option1,

        option2

    };


    document.getElementById("resultTitle").textContent =
        title;

    document.getElementById("option1Name").textContent =
        option1;

    document.getElementById("option2Name").textContent =
        option2;


    renderFactors();


    const analysis =
        document.getElementById("analysis");


    analysis.classList.remove("hidden");


    setTimeout(() => {

        analysis.scrollIntoView({
            behavior: "smooth"
        });

    }, 100);


    calculateScores();

}


/* =========================
   RENDER FACTORS
========================= */

function renderFactors() {

    const container =
        document.getElementById("factorsContainer");


    container.innerHTML = "";


    factors.forEach(factor => {

        const factorElement =
            document.createElement("div");


        factorElement.className = "factor";


        factorElement.innerHTML = `

            <div class="factor-top">

                <label>
                    ${escapeHTML(factor.name)}
                </label>

                <span id="factorValue-${factor.id}">
                    ${factor.weight}%
                </span>

            </div>


            <input
                type="range"
                min="0"
                max="100"
                value="${factor.weight}"
                data-id="${factor.id}"
                oninput="updateFactorWeight(this)"
            >

        `;


        container.appendChild(factorElement);

    });


    updateTotalWeight();

}


/* =========================
   ADD FACTOR
========================= */

function addFactor() {

    const name =
        prompt("Enter the factor name:");


    if (!name || !name.trim()) {

        return;

    }


    const trimmedName =
        name.trim();


    factors.push({

        id: nextFactorId++,

        name: trimmedName,

        weight: 0

    });


    renderFactors();

}


/* =========================
   UPDATE FACTOR WEIGHT
========================= */

function updateFactorWeight(slider) {

    const id =
        Number(slider.dataset.id);


    const factor =
        factors.find(item => item.id === id);


    if (!factor) {

        return;

    }


    factor.weight =
        Number(slider.value);


    const valueElement =
        document.getElementById(
            `factorValue-${id}`
        );


    if (valueElement) {

        valueElement.textContent =
            factor.weight + "%";

    }


    updateTotalWeight();

    calculateScores();

}


/* =========================
   TOTAL WEIGHT
========================= */

function updateTotalWeight() {

    const total =
        factors.reduce(
            (sum, factor) => sum + factor.weight,
            0
        );


    const totalElement =
        document.getElementById("totalWeight");


    totalElement.textContent =
        total + "%";


    if (total === 100) {

        totalElement.style.color = "#15171a";

    } else {

        totalElement.style.color = "#d94b4b";

    }

}


/* =========================
   CALCULATE SCORES
========================= */

function calculateScores() {

    const total =
        factors.reduce(
            (sum, factor) => sum + factor.weight,
            0
        );


    if (total === 0) {

        setScores(0, 0);

        return;

    }


    /*
        Temporary V2 rating model.

        Each factor still uses a default
        rating for now.

        In the next phase, users will
        manually rate each option.
    */


    let score1 = 0;

    let score2 = 0;


    factors.forEach((factor, index) => {

        const rating1 =
            7.5 + ((index % 3) * 0.5);

        const rating2 =
            7 + ((index % 4) * 0.5);


        score1 +=
            factor.weight * rating1;

        score2 +=
            factor.weight * rating2;

    });


    score1 =
        Math.round(
            score1 / total * 10
        );


    score2 =
        Math.round(
            score2 / total * 10
        );


    setScores(score1, score2);

}


/* =========================
   SET SCORES
========================= */

function setScores(score1, score2) {

    document.getElementById("score1").textContent =
        score1;

    document.getElementById("score2").textContent =
        score2;


    document.getElementById("bar1").style.width =
        Math.min(score1 * 10, 100) + "%";

    document.getElementById("bar2").style.width =
        Math.min(score2 * 10, 100) + "%";


    const insight =
        document.getElementById("insightText");


    if (score1 > score2) {

        insight.textContent =
            `${currentDecision.option1 || "Option 1"} currently has the higher weighted score.`;

    } else if (score2 > score1) {

        insight.textContent =
            `${currentDecision.option2 || "Option 2"} currently has the higher weighted score.`;

    } else {

        insight.textContent =
            "Both options currently have the same weighted score.";

    }

}


/* =========================
   SAVE DECISION
========================= */

function saveDecision() {

    if (!currentDecision.title) {

        return;

    }


    const score1 =
        Number(
            document.getElementById("score1").textContent
        );


    const score2 =
        Number(
            document.getElementById("score2").textContent
        );


    const savedDecision = {

        ...currentDecision,

        factors: [...factors],

        score1,

        score2,

        date: new Date().toLocaleString()

    };


    const history =
        JSON.parse(
            localStorage.getItem(
                "decisionLabHistory"
            )
        ) || [];


    history.unshift(savedDecision);


    localStorage.setItem(
        "decisionLabHistory",
        JSON.stringify(history)
    );


    loadHistory();


    document.getElementById("history").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   LOAD HISTORY
========================= */

function loadHistory() {

    const container =
        document.getElementById(
            "historyContainer"
        );


    const history =
        JSON.parse(
            localStorage.getItem(
                "decisionLabHistory"
            )
        ) || [];


    if (history.length === 0) {

        container.innerHTML = `

            <div class="empty-history">

                <span>◌</span>

                <p>
                    No decisions saved yet.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        history.map(decision => {

            const winner =
                decision.score1 > decision.score2
                    ? decision.option1
                    : decision.score2 > decision.score1
                        ? decision.option2
                        : "Tie";


            return `

                <div class="history-item">

                    <h3>
                        ${escapeHTML(decision.title)}
                    </h3>

                    <p>
                        ${
                            escapeHTML(
                                decision.description ||
                                "No description provided."
                            )
                        }
                    </p>

                    <div class="history-score">

                        ${
                            escapeHTML(
                                decision.option1
                            )
                        }:
                        ${decision.score1}

                        &nbsp; · &nbsp;

                        ${
                            escapeHTML(
                                decision.option2
                            )
                        }:
                        ${decision.score2}

                    </div>

                    <p>
                        Current higher score:
                        ${escapeHTML(winner)}
                    </p>

                    <p>
                        ${escapeHTML(decision.date)}
                    </p>

                </div>

            `;

        }).join("");

}


/* =========================
   HTML SAFETY
========================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================
   INITIAL LOAD
========================= */

loadHistory();