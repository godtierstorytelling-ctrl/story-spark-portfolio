# Story Spark Prompt Assets Overview

This document provides an overview of the prompt assets included in the `/prompts/` directory. These files represent the narrative logic, creative frameworks, and instructional content that power the Story Spark GPT prototype. They are the “content engine” behind the pseudocode structure in the `/src/` directory and form the backbone of Story Spark’s guided writing experience.

---

# 📚 What Are Prompt Assets?

Prompt assets are structured PDFs (or text-based frameworks) used to guide the GPT model through Story Spark’s 5-module workflow:

1. **Idea Spark**  
2. **World Seed**  
3. **Character Forge**  
4. **Plot Skeleton**  
5. **Wordsmith Lab**

Each asset provides:
- Template structures  
- Writing scaffolds  
- Rules and constraints  
- Prompt variations  
- Module-by-module guidance  
- Course-style explanations  
- Upsell and redirect scripts  

These assets work together to ensure the GPT experience is consistent, modular, and author-friendly.

---

# 📁 Prompt Files Included

The `/prompts/` directory contains the following assets:

### **1. Story Spark Prompt Book (PDF)**  
A guided 14-day creative workbook used to:
- Spark story ideas  
- Provide prompts for each module  
- Offer different angles and exercises  
- Help users build a complete narrative foundation  

*This is a writing accelerator and an onboarding tool.*

---

### **2. Story Spark Knowledge Pack (PDF)**  
Contains the frameworks that drive each module, including:
- Logline frameworks  
- Worldbuilding lenses  
- Character construction formulas  
- Plot structure templates  
- Tone/style breakdowns  

*This document is the reference backbone of Story Spark.*

---

### **3. Knowledge Pack – Feature Comparison & Upsells (PDF)**  
Outlines the relationship between:
- Free Story Spark modules  
- Premium Story Engine GPT features  

Includes:
- Feature comparison tables  
- Upgrade logic  
- Funnel pathways  

*This file drives the upsell triggers implemented in `upsell-logic.js`.*

---

### **4. Story Spark Scripts & Closers (PDF)**  
A collection of:
- Module openers  
- Module closers  
- Transitional scripts  
- Tone settings  
- Redirect-messaging variants  

These scripts provide the “voice” of Story Spark and influence:
- first-time user experience  
- module transitions  
- redirect logic  
- end-of-module summaries

---

### **5. Story Spark Bible (PDF)**  
A deep mini-course covering:
- Story theory fundamentals  
- Plot structures  
- Character arcs  
- Stakes, tension, theme  
- Symbolism & motifs  
- Writing craft principles  

This is the educational pillar of Story Spark — content from this document shapes the behavior of GPT in all five modules.

---

# 🔌 How Prompt Assets Integrate with Code

Although the repository contains **pseudocode** instead of implementation logic, the structure reflects a real-world conversational system.

Each module in `/src/modules/` corresponds semantically to content in the prompt packets:

| Module File | Prompt Asset Section | Purpose |
|------------|----------------------|---------|
| `idea-spark.js` | Prompt Book – Days 1–2 | Generates loglines & early concept distillation |
| `world-seed.js` | Knowledge Pack – Worldbuilding lenses | Constructs setting & signature world feature |
| `character-forge.js` | Character construction frameworks | Builds character sheets & motivations |
| `plot-skeleton.js` | Plot structures (3–Act, 5–Act, etc.) | Creates beats and outline skeleton |
| `wordsmith-lab.js` | Style & tone analysis section | Generates paragraphs in multiple tones |

This mapping ensures that Story Spark behaves consistently with the educational logic behind the system.

---

# ⚙️ Future Integration in a Full App

In a future Next.js or Vercel-hosted version of Story Spark, the prompt assets could be:

- Stored in Supabase (documents or text fields)  
- Loaded via an API or route handler  
- Embedded as prompt templates  
- Served as downloadable resources  
- Dynamically rendered in the UI  

The pseudocode structure in this repository provides a direct path to turning PDF-based logic into web-app-ready text modules.

---

# 🧠 Why This Matters

Including prompt assets in the repo:

- Demonstrates **prompt engineering expertise**  
- Shows the depth of your **story development system design**  
- Provides transparency into the GPT logic  
- Helps collaborators understand your creative scaffolding  
- Makes the prototype “real” to hiring managers  

The combination of **prompt assets + pseudocode architecture** creates a compelling hybrid technical/creative project suitable for:

- AI engineering roles  
- Full-stack and frontend roles  
- Product & UX roles  
- Instructional design & EdTech roles  
- Creative tech innovation portfolios  

---

# 🏁 Summary

The prompt assets in this repo form the conceptual foundation of Story Spark. They supply the narrative frameworks that the modules follow and provide the educational logic behind the user experience.

Together with the pseudocode and architecture docs, they show how Story Spark operates today — and how it will evolve into a full multilingual, multi-platform story development application.

