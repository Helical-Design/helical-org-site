# Notion Database Instructions for AI Agency Operating System

## Purpose

This markdown file gives you a clean setup guide for building the core Notion databases for your AI-enabled design agency operating system.

Use these databases to create:
- shared context across marketing, intake, and delivery
- consistent structure for opportunities and projects
- reusable specs and templates
- evaluation and testing infrastructure
- a foundation for future AI agents

---

# Workspace Structure

Create these databases in Notion first:

1. Agency Docs
2. ICPs
3. Offers
4. Specs
5. Test Cases
6. Templates
7. Leads
8. Opportunities
9. Projects
10. Deliverables
11. Issues / Quality

You can place them all on one main page called:

**AI Agency Operating System**

---

# 1. Agency Docs Database

## Purpose
Stores the core rules, standards, and source-of-truth documentation for the agency.

## Suggested database name
`Agency Docs`

## Properties
- **Title** — Title
- **Doc Type** — Select
- **Version** — Text
- **Status** — Select
- **Owner** — Person or Text
- **Last Reviewed** — Date
- **Applies To** — Multi-select
- **Linked Specs** — Relation to Specs
- **Notes** — Text

## Example doc types
- Constitution
- Delivery Standard
- Voice Guide
- Pricing Rule
- Evaluation Rubric
- SOP
- Policy

## Recommended views
- All Docs
- Approved Docs
- Needs Review
- By Doc Type

---

# 2. ICPs Database

## Purpose
Defines the ideal customer profiles your agency serves.

## Suggested database name
`ICPs`

## Properties
- **ICP Name** — Title
- **Segment** — Select
- **Industry** — Select or Multi-select
- **Company Size** — Select
- **Buyer Title** — Multi-select
- **Budget Range** — Text
- **Main Pains** — Text
- **Trigger Events** — Text
- **Desired Outcomes** — Text
- **Red Flags** — Text
- **Best Offer Match** — Relation to Offers
- **Priority** — Select
- **Notes** — Text

## Recommended views
- All ICPs
- High Priority
- By Industry
- By Offer Match

---

# 3. Offers Database

## Purpose
Defines the services your agency sells.

## Suggested database name
`Offers`

## Properties
- **Offer Name** — Title
- **Category** — Select
- **Who It’s For** — Text
- **Problem Solved** — Text
- **Inputs Required** — Text
- **Outputs Delivered** — Text
- **Duration** — Text
- **Price Range** — Text
- **Exclusions** — Text
- **Upsell Path** — Text
- **Delivery Complexity** — Select
- **Status** — Select

## Recommended categories
- Diagnostic
- Systems / Operations
- Transformation
- Advisory
- Retainer

## Recommended views
- Active Offers
- By Category
- High Complexity
- Archived

---

# 4. Specs Database

## Purpose
This is the most important database in the system.  
Each record defines one workflow that can later be supported by AI.

## Suggested database name
`Specs`

## Properties
- **Spec Name** — Title
- **Workflow Area** — Select
- **Trigger** — Text
- **Inputs** — Text
- **Preconditions** — Text
- **Steps** — Text
- **Output Format** — Text
- **Failure States** — Text
- **Approval Required** — Checkbox or Select
- **Linked Template** — Relation to Templates
- **Linked Test Suite** — Relation to Test Cases
- **Owner** — Person or Text
- **Version** — Text
- **Status** — Select

## Recommended workflow areas
- Marketing
- Intake
- Proposal
- Delivery
- QA
- Operations

## Recommended views
- All Specs
- Approved
- Needs Tests
- Needs Revision
- By Workflow Area

## First specs to create
1. Inbound Lead Qualification
2. Discovery Call Summary
3. Proposal Assembly
4. Project Kickoff Brief
5. Deliverable QA Review

---

# 5. Test Cases Database

## Purpose
Stores manual and future automated tests for each workflow spec.

## Suggested database name
`Test Cases`

## Properties
- **Test Name** — Title
- **Spec** — Relation to Specs
- **Scenario Type** — Select
- **Input Summary** — Text
- **Expected Output** — Text
- **Expected Confidence** — Number or Text
- **Actual Result** — Text
- **Pass/Fail** — Select
- **Failure Type** — Select
- **Notes** — Text
- **Retest Needed** — Checkbox

## Recommended scenario types
- Happy Path
- Missing Info
- Contradictory Info
- Bad Fit Lead
- Edge Case
- Failure Injection
- Formatting Challenge

## Recommended failure types
- Context Gap
- Spec Gap
- Prompt Gap
- Model Reasoning Issue
- Human Review Gap
- Data Structure Issue
- Template Issue

## Recommended views
- Failed Tests
- Needs Retest
- By Spec
- Happy Path
- Edge Cases

---

# 6. Templates Database

## Purpose
Stores reusable structures used by workflows and deliverables.

## Suggested database name
`Templates`

## Properties
- **Template Name** — Title
- **Used For** — Select
- **Input Requirements** — Text
- **Output Structure** — Text
- **Tone Rules** — Text
- **Linked Offer** — Relation to Offers
- **Linked Spec** — Relation to Specs
- **Gold Standard Example** — URL or Text
- **Status** — Select

## Example template types
- Content Brief
- Discovery Summary
- Proposal
- Kickoff Brief
- QA Review
- Report Outline

## Recommended views
- Active Templates
- By Workflow
- Missing Example
- Archived

---

# 7. Leads Database

## Purpose
Tracks inbound interest before a real opportunity is created.

## Suggested database name
`Leads`

## Properties
- **Lead Name** — Title
- **Company** — Text
- **Source** — Select
- **Contact** — Text
- **Problem Mentioned** — Text
- **Industry** — Select
- **Budget Signal** — Text
- **Urgency** — Select
- **Strategic Fit** — Number or Select
- **Budget Fit** — Number or Select
- **Delivery Fit** — Number or Select
- **Overall Fit** — Number or Formula
- **Confidence** — Number or Select
- **Red Flags** — Text
- **Recommended Next Step** — Select
- **Linked Opportunity** — Relation to Opportunities
- **Status** — Select

## Recommended statuses
- New Lead
- Needs Enrichment
- Qualified
- Nurture
- Rejected
- Discovery Scheduled

## Recommended next steps
- Reject
- Nurture
- Schedule Discovery
- Manual Review

## Recommended views
- New Leads
- Qualified Leads
- Needs Review
- By Source
- Rejected

---

# 8. Opportunities Database

## Purpose
Tracks qualified selling activity between lead and signed project.

## Suggested database name
`Opportunities`

## Properties
- **Opportunity Name** — Title
- **Linked Lead** — Relation to Leads
- **Offer Match** — Relation to Offers
- **Discovery Status** — Select
- **Pain Summary** — Text
- **Desired Outcomes** — Text
- **Stakeholders** — Text
- **Timeline** — Text
- **Risks** — Text
- **Proposal Status** — Select
- **Estimated Value** — Number or Text
- **Probability** — Number
- **Owner** — Person or Text
- **Status** — Select

## Recommended statuses
- Qualified
- Discovery Scheduled
- Discovery Complete
- Scoping
- Proposal Drafted
- Proposal Sent
- Negotiation
- Won
- Lost
- Nurture

## Recommended views
- Discovery Queue
- Proposal Queue
- Open Opportunities
- Won
- Lost

---

# 9. Projects Database

## Purpose
Tracks client work after an opportunity is won.

## Suggested database name
`Projects`

## Properties
- **Project Name** — Title
- **Client** — Text
- **Linked Opportunity** — Relation to Opportunities
- **Offer Sold** — Relation to Offers
- **Goal** — Text
- **Success Metrics** — Text
- **Scope Summary** — Text
- **Exclusions** — Text
- **Dependencies** — Text
- **Risks** — Text
- **Context Ready** — Checkbox
- **QA Status** — Select
- **Stage** — Select
- **Owner** — Person or Text

## Recommended stages
- Awaiting Kickoff
- Context Ready
- Research
- Synthesis
- Strategy / Design
- Internal QA
- Client Review
- Revision
- Delivered
- Closed

## Recommended views
- Active Projects
- Awaiting QA
- Client Review
- Delivered
- By Owner

---

# 10. Deliverables Database

## Purpose
Tracks outputs inside each project.

## Suggested database name
`Deliverables`

## Properties
- **Deliverable Name** — Title
- **Project** — Relation to Projects
- **Deliverable Type** — Select
- **Acceptance Criteria** — Text
- **Version** — Text
- **Stage** — Select
- **Owner** — Person or Text
- **Reviewer** — Person or Text
- **QA Score** — Number
- **Revision Count** — Number
- **Client Status** — Select
- **Final Approved** — Checkbox

## Example deliverable types
- Audit Report
- Discovery Summary
- Workflow Map
- Proposal
- Kickoff Brief
- Strategy Deck
- Recommendation Summary

## Recommended views
- In QA
- Needs Revision
- Client Review
- Final Approved

---

# 11. Issues / Quality Database

## Purpose
Captures failures, quality issues, and improvement opportunities.

## Suggested database name
`Issues / Quality`

## Properties
- **Issue Name** — Title
- **Source Workflow** — Select
- **Issue Type** — Select
- **Expected Result** — Text
- **Actual Result** — Text
- **Root Cause** — Select
- **Severity** — Select
- **Fix Owner** — Person or Text
- **Linked Spec** — Relation to Specs
- **Linked Test Case** — Relation to Test Cases
- **Re-Test Date** — Date
- **Status** — Select

## Recommended issue types
- Hallucination
- Missing Context
- Wrong Recommendation
- Formatting Failure
- QA Failure
- Spec Failure
- False Confidence

## Recommended root causes
- Context Gap
- Spec Gap
- Prompt Gap
- Model Limitation
- Human Review Gap
- Data Design Issue
- Template Weakness

## Recommended statuses
- New Issue
- Reproduced
- Root Cause Found
- Fix In Progress
- Re-Tested
- Closed

## Recommended views
- Open Issues
- High Severity
- By Root Cause
- Awaiting Re-Test
- Closed

---

# Recommended Relations

Set up these relationships in Notion:

- **ICPs → Offers**
- **Offers → Templates**
- **Templates → Specs**
- **Specs → Test Cases**
- **Leads → Opportunities**
- **Opportunities → Projects**
- **Projects → Deliverables**
- **Specs → Issues / Quality**
- **Test Cases → Issues / Quality**
- **Agency Docs → Specs**

This creates a usable context chain across the business.

---

# Recommended Setup Order

Build the databases in this order:

1. Agency Docs
2. ICPs
3. Offers
4. Specs
5. Test Cases
6. Templates
7. Leads
8. Opportunities
9. Projects
10. Deliverables
11. Issues / Quality

After the databases exist, add:
- select options
- filtered views
- relations
- templates
- a few sample records

---

# Minimum Viable System

If you want the fastest possible start, build these first:

1. Specs
2. Test Cases
3. Leads
4. Opportunities
5. Projects
6. Deliverables

That gives you the minimum operating spine for intake and delivery.

---

# Suggested Next Step

After building these databases, your next best move is to create:
- one Agency Constitution page
- one first offer
- one first ICP
- five workflow specs
- ten test cases

Do not buy more tools until the board works manually.
