/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Repl from "@ioc:Adonis/Addons/Repl";

Repl.addMethod(
  "sayHi",
  (repl, name) => {
    console.log(repl.colors.green(`hi ${name || "inconnu"}`));
  },
  { description: 'A test method that prints "hi"' }
);
