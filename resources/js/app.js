// app entrypoint
import "../css/app.scss";
import hljs from "highlight.js";
import "normalize.css";

hljs.highlightAll();
const styles = [
  { title: "Default", href: "https://highlightjs.org/static/demo/styles/default.css" },
  { title: "A 11 Y Dark", href: "https://highlightjs.org/static/demo/styles/a11y-dark.css" },
  { title: "A 11 Y Light", href: "https://highlightjs.org/static/demo/styles/a11y-light.css" },
  { title: "Agate", href: "https://highlightjs.org/static/demo/styles/agate.css" },
  { title: "An Old Hope", href: "https://highlightjs.org/static/demo/styles/an-old-hope.css" },
  { title: "Androidstudio", href: "https://highlightjs.org/static/demo/styles/androidstudio.css" },
  { title: "Arduino Light", href: "https://highlightjs.org/static/demo/styles/arduino-light.css" },
  { title: "Arta", href: "https://highlightjs.org/static/demo/styles/arta.css" },
  { title: "Ascetic", href: "https://highlightjs.org/static/demo/styles/ascetic.css" },
  { title: "Atom One Dark", href: "https://highlightjs.org/static/demo/styles/atom-one-dark.css" },
  {
    title: "Atom One Dark Reasonable",
    href: "https://highlightjs.org/static/demo/styles/atom-one-dark-reasonable.css",
  },
  {
    title: "Atom One Light",
    href: "https://highlightjs.org/static/demo/styles/atom-one-light.css",
  },
  { title: "Base16 / 3024", href: "https://highlightjs.org/static/demo/styles/base16/3024.css" },
  {
    title: "Base16 / Apathy",
    href: "https://highlightjs.org/static/demo/styles/base16/apathy.css",
  },
  {
    title: "Base16 / Apprentice",
    href: "https://highlightjs.org/static/demo/styles/base16/apprentice.css",
  },
  { title: "Base16 / Ashes", href: "https://highlightjs.org/static/demo/styles/base16/ashes.css" },
  {
    title: "Base16 / Atelier Cave",
    href: "https://highlightjs.org/static/demo/styles/base16/atelier-cave.css",
  },
  {
    title: "Base16 / Atelier Cave Light",
    href: "https://highlightjs.org/static/demo/styles/base16/atelier-cave-light.css",
  },
  {
    title: "Base16 / Atelier Dune",
    href: "https://highlightjs.org/static/demo/styles/base16/atelier-dune.css",
  },
  {
    title: "Base16 / Atelier Dune Light",
    href: "https://highlightjs.org/static/demo/styles/base16/atelier-dune-light.css",
  },
  {
    title: "Base16 / Atelier Estuary",
    href: "https://highlightjs.org/static/demo/styles/base16/atelier-estuary.css",
  },
  {
    title: "Base16 / Atelier Estuary Light",
    href: "https://highlightjs.org/static/demo/styles/base16/atelier-estuary-light.css",
  },
  {
    title: "Base16 / Atelier Forest",
    href: "https://highlightjs.org/static/demo/styles/base16/atelier-forest.css",
  },
  {
    title: "Base16 / Atelier Forest Light",
    href: "https://highlightjs.org/static/demo/styles/base16/atelier-forest-light.css",
  },
  {
    title: "Base16 / Atelier Heath",
    href: "https://highlightjs.org/static/demo/styles/base16/atelier-heath.css",
  },
  {
    title: "Base16 / Atelier Heath Light",
    href: "https://highlightjs.org/static/demo/styles/base16/atelier-heath-light.css",
  },
  {
    title: "Base16 / Atelier Lakeside",
    href: "https://highlightjs.org/static/demo/styles/base16/atelier-lakeside.css",
  },
  {
    title: "Base16 / Atelier Lakeside Light",
    href: "https://highlightjs.org/static/demo/styles/base16/atelier-lakeside-light.css",
  },
  {
    title: "Base16 / Atelier Plateau",
    href: "https://highlightjs.org/static/demo/styles/base16/atelier-plateau.css",
  },
  {
    title: "Base16 / Atelier Plateau Light",
    href: "https://highlightjs.org/static/demo/styles/base16/atelier-plateau-light.css",
  },
  {
    title: "Base16 / Atelier Savanna",
    href: "https://highlightjs.org/static/demo/styles/base16/atelier-savanna.css",
  },
  {
    title: "Base16 / Atelier Savanna Light",
    href: "https://highlightjs.org/static/demo/styles/base16/atelier-savanna-light.css",
  },
  {
    title: "Base16 / Atelier Seaside",
    href: "https://highlightjs.org/static/demo/styles/base16/atelier-seaside.css",
  },
  {
    title: "Base16 / Atelier Seaside Light",
    href: "https://highlightjs.org/static/demo/styles/base16/atelier-seaside-light.css",
  },
  {
    title: "Base16 / Atelier Sulphurpool",
    href: "https://highlightjs.org/static/demo/styles/base16/atelier-sulphurpool.css",
  },
  {
    title: "Base16 / Atelier Sulphurpool Light",
    href: "https://highlightjs.org/static/demo/styles/base16/atelier-sulphurpool-light.css",
  },
  { title: "Base16 / Atlas", href: "https://highlightjs.org/static/demo/styles/base16/atlas.css" },
  {
    title: "Base16 / Bespin",
    href: "https://highlightjs.org/static/demo/styles/base16/bespin.css",
  },
  {
    title: "Base16 / Black Metal",
    href: "https://highlightjs.org/static/demo/styles/base16/black-metal.css",
  },
  {
    title: "Base16 / Black Metal Bathory",
    href: "https://highlightjs.org/static/demo/styles/base16/black-metal-bathory.css",
  },
  {
    title: "Base16 / Black Metal Burzum",
    href: "https://highlightjs.org/static/demo/styles/base16/black-metal-burzum.css",
  },
  {
    title: "Base16 / Black Metal Dark Funeral",
    href: "https://highlightjs.org/static/demo/styles/base16/black-metal-dark-funeral.css",
  },
  {
    title: "Base16 / Black Metal Gorgoroth",
    href: "https://highlightjs.org/static/demo/styles/base16/black-metal-gorgoroth.css",
  },
  {
    title: "Base16 / Black Metal Immortal",
    href: "https://highlightjs.org/static/demo/styles/base16/black-metal-immortal.css",
  },
  {
    title: "Base16 / Black Metal Khold",
    href: "https://highlightjs.org/static/demo/styles/base16/black-metal-khold.css",
  },
  {
    title: "Base16 / Black Metal Marduk",
    href: "https://highlightjs.org/static/demo/styles/base16/black-metal-marduk.css",
  },
  {
    title: "Base16 / Black Metal Mayhem",
    href: "https://highlightjs.org/static/demo/styles/base16/black-metal-mayhem.css",
  },
  {
    title: "Base16 / Black Metal Nile",
    href: "https://highlightjs.org/static/demo/styles/base16/black-metal-nile.css",
  },
  {
    title: "Base16 / Black Metal Venom",
    href: "https://highlightjs.org/static/demo/styles/base16/black-metal-venom.css",
  },
  {
    title: "Base16 / Brewer",
    href: "https://highlightjs.org/static/demo/styles/base16/brewer.css",
  },
  {
    title: "Base16 / Bright",
    href: "https://highlightjs.org/static/demo/styles/base16/bright.css",
  },
  {
    title: "Base16 / Brogrammer",
    href: "https://highlightjs.org/static/demo/styles/base16/brogrammer.css",
  },
  {
    title: "Base16 / Brush Trees",
    href: "https://highlightjs.org/static/demo/styles/base16/brush-trees.css",
  },
  {
    title: "Base16 / Brush Trees Dark",
    href: "https://highlightjs.org/static/demo/styles/base16/brush-trees-dark.css",
  },
  { title: "Base16 / Chalk", href: "https://highlightjs.org/static/demo/styles/base16/chalk.css" },
  {
    title: "Base16 / Circus",
    href: "https://highlightjs.org/static/demo/styles/base16/circus.css",
  },
  {
    title: "Base16 / Classic Dark",
    href: "https://highlightjs.org/static/demo/styles/base16/classic-dark.css",
  },
  {
    title: "Base16 / Classic Light",
    href: "https://highlightjs.org/static/demo/styles/base16/classic-light.css",
  },
  {
    title: "Base16 / Codeschool",
    href: "https://highlightjs.org/static/demo/styles/base16/codeschool.css",
  },
  {
    title: "Base16 / Colors",
    href: "https://highlightjs.org/static/demo/styles/base16/colors.css",
  },
  {
    title: "Base16 / Cupcake",
    href: "https://highlightjs.org/static/demo/styles/base16/cupcake.css",
  },
  {
    title: "Base16 / Cupertino",
    href: "https://highlightjs.org/static/demo/styles/base16/cupertino.css",
  },
  {
    title: "Base16 / Danqing",
    href: "https://highlightjs.org/static/demo/styles/base16/danqing.css",
  },
  {
    title: "Base16 / Darcula",
    href: "https://highlightjs.org/static/demo/styles/base16/darcula.css",
  },
  {
    title: "Base16 / Dark Violet",
    href: "https://highlightjs.org/static/demo/styles/base16/dark-violet.css",
  },
  {
    title: "Base16 / Darkmoss",
    href: "https://highlightjs.org/static/demo/styles/base16/darkmoss.css",
  },
  {
    title: "Base16 / Darktooth",
    href: "https://highlightjs.org/static/demo/styles/base16/darktooth.css",
  },
  { title: "Base16 / Decaf", href: "https://highlightjs.org/static/demo/styles/base16/decaf.css" },
  {
    title: "Base16 / Default Dark",
    href: "https://highlightjs.org/static/demo/styles/base16/default-dark.css",
  },
  {
    title: "Base16 / Default Light",
    href: "https://highlightjs.org/static/demo/styles/base16/default-light.css",
  },
  {
    title: "Base16 / Dirtysea",
    href: "https://highlightjs.org/static/demo/styles/base16/dirtysea.css",
  },
  {
    title: "Base16 / Dracula",
    href: "https://highlightjs.org/static/demo/styles/base16/dracula.css",
  },
  {
    title: "Base16 / Edge Dark",
    href: "https://highlightjs.org/static/demo/styles/base16/edge-dark.css",
  },
  {
    title: "Base16 / Edge Light",
    href: "https://highlightjs.org/static/demo/styles/base16/edge-light.css",
  },
  {
    title: "Base16 / Eighties",
    href: "https://highlightjs.org/static/demo/styles/base16/eighties.css",
  },
  {
    title: "Base16 / Embers",
    href: "https://highlightjs.org/static/demo/styles/base16/embers.css",
  },
  {
    title: "Base16 / Equilibrium Dark",
    href: "https://highlightjs.org/static/demo/styles/base16/equilibrium-dark.css",
  },
  {
    title: "Base16 / Equilibrium Gray Dark",
    href: "https://highlightjs.org/static/demo/styles/base16/equilibrium-gray-dark.css",
  },
  {
    title: "Base16 / Equilibrium Gray Light",
    href: "https://highlightjs.org/static/demo/styles/base16/equilibrium-gray-light.css",
  },
  {
    title: "Base16 / Equilibrium Light",
    href: "https://highlightjs.org/static/demo/styles/base16/equilibrium-light.css",
  },
  {
    title: "Base16 / Espresso",
    href: "https://highlightjs.org/static/demo/styles/base16/espresso.css",
  },
  { title: "Base16 / Eva", href: "https://highlightjs.org/static/demo/styles/base16/eva.css" },
  {
    title: "Base16 / Eva Dim",
    href: "https://highlightjs.org/static/demo/styles/base16/eva-dim.css",
  },
  { title: "Base16 / Flat", href: "https://highlightjs.org/static/demo/styles/base16/flat.css" },
  {
    title: "Base16 / Framer",
    href: "https://highlightjs.org/static/demo/styles/base16/framer.css",
  },
  {
    title: "Base16 / Fruit Soda",
    href: "https://highlightjs.org/static/demo/styles/base16/fruit-soda.css",
  },
  {
    title: "Base16 / Gigavolt",
    href: "https://highlightjs.org/static/demo/styles/base16/gigavolt.css",
  },
  {
    title: "Base16 / Github",
    href: "https://highlightjs.org/static/demo/styles/base16/github.css",
  },
  {
    title: "Base16 / Google Dark",
    href: "https://highlightjs.org/static/demo/styles/base16/google-dark.css",
  },
  {
    title: "Base16 / Google Light",
    href: "https://highlightjs.org/static/demo/styles/base16/google-light.css",
  },
  {
    title: "Base16 / Grayscale Dark",
    href: "https://highlightjs.org/static/demo/styles/base16/grayscale-dark.css",
  },
  {
    title: "Base16 / Grayscale Light",
    href: "https://highlightjs.org/static/demo/styles/base16/grayscale-light.css",
  },
  {
    title: "Base16 / Green Screen",
    href: "https://highlightjs.org/static/demo/styles/base16/green-screen.css",
  },
  {
    title: "Base16 / Gruvbox Dark Hard",
    href: "https://highlightjs.org/static/demo/styles/base16/gruvbox-dark-hard.css",
  },
  {
    title: "Base16 / Gruvbox Dark Medium",
    href: "https://highlightjs.org/static/demo/styles/base16/gruvbox-dark-medium.css",
  },
  {
    title: "Base16 / Gruvbox Dark Pale",
    href: "https://highlightjs.org/static/demo/styles/base16/gruvbox-dark-pale.css",
  },
  {
    title: "Base16 / Gruvbox Dark Soft",
    href: "https://highlightjs.org/static/demo/styles/base16/gruvbox-dark-soft.css",
  },
  {
    title: "Base16 / Gruvbox Light Hard",
    href: "https://highlightjs.org/static/demo/styles/base16/gruvbox-light-hard.css",
  },
  {
    title: "Base16 / Gruvbox Light Medium",
    href: "https://highlightjs.org/static/demo/styles/base16/gruvbox-light-medium.css",
  },
  {
    title: "Base16 / Gruvbox Light Soft",
    href: "https://highlightjs.org/static/demo/styles/base16/gruvbox-light-soft.css",
  },
  {
    title: "Base16 / Hardcore",
    href: "https://highlightjs.org/static/demo/styles/base16/hardcore.css",
  },
  {
    title: "Base16 / Harmonic 16 Dark",
    href: "https://highlightjs.org/static/demo/styles/base16/harmonic16-dark.css",
  },
  {
    title: "Base16 / Harmonic 16 Light",
    href: "https://highlightjs.org/static/demo/styles/base16/harmonic16-light.css",
  },
  {
    title: "Base16 / Heetch Dark",
    href: "https://highlightjs.org/static/demo/styles/base16/heetch-dark.css",
  },
  {
    title: "Base16 / Heetch Light",
    href: "https://highlightjs.org/static/demo/styles/base16/heetch-light.css",
  },
  {
    title: "Base16 / Helios",
    href: "https://highlightjs.org/static/demo/styles/base16/helios.css",
  },
  {
    title: "Base16 / Hopscotch",
    href: "https://highlightjs.org/static/demo/styles/base16/hopscotch.css",
  },
  {
    title: "Base16 / Horizon Dark",
    href: "https://highlightjs.org/static/demo/styles/base16/horizon-dark.css",
  },
  {
    title: "Base16 / Horizon Light",
    href: "https://highlightjs.org/static/demo/styles/base16/horizon-light.css",
  },
  {
    title: "Base16 / Humanoid Dark",
    href: "https://highlightjs.org/static/demo/styles/base16/humanoid-dark.css",
  },
  {
    title: "Base16 / Humanoid Light",
    href: "https://highlightjs.org/static/demo/styles/base16/humanoid-light.css",
  },
  {
    title: "Base16 / Ia Dark",
    href: "https://highlightjs.org/static/demo/styles/base16/ia-dark.css",
  },
  {
    title: "Base16 / Ia Light",
    href: "https://highlightjs.org/static/demo/styles/base16/ia-light.css",
  },
  {
    title: "Base16 / Icy Dark",
    href: "https://highlightjs.org/static/demo/styles/base16/icy-dark.css",
  },
  {
    title: "Base16 / Ir Black",
    href: "https://highlightjs.org/static/demo/styles/base16/ir-black.css",
  },
  {
    title: "Base16 / Isotope",
    href: "https://highlightjs.org/static/demo/styles/base16/isotope.css",
  },
  {
    title: "Base16 / Kimber",
    href: "https://highlightjs.org/static/demo/styles/base16/kimber.css",
  },
  {
    title: "Base16 / London Tube",
    href: "https://highlightjs.org/static/demo/styles/base16/london-tube.css",
  },
  {
    title: "Base16 / Macintosh",
    href: "https://highlightjs.org/static/demo/styles/base16/macintosh.css",
  },
  {
    title: "Base16 / Marrakesh",
    href: "https://highlightjs.org/static/demo/styles/base16/marrakesh.css",
  },
  {
    title: "Base16 / Materia",
    href: "https://highlightjs.org/static/demo/styles/base16/materia.css",
  },
  {
    title: "Base16 / Material",
    href: "https://highlightjs.org/static/demo/styles/base16/material.css",
  },
  {
    title: "Base16 / Material Darker",
    href: "https://highlightjs.org/static/demo/styles/base16/material-darker.css",
  },
  {
    title: "Base16 / Material Lighter",
    href: "https://highlightjs.org/static/demo/styles/base16/material-lighter.css",
  },
  {
    title: "Base16 / Material Palenight",
    href: "https://highlightjs.org/static/demo/styles/base16/material-palenight.css",
  },
  {
    title: "Base16 / Material Vivid",
    href: "https://highlightjs.org/static/demo/styles/base16/material-vivid.css",
  },
  {
    title: "Base16 / Mellow Purple",
    href: "https://highlightjs.org/static/demo/styles/base16/mellow-purple.css",
  },
  {
    title: "Base16 / Mexico Light",
    href: "https://highlightjs.org/static/demo/styles/base16/mexico-light.css",
  },
  { title: "Base16 / Mocha", href: "https://highlightjs.org/static/demo/styles/base16/mocha.css" },
  {
    title: "Base16 / Monokai",
    href: "https://highlightjs.org/static/demo/styles/base16/monokai.css",
  },
  {
    title: "Base16 / Nebula",
    href: "https://highlightjs.org/static/demo/styles/base16/nebula.css",
  },
  { title: "Base16 / Nord", href: "https://highlightjs.org/static/demo/styles/base16/nord.css" },
  { title: "Base16 / Nova", href: "https://highlightjs.org/static/demo/styles/base16/nova.css" },
  { title: "Base16 / Ocean", href: "https://highlightjs.org/static/demo/styles/base16/ocean.css" },
  {
    title: "Base16 / Oceanicnext",
    href: "https://highlightjs.org/static/demo/styles/base16/oceanicnext.css",
  },
  {
    title: "Base16 / One Light",
    href: "https://highlightjs.org/static/demo/styles/base16/one-light.css",
  },
  {
    title: "Base16 / Onedark",
    href: "https://highlightjs.org/static/demo/styles/base16/onedark.css",
  },
  {
    title: "Base16 / Outrun Dark",
    href: "https://highlightjs.org/static/demo/styles/base16/outrun-dark.css",
  },
  {
    title: "Base16 / Papercolor Dark",
    href: "https://highlightjs.org/static/demo/styles/base16/papercolor-dark.css",
  },
  {
    title: "Base16 / Papercolor Light",
    href: "https://highlightjs.org/static/demo/styles/base16/papercolor-light.css",
  },
  {
    title: "Base16 / Paraiso",
    href: "https://highlightjs.org/static/demo/styles/base16/paraiso.css",
  },
  {
    title: "Base16 / Pasque",
    href: "https://highlightjs.org/static/demo/styles/base16/pasque.css",
  },
  { title: "Base16 / Phd", href: "https://highlightjs.org/static/demo/styles/base16/phd.css" },
  { title: "Base16 / Pico", href: "https://highlightjs.org/static/demo/styles/base16/pico.css" },
  { title: "Base16 / Pop", href: "https://highlightjs.org/static/demo/styles/base16/pop.css" },
  {
    title: "Base16 / Porple",
    href: "https://highlightjs.org/static/demo/styles/base16/porple.css",
  },
  {
    title: "Base16 / Qualia",
    href: "https://highlightjs.org/static/demo/styles/base16/qualia.css",
  },
  {
    title: "Base16 / Railscasts",
    href: "https://highlightjs.org/static/demo/styles/base16/railscasts.css",
  },
  {
    title: "Base16 / Rebecca",
    href: "https://highlightjs.org/static/demo/styles/base16/rebecca.css",
  },
  {
    title: "Base16 / Ros Pine",
    href: "https://highlightjs.org/static/demo/styles/base16/ros-pine.css",
  },
  {
    title: "Base16 / Ros Pine Dawn",
    href: "https://highlightjs.org/static/demo/styles/base16/ros-pine-dawn.css",
  },
  {
    title: "Base16 / Ros Pine Moon",
    href: "https://highlightjs.org/static/demo/styles/base16/ros-pine-moon.css",
  },
  {
    title: "Base16 / Sagelight",
    href: "https://highlightjs.org/static/demo/styles/base16/sagelight.css",
  },
  {
    title: "Base16 / Sandcastle",
    href: "https://highlightjs.org/static/demo/styles/base16/sandcastle.css",
  },
  {
    title: "Base16 / Seti Ui",
    href: "https://highlightjs.org/static/demo/styles/base16/seti-ui.css",
  },
  {
    title: "Base16 / Shapeshifter",
    href: "https://highlightjs.org/static/demo/styles/base16/shapeshifter.css",
  },
  {
    title: "Base16 / Silk Dark",
    href: "https://highlightjs.org/static/demo/styles/base16/silk-dark.css",
  },
  {
    title: "Base16 / Silk Light",
    href: "https://highlightjs.org/static/demo/styles/base16/silk-light.css",
  },
  {
    title: "Base16 / Snazzy",
    href: "https://highlightjs.org/static/demo/styles/base16/snazzy.css",
  },
  {
    title: "Base16 / Solar Flare",
    href: "https://highlightjs.org/static/demo/styles/base16/solar-flare.css",
  },
  {
    title: "Base16 / Solar Flare Light",
    href: "https://highlightjs.org/static/demo/styles/base16/solar-flare-light.css",
  },
  {
    title: "Base16 / Solarized Dark",
    href: "https://highlightjs.org/static/demo/styles/base16/solarized-dark.css",
  },
  {
    title: "Base16 / Solarized Light",
    href: "https://highlightjs.org/static/demo/styles/base16/solarized-light.css",
  },
  {
    title: "Base16 / Spacemacs",
    href: "https://highlightjs.org/static/demo/styles/base16/spacemacs.css",
  },
  {
    title: "Base16 / Summercamp",
    href: "https://highlightjs.org/static/demo/styles/base16/summercamp.css",
  },
  {
    title: "Base16 / Summerfruit Dark",
    href: "https://highlightjs.org/static/demo/styles/base16/summerfruit-dark.css",
  },
  {
    title: "Base16 / Summerfruit Light",
    href: "https://highlightjs.org/static/demo/styles/base16/summerfruit-light.css",
  },
  {
    title: "Base16 / Synth Midnight Terminal Dark",
    href: "https://highlightjs.org/static/demo/styles/base16/synth-midnight-terminal-dark.css",
  },
  {
    title: "Base16 / Synth Midnight Terminal Light",
    href: "https://highlightjs.org/static/demo/styles/base16/synth-midnight-terminal-light.css",
  },
  { title: "Base16 / Tango", href: "https://highlightjs.org/static/demo/styles/base16/tango.css" },
  {
    title: "Base16 / Tender",
    href: "https://highlightjs.org/static/demo/styles/base16/tender.css",
  },
  {
    title: "Base16 / Tomorrow",
    href: "https://highlightjs.org/static/demo/styles/base16/tomorrow.css",
  },
  {
    title: "Base16 / Tomorrow Night",
    href: "https://highlightjs.org/static/demo/styles/base16/tomorrow-night.css",
  },
  {
    title: "Base16 / Twilight",
    href: "https://highlightjs.org/static/demo/styles/base16/twilight.css",
  },
  {
    title: "Base16 / Unikitty Dark",
    href: "https://highlightjs.org/static/demo/styles/base16/unikitty-dark.css",
  },
  {
    title: "Base16 / Unikitty Light",
    href: "https://highlightjs.org/static/demo/styles/base16/unikitty-light.css",
  },
  {
    title: "Base16 / Vulcan",
    href: "https://highlightjs.org/static/demo/styles/base16/vulcan.css",
  },
  {
    title: "Base16 / Windows 10",
    href: "https://highlightjs.org/static/demo/styles/base16/windows-10.css",
  },
  {
    title: "Base16 / Windows 10 Light",
    href: "https://highlightjs.org/static/demo/styles/base16/windows-10-light.css",
  },
  {
    title: "Base16 / Windows 95",
    href: "https://highlightjs.org/static/demo/styles/base16/windows-95.css",
  },
  {
    title: "Base16 / Windows 95 Light",
    href: "https://highlightjs.org/static/demo/styles/base16/windows-95-light.css",
  },
  {
    title: "Base16 / Windows High Contrast",
    href: "https://highlightjs.org/static/demo/styles/base16/windows-high-contrast.css",
  },
  {
    title: "Base16 / Windows High Contrast Light",
    href: "https://highlightjs.org/static/demo/styles/base16/windows-high-contrast-light.css",
  },
  {
    title: "Base16 / Windows Nt",
    href: "https://highlightjs.org/static/demo/styles/base16/windows-nt.css",
  },
  {
    title: "Base16 / Windows Nt Light",
    href: "https://highlightjs.org/static/demo/styles/base16/windows-nt-light.css",
  },
  {
    title: "Base16 / Woodland",
    href: "https://highlightjs.org/static/demo/styles/base16/woodland.css",
  },
  {
    title: "Base16 / Xcode Dusk",
    href: "https://highlightjs.org/static/demo/styles/base16/xcode-dusk.css",
  },
  {
    title: "Base16 / Zenburn",
    href: "https://highlightjs.org/static/demo/styles/base16/zenburn.css",
  },
  { title: "Brown Paper", href: "https://highlightjs.org/static/demo/styles/brown-paper.css" },
  { title: "Codepen Embed", href: "https://highlightjs.org/static/demo/styles/codepen-embed.css" },
  { title: "Color Brewer", href: "https://highlightjs.org/static/demo/styles/color-brewer.css" },
  { title: "Dark", href: "https://highlightjs.org/static/demo/styles/dark.css" },
  { title: "Devibeans", href: "https://highlightjs.org/static/demo/styles/devibeans.css" },
  { title: "Docco", href: "https://highlightjs.org/static/demo/styles/docco.css" },
  { title: "Far", href: "https://highlightjs.org/static/demo/styles/far.css" },
  { title: "Foundation", href: "https://highlightjs.org/static/demo/styles/foundation.css" },
  { title: "Github", href: "https://highlightjs.org/static/demo/styles/github.css" },
  { title: "Github Dark", href: "https://highlightjs.org/static/demo/styles/github-dark.css" },
  {
    title: "Github Dark Dimmed",
    href: "https://highlightjs.org/static/demo/styles/github-dark-dimmed.css",
  },
  { title: "Gml", href: "https://highlightjs.org/static/demo/styles/gml.css" },
  { title: "Googlecode", href: "https://highlightjs.org/static/demo/styles/googlecode.css" },
  { title: "Gradient Dark", href: "https://highlightjs.org/static/demo/styles/gradient-dark.css" },
  {
    title: "Gradient Light",
    href: "https://highlightjs.org/static/demo/styles/gradient-light.css",
  },
  { title: "Grayscale", href: "https://highlightjs.org/static/demo/styles/grayscale.css" },
  { title: "Hybrid", href: "https://highlightjs.org/static/demo/styles/hybrid.css" },
  { title: "Idea", href: "https://highlightjs.org/static/demo/styles/idea.css" },
  { title: "Ir Black", href: "https://highlightjs.org/static/demo/styles/ir-black.css" },
  {
    title: "Isbl Editor Dark",
    href: "https://highlightjs.org/static/demo/styles/isbl-editor-dark.css",
  },
  {
    title: "Isbl Editor Light",
    href: "https://highlightjs.org/static/demo/styles/isbl-editor-light.css",
  },
  { title: "Kimbie Dark", href: "https://highlightjs.org/static/demo/styles/kimbie-dark.css" },
  { title: "Kimbie Light", href: "https://highlightjs.org/static/demo/styles/kimbie-light.css" },
  { title: "Lightfair", href: "https://highlightjs.org/static/demo/styles/lightfair.css" },
  { title: "Lioshi", href: "https://highlightjs.org/static/demo/styles/lioshi.css" },
  { title: "Magula", href: "https://highlightjs.org/static/demo/styles/magula.css" },
  { title: "Mono Blue", href: "https://highlightjs.org/static/demo/styles/mono-blue.css" },
  { title: "Monokai", href: "https://highlightjs.org/static/demo/styles/monokai.css" },
  {
    title: "Monokai Sublime",
    href: "https://highlightjs.org/static/demo/styles/monokai-sublime.css",
  },
  { title: "Night Owl", href: "https://highlightjs.org/static/demo/styles/night-owl.css" },
  { title: "Nnfx Dark", href: "https://highlightjs.org/static/demo/styles/nnfx-dark.css" },
  { title: "Nnfx Light", href: "https://highlightjs.org/static/demo/styles/nnfx-light.css" },
  { title: "Nord", href: "https://highlightjs.org/static/demo/styles/nord.css" },
  { title: "Obsidian", href: "https://highlightjs.org/static/demo/styles/obsidian.css" },
  { title: "Paraiso Dark", href: "https://highlightjs.org/static/demo/styles/paraiso-dark.css" },
  { title: "Paraiso Light", href: "https://highlightjs.org/static/demo/styles/paraiso-light.css" },
  { title: "Pojoaque", href: "https://highlightjs.org/static/demo/styles/pojoaque.css" },
  { title: "Purebasic", href: "https://highlightjs.org/static/demo/styles/purebasic.css" },
  {
    title: "Qtcreator Dark",
    href: "https://highlightjs.org/static/demo/styles/qtcreator-dark.css",
  },
  {
    title: "Qtcreator Light",
    href: "https://highlightjs.org/static/demo/styles/qtcreator-light.css",
  },
  { title: "Rainbow", href: "https://highlightjs.org/static/demo/styles/rainbow.css" },
  { title: "Routeros", href: "https://highlightjs.org/static/demo/styles/routeros.css" },
  { title: "School Book", href: "https://highlightjs.org/static/demo/styles/school-book.css" },
  {
    title: "Shades Of Purple",
    href: "https://highlightjs.org/static/demo/styles/shades-of-purple.css",
  },
  { title: "Srcery", href: "https://highlightjs.org/static/demo/styles/srcery.css" },
  {
    title: "Stackoverflow Dark",
    href: "https://highlightjs.org/static/demo/styles/stackoverflow-dark.css",
  },
  {
    title: "Stackoverflow Light",
    href: "https://highlightjs.org/static/demo/styles/stackoverflow-light.css",
  },
  { title: "Sunburst", href: "https://highlightjs.org/static/demo/styles/sunburst.css" },
  {
    title: "Tomorrow Night Blue",
    href: "https://highlightjs.org/static/demo/styles/tomorrow-night-blue.css",
  },
  {
    title: "Tomorrow Night Bright",
    href: "https://highlightjs.org/static/demo/styles/tomorrow-night-bright.css",
  },
  { title: "Vs", href: "https://highlightjs.org/static/demo/styles/vs.css" },
  { title: "Vs 2015", href: "https://highlightjs.org/static/demo/styles/vs2015.css" },
  { title: "Xcode", href: "https://highlightjs.org/static/demo/styles/xcode.css" },
  { title: "Xt 256", href: "https://highlightjs.org/static/demo/styles/xt256.css" },
];

const closeModal = document.querySelector("#modal-close");
const modal = document.querySelector("#modal");

if (modal) {
  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}

window.addEventListener("load", (event) => {
  const stylesheet = document.querySelector("link[data='code']");
  if (localStorage.getItem("style")) {
    stylesheet.setAttribute("href", localStorage.getItem("style"));
  }
  const header = document.querySelector(".header");
  const select = header.querySelector("select");
  styles.forEach((style) => {
    const option = document.createElement("option");
    option.text = style.title;
    option.value = style.href;
    option.selected = localStorage.getItem("style") && localStorage.getItem("style") === style.href;
    select.appendChild(option);
  });
  select.addEventListener("change", (e) => {
    stylesheet.setAttribute("href", e.target.value);
    localStorage.setItem("style", e.target.value);
  });
});
