(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.namedColorPicker = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = "html.named-color-picker-open,\nhtml.named-color-picker-open body {\n  overflow: hidden !important;\n}\n\n.named-color-picker {\n  display: none;\n  top: 0;\n  left: 0;\n  position: fixed;\n  z-index: 3000;\n  width: 100vw;\n  height: 100vh;\n  font-size: 1rem;\n}\n\n.named-color-picker,\n.named-color-picker * {\n  box-sizing: border-box;\n}\n\n.named-color-picker > .-grid {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #000000;\n}\n\n.named-color-picker > .-grid > .-color {\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n  border-radius: .15em;\n  border: 2px solid transparent;\n  transition: -webkit-transform .125s;\n  transition: transform .125s;\n  transition: transform .125s, -webkit-transform .125s;\n}\n\n.named-color-picker > .-grid > .-color.-active, .named-color-picker > .-grid > .-color:hover {\n  -webkit-transform: scale(1.75);\n          transform: scale(1.75);\n  border-color: #ffffff;\n  box-shadow: 0 0 0 0.05em rgba(0, 0, 0, 0.25);\n}\n\n.named-color-picker > .-grid > .-color.-search {\n  color: #000000;\n  background-color: #ffffff;\n}\n\n.named-color-picker > .-grid > .-color.-search > svg {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.named-color-picker > .-grid > .-color.-search > svg > g {\n  fill: currentColor;\n}\n\n.named-color-picker > .-info {\n  display: none;\n  position: fixed;\n  min-width: 15em;\n  padding: .75em 1em 1em;\n  text-align: center;\n  border-radius: .15em;\n  border: 0.25em solid #ffffff;\n  box-shadow: 0 0 0 0.15em rgba(0, 0, 0, 0.25);\n}\n\n.named-color-picker > .-info > .-title {\n  font-weight: 500;\n  font-size: 1.25em;\n}\n\n.named-color-picker > .-info > .-hex,\n.named-color-picker > .-info > .-rgb,\n.named-color-picker > .-info > .-hsl,\n.named-color-picker > .-info > .-hsv {\n  display: block;\n  font-size: .85em;\n  text-decoration: none;\n  font-family: monospace;\n  opacity: 0.5;\n  color: inherit;\n  transition: all .25s;\n}\n\n.named-color-picker > .-info > .-hex:hover,\n.named-color-picker > .-info > .-rgb:hover,\n.named-color-picker > .-info > .-hsl:hover,\n.named-color-picker > .-info > .-hsv:hover {\n  opacity: 1;\n}\n\n.named-color-picker > .-info > .-hex {\n  font-size: 1.25em;\n}\n\n.named-color-picker > .-info > .-copied {\n  visibility: hidden;\n  font-size: .85em;\n  font-variant: small-caps;\n}\n\n@media (max-width: 768px) {\n  .named-color-picker > .-info .-hex,\n  .named-color-picker > .-info .-rgb,\n  .named-color-picker > .-info .-hsl,\n  .named-color-picker > .-info .-hsv,\n  .named-color-picker > .-info .-copied {\n    display: none;\n  }\n}\n\n.named-color-picker > .-info > .-select {\n  display: block;\n  width: 100%;\n  padding: .75em;\n  margin: .5em 0 0;\n  border-radius: .15em;\n  border: .063em solid;\n  opacity: .9;\n  text-transform: uppercase;\n}\n\n.named-color-picker > .-info > .-select:hover {\n  opacity: 1;\n}\n\n.named-color-picker > .-info > .-select:active {\n  -webkit-transform: scale(0.96);\n          transform: scale(0.96);\n}\n\n.named-color-picker > .-info::after {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  font-size: .675em;\n}\n\n.named-color-picker > .-info.-arrow-top::after {\n  top: -1em;\n  left: calc(50% - 1em);\n  border-left: 1em solid transparent;\n  border-right: 1em solid transparent;\n  border-bottom: 1em solid #ffffff;\n}\n\n.named-color-picker > .-info.-arrow-bottom::after {\n  bottom: -1em;\n  left: calc(50% - 1em);\n  border-left: 1em solid transparent;\n  border-right: 1em solid transparent;\n  border-top: 1em solid #ffffff;\n}\n\n.named-color-picker > .-info.-arrow-left::after {\n  left: -1em;\n  top: calc(50% - 1em);\n  border-top: 1em solid transparent;\n  border-bottom: 1em solid transparent;\n  border-right: 1em solid #ffffff;\n}\n\n.named-color-picker > .-info.-arrow-left-top::after {\n  top: .5em;\n}\n\n.named-color-picker > .-info.-arrow-left-bottom::after {\n  top: auto;\n  bottom: .5em;\n}\n\n.named-color-picker > .-info.-arrow-right::after {\n  right: -1em;\n  top: calc(50% - 1em);\n  border-top: 1em solid transparent;\n  border-bottom: 1em solid transparent;\n  border-left: 1em solid #ffffff;\n}\n\n.named-color-picker > .-info.-arrow-right-top::after {\n  top: .5em;\n}\n\n.named-color-picker > .-info.-arrow-right-bottom::after {\n  top: auto;\n  bottom: .5em;\n}\n\n.named-color-picker > .-search-overlay {\n  display: none;\n  top: 0;\n  left: 0;\n  z-index: 3001;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.75);\n}\n\n.named-color-picker > .-search {\n  display: none;\n  top: 10%;\n  left: 50%;\n  position: fixed;\n  z-index: 3002;\n  width: 30%;\n  -webkit-transform: translate(-50%, -90%);\n          transform: translate(-50%, -90%);\n  border-radius: .15em;\n  box-shadow: 0 0 0 0.05em rgba(0, 0, 0, 0.25);\n}\n\n.named-color-picker > .-search > select {\n  width: 100%;\n}\n\n.named-color-picker > .-search > select ~ .selectize-control > .selectize-input,\n.named-color-picker > .-search > select ~ .selectize-control > .selectize-input > input {\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.named-color-picker > .-search > select ~ .selectize-dropdown {\n  font-size: inherit;\n  line-height: inherit;\n  z-index: 3003;\n}\n\n.named-color-picker > .-search > select ~ .selectize-dropdown > .selectize-dropdown-content {\n  max-height: 75vh;\n}\n\n.named-color-picker > .-search > select ~ .selectize-dropdown > .selectize-dropdown-content .-color {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.named-color-picker > .-search > select ~ .selectize-dropdown > .selectize-dropdown-content .-color > .-swatch {\n  display: inline-block;\n  vertical-align: middle;\n  width: 1em;\n  height: 1em;\n  border-radius: .15em;\n}\n\n.named-color-picker > .-textarea {\n  top: -99999px;\n  left: -99999px;\n  position: fixed;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n}\n\n.named-color-picker-swatch {\n  vertical-align: middle;\n  display: inline-block;\n  margin: -.75em 0;\n  width: 1.75em;\n  height: 1.75em;\n  outline: none;\n  -webkit-tap-highlight-color: none;\n  border-radius: .15em;\n  box-shadow: 0.063em 0.063em 0 0 #ffffff, 0.126em 0.126em 0 0 rgba(0, 0, 0, 0.15);\n}\n\n.named-color-picker-swatch:hover {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n}\n\n.named-color-picker-swatch.-swatch-before {\n  margin-right: .5em;\n}\n\n.named-color-picker-swatch.-swatch-after {\n  margin-left: .5em;\n}\n\n.named-color-picker-swatch.-stand-alone {\n  margin-top: 0;\n  margin-bottom: 0;\n  width: 100%;\n  height: auto;\n}\n\n.named-color-picker-swatch:active {\n  -webkit-transform: scale(0.94);\n          transform: scale(0.94);\n}\n\n.named-color-picker-swatch.-grow, .named-color-picker-swatch.-shrink {\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-duration: .25s;\n          animation-duration: .25s;\n}\n\n.named-color-picker-swatch.-grow {\n  -webkit-animation-name: named-color-picker-grow;\n          animation-name: named-color-picker-grow;\n}\n\n.named-color-picker-swatch.-shrink {\n  -webkit-animation-name: named-color-picker-shrink;\n          animation-name: named-color-picker-shrink;\n}\n\n.named-color-picker-swatch > svg {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: .15em;\n}\n\n.named-color-picker-swatch > svg > g {\n  fill: currentColor;\n}\n\n@-webkit-keyframes named-color-picker-grow {\n  0% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.25);\n            transform: scale(1.25);\n  }\n}\n\n@keyframes named-color-picker-grow {\n  0% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.25);\n            transform: scale(1.25);\n  }\n}\n\n@-webkit-keyframes named-color-picker-shrink {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(1.25);\n            transform: scale(1.25);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@keyframes named-color-picker-shrink {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(1.25);\n            transform: scale(1.25);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n";

},{}],2:[function(require,module,exports){
module.exports={
    "abbey": "#4c4f56",
    "acadia": "#1b1404",
    "acapulco": "#7cb0a1",
    "acidGreen": "#8ffe09",
    "acorn": "#6a5d1b",
    "adobe": "#bd6c48",
    "aeroBlue": "#c9ffe5",
    "affair": "#714693",
    "afghanTan": "#86560a",
    "akaroa": "#d4c4a8",
    "albescentWhite": "#f5e9d3",
    "alertTan": "#9b4703",
    "algae": "#54ac68",
    "algaeGreen": "#21c36f",
    "allports": "#0076a3",
    "almondFrost": "#907b71",
    "almostBlack": "#070d0d",
    "alpine": "#af8f2c",
    "alto": "#dbdbdb",
    "aluminium": "#a9acb6",
    "amazon": "#3b7a57",
    "amber": "#feb308",
    "americano": "#87756e",
    "amethyst": "#9b5fc0",
    "amethystSmoke": "#a397b4",
    "amour": "#f9eaf3",
    "amulet": "#7b9f80",
    "anakiwa": "#9de5ff",
    "antiqueBrass": "#704a07",
    "anzac": "#e0b646",
    "apache": "#dfbe6f",
    "apple": "#4fa83d",
    "appleBlossom": "#af4d43",
    "appleGreen": "#e2f3ec",
    "apricot": "#eb9373",
    "apricotWhite": "#fffeec",
    "aqua": "#00ffff",
    "aquaBlue": "#02d8e9",
    "aquaGreen": "#12e193",
    "aquaHaze": "#edf5f5",
    "aquaMarine": "#2ee8bb",
    "aquaSpring": "#eaf9f5",
    "aquaSqueeze": "#e8f5f2",
    "arapawa": "#110c6c",
    "armadillo": "#433e37",
    "armyGreen": "#4b5d16",
    "arrowtown": "#948771",
    "ash": "#c6c3b5",
    "ashBrown": "#2e1905",
    "asparagus": "#77ab56",
    "asphalt": "#130a06",
    "astra": "#faeab9",
    "astral": "#327da0",
    "astronaut": "#283a77",
    "astronautBlue": "#013e62",
    "athensGrey": "#eef0f3",
    "athsSpecial": "#ecebce",
    "atlantis": "#97cd2d",
    "atoll": "#0a6f75",
    "atomic": "#314459",
    "auChico": "#97605d",
    "aubergine": "#3b0910",
    "auburn": "#9a3001",
    "australianMint": "#f5ffbe",
    "avocado": "#888d65",
    "avocadoGreen": "#87a922",
    "axolotl": "#4e6649",
    "azalea": "#f7c8da",
    "aztec": "#0d1c19",
    "azul": "#1d5dec",
    "azure": "#315ba1",
    "babyBlue": "#a2cffe",
    "babyGreen": "#8cff9e",
    "babyPink": "#ffb7ce",
    "babyPurple": "#ca9bf7",
    "bahamaBlue": "#026395",
    "bahia": "#a5cb0c",
    "bajaWhite": "#fff8d1",
    "baliHai": "#859faf",
    "balticSea": "#2a2630",
    "bamboo": "#da6304",
    "banana": "#ffff7e",
    "bananaYellow": "#fafe4b",
    "bandicoot": "#858470",
    "barberry": "#ded717",
    "barbiePink": "#fe46a5",
    "barleyCorn": "#a68b5b",
    "barleyWhite": "#fff4ce",
    "barney": "#ac1db8",
    "barneyPurple": "#a00498",
    "barossa": "#44012d",
    "bastille": "#292130",
    "battleshipGrey": "#828f72",
    "bayLeaf": "#7da98d",
    "bayOfMany": "#273a81",
    "bazaar": "#98777b",
    "bean": "#3d0c02",
    "beautyBush": "#eec1be",
    "beeswax": "#fef2c7",
    "beige": "#e6daa6",
    "bermuda": "#7dd8c6",
    "bermudaGrey": "#6b8ba2",
    "berry": "#990f4b",
    "berylGreen": "#dee5c0",
    "bianca": "#fcfbf3",
    "bigStone": "#162a40",
    "bilbao": "#327c14",
    "bilobaFlower": "#b2a1ea",
    "birch": "#373021",
    "birdFlower": "#d4cd16",
    "biscay": "#1b3162",
    "bismark": "#497183",
    "bisonHide": "#c1b7a4",
    "bitter": "#868974",
    "bitterLemon": "#cae00d",
    "bizarre": "#eededa",
    "black": "#000000",
    "blackBean": "#081910",
    "blackForest": "#0b1304",
    "blackHaze": "#f6f7f7",
    "blackMagic": "#251706",
    "blackMarlin": "#3e2c1c",
    "blackPearl": "#041322",
    "blackPepper": "#0e0e18",
    "blackRock": "#0d0332",
    "blackRose": "#67032d",
    "blackRussian": "#0a001c",
    "blackSqueeze": "#f2fafa",
    "blackWhite": "#fffef6",
    "blackberry": "#4d0135",
    "blackcurrant": "#32293a",
    "blackwood": "#261105",
    "bleachWhite": "#fef3d8",
    "bleachedCedar": "#2c2133",
    "blood": "#770001",
    "bloodOrange": "#fe4b03",
    "bloodRed": "#980002",
    "blossom": "#dcb4bc",
    "blue": "#0000ff",
    "blueBayoux": "#496679",
    "blueBell": "#220878",
    "blueBlue": "#2242c7",
    "blueChalk": "#f1e9ff",
    "blueCharcoal": "#010d1a",
    "blueChill": "#0c8990",
    "blueDiamond": "#380474",
    "blueDianne": "#204852",
    "blueGem": "#2c0e8c",
    "blueGreen": "#0f9b8e",
    "blueGrey": "#758da3",
    "blueHaze": "#bfbed8",
    "blueLagoon": "#017987",
    "blueMarguerite": "#7666c6",
    "bluePurple": "#5a06ef",
    "blueRomance": "#d2f6de",
    "blueSmoke": "#748881",
    "blueStone": "#016162",
    "blueViolet": "#5d06e9",
    "blueWhale": "#042e4c",
    "blueZodiac": "#13264d",
    "blueberry": "#464196",
    "blueyGreen": "#2bb179",
    "blueyGrey": "#89a0b0",
    "blueyPurple": "#6241c7",
    "bluish": "#2976bb",
    "bluishGreen": "#10a674",
    "bluishGrey": "#748b97",
    "bluishPurple": "#703be7",
    "blumine": "#18587a",
    "blurple": "#5539cc",
    "blush": "#b44668",
    "blushPink": "#fe828c",
    "bokaraGrey": "#1c1208",
    "bombay": "#afb1b8",
    "bonJour": "#e5e0e1",
    "bondiBlue": "#02478e",
    "bone": "#e4d1c0",
    "bordeaux": "#5c0120",
    "boringGreen": "#63b365",
    "bossanova": "#4e2a5a",
    "bostonBlue": "#3b91b4",
    "botticelli": "#c7dde5",
    "bottleGreen": "#093624",
    "boulder": "#7a7a7a",
    "bouquet": "#ae809e",
    "bourbon": "#ba6f1e",
    "bracken": "#4a2a04",
    "brandy": "#dec196",
    "brandyPunch": "#cd8429",
    "brandyRose": "#bb8983",
    "brazil": "#886221",
    "breakerBay": "#5da19f",
    "brick": "#a03623",
    "brickOrange": "#c14a09",
    "brickRed": "#8f1402",
    "bridalHeath": "#fffaf4",
    "bridesmaid": "#fef0ec",
    "brightAqua": "#0bf9ea",
    "brightBlue": "#0165fc",
    "brightCyan": "#41fdfe",
    "brightGreen": "#01ff07",
    "brightGrey": "#3c4151",
    "brightLavender": "#c760ff",
    "brightLightBlue": "#26f7fd",
    "brightLightGreen": "#2dfe54",
    "brightLilac": "#c95efb",
    "brightLime": "#87fd05",
    "brightLimeGreen": "#65fe08",
    "brightMagenta": "#ff08e8",
    "brightOlive": "#9cbb04",
    "brightOrange": "#ff5b00",
    "brightPink": "#fe01b1",
    "brightPurple": "#be03fd",
    "brightRed": "#b10000",
    "brightSeaGreen": "#05ffa6",
    "brightSkyBlue": "#02ccfe",
    "brightSun": "#fed33c",
    "brightTeal": "#01f9c6",
    "brightTurquoise": "#0ffef9",
    "brightViolet": "#ad0afd",
    "brightYellow": "#fffd01",
    "brightYellowGreen": "#9dff00",
    "britishRacingGreen": "#05480d",
    "bronco": "#aba196",
    "bronze": "#3f2109",
    "bronzeOlive": "#4e420c",
    "bronzetone": "#4d400f",
    "broom": "#ffec13",
    "brown": "#653700",
    "brownBramble": "#592804",
    "brownDerby": "#492615",
    "brownGreen": "#706c11",
    "brownGrey": "#8d8468",
    "brownOrange": "#b96902",
    "brownPod": "#401801",
    "brownRed": "#922b05",
    "brownYellow": "#b29705",
    "brownish": "#9c6d57",
    "brownishGreen": "#6a6e09",
    "brownishGrey": "#86775f",
    "brownishOrange": "#cb7723",
    "brownishPink": "#c27e79",
    "brownishPurple": "#76424e",
    "brownishRed": "#9e3623",
    "brownishYellow": "#c9b003",
    "brownyGreen": "#6f6c0a",
    "brownyOrange": "#ca6b02",
    "bruise": "#7e4071",
    "bubbleGumPink": "#ff69af",
    "bubblegum": "#ff6cb5",
    "bubblegumPink": "#fe83cc",
    "bubbles": "#e7feff",
    "buccaneer": "#622f30",
    "bud": "#a8ae9c",
    "buddhaGold": "#c1a004",
    "buff": "#fef69e",
    "bulgarianRose": "#480607",
    "bullShot": "#864d1e",
    "bunker": "#0d1117",
    "bunting": "#151f4c",
    "burgundy": "#770f05",
    "burnham": "#002e20",
    "burningSand": "#d99376",
    "burntCrimson": "#65000b",
    "burntOrange": "#c04e01",
    "burntRed": "#9f2305",
    "burntSiena": "#b75203",
    "burntSienna": "#b04e0f",
    "burntUmber": "#a0450e",
    "burntYellow": "#d5ab09",
    "burple": "#6832e3",
    "bush": "#0d2e1c",
    "butter": "#ffff81",
    "butterYellow": "#fffd74",
    "buttercup": "#f3ad16",
    "butteredRum": "#a1750d",
    "butterflyBush": "#624e9a",
    "buttermilk": "#fff1b5",
    "butterscotch": "#fdb147",
    "butteryWhite": "#fffcea",
    "cabSav": "#4d0a18",
    "cabaret": "#d94972",
    "cabbagePont": "#3f4c3a",
    "cactus": "#587156",
    "cadetBlue": "#4e7496",
    "cadillac": "#b04c6a",
    "cafeRoyale": "#6f440c",
    "calico": "#e0c095",
    "california": "#fe9d04",
    "calypso": "#31728d",
    "camarone": "#00581a",
    "camel": "#c69f59",
    "camelot": "#893456",
    "cameo": "#d9b99b",
    "camo": "#7f8f4e",
    "camoGreen": "#526525",
    "camouflage": "#3c3910",
    "camouflageGreen": "#4b6113",
    "canCan": "#d591a4",
    "canary": "#f3fb62",
    "canaryYellow": "#fffe40",
    "candlelight": "#fcd917",
    "candyPink": "#ff63e9",
    "cannonPink": "#894367",
    "canvas": "#a8a589",
    "capeCod": "#3c4443",
    "capeHoney": "#fee5ac",
    "capePalliser": "#a26645",
    "caper": "#dcedb4",
    "capri": "#062a78",
    "caramel": "#ffddaf",
    "cararra": "#eeeee8",
    "cardinGreen": "#01361c",
    "cardinal": "#8c055e",
    "careysPink": "#d29eaa",
    "carissma": "#ea88a8",
    "carla": "#f3ffd8",
    "carmine": "#9d0216",
    "carnabyTan": "#5c2e01",
    "carnation": "#fd798f",
    "carnationPink": "#ff7fa7",
    "carolinaBlue": "#8ab8fe",
    "carouselPink": "#f9e0ed",
    "casablanca": "#f8b853",
    "casal": "#2f6168",
    "cascade": "#8ba9a5",
    "cashmere": "#e6bea5",
    "casper": "#adbed1",
    "castro": "#52001f",
    "catskillWhite": "#eef6f7",
    "cavernPink": "#e3bebe",
    "ceSoir": "#9771b5",
    "cedar": "#3e1c14",
    "cedarWoodFinish": "#711a00",
    "celadon": "#befdb7",
    "celery": "#b8c25d",
    "celeste": "#d1d2ca",
    "cello": "#1e385b",
    "celtic": "#163222",
    "cement": "#8d7662",
    "ceramic": "#fcfff9",
    "cerise": "#de0c62",
    "cerulean": "#0485d1",
    "ceruleanBlue": "#056eee",
    "chablis": "#fff4f3",
    "chaletGreen": "#516e3d",
    "chalky": "#eed794",
    "chambray": "#354e8c",
    "chamois": "#eddcb1",
    "champagne": "#faeccc",
    "chantilly": "#f8c3df",
    "charade": "#292937",
    "charcoal": "#343837",
    "charcoalGrey": "#3c4142",
    "chardon": "#fff3f1",
    "chardonnay": "#ffcd8c",
    "charlotte": "#baeef9",
    "charm": "#d47494",
    "chartreuse": "#c1f80a",
    "chateauGreen": "#40a860",
    "chatelle": "#bdb3c7",
    "chathamsBlue": "#175579",
    "chelseaCucumber": "#83aa5d",
    "chelseaGem": "#9e5302",
    "chenin": "#dfcd6f",
    "cherokee": "#fcda98",
    "cherry": "#cf0234",
    "cherryPie": "#2a0359",
    "cherryRed": "#f7022a",
    "cherrywood": "#651a14",
    "cherub": "#f8d9e9",
    "chestnut": "#742802",
    "chetwodeBlue": "#8581d9",
    "chicago": "#5d5c58",
    "chiffon": "#f1ffc8",
    "chileanFire": "#f77703",
    "chileanHeath": "#fffde6",
    "chinaIvory": "#fcffe7",
    "chino": "#cec7a7",
    "chinook": "#a8e3bd",
    "chocolate": "#370202",
    "chocolateBrown": "#411900",
    "christalle": "#33036b",
    "christi": "#67a712",
    "christine": "#e7730a",
    "chromeWhite": "#e8f1d4",
    "cigar": "#773f1a",
    "cinderella": "#fde1dc",
    "cinnamon": "#7b3f00",
    "cioccolato": "#55280c",
    "citrineWhite": "#faf7d6",
    "citron": "#9ea91f",
    "citrus": "#a1c50a",
    "clairvoyant": "#480656",
    "clamShell": "#d4b6af",
    "claret": "#7f1734",
    "classicRose": "#fbcce7",
    "clay": "#b66a50",
    "clayBrown": "#b2713d",
    "clayCreek": "#8a8360",
    "clearBlue": "#247afd",
    "clearDay": "#e9fffd",
    "clementine": "#e96e00",
    "clinker": "#371d09",
    "cloud": "#c7c4bf",
    "cloudBurst": "#202e54",
    "cloudy": "#aca59f",
    "cloudyBlue": "#acc2d9",
    "clover": "#384910",
    "cobaltBlue": "#030aa7",
    "cocoa": "#875f42",
    "cocoaBean": "#481c1c",
    "cocoaBrown": "#301f1e",
    "coconutCream": "#f8f7dc",
    "codGrey": "#0b0b0b",
    "coffee": "#706555",
    "coffeeBean": "#2a140e",
    "cognac": "#9f381d",
    "cola": "#3f2500",
    "coldPurple": "#aba0d9",
    "coldTurkey": "#cebaba",
    "colonialWhite": "#ffedbc",
    "comet": "#5c5d75",
    "como": "#517c66",
    "conch": "#c9d9d2",
    "concord": "#7c7b7a",
    "concrete": "#f2f2f2",
    "confetti": "#e9d75a",
    "congoBrown": "#593737",
    "conifer": "#acdd4d",
    "contessa": "#c6726b",
    "coolBlue": "#4984b8",
    "coolGreen": "#33b864",
    "coolGrey": "#95a3a6",
    "copper": "#b66325",
    "copperCanyon": "#7e3a15",
    "copperRust": "#944747",
    "coral": "#c7bca2",
    "coralCandy": "#ffdcd6",
    "coralPink": "#ff6163",
    "coralTree": "#a86b6b",
    "corduroy": "#606e68",
    "coriander": "#c4d0b0",
    "cork": "#40291d",
    "corn": "#e7bf05",
    "cornField": "#f8facd",
    "cornHarvest": "#8b6b0b",
    "cornflower": "#ffb0ac",
    "cornflowerBlue": "#5170d7",
    "corvette": "#fad3a2",
    "cosmic": "#76395d",
    "cosmos": "#ffd8d9",
    "costaDelSol": "#615d30",
    "cottonSeed": "#c2bdb6",
    "countyGreen": "#01371a",
    "coveGrey": "#051657",
    "cowboy": "#4d282d",
    "crabApple": "#a02712",
    "crail": "#b95140",
    "cranberry": "#b6316c",
    "craterBrown": "#462425",
    "cream": "#ffffc2",
    "creamBrulee": "#ffe5a0",
    "creamCan": "#f5c85c",
    "creme": "#ffffb6",
    "cremeDeBanane": "#fffc99",
    "creole": "#1e0f04",
    "crete": "#737829",
    "crimson": "#8c000f",
    "crocodile": "#736d58",
    "crownOfThorns": "#771f1f",
    "cruise": "#b5ecdf",
    "crusoe": "#004816",
    "crusta": "#fd7b33",
    "cumin": "#924321",
    "cumulus": "#fdffd5",
    "cupid": "#fbbeda",
    "curiousBlue": "#2596d1",
    "custard": "#fffd78",
    "cuttySark": "#507672",
    "cyprus": "#003e40",
    "daintree": "#012731",
    "dairyCream": "#f9e4bc",
    "daisyBush": "#4f2398",
    "dallas": "#6e4b26",
    "dandelion": "#fedf08",
    "danube": "#6093d1",
    "dark": "#1b2431",
    "darkAqua": "#05696b",
    "darkAquamarine": "#017371",
    "darkBeige": "#ac9362",
    "darkBlue": "#00035b",
    "darkBlueGreen": "#005249",
    "darkBlueGrey": "#1f3b4d",
    "darkBrown": "#341c02",
    "darkCoral": "#cf524e",
    "darkCream": "#fff39a",
    "darkCyan": "#0a888a",
    "darkEbony": "#3c2005",
    "darkForestGreen": "#002d04",
    "darkFuchsia": "#9d0759",
    "darkGold": "#b59410",
    "darkGrassGreen": "#388004",
    "darkGreen": "#033500",
    "darkGreenBlue": "#1f6357",
    "darkGrey": "#363737",
    "darkGreyBlue": "#29465b",
    "darkHotPink": "#d90166",
    "darkIndigo": "#1f0954",
    "darkKhaki": "#9b8f55",
    "darkLavender": "#856798",
    "darkLilac": "#9c6da5",
    "darkLime": "#84b701",
    "darkLimeGreen": "#7ebd01",
    "darkMagenta": "#960056",
    "darkMaroon": "#3c0008",
    "darkMauve": "#874c62",
    "darkMint": "#48c072",
    "darkMintGreen": "#20c073",
    "darkMustard": "#a88905",
    "darkNavy": "#000435",
    "darkNavyBlue": "#00022e",
    "darkOak": "#612718",
    "darkOlive": "#373e02",
    "darkOliveGreen": "#3c4d03",
    "darkOrange": "#c65102",
    "darkPastelGreen": "#56ae57",
    "darkPeach": "#de7e5d",
    "darkPeriwinkle": "#665fd1",
    "darkPink": "#cb416b",
    "darkPlum": "#3f012c",
    "darkPurple": "#35063e",
    "darkRed": "#840000",
    "darkRimu": "#5f3d26",
    "darkRose": "#b5485d",
    "darkRoyalBlue": "#02066f",
    "darkRum": "#412010",
    "darkSage": "#598556",
    "darkSalmon": "#c85a53",
    "darkSand": "#a88f59",
    "darkSeaGreen": "#11875d",
    "darkSeafoam": "#1fb57a",
    "darkSeafoamGreen": "#3eaf76",
    "darkSkyBlue": "#448ee4",
    "darkSlate": "#394851",
    "darkSlateBlue": "#214761",
    "darkTan": "#661010",
    "darkTaupe": "#7f684e",
    "darkTeal": "#014d4e",
    "darkTurquoise": "#045c5a",
    "darkViolet": "#34013f",
    "darkYellow": "#d5b60a",
    "darkYellowGreen": "#728f02",
    "darkishBlue": "#014182",
    "darkishGreen": "#287c37",
    "darkishPink": "#da467d",
    "darkishPurple": "#751973",
    "darkishRed": "#a90308",
    "dawn": "#a6a29a",
    "dawnPink": "#f3e9e5",
    "deYork": "#7ac488",
    "deco": "#d2da97",
    "deepAqua": "#08787f",
    "deepBlue": "#040273",
    "deepBlush": "#e47698",
    "deepBronze": "#4a3004",
    "deepBrown": "#410200",
    "deepCove": "#051040",
    "deepFir": "#002900",
    "deepGreen": "#02590f",
    "deepKoamaru": "#1b127b",
    "deepLavender": "#8d5eb7",
    "deepLilac": "#966ebd",
    "deepMagenta": "#a0025c",
    "deepOrange": "#dc4d01",
    "deepPink": "#cb0162",
    "deepPurple": "#36013f",
    "deepRed": "#9a0200",
    "deepRose": "#c74767",
    "deepSea": "#01826b",
    "deepSeaBlue": "#015482",
    "deepSkyBlue": "#0d75f8",
    "deepTeal": "#003532",
    "deepTurquoise": "#017374",
    "deepViolet": "#490648",
    "delRio": "#b09a95",
    "dell": "#396413",
    "delta": "#a4a49d",
    "deluge": "#7563a8",
    "denim": "#3b638c",
    "denimBlue": "#3b5b92",
    "derby": "#ffeed8",
    "desert": "#ae6020",
    "desertStorm": "#f8f8f7",
    "dew": "#eafffe",
    "diSerria": "#db995e",
    "diesel": "#130000",
    "dingley": "#5d7747",
    "dirt": "#8a6e45",
    "dirtBrown": "#836539",
    "dirtyBlue": "#3f829d",
    "dirtyGreen": "#667e2c",
    "dirtyOrange": "#c87606",
    "dirtyPink": "#ca7b80",
    "dirtyPurple": "#734a65",
    "dirtyYellow": "#cdc50a",
    "disco": "#871550",
    "dixie": "#e29418",
    "dodgerBlue": "#3e82fc",
    "dolly": "#f9ff8b",
    "dolphin": "#646077",
    "domino": "#8e775e",
    "donJuan": "#5d4c51",
    "donkeyBrown": "#a69279",
    "dorado": "#6b5755",
    "doubleColonialWhite": "#eee3ad",
    "doublePearlLusta": "#fcf4d0",
    "doubleSpanishWhite": "#e6d7b9",
    "doveGrey": "#6d6c6c",
    "downriver": "#092256",
    "downy": "#6fd0c5",
    "drabGreen": "#749551",
    "driedBlood": "#4b0101",
    "driftwood": "#af8751",
    "drover": "#fdf7ad",
    "duckEggBlue": "#c3fbf4",
    "dullBlue": "#49759c",
    "dullBrown": "#876e4b",
    "dullGreen": "#74a662",
    "dullOrange": "#d8863b",
    "dullPink": "#d5869d",
    "dullPurple": "#84597e",
    "dullRed": "#bb3f3f",
    "dullTeal": "#5f9e8f",
    "dullYellow": "#eedc5b",
    "dune": "#383533",
    "dusk": "#4e5481",
    "duskBlue": "#26538d",
    "duskyBlue": "#475f94",
    "duskyPink": "#cc7a8b",
    "duskyPurple": "#895b7b",
    "duskyRose": "#ba6873",
    "dust": "#b2996e",
    "dustStorm": "#e5ccc9",
    "dustyBlue": "#5a86ad",
    "dustyGreen": "#76a973",
    "dustyGrey": "#a8989b",
    "dustyLavender": "#ac86a8",
    "dustyOrange": "#f0833a",
    "dustyPink": "#d58a94",
    "dustyPurple": "#825f87",
    "dustyRed": "#b9484e",
    "dustyRose": "#c0737a",
    "dustyTeal": "#4c9085",
    "eagle": "#b6baa4",
    "earlsGreen": "#c9b93b",
    "earlyDawn": "#fff9e6",
    "earth": "#a2653e",
    "eastBay": "#414c7d",
    "eastSide": "#ac91ce",
    "easterGreen": "#8cfd7e",
    "easterPurple": "#c071fe",
    "easternBlue": "#1e9ab0",
    "ebb": "#e9e3e3",
    "ebony": "#0c0b1d",
    "ebonyClay": "#26283b",
    "echoBlue": "#afbdd9",
    "eclipse": "#311c17",
    "ecru": "#feffca",
    "ecruWhite": "#f5f3e5",
    "ecstasy": "#fa7814",
    "eden": "#105852",
    "edgewater": "#c8e3d7",
    "edward": "#a2aeab",
    "eggShell": "#fffcc4",
    "eggSour": "#fff4dd",
    "eggWhite": "#ffefc1",
    "eggplant": "#380835",
    "eggplantPurple": "#430541",
    "eggshellBlue": "#c4fff7",
    "elPaso": "#1e1708",
    "elSalva": "#8f3e33",
    "electricBlue": "#0652ff",
    "electricGreen": "#21fc0d",
    "electricLime": "#a8ff04",
    "electricPink": "#ff0490",
    "electricPurple": "#aa23ff",
    "elephant": "#123447",
    "elfGreen": "#088370",
    "elm": "#1c7c7d",
    "emerald": "#01a049",
    "emeraldGreen": "#028f1e",
    "eminence": "#6c3082",
    "emperor": "#514649",
    "empress": "#817377",
    "endeavour": "#0056a7",
    "energyYellow": "#f8dd5c",
    "englishHolly": "#022d15",
    "englishWalnut": "#3e2b23",
    "envy": "#8ba690",
    "equator": "#e1bc64",
    "eternity": "#211a0e",
    "eucalyptus": "#278a5b",
    "eunry": "#cfa39d",
    "eveningSea": "#024e46",
    "everglade": "#1c402e",
    "evergreen": "#05472a",
    "fadedBlue": "#658cbb",
    "fadedGreen": "#7bb274",
    "fadedOrange": "#f0944d",
    "fadedPink": "#de9dac",
    "fadedPurple": "#916e99",
    "fadedRed": "#d3494e",
    "fadedYellow": "#feff7f",
    "fairPink": "#ffefec",
    "falcon": "#7f626d",
    "fantasy": "#faf3f0",
    "fawn": "#cfaf7b",
    "fedora": "#796a78",
    "feijoa": "#9fdd8c",
    "fern": "#0a480d",
    "fernFrond": "#657220",
    "fernGreen": "#548d44",
    "ferra": "#704f50",
    "festival": "#fbe96c",
    "feta": "#f0fcea",
    "fieryOrange": "#b35213",
    "finch": "#626649",
    "finlandia": "#556d56",
    "finn": "#692d54",
    "fiord": "#405169",
    "fire": "#aa4203",
    "fireBush": "#e89928",
    "fireEngineRed": "#fe0002",
    "firefly": "#0e2a30",
    "flamePea": "#da5b38",
    "flameRed": "#c7031e",
    "flamenco": "#ff7d07",
    "flamingo": "#f2552a",
    "flatBlue": "#3c73a8",
    "flatGreen": "#699d4c",
    "flax": "#7b8265",
    "flint": "#6f6a61",
    "flirt": "#a2006d",
    "fluorescentGreen": "#08ff08",
    "fluroGreen": "#0aff02",
    "foam": "#d8fcfa",
    "foamGreen": "#90fda9",
    "fog": "#d7d0ff",
    "foggyGrey": "#cbcab6",
    "forest": "#0b5509",
    "forestGreen": "#182d09",
    "forgetMeNot": "#fff1ee",
    "forrestGreen": "#154406",
    "fountainBlue": "#56b4be",
    "frangipani": "#ffdeb3",
    "frenchBlue": "#436bad",
    "frenchGrey": "#bdbdc6",
    "frenchLilac": "#ecc7ee",
    "frenchPass": "#bdedfd",
    "freshGreen": "#69d84f",
    "friarGrey": "#807e79",
    "fringyFlower": "#b1e2c1",
    "frogGreen": "#58bc08",
    "froly": "#f57584",
    "frost": "#edf5dd",
    "frostedMint": "#dbfff8",
    "frostee": "#e4f6e7",
    "fruitSalad": "#4f9d5d",
    "fuchsia": "#ff00ff",
    "fuego": "#bede0d",
    "fuelYellow": "#eca927",
    "funBlue": "#1959a8",
    "funGreen": "#016d39",
    "fuscousGrey": "#54534d",
    "gableGreen": "#163531",
    "gallery": "#efefef",
    "galliano": "#dcb20c",
    "geebung": "#d18f1b",
    "genoa": "#15736b",
    "geraldine": "#fb8989",
    "geyser": "#d4dfe2",
    "ghost": "#c7c9d5",
    "gigas": "#523c94",
    "gimblet": "#b8b56a",
    "gin": "#e8f2eb",
    "ginFizz": "#fff9e2",
    "givry": "#f8e4bf",
    "glacier": "#80b3c4",
    "gladeGreen": "#61845f",
    "goBen": "#726d4e",
    "goblin": "#3d7d52",
    "gold": "#dbb40c",
    "goldDrop": "#f18200",
    "goldTips": "#deba13",
    "golden": "#f5bf03",
    "goldenBell": "#e28913",
    "goldenBrown": "#b27a01",
    "goldenDream": "#f0d52d",
    "goldenFizz": "#f5fb3d",
    "goldenGlow": "#fde295",
    "goldenRod": "#f9bc08",
    "goldenSand": "#f0db7d",
    "goldenTainoi": "#ffcc5c",
    "goldenYellow": "#fec615",
    "gondola": "#261414",
    "gordonsGreen": "#0b1107",
    "gorse": "#fff14f",
    "gossamer": "#069b81",
    "gossip": "#d2f8b0",
    "gothic": "#6d92a1",
    "governorBay": "#2f3cb3",
    "grainBrown": "#e4d5b7",
    "grandis": "#ffd38c",
    "graniteGreen": "#8d8974",
    "grannyApple": "#d5f6e3",
    "grannySmith": "#84a0a0",
    "grape": "#381a51",
    "grapePurple": "#5d1451",
    "grapefruit": "#fd5956",
    "graphite": "#251607",
    "grass": "#5cac2d",
    "grassGreen": "#3f9b0b",
    "grassHopper": "#7c7631",
    "grassyGreen": "#419c03",
    "gravel": "#4a444b",
    "gray": "#808080",
    "green": "#008000",
    "greenApple": "#5edc1f",
    "greenBlue": "#01c08d",
    "greenBrown": "#544e03",
    "greenGrey": "#77926f",
    "greenHouse": "#24500f",
    "greenKelp": "#25311c",
    "greenLeaf": "#436a0d",
    "greenMist": "#cbd3b0",
    "greenPea": "#1d6142",
    "greenSmoke": "#a4af6e",
    "greenSpring": "#b8c1b1",
    "greenTeal": "#0cb577",
    "greenVogue": "#032b52",
    "greenWaterloo": "#101405",
    "greenWhite": "#e8ebe0",
    "greenYellow": "#b5ce08",
    "greenish": "#40a368",
    "greenishBeige": "#c9d179",
    "greenishBlue": "#0b8b87",
    "greenishBrown": "#696112",
    "greenishCyan": "#2afeb7",
    "greenishGrey": "#96ae8d",
    "greenishTan": "#bccb7a",
    "greenishTeal": "#32bf84",
    "greenishTurquoise": "#00fbb0",
    "greenishYellow": "#cdfd02",
    "greenyBlue": "#42b395",
    "greenyBrown": "#696006",
    "greenyGrey": "#7ea07a",
    "greenyYellow": "#c6f808",
    "grenadier": "#d54600",
    "grey": "#929591",
    "greyBlue": "#647d8e",
    "greyBrown": "#7f7053",
    "greyChateau": "#a2aab3",
    "greyGreen": "#454936",
    "greyNickel": "#c3c3bd",
    "greyNurse": "#e7ece6",
    "greyOlive": "#a9a491",
    "greyPink": "#c3909b",
    "greyPurple": "#826d8c",
    "greySuit": "#c1becd",
    "greyTeal": "#5e9b8a",
    "greyish": "#a8a495",
    "greyishBlue": "#5e819d",
    "greyishBrown": "#7a6a4f",
    "greyishGreen": "#82a67d",
    "greyishPink": "#c88d94",
    "greyishPurple": "#887191",
    "greyishTeal": "#719f91",
    "guardsmanRed": "#ba0101",
    "gulfStream": "#80b3ae",
    "gullGrey": "#9dacb7",
    "gumLeaf": "#b6d3bf",
    "gumbo": "#7ca1a6",
    "gunPowder": "#414257",
    "gunmetal": "#020d15",
    "gunsmoke": "#828685",
    "gurkha": "#9a9577",
    "hacienda": "#98811b",
    "hairyHeath": "#6b2a14",
    "haiti": "#1b1035",
    "halfAndHalf": "#fffee1",
    "halfBaked": "#85c4cc",
    "halfColonialWhite": "#fdf6d3",
    "halfDutchWhite": "#fef7de",
    "halfSpanishWhite": "#fef4db",
    "hampton": "#e5d8af",
    "harp": "#e6f2ea",
    "harvestGold": "#e0b974",
    "havana": "#341515",
    "havelockBlue": "#5590d9",
    "hawaiianTan": "#9d5616",
    "hawkesBlue": "#d4e2fc",
    "hazel": "#8e7618",
    "heath": "#541012",
    "heather": "#b7c3d0",
    "heatheredGrey": "#b6b095",
    "heavyMetal": "#2b3228",
    "heliotrope": "#d94ff5",
    "hemlock": "#5e5d3b",
    "hemp": "#907874",
    "highball": "#908d39",
    "highland": "#6f8e63",
    "highlighterGreen": "#1bfc06",
    "hillary": "#aca586",
    "hintOfGreen": "#e6ffe9",
    "hintOfRed": "#f9f9f9",
    "hintOfYellow": "#fafde4",
    "hippieBlue": "#589aaf",
    "hippieGreen": "#53824b",
    "hippiePink": "#ae4560",
    "hitGrey": "#a1adb5",
    "hitPink": "#ffab81",
    "hokeyPokey": "#c8a528",
    "hoki": "#65869f",
    "holly": "#011d13",
    "honeyFlower": "#4f1c70",
    "honeysuckle": "#edfc84",
    "hopbush": "#d06da1",
    "horizon": "#5a87a0",
    "horsesNeck": "#604913",
    "hospitalGreen": "#9be5aa",
    "hotChile": "#8b0723",
    "hotGreen": "#25ff29",
    "hotMagenta": "#f504c9",
    "hotPink": "#ff028d",
    "hotToddy": "#b38007",
    "hummingBird": "#cff9f3",
    "hunterGreen": "#161d10",
    "hurricane": "#877c7b",
    "husk": "#b7a458",
    "ice": "#d6fffa",
    "iceBlue": "#d7fffe",
    "iceCold": "#b1f4e7",
    "iceberg": "#daf4f0",
    "illusion": "#f6a4c9",
    "indianRed": "#850e04",
    "indianTan": "#4d1e01",
    "indigo": "#380282",
    "indigoBlue": "#3a18b1",
    "indochine": "#c26b03",
    "iris": "#6258c4",
    "irishGreen": "#019529",
    "iroko": "#433120",
    "iron": "#d4d7d9",
    "ironbark": "#411f10",
    "ironsideGrey": "#676662",
    "ironstone": "#86483c",
    "islandSpice": "#fffcee",
    "ivory": "#ffffcb",
    "jacaranda": "#2e0329",
    "jacarta": "#3a2a6a",
    "jacksonsPurple": "#20208d",
    "jade": "#427977",
    "jadeGreen": "#2baf6a",
    "jaffa": "#ef863f",
    "jaggedIce": "#c2e8e5",
    "jagger": "#350e57",
    "jaguar": "#080110",
    "jambalaya": "#5b3013",
    "janna": "#f4ebd3",
    "japaneseLaurel": "#0a6906",
    "japaneseMaple": "#780109",
    "japonica": "#d87c63",
    "java": "#1fc2c2",
    "jellyBean": "#297b9a",
    "jetStream": "#b5d2ce",
    "jewel": "#126b40",
    "jon": "#3b1f1f",
    "jonquil": "#eeff9a",
    "jordyBlue": "#8ab9f1",
    "judgeGrey": "#544333",
    "jumbo": "#7c7b82",
    "jungleGreen": "#281e15",
    "jungleMist": "#b4cfd3",
    "juniper": "#6d9292",
    "justRight": "#eccdb9",
    "kabul": "#5e483e",
    "kaitokeGreen": "#004620",
    "kangaroo": "#c6c8bd",
    "karaka": "#1e1609",
    "karry": "#ffead4",
    "kashmirBlue": "#507096",
    "kelleyGreen": "#009337",
    "kellyGreen": "#02ab2e",
    "kenyanCopper": "#7c1c05",
    "keppel": "#3ab09e",
    "kermitGreen": "#5cb200",
    "keyLime": "#aeff6e",
    "khaki": "#aaa662",
    "khakiGreen": "#728639",
    "kidnapper": "#e1ead4",
    "kilamanjaro": "#240c02",
    "killarney": "#3a6a47",
    "kimberly": "#736c9f",
    "kingfisherDaisy": "#3e0480",
    "kiwi": "#9cef43",
    "kiwiGreen": "#8ee53f",
    "kobi": "#e79fc4",
    "kokoda": "#6e6d57",
    "korma": "#8f4b0e",
    "koromiko": "#ffbd5f",
    "kournikova": "#ffe772",
    "laPalma": "#368716",
    "laRioja": "#b3c110",
    "lasPalmas": "#c6e610",
    "laser": "#c8b568",
    "laurel": "#749378",
    "lavender": "#a899e6",
    "lavenderBlue": "#8b88f8",
    "lavenderPink": "#dd85d7",
    "lawnGreen": "#4da409",
    "leaf": "#71aa34",
    "leafGreen": "#5ca904",
    "leafyGreen": "#51b73b",
    "leather": "#967059",
    "lemon": "#f4d81c",
    "lemonGinger": "#ac9e22",
    "lemonGrass": "#9b9e8f",
    "lemonGreen": "#adf802",
    "lemonLime": "#bffe28",
    "lemonYellow": "#fdff38",
    "lichen": "#8fb67b",
    "lightAqua": "#8cffdb",
    "lightAquamarine": "#7bfdc7",
    "lightBeige": "#fffeb6",
    "lightBlue": "#95d0fc",
    "lightBlueGreen": "#7efbb3",
    "lightBlueGrey": "#b7c9e2",
    "lightBluishGreen": "#76fda8",
    "lightBrightGreen": "#53fe5c",
    "lightBrown": "#ad8150",
    "lightBurgundy": "#a8415b",
    "lightCyan": "#acfffc",
    "lightEggplant": "#894585",
    "lightForestGreen": "#4f9153",
    "lightGold": "#fddc5c",
    "lightGrassGreen": "#9af764",
    "lightGreen": "#96f97b",
    "lightGreenBlue": "#56fca2",
    "lightGreenishBlue": "#63f7b4",
    "lightGrey": "#d8dcd6",
    "lightGreyBlue": "#9dbcd4",
    "lightGreyGreen": "#b7e1a1",
    "lightIndigo": "#6d5acf",
    "lightKhaki": "#e6f2a2",
    "lightLavendar": "#efc0fe",
    "lightLavender": "#dfc5fe",
    "lightLightBlue": "#cafffb",
    "lightLightGreen": "#c8ffb0",
    "lightLilac": "#edc8ff",
    "lightLime": "#aefd6c",
    "lightLimeGreen": "#b9ff66",
    "lightMagenta": "#fa5ff7",
    "lightMaroon": "#a24857",
    "lightMauve": "#c292a1",
    "lightMint": "#b6ffbb",
    "lightMintGreen": "#a6fbb2",
    "lightMossGreen": "#a6c875",
    "lightMustard": "#f7d560",
    "lightNavy": "#155084",
    "lightNavyBlue": "#2e5a88",
    "lightNeonGreen": "#4efd54",
    "lightOlive": "#acbf69",
    "lightOliveGreen": "#a4be5c",
    "lightOrange": "#fdaa48",
    "lightPastelGreen": "#b2fba5",
    "lightPeaGreen": "#c4fe82",
    "lightPeach": "#ffd8b1",
    "lightPeriwinkle": "#c1c6fc",
    "lightPink": "#ffd1df",
    "lightPlum": "#9d5783",
    "lightPurple": "#bf77f6",
    "lightRed": "#ff474c",
    "lightRose": "#ffc5cb",
    "lightRoyalBlue": "#3a2efe",
    "lightSage": "#bcecac",
    "lightSalmon": "#fea993",
    "lightSeaGreen": "#98f6b0",
    "lightSeafoam": "#a0febf",
    "lightSeafoamGreen": "#a7ffb5",
    "lightSkyBlue": "#c6fcff",
    "lightTan": "#fbeeac",
    "lightTeal": "#90e4c1",
    "lightTurquoise": "#7ef4cc",
    "lightUrple": "#b36ff6",
    "lightViolet": "#d6b4fc",
    "lightYellow": "#fffe7a",
    "lightYellowGreen": "#ccfd7f",
    "lightYellowishGreen": "#c2ff89",
    "lighterGreen": "#75fd63",
    "lighterPurple": "#a55af4",
    "lightishBlue": "#3d7afd",
    "lightishGreen": "#61e160",
    "lightishPurple": "#a552e6",
    "lightishRed": "#fe2f4a",
    "lightningYellow": "#fcc01e",
    "lilac": "#cea2fd",
    "lilacBush": "#9874d3",
    "liliac": "#c48efd",
    "lily": "#c8aabf",
    "lilyWhite": "#e7f8ff",
    "lima": "#76bd17",
    "lime": "#00ff00",
    "limeGreen": "#89fe05",
    "limeYellow": "#d0fe1d",
    "limeade": "#6f9d02",
    "limedAsh": "#747d63",
    "limedGum": "#423921",
    "limedOak": "#ac8a56",
    "limerick": "#9dc209",
    "linen": "#e6e4d4",
    "linkWater": "#d9e4f5",
    "lipstick": "#ab0563",
    "lipstickRed": "#c0022f",
    "lividBrown": "#4d282e",
    "loafer": "#eef4de",
    "loblolly": "#bdc9ce",
    "lochinvar": "#2c8c84",
    "lochmara": "#007ec7",
    "locust": "#a8af8e",
    "logCabin": "#242a1d",
    "logan": "#aaa9cd",
    "lola": "#dfcfdb",
    "londonHue": "#bea6c3",
    "lonestar": "#6d0101",
    "lotus": "#863c3c",
    "loulou": "#460b41",
    "lucky": "#af9f1c",
    "luckyPoint": "#1a1a68",
    "lunarGreen": "#3c493a",
    "lusty": "#991b07",
    "luxorGold": "#a7882c",
    "lynch": "#697e9a",
    "mabel": "#d9f7ff",
    "macaroniAndCheese": "#efb435",
    "madang": "#b7f0be",
    "madison": "#09255d",
    "madras": "#3f3002",
    "magenta": "#c20078",
    "magnolia": "#f8f4ff",
    "mahogany": "#4e0606",
    "maiTai": "#b06608",
    "maize": "#f5d5a0",
    "makara": "#897d6d",
    "mako": "#444954",
    "malibu": "#7dc8f7",
    "mallard": "#233418",
    "malta": "#bdb2a1",
    "mamba": "#8e8190",
    "mandalay": "#ad781b",
    "mandy": "#e25465",
    "mandysPink": "#f2c3b2",
    "mango": "#ffa62b",
    "manhattan": "#f5c999",
    "manilla": "#fffa86",
    "mantis": "#74c365",
    "mantle": "#8b9c90",
    "manz": "#eeef78",
    "mardiGras": "#350036",
    "marigold": "#b98d28",
    "marine": "#042e60",
    "marineBlue": "#01386a",
    "mariner": "#286acd",
    "maroon": "#800000",
    "marshland": "#0b0f08",
    "martini": "#afa09e",
    "martinique": "#363050",
    "marzipan": "#f8db9d",
    "masala": "#403b38",
    "matisse": "#1b659d",
    "matrix": "#b05d54",
    "matterhorn": "#4e3b41",
    "mauve": "#ae7181",
    "maverick": "#d8c2d5",
    "mediumBlue": "#2c6fbb",
    "mediumBrown": "#7f5112",
    "mediumGreen": "#39ad48",
    "mediumGrey": "#7d7f7c",
    "mediumPink": "#f36196",
    "mediumPurple": "#9e43a2",
    "melanie": "#e4c2d5",
    "melanzane": "#300529",
    "melon": "#ff7855",
    "melrose": "#c7c1ff",
    "meranti": "#5d1e0f",
    "mercury": "#e5e5e5",
    "merino": "#f6f0e6",
    "merlin": "#413c37",
    "merlot": "#831923",
    "metallicBlue": "#4f738e",
    "metallicBronze": "#49371b",
    "metallicCopper": "#71291d",
    "meteor": "#d07d12",
    "meteorite": "#3c1f76",
    "mexicanRed": "#a72525",
    "midBlue": "#276ab3",
    "midGreen": "#50a747",
    "midGrey": "#5f5f6e",
    "midnight": "#011635",
    "midnightBlue": "#020035",
    "midnightExpress": "#000741",
    "midnightMoss": "#041004",
    "midnightPurple": "#280137",
    "mikado": "#2d2510",
    "milan": "#faffa4",
    "milanoRed": "#b81104",
    "militaryGreen": "#667c3e",
    "milkChocolate": "#7f4e1e",
    "milkPunch": "#fff6d4",
    "millbrook": "#594433",
    "mimosa": "#f8fdd3",
    "mindaro": "#e3f988",
    "mineShaft": "#323232",
    "mineralGreen": "#3f5d53",
    "ming": "#36747d",
    "minsk": "#3f307f",
    "mint": "#9ffeb0",
    "mintGreen": "#8fff9f",
    "mintJulep": "#f1eec1",
    "mintTulip": "#c4f4eb",
    "mintyGreen": "#0bf77d",
    "mirage": "#161928",
    "mischka": "#d1d2dd",
    "mistGrey": "#c4c4bc",
    "mobster": "#7f7589",
    "moccaccino": "#6e1d14",
    "mocha": "#782d19",
    "mojo": "#c04737",
    "monaLisa": "#ffa194",
    "mondo": "#4a3c30",
    "mongoose": "#b5a27f",
    "monsoon": "#8a8389",
    "montana": "#291e30",
    "monteCarlo": "#83d0c6",
    "moodyBlue": "#7f76d3",
    "moonGlow": "#fcfeda",
    "moonMist": "#dcddcc",
    "moonRaker": "#d6cef6",
    "morningGlory": "#9edee0",
    "moroccoBrown": "#441d00",
    "mortar": "#504351",
    "mosque": "#036a6e",
    "moss": "#769958",
    "mossGreen": "#658b38",
    "mossyGreen": "#638b27",
    "mountainMist": "#959396",
    "mud": "#735c12",
    "mudBrown": "#60460f",
    "mudGreen": "#606602",
    "muddyBrown": "#886806",
    "muddyGreen": "#657432",
    "muddyWaters": "#b78e5c",
    "muddyYellow": "#bfac05",
    "muesli": "#aa8b5b",
    "mulberry": "#5c0536",
    "muleFawn": "#8c472f",
    "mulledWine": "#4e4562",
    "murkyGreen": "#6c7a0e",
    "mushroom": "#ba9e88",
    "mustard": "#74640d",
    "mustardBrown": "#ac7e04",
    "mustardGreen": "#a8b504",
    "mustardYellow": "#d2bd0a",
    "mutedBlue": "#3b719f",
    "mutedGreen": "#5fa052",
    "mutedPink": "#d1768f",
    "mutedPurple": "#805b87",
    "myPink": "#d69188",
    "mySin": "#ffb31f",
    "mystic": "#e2ebed",
    "nandor": "#4b5d52",
    "napa": "#aca494",
    "narvik": "#edf9f1",
    "navy": "#000080",
    "navyBlue": "#001146",
    "navyGreen": "#35530a",
    "nebula": "#cbdbd6",
    "negroni": "#ffe2c5",
    "neonBlue": "#04d9ff",
    "neonGreen": "#0cff0c",
    "neonPink": "#fe019a",
    "neonPurple": "#bc13fe",
    "neonRed": "#ff073a",
    "neonYellow": "#cfff04",
    "nepal": "#8eabc1",
    "neptune": "#7cb7bb",
    "nero": "#140600",
    "nevada": "#646e75",
    "newAmber": "#7b3801",
    "newOrleans": "#f3d69d",
    "newYorkPink": "#d7837f",
    "niagara": "#06a189",
    "niceBlue": "#107ab0",
    "nightBlue": "#040348",
    "nightRider": "#1f120f",
    "nightShadz": "#aa375a",
    "nightclub": "#660045",
    "nileBlue": "#193751",
    "nobel": "#b7b1b1",
    "nomad": "#bab1a2",
    "norway": "#a8bd9f",
    "nugget": "#c59922",
    "nutmeg": "#81422c",
    "nutmegWoodFinish": "#683600",
    "oasis": "#feefce",
    "observatory": "#02866f",
    "ocean": "#017b92",
    "oceanBlue": "#03719c",
    "oceanGreen": "#41aa78",
    "ocher": "#bf9b0c",
    "ochre": "#bf9005",
    "ocre": "#c69c04",
    "offBlue": "#5684ae",
    "offGreen": "#e6f8f3",
    "offWhite": "#ffffe4",
    "offYellow": "#fef9e3",
    "oldBrick": "#901e1e",
    "oldCopper": "#724a2f",
    "oldPink": "#c77986",
    "oldRose": "#c87f89",
    "olive": "#808000",
    "oliveBrown": "#645403",
    "oliveDrab": "#6f7632",
    "oliveGreen": "#242e16",
    "oliveHaze": "#8b8470",
    "oliveYellow": "#c2b709",
    "olivetone": "#716e10",
    "onahau": "#cdf4ff",
    "onion": "#2f270e",
    "opal": "#a9c6c2",
    "opium": "#8e6f70",
    "oracle": "#377475",
    "orange": "#f97306",
    "orangeBrown": "#be6400",
    "orangePink": "#ff6f52",
    "orangeRed": "#fd411e",
    "orangeRoughy": "#c45719",
    "orangeWhite": "#fefced",
    "orangeYellow": "#ffad01",
    "orangeish": "#fd8d49",
    "orangeyBrown": "#b16002",
    "orangeyRed": "#fa4224",
    "orangeyYellow": "#fdb915",
    "orangish": "#fc824a",
    "orangishBrown": "#b25f03",
    "orangishRed": "#f43605",
    "orchid": "#c875c4",
    "orchidWhite": "#fffdf3",
    "orient": "#015e85",
    "orientalPink": "#c69191",
    "orinoco": "#f3fbd4",
    "osloGrey": "#878d91",
    "ottoman": "#e9f8ed",
    "oxfordBlue": "#384555",
    "oxley": "#779e86",
    "oysterBay": "#dafaff",
    "oysterPink": "#e9cecd",
    "paarl": "#a65529",
    "pablo": "#776f61",
    "pacifika": "#778120",
    "padua": "#ade6c4",
    "pale": "#fff9d0",
    "paleAqua": "#b8ffeb",
    "paleBlue": "#d0fefe",
    "paleBrown": "#b1916e",
    "paleCyan": "#b7fffa",
    "paleGold": "#fdde6c",
    "paleGreen": "#c7fdb5",
    "paleGrey": "#fdfdfe",
    "paleLavender": "#eecffe",
    "paleLeaf": "#c0d3b9",
    "paleLightGreen": "#b1fc99",
    "paleLilac": "#e4cbff",
    "paleLime": "#befd73",
    "paleLimeGreen": "#b1ff65",
    "paleMagenta": "#d767ad",
    "paleMauve": "#fed0fc",
    "paleOlive": "#b9cc81",
    "paleOliveGreen": "#b1d27b",
    "paleOrange": "#ffa756",
    "paleOyster": "#988d77",
    "palePeach": "#ffe5ad",
    "palePink": "#ffcfdc",
    "palePrim": "#fdfeb8",
    "palePurple": "#b790d4",
    "paleRed": "#d9544d",
    "paleRose": "#ffe1f2",
    "paleSalmon": "#ffb19a",
    "paleSky": "#6e7783",
    "paleSkyBlue": "#bdf6fe",
    "paleSlate": "#c3bfc1",
    "paleTeal": "#82cbb2",
    "paleTurquoise": "#a5fbd5",
    "paleViolet": "#ceaefa",
    "paleYellow": "#ffff84",
    "palmGreen": "#09230f",
    "palmLeaf": "#19330e",
    "pampas": "#f4f2ee",
    "panache": "#eaf6ee",
    "pancho": "#edcdab",
    "paprika": "#8d0226",
    "paradiso": "#317d82",
    "parchment": "#f1e9d2",
    "parisDaisy": "#fff46e",
    "parisM": "#26056a",
    "parisWhite": "#cadcd4",
    "parsley": "#134f19",
    "pastelBlue": "#a2bffe",
    "pastelGreen": "#b0ff9d",
    "pastelOrange": "#ff964f",
    "pastelPink": "#ffbacd",
    "pastelPurple": "#caa0ff",
    "pastelRed": "#db5856",
    "pastelYellow": "#fffe71",
    "patina": "#639a8f",
    "pattensBlue": "#def5ff",
    "paua": "#260368",
    "pavlova": "#d7c498",
    "pea": "#a4bf20",
    "peaGreen": "#8eab12",
    "peaSoup": "#cfe5d2",
    "peaSoupGreen": "#94a617",
    "peach": "#fff0db",
    "peachyPink": "#ff9a8a",
    "peacockBlue": "#016795",
    "peanut": "#782f16",
    "pear": "#cbf85f",
    "pearlBush": "#e8e0d5",
    "pearlLusta": "#fcf4dc",
    "peat": "#716b56",
    "pelorous": "#3eabbf",
    "peppermint": "#e3f5e1",
    "perano": "#a9bef2",
    "perfume": "#d0bef8",
    "periglacialBlue": "#e1e6d6",
    "periwinkle": "#8e82fe",
    "periwinkleBlue": "#8f99fb",
    "perrywinkle": "#8f8ce7",
    "persianPlum": "#701c1c",
    "persianRed": "#520c17",
    "persimmon": "#ff6b53",
    "peruTan": "#7f3a02",
    "petiteOrchid": "#db9690",
    "petrol": "#005f6a",
    "pewter": "#96a8a1",
    "pharlap": "#a3807b",
    "picasso": "#fff39d",
    "pickledBean": "#6e4826",
    "pictonBlue": "#45b1e8",
    "pigPink": "#e78ea5",
    "pine": "#2b5d34",
    "pineCone": "#6d5e54",
    "pineGlade": "#c7cd90",
    "pineGreen": "#0a481e",
    "pineTree": "#171f04",
    "pink": "#ff81c0",
    "pinkFlare": "#e1c0c8",
    "pinkLace": "#ffddf4",
    "pinkLady": "#fff1d8",
    "pinkPurple": "#ef1de7",
    "pinkRed": "#f5054f",
    "pinkSwan": "#beb5b7",
    "pinkish": "#d46a7e",
    "pinkishBrown": "#b17261",
    "pinkishGrey": "#c8aca9",
    "pinkishOrange": "#ff724c",
    "pinkishPurple": "#d648d7",
    "pinkishRed": "#f10c45",
    "pinkishTan": "#d99b82",
    "pinky": "#fc86aa",
    "pinkyPurple": "#c94cbe",
    "pinkyRed": "#fc2647",
    "piper": "#c96323",
    "pipi": "#fef4cc",
    "pippin": "#ffe1df",
    "pirateGold": "#ba7f03",
    "pixieGreen": "#c0d8b6",
    "pizazz": "#ff9000",
    "pizza": "#c99415",
    "plantation": "#27504b",
    "plum": "#410056",
    "plumPurple": "#4e0550",
    "pohutukawa": "#8f021c",
    "poisonGreen": "#40fd14",
    "polar": "#e5f9f6",
    "poloBlue": "#8da8cc",
    "porcelain": "#eff2f3",
    "porsche": "#eaae69",
    "portGore": "#251f4f",
    "portafino": "#ffffb4",
    "portage": "#8b9fee",
    "portica": "#f9e663",
    "potPourri": "#f5e7e2",
    "pottersClay": "#8c5738",
    "powderBlue": "#bcc9c2",
    "powderPink": "#ffb2d0",
    "prairieSand": "#9a3820",
    "prelude": "#d0c0e5",
    "prim": "#f0e2ec",
    "primaryBlue": "#0804f9",
    "primrose": "#edea99",
    "provincialPink": "#fef5f1",
    "prussianBlue": "#003153",
    "puce": "#a57e52",
    "pueblo": "#7d2c14",
    "puertoRico": "#3fc1aa",
    "pumice": "#c2cac4",
    "pumpkin": "#b1610b",
    "pumpkinOrange": "#fb7d07",
    "punch": "#dc4333",
    "punga": "#4d3d14",
    "pureBlue": "#0203e2",
    "purple": "#800080",
    "purpleBlue": "#5d21d0",
    "purpleBrown": "#673a3f",
    "purpleGrey": "#866f85",
    "purplePink": "#d725de",
    "purpleRed": "#990147",
    "purpleish": "#98568d",
    "purpleishBlue": "#6140ef",
    "purpleishPink": "#df4ec8",
    "purpley": "#8756e4",
    "purpleyBlue": "#5f34e7",
    "purpleyGrey": "#947e94",
    "purpleyPink": "#c83cb9",
    "purplish": "#94568c",
    "purplishBlue": "#601ef9",
    "purplishBrown": "#6b4247",
    "purplishGrey": "#7a687f",
    "purplishPink": "#ce5dae",
    "purplishRed": "#b0054b",
    "purply": "#983fb2",
    "purplyBlue": "#661aee",
    "purplyPink": "#f075e6",
    "putty": "#e7cd8c",
    "quarterPearlLusta": "#fffdf4",
    "quarterSpanishWhite": "#f7f2e1",
    "quicksand": "#bd978e",
    "quillGrey": "#d6d6d1",
    "quincy": "#623f2d",
    "racingGreen": "#0c1911",
    "radioactiveGreen": "#2cfa1f",
    "raffia": "#eadab8",
    "raincloud": "#7b7c94",
    "rainee": "#b9c8ac",
    "rajah": "#f7b668",
    "rangitoto": "#2e3222",
    "rangoonGreen": "#1c1e13",
    "raspberry": "#b00149",
    "raven": "#727b89",
    "rawSienna": "#9a6200",
    "rawUmber": "#a75e09",
    "reallyLightBlue": "#d4ffff",
    "rebel": "#3c1206",
    "red": "#ff0000",
    "redBerry": "#8e0000",
    "redBrown": "#8b2e16",
    "redDamask": "#da6a41",
    "redDevil": "#860111",
    "redOrange": "#fd3c06",
    "redOxide": "#6e0902",
    "redPink": "#fa2a55",
    "redPurple": "#820747",
    "redRobin": "#80341f",
    "redStage": "#d05f04",
    "redViolet": "#9e0168",
    "redWine": "#8c0034",
    "reddish": "#c44240",
    "reddishBrown": "#7f2b0a",
    "reddishGrey": "#997570",
    "reddishOrange": "#f8481c",
    "reddishPink": "#fe2c54",
    "reddishPurple": "#910951",
    "reddyBrown": "#6e1005",
    "reef": "#c9ffa2",
    "reefGold": "#9f821c",
    "regalBlue": "#013f6a",
    "regentGrey": "#86949f",
    "regentStBlue": "#aad6e6",
    "remy": "#feebf3",
    "renoSand": "#a86515",
    "resolutionBlue": "#002387",
    "revolver": "#2c1632",
    "rhino": "#2e3f62",
    "riceCake": "#fffef0",
    "riceFlower": "#eeffe2",
    "richBlue": "#021bf9",
    "richGold": "#a85307",
    "richPurple": "#720058",
    "rioGrande": "#bbd009",
    "riptide": "#8be6d8",
    "riverBed": "#434c59",
    "robRoy": "#eac674",
    "robinEggBlue": "#8af1fe",
    "robinSEgg": "#6dedfd",
    "robinSEggBlue": "#98eff9",
    "robinsEggBlue": "#bdc8b3",
    "rock": "#4d3833",
    "rockBlue": "#9eb1cd",
    "rockSpray": "#ba450c",
    "rodeoDust": "#c9b29b",
    "rollingStone": "#747d83",
    "roman": "#de6360",
    "romanCoffee": "#795d4c",
    "romance": "#fffefd",
    "romantic": "#ffd2b7",
    "ronchi": "#ecc54e",
    "roofTerracotta": "#a62f20",
    "rope": "#8e4d1e",
    "rosa": "#fe86a4",
    "rose": "#e7bcb4",
    "roseBud": "#fbb2a3",
    "roseBudCherry": "#800b47",
    "roseOfSharon": "#bf5500",
    "rosePink": "#f7879a",
    "roseRed": "#be013c",
    "roseWhite": "#fff6f5",
    "rosyPink": "#f6688e",
    "roti": "#c6a84b",
    "rouge": "#a23b6c",
    "royal": "#0c1793",
    "royalBlue": "#0504aa",
    "royalHeath": "#ab3472",
    "royalPurple": "#4b006e",
    "ruby": "#ca0147",
    "rum": "#796989",
    "rumSwizzle": "#f9f8e4",
    "russet": "#a13905",
    "russett": "#755a57",
    "rust": "#a83c09",
    "rustBrown": "#8b3103",
    "rustOrange": "#c45508",
    "rustRed": "#aa2704",
    "rusticRed": "#480404",
    "rustyOrange": "#cd5909",
    "rustyRed": "#af2f0d",
    "saddle": "#4c3024",
    "saddleBrown": "#583401",
    "saffron": "#f9bf58",
    "sage": "#9ea587",
    "sageGreen": "#88b378",
    "sahara": "#b7a214",
    "sail": "#b8e0f9",
    "salem": "#097f4b",
    "salmon": "#ff796c",
    "salmonPink": "#fe7b7c",
    "salomie": "#fedb8d",
    "saltBox": "#685e6e",
    "saltpan": "#f1f7f2",
    "sambuca": "#3a2010",
    "sanFelix": "#0b6207",
    "sanJuan": "#304b6a",
    "sanMarino": "#456cac",
    "sand": "#e2ca76",
    "sandBrown": "#cba560",
    "sandDune": "#826f65",
    "sandYellow": "#fce166",
    "sandal": "#aa8d6f",
    "sandrift": "#ab917a",
    "sandstone": "#796d62",
    "sandwisp": "#f5e7a2",
    "sandy": "#f1da7a",
    "sandyBeach": "#ffeac8",
    "sandyBrown": "#c4a661",
    "sandyYellow": "#fdee73",
    "sangria": "#92000a",
    "sanguineBrown": "#8d3d38",
    "santaFe": "#b16d52",
    "santasGrey": "#9fa0b1",
    "sapGreen": "#5c8b15",
    "sapling": "#ded4a4",
    "sapphire": "#2f519e",
    "saratoga": "#555b10",
    "sauvignon": "#fff5f3",
    "sazerac": "#fff4e0",
    "scampi": "#675fa6",
    "scandal": "#cffaf4",
    "scarlet": "#be0119",
    "scarletGum": "#431560",
    "scarlett": "#950015",
    "scarpaFlow": "#585562",
    "schist": "#a9b497",
    "schooner": "#8b847e",
    "scooter": "#2ebfd4",
    "scorpion": "#695f62",
    "scotchMist": "#fffbdc",
    "sea": "#3c9992",
    "seaBlue": "#047495",
    "seaBuckthorn": "#fba129",
    "seaGreen": "#095859",
    "seaMist": "#c5dbca",
    "seaNymph": "#78a39c",
    "seaPink": "#ed989e",
    "seafoam": "#80f9ad",
    "seafoamBlue": "#78d1b6",
    "seafoamGreen": "#7af9ab",
    "seagull": "#80ccea",
    "seance": "#731e8f",
    "seashell": "#f1f1f1",
    "seaweed": "#1b2f11",
    "seaweedGreen": "#35ad6b",
    "selago": "#f0eefd",
    "sepia": "#2b0202",
    "serenade": "#fff4e8",
    "shadowGreen": "#9ac2b8",
    "shadyLady": "#aaa5a9",
    "shakespeare": "#4eabd1",
    "shalimar": "#fbffba",
    "shamrock": "#01b44c",
    "shamrockGreen": "#02c14d",
    "shark": "#25272c",
    "sherpaBlue": "#004950",
    "sherwoodGreen": "#02402c",
    "shilo": "#e8b9b3",
    "shingleFawn": "#6b4e31",
    "shipCove": "#788bba",
    "shipGrey": "#3e3a44",
    "shiraz": "#b20931",
    "shocking": "#e292c0",
    "shockingPink": "#fe02a2",
    "shuttleGrey": "#5f6672",
    "siam": "#646a54",
    "sidecar": "#f3e7bb",
    "sienna": "#a9561e",
    "silk": "#bdb1a8",
    "silver": "#c0c0c0",
    "silverChalice": "#acacac",
    "silverSand": "#bfc1c2",
    "silverTree": "#66b58f",
    "sinbad": "#9fd7d3",
    "siren": "#7a013a",
    "sirocco": "#718080",
    "sisal": "#d3cbba",
    "skeptic": "#cae6da",
    "sky": "#82cafc",
    "skyBlue": "#75bbfd",
    "slate": "#516572",
    "slateBlue": "#5b7c99",
    "slateGreen": "#658d6d",
    "slateGrey": "#59656d",
    "slimeGreen": "#99cc04",
    "smaltBlue": "#51808f",
    "smoky": "#605b73",
    "snowDrift": "#f7faf7",
    "snowFlurry": "#e4ffd1",
    "snowyMint": "#d6ffdb",
    "snuff": "#e2d8ed",
    "soapstone": "#fffbf9",
    "softAmber": "#d1c6b4",
    "softBlue": "#6488ea",
    "softGreen": "#6fc276",
    "softPeach": "#f5edef",
    "softPink": "#fdb0c0",
    "softPurple": "#a66fb5",
    "solidPink": "#893843",
    "solitaire": "#fef8e2",
    "solitude": "#eaf6ff",
    "sorbus": "#fd7c07",
    "sorrellBrown": "#ceb98f",
    "sourDough": "#d1bea8",
    "soyaBean": "#6a6051",
    "spanishGreen": "#819885",
    "spearmint": "#1ef876",
    "spectra": "#2f5a57",
    "spice": "#6a442e",
    "spicyMix": "#885342",
    "spicyPink": "#816e71",
    "spindle": "#b6d1ea",
    "spray": "#79deec",
    "springGreen": "#578363",
    "springRain": "#accbb1",
    "springSun": "#f6ffdc",
    "springWood": "#f8f6f1",
    "sprout": "#c1d7b0",
    "spruce": "#0a5f38",
    "spunPearl": "#aaabb7",
    "squash": "#f2ab15",
    "squirrel": "#8f8176",
    "stTropaz": "#2d569b",
    "stack": "#8a8f8a",
    "starDust": "#9f9f9c",
    "starkWhite": "#e5d7bd",
    "starship": "#ecf245",
    "steel": "#738595",
    "steelBlue": "#5a7d9a",
    "steelGrey": "#262335",
    "stiletto": "#9c3336",
    "stone": "#ada587",
    "stonewall": "#928573",
    "stormDust": "#646463",
    "stormGrey": "#717486",
    "stormyBlue": "#507b9c",
    "straw": "#d4bf8d",
    "strawberry": "#fb2943",
    "strikemaster": "#956387",
    "stromboli": "#325d52",
    "strongBlue": "#0c06f7",
    "strongPink": "#ff0789",
    "studio": "#714ab2",
    "submarine": "#bac7c9",
    "sugarCane": "#f9fff6",
    "sulu": "#c1f07c",
    "summerGreen": "#96bbab",
    "sun": "#fbac13",
    "sunYellow": "#ffdf22",
    "sundance": "#c9b35b",
    "sundown": "#ffb1b3",
    "sunflower": "#e4d422",
    "sunflowerYellow": "#ffda03",
    "sunglo": "#e16865",
    "sunnyYellow": "#fff917",
    "sunshade": "#ff9e2c",
    "sunshineYellow": "#fffd37",
    "supernova": "#ffc901",
    "surf": "#bbd7c1",
    "surfieGreen": "#0c7a79",
    "sushi": "#87ab39",
    "suvaGrey": "#888387",
    "swamp": "#001b1c",
    "swampGreen": "#748500",
    "swansDown": "#dcf0ea",
    "sweetCorn": "#fbea8c",
    "sweetPink": "#fd9fa2",
    "swirl": "#d3cdc5",
    "swissCoffee": "#ddd6d5",
    "tacao": "#edb381",
    "tacha": "#d6c562",
    "tahitiGold": "#e97c07",
    "tahunaSands": "#eef0c8",
    "tallPoppy": "#b32d29",
    "tamarillo": "#991613",
    "tan": "#d1b26f",
    "tanBrown": "#ab7e4c",
    "tanGreen": "#a9be70",
    "tana": "#d9dcc1",
    "tangaroa": "#03163c",
    "tango": "#ed7a1c",
    "tapa": "#7b7874",
    "tapestry": "#b05e81",
    "tara": "#e1f6e8",
    "tarawera": "#073a50",
    "tasman": "#cfdccf",
    "taupe": "#b9a281",
    "taupeGrey": "#b3af95",
    "tawnyPort": "#692545",
    "tePapaGreen": "#1e433c",
    "tea": "#c1bab0",
    "teaGreen": "#bdf8a3",
    "teak": "#b19461",
    "teal": "#008080",
    "tealBlue": "#044259",
    "tealGreen": "#25a36f",
    "tealish": "#24bca8",
    "tealishGreen": "#0cdc73",
    "temptress": "#3b000b",
    "tequila": "#ffe6c7",
    "terraCotta": "#c9643b",
    "terracota": "#cb6843",
    "texas": "#f8f99c",
    "texasRose": "#ffb555",
    "thatch": "#b69d98",
    "thatchGreen": "#403d19",
    "thistle": "#cccaa8",
    "thunder": "#33292f",
    "thunderbird": "#c02b18",
    "tiaMaria": "#c1440e",
    "tiara": "#c3d1d1",
    "tiber": "#063537",
    "tidal": "#f1ffad",
    "tide": "#bfb8b0",
    "tiffanyBlue": "#7bf2da",
    "timberGreen": "#16322c",
    "titanWhite": "#f0eeff",
    "toast": "#9a6e61",
    "tobaccoBrown": "#715d47",
    "toledo": "#3a0020",
    "tolopea": "#1b0245",
    "tomThumb": "#3f583b",
    "tomato": "#ef4026",
    "tomatoRed": "#ec2d01",
    "tonysPink": "#e79f8c",
    "topaz": "#7c778a",
    "toreaBay": "#0f2d9e",
    "toryBlue": "#1450aa",
    "tosca": "#8d3f3f",
    "toupe": "#c7ac7d",
    "towerGrey": "#a9bdbf",
    "toxicGreen": "#61de2a",
    "tradewind": "#5fb3ac",
    "tranquil": "#e6ffff",
    "travertine": "#fffde8",
    "treeGreen": "#2a7e19",
    "treePoppy": "#fc9c1d",
    "treehouse": "#3b2820",
    "trendyGreen": "#7c881a",
    "trendyPink": "#8c6495",
    "trinidad": "#e64e03",
    "tropicalBlue": "#c3ddf9",
    "trout": "#4a4e5a",
    "trueBlue": "#010fcc",
    "trueGreen": "#089404",
    "trueV": "#8a73d6",
    "tuatara": "#363534",
    "tuftBush": "#ffddcd",
    "tulipTree": "#eab33b",
    "tumbleweed": "#37290e",
    "tuna": "#353542",
    "tundora": "#4a4244",
    "turbo": "#fae600",
    "turkishRose": "#b57281",
    "turmeric": "#cabb48",
    "turquoise": "#06c2ac",
    "turquoiseBlue": "#06b1c4",
    "turquoiseGreen": "#04f489",
    "turtleGreen": "#2a380b",
    "tuscany": "#bd5e2e",
    "tusk": "#eef3c3",
    "tussock": "#c5994b",
    "tutu": "#fff1f9",
    "twilight": "#e4cfde",
    "twilightBlue": "#eefdff",
    "twine": "#c2955d",
    "ultramarine": "#2000b1",
    "ultramarineBlue": "#1805db",
    "umber": "#b26400",
    "valencia": "#d84437",
    "valentino": "#350e42",
    "valhalla": "#2b194f",
    "vanCleef": "#49170c",
    "vanillaIce": "#f3d9df",
    "varden": "#fff6df",
    "velvet": "#750851",
    "venetianRed": "#72010f",
    "veniceBlue": "#055989",
    "venus": "#928590",
    "verdigris": "#5d5e37",
    "verdunGreen": "#495400",
    "vermillion": "#f4320c",
    "veryDarkBlue": "#000133",
    "veryDarkBrown": "#1d0200",
    "veryDarkGreen": "#062e03",
    "veryDarkPurple": "#2a0134",
    "veryLightBlue": "#d5ffff",
    "veryLightBrown": "#d3b683",
    "veryLightGreen": "#d1ffbd",
    "veryLightPink": "#fff4f2",
    "veryLightPurple": "#f6cefc",
    "veryPaleBlue": "#d6fffe",
    "veryPaleGreen": "#cffdbc",
    "vesuvius": "#b14a0b",
    "vibrantBlue": "#0339f8",
    "vibrantGreen": "#0add08",
    "vibrantPurple": "#ad03de",
    "victoria": "#534491",
    "vidaLoca": "#549019",
    "viking": "#64ccdb",
    "vinRouge": "#983d61",
    "viola": "#cb8fa9",
    "violentViolet": "#290c5e",
    "violet": "#240a40",
    "violetBlue": "#510ac9",
    "violetPink": "#fb5ffc",
    "violetRed": "#a50055",
    "viridian": "#1e9167",
    "viridianGreen": "#678975",
    "visVis": "#ffefa1",
    "vistaBlue": "#8fd6b4",
    "vistaWhite": "#fcf8f7",
    "vividBlue": "#152eff",
    "vividGreen": "#2fef10",
    "vividPurple": "#9900fa",
    "voodoo": "#533455",
    "vulcan": "#10121d",
    "wafer": "#decbc6",
    "waikawaGrey": "#5a6e9c",
    "waiouru": "#363c0d",
    "warmBlue": "#4b57db",
    "warmBrown": "#964e02",
    "warmGrey": "#978a84",
    "warmPink": "#fb5581",
    "warmPurple": "#952e8f",
    "wasabi": "#788a25",
    "washedOutGreen": "#bcf5a6",
    "waterBlue": "#0e87cc",
    "waterLeaf": "#a1e9de",
    "watercourse": "#056f57",
    "watermelon": "#fd4659",
    "wattle": "#dcd747",
    "watusi": "#ffddcf",
    "waxFlower": "#ffc0a8",
    "wePeep": "#f7dbe6",
    "wedgewood": "#4e7f9e",
    "wellRead": "#b43332",
    "westCoast": "#625119",
    "westSide": "#ff910f",
    "westar": "#dcd9d2",
    "wewak": "#f19bab",
    "wheat": "#fbdd7e",
    "wheatfield": "#f3edcf",
    "whiskey": "#d59a6f",
    "whisper": "#f7f5fa",
    "white": "#ffffff",
    "whiteIce": "#ddf9f1",
    "whiteLilac": "#f8f7fc",
    "whiteLinen": "#f8f0e8",
    "whitePointer": "#fef8ff",
    "whiteRock": "#eae8d4",
    "wildRice": "#ece090",
    "wildSand": "#f4f4f4",
    "wildWillow": "#b9c46a",
    "william": "#3a686c",
    "willowBrook": "#dfecda",
    "willowGrove": "#65745d",
    "windowsBlue": "#3778bf",
    "windsor": "#3c0878",
    "wine": "#80013f",
    "wineBerry": "#591d35",
    "wineRed": "#7b0323",
    "winterHazel": "#d5d195",
    "wintergreen": "#20f986",
    "wispPink": "#fef4f8",
    "wistful": "#a4a6d3",
    "woodland": "#4d5328",
    "woodrush": "#302a0f",
    "woodsmoke": "#0c0d0f",
    "woodyBrown": "#483131",
    "xanadu": "#738678",
    "yellow": "#ffff00",
    "yellowBrown": "#b79400",
    "yellowGreen": "#c8fd3d",
    "yellowMetal": "#716338",
    "yellowOchre": "#cb9d06",
    "yellowOrange": "#fcb001",
    "yellowSea": "#fea904",
    "yellowTan": "#ffe36e",
    "yellowish": "#faee66",
    "yellowishBrown": "#9b7a01",
    "yellowishGreen": "#b0dd16",
    "yellowishOrange": "#ffab0f",
    "yellowishTan": "#fcfc81",
    "yellowyBrown": "#ae8b0c",
    "yellowyGreen": "#bff128",
    "yourPink": "#ffc3c0",
    "yukonGold": "#7b6608",
    "yuma": "#cec291",
    "zambezi": "#685558",
    "zanah": "#daecd6",
    "zest": "#e5841b",
    "zeus": "#292319",
    "ziggurat": "#bfdbe2",
    "zircon": "#f4f8ff",
    "zombie": "#e4d69b",
    "zorba": "#a59b91",
    "zuccini": "#044022",
    "zumthor": "#edf6ff"
}
},{}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var Instance = function () {
    function Instance() {
        _classCallCheck(this, Instance);
    }

    _createClass(Instance, [{
        key: "get",
        value: function get() {
            return require('../../colors.json');
        }
    }]);

    return Instance;
}();

exports.Instance = Instance;
exports.instance = new Instance();
exports.colors = exports.instance.get();
exports.default = exports.instance;

},{"../../colors.json":2}],4:[function(require,module,exports){
(function (global){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var thIs = this;

var Instance = function () {
    function Instance() {
        _classCallCheck(this, Instance);
    }

    _createClass(Instance, [{
        key: "get",
        value: function get() {
            if (typeof window !== 'undefined') {
                return window;
            } else if (typeof global !== 'undefined') {
                return global;
            } else if (typeof self !== 'undefined') {
                return self;
            } else {
                return thIs;
            }
        }
    }]);

    return Instance;
}();

exports.Instance = Instance;
exports.instance = new Instance();
exports.win = exports.instance.get();
exports.get = exports.instance.get;
exports.default = exports.instance;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Picker = require("./modules/picker");
var window_var_1 = require("window-var");
var $ = window_var_1.win.jQuery || window_var_1.win.$ || require('jquery');
var picker = void 0;
var ns = 'namedColorPicker';
var ss = 'named-color-picker';
var instanceCounter = 0;
var instances = [];

var Instance = function () {
    // Public constructor.
    function Instance(element, options) {
        _classCallCheck(this, Instance);

        this.animationEnd = 'webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend';
        this.instance = instanceCounter = instanceCounter + 1;
        this.ns = ns + String(this.instance);
        this.ss = ss + '-' + this.instance;
        instances.splice(this.instance - 1, 0, this);
        var $element = $(element);
        var existingInstance = $element.data(ns);
        if (existingInstance) existingInstance.destroy();
        this.options = $.extend(true, {}, {
            mode: 'auto',
            titleizeElement: true,
            colorizeElement: true,
            showCodes: true,
            openSearch: false,
            i18n: {}
        }, options || {});
        if (!picker) {
            picker = new Picker.Instance({ i18n: this.options.i18n });
        } // Instances all share a single picker instance.
        this.picker = picker; // References picker.
        this.$element = $element;
        this.$element.data(ns, this);
        this.$hiddenElement = $('<input type="hidden" />');
        this.$element.after(this.$hiddenElement);
        this.$hiddenElement.attr('name', this.$element.attr('name') || '');
        this.$hiddenElement.val(this.$element.attr('value') || '');
        this.$element.removeAttr('name'); // Remove name.
        this.elementTagName = this.$element.prop('tagName');
        this.elementTagName = this.elementTagName.toLowerCase();
        this.elementTagType = this.$element.attr('type') || '';
        this.elementTagType = this.elementTagType.toLowerCase();
        this.elementIsTextualInput = this.$element.is('input[type="text"], textarea');
        this.elementIsColorInput = !this.elementIsTextualInput && this.$element.is('input[type="color"]');
        this.elementIsInput = this.elementIsTextualInput || this.elementIsColorInput;
        this.elementOriginalTitleAttr = this.$element.attr('title') || '';
        this.elementOriginalCssColor = this.$element.css('color') || '';
        this.elementOriginalCssBackground = this.$element.css('background') || '';
        this.elementOriginalCssBorderColor = this.$element.css('border-color') || '';
        if (this.options.mode === 'auto') {
            if (this.elementIsColorInput) {
                this.options.mode = 'swatch-only';
            } else this.options.mode = 'swatch-after';
        }
        this.setupElement(), this.setupSwatch();
    }
    // Setup helpers.


    _createClass(Instance, [{
        key: "setupElement",
        value: function setupElement() {
            if (['swatch-only', 'stand-alone'].indexOf(this.options.mode) !== -1) {
                this.$element.hide(); // Not visible.
            }
            this.$element.on('keyup.' + this.ns + ' cut.' + this.ns + ' paste.' + this.ns + ' blur.' + this.ns + ' change.' + this.ns, this.picker.debounce(this.onElementAlter, 250).bind(this));
        }
    }, {
        key: "setupSwatch",
        value: function setupSwatch() {
            this.$swatch = $(this.swatchMarkup());
            if (this.options.mode === 'swatch-before') {
                this.$element.before(this.$swatch);
            } else if (this.options.mode === 'swatch-after') {
                this.$element.after(this.$swatch);
            } else if (['swatch-only', 'stand-alone'].indexOf(this.options.mode) !== -1) {
                this.$element.after(this.$swatch);
            }
            this.setSelectedColor(this.getSelectedColor(), true, false);
            this.$swatch.on('click.' + this.ns, this.onSwatchClick.bind(this));
            this.$swatch.show(); // Show color picker now.
        }
        // Open events.

    }, {
        key: "onBeforeOpen",
        value: function onBeforeOpen() {
            this.$element.trigger(ns + '.beforeOpen');
        }
    }, {
        key: "onOpened",
        value: function onOpened() {
            this.$element.trigger(ns + '.opened');
        }
        // Close events.

    }, {
        key: "onBeforeClose",
        value: function onBeforeClose() {
            this.$element.trigger(ns + '.beforeClose');
        }
    }, {
        key: "onClosed",
        value: function onClosed() {
            var _this = this;

            this.$swatch.addClass('-shrink');
            this.$swatch.one(this.animationEnd, function () {
                return _this.$swatch.removeClass('-shrink');
            });
            this.$element.trigger(ns + '.closed');
        }
        // Color-related events.

    }, {
        key: "onColorActive",
        value: function onColorActive(color) {
            this.$element.trigger(ns + '.colorActive', [color]);
        }
    }, {
        key: "onActiveColorClosed",
        value: function onActiveColorClosed(color) {
            this.$element.trigger(ns + '.activeColorClosed', [color]);
        }
    }, {
        key: "onColorSelected",
        value: function onColorSelected(color) {
            this.setSelectedColor(color);
        }
        // Element/swatch events.

    }, {
        key: "onElementAlter",
        value: function onElementAlter(e, via) {
            if (via === this.ns) return;
            if (this.elementIsInput) {
                this.setSelectedColor($.trim(this.$element.val() || ''), false);
            } else this.setSelectedColor('', false);
        }
    }, {
        key: "onSwatchClick",
        value: function onSwatchClick(e) {
            var _this2 = this;

            e.preventDefault();
            this.$swatch.addClass('-grow').one(this.animationEnd, function () {
                _this2.$swatch.removeClass('-grow'), _this2.open(_this2.getSelectedColor());
            });
        }
        // Public open/close utils.

    }, {
        key: "open",
        value: function open(hexKeyOrName) {
            var options = {
                onBeforeOpen: this.onBeforeOpen.bind(this),
                onOpened: this.onOpened.bind(this),
                onBeforeClose: this.onBeforeClose.bind(this),
                onClosed: this.onClosed.bind(this),
                onColorActive: this.onColorActive.bind(this),
                onActiveColorClosed: this.onActiveColorClosed.bind(this),
                onColorSelected: this.onColorSelected.bind(this),
                showCodes: this.options.showCodes,
                openSearch: this.options.openSearch
            };
            this.picker.open(options, hexKeyOrName);
        }
    }, {
        key: "toggle",
        value: function toggle() {
            this.picker.toggle();
        }
    }, {
        key: "close",
        value: function close() {
            this.picker.close();
        }
        // Public color utilities.

    }, {
        key: "getColors",
        value: function getColors() {
            return this.picker.getColors();
        }
    }, {
        key: "getColorKeysByName",
        value: function getColorKeysByName() {
            return this.picker.getColorKeysByName();
        }
    }, {
        key: "getColorKeysByHue",
        value: function getColorKeysByHue() {
            return this.picker.getColorKeysByHue();
        }
    }, {
        key: "getColor",
        value: function getColor(hexKeyOrName) {
            return this.picker.getColor(hexKeyOrName);
        }
    }, {
        key: "getActiveColor",
        value: function getActiveColor() {
            return this.picker.getActiveColor();
        }
    }, {
        key: "setActiveColor",
        value: function setActiveColor(hexKeyOrName) {
            this.picker.setActiveColor(hexKeyOrName);
        }
    }, {
        key: "getSelectedColor",
        value: function getSelectedColor() {
            return this.$hiddenElement.val() || '';
        }
    }, {
        key: "setSelectedColor",
        value: function setSelectedColor(hexKeyOrName) {
            var updateElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var triggerEvents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            var color = void 0,
                tiny = void 0; // Initialize only.
            var defaultTiny = this.picker.defaultTiny;
            var lightTiny = this.picker.lightTiny;
            var darkTiny = this.picker.darkTiny;
            if (hexKeyOrName && (color = this.picker.getColor(hexKeyOrName))) {
                if (this.options.titleizeElement) {
                    this.$element.attr('title', color.name + ' (' + color.hexString + ')');
                }
                if (this.options.colorizeElement) {
                    this.$element.css({
                        'background': color.hexString,
                        'borderColor': color.tiny.clone().darken(10).toHexString(),
                        'color': color.isDark ? lightTiny.toHexString() : darkTiny.toHexString()
                    });
                }
                this.$swatch.css({
                    'color': color.hexString,
                    'background': this.swatchBgTiny(color.tiny).toHexString()
                });
                this.$hiddenElement.val(color.hexString);
                if (this.elementIsInput && updateElement) {
                    if (this.elementIsTextualInput) {
                        this.$element.val(color.name);
                    } else {
                        this.$element.val(color.hexString);
                    }
                    if (triggerEvents) this.$element.trigger('change', this.ns);
                }
                if (triggerEvents) this.$hiddenElement.trigger('change', this.ns);
                if (triggerEvents) this.$element.trigger(ns + '.colorSelected', [color.hexString, color]);
            } else {
                if (hexKeyOrName && typeof hexKeyOrName === 'string') if (!(tiny = tinycolor(hexKeyOrName)).isValid()) tiny = null;
                if (this.options.titleizeElement) {
                    this.$element.attr('title', tiny ? tiny.toHexString() : this.elementOriginalTitleAttr);
                }
                if (this.options.colorizeElement) {
                    this.$element.css({
                        'background': tiny ? tiny.toHexString() : this.elementOriginalCssBackground,
                        'borderColor': tiny ? tiny.clone().darken(10).toHexString() : this.elementOriginalCssBorderColor,
                        'color': tiny ? tiny.isDark() ? lightTiny.toHexString() : darkTiny.toHexString() : this.elementOriginalCssColor
                    });
                }
                this.$swatch.css({
                    'color': (tiny || defaultTiny).toHexString(),
                    'background': this.swatchBgTiny(tiny || defaultTiny).toHexString()
                });
                this.$hiddenElement.val(tiny ? tiny.toHexString() : '');
                if (this.elementIsInput && updateElement) {
                    this.$element.val(tiny ? tiny.toHexString() : '');
                    if (triggerEvents) this.$element.trigger('change', this.ns);
                }
                if (triggerEvents) this.$hiddenElement.trigger('change', this.ns);
                if (triggerEvents && tiny) this.$element.trigger(ns + '.colorSelected', [tiny.toHexString(), undefined]);
            }
        }
        // Misc. public utilities.

    }, {
        key: "destroy",
        value: function destroy() {
            var keepPicker = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            this.close();
            this.$swatch.remove();
            this.$element.removeData(ns);
            if (this.options.mode === 'swatch-only') {
                this.$element.show();
            }
            instances.splice(this.instance - 1, 1);
            if (!instances.length && !keepPicker) {
                this.picker.destroy();
                delete this.picker;
                picker = undefined;
            }
        }
        // Misc. utilities.

    }, {
        key: "swatchBgTiny",
        value: function swatchBgTiny(tiny) {
            var hexString = tiny.toHexString();
            if (hexString === this.picker.lightTiny.toHexString()) {
                return this.picker.darkTiny;
            } else if (hexString === this.picker.darkTiny.toHexString()) {
                return this.picker.lightTiny;
            }
            return tiny.clone()[tiny.getLuminance() <= .5 ? 'lighten' : 'darken'](10);
        }
    }, {
        key: "swatchMarkup",
        value: function swatchMarkup() {
            var markup = ''; // Initialize.
            markup += '<a class="named-color-picker-swatch -' + this.options.mode + '" style="display:none;" tabindex="-1" href="#">';
            markup += ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g><path fill-rule="nonzero" d="M0 0v64h64V0H0zm22.4 41.6H9.6V28.8h12.8v12.8zm0-19.2H9.6V9.6h12.8v12.8zm19.2 0H28.8V9.6h12.8v12.8z"/></g></svg>';
            markup += '</a>';
            return markup;
        }
    }]);

    return Instance;
}();

exports.Instance = Instance;
exports.default = $.fn[ns] = setup();
function setup() {
    $('head').append('<style>' + require('../../../dist/styles/css/index.web.css') + '</style>');
    return function (x) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        var $this = this; // jQuery collection passed to extension.
        if (!$this.length) return $this; // Not possible.
        if (typeof x === 'string' && x.length) {
            var command = x;
            var returnValues = [];
            $this.each(function (index, element) {
                var $element = $(element);
                var instance = $element.data(ns);
                if (!instance) return;
                var method = instance[command];
                var returnValue = method.apply(instance, args);
                returnValues.push(returnValue);
            });
            if (returnValues.length) {
                return this.length === 1 ? returnValues[0] : returnValues;
            }
        } else if ((typeof x === "undefined" ? "undefined" : _typeof(x)) === 'object' || x === undefined) {
            var options = x;
            return $this.each(function (index, element) {
                new Instance(element, options);
            });
        }
    };
}
exports.setup = setup;

},{"../../../dist/styles/css/index.web.css":1,"./modules/picker":7,"jquery":undefined,"window-var":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
require("./index");

},{"./index":5}],7:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var window_var_1 = require("window-var");
var namedColorVars = require("named-color-vars");
var $ = window_var_1.win.jQuery || window_var_1.win.$ || require('jquery');
var tinycolor = window_var_1.win.tinycolor || require('tinycolor2');
if (!$.fn.selectize) require('selectize'); // jQuery extension.
var ns = 'namedColorPicker';
var ss = 'named-color-picker';
var instanceCounter = 0;
var instances = [];

var Instance = function () {
    // Public constructor.
    function Instance(options) {
        _classCallCheck(this, Instance);

        this.emPixels = 0;
        this.searchIcon = '';
        this.totalGridColors = 0;
        this.instance = instanceCounter = instanceCounter + 1;
        this.ns = ns + String(this.instance);
        this.ss = ss + '-' + this.instance;
        instances.splice(this.instance - 1, 0, this);
        this.options = $.extend(true, {}, {
            i18n: {
                copied: 'copied',
                select: 'select',
                searchColors: 'search',
                promptCopyFallback: 'press ctrl+c to copy:'
            }
        }, options || {});
        this.$window = $(window_var_1.win), this.$document = $(window_var_1.win.document);
        this.$html = $('html'), this.$head = $('head'), this.$body = $('body');
        this.$picker = $(this.pickerMarkup()), this.$picker.data(ns, this);
        this.$body.append(this.$picker);
        this.$info = this.$picker.find('> .-info'), this.$grid = this.$picker.find('> .-grid');
        this.$search = this.$picker.find('> .-search'), this.$searchSelect = this.$search.find('> select'), this.$searchOverlay = this.$picker.find('> .-search-overlay');
        this.$textarea = this.$picker.find('> .-textarea');
        this.emPixels = parseInt(getComputedStyle(this.$picker[0]).fontSize);
        this.searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 446.3 446.3"><g><path d="M318.8 280.5h-20.5l-7.6-7.7c25.5-28 40.8-66.2 40.8-107 0-92-74-165.8-165.8-165.8S0 74 0 165.8s74 165.7 165.8 165.7c40.7 0 79-15.3 107-40.8l7.7 7.6v20.4L408 446.3l38.3-38.3-127.6-127.5zm-153 0C102 280.5 51 229.5 51 165.7S102 51 165.8 51s114.7 51 114.7 114.8-51 114.7-114.8 114.7z"/></g></svg>';
        this.windowWidth = this.$window.width(), this.windowHeight = this.$window.height(), this.windowScrollTop = this.$window.scrollTop();
        this.defaultTiny = tinycolor('#000000'), this.lightTiny = tinycolor('#ffffff'), this.darkTiny = tinycolor('#000000');
        this.setupColors(), this.setupSearchSelect(), this.setupEvents();
    }
    // Setup helpers.


    _createClass(Instance, [{
        key: "setupColors",
        value: function setupColors() {
            var _this = this;

            this.colorVars = namedColorVars.colors;
            this.colorsByHex = {};
            this.colors = {};
            $.each(this.colorVars, function (key, hex) {
                _this.colors[key] = _this.colorProps(key, hex);
                _this.colorsByHex[hex] = _this.colors[key];
            });
            this.colorKeysByName = this.sortColorKeys(this.colors, 'name');
            this.colorKeysByHue = this.sortColorKeys(this.colors, 'hue');
            this.colorKeysByHue.forEach(function (key) {
                var color = _this.colors[key];
                var $anchor = $(_this.colorAnchorMarkup(color));
                $anchor.data('color', color);
                _this.$grid.append($anchor);
                _this.totalGridColors++;
            });
            this.$grid.prepend($(this.searchAnchorMarkup()));
            this.totalGridColors++; // One more color.
            this.colorOptions = [], this.colorKeysByName.forEach(function (key) {
                var color = _this.colors[key];
                var markup = _this.colorOptionMarkup(color);
                _this.colorOptions.push({
                    value: color.key,
                    text: color.name,
                    markup: markup
                });
            });
        }
    }, {
        key: "setupSearchSelect",
        value: function setupSearchSelect() {
            this.$searchSelect.selectize({
                options: this.colorOptions,
                dropdownParent: this.$search,
                placeholder: this.options.i18n.searchColors,
                render: {
                    item: function item(data) {
                        return $('<div>' + data.markup + '</div>');
                    },
                    option: function option(data) {
                        return $('<div>' + data.markup + '</div>');
                    }
                },
                diacritics: false,
                closeAfterSelect: true,
                maxOptions: Math.min(50, this.colorOptions.length)
            });
        }
    }, {
        key: "setupEvents",
        value: function setupEvents() {
            this.$grid.on('click.' + this.ns, '> .-color', this.onColorClick.bind(this));
            this.$info.on('click.' + this.ns, '> .-hex, > .-rgb, > .-hsl, > .-hsv', this.onInfoCopyClick.bind(this));
            this.$info.on('click.' + this.ns, '> .-select', this.onInfoSelectClick.bind(this));
            this.$searchSelect[0].selectize.on('item_add', this.onSearchSelect.bind(this));
            this.$searchOverlay.on('click.' + this.ns, this.onSearchOverlayClick.bind(this));
            this.$window.on('resize.' + this.ns, this.onWindowResize.bind(this));
            this.$document.on('keyup.' + this.ns, this.onDocumentKeyup.bind(this));
        }
        // Event handlers.

    }, {
        key: "onColorClick",
        value: function onColorClick(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            var $anchor = $(e.currentTarget);
            var color = $anchor.data('color');
            if ($anchor.hasClass('-search')) {
                this.toggleSearch();
            } else if ($anchor.hasClass('-active')) {
                this.closeActiveColor();
            } else if (color) {
                this.setActiveColor(color);
            }
        }
    }, {
        key: "onInfoCopyClick",
        value: function onInfoCopyClick(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.copyText($.trim($(e.target).text()));
        }
    }, {
        key: "onInfoSelectClick",
        value: function onInfoSelectClick(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.selectActiveColor();
        }
    }, {
        key: "onSearchSelect",
        value: function onSearchSelect(key) {
            this.setActiveColor(key);
        }
    }, {
        key: "onSearchOverlayClick",
        value: function onSearchOverlayClick(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.closeSearch();
        }
    }, {
        key: "onWindowResize",
        value: function onWindowResize(e) {
            this.resizeGrid(); // Resize grid colors.
        }
    }, {
        key: "onDocumentKeyup",
        value: function onDocumentKeyup(e) {
            if (e.keyCode !== 27) return;
            e.preventDefault();
            e.stopImmediatePropagation();
            this.close();
        }
        // Public open/close utilities.

    }, {
        key: "open",
        value: function open(options, hexKeyOrName) {
            options = $.extend({}, {
                onBeforeOpen: undefined,
                onOpened: undefined,
                onBeforeClose: undefined,
                onClosed: undefined,
                onColorActive: undefined,
                onActiveColorClosed: undefined,
                onColorSelected: undefined,
                showCodes: true,
                openSearch: false
            }, options || {});
            this.onBeforeOpen = options.onBeforeOpen;
            this.onOpened = options.onOpened;
            this.onBeforeClose = options.onBeforeClose;
            this.onClosed = options.onClosed;
            this.onColorActive = options.onColorActive;
            this.onActiveColorClosed = options.onActiveColorClosed;
            this.onColorSelected = options.onColorSelected;
            this.showCodes = options.showCodes;
            if (typeof this.onBeforeOpen === 'function') {
                this.onBeforeOpen();
            }
            this.closeOthers();
            this.closeSearch();
            this.closeActiveColor();
            if (!this.$picker.is(':visible')) {
                this.windowScrollTop = this.$window.scrollTop();
            } // Remember `scrollTop()` before showing picker.
            this.$picker.show(), this.resizeGrid();
            this.$html.addClass(ss + '-open');
            if (hexKeyOrName) {
                this.setActiveColor(hexKeyOrName);
            } else if (options.openSearch) {
                this.openSearch();
            }
            if (typeof this.onOpened === 'function') {
                this.onOpened();
            }
        }
    }, {
        key: "toggle",
        value: function toggle(options) {
            if (this.$picker.is(':visible')) {
                this.close();
                return false;
            } else {
                this.open(options);
                return true;
            }
        }
    }, {
        key: "close",
        value: function close() {
            var restoreScrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (typeof this.onBeforeClose === 'function') {
                this.onBeforeClose();
            }
            this.closeSearch();
            this.closeActiveColor();
            this.$picker.hide();
            this.removeGridStyles();
            this.$html.removeClass(ss + '-open');
            if (restoreScrollTop) {
                this.$window.scrollTop(this.windowScrollTop);
            }
            if (typeof this.onClosed === 'function') {
                this.onClosed();
            }
            this.onBeforeOpen = undefined;
            this.onOpened = undefined;
            this.onBeforeClose = undefined;
            this.onClosed = undefined;
            this.onColorActive = undefined;
            this.onActiveColorClosed = undefined;
            this.onColorSelected = undefined;
            this.showCodes = true;
        }
        // Public color utilities.

    }, {
        key: "getColors",
        value: function getColors() {
            return this.colors;
        }
    }, {
        key: "getColorKeysByName",
        value: function getColorKeysByName() {
            return this.colorKeysByName;
        }
    }, {
        key: "getColorKeysByHue",
        value: function getColorKeysByHue() {
            return this.colorKeysByHue;
        }
    }, {
        key: "getActiveColor",
        value: function getActiveColor() {
            var $color = this.$grid.find('> .-color.-active');
            return $color.data('color') || undefined;
        }
    }, {
        key: "setActiveColor",
        value: function setActiveColor(hexKeyOrName) {
            if (!this.$picker.is(':visible')) return; // Not possible.
            var color = this.getColor(hexKeyOrName);
            if (!color) return; // Not possible.
            var $color = this.$grid.find('> .-color[href="#' + color.key + '"]');
            if (!$color.length) return; // Not possible.
            this.closeSearch();
            this.closeActiveColor();
            $color.addClass('-active');
            this.$info.html(this.infoMarkup(color)).fadeIn(150);
            var infoCssData = this.infoCssData($color, color);
            this.$info.css(infoCssData.css).attr('class', '-info ' + infoCssData.arrowClass);
            this.$info.find('> .-select').css(infoCssData.selectCss);
            if (infoCssData.arrowClass && infoCssData.arrowStyles) {
                this.$head.append(this.infoArrowStylesMarkup(infoCssData.arrowClass, infoCssData.arrowStyles));
            }
            if (typeof this.onColorActive === 'function') {
                this.onColorActive(this.getActiveColor());
            }
        }
    }, {
        key: "selectActiveColor",
        value: function selectActiveColor() {
            if (typeof this.onColorSelected === 'function') {
                this.onColorSelected(this.getActiveColor());
            }
            this.close(); // Close picker.
        }
    }, {
        key: "closeActiveColor",
        value: function closeActiveColor() {
            var $color = this.$grid.find('> .-color.-active');
            if (!$color.length) return;
            this.$info.hide();
            this.$info.html('');
            this.removeInfoStyles();
            $color.removeClass('-active');
            if (typeof this.onActiveColorClosed === 'function') {
                this.onActiveColorClosed($color.data('color'));
            }
        }
        // Public search utilities.

    }, {
        key: "openSearch",
        value: function openSearch(hexKeyOrName) {
            if (!this.$picker.is(':visible')) return; // Not possible.
            this.closeActiveColor();
            this.$searchOverlay.show();
            this.$search.show();
            this.$searchSelect[0].selectize.clear();
            this.$searchSelect[0].selectize.open();
            if (hexKeyOrName) {
                var color = this.getColor(hexKeyOrName);
                if (color) this.$searchSelect[0].selectize.setTextboxValue(color.name);
            }
        }
    }, {
        key: "toggleSearch",
        value: function toggleSearch() {
            if (this.$search.is(':visible')) {
                this.closeSearch();
                return false;
            } else {
                this.openSearch();
                return true;
            }
        }
    }, {
        key: "closeSearch",
        value: function closeSearch() {
            this.$searchSelect[0].selectize.close();
            this.$search.hide();
            this.$searchOverlay.hide();
        }
        // Misc. public utilities.

    }, {
        key: "debounce",
        value: function debounce(f, delay) {
            var timeout = void 0; // Timeout handle.
            return function () {
                var _this2 = this;

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                if (timeout) clearTimeout(timeout);
                timeout = setTimeout(function () {
                    return f.apply(_this2, args);
                }, delay);
            };
        }
    }, {
        key: "getColor",
        value: function getColor(hexKeyOrName) {
            if ((typeof hexKeyOrName === "undefined" ? "undefined" : _typeof(hexKeyOrName)) === 'object') {
                return hexKeyOrName; // Color.
            } else if (hexKeyOrName.indexOf('#') === 0) {
                var hex = hexKeyOrName; // Hex code.
                if (this.colorsByHex[hex]) {
                    return this.colorsByHex[hex];
                }
            } else {
                var name = hexKeyOrName;
                var key = this.colorNameToKey(name);
                if (this.colors[key]) {
                    return this.colors[key];
                }
            }
        }
    }, {
        key: "destroy",
        value: function destroy() {
            this.close(false);
            this.removeInfoStyles();
            this.removeGridStyles();
            this.destroySearchSelect();
            this.$window.off('resize.' + this.ns);
            this.$picker.remove();
            instances.splice(this.instance - 1, 1);
        }
        // Other misc. utilities.

    }, {
        key: "closeOthers",
        value: function closeOthers() {
            var _this3 = this;

            instances.forEach(function (instance, i) {
                if (i !== _this3.instance - 1) instance.close(false);
            });
        }
    }, {
        key: "resizeGrid",
        value: function resizeGrid() {
            if (!this.$picker.is(':visible')) return; // Not possible.
            this.windowWidth = this.$window.width();
            this.windowHeight = this.$window.height();
            var gridPadding = 3,
                colorMargin = 3;
            if (this.windowWidth < 768) {
                gridPadding = 1, colorMargin = 1;
            }
            var gridInnerWidth = this.$grid.innerWidth();
            var gridInnerHeight = this.$grid.innerHeight();
            var gridWidth = gridInnerWidth - gridPadding * 2;
            var gridHeight = gridInnerHeight - gridPadding * 2;
            var colorSize = this.optimalColorSize(gridWidth, gridHeight, this.totalGridColors);
            colorSize = colorSize - colorMargin * 2; // Excluding margin.
            this.removeGridStyles(); // Remove previous styles, before adding.
            this.$head.append(this.gridStylesMarkup(gridPadding, colorMargin, colorSize));
        }
    }, {
        key: "copyText",
        value: function copyText(text) {
            var $copied = this.$info.find('> .-copied');
            this.$textarea.val(text).select();
            try {
                if (!window_var_1.win.document.queryCommandSupported('copy')) {
                    this.promptCopy(text);
                } else if (!window_var_1.win.document.queryCommandEnabled('copy')) {
                    this.promptCopy(text);
                } else if (!window_var_1.win.document.execCommand('copy', false, null)) {
                    this.promptCopy(text);
                } else {
                    $copied.css('visibility', 'visible');
                    setTimeout(function () {
                        return $copied.css('visibility', 'hidden');
                    }, 500);
                }
            } catch (exception) {
                this.promptCopy(text);
            }
            this.$textarea.val('').blur();
        }
    }, {
        key: "promptCopy",
        value: function promptCopy(text) {
            window_var_1.win.prompt(this.options.i18n.promptCopyFallback, text);
        }
    }, {
        key: "colorKeyToSlug",
        value: function colorKeyToSlug(key) {
            return key.replace(/[A-Z]/g, function (m) {
                return '-' + m.toLowerCase();
            });
        }
    }, {
        key: "colorKeyToName",
        value: function colorKeyToName(key) {
            return key.replace(/[A-Z]/g, function (m) {
                return ' ' + m;
            }).replace(/^./, function (m) {
                return m.toUpperCase();
            });
        }
    }, {
        key: "colorNameToKey",
        value: function colorNameToKey(name) {
            return name.replace(/\s+([a-z])/gi, function (m, $1) {
                return $1.toUpperCase();
            }).replace(/^./, function (m) {
                return m.toLowerCase();
            });
        }
    }, {
        key: "colorProps",
        value: function colorProps(key, hex) {
            var tinyColor = tinycolor(hex);
            return {
                key: key,
                slug: this.colorKeyToSlug(key),
                name: this.colorKeyToName(key),
                hex: tinyColor.toHex(),
                rgb: tinyColor.toRgb(),
                hsl: tinyColor.toHsl(),
                hsv: tinyColor.toHsv(),
                hexString: tinyColor.toHexString(),
                rgbString: tinyColor.toRgbString(),
                hslString: tinyColor.toHslString(),
                hsvString: tinyColor.toHsvString(),
                isDark: tinyColor.isDark(),
                isLight: tinyColor.isLight(),
                tiny: tinyColor
            };
        }
    }, {
        key: "sortColorKeys",
        value: function sortColorKeys(colors, by) {
            if (by === 'name') {
                return Object.keys(colors).sort(function (keyA, keyB) {
                    var nameA = colors[keyA].name.toLowerCase();
                    var nameB = colors[keyB].name.toLowerCase();
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0;
                });
            } else if (by === 'hue') {
                return Object.keys(colors).sort(function (keyA, keyB) {
                    return colors[keyA].hsv.h - colors[keyB].hsv.h;
                });
            }
            return Object.keys(colors);
        }
    }, {
        key: "optimalColorSize",
        value: function optimalColorSize(x, y, n) {
            // See <https://jas.xyz/2oWF0uu>
            var px = Math.ceil(Math.sqrt(n * x / y));
            var py = Math.ceil(Math.sqrt(n * y / x));
            var pxyx = px * y / x;
            var pyxy = py * x / y;
            var sx = void 0,
                sy = void 0; // Initialize.
            if (Math.floor(pxyx) * px < n) sx = y / Math.ceil(pxyx);else sx = x / px;
            if (Math.floor(pyxy) * py < n) sy = x / Math.ceil(pyxy);else sy = y / py;
            return Math.max(sx, sy);
        }
    }, {
        key: "destroySearchSelect",
        value: function destroySearchSelect() {
            this.$searchSelect[0].selectize.destroy();
        }
    }, {
        key: "removeGridStyles",
        value: function removeGridStyles() {
            this.$head.find('.' + this.ss + '-grid-styles').remove();
        }
    }, {
        key: "removeInfoStyles",
        value: function removeInfoStyles() {
            this.$head.find('.' + this.ss + '-info-styles').remove();
        }
        // Markup utilities.

    }, {
        key: "pickerMarkup",
        value: function pickerMarkup() {
            var markup = ''; // Initialize.
            markup += '<div class="' + ss + ' ' + this.ss + '">';
            markup += '  <div class="-grid"></div>';
            markup += '  <div class="-info"></div>';
            markup += '  <div class="-search-overlay"></div>';
            markup += '  <div class="-search"><select></select></div>';
            markup += '  <textarea class="-textarea"></textarea>';
            markup += '</div>';
            return markup;
        }
    }, {
        key: "gridStylesMarkup",
        value: function gridStylesMarkup(gridPadding, colorMargin, colorSize) {
            var markup = ''; // Initialize.
            markup += '<style class="' + this.ss + '-grid-styles">';
            markup += '.' + this.ss + ' > .-grid { padding: ' + gridPadding + 'px; }';
            markup += '.' + this.ss + ' > .-grid > .-color {';
            markup += '  margin:' + colorMargin + 'px; width:' + colorSize + 'px; height:' + colorSize + 'px;';
            markup += '}';
            markup += '</style>';
            return markup;
        }
    }, {
        key: "colorAnchorMarkup",
        value: function colorAnchorMarkup(color) {
            return '<a class="-color" style="background-color:' + color.hexString + ';" title="' + color.name + '" href="#' + color.key + '"></a>';
        }
    }, {
        key: "searchAnchorMarkup",
        value: function searchAnchorMarkup() {
            return '<a class="-color -search" href="#">' + this.searchIcon + '</a>';
        }
    }, {
        key: "colorOptionMarkup",
        value: function colorOptionMarkup(color) {
            return '<span class="-color"><span class="-swatch" style="background-color:' + color.hexString + ';"></span> ' + color.name + '</span>';
        }
    }, {
        key: "infoMarkup",
        value: function infoMarkup(color) {
            var sc = this.showCodes;
            var markup = ''; // Initialize markup.
            markup += '<div class="-title">' + color.name + '</div>';
            if (sc === true || sc instanceof Array && sc.indexOf('hex') !== -1) {
                markup += '<a class="-hex" href="#">' + color.hexString + '</a>';
            }
            if (sc === true || sc instanceof Array && sc.indexOf('rgb') !== -1) {
                markup += '<a class="-rgb" href="#">' + color.rgbString + '</a>';
            }
            if (sc === true || sc instanceof Array && sc.indexOf('hsl') !== -1) {
                markup += '<a class="-hsl" href="#">' + color.hslString + '</a>';
            }
            if (sc === true || sc instanceof Array && sc.indexOf('hsv') !== -1) {
                markup += '<a class="-hsv" href="#">' + color.hsvString + '</a>';
            }
            if (sc === true || sc instanceof Array && sc.length > 0) {
                markup += '<div class="-copied">' + this.options.i18n.copied + '</div>';
            }
            markup += '<a class="-select" href="#">' + this.options.i18n.select + '</a>';
            return markup;
        }
    }, {
        key: "infoArrowStylesMarkup",
        value: function infoArrowStylesMarkup(arrowClass, styles) {
            var markup = ''; // Initialize.
            markup += '<style class="' + this.ss + '-info-styles">';
            markup += '.' + this.ss + ' > .-info.' + arrowClass.replace(/\s/g, '.') + '::after {';
            markup += '  ' + styles;
            markup += '}';
            markup += '</style>';
            return markup;
        }
        // CSS data utilities.

    }, {
        key: "infoCssData",
        value: function infoCssData($color, color) {
            var css = {
                top: 'auto', right: 'auto', bottom: 'auto', left: 'auto',
                color: color.isDark ? this.lightTiny.toHexString() : this.darkTiny.toHexString(),
                backgroundImage: 'linear-gradient(to bottom, ' + color.hexString + ', ' + color.tiny.clone().darken(10).toHexString() + ')'
            };
            var selectCss = {
                borderColor: color.tiny.clone().darken(15).toHexString(),
                color: color.isDark ? this.lightTiny.toHexString() : this.darkTiny.toHexString(),
                backgroundImage: 'linear-gradient(to bottom, ' + color.hexString + ', ' + color.tiny.clone().darken(5).toHexString() + ')'
            };
            var spacing = .75 * this.emPixels;
            var arrowClass = '',
                arrowStyles = '';
            var rect = this.$info[0].getBoundingClientRect();
            var colorRect = $color[0].getBoundingClientRect();
            var largestSide = Math.max(rect.width, rect.height);
            if (colorRect.top < largestSide) {
                arrowClass = '-arrow-top';
                css.top = colorRect.top + colorRect.height + spacing;
                css.top = Math.max(0, Number(css.top)) + 'px';
            } else {
                arrowClass = '-arrow-bottom';
                css.top = colorRect.top - rect.height - spacing;
                css.top = Math.max(0, Number(css.top)) + 'px';
            }
            if (colorRect.left < largestSide) {
                arrowClass = '-arrow-left';
                css.left = colorRect.left + colorRect.width + spacing;
                css.top = colorRect.top + colorRect.height / 2 - rect.height / 2;
                if (css.top < 0) {
                    css.top = 0; // Minimum.
                    arrowClass += ' -arrow-left-top';
                    arrowStyles = 'bottom:auto; top:calc(' + (colorRect.top - colorRect.height / 2) + 'px + .5em);';
                } else if (css.top > this.windowHeight - rect.height) {
                    css.top = this.windowHeight - rect.height;
                    arrowClass += ' -arrow-left-bottom';
                    arrowStyles = 'bottom:auto; top:calc(' + (colorRect.top - css.top - colorRect.height / 2) + 'px + .5em);';
                }
                css.top = String(css.top) + 'px';
                css.left = Math.max(0, Number(css.left)) + 'px';
            } else if (colorRect.left > this.windowWidth - largestSide) {
                arrowClass = '-arrow-right';
                css.left = colorRect.left - rect.width - spacing;
                css.top = colorRect.top + colorRect.height / 2 - rect.height / 2;
                if (css.top < 0) {
                    css.top = 0; // Minimum.
                    arrowClass += ' -arrow-right-top';
                    arrowStyles = 'bottom:auto; top:calc(' + (colorRect.top - colorRect.height / 2) + 'px + .5em);';
                } else if (css.top > this.windowHeight - rect.height) {
                    css.top = this.windowHeight - rect.height;
                    arrowClass += ' -arrow-right-bottom';
                    arrowStyles = 'bottom:auto; top:calc(' + (colorRect.top - css.top - colorRect.height / 2) + 'px + .5em);';
                }
                css.top = String(css.top) + 'px';
                css.left = Math.max(0, Number(css.left)) + 'px';
            } else {
                css.left = colorRect.left + colorRect.width / 2 - rect.width / 2;
                css.left = Math.max(0, Number(css.left)) + 'px';
            }
            var data = {
                css: css,
                selectCss: selectCss,
                arrowClass: arrowClass,
                arrowStyles: arrowStyles
            };
            return data;
        }
    }]);

    return Instance;
}();

exports.Instance = Instance;
exports.default = Instance;

},{"jquery":undefined,"named-color-vars":3,"selectize":undefined,"tinycolor2":undefined,"window-var":4}]},{},[6])(6)
});