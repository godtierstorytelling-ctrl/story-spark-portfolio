# Contributing to Story Spark

Welcome! Even though Story Spark is currently a solo-led project, this documentation outlines how contributions *would* work in a collaborative engineering environment. This mirrors real-world development workflows and provides a clear structure for anyone who may join future development.

---

# 🧭 Project Scope

Story Spark is a modular, GPT-powered storytelling prototype designed with future expansion into a full web application. Contributions should follow the architectural structure outlined in:

- `docs/architecture-overview.md`
- `docs/module-flow.md`
- `docs/pseudocode-overview.md`
- `docs/technical-decisions.md`

Before contributing, take a moment to review these documents to understand the system’s design principles and module logic.

---

# 🎯 How to Contribute

## 1. **Fork the Repository**
Click “Fork” at the top-right of this repo, creating your own copy.

---

## 2. **Clone Your Fork Locally**

git clone https://github.com/your-username/story-spark-public.git

cd story-spark-public


---

## 3. **Create a Feature Branch**

Follow the naming conventions below:

git checkout -b feature/add-character-generator
git checkout -b fix/world-seed-typo
git checkout -b docs/update-prompts-overview


**Branch Naming Rules:**
- `feature/…` for new additions  
- `fix/…` for bug or typo fixes  
- `docs/…` for documentation updates
- `refactor/…` for architecture cleanup

---

## 4. **Make Your Changes**

Contributions may include:

- Updating pseudocode
- Improving docs
- Adding diagrams
- Adding new prompt assets
- Proposing new module workflows
- Suggesting improvements to redirect or upsell logic
- Adding examples or visualizations

---

## 5. **Commit Your Changes**

Use clear, descriptive commit messages:

git add .
git commit -m "Add pseudocode for alternate branching flow in Character Forge"


**Commit Message Guidelines:**
- Start with an action verb
- Avoid vague messages (“stuff,” “fix,” “update”)
- Explain the *why* when relevant

---

## 6. **Push Your Branch**

git push origin feature/add-character-generator


---

## 7. **Open a Pull Request**

In your forked repo:

- Click **“Compare & Pull Request”**
- Choose `main` as the base branch
- Add a clear description of your changes
- Reference any relevant docs or modules

**PR Description Template:**

Summary

Brief explanation of the change.

Motivation

Why this change improves Story Spark.

Relevant Docs

architecture-overview.md

module-flow.md

Testing

Explain how you verified the logic or structure.


---

# 🧱 Code Style & Conventions

Even though this repo contains pseudocode, contributors should follow consistent conventions.

## **JavaScript-Inspired Pseudocode**
- Use function declarations or named exports
- Use camelCase for functions and variables
- Include English comments explaining module intent
- Prefer clear, readable logic over clever shortcuts

## **Folder Structure**
All new pseudocode should go under the appropriate directory:

src/modules/ (new story modules)
src/system/ (system logic)
docs/ (documentation)
prompts/ (prompt asset additions)
images/ (UI diagrams or flow visuals)


Do not place files in the root directory unless necessary.

---

# 🔍 Issue Reporting

If you'd like to propose an improvement or identify a gap:

1. Go to **Issues**  
2. Click **“New Issue”**  
3. Use the structured template below:

Issue Description

A concise explanation of the problem or opportunity.

Proposed Solution

How you suggest addressing it.

Impact

Why this improves Story Spark.

Relevant Docs

Link any supporting documents.


---

# 🧪 Testing (Conceptual)

Because the repo is pseudocode-only, formal tests do not yet exist.  
However, contributors should:

- Cross-check logic against module flow  
- Ensure router transitions remain valid  
- Ensure Upsell/Redirect logic is not broken  
- Validate consistency across docs and pseudocode  

Once the project enters MVP development, Story Spark will use:

- Jest or Vitest (unit tests)
- Playwright (E2E, optional)
- TypeScript (optional future migration)

---

# 🌱 Contribution Philosophy

Story Spark is built with the following values:

- **Clarity over complexity**  
- **Modularity over monoliths**  
- **Readable pseudocode over dense logic**  
- **Scalable architecture from day one**  
- **Creative empowerment for writers**  
- **Technical transparency for developers**

Contributions should support and extend these principles.

---

# 💬 Questions or Suggestions?

Feel free to open an Issue or start a Discussion.  
Collaboration is welcome — whether you're:

- An engineer  
- A UX designer  
- A storyteller  
- A prompt engineer  
- A technical writer  
- Or an aspiring contributor  

Your insight is valuable.

---

# 🏁 Thank You

By contributing, you’re helping shape the future of Story Spark and supporting the development of a creative, AI-powered storytelling ecosystem.
