let currentDecision = {};

function scrollToCreate() {
    document.getElementById("create").scrollIntoView({
        behavior: "smooth"
    });
}


function startAnalysis() {

    const title = document.getElementById("decisionTitle").value.trim();
    const description = document.getElementById("decisionDescription").value.trim();
    const option1 = document.getElementById("option1").value.trim();
    const option2 = document.getElementById("option2").value.trim();

    if (!title || !option1 || !option2) {
        alert("Please enter a decision title and both options.");
        return;
    }

    currentDecision = {
        title,
        description,
        option1,
        option2
    };

    document.getElementById("resultTitle").textContent = title;
    document.getElementById("option1Name").textContent = option1;
    document.getElementById("option2Name").textContent = option2;

    const analysis = document.getElementById("analysis");

    analysis.classList.remove("hidden");

    setTimeout(() => {
        analysis.scrollIntoView({
            behavior: "smooth"
        });
    }, 100);

    updateWeights();
}


function updateWeights() {

    const cost = Number(document.getElementById("cost").value);
    const performance = Number(document.getElementById("performance").value);
    const value = Number(document.getElementById("value").value);
    const risk = Number(document.getElementById("risk").value);

    document.getElementById("costValue").textContent = cost + "%";
    document.getElementById("performanceValue").textContent = performance + "%";
    document.getElementById("valueValue").textContent = value + "%";
    document.getElementById("riskValue").textContent = risk + "%";

    const total = cost + performance + value + risk;

    document.getElementById("totalWeight").textContent = total + "%";

    calculateScores(cost, performance, value, risk);
}


function calculateScores(cost, performance, value, risk) {

    /*
        Temporary scoring model for V1.

        Later this can become a real decision engine
        with user-entered scores and advanced calculations.
    */

    const total = cost + performance + value + risk;

    if (total === 0) {
        setScores(0, 0);
        return;
    }

    let score1 =
        (cost * 0.75) +
        (performance * 0.95) +
        (value * 0.90) +
        (risk * 0.60);

    let score2 =
        (cost * 0.95) +
        (performance * 0.75) +
        (value * 0.78) +
        (risk * 0.80);

    score1 = Math.round(score1 / total * 100);
    score2 = Math.round(score2 / total * 100);

    setScores(score1, score2);
}


function setScores(score1, score2) {

    document.getElementById("score1").textContent = score1;
    document.getElementById("score2").textContent = score2;

    document.getElementById("bar1").style.width =
        Math.min(score1, 100) + "%";

    document.getElementById("bar2").style.width =
        Math.min(score2, 100) + "%";

    const insight = document.getElementById("insightText");

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


function saveDecision() {

    if (!currentDecision.title) {
        return;
    }

    const score1 = Number(
        document.getElementById("score1").textContent
    );

    const score2 = Number(
        document.getElementById("score2").textContent
    );

    const savedDecision = {
        ...currentDecision,
        score1,
        score2,
        date: new Date().toLocaleString()
    };

    const history =
        JSON.parse(localStorage.getItem("decisionLabHistory")) || [];

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


function loadHistory() {

    const container =
        document.getElementById("historyContainer");

    const history =
        JSON.parse(localStorage.getItem("decisionLabHistory")) || [];

    if (history.length === 0) {

        container.innerHTML = `
            <div class="empty-history">
                <span>◌</span>
                <p>No decisions saved yet.</p>
            </div>
        `;

        return;
    }

    container.innerHTML = history.map(decision => {

        const winner =
            decision.score1 > decision.score2
                ? decision.option1
                : decision.score2 > decision.score1
                    ? decision.option2
                    : "Tie";

        return `
            <div class="history-item">
                <h3>${decision.title}</h3>

                <p>
                    ${decision.description || "No description provided."}
                </p>

                <div class="history-score">
                    ${decision.option1}: ${decision.score1}
                    &nbsp; · &nbsp;
                    ${decision.option2}: ${decision.score2}
                </div>

                <p>
                    Current higher score: ${winner}
                </p>

                <p>
                    ${decision.date}
                </p>
            </div>
        `;

    }).join("");
}


loadHistory();