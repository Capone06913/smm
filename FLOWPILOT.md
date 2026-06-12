# FlowPilot — навигация по проекту

Короткая карта: с чего начать и куда идти дальше.

## 1. С чего начать

1. Прочитайте канон бренда: [`docs/brand/brand-core.md`](./docs/brand/brand-core.md) и модули в [`docs/brand/`](./docs/brand/)
2. Откройте бриф и решения: [`docs/site/content-brief.md`](./docs/site/content-brief.md)
3. Проверьте чеклист: [`docs/compliance/checklist.md`](./docs/compliance/checklist.md)

## 2. Бренд

| Файл | Зачем |
|---|---|
| [`docs/brand/brand-core.md`](./docs/brand/brand-core.md) | Позиционирование, аудитория, модель команды |
| [`docs/brand/tone-of-voice.md`](./docs/brand/tone-of-voice.md) | Тон, запреты, примеры текстов |
| [`docs/brand/copy-rules.md`](./docs/brand/copy-rules.md) | Правила копирайта и SEO-текста |
| [`docs/brand/offers-pricing.md`](./docs/brand/offers-pricing.md) | Офферы, цены, сравнение форматов |
| [`docs/brand/design-direction.md`](./docs/brand/design-direction.md) | Визуал 2026–2027, палитра, шрифты |

## 3. Сайт

| Файл | Зачем |
|---|---|
| [`docs/site/sitemap.md`](./docs/site/sitemap.md) | Карта страниц |
| [`docs/site/page-structure.md`](./docs/site/page-structure.md) | Блоки главной |
| [`docs/site/hooks.md`](./docs/site/hooks.md) | Заголовки и CTA |
| [`docs/site/questions.md`](./docs/site/questions.md) | Ответы и открытые вопросы |

## 4. SEO и GEO

| Файл | Зачем |
|---|---|
| [`docs/seo/wordstat-plan.md`](./docs/seo/wordstat-plan.md) | План сбора семантики |
| [`docs/mcp-kv-wordstat-setup.md`](./docs/mcp-kv-wordstat-setup.md) | Подключение Wordstat через MCP-KV |
| [`docs/seo/semantic-core-template.md`](./docs/seo/semantic-core-template.md) | Шаблон ядра |
| [`docs/seo/geo-rules.md`](./docs/seo/geo-rules.md) | GEO для AI-поиска |

## 5. Юридическое и заявки

| Файл | Зачем |
|---|---|
| [`docs/compliance/legal/README.md`](./docs/compliance/legal/README.md) | Пакет документов для сайта |
| [`docs/automation/site-automation-plan.md`](./docs/automation/site-automation-plan.md) | Формы: MVP (Telegram) и Phase 2 (CRM) |

## 6. Cursor и этапы

| Этап | Промпт |
|---|---|
| Подготовка | [`docs/cursor/prompts/stage-01-prep.md`](./docs/cursor/prompts/stage-01-prep.md) |
| SEO после Wordstat | [`docs/cursor/prompts/stage-02-seo-geo.md`](./docs/cursor/prompts/stage-02-seo-geo.md) |
| Дизайн (Gemini 3.1 Pro) | [`docs/cursor/prompts/stage-03-design-concepts.md`](./docs/cursor/prompts/stage-03-design-concepts.md) |
| Сборка сайта | [`docs/cursor/prompts/stage-04-build-site.md`](./docs/cursor/prompts/stage-04-build-site.md) |

Память агента: [`docs/cursor/memory.md`](./docs/cursor/memory.md)

## 7. Референсы

Папка [`ref/`](./ref/) — визуальные референсы. Анализ: [`docs/design/ref-analysis.md`](./docs/design/ref-analysis.md).

## 8. Семантика (готово)

Прогон Wordstat 2026-05-24:

- [`research/semantic-core-runs/flowpilot-2026-05-24/`](./research/semantic-core-runs/flowpilot-2026-05-24/)
- [`docs/seo/flowpilot-seo-map.md`](./docs/seo/flowpilot-seo-map.md) — H1, title, description, FAQ, блог-темы

## 9. Что дальше (порядок)

1. ~~Собрать семантическое ядро~~ — сделано; опционально доп. seeds (MAX, Pinterest, OK) и SERP-check.
2. Утвердить тексты страниц по SEO-карте (этап 2).
3. Три дизайн-концепции на Gemini 3.1 Pro (этап 3).
4. ~~Синхронизировать юридические тексты~~ — HTML в `legal/` актуален; markdown в `docs/compliance/legal/` синхронизирован 24.05.2026.
5. Разработка сайта WordPress (этап 4).

---

*Memory Bank и команды Cursor: см. [`README.md`](./README.md). Карта репозитория: [`docs/repository-map.md`](./docs/repository-map.md).*
