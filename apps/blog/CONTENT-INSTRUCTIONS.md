# Content Instructions

Rules for writing blog articles on reader.dev/blog. Reference this file before writing any article.

## Voice and Tone

- Developer tone. Write like you're explaining something to a smart colleague.
- Easy to understand. No jargon without explanation.
- Sound human and natural. Not corporate, not salesy, not academic.
- No fluff. Every sentence should add value. If a paragraph can be cut without losing meaning, cut it.
- Be direct. Lead with the answer, not the buildup.
- Grounded in reality. Always search the web and verify facts, stats, tool features, and API details before writing. Never guess.

## Grammar and Punctuation

- Never use em dashes. Use commas, periods, or semicolons instead.
- Use hyphens only where English grammar requires them (compound adjectives before nouns: "open-source platform", "well-known tool").
- Do not hyphenate compound words that are commonly written as two words. Write "JavaScript rendered" not "JavaScript-rendered", "client side" not "client-side" (unless directly before a noun: "client-side rendering" is fine).
- Use commas and periods properly. Prefer short sentences over long comma-chained ones.
- Use active voice. "Reader converts HTML to markdown" not "HTML is converted to markdown by Reader."
- Keep sentences to 15-20 words on average. Never exceed 25 words in a single sentence.
- Keep paragraphs to 2-4 lines.

## Content Rules

- No pricing comparisons or pricing tables. Do not mention specific dollar amounts for any product.
- Do not emphasize licensing (Apache 2.0, AGPL, MIT). Mention it once if relevant, never make it a selling point.
- Focus on customer value. What does the tool do for the developer? Not what license it uses.
- No competitor bashing. State facts, let the reader decide.
- No superlatives without evidence. "Fastest" needs a benchmark. "Best" needs criteria.
- Show, don't tell. A 4-line code example is worth more than a paragraph of description.
- Always verify external tool features and APIs by checking their current documentation before writing about them. Never claim a competitor lacks a feature without checking their docs, blog, CLI docs, and changelog. Getting this wrong damages credibility and SEO trust.

## Article Outline (Required Before Writing)

Before writing any article, produce an outline that covers:

- **URL slug**: 3-5 words, primary keyword first, lowercase, hyphens
- **Title tag**: Under 60 characters, primary keyword front-loaded
- **H1**: Matches or closely mirrors the title tag
- **Meta description**: 150-160 characters, keyword + benefit + action verb
- **Category**: One of: Comparisons, Guides, Tools, Deep Dives, Use Cases, Ecosystem, Product, Perspectives
- **Author**: Name only, no role or company
- **Primary keyword**: The main search term this article targets
- **Secondary keywords**: 3-5 related terms
- **Content sections**: Full H2/H3 heading structure with estimated word count per section
- **Internal links**: 8-12 links to other reader.dev blog posts or docs, with anchor text and placement
- **External links**: 3-5 dofollow links to authoritative sources (official docs, GitHub repos, specs). Never link to competitor blog posts.
- **FAQ questions**: 3-4 questions matching "People Also Ask" queries, with 40-60 word answers
- **Cluster position**: Which topic cluster this article belongs to (pillar or spoke) and what it links to

## Article Structure

### Frontmatter

```yaml
---
title: "Title here"
description: "150-160 char meta description"
date: YYYY-MM-DD
author: "Author Name"
category: "Category"
keywords: ["primary keyword", "secondary 1", "secondary 2"]
schemaType: "article"  # or "howto" for step-by-step tutorials
faq:
  - question: "Question matching PAA"
    answer: "40-60 word direct answer."
---
```

### Body Structure

| Section | Words | Purpose |
|---------|-------|---------|
| Introduction | 80-120 | Problem, why it matters, what this article covers. Primary keyword in first sentence. |
| H2 sections | 300-500 each | Each opens with a 40-60 word direct answer (snippet-optimized). |
| Reader section | 200-300 | Natural transition from problem to Reader's solution. Working code example. Not a pitch. |
| FAQ | 150-250 | 3-4 PAA-targeted questions. Short direct answers. |
| Conclusion | 80-120 | Recap + single CTA to docs or GitHub. |

**Important:** Do NOT add a `## Frequently Asked Questions` heading in the article body. The FAQ section is auto-rendered from the frontmatter `faq` array by the PostLayout component. Adding the heading manually creates a duplicate.

### Word Count

- Target: 2,000-3,500 words per article.
- Shorter and denser than competitors. No padding.

## Code Examples

- Always include working code that the reader can copy and run.
- Pattern: explanation (1-2 sentences) > code block > output or result (1 sentence).
- Always set the language identifier on code blocks (```python, ```javascript, etc.).
- Keep code blocks under 30 lines. Break longer examples into multiple blocks with narrative between them.
- Show the manual/hard way first, then show Reader solving it in fewer lines.

## SEO Checklist

Apply to every article before publishing:

```
KEYWORDS
[ ] Primary keyword in title (front-loaded, within 60 chars)
[ ] Primary keyword in first 100 words
[ ] Primary keyword in 1-2 H2 headings
[ ] Primary keyword in meta description (within first 120 chars)
[ ] Primary keyword in URL slug
[ ] Primary keyword in 1 image alt text (if images present)
[ ] Keyword density: 1-2% (natural, never forced)

LINKS
[ ] 8-12 internal links with varied anchor text
[ ] First internal link within first 200 words
[ ] 3-5 external dofollow links to authoritative sources
[ ] No outbound links to competitor blog content (only their official docs in comparison articles)

CONTENT
[ ] Each H2 opens with 40-60 word direct answer
[ ] Code blocks have language identifier, explanation before and after
[ ] Comparison table with semantic HTML if applicable
[ ] FAQ section with 3-4 questions
[ ] 1 soft CTA mid-article + 1 clear CTA at end (never more than 2)
[ ] Sentences: 15-20 words average
[ ] Paragraphs: 2-4 lines max
[ ] No em dashes anywhere
[ ] No pricing information
[ ] No licensing emphasis

METADATA
[ ] schemaType set (article or howto)
[ ] faq array populated
[ ] category set
[ ] keywords array set (4-6 terms)
[ ] Year in title for tools/guides/comparisons (not for evergreen pieces)
```

## CTA Rules

Reader uses exactly 2 CTAs per article, never more:

1. **Mid-article (soft)**: After showing the hard way, one sentence like "Reader handles this in one API call" followed by a working code block. Let the code speak.
2. **End of article (clear)**: Clean link to docs or GitHub. No manipulative language like "tired of getting blocked?" or "stop wasting time."

## Categories

| Category | What Goes Here |
|----------|----------------|
| Comparisons | Reader vs X, X vs Y |
| Guides | Tutorials, language guides, site-specific scraping |
| Tools | Best X lists, library/API evaluations |
| Deep Dives | Anti-bot, TLS, proxies, architecture |
| Use Cases | Lead gen, price monitoring, RAG, competitive intel |
| Ecosystem | LangChain, CrewAI, LlamaIndex, Claude Code, MCP |
| Product | Launches, Supermarkdown, self-hosting, founder stories |
| Perspectives | Future of scraping, AI agents, markdown for LLMs |
