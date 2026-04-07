# Notion Build Guide — AI Agency Operating System
**Version:** 1.0  
**Date:** 2026-04-05  
**Follow in order. Check off as you go.**

---

## Before You Start

- [ ] Open Notion
- [ ] Create a new **private page** in your sidebar
- [ ] Title it: `AI Agency Operating System`
- [ ] Set an icon (suggested: 🧠 or ⚙️)
- [ ] This page is your workspace root — everything lives under it

> **How to create a database:** Inside any page, type `/database` and choose **"Database – Full page"**. Give it the name, then add properties one by one using the **"+" button** in the table header.

> **Property type shortcut:** Click the property name → click the type icon on the left to change it.

---

## How to Read This Guide

Each database section gives you:
1. **How to create it** — where it lives
2. **Properties checklist** — name, type, and options to pre-fill
3. **Views to create** — what filters/groupings to apply
4. **Relations** — set these up after both linked databases exist

**Property types used:**
`Title` `Text` `Select` `Multi-select` `Number` `Checkbox` `Date` `Relation` `URL` `Email` `Phone` `Formula`

---

---

# DAY 1 — Foundation

---

## Database 1 of 16 — Agency Docs

**Purpose:** Stores all core agency documentation — constitution, guides, SOPs, standards.

### Create it
- [ ] Inside `AI Agency Operating System`, type `/database` → **Database – Full page**
- [ ] Name it: `Agency Docs`

### Properties

| Property Name | Type | Options to Pre-fill |
|---|---|---|
| Title | Title | *(auto-created — rename to "Doc Title")* |
| Doc Type | Select | Constitution, Delivery Standard, Voice Guide, Pricing Rule, Evaluation Rubric, SOP, Policy, ICP Profile, Offer Definition, Spec |
| Version | Text | — |
| Status | Select | Draft, Approved, Needs Review, Superseded, Archived |
| Owner | Text | *(your name as default)* |
| Last Reviewed | Date | — |
| Applies To | Multi-select | Marketing, Intake, Proposal, Delivery, QA, Operations, All |
| Notes | Text | — |

- [ ] Add all properties above
- [ ] Pre-fill all select options listed

### Views to Create
- [ ] **Default view** → rename to `All Docs`
- [ ] **+ Add a view** → Filter view → name `Approved` → Filter: Status = Approved
- [ ] **+ Add a view** → Filter view → name `Needs Review` → Filter: Status = Needs Review
- [ ] **+ Add a view** → Group view → name `By Type` → Group by: Doc Type

### Load Your Content
- [ ] Create a record: `Agency Constitution v0.1` → Doc Type: Constitution, Status: Approved
- [ ] Create a record: `Voice and Tone Guide v0.1` → Doc Type: Voice Guide, Status: Approved
- [ ] Create a record: `Pricing Logic v0.1` → Doc Type: Pricing Rule, Status: Approved
- [ ] Create a record: `Capacity Model v0.1` → Doc Type: SOP, Status: Approved
- [ ] Create a record: `Revenue Model v0.1` → Doc Type: Policy, Status: Approved
- [ ] Create a record: `Client Communication Standard v0.1` → Doc Type: SOP, Status: Approved
- [ ] Create a record: `Subcontractor Policy v0.1` → Doc Type: Policy, Status: Approved
- [ ] Paste the content of each doc into its Notion page body

---

## Database 2 of 16 — Clients

**Purpose:** Single source of truth for every company you have a relationship with.

### Create it
- [ ] Inside `AI Agency Operating System` → `/database` → **Database – Full page**
- [ ] Name it: `Clients`

### Properties

| Property Name | Type | Options to Pre-fill |
|---|---|---|
| Company Name | Title | — |
| Status | Select | Active Client, Past Client, Prospect, Referral Partner, Archived |
| Relationship Stage | Select | Cold, Warm, Active Engagement, Active Project, Retainer, Closed / Alumni |
| Industry | Select | B2B SaaS, Home Services, Logistics, Field Services, Consulting, Financial Services, Healthcare, Enterprise Software, Other |
| Company Size | Select | 1–10, 11–50, 51–200, 201–500, 500–1000, 1000+ |
| Website | URL | — |
| Contract Status | Select | None, Proposal Sent, Signed, Expired, Renewed |
| Renewal Date | Date | — |
| Strategic Value | Select | High, Medium, Low |
| Health Score | Select | 🟢 Healthy, 🟡 At Risk, 🔴 Critical, ⚪ Not Started |
| NDA Signed | Checkbox | — |
| Total Revenue | Number | *(format as Currency — $)* |
| Notes | Text | — |

- [ ] Add all properties above
- [ ] Set Total Revenue number format to **Currency (USD)**

### Relations (set up later)
- [ ] **Primary Contact** → Relation to `Contacts` *(add after Contacts is built)*
- [ ] **Linked Opportunities** → Relation to `Opportunities` *(add after Opportunities is built)*
- [ ] **Linked Projects** → Relation to `Projects` *(add after Projects is built)*

### Views to Create
- [ ] Rename default to `All Clients`
- [ ] Filter view: `Active Clients` → Status = Active Client
- [ ] Filter view: `Retainer Clients` → Relationship Stage = Retainer
- [ ] Filter view: `Past Clients` → Status = Past Client

---

## Database 3 of 16 — Contacts

**Purpose:** Individual people — buyers, champions, stakeholders, referral sources.

### Create it
- [ ] `/database` → **Database – Full page** → Name: `Contacts`

### Properties

| Property Name | Type | Options to Pre-fill |
|---|---|---|
| Full Name | Title | — |
| Title / Role | Text | — |
| Contact Type | Select | Economic Buyer, Champion, Stakeholder, Technical Contact, Referral Source, Past Client Contact, Vendor / Partner |
| Email | Email | — |
| Phone | Phone | — |
| LinkedIn URL | URL | — |
| Preferred Channel | Select | Email, LinkedIn, Phone, Text, Async |
| Last Contact Date | Date | — |
| Referral Source | Checkbox | — |
| Do Not Contact | Checkbox | — |
| Notes | Text | — |

### Relations (set up later)
- [ ] **Company** → Relation to `Clients`
- [ ] **Linked Leads** → Relation to `Leads`
- [ ] **Linked Opportunities** → Relation to `Opportunities`

### Views to Create
- [ ] Rename default to `All Contacts`
- [ ] Filter view: `Buyers` → Contact Type = Economic Buyer
- [ ] Filter view: `Referral Sources` → Referral Source = Checked
- [ ] Filter view: `Do Not Contact` → Do Not Contact = Checked

---

## Database 4 of 16 — ICPs

**Purpose:** Ideal customer profiles your agency targets.

### Create it
- [ ] `/database` → **Database – Full page** → Name: `ICPs`

### Properties

| Property Name | Type | Options to Pre-fill |
|---|---|---|
| ICP Name | Title | — |
| Segment | Select | B2B SaaS, Service Business, Enterprise Internal Team, Consulting, Other |
| Industry | Multi-select | *(same as Clients: B2B SaaS, Home Services, Logistics, etc.)* |
| Company Size | Select | 1–10, 11–50, 51–200, 201–500, 1000+ |
| Buyer Title | Multi-select | VP Product, Head of Product, UX Lead, COO, Owner, Operator, Director of UX, Transformation Lead |
| Budget Range | Text | — |
| Main Pains | Text | — |
| Trigger Events | Text | — |
| Desired Outcomes | Text | — |
| Red Flags | Text | — |
| Priority | Select | High, Medium, Low |
| Notes | Text | — |

### Relations (set up later)
- [ ] **Best Offer Match** → Relation to `Offers`

### Views to Create
- [ ] Rename default to `All ICPs`
- [ ] Filter view: `High Priority` → Priority = High
- [ ] Board view: `By Priority` → Group by: Priority

### Load Your Content
- [ ] Create record: `Mid-Market SaaS Team With UX Debt` → paste content from operating plan
- [ ] Create record: `Operations-Heavy Service Business` → paste content from operating plan
- [ ] Create record: `Enterprise Internal Team` → paste content from operating plan

---

## Database 5 of 16 — Offers

**Purpose:** The services your agency sells.

### Create it
- [ ] `/database` → **Database – Full page** → Name: `Offers`

### Properties

| Property Name | Type | Options to Pre-fill |
|---|---|---|
| Offer Name | Title | — |
| Category | Select | Diagnostic, Systems / Operations, Transformation, Advisory, Retainer |
| Who It's For | Text | — |
| Problem Solved | Text | — |
| Inputs Required | Text | — |
| Outputs Delivered | Text | — |
| Duration | Text | — |
| Price Range | Text | — |
| Exclusions | Text | — |
| Upsell Path | Text | — |
| Delivery Complexity | Select | Low, Medium, High |
| Status | Select | Active, Archived |

### Views to Create
- [ ] Rename default to `All Offers`
- [ ] Filter view: `Active Offers` → Status = Active
- [ ] Board view: `By Category` → Group by: Category

### Load Your Content
- [ ] Create record: `UX / Service Experience Audit` → paste content from operating plan
- [ ] Create record: `AI Workflow and Operating System Design` → paste content from operating plan
- [ ] Create record: `Strategic Redesign / Optimization` → paste content from operating plan
- [ ] Create record: `Advisory Retainer` → paste content from offer_4_retainer doc

---

## Database 6 of 16 — Specs

**Purpose:** One record per workflow. The most important database in the system.

### Create it
- [ ] `/database` → **Database – Full page** → Name: `Specs`

### Properties

| Property Name | Type | Options to Pre-fill |
|---|---|---|
| Spec Name | Title | — |
| Workflow Area | Select | Marketing, Intake, Proposal, Delivery, QA, Operations |
| Trigger | Text | — |
| Inputs | Text | — |
| Preconditions | Text | — |
| Steps | Text | — |
| Output Format | Text | — |
| Failure States | Text | — |
| Approval Required | Select | Yes – Human, No – Agent Can Proceed, Conditional |
| Version | Text | — |
| Status | Select | Draft, Approved, Needs Revision, Deprecated |
| Owner | Text | — |

### Relations (set up later)
- [ ] **Linked Template** → Relation to `Templates`
- [ ] **Linked Test Suite** → Relation to `Test Cases`
- [ ] **Linked Prompts** → Relation to `Prompts`

### Views to Create
- [ ] Rename default to `All Specs`
- [ ] Filter view: `Approved` → Status = Approved
- [ ] Filter view: `Needs Revision` → Status = Needs Revision
- [ ] Board view: `By Workflow Area` → Group by: Workflow Area

### Load Your Content
- [ ] Create record: `Content Brief Generation` → Workflow Area: Marketing
- [ ] Create record: `Inbound Lead Qualification` → Workflow Area: Intake
- [ ] Create record: `Discovery Call Summary` → Workflow Area: Intake
- [ ] Create record: `Proposal Assembly` → Workflow Area: Proposal
- [ ] Create record: `Project Kickoff Brief` → Workflow Area: Delivery
- [ ] Create record: `Deliverable QA Review` → Workflow Area: QA
- [ ] For each: paste the full spec content (Trigger, Inputs, Required Output) into the page body

---

---

# DAY 2 — Spine

---

## Database 7 of 16 — Leads

**Purpose:** Tracks inbound interest before a real opportunity is created.

### Create it
- [ ] `/database` → **Database – Full page** → Name: `Leads`

### Properties

| Property Name | Type | Options to Pre-fill |
|---|---|---|
| Lead Name | Title | — |
| Company | Text | — |
| Source | Select | LinkedIn, Referral, Google Ads, Inbound Form, Cold Outreach, Event, Other |
| Contact | Text | — |
| Problem Mentioned | Text | — |
| Industry | Select | *(same as Clients)* |
| Budget Signal | Text | — |
| Urgency | Select | High, Medium, Low, Unknown |
| Strategic Fit | Number | *(1–5 scale)* |
| Budget Fit | Number | *(1–5 scale)* |
| Delivery Fit | Number | *(1–5 scale)* |
| Overall Fit | Formula | `(prop("Strategic Fit") + prop("Budget Fit") + prop("Delivery Fit")) / 3` |
| Confidence | Select | High, Medium, Low |
| Red Flags | Text | — |
| Recommended Next Step | Select | Reject, Nurture, Schedule Discovery, Manual Review |
| Status | Select | New Lead, Needs Enrichment, Qualified, Nurture, Rejected, Discovery Scheduled |

### Relations (set up later)
- [ ] **Linked Contact** → Relation to `Contacts`
- [ ] **Linked Opportunity** → Relation to `Opportunities`

### Views to Create
- [ ] Rename default to `All Leads`
- [ ] Filter view: `New Leads` → Status = New Lead
- [ ] Filter view: `Qualified` → Status = Qualified
- [ ] Filter view: `Needs Review` → Recommended Next Step = Manual Review
- [ ] Board view: `Pipeline` → Group by: Status

---

## Database 8 of 16 — Opportunities

**Purpose:** Tracks qualified selling activity between lead and signed project.

### Create it
- [ ] `/database` → **Database – Full page** → Name: `Opportunities`

### Properties

| Property Name | Type | Options to Pre-fill |
|---|---|---|
| Opportunity Name | Title | — |
| Pain Summary | Text | — |
| Desired Outcomes | Text | — |
| Stakeholders | Text | — |
| Timeline | Text | — |
| Risks | Text | — |
| Discovery Status | Select | Not Started, Scheduled, Complete |
| Proposal Status | Select | Not Started, Drafting, Drafted, Sent, Revised, Accepted, Declined |
| Estimated Value | Number | *(format as Currency – $)* |
| Probability | Number | *(format as Percent)* |
| Owner | Text | — |
| Status | Select | Qualified, Discovery Scheduled, Discovery Complete, Scoping, Proposal Drafted, Proposal Sent, Negotiation, Won, Lost, Nurture |

### Relations (set up later)
- [ ] **Linked Lead** → Relation to `Leads`
- [ ] **Client** → Relation to `Clients`
- [ ] **Offer Match** → Relation to `Offers`
- [ ] **Linked Contact** → Relation to `Contacts`

### Views to Create
- [ ] Rename default to `All Opportunities`
- [ ] Filter view: `Open` → Status ≠ Won, ≠ Lost, ≠ Nurture
- [ ] Filter view: `Discovery Queue` → Status = Discovery Scheduled OR Discovery Complete
- [ ] Filter view: `Proposal Queue` → Status = Scoping OR Proposal Drafted
- [ ] Filter view: `Won` → Status = Won
- [ ] Board view: `Pipeline` → Group by: Status

---

## Database 9 of 16 — Projects

**Purpose:** Tracks client work after an opportunity is won.

### Create it
- [ ] `/database` → **Database – Full page** → Name: `Projects`

### Properties

| Property Name | Type | Options to Pre-fill |
|---|---|---|
| Project Name | Title | — |
| Client | Text | — |
| Goal | Text | — |
| Success Metrics | Text | — |
| Scope Summary | Text | — |
| Exclusions | Text | — |
| Dependencies | Text | — |
| Risks | Text | — |
| Context Ready | Checkbox | — |
| QA Status | Select | Not Started, In Progress, Passed, Failed, Waived |
| Stage | Select | Awaiting Kickoff, Context Ready, Research, Synthesis, Strategy / Design, Internal QA, Client Review, Revision, Delivered, Expansion Opportunity, Closed |
| Start Date | Date | — |
| Target End Date | Date | — |
| Owner | Text | — |

### Relations (set up later)
- [ ] **Linked Opportunity** → Relation to `Opportunities`
- [ ] **Offer Sold** → Relation to `Offers`
- [ ] **Client** → Relation to `Clients`

### Views to Create
- [ ] Rename default to `All Projects`
- [ ] Filter view: `Active` → Stage ≠ Delivered, ≠ Closed
- [ ] Filter view: `Awaiting QA` → Stage = Internal QA
- [ ] Filter view: `Client Review` → Stage = Client Review
- [ ] Board view: `By Stage` → Group by: Stage

---

## Database 10 of 16 — Deliverables

**Purpose:** Tracks individual outputs inside each project.

### Create it
- [ ] `/database` → **Database – Full page** → Name: `Deliverables`

### Properties

| Property Name | Type | Options to Pre-fill |
|---|---|---|
| Deliverable Name | Title | — |
| Deliverable Type | Select | Audit Report, Discovery Summary, Workflow Map, Proposal, Kickoff Brief, Strategy Deck, Recommendation Summary, Other |
| Acceptance Criteria | Text | — |
| Version | Text | — |
| Stage | Select | Not Started, Drafting, Internal Review, Internal QA, Client Review, Revision, Approved, Final |
| Owner | Text | — |
| Reviewer | Text | — |
| QA Score | Number | *(1–10 scale)* |
| Revision Count | Number | — |
| Client Status | Select | Not Submitted, Submitted, Feedback Received, Approved, Rejected |
| Final Approved | Checkbox | — |
| Asset Link | URL | — |

### Relations (set up later)
- [ ] **Project** → Relation to `Projects`

### Views to Create
- [ ] Rename default to `All Deliverables`
- [ ] Filter view: `In QA` → Stage = Internal QA
- [ ] Filter view: `Needs Revision` → Stage = Revision
- [ ] Filter view: `Client Review` → Stage = Client Review
- [ ] Filter view: `Final Approved` → Final Approved = Checked

---

---

# DAY 3 — Intelligence Layer

---

## Database 11 of 16 — Prompts

**Purpose:** Version-controlled library of all AI prompts used across agency workflows.

### Create it
- [ ] `/database` → **Database – Full page** → Name: `Prompts`

### Properties

| Property Name | Type | Options to Pre-fill |
|---|---|---|
| Prompt Name | Title | — |
| Workflow Area | Select | Marketing, Intake, Proposal, Delivery, QA, Operations |
| Model | Select | claude-sonnet-4, claude-opus-4, gpt-4o, other |
| Version | Text | — |
| Prompt Body | Text | *(paste full prompt text into page body instead — richer formatting)* |
| System Context Required | Text | — |
| Input Variables | Text | — |
| Expected Output | Text | — |
| Status | Select | Draft, In Testing, Approved, Needs Revision, Deprecated |
| Last Tested | Date | — |
| Test Result | Select | Pass, Partial Pass, Fail, Not Yet Tested |
| Gold Standard Output URL | URL | — |
| Notes | Text | — |

### Relations (set up later)
- [ ] **Linked Spec** → Relation to `Specs`
- [ ] **Linked Test Cases** → Relation to `Test Cases`

### Views to Create
- [ ] Rename default to `All Prompts`
- [ ] Filter view: `Approved` → Status = Approved
- [ ] Filter view: `In Testing` → Status = In Testing
- [ ] Filter view: `Needs Revision` → Status = Needs Revision
- [ ] Board view: `By Workflow Area` → Group by: Workflow Area

---

## Database 12 of 16 — Content

**Purpose:** Tracks all marketing content from idea to published.

### Create it
- [ ] `/database` → **Database – Full page** → Name: `Content`

### Properties

| Property Name | Type | Options to Pre-fill |
|---|---|---|
| Title | Title | — |
| Content Type | Select | LinkedIn Post, LinkedIn Article, Case Study, Lead Magnet, Email, Email Sequence, Landing Page, Website Copy, Social Post Cluster, Podcast Brief |
| Channel | Multi-select | LinkedIn, Email, Website, Podcast, Other |
| Pain Point | Text | — |
| Content Angle | Text | — |
| Hook | Text | — |
| CTA | Text | — |
| Status | Select | Idea, Prioritized, Brief Ready, Drafting, In Review, Scheduled, Published, Measured, Repurpose, Retired |
| Priority | Select | High, Medium, Low |
| Publish Date | Date | — |
| Published URL | URL | — |
| Performance Notes | Text | — |

### Relations (set up later)
- [ ] **ICP Target** → Relation to `ICPs`
- [ ] **Offer Alignment** → Relation to `Offers`

### Views to Create
- [ ] Rename default to `All Content`
- [ ] Filter view: `Prioritized` → Status = Prioritized
- [ ] Filter view: `In Draft` → Status = Drafting OR Brief Ready
- [ ] Filter view: `Published` → Status = Published
- [ ] Calendar view: `Content Calendar` → Date field: Publish Date
- [ ] Filter view: `Repurpose Queue` → Status = Repurpose

---

## Database 13 of 16 — Templates

**Purpose:** Stores reusable output structures used by workflows.

### Create it
- [ ] `/database` → **Database – Full page** → Name: `Templates`

### Properties

| Property Name | Type | Options to Pre-fill |
|---|---|---|
| Template Name | Title | — |
| Used For | Select | Content Brief, Discovery Summary, Proposal, Kickoff Brief, QA Review, Report Outline, Status Update, Meeting Agenda, Closeout Summary |
| Input Requirements | Text | — |
| Output Structure | Text | — |
| Tone Rules | Text | — |
| Gold Standard Example | URL | — |
| Status | Select | Active, Needs Update, Archived |

### Relations (set up later)
- [ ] **Linked Offer** → Relation to `Offers`
- [ ] **Linked Spec** → Relation to `Specs`

### Views to Create
- [ ] Rename default to `All Templates`
- [ ] Filter view: `Active` → Status = Active
- [ ] Filter view: `Missing Example` → Gold Standard Example is empty

---

---

# LATER — Add When You Need Them

---

## Database 14 of 16 — Test Cases

**Add when:** You are ready to start testing AI prompts and workflows (before going live with any agent).

### Create it
- [ ] `/database` → **Database – Full page** → Name: `Test Cases`

### Properties

| Property Name | Type | Options to Pre-fill |
|---|---|---|
| Test Name | Title | — |
| Scenario Type | Select | Happy Path, Missing Info, Contradictory Info, Bad Fit Lead, Edge Case, Failure Injection, Formatting Challenge, Out of Scope |
| Input Summary | Text | — |
| Expected Output | Text | — |
| Expected Confidence | Select | High, Medium, Low |
| Actual Result | Text | — |
| Pass/Fail | Select | Pass, Partial Pass, Fail, Not Run |
| Failure Type | Select | Context Gap, Spec Gap, Prompt Gap, Model Reasoning Issue, Human Review Gap, Data Structure Issue, Template Issue |
| Notes | Text | — |
| Retest Needed | Checkbox | — |

### Relations
- [ ] **Spec** → Relation to `Specs`
- [ ] **Linked Prompt** → Relation to `Prompts`

### Views to Create
- [ ] Rename default to `All Tests`
- [ ] Filter view: `Failed` → Pass/Fail = Fail
- [ ] Filter view: `Needs Retest` → Retest Needed = Checked
- [ ] Board view: `By Spec` → Group by: Spec

---

## Database 15 of 16 — Issues / Quality

**Add when:** You have delivered your first project and need to track quality failures.

### Create it
- [ ] `/database` → **Database – Full page** → Name: `Issues / Quality`

### Properties

| Property Name | Type | Options to Pre-fill |
|---|---|---|
| Issue Name | Title | — |
| Source Workflow | Select | Marketing, Intake, Proposal, Delivery, QA, Operations |
| Issue Type | Select | Hallucination, Missing Context, Wrong Recommendation, Formatting Failure, QA Failure, Spec Failure, False Confidence |
| Expected Result | Text | — |
| Actual Result | Text | — |
| Root Cause | Select | Context Gap, Spec Gap, Prompt Gap, Model Limitation, Human Review Gap, Data Design Issue, Template Weakness |
| Severity | Select | Critical, High, Medium, Low |
| Fix Owner | Text | — |
| Re-Test Date | Date | — |
| Status | Select | New Issue, Reproduced, Root Cause Found, Fix In Progress, Re-Tested, Closed |

### Relations
- [ ] **Linked Spec** → Relation to `Specs`
- [ ] **Linked Test Case** → Relation to `Test Cases`

### Views to Create
- [ ] Rename default to `All Issues`
- [ ] Filter view: `Open` → Status ≠ Closed
- [ ] Filter view: `High Severity` → Severity = Critical OR High
- [ ] Board view: `By Root Cause` → Group by: Root Cause

---

## Database 16 of 16 — Revenue

**Add when:** Before you send your first invoice.

### Create it
- [ ] `/database` → **Database – Full page** → Name: `Revenue`

### Properties

| Property Name | Type | Options to Pre-fill |
|---|---|---|
| Invoice Name | Title | — |
| Invoice Number | Text | — |
| Invoice Type | Select | Deposit / Upfront, Milestone, Final, Retainer (Monthly), Change Order |
| Amount | Number | *(format as Currency – $)* |
| Invoice Date | Date | — |
| Due Date | Date | — |
| Paid Date | Date | — |
| Status | Select | Draft, Sent, Overdue, Paid, Voided |
| Payment Method | Select | ACH, Wire, Credit Card, Check, Other |
| Notes | Text | — |

### Relations
- [ ] **Client** → Relation to `Clients`
- [ ] **Project** → Relation to `Projects`

### Views to Create
- [ ] Rename default to `All Invoices`
- [ ] Filter view: `Outstanding` → Status = Sent OR Overdue
- [ ] Filter view: `Overdue` → Status = Overdue
- [ ] Filter view: `Paid` → Status = Paid
- [ ] Board view: `By Status` → Group by: Status

---

---

# Final Setup — Relations Pass

Once all databases are built, go back and add these relations you skipped earlier.

## Round 1 (after Day 1 + Day 2 complete)

- [ ] `Clients` → Add **Primary Contact** → Relation to `Contacts`
- [ ] `Clients` → Add **Linked Opportunities** → Relation to `Opportunities`
- [ ] `Clients` → Add **Linked Projects** → Relation to `Projects`
- [ ] `Contacts` → Add **Company** → Relation to `Clients`
- [ ] `Contacts` → Add **Linked Leads** → Relation to `Leads`
- [ ] `Contacts` → Add **Linked Opportunities** → Relation to `Opportunities`
- [ ] `ICPs` → Add **Best Offer Match** → Relation to `Offers`
- [ ] `Leads` → Add **Linked Contact** → Relation to `Contacts`
- [ ] `Leads` → Add **Linked Opportunity** → Relation to `Opportunities`
- [ ] `Opportunities` → Add **Linked Lead** → Relation to `Leads`
- [ ] `Opportunities` → Add **Client** → Relation to `Clients`
- [ ] `Opportunities` → Add **Offer Match** → Relation to `Offers`
- [ ] `Opportunities` → Add **Linked Contact** → Relation to `Contacts`
- [ ] `Projects` → Add **Linked Opportunity** → Relation to `Opportunities`
- [ ] `Projects` → Add **Offer Sold** → Relation to `Offers`
- [ ] `Projects` → Add **Client** → Relation to `Clients`
- [ ] `Deliverables` → Add **Project** → Relation to `Projects`

## Round 2 (after Day 3 complete)

- [ ] `Specs` → Add **Linked Template** → Relation to `Templates`
- [ ] `Specs` → Add **Linked Prompts** → Relation to `Prompts`
- [ ] `Prompts` → Add **Linked Spec** → Relation to `Specs`
- [ ] `Templates` → Add **Linked Offer** → Relation to `Offers`
- [ ] `Templates` → Add **Linked Spec** → Relation to `Specs`
- [ ] `Content` → Add **ICP Target** → Relation to `ICPs`
- [ ] `Content` → Add **Offer Alignment** → Relation to `Offers`

## Round 3 (when Test Cases and Issues are built)

- [ ] `Specs` → Add **Linked Test Suite** → Relation to `Test Cases`
- [ ] `Prompts` → Add **Linked Test Cases** → Relation to `Test Cases`
- [ ] `Test Cases` → Add **Spec** → Relation to `Specs`
- [ ] `Test Cases` → Add **Linked Prompt** → Relation to `Prompts`
- [ ] `Issues / Quality` → Add **Linked Spec** → Relation to `Specs`
- [ ] `Issues / Quality` → Add **Linked Test Case** → Relation to `Test Cases`

## Round 4 (when Revenue is built)

- [ ] `Revenue` → Add **Client** → Relation to `Clients`
- [ ] `Revenue` → Add **Project** → Relation to `Projects`

---

# Navigation Setup

Once all databases are built:

- [ ] Go back to the root `AI Agency Operating System` page
- [ ] Add a **linked database** shortcut for each of your most-used databases (Leads, Projects, Specs, Content)
- [ ] Create a **Home** section at the top of the root page with quick links to each pipeline board

Suggested root page layout:
```
🧠 AI Agency Operating System

## 📋 Active Now
[Linked view: Active Projects — Board]
[Linked view: Open Opportunities — Board]

## 📥 Intake
[Linked view: New Leads]

## 📣 Marketing
[Linked view: Content — Prioritized]

## ⚙️ System
→ Agency Docs
→ Specs
→ Prompts
→ Templates
```

---

# Done Checklist

- [ ] Day 1 complete: Agency Docs, Clients, Contacts, ICPs, Offers, Specs
- [ ] Day 2 complete: Leads, Opportunities, Projects, Deliverables
- [ ] Day 3 complete: Prompts, Content, Templates
- [ ] Relations Round 1 complete
- [ ] Relations Round 2 complete
- [ ] Content from planning docs loaded into Agency Docs
- [ ] ICPs loaded
- [ ] Offers loaded
- [ ] Specs loaded with full spec content
- [ ] Navigation / Home page set up
- [ ] Later: Test Cases, Issues / Quality, Revenue added when ready

---

*When the board works manually, then you add agents. Not before.*
