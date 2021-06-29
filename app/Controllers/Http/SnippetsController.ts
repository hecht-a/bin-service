import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import SnippetValidator from "App/Validators/SnippetValidator";
import Snippet from "App/Models/Snippet";

export default class SnippetsController {
  public async store({ request }: HttpContextContract) {
    const payload = await request.validate(SnippetValidator);
    const snippet = await Snippet.create(payload);
    return { id: `${snippet.snippetId}.${payload.lang}` };
  }

  public async show({ params }: HttpContextContract) {
    const [snippetId, ext] = params.id.split(".");
    const code = await Snippet.findBy("snippet_id", snippetId);
    if (!code) {
      return { error: "This snippet doesn't exist." };
    }

    return { code, length: code.code.split("\n").length, lang: extToLang[ext] };
  }
}

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

const langToExt = Object.keys(obj)
  .sort()
  .map((val) => ({ [obj[val]]: val }))
  .reduce((acc, cur) => Object.assign(acc, cur), {});

const extToLang = Object.keys(langToExt)
  .map((val) => ({ [langToExt[val]]: val }))
  .reduce((acc, cur) => Object.assign(acc, cur), {});
