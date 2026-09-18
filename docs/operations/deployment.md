# استقرار

انتشار سایت با GitHub Actions انجام می‌شود. فایل workflow در مسیر زیر است:

```text
.github/workflows/pages.yml
```

## فعال‌سازی GitHub Pages

در ریپو این مسیر را باز کنید:

```text
Settings → Pages
```

در بخش **Build and deployment** مقدار **Source** را روی `GitHub Actions` بگذارید.

پس از موفقیت workflow، آدرس سایت معمولاً به این شکل است:

```text
https://<owner>.github.io/doctest/
```

## بیلد

workflow روی push به `main` این کارها را می‌کند:

1. Python 3.12 را آماده می‌کند.
2. وابستگی‌های `requirements.txt` را نصب می‌کند.
3. با `mkdocs build --strict` سایت را می‌سازد.
4. پوشه `site/` را به GitHub Pages می‌فرستد.
