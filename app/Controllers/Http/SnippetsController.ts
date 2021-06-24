import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { extToLang } from "../../../resources/utils";
import SnippetValidator from "App/Validators/SnippetValidator";
import Snippet from "App/Models/Snippet";
import View from "@ioc:Adonis/Core/View";

export default class SnippetsController {
  public async create({ view }: HttpContextContract) {
    View.global("page", "create");
    return view.render("snippets/create", { langs: extToLang });
  }

  public async store({ request, response }: HttpContextContract) {
    View.global("page", "store");
    View.global("error", "");
    if (
      request.headers()["content-length"] !== undefined &&
      // @ts-ignore
      !(request.headers()["content-length"] <= 65000)
    ) {
      View.global("error", "Snippet is too large.");
      return response.redirect().toRoute("snippet.create");
    }
    const payload = await request.validate(SnippetValidator);
    const snippet = await Snippet.create(payload);
    return response
      .redirect()
      .toRoute("snippet.show", { id: `${snippet.snippetId}.${payload.lang}` });
  }

  public async show({ view, response, params }: HttpContextContract) {
    View.global("page", "show");
    View.global("error", "");
    const [snippetId, ext] = params.id.split(".");
    const code = await Snippet.findBy("snippet_id", snippetId);
    if (!code) {
      View.global("error", "This snippet doesn't exist.");
      return response.redirect().toRoute("snippet.create");
    }
    const length = code!.code
      .split("\n")
      .filter((val) => val !== "")
      .map((_, i) => i + 1);
    length.push(length[length.length - 1] + 1);

    return view.render("snippets/show", { code, length, lang: extToLang[ext] });
  }
}
