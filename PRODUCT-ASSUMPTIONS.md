# Product Assumptions: Free Tools for CSE Students

**Student:** Hadique Jasar C H, Abhay Narayan \| **Roll number:** 4SF25CS078, 4SF25CS003\| **Course:** CSE\| **Milestone:** 1 \| **Repository:** [https\://github.com/Hakkaifx/cse-free-tools](https://github.com/Hakkaifx/cse-free-tools)

---

## 1\. Product summary

Free Tools for CSE Students is a small web app where engineering students can browse a list of free tools, search them, filter them by category (Coding, Design, Cloud, Learning), open a details page, and save the ones they want to a personal "Saved" list.

All tool entries are **sample data written for this demo**. They are not real offers.

## 2\. Inspiration and our twist

**Inspiration:** Resourify, a product listed on Product Hunt ([https\://www\.producthunt.com/products/resourify](https://www.producthunt.com/products/resourify)). It is a curated collection of freebies and deals for students in general.

**How ours is different, not a copy:**

|  | Resourify | Our project |
| :---- | :---- | :---- |
| Audience | All students | CSE / engineering students only |
| Categories | Broad | Coding, Design, Cloud, Learning |
| Data | Real, maintained collection | Fictional sample data in one file |
| Accounts and backend | Real product | None |
| Our own feature |  | A Saved list with add, remove and clear-all, plus a details page for each tool |

## 3\. Target users

- Primary users: undergraduate students of Computer Science and Engineering.  
- Typical situation: a student who wants to find free tools for assignments and projects and does not want to search many websites.

## 4\. Problem we are addressing

Students often do not know which tools are available to them for free, and the information is spread across many places. This project explores a single, simple page where tools are grouped by category, searchable, and can be saved for later.

## 5\. Assumptions

**About users**

- Users are comfortable using a basic web page with a search box and buttons.  
- Users mainly want to find a tool quickly, so search and category filters are the most important features.  
- Users do not need an account for a first version.

**About the data**

- Ten sample tools are enough to demonstrate searching, filtering and saving.  
- Every tool has a name, category, short description and a "how to claim" line.  
- The data is fictional and would need to be replaced with verified information before any real use.

**About the technology**

- The app runs fully in the browser with no backend, database or login.  
- The Saved list is kept only in React state, so it resets when the page is refreshed.  
- The project uses Next.js (JavaScript, App Router), Tailwind CSS, React Context and dummy data, as required by the Milestone-1 rules.

## 6\. Scope

**In scope (Milestone 1\)**

- Browse all tools in a card grid.  
- Search by name or description.  
- Filter by category.  
- Save a tool, remove it, and clear all saved tools.  
- Saved count shown in the navigation bar.  
- A details page for each tool, with a message for unknown tools.

**Out of scope**

- User accounts and login.  
- Backend, database or real-time data.  
- Users submitting or voting on tools.  
- Payments, maps, AI features or notifications.  
- Keeping the Saved list after a page refresh.

## 7\. Pages and components

**Pages (3)**

1. Browse (`/`)  
2. Saved (`/saved`)  
3. Tool details (`/deals/[id]`)

**Components (8)** Navbar, PageHeader, SearchBar, CategoryFilter, DealCard, DealGrid, EmptyState, and DealsProvider (the React Context provider).

## 8\. How the state works

A single React Context (`DealsContext`) holds the search text, the selected category and the list of saved tool ids. The list shown on screen is calculated from the sample data and these values, so the screen updates whenever the user searches, filters, saves or removes a tool. Only ids are stored for saved tools, which keeps the state small.

## 9\. Risks and limitations

- The Saved list is lost on refresh because nothing is stored permanently.  
- The tool data is fictional and not verified.  
- With only ten items, the app does not show how it would perform with large lists.  
- There is no automated testing in Milestone 1\. The app was checked manually (search, filter, save, remove, details page).

## 10\. Possible future work

- Keep the Saved list using browser storage.  
- Add more categories and more verified entries.  
- Add sorting and a "recently added" view.  
- Move the data to a real backend and add accounts in a later milestone.

## 11\. Milestone-1 success criteria

- The app runs locally with `npm run dev` without errors.  
- Search, category filter, save, remove and clear-all all update the screen immediately.  
- The project follows the rules: Next.js (JavaScript, App Router, Tailwind CSS), React Context, dummy data, 3 pages and 8 components.  
- The code is pushed to the GitHub repository.