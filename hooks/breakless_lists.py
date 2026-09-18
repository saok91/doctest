"""Allow Markdown lists to start immediately after a paragraph.

Python-Markdown treats `* item` after a sentence (no blank line) as
paragraph text. This hook inserts the missing blank line, except inside
fenced code blocks.
"""

from __future__ import annotations

import re

LIST_LINE = re.compile(r"^[ \t]*(?:[*+-]|\d{1,9}[.)])(?:[ \t]|$)")
FENCE_LINE = re.compile(r"^[ \t]*(`{3,}|~{3,})")


def separate_interrupting_lists(markdown: str) -> str:
    lines = markdown.split("\n")
    out: list[str] = []
    in_fence = False
    fence_mark = ""

    for line in lines:
        stripped = line.lstrip()
        fence = FENCE_LINE.match(line)
        if fence:
            mark = fence.group(1)[0]
            if not in_fence:
                in_fence = True
                fence_mark = mark
            elif mark == fence_mark:
                in_fence = False
                fence_mark = ""
            out.append(line)
            continue

        if (
            not in_fence
            and out
            and out[-1].strip() != ""
            and LIST_LINE.match(line)
            and not LIST_LINE.match(out[-1])
        ):
            out.append("")
        out.append(line)

    return "\n".join(out)


def on_page_markdown(markdown, page, config, files):
    return separate_interrupting_lists(markdown)
