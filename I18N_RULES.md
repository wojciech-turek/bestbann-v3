# i18n Rules (next-intl)

This project uses `next-intl`.

Rules for UI copy:
- All user-facing text must come from translation files (`app/messages/en.json`, `app/messages/de.json`).
- In components/pages, use `useTranslations(...)` and `t("...")` (or `t.rich(...)` where needed).
- Do not hardcode visible UI strings directly in JSX.
