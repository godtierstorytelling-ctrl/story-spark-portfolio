# Story Spark Architecture Overview

This document describes the high-level technical architecture of the Story Spark GPT prototype. Although this repository contains pseudocode rather than full implementation code, the structure accurately reflects how a real-world conversational web application would be organized.

Story Spark is designed as a modular, state-driven system that routes user input through a guided five-step writing workflow using GPT as the underlying engine.

---

# 🏛️ System Architecture Summary

Story Spark uses a **layered architecture** consisting of:

1. **Modules Layer** — Five self-contained GPT-powered story development modules  
2. **System Logic Layer** — Router, redirect rules, upsell logic, and global state  
3. **Entry Point Layer** — Intake handler that orchestrates the flow  
4. **Prompt Assets Layer** — External PDF prompt packs used by the GPT system  
5. **User Interaction Layer** — The conversation experience presented to the user  

This modular design enables future expansion into a full web application with API routes, UI components, persistent sessions, and saved projects.

---

# 🧩 1. Modules Layer

Each module in the `/src/modules/` directory corresponds to a major stage of the Story Spark workflow:

Idea Spark → World Seed → Character Forge → Plot Skeleton → Wordsmith Lab


Every module:

- Accepts user input  
- Validates or requests missing data  
- Generates a structured output using GPT-driven logic  
- Updates the conversation state  
- Hands off control to the next module  

This resembles how multistep wizards, onboarding flows, and guided creators are built in web applications.

---

# ⚙️ 2. System Logic Layer

The `/src/system/` folder contains the logic that makes the multi-module system function predictably.

### **Router (`router.js`)**
Determines the next module in the sequence using a fixed flow.  
Functions like a lightweight state machine.

### **State Manager (`state-manager.js`)**
Tracks:
- Which module the user is in  
- Previous inputs and outputs  
- Miscellaneous metadata  

This is essential for maintaining consistent behavior across steps.

### **Redirect Logic (`redirect-logic.js`)**
Prevents GPT from drifting outside its intended domain.

If a user asks about:
- finance  
- coding  
- therapy  
- legal issues  
- business advice  

…it gently redirects them back to story development.

This ensures the experience remains focused and safe.

### **Upsell Logic (`upsell-logic.js`)**
Adds contextual, non-blocking hints about the Story Engine GPT.

Triggered by:
- requests for advanced structure  
- custom frameworks  
- deep outlining  
- non-free Story Engine features  

These messages mimic the upsell funnels common in SaaS and GPT-powered services.

---

# 🚦 3. Entry Point Layer

The main orchestrator (`index.js`) simulates how a serverless function or API route would handle user input:

1. Accept user message  
2. Check for off-topic requests  
3. Route to the correct module  
4. Generate module output  
5. Apply upsell logic  
6. Update state  
7. Return a structured response  

This is the heartbeat of the system.

---

# 📚 4. Prompt Assets Layer

The `/prompts/` folder contains:

- Prompt Book  
- Story Spark Bible  
- Knowledge Packs  
- Scripts & Closers  

These files represent the **content logic** of the system — the narrative rules, workflows, and linguistic frameworks that shape the GPT outputs.

They serve as the “content engine” behind the pseudocode structure.

---

# 💬 5. User Interaction Layer

The interaction layer exists in the GPT environment (e.g., GPT “Guide Mode”). It translates:

- module outputs  
- redirect messages  
- upsell hints  
- state transitions  

…into a smooth, human-readable conversation.

In the future, this can be transformed into:

- a web-based UI  
- a mobile app  
- a Vercel-hosted dashboard  
- a persistent story-building workspace  

---

# 🔄 End-to-End Flow (High-Level)

User Input
↓
Entry Point (index.js)
↓
Redirect Logic (optional)
↓
Router decides next module
↓
Specific Module executes logic
↓
Outputs returned (logline, world snapshot, beats, etc.)
↓
Upsell Logic (optional)
↓
State updated
↓
Next module prompt displayed


This loop continues until the story development sequence completes.

---

# 🧭 Why This Architecture Works

### ✔ Clear, modular structure  
Each module is isolated and can be rewritten or replaced without breaking the system.

### ✔ Predictable conversation flow  
The router and state manager enforce guardrails.

### ✔ Safe user experience  
Redirect logic prevents inappropriate or off-scope usage.

### ✔ Business-aligned  
Upsell logic mirrors standard GPT product tiers.

### ✔ Future-proof  
The architecture can easily evolve into:
- Next.js file-based routing  
- React components  
- Supabase-backed sessions  
- Vercel API routes  
- A full-stack Story Spark application

---

# 🏁 Summary

This architecture demonstrates:

- System-level engineering thinking  
- Modular conversational design  
- Proper separation of concerns  
- Realistic application scaffolding  
- Full-stack readiness  
- A clear blueprint for future development  

Although this prototype is currently GPT-based, the architecture documented here is structured exactly like a real application, making Story Spark ready for its next evolution.


