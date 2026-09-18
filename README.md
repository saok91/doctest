# مستندات سازمان

سایت مستندات با [MkDocs](https://www.mkdocs.org/) و قالب [Material](https://squidfunk.github.io/mkdocs-material/) ساخته می‌شود و روی GitHub Pages منتشر می‌گردد.

```text
Markdown → MkDocs + Material → HTML → GitHub Pages
```

منوی سایت از ساختار پوشه‌های `docs/` و فایل‌های `.pages` ساخته می‌شود. نمودارهای Mermaid هم در Markdown پشتیبانی می‌شوند.

## پیش‌نمایش محلی

```bash
python -m pip install -r requirements.txt
mkdocs serve
```

آدرس محلی:

```text
http://127.0.0.1:8000/
```

بیلد سخت‌گیرانه:

```bash
mkdocs build --strict
```

## انتشار روی GitHub Pages

1. ریپو را به GitHub پوش کنید.
2. در `Settings → Pages` منبع را روی **GitHub Actions** بگذارید.
3. workflow فایل `.github/workflows/pages.yml` را روی شاخه `main` اجرا می‌کند.

آدرس نهایی معمولاً این است:

```text
https://<owner>.github.io/<repo>/
```

## افزودن صفحه جدید

فایل Markdown را داخل پوشه مناسب در `docs/` بگذارید. برای عنوان و ترتیب منو، فایل `.pages` همان پوشه را ویرایش کنید.
