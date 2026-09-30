# DecisionLab

DecisionLab is a lightweight web-based decision intelligence tool that helps users compare options, prioritize important factors, and make structured decisions using weighted criteria.

Instead of relying only on a simple pros-and-cons list, DecisionLab converts decision factors and option ratings into a weighted score so users can clearly see how different priorities affect the result.

## Features

- Create a decision with a title and description
- Compare two options
- Add custom decision factors
- Set importance weights for each factor
- View total factor weight in real time
- Rate each option from 0–10 for every factor
- Automatically calculate weighted scores
- View live score comparisons
- Get a decision insight based on the current scores
- Save decisions locally
- View saved decisions in Decision History
- Responsive interface for desktop and smaller screens
- No backend required

## How It Works

DecisionLab follows a structured decision-making workflow:

Create Decision
↓
Add Decision Factors
↓
Set Factor Weights
↓
Rate Each Option
↓
Calculate Weighted Scores
↓
View Decision Insight
↓
Save Decision

### Weighted Scoring

Each factor has an importance weight and each option receives a rating from 0 to 10.

The weighted score is calculated using:

Weighted Score = Σ(Factor Weight × Option Rating) / Total Weight

The final score is displayed on a 0–100 scale.

For example:

- Cost → Weight: 30% → Rating: 8/10
- Performance → Weight: 30% → Rating: 9/10
- Long-term Value → Weight: 25% → Rating: 8/10
- Risk → Weight: 15% → Rating: 7/10

This allows users to understand how different priorities affect the overall comparison.

## Current Version

### V2 — Dynamic Factors & Option Rating Matrix

The current version includes:

- Dynamic decision factors
- Adjustable factor weights
- Custom factor creation
- Option rating matrix
- 0–10 ratings for each option
- Live weighted score calculation
- Live decision insight
- Local decision history

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Browser LocalStorage

No frameworks or external backend services are required for the current version.

## Project Structure

DecisionLab/
│
├── index.html
├── style.css
├── script.js
└── README.md

### index.html

Contains the structure of the DecisionLab interface, including:

- Navigation
- Decision creation form
- Factor analysis section
- Option rating matrix
- Results section
- Decision history
- Footer

### style.css

Contains the complete visual design and responsive layout.

### script.js

Handles:

- Decision creation
- Dynamic factors
- Factor weights
- Option ratings
- Weighted score calculation
- Decision insights
- LocalStorage
- Decision history

## Getting Started

No installation or package manager is required.

### 1. Clone the Repository

git clone https://github.com/vadshan30/DecisionLab.git

### 2. Open the Project

cd DecisionLab

### 3. Run the Application

Open index.html in a web browser.

You can also use the VS Code Live Server extension for local development.

## Example

A sample laptop decision can be created using:

Decision:
Which laptop should I buy?

Option 1:
Dell Inspiron

Option 2:
MacBook Air

Example factors:

| Factor | Weight |
|---|---:|
| Cost | 30% |
| Performance | 30% |
| Long-term Value | 25% |
| Risk | 15% |

Each option can then be rated from 0 to 10 for every factor.

DecisionLab automatically recalculates the result whenever a weight or rating changes.

## Data Storage

DecisionLab currently uses the browser's localStorage to store decision history.

Saved decisions remain available in the same browser and device until the browser storage is cleared.

No external database is required in the current version.

## Design Approach

DecisionLab is designed around three principles:

### 1. Structured Thinking

Break a complex decision into measurable factors.

### 2. Explicit Priorities

Give each factor an importance weight instead of treating every factor equally.

### 3. Transparent Comparison

Show how the final result is produced from the selected weights and ratings.

## Roadmap

Planned improvements include:

- Factor editing and deletion
- Improved weight validation
- What-if analysis
- Scenario comparison
- Better decision history management
- Decision comparison
- Visual analytics
- AI-assisted decision analysis
- Natural language decision input
- AI-generated decision factors
- Backend and database support
- User accounts and cloud synchronization

## Future Vision

DecisionLab is intended to evolve from a simple browser-based decision calculator into a broader decision intelligence platform.

Future versions can combine structured scoring with AI-assisted analysis, scenario generation, data analysis, and personalized decision insights.

## Author

**Sri Vadshan J.**

B.Tech Artificial Intelligence & Data Science

GitHub: https://github.com/vadshan30

## License

This project is currently intended as a personal learning and development project.
