# نصب و پیش‌نمایش محلی

برای دیدن سایت قبل از push، روی سیستم خودتان این دستورها را اجرا کنید:

```bash
python -m pip install -r requirements.txt
mkdocs serve
```

سپس این آدرس را باز کنید:

```text
http://127.0.0.1:8000/
```

برای بیلد نهایی بدون سرور محلی:

```bash
mkdocs build --strict
```

خروجی HTML داخل پوشه `site/` ساخته می‌شود. این پوشه را commit نکنید.
