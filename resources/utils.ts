const obj = {
  c: "c",
  cpp: "cpp",
  cs: "csharp",
  css: "css",
  diff: "diff",
  erl: "erlang",
  ex: "elixir",
  go: "go",
  h: "objectivec",
  hs: "haskell",
  html: "html",
  ini: "ini",
  java: "java",
  js: "javascript",
  json: "json",
  kt: "kotlin",
  less: "less",
  lisp: "lisp",
  lua: "lua",
  md: "markdown",
  php: "php",
  pl: "perl",
  py: "python",
  rb: "ruby",
  rs: "rust",
  sass: "sass",
  scala: "scala",
  scss: "scss",
  sh: "bash",
  sql: "sql",
  swift: "swift",
  toml: "toml",
  ts: "typescript",
  txt: "text",
  xml: "xml",
  yml: "yaml",
};

export const langToExt = Object.keys(obj)
  .sort()
  .map((val) => ({ [obj[val]]: val }))
  .reduce((acc, cur) => Object.assign(acc, cur), {});

export const extToLang = Object.keys(langToExt)
  .map((val) => ({ [langToExt[val]]: val }))
  .reduce((acc, cur) => Object.assign(acc, cur), {});

export function UUID({ length = 6, uppercase = true }): string {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  return Array.from({ length })
    .map(() =>
      uppercase
        ? alpha[Math.floor(Math.random() * 26)].toUpperCase()
        : alpha[Math.floor(Math.random() * 26)]
    )
    .join("");
}
