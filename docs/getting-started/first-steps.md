# اولین صفحه

برای افزودن یک مستند جدید، فایل Markdown را در پوشه مناسب بگذارید. مثلاً:

```text
docs/security/access-control.md
```

محتوای نمونه:

```markdown
# کنترل دسترسی

توضیحات مربوط به کنترل دسترسی کاربران در این صفحه قرار می‌گیرد.
```

سپس:

```bash
git add docs/security/access-control.md
git commit -m "Add access control documentation"
git push
```

اگر ترتیب نمایش در منو مهم است، فایل `.pages` همان پوشه را هم به‌روز کنید.
