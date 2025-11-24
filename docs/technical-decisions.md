# Technical Decisions

This document explains the key technical decisions behind the Story Spark architecture. Although this version of Story Spark is a GPT-powered prototype with pseudocode modules, every structural choice mirrors how a real-world application would be designed. These decisions support clarity, scalability, modularity, and future expansion into a full web application.

---

# 🧱 1. Modular Architecture

**Decision:**  
Split the system into five modules (`/modules`) with one module per story-development phase.

**Why:**  
- Each module has a single responsibility  
- Easy to update or replace individual steps  
- Mirrors real-world React/Next.js file-based organization  
- Supports future branching flows (non-linear pathways)  
- Keeps GPT prompts isolated and predictable  

**Alternatives considered:**  
- One massive prompt file (rejected: hard to maintain, brittle)  
- Multi-layer “super prompt” system (rejected: too opaque, harder to debug)

---

# 🧠 2. Hybrid JavaScript Pseudocode

**Decision:**  
Write pseudocode in JavaScript-inspired syntax with English comments.

**Why:**  
- Aligns with future implementation in Next.js  
- Approachable for recruiters + engineers  
- Shows clear function boundaries and flow  
- Demonstrates understanding of JS module design  
- Allows you to focus on architecture, not syntax errors  

**Alternatives considered:**  
- Python pseudocode (clean but less aligned with full-stack goals)  
- Language-agnostic pseudocode (less technical)

---

# 🔀 3. Router-Based Module Flow

**Decision:**  
Use a simple router (`router.js`) to determine the next module based on current state.

**Why:**  
- Classic pattern for multi-step flows  
- Easy to modify for future branching/loops  
- Mimics state-machine behavior without complexity  
- Keeps modules self-contained  
- Supports “nextModule override” for advanced flows  

**Alternatives considered:**  
- Hard-coded module sequencing inside each module  
  (rejected: brittle, mixes logic with content)  
- Full finite state machine (FSM)  
  (rejected for MVP: too heavy for current stage)

---

# ♻️ 4. Centralized State Manager

**Decision:**  
Maintain all story session information in a single state object (`state-manager.js`).

**Why:**  
- Predictable module behavior  
- Single source of truth  
- Clean handoffs between modules  
- Mirrors how React, Zustand, or serverless APIs store session data  
- Prepares for Supabase-backed persistence later  

**Alternatives considered:**  
- Passing individual variables between modules  
  (rejected: high risk of drift + spaghetti logic)

---

# 🔒 5. Redirect Logic for Off-Topic Queries

**Decision:**  
Implement redirect filters (`redirect-logic.js`) to prevent GPT from drifting into irrelevant or unsafe topics.

**Why:**  
- Keeps the system focused on storytelling  
- Provides predictable user experience  
- Protects conversation boundaries  
- Mimics guardrails used in real production GPT apps  

**Alternatives considered:**  
- Soft nudges without blocking output  
  (rejected for MVP: increases risk of drift)  
- No guardrails  
  (rejected: undermines product purpose)

---

# 🌟 6. Upsell Logic for Story Engine Integration

**Decision:**  
Add a lightweight, non-intrusive upsell system (`upsell-logic.js`) triggered by certain user inputs.

**Why:**  
- Mirrors SaaS “free → pro” upgrade patterns  
- Introduces the broader ecosystem (Story Engine GPT)  
- Does not interrupt flow or block modules  
- Scalable for future business logic  

**Alternatives considered:**  
- Aggressive upsell gating  
  (rejected: interrupts creativity)  
- No upsells at all  
  (rejected: missed product strategy opportunity)

---

# ⚙️ 7. Folder Structure Inspired by Real Engineering Conventions

**Decision:**  
Use a clean, industry-standard repo layout:

src/
modules/
system/
index.js
docs/
prompts/
images/


**Why:**  
- Familiar to engineers reviewing the repo  
- Expresses good separation of concerns  
- Mirrors typical Next.js / server-backed project setups  
- Supports long-term maintainability  

**Alternatives considered:**  
- Flat folder structure (rejected: too messy)  
- Single “prompt logic” folder (rejected: unclear boundaries)

---

# 🧩 8. Pseudocode Instead of Full Code (for Now)

**Decision:**  
Include pseudocode instead of full implementation code in the public repo, with full code maintained privately.

**Why:**  
- Protects proprietary logic and in-progress code  
- Allows a professional public presence without exposing the working internals  
- Makes the architecture reviewer-friendly  
- Matches your current stage in full-stack training  
- Leaves room for future commits as coding skills advance  

**Alternatives considered:**  
- Publishing full code early  
  (rejected: premature exposure, IP concerns)  

---

# 🚀 9. Future-Ready Design for Full Web App Build

**Decision:**  
Design Story Spark so it can be implemented later with:

- Next.js  
- Vercel Edge Functions  
- Supabase (Auth + Postgres + Storage)  
- OpenAI API  
- Client-side React components  

**Why:**  
- Smooth upgrade path  
- No need to restructure later  
- Engineering best practices  
- Creates a professional portfolio trajectory  

**Alternatives considered:**  
- Designing purely as a GPT “prompt system”  
  (rejected: too limited, not future-ready)

---

# 🧭 Summary

The technical decisions behind Story Spark reflect:

- modular design  
- predictable flow  
- good separation of concerns  
- future scalability  
- product-aware architecture  
- alignment with modern full-stack patterns  
- readiness for API-powered implementation  
- strong prompt-engineering foundations  

These decisions position Story Spark as more than a prototype — it’s the blueprint for a full-featured AI storytelling application.
