# Architecture Decision: Next.js vs Astro

## Decision
Keep **Next.js 14** as the production framework for now.

## Why not migrate to Astro immediately?
- The current app already uses App Router conventions and route-level metadata patterns that are working in production.
- A full migration now would increase launch risk and delay roadmap items (SEO hardening, analytics readiness, data pipeline prep).
- The current priority is shipping reliable growth improvements, not replacing the rendering stack.

## When Astro could be considered
- If the product becomes mostly static editorial pages with minimal React interactivity.
- If build/runtime simplicity materially reduces operational cost.
- If migration can be done incrementally with parallel validation and zero SEO regressions.

## Current plan
1. Keep improving Next.js production quality.
2. Complete technical SEO + analytics readiness.
3. Build data-ingestion architecture for Phase 2.
4. Re-evaluate Astro after measurable stability and traffic goals are met.
