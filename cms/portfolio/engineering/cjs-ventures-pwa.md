---
title: CJ's Ventures Progressive Web App
datePublished: "2025-11-03"
section: portfolio
category: engineering
excerpt: A waste management company was spending tens of thousands yearly on software that didn't satisfy. Here's what we built instead.
coverImage: "/portfolio/engineering/cjs-ventures-pwa/cjs-ventures-pwa-cover.png"
worksTeamSize: 2
worksRoles: ["Fullstack Engineer", "Scrum Master"]
worksDuration: ["08.24", "Present"]
worksTools:
  [
    "NextJS",
    "React",
    "Typescript",
    "Tailwind CSS",
    "Radix UI",
    "Jest",
    "Husky",
    "Supabase",
    "SQL",
    "Zapier",
    "QuickBooks",
    "Eraser",
  ]
---

[CJ’s Ventures](https://www.cjsventures.com/) is a minority-owned waste management, demolition and asset based 3PL services company. In 2024, They reached out to the agency I work with, Community Engagement Associates (CEA), to <mark>develop a greenfield application that would reduce their overhead</mark> and provide an intuitive yet scalable system for their waste management service. I <mark>served as a fullstack engineer and scrum master for this project</mark> alongside CEA’s frontend engineer and UX designer Joseph. My role was to plan the app's development, establish business logic across the stack, and implement core features that streamlined their operations from task management to in-app customer invoicing.

<br/>
<br/>

<Slideshow hideThumbnails aspectRatio="34 / 20" navArrowColor="#000000" slides='[
  { "src": "/portfolio/engineering/cjs-ventures-pwa/cjv-app_tasks.png", "alt": "Screenshot of CJ&apos;s Ventures App" },
  { "src": "/portfolio/engineering/cjs-ventures-pwa/cjv-app_tasks-details.png", "alt": "Screenshot of CJ&apos;s Ventures App" },
  { "src": "/portfolio/engineering/cjs-ventures-pwa/cjv-app_calendar.png", "alt": "Screenshot of CJ&apos;s Ventures App" },
  { "src": "/portfolio/engineering/cjs-ventures-pwa/cjv-app_invoices.png", "alt": "Screenshot of CJ&apos;s Ventures App" }
]' />

<br/>
<br/>

## Problem Statement & Planning

CJ’s Ventures Waste Management service consists of a team of 3 dispatchers and 7 truck drivers. They receive 35 phone calls a day on average and own 450 containers. Each driver would have multiple routes, with an average of 5 routes a day, with actions including dropping off, picking up, and swapping out receptacles.

At the time, CJ’s Ventures used AMCS’ application for their waste management operations. However, <mark>AMCS did not meet their needs</mark> for the following reasons:

**• Operational Costs:** AMCS charged $25,000 a year to use their application, as well as additional costs for extra maintenance services which amounted to $3,000 annually.
<br/>
**• Scalability Concerns**: There was a concern that the application would not scale, both in terms of technical capabilities and growing costs from increased usage.
<br/>
**• Unnecessary Features:** The AMCS application came with a host of features, many of which weren’t unnecessary for CJ’s Ventures.
<br/>
**• Complex UI:** The application was not user friendly and was over-engineered.
<br/>
**• Lack of Accessibility:** The reliability of the application across devices proved to be a challenge.

After learning about the AMCS application and our client’s needs, <mark>I created a technical specification</mark> outlining the core features to be implemented, primary user flows, security measures, testing and logging procedures, software architecture, milestones, and more.

The chosen tech stack <mark>reduced yearly application expenses for CJ’s Ventures by nearly 99%.</mark>

## Key Deliverables

### Database Schematics and Configurations

Given that the application’s primary purpose is task management and involves pre-defined data models (e.g. tasks, vehicles, drivers and addresses) with structured relationships, I <mark>decided to use a SQL database</mark>. The database schema was designed in [Eraser.io](http://Eraser.io) and then implemented in [Supabase](https://supabase.com/) after review. I then implemented RLS policies, seeded the database with test data, and created SQL queries to validate the retrieval of relational data.

### CRUD Operations

With [Next.js](https://nextjs.org/) as our framework for the frontend, I created API routes for handling CRUD operations, using Supabase’s server side client for server-side authentications and database queries. CREATE, UPDATE, DELETE operations involved <mark>the use of recursive functions to account for nested data and junction tables</mark>, such as updating a task with associated start and end addresses, containers, drivers, vehicles, and customers.

### Quickbooks Integration

A key requirement was QuickBooks integration, including the ability to create and send invoices directly through the the app. Given the company’s budget for monthly operational costs for the application and timeline, I decided to utilize [Zapier](https://zapier.com/), a no-code platform that connects apps and services together through automated workflows. <mark>The platform was used to expedite and simplify the process of integrating QuickBooks into the app</mark>, including creating and updating Quickbooks customers and invoices. I developed and tested the automated workflows in the QuickBooks sandbox before integrating with the company's production account. Callback endpoints were also implemented using <mark>Next.js API routes to sync Supabase data with QuickBooks changes triggered by Zapier workflows</mark>.

## Next Steps

The MVP for the app is now being actively used in production, and there are opportunities to enhance it even further. A few of the upcoming features include photo capture for drivers to document completed tasks, invoice payment processing by management on behalf of clients, and real-time GPS tracking for active containers.
