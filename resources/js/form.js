const form = document.forms[0];
const code = form.code;
const lang = form.lang;
const langs = [...lang.options]
  .slice(1)
  .flatMap((option) => [option.value, option.textContent.toLowerCase()]);

const langAliases = {
  txt: langs.indexOf("txt"),
  svg: langs.indexOf("xml"),
  jsonc: langs.indexOf("js"),
  get jsx() {
    return this.jsonc;
  },
  tsx: langs.indexOf("ts"),
  vue: langs.indexOf("html"),
};

code.addEventListener("invalid", (event) => event.preventDefault());
code.addEventListener("keydown", (event) => {
  if (event.code === "Tab") {
    event.preventDefault();
    const { value, selectionStart, selectionEnd } = code;

    code.value = value.slice(0, selectionStart) + "\t" + value.slice(selectionEnd);

    const caretPos = selectionStart + 1;
    code.focus();
    code.setSelectionRange(caretPos, caretPos);
  } else if (event.code === "KeyS" && (event.ctrlKey || event.metaKey) && form.checkValidity()) {
    event.preventDefault();
    form.submit();
  }
});

code.addEventListener("drop", (event) => {
  const files = event.dataTransfer.files;
  if (files.length !== 1) {
    return;
  }
  event.preventDefault();
  const file = files[0];
  const fileExtension = file.name.split(".").pop()?.toLowerCase() ?? "txt";

  const langIndex = langAliases[fileExtension] ?? langs.indexOf(fileExtension);
  if (
    langIndex === -1 &&
    !confirm("Ce fichier n'est pas dans la liste des langages, voulez-vous quand même le charger ?")
  ) {
    return;
  }

  try {
    file.text().then((val) => (code.value = val));
    lang.selectedIndex = Math.ceil((langIndex === -1 ? langAliases.txt : langIndex) / 2) + 1;
  } catch (error) {} // the "file" is a directory (do nothing)
});
