# Pocket Pulse — Agent Instructions

## Project
Pocket Pulse is a production-grade personal expense tracker. Core principle:
recording an expense should take under 2 seconds via "Quick Expense" buttons.
Built for 4-5 users but with production-quality engineering.

## Stack (confirmed)
- Frontend: React + TypeScript + Vite
- Backend: Node.js + TypeScript + Express
- Database: PostgreSQL + Prisma ORM
- Deployment (later): Vercel (frontend) + Render (backend) + managed Postgres

## Tooling (confirmed, all free tiers)
- Version control: GitHub (remote repo, push after each reviewed local commit)
- CI: GitHub Actions (lint/typecheck/test on push) — set up once basics exist,
  not before Phase 1 foundation is working
- Project tracking: Jira free tier — one board mirroring the 12 dev phases
- E2E testing: Playwright — cover the core flows (register, login, create
  quick expense, record expense, view dashboard, edit, delete, logout)
- Keep all tooling setup itself minimal and explained simply — no deep CI/CD
  pipelines or Jira automation rules unless asked

## Architecture decisions already approved — do not re-litigate these
1. Auth: httpOnly secure cookie sessions (NOT JWT in localStorage).
2. Money: stored as integer minor units (paise), never floats.
3. Offline strategy for v1: PWA shell + optimistic UI only. NO true offline
   write queue/sync engine in v1 — do not build one unless explicitly asked.
4. DB entities for v1 ONLY: User, Session, Category, QuickExpense, Expense.
   Do NOT create AuditLog, WebhookEvent, or a separate PaymentMethod table
   (payment method is a simple enum column on Expense) unless asked.
5. Idempotency: client generates a UUID idempotency key per logical
   expense-creation attempt; backend enforces a unique constraint on
   (user_id, idempotency_key).
6. No microservices, no Kubernetes, no Kafka, no Redis, no GraphQL for this
   project. Modular monolith only.

## How to work with me
- I am a beginner-to-intermediate developer. Explain important concepts
  (middleware, migrations, indexes, transactions, idempotency, CORS, etc.)
  in simple language whenever they come up — briefly, not a lecture.
- Work in small, reviewable phases. Never generate the whole app at once.
- Before any architectural or database change: explain the plan, list files
  that will change, list DB/API changes, list risks, and WAIT for my
  approval before writing code.
- Small, obviously-safe changes (e.g. fixing a typo, adding a test) can
  proceed without asking.
- After implementing anything: explain what changed and why, run
  tests/lint/typecheck, and report any remaining problems honestly. Never
  claim something works without actually verifying it.
- Do not silently modify unrelated files.
- Do not rewrite working code unless necessary.
- Do not install packages without explaining why they're needed.
- Do not use deprecated packages or insecure shortcuts.
- Make small, meaningful git commits (e.g. "feat: add expense creation
  endpoint"), not one giant commit.
- Never commit secrets. Use .env + .env.example.

## Current phase
Phase 1 — Project Foundation ONLY (repo structure, frontend/backend
scaffolding, DB connection, env config, linting/formatting). Do not start
authentication, expenses, or any feature work until I say so.
