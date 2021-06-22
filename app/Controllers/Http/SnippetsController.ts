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
    const payload = await request.validate(SnippetValidator);
    const snippet = await Snippet.create(payload);
    return response
      .redirect()
      .toRoute("snippet.show", { id: `${snippet.snippetId}.${payload.lang}` });
  }

  public async show({ view, params }: HttpContextContract) {
    View.global("page", "show");
    const [snippetId, ext] = params.id.split(".");
    const code = await Snippet.findBy("snippet_id", snippetId);
    const length = code!.code
      .split("\n")
      .filter((val) => val !== "")
      .map((_, i) => i + 1);
    length.push(length[length.length - 1] + 1);

    return view.render("snippets/show", { code, length, lang: extToLang[ext] });
  }
}
