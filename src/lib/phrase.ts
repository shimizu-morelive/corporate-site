import { loadDefaultJapaneseParser } from "budoux";

const parser = loadDefaultJapaneseParser();

function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

// Japanese line breaking that also works on iPhone, where `word-break:
// auto-phrase` is unsupported: BudouX inserts <wbr> between phrases at build
// time and the `.phrase` class (keep-all) only breaks there. "\n" in content is
// an explicit line break; words listed in `emphasis` are wrapped in <em>.
export function phrase(text: string, emphasis: string[] = []): string {
  return text
    .split("\n")
    .map((line) => {
      const parts = emphasis.length
        ? line.split(new RegExp(`(${emphasis.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`))
        : [line];
      return parts
        .map((part) => {
          // A phrase stays on one line, so a space inside one ("TikTok Shopを") must not break either.
          const html = parser
            .parse(part)
            .map((p) => escapeHtml(p).replaceAll(" ", "&nbsp;"))
            .join("<wbr>");
          return emphasis.includes(part) ? `<em>${html}</em>` : html;
        })
        .join("");
    })
    .join("<br>");
}

// Each "\n" line as its own block, so headings can rise line by line.
export function lines(text: string, emphasis: string[] = []): string {
  return phrase(text, emphasis)
    .split("<br>")
    .map((line, i) => `<span class="rise" style="--i:${i}">${line}</span>`)
    .join("");
}

// Each BudouX phrase as its own span so a statement can fill in reading order;
// --k is the phrase's position from 0 to 1. No emphasis: the split would cut
// through <em>.
export function fill(text: string): string {
  const parts = phrase(text).split("<wbr>");
  return parts.map((html, k) => `<span style="--k:${(k / parts.length).toFixed(3)}">${html}</span>`).join("<wbr>");
}

// "More Live !!!" → ["More Live ", "!!!"], so the exclamation marks can be styled.
export function splitBang(text: string): [string, string] {
  const m = text.match(/^(.*?)(!+)$/);
  return m ? [m[1], m[2]] : [text, ""];
}
