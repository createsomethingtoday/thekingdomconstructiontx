export function splitLines(value?: string): string[] {
  return (value ?? "")
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function parseLabelHrefLines(value?: string): Array<{ label: string; href?: string }> {
  return splitLines(value).map((line) => {
    const [labelRaw, hrefRaw] = line.split("|");
    const label = (labelRaw ?? "").trim();
    const href = (hrefRaw ?? "").trim();

    return {
      label,
      href: href.length ? href : undefined,
    };
  });
}

export function parseTitleBodyLines(value?: string): Array<{ title: string; body?: string }> {
  return splitLines(value)
    .map((line) => {
      if (line.includes("::")) {
        const [titleRaw, ...rest] = line.split("::");
        const title = (titleRaw ?? "").trim();
        const body = rest.join("::").trim();
        return { title, body: body.length ? body : undefined };
      }

      if (line.includes(" - ")) {
        const [titleRaw, ...rest] = line.split(" - ");
        const title = (titleRaw ?? "").trim();
        const body = rest.join(" - ").trim();
        return { title, body: body.length ? body : undefined };
      }

      if (line.includes(":")) {
        const [titleRaw, ...rest] = line.split(":");
        const title = (titleRaw ?? "").trim();
        const body = rest.join(":").trim();
        return { title, body: body.length ? body : undefined };
      }

      return { title: line };
    })
    .filter((item) => item.title.length);
}
