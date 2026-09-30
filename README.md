# DecisionLab

> A lightweight decision intelligence tool for comparing options, prioritizing factors, and making structured decisions using weighted criteria.

DecisionLab helps users turn uncertain decisions into structured comparisons. Instead of relying only on subjective pros and cons, users can define decision factors, assign importance weights, rate each option, and see the resulting weighted scores in real time.

---

## Overview

Making a decision often involves balancing multiple factors such as cost, performance, reliability, long-term value, and risk.

DecisionLab provides a simple framework for this process:

**Define → Prioritize → Rate → Analyze → Decide**

Users can create a decision, compare two options, customize the factors that matter, assign weights to those factors, and rate each option on a 0–10 scale.

The application then calculates the weighted scores and presents the comparison through a clean and simple visual interface.

---

## Features

### Decision Creation

- Create a decision with a title and description
- Define two options to compare
- Start a structured analysis from the decision form

### Dynamic Decision Factors

- Use predefined decision factors
- Add custom factors dynamically
- Adjust the importance of each factor
- View total factor weight in real time

### Option Rating Matrix

- Rate each option from 0–10
- Rate every option independently for each factor
- View ratings and factor weights together
- Update ratings dynamically

### Weighted Decision Analysis

- Automatically calculate weighted scores
- Display scores on a 0–100 scale
- Compare options using visual score bars
- Generate a live decision insight

### Decision History

- Save completed decisions
- Store decision data using browser LocalStorage
- View previously saved decisions
- Preserve scores, factors, ratings, and decision information

### Responsive Interface

- Clean and minimal user interface
- Responsive layout
- Works across desktop and smaller screens
- No external UI framework required

---

## How It Works

DecisionLab follows a structured decision-making workflow:

Create Decision
        ↓
Define Two Options
        ↓
Add Decision Factors
        ↓
Set Factor Weights
        ↓
Rate Each Option
        ↓
Calculate Weighted Score
        ↓
Compare Results
        ↓
Save Decision

---

## Scoring System

Each decision factor has:

- A weight representing its importance
- A rating representing how well each option performs

Ratings range from 0 to 10.

0 represents the lowest rating, while 10 represents the highest rating.

The weighted score is calculated using:

Weighted Score = Σ(Factor Weight × Option Rating) / Total Weight

The resulting value is converted to a 0–100 score for easier comparison.

### Example

| Factor | Weight | Dell Inspiron | MacBook Air |
|---|---:|---:|---:|
| Cost | 30% | 8/10 | 6/10 |
| Performance | 30% | 8/10 | 9/10 |
| Long-term Value | 25% | 8/10 | 9/10 |
| Risk | 15% | 8/10 | 7/10 |

DecisionLab calculates the weighted result automatically whenever a factor weight or option rating changes.

---

## Application Workflow

### Step 1 — Create Your Decision

Users enter:

- Decision title
- Description
- Option 1
- Option 2

### Step 2 — Configure Decision Factors

Users can:

- View predefined factors
- Add custom factors
- Adjust factor importance
- Monitor the total weight

### Step 3 — Rate Your Options

Each option receives a rating from 0–10 for every factor.

### Step 4 — View Live Results

The application automatically displays:

- Option scores
- Visual score bars
- Decision insight

### Step 5 — Save the Decision

Users can save the current decision and view it later in the Decision History section.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Styling and responsive layout |
| JavaScript | Application logic and dynamic interactions |
| LocalStorage | Client-side decision history |

### Current Architecture

The current version is intentionally built using vanilla web technologies.

There is currently:

- No frontend framework
- No backend server
- No database
- No external API dependency

This keeps the core decision engine lightweight, transparent, and easy to understand.

---

## Project Structure

DecisionLab/
│
├── index.html
├── style.css
├── script.js
└── README.md

### index.html

Defines the structure of the DecisionLab application, including:

- Navigation
- Hero section
- Decision creation form
- Decision analysis
- Factor controls
- Rating matrix
- Results section
- Decision history
- Footer

### style.css

Handles:

- Layout
- Typography
- Buttons
- Cards
- Forms
- Sliders
- Score bars
- Responsive design
- Visual styling

### script.js

Contains the application logic for:

- Creating decisions
- Managing factors
- Updating factor weights
- Managing option ratings
- Calculating weighted scores
- Updating live results
- Generating decision insights
- Saving decisions
- Loading decision history
- LocalStorage management

### README.md

Contains project documentation, setup instructions, architecture information, scoring logic, and the project roadmap.

---

## Getting Started

### Prerequisites

No package manager or additional dependency installation is required.

You only need:

- A modern web browser
- Git
- A code editor such as Visual Studio Code

### Clone the Repository

    git clone https://github.com/vadshan30/DecisionLab.git

### Navigate to the Project

    cd DecisionLab

### Run Locally

Open `index.html` in a modern web browser.

For development, you can also use the Live Server extension in Visual Studio Code.

---

## Example Use Case

A user wants to decide which laptop to purchase.

### Decision

Which laptop should I buy?

### Options

- Dell Inspiron
- MacBook Air

### Example Factors

| Factor | Weight |
|---|---:|
| Cost | 30% |
| Performance | 30% |
| Long-term Value | 25% |
| Risk | 15% |

Each laptop can then be rated from 0 to 10 for every factor.

DecisionLab processes the selected weights and ratings and provides a structured comparison.

---

## Data Storage

DecisionLab currently uses the browser's `localStorage` to store decision history.

This means:

- No database is required
- No account is required
- No backend is required
- Data remains available in the same browser and device

Saved decisions will remain available until the browser's LocalStorage data is cleared.

---

## Design Principles

DecisionLab is built around three core principles.

### 1. Structured Thinking

Break a complex decision into smaller and measurable factors.

### 2. Explicit Priorities

Not every factor has the same importance. Weighting allows users to clearly define what matters most.

### 3. Transparent Results

The final score is derived from visible weights and ratings instead of hidden decision logic.

---

## Current Version

### V2 — Dynamic Factors & Option Rating Matrix

The current version provides:

- Decision creation
- Two-option comparison
- Dynamic factor creation
- Adjustable factor weights
- Total weight calculation
- Option rating matrix
- 0–10 option ratings
- Weighted score calculation
- Live score visualization
- Decision insight
- Local decision history

---

## Development Roadmap

The project is being developed incrementally.

### V3 — Advanced Factor Management

Planned improvements:

- Edit factor names
- Delete factors
- Improved weight validation
- Better handling of invalid weight totals
- Improved rating synchronization

### V4 — What-If Analysis

Planned improvements:

- Change factor weights temporarily
- Compare different scenarios
- Explore how priorities affect the outcome
- Scenario-based decision comparison

### V5 — Advanced Decision History

Planned improvements:

- Search saved decisions
- Filter decisions
- Delete individual decisions
- View complete decision details
- Compare previous decisions

### Future Development

Potential future capabilities include:

- Data visualization
- Support for more than two options
- AI-assisted decision analysis
- AI-generated decision factors
- Natural language decision input
- Scenario generation
- Document and data analysis
- Backend and database integration
- User accounts
- Cloud synchronization

---

## Future Vision

DecisionLab is designed to grow beyond a simple weighted scoring calculator.

The long-term goal is to develop it into a broader decision intelligence platform that combines structured decision models with:

- Artificial Intelligence
- Scenario analysis
- Data-driven insights
- Natural language interaction
- Historical decision analysis
- Personalized decision insights

The current vanilla JavaScript implementation provides the foundation for these future capabilities.

---

## Development Approach

The project is intentionally developed in phases instead of adding every feature at once.

V1
Core Decision Engine
        ↓
V2
Dynamic Factors + Rating Matrix
        ↓
V3
Factor Management + Validation
        ↓
V4
What-If Analysis
        ↓
V5
Advanced History
        ↓
Future
AI + Backend + Data Intelligence

This phased approach keeps the core system understandable while allowing DecisionLab to evolve into a larger platform.

---

## Contributing

DecisionLab is currently maintained as a personal development and learning project.

Suggestions, ideas, and improvements are welcome as the project evolves.

---

## Author

### Sri Vadshan J.

B.Tech Artificial Intelligence & Data Science

GitHub: https://github.com/vadshan30/DecisionLab

---

## License

This project is currently intended as a personal learning and development project.
