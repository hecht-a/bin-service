import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Snippets extends BaseSchema {
  protected tableName = "snippets";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.text("code");
      table.string("snippet_id", 6).unique();
      table.string("lang");
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
