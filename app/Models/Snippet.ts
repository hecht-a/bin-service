import { DateTime } from "luxon";
import { BaseModel, beforeCreate, column } from "@ioc:Adonis/Lucid/Orm";

export default class Snippet extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public code: string;

  @column()
  public snippetId: string;

  @column()
  public lang: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeCreate()
  public static generateSnippetId(snippet: Snippet) {
    snippet.snippetId = UUID({});
  }
}

function UUID({ length = 6, uppercase = true }): string {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  return Array.from({ length })
    .map(() =>
      uppercase
        ? alpha[Math.floor(Math.random() * 26)].toUpperCase()
        : alpha[Math.floor(Math.random() * 26)]
    )
    .join("");
}
