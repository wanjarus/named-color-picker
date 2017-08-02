(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.srcWorks || (g.srcWorks = {})).namedColorPicker = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
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

},{"../../colors.json":1}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){

},{}],5:[function(require,module,exports){
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Select2 4.0.3
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    // Node/CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
})(function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 = function () {
    // Restore the Select2 AMD loader so it can be used
    // Needed mostly in the language files, where the loader is not inserted
    if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
      var S2 = jQuery.fn.select2.amd;
    }
    var S2;(function () {
      if (!S2 || !S2.requirejs) {
        if (!S2) {
          S2 = {};
        } else {
          require = S2;
        }
        /**
         * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
         * Available via the MIT or new BSD license.
         * see: http://github.com/jrburke/almond for details
         */
        //Going sloppy to avoid 'use strict' string cost, but strict practices should
        //be followed.
        /*jslint sloppy: true */
        /*global setTimeout: false */

        var requirejs, require, define;
        (function (undef) {
          var main,
              _req,
              makeMap,
              handlers,
              defined = {},
              waiting = {},
              config = {},
              defining = {},
              hasOwn = Object.prototype.hasOwnProperty,
              aps = [].slice,
              jsSuffixRegExp = /\.js$/;

          function hasProp(obj, prop) {
            return hasOwn.call(obj, prop);
          }

          /**
           * Given a relative module name, like ./something, normalize it to
           * a real name that can be mapped to a path.
           * @param {String} name the relative name
           * @param {String} baseName a real name that the name arg is relative
           * to.
           * @returns {String} normalized name
           */
          function normalize(name, baseName) {
            var nameParts,
                nameSegment,
                mapValue,
                foundMap,
                lastIndex,
                foundI,
                foundStarMap,
                starI,
                i,
                j,
                part,
                baseParts = baseName && baseName.split("/"),
                map = config.map,
                starMap = map && map['*'] || {};

            //Adjust any relative paths.
            if (name && name.charAt(0) === ".") {
              //If have a base name, try to normalize against it,
              //otherwise, assume it is a top-level require that will
              //be relative to baseUrl in the end.
              if (baseName) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // Node .js allowance:
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                  name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                //Lop off the last part of baseParts, so that . matches the
                //"directory" and not name of the baseName's module. For instance,
                //baseName of "one/two/three", maps to "one/two/three.js", but we
                //want the directory, "one/two" for this normalization.
                name = baseParts.slice(0, baseParts.length - 1).concat(name);

                //start trimDots
                for (i = 0; i < name.length; i += 1) {
                  part = name[i];
                  if (part === ".") {
                    name.splice(i, 1);
                    i -= 1;
                  } else if (part === "..") {
                    if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                      //End of the line. Keep at least one non-dot
                      //path segment at the front so it can be mapped
                      //correctly to disk. Otherwise, there is likely
                      //no path mapping for a path starting with '..'.
                      //This can still fail, but catches the most reasonable
                      //uses of ..
                      break;
                    } else if (i > 0) {
                      name.splice(i - 1, 2);
                      i -= 2;
                    }
                  }
                }
                //end trimDots

                name = name.join("/");
              } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
              }
            }

            //Apply map config if available.
            if ((baseParts || starMap) && map) {
              nameParts = name.split('/');

              for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                  //Find the longest baseName segment match in the config.
                  //So, do joins on the biggest to smallest lengths of baseParts.
                  for (j = baseParts.length; j > 0; j -= 1) {
                    mapValue = map[baseParts.slice(0, j).join('/')];

                    //baseName segment has  config, find if it has one for
                    //this name.
                    if (mapValue) {
                      mapValue = mapValue[nameSegment];
                      if (mapValue) {
                        //Match, update name to the new value.
                        foundMap = mapValue;
                        foundI = i;
                        break;
                      }
                    }
                  }
                }

                if (foundMap) {
                  break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                  foundStarMap = starMap[nameSegment];
                  starI = i;
                }
              }

              if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
              }

              if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
              }
            }

            return name;
          }

          function makeRequire(relName, forceSync) {
            return function () {
              //A version of a require function that passes a moduleName
              //value for items that may need to
              //look up paths relative to the moduleName
              var args = aps.call(arguments, 0);

              //If first arg is not require('string'), and there is only
              //one arg, it is the array form without a callback. Insert
              //a null so that the following concat is correct.
              if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
              }
              return _req.apply(undef, args.concat([relName, forceSync]));
            };
          }

          function makeNormalize(relName) {
            return function (name) {
              return normalize(name, relName);
            };
          }

          function makeLoad(depName) {
            return function (value) {
              defined[depName] = value;
            };
          }

          function callDep(name) {
            if (hasProp(waiting, name)) {
              var args = waiting[name];
              delete waiting[name];
              defining[name] = true;
              main.apply(undef, args);
            }

            if (!hasProp(defined, name) && !hasProp(defining, name)) {
              throw new Error('No ' + name);
            }
            return defined[name];
          }

          //Turns a plugin!resource to [plugin, resource]
          //with the plugin being undefined if the name
          //did not have a plugin prefix.
          function splitPrefix(name) {
            var prefix,
                index = name ? name.indexOf('!') : -1;
            if (index > -1) {
              prefix = name.substring(0, index);
              name = name.substring(index + 1, name.length);
            }
            return [prefix, name];
          }

          /**
           * Makes a name map, normalizing the name, and using a plugin
           * for normalization if necessary. Grabs a ref to plugin
           * too, as an optimization.
           */
          makeMap = function makeMap(name, relName) {
            var plugin,
                parts = splitPrefix(name),
                prefix = parts[0];

            name = parts[1];

            if (prefix) {
              prefix = normalize(prefix, relName);
              plugin = callDep(prefix);
            }

            //Normalize according
            if (prefix) {
              if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
              } else {
                name = normalize(name, relName);
              }
            } else {
              name = normalize(name, relName);
              parts = splitPrefix(name);
              prefix = parts[0];
              name = parts[1];
              if (prefix) {
                plugin = callDep(prefix);
              }
            }

            //Using ridiculous property names for space reasons
            return {
              f: prefix ? prefix + '!' + name : name, //fullName
              n: name,
              pr: prefix,
              p: plugin
            };
          };

          function makeConfig(name) {
            return function () {
              return config && config.config && config.config[name] || {};
            };
          }

          handlers = {
            require: function require(name) {
              return makeRequire(name);
            },
            exports: function exports(name) {
              var e = defined[name];
              if (typeof e !== 'undefined') {
                return e;
              } else {
                return defined[name] = {};
              }
            },
            module: function module(name) {
              return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
              };
            }
          };

          main = function main(name, deps, callback, relName) {
            var cjsModule,
                depName,
                ret,
                map,
                i,
                args = [],
                callbackType = typeof callback === 'undefined' ? 'undefined' : _typeof(callback),
                usingExports;

            //Use name if no relName
            relName = relName || name;

            //Call the callback to define the module, if necessary.
            if (callbackType === 'undefined' || callbackType === 'function') {
              //Pull out the defined dependencies and pass the ordered
              //values to the callback.
              //Default to [require, exports, module] if no deps
              deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
              for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                  args[i] = handlers.require(name);
                } else if (depName === "exports") {
                  //CommonJS module spec 1.1
                  args[i] = handlers.exports(name);
                  usingExports = true;
                } else if (depName === "module") {
                  //CommonJS module spec 1.1
                  cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) || hasProp(waiting, depName) || hasProp(defining, depName)) {
                  args[i] = callDep(depName);
                } else if (map.p) {
                  map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                  args[i] = defined[depName];
                } else {
                  throw new Error(name + ' missing ' + depName);
                }
              }

              ret = callback ? callback.apply(defined[name], args) : undefined;

              if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef && cjsModule.exports !== defined[name]) {
                  defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                  //Use the return value from the function.
                  defined[name] = ret;
                }
              }
            } else if (name) {
              //May just be an object definition for the module. Only
              //worry about defining if have a module name.
              defined[name] = callback;
            }
          };

          requirejs = require = _req = function req(deps, callback, relName, forceSync, alt) {
            if (typeof deps === "string") {
              if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
              }
              //Just return the module wanted. In this scenario, the
              //deps arg is the module name, and second arg (if passed)
              //is just the relName.
              //Normalize module name, if it contains . or ..
              return callDep(makeMap(deps, callback).f);
            } else if (!deps.splice) {
              //deps is a config object, not an array.
              config = deps;
              if (config.deps) {
                _req(config.deps, config.callback);
              }
              if (!callback) {
                return;
              }

              if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
              } else {
                deps = undef;
              }
            }

            //Support require(['a'])
            callback = callback || function () {};

            //If relName is a function, it is an errback handler,
            //so remove it.
            if (typeof relName === 'function') {
              relName = forceSync;
              forceSync = alt;
            }

            //Simulate async callback;
            if (forceSync) {
              main(undef, deps, callback, relName);
            } else {
              //Using a non-zero value because of concern for what old browsers
              //do, and latest browsers "upgrade" to 4 if lower value is used:
              //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
              //If want a value immediately, use require('id') instead -- something
              //that works in almond on the global level, but not guaranteed and
              //unlikely to work in other AMD implementations.
              setTimeout(function () {
                main(undef, deps, callback, relName);
              }, 4);
            }

            return _req;
          };

          /**
           * Just drops the config on the floor, but returns req in case
           * the config return value is used.
           */
          _req.config = function (cfg) {
            return _req(cfg);
          };

          /**
           * Expose module registry for debugging and tooling
           */
          requirejs._defined = defined;

          define = function define(name, deps, callback) {
            if (typeof name !== 'string') {
              throw new Error('See almond README: incorrect module build, no module name');
            }

            //This module may not have dependencies
            if (!deps.splice) {
              //deps is not an array, so probably means
              //an object literal or factory function for
              //the value. Adjust args.
              callback = deps;
              deps = [];
            }

            if (!hasProp(defined, name) && !hasProp(waiting, name)) {
              waiting[name] = [name, deps, callback];
            }
          };

          define.amd = {
            jQuery: true
          };
        })();

        S2.requirejs = requirejs;S2.require = require;S2.define = define;
      }
    })();
    S2.define("almond", function () {});

    /* global jQuery:false, $:false */
    S2.define('jquery', [], function () {
      var _$ = jQuery || $;

      if (_$ == null && console && console.error) {
        console.error('Select2: An instance of jQuery or a jQuery-compatible library was not ' + 'found. Make sure that you are including jQuery before Select2 on your ' + 'web page.');
      }

      return _$;
    });

    S2.define('select2/utils', ['jquery'], function ($) {
      var Utils = {};

      Utils.Extend = function (ChildClass, SuperClass) {
        var __hasProp = {}.hasOwnProperty;

        function BaseConstructor() {
          this.constructor = ChildClass;
        }

        for (var key in SuperClass) {
          if (__hasProp.call(SuperClass, key)) {
            ChildClass[key] = SuperClass[key];
          }
        }

        BaseConstructor.prototype = SuperClass.prototype;
        ChildClass.prototype = new BaseConstructor();
        ChildClass.__super__ = SuperClass.prototype;

        return ChildClass;
      };

      function getMethods(theClass) {
        var proto = theClass.prototype;

        var methods = [];

        for (var methodName in proto) {
          var m = proto[methodName];

          if (typeof m !== 'function') {
            continue;
          }

          if (methodName === 'constructor') {
            continue;
          }

          methods.push(methodName);
        }

        return methods;
      }

      Utils.Decorate = function (SuperClass, DecoratorClass) {
        var decoratedMethods = getMethods(DecoratorClass);
        var superMethods = getMethods(SuperClass);

        function DecoratedClass() {
          var unshift = Array.prototype.unshift;

          var argCount = DecoratorClass.prototype.constructor.length;

          var calledConstructor = SuperClass.prototype.constructor;

          if (argCount > 0) {
            unshift.call(arguments, SuperClass.prototype.constructor);

            calledConstructor = DecoratorClass.prototype.constructor;
          }

          calledConstructor.apply(this, arguments);
        }

        DecoratorClass.displayName = SuperClass.displayName;

        function ctr() {
          this.constructor = DecoratedClass;
        }

        DecoratedClass.prototype = new ctr();

        for (var m = 0; m < superMethods.length; m++) {
          var superMethod = superMethods[m];

          DecoratedClass.prototype[superMethod] = SuperClass.prototype[superMethod];
        }

        var calledMethod = function calledMethod(methodName) {
          // Stub out the original method if it's not decorating an actual method
          var originalMethod = function originalMethod() {};

          if (methodName in DecoratedClass.prototype) {
            originalMethod = DecoratedClass.prototype[methodName];
          }

          var decoratedMethod = DecoratorClass.prototype[methodName];

          return function () {
            var unshift = Array.prototype.unshift;

            unshift.call(arguments, originalMethod);

            return decoratedMethod.apply(this, arguments);
          };
        };

        for (var d = 0; d < decoratedMethods.length; d++) {
          var decoratedMethod = decoratedMethods[d];

          DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
        }

        return DecoratedClass;
      };

      var Observable = function Observable() {
        this.listeners = {};
      };

      Observable.prototype.on = function (event, callback) {
        this.listeners = this.listeners || {};

        if (event in this.listeners) {
          this.listeners[event].push(callback);
        } else {
          this.listeners[event] = [callback];
        }
      };

      Observable.prototype.trigger = function (event) {
        var slice = Array.prototype.slice;
        var params = slice.call(arguments, 1);

        this.listeners = this.listeners || {};

        // Params should always come in as an array
        if (params == null) {
          params = [];
        }

        // If there are no arguments to the event, use a temporary object
        if (params.length === 0) {
          params.push({});
        }

        // Set the `_type` of the first object to the event
        params[0]._type = event;

        if (event in this.listeners) {
          this.invoke(this.listeners[event], slice.call(arguments, 1));
        }

        if ('*' in this.listeners) {
          this.invoke(this.listeners['*'], arguments);
        }
      };

      Observable.prototype.invoke = function (listeners, params) {
        for (var i = 0, len = listeners.length; i < len; i++) {
          listeners[i].apply(this, params);
        }
      };

      Utils.Observable = Observable;

      Utils.generateChars = function (length) {
        var chars = '';

        for (var i = 0; i < length; i++) {
          var randomChar = Math.floor(Math.random() * 36);
          chars += randomChar.toString(36);
        }

        return chars;
      };

      Utils.bind = function (func, context) {
        return function () {
          func.apply(context, arguments);
        };
      };

      Utils._convertData = function (data) {
        for (var originalKey in data) {
          var keys = originalKey.split('-');

          var dataLevel = data;

          if (keys.length === 1) {
            continue;
          }

          for (var k = 0; k < keys.length; k++) {
            var key = keys[k];

            // Lowercase the first letter
            // By default, dash-separated becomes camelCase
            key = key.substring(0, 1).toLowerCase() + key.substring(1);

            if (!(key in dataLevel)) {
              dataLevel[key] = {};
            }

            if (k == keys.length - 1) {
              dataLevel[key] = data[originalKey];
            }

            dataLevel = dataLevel[key];
          }

          delete data[originalKey];
        }

        return data;
      };

      Utils.hasScroll = function (index, el) {
        // Adapted from the function created by @ShadowScripter
        // and adapted by @BillBarry on the Stack Exchange Code Review website.
        // The original code can be found at
        // http://codereview.stackexchange.com/q/13338
        // and was designed to be used with the Sizzle selector engine.

        var $el = $(el);
        var overflowX = el.style.overflowX;
        var overflowY = el.style.overflowY;

        //Check both x and y declarations
        if (overflowX === overflowY && (overflowY === 'hidden' || overflowY === 'visible')) {
          return false;
        }

        if (overflowX === 'scroll' || overflowY === 'scroll') {
          return true;
        }

        return $el.innerHeight() < el.scrollHeight || $el.innerWidth() < el.scrollWidth;
      };

      Utils.escapeMarkup = function (markup) {
        var replaceMap = {
          '\\': '&#92;',
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          '\'': '&#39;',
          '/': '&#47;'
        };

        // Do not try to escape the markup if it's not a string
        if (typeof markup !== 'string') {
          return markup;
        }

        return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
          return replaceMap[match];
        });
      };

      // Append an array of jQuery nodes to a given element.
      Utils.appendMany = function ($element, $nodes) {
        // jQuery 1.7.x does not support $.fn.append() with an array
        // Fall back to a jQuery object collection using $.fn.add()
        if ($.fn.jquery.substr(0, 3) === '1.7') {
          var $jqNodes = $();

          $.map($nodes, function (node) {
            $jqNodes = $jqNodes.add(node);
          });

          $nodes = $jqNodes;
        }

        $element.append($nodes);
      };

      return Utils;
    });

    S2.define('select2/results', ['jquery', './utils'], function ($, Utils) {
      function Results($element, options, dataAdapter) {
        this.$element = $element;
        this.data = dataAdapter;
        this.options = options;

        Results.__super__.constructor.call(this);
      }

      Utils.Extend(Results, Utils.Observable);

      Results.prototype.render = function () {
        var $results = $('<ul class="select2-results__options" role="tree"></ul>');

        if (this.options.get('multiple')) {
          $results.attr('aria-multiselectable', 'true');
        }

        this.$results = $results;

        return $results;
      };

      Results.prototype.clear = function () {
        this.$results.empty();
      };

      Results.prototype.displayMessage = function (params) {
        var escapeMarkup = this.options.get('escapeMarkup');

        this.clear();
        this.hideLoading();

        var $message = $('<li role="treeitem" aria-live="assertive"' + ' class="select2-results__option"></li>');

        var message = this.options.get('translations').get(params.message);

        $message.append(escapeMarkup(message(params.args)));

        $message[0].className += ' select2-results__message';

        this.$results.append($message);
      };

      Results.prototype.hideMessages = function () {
        this.$results.find('.select2-results__message').remove();
      };

      Results.prototype.append = function (data) {
        this.hideLoading();

        var $options = [];

        if (data.results == null || data.results.length === 0) {
          if (this.$results.children().length === 0) {
            this.trigger('results:message', {
              message: 'noResults'
            });
          }

          return;
        }

        data.results = this.sort(data.results);

        for (var d = 0; d < data.results.length; d++) {
          var item = data.results[d];

          var $option = this.option(item);

          $options.push($option);
        }

        this.$results.append($options);
      };

      Results.prototype.position = function ($results, $dropdown) {
        var $resultsContainer = $dropdown.find('.select2-results');
        $resultsContainer.append($results);
      };

      Results.prototype.sort = function (data) {
        var sorter = this.options.get('sorter');

        return sorter(data);
      };

      Results.prototype.highlightFirstItem = function () {
        var $options = this.$results.find('.select2-results__option[aria-selected]');

        var $selected = $options.filter('[aria-selected=true]');

        // Check if there are any selected options
        if ($selected.length > 0) {
          // If there are selected options, highlight the first
          $selected.first().trigger('mouseenter');
        } else {
          // If there are no selected options, highlight the first option
          // in the dropdown
          $options.first().trigger('mouseenter');
        }

        this.ensureHighlightVisible();
      };

      Results.prototype.setClasses = function () {
        var self = this;

        this.data.current(function (selected) {
          var selectedIds = $.map(selected, function (s) {
            return s.id.toString();
          });

          var $options = self.$results.find('.select2-results__option[aria-selected]');

          $options.each(function () {
            var $option = $(this);

            var item = $.data(this, 'data');

            // id needs to be converted to a string when comparing
            var id = '' + item.id;

            if (item.element != null && item.element.selected || item.element == null && $.inArray(id, selectedIds) > -1) {
              $option.attr('aria-selected', 'true');
            } else {
              $option.attr('aria-selected', 'false');
            }
          });
        });
      };

      Results.prototype.showLoading = function (params) {
        this.hideLoading();

        var loadingMore = this.options.get('translations').get('searching');

        var loading = {
          disabled: true,
          loading: true,
          text: loadingMore(params)
        };
        var $loading = this.option(loading);
        $loading.className += ' loading-results';

        this.$results.prepend($loading);
      };

      Results.prototype.hideLoading = function () {
        this.$results.find('.loading-results').remove();
      };

      Results.prototype.option = function (data) {
        var option = document.createElement('li');
        option.className = 'select2-results__option';

        var attrs = {
          'role': 'treeitem',
          'aria-selected': 'false'
        };

        if (data.disabled) {
          delete attrs['aria-selected'];
          attrs['aria-disabled'] = 'true';
        }

        if (data.id == null) {
          delete attrs['aria-selected'];
        }

        if (data._resultId != null) {
          option.id = data._resultId;
        }

        if (data.title) {
          option.title = data.title;
        }

        if (data.children) {
          attrs.role = 'group';
          attrs['aria-label'] = data.text;
          delete attrs['aria-selected'];
        }

        for (var attr in attrs) {
          var val = attrs[attr];

          option.setAttribute(attr, val);
        }

        if (data.children) {
          var $option = $(option);

          var label = document.createElement('strong');
          label.className = 'select2-results__group';

          var $label = $(label);
          this.template(data, label);

          var $children = [];

          for (var c = 0; c < data.children.length; c++) {
            var child = data.children[c];

            var $child = this.option(child);

            $children.push($child);
          }

          var $childrenContainer = $('<ul></ul>', {
            'class': 'select2-results__options select2-results__options--nested'
          });

          $childrenContainer.append($children);

          $option.append(label);
          $option.append($childrenContainer);
        } else {
          this.template(data, option);
        }

        $.data(option, 'data', data);

        return option;
      };

      Results.prototype.bind = function (container, $container) {
        var self = this;

        var id = container.id + '-results';

        this.$results.attr('id', id);

        container.on('results:all', function (params) {
          self.clear();
          self.append(params.data);

          if (container.isOpen()) {
            self.setClasses();
            self.highlightFirstItem();
          }
        });

        container.on('results:append', function (params) {
          self.append(params.data);

          if (container.isOpen()) {
            self.setClasses();
          }
        });

        container.on('query', function (params) {
          self.hideMessages();
          self.showLoading(params);
        });

        container.on('select', function () {
          if (!container.isOpen()) {
            return;
          }

          self.setClasses();
          self.highlightFirstItem();
        });

        container.on('unselect', function () {
          if (!container.isOpen()) {
            return;
          }

          self.setClasses();
          self.highlightFirstItem();
        });

        container.on('open', function () {
          // When the dropdown is open, aria-expended="true"
          self.$results.attr('aria-expanded', 'true');
          self.$results.attr('aria-hidden', 'false');

          self.setClasses();
          self.ensureHighlightVisible();
        });

        container.on('close', function () {
          // When the dropdown is closed, aria-expended="false"
          self.$results.attr('aria-expanded', 'false');
          self.$results.attr('aria-hidden', 'true');
          self.$results.removeAttr('aria-activedescendant');
        });

        container.on('results:toggle', function () {
          var $highlighted = self.getHighlightedResults();

          if ($highlighted.length === 0) {
            return;
          }

          $highlighted.trigger('mouseup');
        });

        container.on('results:select', function () {
          var $highlighted = self.getHighlightedResults();

          if ($highlighted.length === 0) {
            return;
          }

          var data = $highlighted.data('data');

          if ($highlighted.attr('aria-selected') == 'true') {
            self.trigger('close', {});
          } else {
            self.trigger('select', {
              data: data
            });
          }
        });

        container.on('results:previous', function () {
          var $highlighted = self.getHighlightedResults();

          var $options = self.$results.find('[aria-selected]');

          var currentIndex = $options.index($highlighted);

          // If we are already at te top, don't move further
          if (currentIndex === 0) {
            return;
          }

          var nextIndex = currentIndex - 1;

          // If none are highlighted, highlight the first
          if ($highlighted.length === 0) {
            nextIndex = 0;
          }

          var $next = $options.eq(nextIndex);

          $next.trigger('mouseenter');

          var currentOffset = self.$results.offset().top;
          var nextTop = $next.offset().top;
          var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

          if (nextIndex === 0) {
            self.$results.scrollTop(0);
          } else if (nextTop - currentOffset < 0) {
            self.$results.scrollTop(nextOffset);
          }
        });

        container.on('results:next', function () {
          var $highlighted = self.getHighlightedResults();

          var $options = self.$results.find('[aria-selected]');

          var currentIndex = $options.index($highlighted);

          var nextIndex = currentIndex + 1;

          // If we are at the last option, stay there
          if (nextIndex >= $options.length) {
            return;
          }

          var $next = $options.eq(nextIndex);

          $next.trigger('mouseenter');

          var currentOffset = self.$results.offset().top + self.$results.outerHeight(false);
          var nextBottom = $next.offset().top + $next.outerHeight(false);
          var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

          if (nextIndex === 0) {
            self.$results.scrollTop(0);
          } else if (nextBottom > currentOffset) {
            self.$results.scrollTop(nextOffset);
          }
        });

        container.on('results:focus', function (params) {
          params.element.addClass('select2-results__option--highlighted');
        });

        container.on('results:message', function (params) {
          self.displayMessage(params);
        });

        if ($.fn.mousewheel) {
          this.$results.on('mousewheel', function (e) {
            var top = self.$results.scrollTop();

            var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

            var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
            var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

            if (isAtTop) {
              self.$results.scrollTop(0);

              e.preventDefault();
              e.stopPropagation();
            } else if (isAtBottom) {
              self.$results.scrollTop(self.$results.get(0).scrollHeight - self.$results.height());

              e.preventDefault();
              e.stopPropagation();
            }
          });
        }

        this.$results.on('mouseup', '.select2-results__option[aria-selected]', function (evt) {
          var $this = $(this);

          var data = $this.data('data');

          if ($this.attr('aria-selected') === 'true') {
            if (self.options.get('multiple')) {
              self.trigger('unselect', {
                originalEvent: evt,
                data: data
              });
            } else {
              self.trigger('close', {});
            }

            return;
          }

          self.trigger('select', {
            originalEvent: evt,
            data: data
          });
        });

        this.$results.on('mouseenter', '.select2-results__option[aria-selected]', function (evt) {
          var data = $(this).data('data');

          self.getHighlightedResults().removeClass('select2-results__option--highlighted');

          self.trigger('results:focus', {
            data: data,
            element: $(this)
          });
        });
      };

      Results.prototype.getHighlightedResults = function () {
        var $highlighted = this.$results.find('.select2-results__option--highlighted');

        return $highlighted;
      };

      Results.prototype.destroy = function () {
        this.$results.remove();
      };

      Results.prototype.ensureHighlightVisible = function () {
        var $highlighted = this.getHighlightedResults();

        if ($highlighted.length === 0) {
          return;
        }

        var $options = this.$results.find('[aria-selected]');

        var currentIndex = $options.index($highlighted);

        var currentOffset = this.$results.offset().top;
        var nextTop = $highlighted.offset().top;
        var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

        var offsetDelta = nextTop - currentOffset;
        nextOffset -= $highlighted.outerHeight(false) * 2;

        if (currentIndex <= 2) {
          this.$results.scrollTop(0);
        } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
          this.$results.scrollTop(nextOffset);
        }
      };

      Results.prototype.template = function (result, container) {
        var template = this.options.get('templateResult');
        var escapeMarkup = this.options.get('escapeMarkup');

        var content = template(result, container);

        if (content == null) {
          container.style.display = 'none';
        } else if (typeof content === 'string') {
          container.innerHTML = escapeMarkup(content);
        } else {
          $(container).append(content);
        }
      };

      return Results;
    });

    S2.define('select2/keys', [], function () {
      var KEYS = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46
      };

      return KEYS;
    });

    S2.define('select2/selection/base', ['jquery', '../utils', '../keys'], function ($, Utils, KEYS) {
      function BaseSelection($element, options) {
        this.$element = $element;
        this.options = options;

        BaseSelection.__super__.constructor.call(this);
      }

      Utils.Extend(BaseSelection, Utils.Observable);

      BaseSelection.prototype.render = function () {
        var $selection = $('<span class="select2-selection" role="combobox" ' + ' aria-haspopup="true" aria-expanded="false">' + '</span>');

        this._tabindex = 0;

        if (this.$element.data('old-tabindex') != null) {
          this._tabindex = this.$element.data('old-tabindex');
        } else if (this.$element.attr('tabindex') != null) {
          this._tabindex = this.$element.attr('tabindex');
        }

        $selection.attr('title', this.$element.attr('title'));
        $selection.attr('tabindex', this._tabindex);

        this.$selection = $selection;

        return $selection;
      };

      BaseSelection.prototype.bind = function (container, $container) {
        var self = this;

        var id = container.id + '-container';
        var resultsId = container.id + '-results';

        this.container = container;

        this.$selection.on('focus', function (evt) {
          self.trigger('focus', evt);
        });

        this.$selection.on('blur', function (evt) {
          self._handleBlur(evt);
        });

        this.$selection.on('keydown', function (evt) {
          self.trigger('keypress', evt);

          if (evt.which === KEYS.SPACE) {
            evt.preventDefault();
          }
        });

        container.on('results:focus', function (params) {
          self.$selection.attr('aria-activedescendant', params.data._resultId);
        });

        container.on('selection:update', function (params) {
          self.update(params.data);
        });

        container.on('open', function () {
          // When the dropdown is open, aria-expanded="true"
          self.$selection.attr('aria-expanded', 'true');
          self.$selection.attr('aria-owns', resultsId);

          self._attachCloseHandler(container);
        });

        container.on('close', function () {
          // When the dropdown is closed, aria-expanded="false"
          self.$selection.attr('aria-expanded', 'false');
          self.$selection.removeAttr('aria-activedescendant');
          self.$selection.removeAttr('aria-owns');

          self.$selection.focus();

          self._detachCloseHandler(container);
        });

        container.on('enable', function () {
          self.$selection.attr('tabindex', self._tabindex);
        });

        container.on('disable', function () {
          self.$selection.attr('tabindex', '-1');
        });
      };

      BaseSelection.prototype._handleBlur = function (evt) {
        var self = this;

        // This needs to be delayed as the active element is the body when the tab
        // key is pressed, possibly along with others.
        window.setTimeout(function () {
          // Don't trigger `blur` if the focus is still in the selection
          if (document.activeElement == self.$selection[0] || $.contains(self.$selection[0], document.activeElement)) {
            return;
          }

          self.trigger('blur', evt);
        }, 1);
      };

      BaseSelection.prototype._attachCloseHandler = function (container) {
        var self = this;

        $(document.body).on('mousedown.select2.' + container.id, function (e) {
          var $target = $(e.target);

          var $select = $target.closest('.select2');

          var $all = $('.select2.select2-container--open');

          $all.each(function () {
            var $this = $(this);

            if (this == $select[0]) {
              return;
            }

            var $element = $this.data('element');

            $element.select2('close');
          });
        });
      };

      BaseSelection.prototype._detachCloseHandler = function (container) {
        $(document.body).off('mousedown.select2.' + container.id);
      };

      BaseSelection.prototype.position = function ($selection, $container) {
        var $selectionContainer = $container.find('.selection');
        $selectionContainer.append($selection);
      };

      BaseSelection.prototype.destroy = function () {
        this._detachCloseHandler(this.container);
      };

      BaseSelection.prototype.update = function (data) {
        throw new Error('The `update` method must be defined in child classes.');
      };

      return BaseSelection;
    });

    S2.define('select2/selection/single', ['jquery', './base', '../utils', '../keys'], function ($, BaseSelection, Utils, KEYS) {
      function SingleSelection() {
        SingleSelection.__super__.constructor.apply(this, arguments);
      }

      Utils.Extend(SingleSelection, BaseSelection);

      SingleSelection.prototype.render = function () {
        var $selection = SingleSelection.__super__.render.call(this);

        $selection.addClass('select2-selection--single');

        $selection.html('<span class="select2-selection__rendered"></span>' + '<span class="select2-selection__arrow" role="presentation">' + '<b role="presentation"></b>' + '</span>');

        return $selection;
      };

      SingleSelection.prototype.bind = function (container, $container) {
        var self = this;

        SingleSelection.__super__.bind.apply(this, arguments);

        var id = container.id + '-container';

        this.$selection.find('.select2-selection__rendered').attr('id', id);
        this.$selection.attr('aria-labelledby', id);

        this.$selection.on('mousedown', function (evt) {
          // Only respond to left clicks
          if (evt.which !== 1) {
            return;
          }

          self.trigger('toggle', {
            originalEvent: evt
          });
        });

        this.$selection.on('focus', function (evt) {
          // User focuses on the container
        });

        this.$selection.on('blur', function (evt) {
          // User exits the container
        });

        container.on('focus', function (evt) {
          if (!container.isOpen()) {
            self.$selection.focus();
          }
        });

        container.on('selection:update', function (params) {
          self.update(params.data);
        });
      };

      SingleSelection.prototype.clear = function () {
        this.$selection.find('.select2-selection__rendered').empty();
      };

      SingleSelection.prototype.display = function (data, container) {
        var template = this.options.get('templateSelection');
        var escapeMarkup = this.options.get('escapeMarkup');

        return escapeMarkup(template(data, container));
      };

      SingleSelection.prototype.selectionContainer = function () {
        return $('<span></span>');
      };

      SingleSelection.prototype.update = function (data) {
        if (data.length === 0) {
          this.clear();
          return;
        }

        var selection = data[0];

        var $rendered = this.$selection.find('.select2-selection__rendered');
        var formatted = this.display(selection, $rendered);

        $rendered.empty().append(formatted);
        $rendered.prop('title', selection.title || selection.text);
      };

      return SingleSelection;
    });

    S2.define('select2/selection/multiple', ['jquery', './base', '../utils'], function ($, BaseSelection, Utils) {
      function MultipleSelection($element, options) {
        MultipleSelection.__super__.constructor.apply(this, arguments);
      }

      Utils.Extend(MultipleSelection, BaseSelection);

      MultipleSelection.prototype.render = function () {
        var $selection = MultipleSelection.__super__.render.call(this);

        $selection.addClass('select2-selection--multiple');

        $selection.html('<ul class="select2-selection__rendered"></ul>');

        return $selection;
      };

      MultipleSelection.prototype.bind = function (container, $container) {
        var self = this;

        MultipleSelection.__super__.bind.apply(this, arguments);

        this.$selection.on('click', function (evt) {
          self.trigger('toggle', {
            originalEvent: evt
          });
        });

        this.$selection.on('click', '.select2-selection__choice__remove', function (evt) {
          // Ignore the event if it is disabled
          if (self.options.get('disabled')) {
            return;
          }

          var $remove = $(this);
          var $selection = $remove.parent();

          var data = $selection.data('data');

          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        });
      };

      MultipleSelection.prototype.clear = function () {
        this.$selection.find('.select2-selection__rendered').empty();
      };

      MultipleSelection.prototype.display = function (data, container) {
        var template = this.options.get('templateSelection');
        var escapeMarkup = this.options.get('escapeMarkup');

        return escapeMarkup(template(data, container));
      };

      MultipleSelection.prototype.selectionContainer = function () {
        var $container = $('<li class="select2-selection__choice">' + '<span class="select2-selection__choice__remove" role="presentation">' + '&times;' + '</span>' + '</li>');

        return $container;
      };

      MultipleSelection.prototype.update = function (data) {
        this.clear();

        if (data.length === 0) {
          return;
        }

        var $selections = [];

        for (var d = 0; d < data.length; d++) {
          var selection = data[d];

          var $selection = this.selectionContainer();
          var formatted = this.display(selection, $selection);

          $selection.append(formatted);
          $selection.prop('title', selection.title || selection.text);

          $selection.data('data', selection);

          $selections.push($selection);
        }

        var $rendered = this.$selection.find('.select2-selection__rendered');

        Utils.appendMany($rendered, $selections);
      };

      return MultipleSelection;
    });

    S2.define('select2/selection/placeholder', ['../utils'], function (Utils) {
      function Placeholder(decorated, $element, options) {
        this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

        decorated.call(this, $element, options);
      }

      Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
        if (typeof placeholder === 'string') {
          placeholder = {
            id: '',
            text: placeholder
          };
        }

        return placeholder;
      };

      Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
        var $placeholder = this.selectionContainer();

        $placeholder.html(this.display(placeholder));
        $placeholder.addClass('select2-selection__placeholder').removeClass('select2-selection__choice');

        return $placeholder;
      };

      Placeholder.prototype.update = function (decorated, data) {
        var singlePlaceholder = data.length == 1 && data[0].id != this.placeholder.id;
        var multipleSelections = data.length > 1;

        if (multipleSelections || singlePlaceholder) {
          return decorated.call(this, data);
        }

        this.clear();

        var $placeholder = this.createPlaceholder(this.placeholder);

        this.$selection.find('.select2-selection__rendered').append($placeholder);
      };

      return Placeholder;
    });

    S2.define('select2/selection/allowClear', ['jquery', '../keys'], function ($, KEYS) {
      function AllowClear() {}

      AllowClear.prototype.bind = function (decorated, container, $container) {
        var self = this;

        decorated.call(this, container, $container);

        if (this.placeholder == null) {
          if (this.options.get('debug') && window.console && console.error) {
            console.error('Select2: The `allowClear` option should be used in combination ' + 'with the `placeholder` option.');
          }
        }

        this.$selection.on('mousedown', '.select2-selection__clear', function (evt) {
          self._handleClear(evt);
        });

        container.on('keypress', function (evt) {
          self._handleKeyboardClear(evt, container);
        });
      };

      AllowClear.prototype._handleClear = function (_, evt) {
        // Ignore the event if it is disabled
        if (this.options.get('disabled')) {
          return;
        }

        var $clear = this.$selection.find('.select2-selection__clear');

        // Ignore the event if nothing has been selected
        if ($clear.length === 0) {
          return;
        }

        evt.stopPropagation();

        var data = $clear.data('data');

        for (var d = 0; d < data.length; d++) {
          var unselectData = {
            data: data[d]
          };

          // Trigger the `unselect` event, so people can prevent it from being
          // cleared.
          this.trigger('unselect', unselectData);

          // If the event was prevented, don't clear it out.
          if (unselectData.prevented) {
            return;
          }
        }

        this.$element.val(this.placeholder.id).trigger('change');

        this.trigger('toggle', {});
      };

      AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
        if (container.isOpen()) {
          return;
        }

        if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
          this._handleClear(evt);
        }
      };

      AllowClear.prototype.update = function (decorated, data) {
        decorated.call(this, data);

        if (this.$selection.find('.select2-selection__placeholder').length > 0 || data.length === 0) {
          return;
        }

        var $remove = $('<span class="select2-selection__clear">' + '&times;' + '</span>');
        $remove.data('data', data);

        this.$selection.find('.select2-selection__rendered').prepend($remove);
      };

      return AllowClear;
    });

    S2.define('select2/selection/search', ['jquery', '../utils', '../keys'], function ($, Utils, KEYS) {
      function Search(decorated, $element, options) {
        decorated.call(this, $element, options);
      }

      Search.prototype.render = function (decorated) {
        var $search = $('<li class="select2-search select2-search--inline">' + '<input class="select2-search__field" type="search" tabindex="-1"' + ' autocomplete="off" autocorrect="off" autocapitalize="off"' + ' spellcheck="false" role="textbox" aria-autocomplete="list" />' + '</li>');

        this.$searchContainer = $search;
        this.$search = $search.find('input');

        var $rendered = decorated.call(this);

        this._transferTabIndex();

        return $rendered;
      };

      Search.prototype.bind = function (decorated, container, $container) {
        var self = this;

        decorated.call(this, container, $container);

        container.on('open', function () {
          self.$search.trigger('focus');
        });

        container.on('close', function () {
          self.$search.val('');
          self.$search.removeAttr('aria-activedescendant');
          self.$search.trigger('focus');
        });

        container.on('enable', function () {
          self.$search.prop('disabled', false);

          self._transferTabIndex();
        });

        container.on('disable', function () {
          self.$search.prop('disabled', true);
        });

        container.on('focus', function (evt) {
          self.$search.trigger('focus');
        });

        container.on('results:focus', function (params) {
          self.$search.attr('aria-activedescendant', params.id);
        });

        this.$selection.on('focusin', '.select2-search--inline', function (evt) {
          self.trigger('focus', evt);
        });

        this.$selection.on('focusout', '.select2-search--inline', function (evt) {
          self._handleBlur(evt);
        });

        this.$selection.on('keydown', '.select2-search--inline', function (evt) {
          evt.stopPropagation();

          self.trigger('keypress', evt);

          self._keyUpPrevented = evt.isDefaultPrevented();

          var key = evt.which;

          if (key === KEYS.BACKSPACE && self.$search.val() === '') {
            var $previousChoice = self.$searchContainer.prev('.select2-selection__choice');

            if ($previousChoice.length > 0) {
              var item = $previousChoice.data('data');

              self.searchRemoveChoice(item);

              evt.preventDefault();
            }
          }
        });

        // Try to detect the IE version should the `documentMode` property that
        // is stored on the document. This is only implemented in IE and is
        // slightly cleaner than doing a user agent check.
        // This property is not available in Edge, but Edge also doesn't have
        // this bug.
        var msie = document.documentMode;
        var disableInputEvents = msie && msie <= 11;

        // Workaround for browsers which do not support the `input` event
        // This will prevent double-triggering of events for browsers which support
        // both the `keyup` and `input` events.
        this.$selection.on('input.searchcheck', '.select2-search--inline', function (evt) {
          // IE will trigger the `input` event when a placeholder is used on a
          // search box. To get around this issue, we are forced to ignore all
          // `input` events in IE and keep using `keyup`.
          if (disableInputEvents) {
            self.$selection.off('input.search input.searchcheck');
            return;
          }

          // Unbind the duplicated `keyup` event
          self.$selection.off('keyup.search');
        });

        this.$selection.on('keyup.search input.search', '.select2-search--inline', function (evt) {
          // IE will trigger the `input` event when a placeholder is used on a
          // search box. To get around this issue, we are forced to ignore all
          // `input` events in IE and keep using `keyup`.
          if (disableInputEvents && evt.type === 'input') {
            self.$selection.off('input.search input.searchcheck');
            return;
          }

          var key = evt.which;

          // We can freely ignore events from modifier keys
          if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
            return;
          }

          // Tabbing will be handled during the `keydown` phase
          if (key == KEYS.TAB) {
            return;
          }

          self.handleSearch(evt);
        });
      };

      /**
       * This method will transfer the tabindex attribute from the rendered
       * selection to the search box. This allows for the search box to be used as
       * the primary focus instead of the selection container.
       *
       * @private
       */
      Search.prototype._transferTabIndex = function (decorated) {
        this.$search.attr('tabindex', this.$selection.attr('tabindex'));
        this.$selection.attr('tabindex', '-1');
      };

      Search.prototype.createPlaceholder = function (decorated, placeholder) {
        this.$search.attr('placeholder', placeholder.text);
      };

      Search.prototype.update = function (decorated, data) {
        var searchHadFocus = this.$search[0] == document.activeElement;

        this.$search.attr('placeholder', '');

        decorated.call(this, data);

        this.$selection.find('.select2-selection__rendered').append(this.$searchContainer);

        this.resizeSearch();
        if (searchHadFocus) {
          this.$search.focus();
        }
      };

      Search.prototype.handleSearch = function () {
        this.resizeSearch();

        if (!this._keyUpPrevented) {
          var input = this.$search.val();

          this.trigger('query', {
            term: input
          });
        }

        this._keyUpPrevented = false;
      };

      Search.prototype.searchRemoveChoice = function (decorated, item) {
        this.trigger('unselect', {
          data: item
        });

        this.$search.val(item.text);
        this.handleSearch();
      };

      Search.prototype.resizeSearch = function () {
        this.$search.css('width', '25px');

        var width = '';

        if (this.$search.attr('placeholder') !== '') {
          width = this.$selection.find('.select2-selection__rendered').innerWidth();
        } else {
          var minimumWidth = this.$search.val().length + 1;

          width = minimumWidth * 0.75 + 'em';
        }

        this.$search.css('width', width);
      };

      return Search;
    });

    S2.define('select2/selection/eventRelay', ['jquery'], function ($) {
      function EventRelay() {}

      EventRelay.prototype.bind = function (decorated, container, $container) {
        var self = this;
        var relayEvents = ['open', 'opening', 'close', 'closing', 'select', 'selecting', 'unselect', 'unselecting'];

        var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];

        decorated.call(this, container, $container);

        container.on('*', function (name, params) {
          // Ignore events that should not be relayed
          if ($.inArray(name, relayEvents) === -1) {
            return;
          }

          // The parameters should always be an object
          params = params || {};

          // Generate the jQuery event for the Select2 event
          var evt = $.Event('select2:' + name, {
            params: params
          });

          self.$element.trigger(evt);

          // Only handle preventable events if it was one
          if ($.inArray(name, preventableEvents) === -1) {
            return;
          }

          params.prevented = evt.isDefaultPrevented();
        });
      };

      return EventRelay;
    });

    S2.define('select2/translation', ['jquery', 'require'], function ($, require) {
      function Translation(dict) {
        this.dict = dict || {};
      }

      Translation.prototype.all = function () {
        return this.dict;
      };

      Translation.prototype.get = function (key) {
        return this.dict[key];
      };

      Translation.prototype.extend = function (translation) {
        this.dict = $.extend({}, translation.all(), this.dict);
      };

      // Static functions

      Translation._cache = {};

      Translation.loadPath = function (path) {
        if (!(path in Translation._cache)) {
          var translations = require(path);

          Translation._cache[path] = translations;
        }

        return new Translation(Translation._cache[path]);
      };

      return Translation;
    });

    S2.define('select2/diacritics', [], function () {
      var diacritics = {
        '\u24B6': 'A',
        '\uFF21': 'A',
        '\xC0': 'A',
        '\xC1': 'A',
        '\xC2': 'A',
        '\u1EA6': 'A',
        '\u1EA4': 'A',
        '\u1EAA': 'A',
        '\u1EA8': 'A',
        '\xC3': 'A',
        '\u0100': 'A',
        '\u0102': 'A',
        '\u1EB0': 'A',
        '\u1EAE': 'A',
        '\u1EB4': 'A',
        '\u1EB2': 'A',
        '\u0226': 'A',
        '\u01E0': 'A',
        '\xC4': 'A',
        '\u01DE': 'A',
        '\u1EA2': 'A',
        '\xC5': 'A',
        '\u01FA': 'A',
        '\u01CD': 'A',
        '\u0200': 'A',
        '\u0202': 'A',
        '\u1EA0': 'A',
        '\u1EAC': 'A',
        '\u1EB6': 'A',
        '\u1E00': 'A',
        '\u0104': 'A',
        '\u023A': 'A',
        '\u2C6F': 'A',
        '\uA732': 'AA',
        '\xC6': 'AE',
        '\u01FC': 'AE',
        '\u01E2': 'AE',
        '\uA734': 'AO',
        '\uA736': 'AU',
        '\uA738': 'AV',
        '\uA73A': 'AV',
        '\uA73C': 'AY',
        '\u24B7': 'B',
        '\uFF22': 'B',
        '\u1E02': 'B',
        '\u1E04': 'B',
        '\u1E06': 'B',
        '\u0243': 'B',
        '\u0182': 'B',
        '\u0181': 'B',
        '\u24B8': 'C',
        '\uFF23': 'C',
        '\u0106': 'C',
        '\u0108': 'C',
        '\u010A': 'C',
        '\u010C': 'C',
        '\xC7': 'C',
        '\u1E08': 'C',
        '\u0187': 'C',
        '\u023B': 'C',
        '\uA73E': 'C',
        '\u24B9': 'D',
        '\uFF24': 'D',
        '\u1E0A': 'D',
        '\u010E': 'D',
        '\u1E0C': 'D',
        '\u1E10': 'D',
        '\u1E12': 'D',
        '\u1E0E': 'D',
        '\u0110': 'D',
        '\u018B': 'D',
        '\u018A': 'D',
        '\u0189': 'D',
        '\uA779': 'D',
        '\u01F1': 'DZ',
        '\u01C4': 'DZ',
        '\u01F2': 'Dz',
        '\u01C5': 'Dz',
        '\u24BA': 'E',
        '\uFF25': 'E',
        '\xC8': 'E',
        '\xC9': 'E',
        '\xCA': 'E',
        '\u1EC0': 'E',
        '\u1EBE': 'E',
        '\u1EC4': 'E',
        '\u1EC2': 'E',
        '\u1EBC': 'E',
        '\u0112': 'E',
        '\u1E14': 'E',
        '\u1E16': 'E',
        '\u0114': 'E',
        '\u0116': 'E',
        '\xCB': 'E',
        '\u1EBA': 'E',
        '\u011A': 'E',
        '\u0204': 'E',
        '\u0206': 'E',
        '\u1EB8': 'E',
        '\u1EC6': 'E',
        '\u0228': 'E',
        '\u1E1C': 'E',
        '\u0118': 'E',
        '\u1E18': 'E',
        '\u1E1A': 'E',
        '\u0190': 'E',
        '\u018E': 'E',
        '\u24BB': 'F',
        '\uFF26': 'F',
        '\u1E1E': 'F',
        '\u0191': 'F',
        '\uA77B': 'F',
        '\u24BC': 'G',
        '\uFF27': 'G',
        '\u01F4': 'G',
        '\u011C': 'G',
        '\u1E20': 'G',
        '\u011E': 'G',
        '\u0120': 'G',
        '\u01E6': 'G',
        '\u0122': 'G',
        '\u01E4': 'G',
        '\u0193': 'G',
        '\uA7A0': 'G',
        '\uA77D': 'G',
        '\uA77E': 'G',
        '\u24BD': 'H',
        '\uFF28': 'H',
        '\u0124': 'H',
        '\u1E22': 'H',
        '\u1E26': 'H',
        '\u021E': 'H',
        '\u1E24': 'H',
        '\u1E28': 'H',
        '\u1E2A': 'H',
        '\u0126': 'H',
        '\u2C67': 'H',
        '\u2C75': 'H',
        '\uA78D': 'H',
        '\u24BE': 'I',
        '\uFF29': 'I',
        '\xCC': 'I',
        '\xCD': 'I',
        '\xCE': 'I',
        '\u0128': 'I',
        '\u012A': 'I',
        '\u012C': 'I',
        '\u0130': 'I',
        '\xCF': 'I',
        '\u1E2E': 'I',
        '\u1EC8': 'I',
        '\u01CF': 'I',
        '\u0208': 'I',
        '\u020A': 'I',
        '\u1ECA': 'I',
        '\u012E': 'I',
        '\u1E2C': 'I',
        '\u0197': 'I',
        '\u24BF': 'J',
        '\uFF2A': 'J',
        '\u0134': 'J',
        '\u0248': 'J',
        '\u24C0': 'K',
        '\uFF2B': 'K',
        '\u1E30': 'K',
        '\u01E8': 'K',
        '\u1E32': 'K',
        '\u0136': 'K',
        '\u1E34': 'K',
        '\u0198': 'K',
        '\u2C69': 'K',
        '\uA740': 'K',
        '\uA742': 'K',
        '\uA744': 'K',
        '\uA7A2': 'K',
        '\u24C1': 'L',
        '\uFF2C': 'L',
        '\u013F': 'L',
        '\u0139': 'L',
        '\u013D': 'L',
        '\u1E36': 'L',
        '\u1E38': 'L',
        '\u013B': 'L',
        '\u1E3C': 'L',
        '\u1E3A': 'L',
        '\u0141': 'L',
        '\u023D': 'L',
        '\u2C62': 'L',
        '\u2C60': 'L',
        '\uA748': 'L',
        '\uA746': 'L',
        '\uA780': 'L',
        '\u01C7': 'LJ',
        '\u01C8': 'Lj',
        '\u24C2': 'M',
        '\uFF2D': 'M',
        '\u1E3E': 'M',
        '\u1E40': 'M',
        '\u1E42': 'M',
        '\u2C6E': 'M',
        '\u019C': 'M',
        '\u24C3': 'N',
        '\uFF2E': 'N',
        '\u01F8': 'N',
        '\u0143': 'N',
        '\xD1': 'N',
        '\u1E44': 'N',
        '\u0147': 'N',
        '\u1E46': 'N',
        '\u0145': 'N',
        '\u1E4A': 'N',
        '\u1E48': 'N',
        '\u0220': 'N',
        '\u019D': 'N',
        '\uA790': 'N',
        '\uA7A4': 'N',
        '\u01CA': 'NJ',
        '\u01CB': 'Nj',
        '\u24C4': 'O',
        '\uFF2F': 'O',
        '\xD2': 'O',
        '\xD3': 'O',
        '\xD4': 'O',
        '\u1ED2': 'O',
        '\u1ED0': 'O',
        '\u1ED6': 'O',
        '\u1ED4': 'O',
        '\xD5': 'O',
        '\u1E4C': 'O',
        '\u022C': 'O',
        '\u1E4E': 'O',
        '\u014C': 'O',
        '\u1E50': 'O',
        '\u1E52': 'O',
        '\u014E': 'O',
        '\u022E': 'O',
        '\u0230': 'O',
        '\xD6': 'O',
        '\u022A': 'O',
        '\u1ECE': 'O',
        '\u0150': 'O',
        '\u01D1': 'O',
        '\u020C': 'O',
        '\u020E': 'O',
        '\u01A0': 'O',
        '\u1EDC': 'O',
        '\u1EDA': 'O',
        '\u1EE0': 'O',
        '\u1EDE': 'O',
        '\u1EE2': 'O',
        '\u1ECC': 'O',
        '\u1ED8': 'O',
        '\u01EA': 'O',
        '\u01EC': 'O',
        '\xD8': 'O',
        '\u01FE': 'O',
        '\u0186': 'O',
        '\u019F': 'O',
        '\uA74A': 'O',
        '\uA74C': 'O',
        '\u01A2': 'OI',
        '\uA74E': 'OO',
        '\u0222': 'OU',
        '\u24C5': 'P',
        '\uFF30': 'P',
        '\u1E54': 'P',
        '\u1E56': 'P',
        '\u01A4': 'P',
        '\u2C63': 'P',
        '\uA750': 'P',
        '\uA752': 'P',
        '\uA754': 'P',
        '\u24C6': 'Q',
        '\uFF31': 'Q',
        '\uA756': 'Q',
        '\uA758': 'Q',
        '\u024A': 'Q',
        '\u24C7': 'R',
        '\uFF32': 'R',
        '\u0154': 'R',
        '\u1E58': 'R',
        '\u0158': 'R',
        '\u0210': 'R',
        '\u0212': 'R',
        '\u1E5A': 'R',
        '\u1E5C': 'R',
        '\u0156': 'R',
        '\u1E5E': 'R',
        '\u024C': 'R',
        '\u2C64': 'R',
        '\uA75A': 'R',
        '\uA7A6': 'R',
        '\uA782': 'R',
        '\u24C8': 'S',
        '\uFF33': 'S',
        '\u1E9E': 'S',
        '\u015A': 'S',
        '\u1E64': 'S',
        '\u015C': 'S',
        '\u1E60': 'S',
        '\u0160': 'S',
        '\u1E66': 'S',
        '\u1E62': 'S',
        '\u1E68': 'S',
        '\u0218': 'S',
        '\u015E': 'S',
        '\u2C7E': 'S',
        '\uA7A8': 'S',
        '\uA784': 'S',
        '\u24C9': 'T',
        '\uFF34': 'T',
        '\u1E6A': 'T',
        '\u0164': 'T',
        '\u1E6C': 'T',
        '\u021A': 'T',
        '\u0162': 'T',
        '\u1E70': 'T',
        '\u1E6E': 'T',
        '\u0166': 'T',
        '\u01AC': 'T',
        '\u01AE': 'T',
        '\u023E': 'T',
        '\uA786': 'T',
        '\uA728': 'TZ',
        '\u24CA': 'U',
        '\uFF35': 'U',
        '\xD9': 'U',
        '\xDA': 'U',
        '\xDB': 'U',
        '\u0168': 'U',
        '\u1E78': 'U',
        '\u016A': 'U',
        '\u1E7A': 'U',
        '\u016C': 'U',
        '\xDC': 'U',
        '\u01DB': 'U',
        '\u01D7': 'U',
        '\u01D5': 'U',
        '\u01D9': 'U',
        '\u1EE6': 'U',
        '\u016E': 'U',
        '\u0170': 'U',
        '\u01D3': 'U',
        '\u0214': 'U',
        '\u0216': 'U',
        '\u01AF': 'U',
        '\u1EEA': 'U',
        '\u1EE8': 'U',
        '\u1EEE': 'U',
        '\u1EEC': 'U',
        '\u1EF0': 'U',
        '\u1EE4': 'U',
        '\u1E72': 'U',
        '\u0172': 'U',
        '\u1E76': 'U',
        '\u1E74': 'U',
        '\u0244': 'U',
        '\u24CB': 'V',
        '\uFF36': 'V',
        '\u1E7C': 'V',
        '\u1E7E': 'V',
        '\u01B2': 'V',
        '\uA75E': 'V',
        '\u0245': 'V',
        '\uA760': 'VY',
        '\u24CC': 'W',
        '\uFF37': 'W',
        '\u1E80': 'W',
        '\u1E82': 'W',
        '\u0174': 'W',
        '\u1E86': 'W',
        '\u1E84': 'W',
        '\u1E88': 'W',
        '\u2C72': 'W',
        '\u24CD': 'X',
        '\uFF38': 'X',
        '\u1E8A': 'X',
        '\u1E8C': 'X',
        '\u24CE': 'Y',
        '\uFF39': 'Y',
        '\u1EF2': 'Y',
        '\xDD': 'Y',
        '\u0176': 'Y',
        '\u1EF8': 'Y',
        '\u0232': 'Y',
        '\u1E8E': 'Y',
        '\u0178': 'Y',
        '\u1EF6': 'Y',
        '\u1EF4': 'Y',
        '\u01B3': 'Y',
        '\u024E': 'Y',
        '\u1EFE': 'Y',
        '\u24CF': 'Z',
        '\uFF3A': 'Z',
        '\u0179': 'Z',
        '\u1E90': 'Z',
        '\u017B': 'Z',
        '\u017D': 'Z',
        '\u1E92': 'Z',
        '\u1E94': 'Z',
        '\u01B5': 'Z',
        '\u0224': 'Z',
        '\u2C7F': 'Z',
        '\u2C6B': 'Z',
        '\uA762': 'Z',
        '\u24D0': 'a',
        '\uFF41': 'a',
        '\u1E9A': 'a',
        '\xE0': 'a',
        '\xE1': 'a',
        '\xE2': 'a',
        '\u1EA7': 'a',
        '\u1EA5': 'a',
        '\u1EAB': 'a',
        '\u1EA9': 'a',
        '\xE3': 'a',
        '\u0101': 'a',
        '\u0103': 'a',
        '\u1EB1': 'a',
        '\u1EAF': 'a',
        '\u1EB5': 'a',
        '\u1EB3': 'a',
        '\u0227': 'a',
        '\u01E1': 'a',
        '\xE4': 'a',
        '\u01DF': 'a',
        '\u1EA3': 'a',
        '\xE5': 'a',
        '\u01FB': 'a',
        '\u01CE': 'a',
        '\u0201': 'a',
        '\u0203': 'a',
        '\u1EA1': 'a',
        '\u1EAD': 'a',
        '\u1EB7': 'a',
        '\u1E01': 'a',
        '\u0105': 'a',
        '\u2C65': 'a',
        '\u0250': 'a',
        '\uA733': 'aa',
        '\xE6': 'ae',
        '\u01FD': 'ae',
        '\u01E3': 'ae',
        '\uA735': 'ao',
        '\uA737': 'au',
        '\uA739': 'av',
        '\uA73B': 'av',
        '\uA73D': 'ay',
        '\u24D1': 'b',
        '\uFF42': 'b',
        '\u1E03': 'b',
        '\u1E05': 'b',
        '\u1E07': 'b',
        '\u0180': 'b',
        '\u0183': 'b',
        '\u0253': 'b',
        '\u24D2': 'c',
        '\uFF43': 'c',
        '\u0107': 'c',
        '\u0109': 'c',
        '\u010B': 'c',
        '\u010D': 'c',
        '\xE7': 'c',
        '\u1E09': 'c',
        '\u0188': 'c',
        '\u023C': 'c',
        '\uA73F': 'c',
        '\u2184': 'c',
        '\u24D3': 'd',
        '\uFF44': 'd',
        '\u1E0B': 'd',
        '\u010F': 'd',
        '\u1E0D': 'd',
        '\u1E11': 'd',
        '\u1E13': 'd',
        '\u1E0F': 'd',
        '\u0111': 'd',
        '\u018C': 'd',
        '\u0256': 'd',
        '\u0257': 'd',
        '\uA77A': 'd',
        '\u01F3': 'dz',
        '\u01C6': 'dz',
        '\u24D4': 'e',
        '\uFF45': 'e',
        '\xE8': 'e',
        '\xE9': 'e',
        '\xEA': 'e',
        '\u1EC1': 'e',
        '\u1EBF': 'e',
        '\u1EC5': 'e',
        '\u1EC3': 'e',
        '\u1EBD': 'e',
        '\u0113': 'e',
        '\u1E15': 'e',
        '\u1E17': 'e',
        '\u0115': 'e',
        '\u0117': 'e',
        '\xEB': 'e',
        '\u1EBB': 'e',
        '\u011B': 'e',
        '\u0205': 'e',
        '\u0207': 'e',
        '\u1EB9': 'e',
        '\u1EC7': 'e',
        '\u0229': 'e',
        '\u1E1D': 'e',
        '\u0119': 'e',
        '\u1E19': 'e',
        '\u1E1B': 'e',
        '\u0247': 'e',
        '\u025B': 'e',
        '\u01DD': 'e',
        '\u24D5': 'f',
        '\uFF46': 'f',
        '\u1E1F': 'f',
        '\u0192': 'f',
        '\uA77C': 'f',
        '\u24D6': 'g',
        '\uFF47': 'g',
        '\u01F5': 'g',
        '\u011D': 'g',
        '\u1E21': 'g',
        '\u011F': 'g',
        '\u0121': 'g',
        '\u01E7': 'g',
        '\u0123': 'g',
        '\u01E5': 'g',
        '\u0260': 'g',
        '\uA7A1': 'g',
        '\u1D79': 'g',
        '\uA77F': 'g',
        '\u24D7': 'h',
        '\uFF48': 'h',
        '\u0125': 'h',
        '\u1E23': 'h',
        '\u1E27': 'h',
        '\u021F': 'h',
        '\u1E25': 'h',
        '\u1E29': 'h',
        '\u1E2B': 'h',
        '\u1E96': 'h',
        '\u0127': 'h',
        '\u2C68': 'h',
        '\u2C76': 'h',
        '\u0265': 'h',
        '\u0195': 'hv',
        '\u24D8': 'i',
        '\uFF49': 'i',
        '\xEC': 'i',
        '\xED': 'i',
        '\xEE': 'i',
        '\u0129': 'i',
        '\u012B': 'i',
        '\u012D': 'i',
        '\xEF': 'i',
        '\u1E2F': 'i',
        '\u1EC9': 'i',
        '\u01D0': 'i',
        '\u0209': 'i',
        '\u020B': 'i',
        '\u1ECB': 'i',
        '\u012F': 'i',
        '\u1E2D': 'i',
        '\u0268': 'i',
        '\u0131': 'i',
        '\u24D9': 'j',
        '\uFF4A': 'j',
        '\u0135': 'j',
        '\u01F0': 'j',
        '\u0249': 'j',
        '\u24DA': 'k',
        '\uFF4B': 'k',
        '\u1E31': 'k',
        '\u01E9': 'k',
        '\u1E33': 'k',
        '\u0137': 'k',
        '\u1E35': 'k',
        '\u0199': 'k',
        '\u2C6A': 'k',
        '\uA741': 'k',
        '\uA743': 'k',
        '\uA745': 'k',
        '\uA7A3': 'k',
        '\u24DB': 'l',
        '\uFF4C': 'l',
        '\u0140': 'l',
        '\u013A': 'l',
        '\u013E': 'l',
        '\u1E37': 'l',
        '\u1E39': 'l',
        '\u013C': 'l',
        '\u1E3D': 'l',
        '\u1E3B': 'l',
        '\u017F': 'l',
        '\u0142': 'l',
        '\u019A': 'l',
        '\u026B': 'l',
        '\u2C61': 'l',
        '\uA749': 'l',
        '\uA781': 'l',
        '\uA747': 'l',
        '\u01C9': 'lj',
        '\u24DC': 'm',
        '\uFF4D': 'm',
        '\u1E3F': 'm',
        '\u1E41': 'm',
        '\u1E43': 'm',
        '\u0271': 'm',
        '\u026F': 'm',
        '\u24DD': 'n',
        '\uFF4E': 'n',
        '\u01F9': 'n',
        '\u0144': 'n',
        '\xF1': 'n',
        '\u1E45': 'n',
        '\u0148': 'n',
        '\u1E47': 'n',
        '\u0146': 'n',
        '\u1E4B': 'n',
        '\u1E49': 'n',
        '\u019E': 'n',
        '\u0272': 'n',
        '\u0149': 'n',
        '\uA791': 'n',
        '\uA7A5': 'n',
        '\u01CC': 'nj',
        '\u24DE': 'o',
        '\uFF4F': 'o',
        '\xF2': 'o',
        '\xF3': 'o',
        '\xF4': 'o',
        '\u1ED3': 'o',
        '\u1ED1': 'o',
        '\u1ED7': 'o',
        '\u1ED5': 'o',
        '\xF5': 'o',
        '\u1E4D': 'o',
        '\u022D': 'o',
        '\u1E4F': 'o',
        '\u014D': 'o',
        '\u1E51': 'o',
        '\u1E53': 'o',
        '\u014F': 'o',
        '\u022F': 'o',
        '\u0231': 'o',
        '\xF6': 'o',
        '\u022B': 'o',
        '\u1ECF': 'o',
        '\u0151': 'o',
        '\u01D2': 'o',
        '\u020D': 'o',
        '\u020F': 'o',
        '\u01A1': 'o',
        '\u1EDD': 'o',
        '\u1EDB': 'o',
        '\u1EE1': 'o',
        '\u1EDF': 'o',
        '\u1EE3': 'o',
        '\u1ECD': 'o',
        '\u1ED9': 'o',
        '\u01EB': 'o',
        '\u01ED': 'o',
        '\xF8': 'o',
        '\u01FF': 'o',
        '\u0254': 'o',
        '\uA74B': 'o',
        '\uA74D': 'o',
        '\u0275': 'o',
        '\u01A3': 'oi',
        '\u0223': 'ou',
        '\uA74F': 'oo',
        '\u24DF': 'p',
        '\uFF50': 'p',
        '\u1E55': 'p',
        '\u1E57': 'p',
        '\u01A5': 'p',
        '\u1D7D': 'p',
        '\uA751': 'p',
        '\uA753': 'p',
        '\uA755': 'p',
        '\u24E0': 'q',
        '\uFF51': 'q',
        '\u024B': 'q',
        '\uA757': 'q',
        '\uA759': 'q',
        '\u24E1': 'r',
        '\uFF52': 'r',
        '\u0155': 'r',
        '\u1E59': 'r',
        '\u0159': 'r',
        '\u0211': 'r',
        '\u0213': 'r',
        '\u1E5B': 'r',
        '\u1E5D': 'r',
        '\u0157': 'r',
        '\u1E5F': 'r',
        '\u024D': 'r',
        '\u027D': 'r',
        '\uA75B': 'r',
        '\uA7A7': 'r',
        '\uA783': 'r',
        '\u24E2': 's',
        '\uFF53': 's',
        '\xDF': 's',
        '\u015B': 's',
        '\u1E65': 's',
        '\u015D': 's',
        '\u1E61': 's',
        '\u0161': 's',
        '\u1E67': 's',
        '\u1E63': 's',
        '\u1E69': 's',
        '\u0219': 's',
        '\u015F': 's',
        '\u023F': 's',
        '\uA7A9': 's',
        '\uA785': 's',
        '\u1E9B': 's',
        '\u24E3': 't',
        '\uFF54': 't',
        '\u1E6B': 't',
        '\u1E97': 't',
        '\u0165': 't',
        '\u1E6D': 't',
        '\u021B': 't',
        '\u0163': 't',
        '\u1E71': 't',
        '\u1E6F': 't',
        '\u0167': 't',
        '\u01AD': 't',
        '\u0288': 't',
        '\u2C66': 't',
        '\uA787': 't',
        '\uA729': 'tz',
        '\u24E4': 'u',
        '\uFF55': 'u',
        '\xF9': 'u',
        '\xFA': 'u',
        '\xFB': 'u',
        '\u0169': 'u',
        '\u1E79': 'u',
        '\u016B': 'u',
        '\u1E7B': 'u',
        '\u016D': 'u',
        '\xFC': 'u',
        '\u01DC': 'u',
        '\u01D8': 'u',
        '\u01D6': 'u',
        '\u01DA': 'u',
        '\u1EE7': 'u',
        '\u016F': 'u',
        '\u0171': 'u',
        '\u01D4': 'u',
        '\u0215': 'u',
        '\u0217': 'u',
        '\u01B0': 'u',
        '\u1EEB': 'u',
        '\u1EE9': 'u',
        '\u1EEF': 'u',
        '\u1EED': 'u',
        '\u1EF1': 'u',
        '\u1EE5': 'u',
        '\u1E73': 'u',
        '\u0173': 'u',
        '\u1E77': 'u',
        '\u1E75': 'u',
        '\u0289': 'u',
        '\u24E5': 'v',
        '\uFF56': 'v',
        '\u1E7D': 'v',
        '\u1E7F': 'v',
        '\u028B': 'v',
        '\uA75F': 'v',
        '\u028C': 'v',
        '\uA761': 'vy',
        '\u24E6': 'w',
        '\uFF57': 'w',
        '\u1E81': 'w',
        '\u1E83': 'w',
        '\u0175': 'w',
        '\u1E87': 'w',
        '\u1E85': 'w',
        '\u1E98': 'w',
        '\u1E89': 'w',
        '\u2C73': 'w',
        '\u24E7': 'x',
        '\uFF58': 'x',
        '\u1E8B': 'x',
        '\u1E8D': 'x',
        '\u24E8': 'y',
        '\uFF59': 'y',
        '\u1EF3': 'y',
        '\xFD': 'y',
        '\u0177': 'y',
        '\u1EF9': 'y',
        '\u0233': 'y',
        '\u1E8F': 'y',
        '\xFF': 'y',
        '\u1EF7': 'y',
        '\u1E99': 'y',
        '\u1EF5': 'y',
        '\u01B4': 'y',
        '\u024F': 'y',
        '\u1EFF': 'y',
        '\u24E9': 'z',
        '\uFF5A': 'z',
        '\u017A': 'z',
        '\u1E91': 'z',
        '\u017C': 'z',
        '\u017E': 'z',
        '\u1E93': 'z',
        '\u1E95': 'z',
        '\u01B6': 'z',
        '\u0225': 'z',
        '\u0240': 'z',
        '\u2C6C': 'z',
        '\uA763': 'z',
        '\u0386': '\u0391',
        '\u0388': '\u0395',
        '\u0389': '\u0397',
        '\u038A': '\u0399',
        '\u03AA': '\u0399',
        '\u038C': '\u039F',
        '\u038E': '\u03A5',
        '\u03AB': '\u03A5',
        '\u038F': '\u03A9',
        '\u03AC': '\u03B1',
        '\u03AD': '\u03B5',
        '\u03AE': '\u03B7',
        '\u03AF': '\u03B9',
        '\u03CA': '\u03B9',
        '\u0390': '\u03B9',
        '\u03CC': '\u03BF',
        '\u03CD': '\u03C5',
        '\u03CB': '\u03C5',
        '\u03B0': '\u03C5',
        '\u03C9': '\u03C9',
        '\u03C2': '\u03C3'
      };

      return diacritics;
    });

    S2.define('select2/data/base', ['../utils'], function (Utils) {
      function BaseAdapter($element, options) {
        BaseAdapter.__super__.constructor.call(this);
      }

      Utils.Extend(BaseAdapter, Utils.Observable);

      BaseAdapter.prototype.current = function (callback) {
        throw new Error('The `current` method must be defined in child classes.');
      };

      BaseAdapter.prototype.query = function (params, callback) {
        throw new Error('The `query` method must be defined in child classes.');
      };

      BaseAdapter.prototype.bind = function (container, $container) {
        // Can be implemented in subclasses
      };

      BaseAdapter.prototype.destroy = function () {
        // Can be implemented in subclasses
      };

      BaseAdapter.prototype.generateResultId = function (container, data) {
        var id = container.id + '-result-';

        id += Utils.generateChars(4);

        if (data.id != null) {
          id += '-' + data.id.toString();
        } else {
          id += '-' + Utils.generateChars(4);
        }
        return id;
      };

      return BaseAdapter;
    });

    S2.define('select2/data/select', ['./base', '../utils', 'jquery'], function (BaseAdapter, Utils, $) {
      function SelectAdapter($element, options) {
        this.$element = $element;
        this.options = options;

        SelectAdapter.__super__.constructor.call(this);
      }

      Utils.Extend(SelectAdapter, BaseAdapter);

      SelectAdapter.prototype.current = function (callback) {
        var data = [];
        var self = this;

        this.$element.find(':selected').each(function () {
          var $option = $(this);

          var option = self.item($option);

          data.push(option);
        });

        callback(data);
      };

      SelectAdapter.prototype.select = function (data) {
        var self = this;

        data.selected = true;

        // If data.element is a DOM node, use it instead
        if ($(data.element).is('option')) {
          data.element.selected = true;

          this.$element.trigger('change');

          return;
        }

        if (this.$element.prop('multiple')) {
          this.current(function (currentData) {
            var val = [];

            data = [data];
            data.push.apply(data, currentData);

            for (var d = 0; d < data.length; d++) {
              var id = data[d].id;

              if ($.inArray(id, val) === -1) {
                val.push(id);
              }
            }

            self.$element.val(val);
            self.$element.trigger('change');
          });
        } else {
          var val = data.id;

          this.$element.val(val);
          this.$element.trigger('change');
        }
      };

      SelectAdapter.prototype.unselect = function (data) {
        var self = this;

        if (!this.$element.prop('multiple')) {
          return;
        }

        data.selected = false;

        if ($(data.element).is('option')) {
          data.element.selected = false;

          this.$element.trigger('change');

          return;
        }

        this.current(function (currentData) {
          var val = [];

          for (var d = 0; d < currentData.length; d++) {
            var id = currentData[d].id;

            if (id !== data.id && $.inArray(id, val) === -1) {
              val.push(id);
            }
          }

          self.$element.val(val);

          self.$element.trigger('change');
        });
      };

      SelectAdapter.prototype.bind = function (container, $container) {
        var self = this;

        this.container = container;

        container.on('select', function (params) {
          self.select(params.data);
        });

        container.on('unselect', function (params) {
          self.unselect(params.data);
        });
      };

      SelectAdapter.prototype.destroy = function () {
        // Remove anything added to child elements
        this.$element.find('*').each(function () {
          // Remove any custom data set by Select2
          $.removeData(this, 'data');
        });
      };

      SelectAdapter.prototype.query = function (params, callback) {
        var data = [];
        var self = this;

        var $options = this.$element.children();

        $options.each(function () {
          var $option = $(this);

          if (!$option.is('option') && !$option.is('optgroup')) {
            return;
          }

          var option = self.item($option);

          var matches = self.matches(params, option);

          if (matches !== null) {
            data.push(matches);
          }
        });

        callback({
          results: data
        });
      };

      SelectAdapter.prototype.addOptions = function ($options) {
        Utils.appendMany(this.$element, $options);
      };

      SelectAdapter.prototype.option = function (data) {
        var option;

        if (data.children) {
          option = document.createElement('optgroup');
          option.label = data.text;
        } else {
          option = document.createElement('option');

          if (option.textContent !== undefined) {
            option.textContent = data.text;
          } else {
            option.innerText = data.text;
          }
        }

        if (data.id) {
          option.value = data.id;
        }

        if (data.disabled) {
          option.disabled = true;
        }

        if (data.selected) {
          option.selected = true;
        }

        if (data.title) {
          option.title = data.title;
        }

        var $option = $(option);

        var normalizedData = this._normalizeItem(data);
        normalizedData.element = option;

        // Override the option's data with the combined data
        $.data(option, 'data', normalizedData);

        return $option;
      };

      SelectAdapter.prototype.item = function ($option) {
        var data = {};

        data = $.data($option[0], 'data');

        if (data != null) {
          return data;
        }

        if ($option.is('option')) {
          data = {
            id: $option.val(),
            text: $option.text(),
            disabled: $option.prop('disabled'),
            selected: $option.prop('selected'),
            title: $option.prop('title')
          };
        } else if ($option.is('optgroup')) {
          data = {
            text: $option.prop('label'),
            children: [],
            title: $option.prop('title')
          };

          var $children = $option.children('option');
          var children = [];

          for (var c = 0; c < $children.length; c++) {
            var $child = $($children[c]);

            var child = this.item($child);

            children.push(child);
          }

          data.children = children;
        }

        data = this._normalizeItem(data);
        data.element = $option[0];

        $.data($option[0], 'data', data);

        return data;
      };

      SelectAdapter.prototype._normalizeItem = function (item) {
        if (!$.isPlainObject(item)) {
          item = {
            id: item,
            text: item
          };
        }

        item = $.extend({}, {
          text: ''
        }, item);

        var defaults = {
          selected: false,
          disabled: false
        };

        if (item.id != null) {
          item.id = item.id.toString();
        }

        if (item.text != null) {
          item.text = item.text.toString();
        }

        if (item._resultId == null && item.id && this.container != null) {
          item._resultId = this.generateResultId(this.container, item);
        }

        return $.extend({}, defaults, item);
      };

      SelectAdapter.prototype.matches = function (params, data) {
        var matcher = this.options.get('matcher');

        return matcher(params, data);
      };

      return SelectAdapter;
    });

    S2.define('select2/data/array', ['./select', '../utils', 'jquery'], function (SelectAdapter, Utils, $) {
      function ArrayAdapter($element, options) {
        var data = options.get('data') || [];

        ArrayAdapter.__super__.constructor.call(this, $element, options);

        this.addOptions(this.convertToOptions(data));
      }

      Utils.Extend(ArrayAdapter, SelectAdapter);

      ArrayAdapter.prototype.select = function (data) {
        var $option = this.$element.find('option').filter(function (i, elm) {
          return elm.value == data.id.toString();
        });

        if ($option.length === 0) {
          $option = this.option(data);

          this.addOptions($option);
        }

        ArrayAdapter.__super__.select.call(this, data);
      };

      ArrayAdapter.prototype.convertToOptions = function (data) {
        var self = this;

        var $existing = this.$element.find('option');
        var existingIds = $existing.map(function () {
          return self.item($(this)).id;
        }).get();

        var $options = [];

        // Filter out all items except for the one passed in the argument
        function onlyItem(item) {
          return function () {
            return $(this).val() == item.id;
          };
        }

        for (var d = 0; d < data.length; d++) {
          var item = this._normalizeItem(data[d]);

          // Skip items which were pre-loaded, only merge the data
          if ($.inArray(item.id, existingIds) >= 0) {
            var $existingOption = $existing.filter(onlyItem(item));

            var existingData = this.item($existingOption);
            var newData = $.extend(true, {}, item, existingData);

            var $newOption = this.option(newData);

            $existingOption.replaceWith($newOption);

            continue;
          }

          var $option = this.option(item);

          if (item.children) {
            var $children = this.convertToOptions(item.children);

            Utils.appendMany($option, $children);
          }

          $options.push($option);
        }

        return $options;
      };

      return ArrayAdapter;
    });

    S2.define('select2/data/ajax', ['./array', '../utils', 'jquery'], function (ArrayAdapter, Utils, $) {
      function AjaxAdapter($element, options) {
        this.ajaxOptions = this._applyDefaults(options.get('ajax'));

        if (this.ajaxOptions.processResults != null) {
          this.processResults = this.ajaxOptions.processResults;
        }

        AjaxAdapter.__super__.constructor.call(this, $element, options);
      }

      Utils.Extend(AjaxAdapter, ArrayAdapter);

      AjaxAdapter.prototype._applyDefaults = function (options) {
        var defaults = {
          data: function data(params) {
            return $.extend({}, params, {
              q: params.term
            });
          },
          transport: function transport(params, success, failure) {
            var $request = $.ajax(params);

            $request.then(success);
            $request.fail(failure);

            return $request;
          }
        };

        return $.extend({}, defaults, options, true);
      };

      AjaxAdapter.prototype.processResults = function (results) {
        return results;
      };

      AjaxAdapter.prototype.query = function (params, callback) {
        var matches = [];
        var self = this;

        if (this._request != null) {
          // JSONP requests cannot always be aborted
          if ($.isFunction(this._request.abort)) {
            this._request.abort();
          }

          this._request = null;
        }

        var options = $.extend({
          type: 'GET'
        }, this.ajaxOptions);

        if (typeof options.url === 'function') {
          options.url = options.url.call(this.$element, params);
        }

        if (typeof options.data === 'function') {
          options.data = options.data.call(this.$element, params);
        }

        function request() {
          var $request = options.transport(options, function (data) {
            var results = self.processResults(data, params);

            if (self.options.get('debug') && window.console && console.error) {
              // Check to make sure that the response included a `results` key.
              if (!results || !results.results || !$.isArray(results.results)) {
                console.error('Select2: The AJAX results did not return an array in the ' + '`results` key of the response.');
              }
            }

            callback(results);
          }, function () {
            // Attempt to detect if a request was aborted
            // Only works if the transport exposes a status property
            if ($request.status && $request.status === '0') {
              return;
            }

            self.trigger('results:message', {
              message: 'errorLoading'
            });
          });

          self._request = $request;
        }

        if (this.ajaxOptions.delay && params.term != null) {
          if (this._queryTimeout) {
            window.clearTimeout(this._queryTimeout);
          }

          this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
        } else {
          request();
        }
      };

      return AjaxAdapter;
    });

    S2.define('select2/data/tags', ['jquery'], function ($) {
      function Tags(decorated, $element, options) {
        var tags = options.get('tags');

        var createTag = options.get('createTag');

        if (createTag !== undefined) {
          this.createTag = createTag;
        }

        var insertTag = options.get('insertTag');

        if (insertTag !== undefined) {
          this.insertTag = insertTag;
        }

        decorated.call(this, $element, options);

        if ($.isArray(tags)) {
          for (var t = 0; t < tags.length; t++) {
            var tag = tags[t];
            var item = this._normalizeItem(tag);

            var $option = this.option(item);

            this.$element.append($option);
          }
        }
      }

      Tags.prototype.query = function (decorated, params, callback) {
        var self = this;

        this._removeOldTags();

        if (params.term == null || params.page != null) {
          decorated.call(this, params, callback);
          return;
        }

        function wrapper(obj, child) {
          var data = obj.results;

          for (var i = 0; i < data.length; i++) {
            var option = data[i];

            var checkChildren = option.children != null && !wrapper({
              results: option.children
            }, true);

            var checkText = option.text === params.term;

            if (checkText || checkChildren) {
              if (child) {
                return false;
              }

              obj.data = data;
              callback(obj);

              return;
            }
          }

          if (child) {
            return true;
          }

          var tag = self.createTag(params);

          if (tag != null) {
            var $option = self.option(tag);
            $option.attr('data-select2-tag', true);

            self.addOptions([$option]);

            self.insertTag(data, tag);
          }

          obj.results = data;

          callback(obj);
        }

        decorated.call(this, params, wrapper);
      };

      Tags.prototype.createTag = function (decorated, params) {
        var term = $.trim(params.term);

        if (term === '') {
          return null;
        }

        return {
          id: term,
          text: term
        };
      };

      Tags.prototype.insertTag = function (_, data, tag) {
        data.unshift(tag);
      };

      Tags.prototype._removeOldTags = function (_) {
        var tag = this._lastTag;

        var $options = this.$element.find('option[data-select2-tag]');

        $options.each(function () {
          if (this.selected) {
            return;
          }

          $(this).remove();
        });
      };

      return Tags;
    });

    S2.define('select2/data/tokenizer', ['jquery'], function ($) {
      function Tokenizer(decorated, $element, options) {
        var tokenizer = options.get('tokenizer');

        if (tokenizer !== undefined) {
          this.tokenizer = tokenizer;
        }

        decorated.call(this, $element, options);
      }

      Tokenizer.prototype.bind = function (decorated, container, $container) {
        decorated.call(this, container, $container);

        this.$search = container.dropdown.$search || container.selection.$search || $container.find('.select2-search__field');
      };

      Tokenizer.prototype.query = function (decorated, params, callback) {
        var self = this;

        function createAndSelect(data) {
          // Normalize the data object so we can use it for checks
          var item = self._normalizeItem(data);

          // Check if the data object already exists as a tag
          // Select it if it doesn't
          var $existingOptions = self.$element.find('option').filter(function () {
            return $(this).val() === item.id;
          });

          // If an existing option wasn't found for it, create the option
          if (!$existingOptions.length) {
            var $option = self.option(item);
            $option.attr('data-select2-tag', true);

            self._removeOldTags();
            self.addOptions([$option]);
          }

          // Select the item, now that we know there is an option for it
          select(item);
        }

        function select(data) {
          self.trigger('select', {
            data: data
          });
        }

        params.term = params.term || '';

        var tokenData = this.tokenizer(params, this.options, createAndSelect);

        if (tokenData.term !== params.term) {
          // Replace the search term if we have the search box
          if (this.$search.length) {
            this.$search.val(tokenData.term);
            this.$search.focus();
          }

          params.term = tokenData.term;
        }

        decorated.call(this, params, callback);
      };

      Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
        var separators = options.get('tokenSeparators') || [];
        var term = params.term;
        var i = 0;

        var createTag = this.createTag || function (params) {
          return {
            id: params.term,
            text: params.term
          };
        };

        while (i < term.length) {
          var termChar = term[i];

          if ($.inArray(termChar, separators) === -1) {
            i++;

            continue;
          }

          var part = term.substr(0, i);
          var partParams = $.extend({}, params, {
            term: part
          });

          var data = createTag(partParams);

          if (data == null) {
            i++;
            continue;
          }

          callback(data);

          // Reset the term to not include the tokenized portion
          term = term.substr(i + 1) || '';
          i = 0;
        }

        return {
          term: term
        };
      };

      return Tokenizer;
    });

    S2.define('select2/data/minimumInputLength', [], function () {
      function MinimumInputLength(decorated, $e, options) {
        this.minimumInputLength = options.get('minimumInputLength');

        decorated.call(this, $e, options);
      }

      MinimumInputLength.prototype.query = function (decorated, params, callback) {
        params.term = params.term || '';

        if (params.term.length < this.minimumInputLength) {
          this.trigger('results:message', {
            message: 'inputTooShort',
            args: {
              minimum: this.minimumInputLength,
              input: params.term,
              params: params
            }
          });

          return;
        }

        decorated.call(this, params, callback);
      };

      return MinimumInputLength;
    });

    S2.define('select2/data/maximumInputLength', [], function () {
      function MaximumInputLength(decorated, $e, options) {
        this.maximumInputLength = options.get('maximumInputLength');

        decorated.call(this, $e, options);
      }

      MaximumInputLength.prototype.query = function (decorated, params, callback) {
        params.term = params.term || '';

        if (this.maximumInputLength > 0 && params.term.length > this.maximumInputLength) {
          this.trigger('results:message', {
            message: 'inputTooLong',
            args: {
              maximum: this.maximumInputLength,
              input: params.term,
              params: params
            }
          });

          return;
        }

        decorated.call(this, params, callback);
      };

      return MaximumInputLength;
    });

    S2.define('select2/data/maximumSelectionLength', [], function () {
      function MaximumSelectionLength(decorated, $e, options) {
        this.maximumSelectionLength = options.get('maximumSelectionLength');

        decorated.call(this, $e, options);
      }

      MaximumSelectionLength.prototype.query = function (decorated, params, callback) {
        var self = this;

        this.current(function (currentData) {
          var count = currentData != null ? currentData.length : 0;
          if (self.maximumSelectionLength > 0 && count >= self.maximumSelectionLength) {
            self.trigger('results:message', {
              message: 'maximumSelected',
              args: {
                maximum: self.maximumSelectionLength
              }
            });
            return;
          }
          decorated.call(self, params, callback);
        });
      };

      return MaximumSelectionLength;
    });

    S2.define('select2/dropdown', ['jquery', './utils'], function ($, Utils) {
      function Dropdown($element, options) {
        this.$element = $element;
        this.options = options;

        Dropdown.__super__.constructor.call(this);
      }

      Utils.Extend(Dropdown, Utils.Observable);

      Dropdown.prototype.render = function () {
        var $dropdown = $('<span class="select2-dropdown">' + '<span class="select2-results"></span>' + '</span>');

        $dropdown.attr('dir', this.options.get('dir'));

        this.$dropdown = $dropdown;

        return $dropdown;
      };

      Dropdown.prototype.bind = function () {
        // Should be implemented in subclasses
      };

      Dropdown.prototype.position = function ($dropdown, $container) {
        // Should be implmented in subclasses
      };

      Dropdown.prototype.destroy = function () {
        // Remove the dropdown from the DOM
        this.$dropdown.remove();
      };

      return Dropdown;
    });

    S2.define('select2/dropdown/search', ['jquery', '../utils'], function ($, Utils) {
      function Search() {}

      Search.prototype.render = function (decorated) {
        var $rendered = decorated.call(this);

        var $search = $('<span class="select2-search select2-search--dropdown">' + '<input class="select2-search__field" type="search" tabindex="-1"' + ' autocomplete="off" autocorrect="off" autocapitalize="off"' + ' spellcheck="false" role="textbox" />' + '</span>');

        this.$searchContainer = $search;
        this.$search = $search.find('input');

        $rendered.prepend($search);

        return $rendered;
      };

      Search.prototype.bind = function (decorated, container, $container) {
        var self = this;

        decorated.call(this, container, $container);

        this.$search.on('keydown', function (evt) {
          self.trigger('keypress', evt);

          self._keyUpPrevented = evt.isDefaultPrevented();
        });

        // Workaround for browsers which do not support the `input` event
        // This will prevent double-triggering of events for browsers which support
        // both the `keyup` and `input` events.
        this.$search.on('input', function (evt) {
          // Unbind the duplicated `keyup` event
          $(this).off('keyup');
        });

        this.$search.on('keyup input', function (evt) {
          self.handleSearch(evt);
        });

        container.on('open', function () {
          self.$search.attr('tabindex', 0);

          self.$search.focus();

          window.setTimeout(function () {
            self.$search.focus();
          }, 0);
        });

        container.on('close', function () {
          self.$search.attr('tabindex', -1);

          self.$search.val('');
        });

        container.on('focus', function () {
          if (container.isOpen()) {
            self.$search.focus();
          }
        });

        container.on('results:all', function (params) {
          if (params.query.term == null || params.query.term === '') {
            var showSearch = self.showSearch(params);

            if (showSearch) {
              self.$searchContainer.removeClass('select2-search--hide');
            } else {
              self.$searchContainer.addClass('select2-search--hide');
            }
          }
        });
      };

      Search.prototype.handleSearch = function (evt) {
        if (!this._keyUpPrevented) {
          var input = this.$search.val();

          this.trigger('query', {
            term: input
          });
        }

        this._keyUpPrevented = false;
      };

      Search.prototype.showSearch = function (_, params) {
        return true;
      };

      return Search;
    });

    S2.define('select2/dropdown/hidePlaceholder', [], function () {
      function HidePlaceholder(decorated, $element, options, dataAdapter) {
        this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

        decorated.call(this, $element, options, dataAdapter);
      }

      HidePlaceholder.prototype.append = function (decorated, data) {
        data.results = this.removePlaceholder(data.results);

        decorated.call(this, data);
      };

      HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
        if (typeof placeholder === 'string') {
          placeholder = {
            id: '',
            text: placeholder
          };
        }

        return placeholder;
      };

      HidePlaceholder.prototype.removePlaceholder = function (_, data) {
        var modifiedData = data.slice(0);

        for (var d = data.length - 1; d >= 0; d--) {
          var item = data[d];

          if (this.placeholder.id === item.id) {
            modifiedData.splice(d, 1);
          }
        }

        return modifiedData;
      };

      return HidePlaceholder;
    });

    S2.define('select2/dropdown/infiniteScroll', ['jquery'], function ($) {
      function InfiniteScroll(decorated, $element, options, dataAdapter) {
        this.lastParams = {};

        decorated.call(this, $element, options, dataAdapter);

        this.$loadingMore = this.createLoadingMore();
        this.loading = false;
      }

      InfiniteScroll.prototype.append = function (decorated, data) {
        this.$loadingMore.remove();
        this.loading = false;

        decorated.call(this, data);

        if (this.showLoadingMore(data)) {
          this.$results.append(this.$loadingMore);
        }
      };

      InfiniteScroll.prototype.bind = function (decorated, container, $container) {
        var self = this;

        decorated.call(this, container, $container);

        container.on('query', function (params) {
          self.lastParams = params;
          self.loading = true;
        });

        container.on('query:append', function (params) {
          self.lastParams = params;
          self.loading = true;
        });

        this.$results.on('scroll', function () {
          var isLoadMoreVisible = $.contains(document.documentElement, self.$loadingMore[0]);

          if (self.loading || !isLoadMoreVisible) {
            return;
          }

          var currentOffset = self.$results.offset().top + self.$results.outerHeight(false);
          var loadingMoreOffset = self.$loadingMore.offset().top + self.$loadingMore.outerHeight(false);

          if (currentOffset + 50 >= loadingMoreOffset) {
            self.loadMore();
          }
        });
      };

      InfiniteScroll.prototype.loadMore = function () {
        this.loading = true;

        var params = $.extend({}, { page: 1 }, this.lastParams);

        params.page++;

        this.trigger('query:append', params);
      };

      InfiniteScroll.prototype.showLoadingMore = function (_, data) {
        return data.pagination && data.pagination.more;
      };

      InfiniteScroll.prototype.createLoadingMore = function () {
        var $option = $('<li ' + 'class="select2-results__option select2-results__option--load-more"' + 'role="treeitem" aria-disabled="true"></li>');

        var message = this.options.get('translations').get('loadingMore');

        $option.html(message(this.lastParams));

        return $option;
      };

      return InfiniteScroll;
    });

    S2.define('select2/dropdown/attachBody', ['jquery', '../utils'], function ($, Utils) {
      function AttachBody(decorated, $element, options) {
        this.$dropdownParent = options.get('dropdownParent') || $(document.body);

        decorated.call(this, $element, options);
      }

      AttachBody.prototype.bind = function (decorated, container, $container) {
        var self = this;

        var setupResultsEvents = false;

        decorated.call(this, container, $container);

        container.on('open', function () {
          self._showDropdown();
          self._attachPositioningHandler(container);

          if (!setupResultsEvents) {
            setupResultsEvents = true;

            container.on('results:all', function () {
              self._positionDropdown();
              self._resizeDropdown();
            });

            container.on('results:append', function () {
              self._positionDropdown();
              self._resizeDropdown();
            });
          }
        });

        container.on('close', function () {
          self._hideDropdown();
          self._detachPositioningHandler(container);
        });

        this.$dropdownContainer.on('mousedown', function (evt) {
          evt.stopPropagation();
        });
      };

      AttachBody.prototype.destroy = function (decorated) {
        decorated.call(this);

        this.$dropdownContainer.remove();
      };

      AttachBody.prototype.position = function (decorated, $dropdown, $container) {
        // Clone all of the container classes
        $dropdown.attr('class', $container.attr('class'));

        $dropdown.removeClass('select2');
        $dropdown.addClass('select2-container--open');

        $dropdown.css({
          position: 'absolute',
          top: -999999
        });

        this.$container = $container;
      };

      AttachBody.prototype.render = function (decorated) {
        var $container = $('<span></span>');

        var $dropdown = decorated.call(this);
        $container.append($dropdown);

        this.$dropdownContainer = $container;

        return $container;
      };

      AttachBody.prototype._hideDropdown = function (decorated) {
        this.$dropdownContainer.detach();
      };

      AttachBody.prototype._attachPositioningHandler = function (decorated, container) {
        var self = this;

        var scrollEvent = 'scroll.select2.' + container.id;
        var resizeEvent = 'resize.select2.' + container.id;
        var orientationEvent = 'orientationchange.select2.' + container.id;

        var $watchers = this.$container.parents().filter(Utils.hasScroll);
        $watchers.each(function () {
          $(this).data('select2-scroll-position', {
            x: $(this).scrollLeft(),
            y: $(this).scrollTop()
          });
        });

        $watchers.on(scrollEvent, function (ev) {
          var position = $(this).data('select2-scroll-position');
          $(this).scrollTop(position.y);
        });

        $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent, function (e) {
          self._positionDropdown();
          self._resizeDropdown();
        });
      };

      AttachBody.prototype._detachPositioningHandler = function (decorated, container) {
        var scrollEvent = 'scroll.select2.' + container.id;
        var resizeEvent = 'resize.select2.' + container.id;
        var orientationEvent = 'orientationchange.select2.' + container.id;

        var $watchers = this.$container.parents().filter(Utils.hasScroll);
        $watchers.off(scrollEvent);

        $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
      };

      AttachBody.prototype._positionDropdown = function () {
        var $window = $(window);

        var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
        var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

        var newDirection = null;

        var offset = this.$container.offset();

        offset.bottom = offset.top + this.$container.outerHeight(false);

        var container = {
          height: this.$container.outerHeight(false)
        };

        container.top = offset.top;
        container.bottom = offset.top + container.height;

        var dropdown = {
          height: this.$dropdown.outerHeight(false)
        };

        var viewport = {
          top: $window.scrollTop(),
          bottom: $window.scrollTop() + $window.height()
        };

        var enoughRoomAbove = viewport.top < offset.top - dropdown.height;
        var enoughRoomBelow = viewport.bottom > offset.bottom + dropdown.height;

        var css = {
          left: offset.left,
          top: container.bottom
        };

        // Determine what the parent element is to use for calciulating the offset
        var $offsetParent = this.$dropdownParent;

        // For statically positoned elements, we need to get the element
        // that is determining the offset
        if ($offsetParent.css('position') === 'static') {
          $offsetParent = $offsetParent.offsetParent();
        }

        var parentOffset = $offsetParent.offset();

        css.top -= parentOffset.top;
        css.left -= parentOffset.left;

        if (!isCurrentlyAbove && !isCurrentlyBelow) {
          newDirection = 'below';
        }

        if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
          newDirection = 'above';
        } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
          newDirection = 'below';
        }

        if (newDirection == 'above' || isCurrentlyAbove && newDirection !== 'below') {
          css.top = container.top - parentOffset.top - dropdown.height;
        }

        if (newDirection != null) {
          this.$dropdown.removeClass('select2-dropdown--below select2-dropdown--above').addClass('select2-dropdown--' + newDirection);
          this.$container.removeClass('select2-container--below select2-container--above').addClass('select2-container--' + newDirection);
        }

        this.$dropdownContainer.css(css);
      };

      AttachBody.prototype._resizeDropdown = function () {
        var css = {
          width: this.$container.outerWidth(false) + 'px'
        };

        if (this.options.get('dropdownAutoWidth')) {
          css.minWidth = css.width;
          css.position = 'relative';
          css.width = 'auto';
        }

        this.$dropdown.css(css);
      };

      AttachBody.prototype._showDropdown = function (decorated) {
        this.$dropdownContainer.appendTo(this.$dropdownParent);

        this._positionDropdown();
        this._resizeDropdown();
      };

      return AttachBody;
    });

    S2.define('select2/dropdown/minimumResultsForSearch', [], function () {
      function countResults(data) {
        var count = 0;

        for (var d = 0; d < data.length; d++) {
          var item = data[d];

          if (item.children) {
            count += countResults(item.children);
          } else {
            count++;
          }
        }

        return count;
      }

      function MinimumResultsForSearch(decorated, $element, options, dataAdapter) {
        this.minimumResultsForSearch = options.get('minimumResultsForSearch');

        if (this.minimumResultsForSearch < 0) {
          this.minimumResultsForSearch = Infinity;
        }

        decorated.call(this, $element, options, dataAdapter);
      }

      MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
        if (countResults(params.data.results) < this.minimumResultsForSearch) {
          return false;
        }

        return decorated.call(this, params);
      };

      return MinimumResultsForSearch;
    });

    S2.define('select2/dropdown/selectOnClose', [], function () {
      function SelectOnClose() {}

      SelectOnClose.prototype.bind = function (decorated, container, $container) {
        var self = this;

        decorated.call(this, container, $container);

        container.on('close', function (params) {
          self._handleSelectOnClose(params);
        });
      };

      SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
        if (params && params.originalSelect2Event != null) {
          var event = params.originalSelect2Event;

          // Don't select an item if the close event was triggered from a select or
          // unselect event
          if (event._type === 'select' || event._type === 'unselect') {
            return;
          }
        }

        var $highlightedResults = this.getHighlightedResults();

        // Only select highlighted results
        if ($highlightedResults.length < 1) {
          return;
        }

        var data = $highlightedResults.data('data');

        // Don't re-select already selected resulte
        if (data.element != null && data.element.selected || data.element == null && data.selected) {
          return;
        }

        this.trigger('select', {
          data: data
        });
      };

      return SelectOnClose;
    });

    S2.define('select2/dropdown/closeOnSelect', [], function () {
      function CloseOnSelect() {}

      CloseOnSelect.prototype.bind = function (decorated, container, $container) {
        var self = this;

        decorated.call(this, container, $container);

        container.on('select', function (evt) {
          self._selectTriggered(evt);
        });

        container.on('unselect', function (evt) {
          self._selectTriggered(evt);
        });
      };

      CloseOnSelect.prototype._selectTriggered = function (_, evt) {
        var originalEvent = evt.originalEvent;

        // Don't close if the control key is being held
        if (originalEvent && originalEvent.ctrlKey) {
          return;
        }

        this.trigger('close', {
          originalEvent: originalEvent,
          originalSelect2Event: evt
        });
      };

      return CloseOnSelect;
    });

    S2.define('select2/i18n/en', [], function () {
      // English
      return {
        errorLoading: function errorLoading() {
          return 'The results could not be loaded.';
        },
        inputTooLong: function inputTooLong(args) {
          var overChars = args.input.length - args.maximum;

          var message = 'Please delete ' + overChars + ' character';

          if (overChars != 1) {
            message += 's';
          }

          return message;
        },
        inputTooShort: function inputTooShort(args) {
          var remainingChars = args.minimum - args.input.length;

          var message = 'Please enter ' + remainingChars + ' or more characters';

          return message;
        },
        loadingMore: function loadingMore() {
          return 'Loading more results…';
        },
        maximumSelected: function maximumSelected(args) {
          var message = 'You can only select ' + args.maximum + ' item';

          if (args.maximum != 1) {
            message += 's';
          }

          return message;
        },
        noResults: function noResults() {
          return 'No results found';
        },
        searching: function searching() {
          return 'Searching…';
        }
      };
    });

    S2.define('select2/defaults', ['jquery', 'require', './results', './selection/single', './selection/multiple', './selection/placeholder', './selection/allowClear', './selection/search', './selection/eventRelay', './utils', './translation', './diacritics', './data/select', './data/array', './data/ajax', './data/tags', './data/tokenizer', './data/minimumInputLength', './data/maximumInputLength', './data/maximumSelectionLength', './dropdown', './dropdown/search', './dropdown/hidePlaceholder', './dropdown/infiniteScroll', './dropdown/attachBody', './dropdown/minimumResultsForSearch', './dropdown/selectOnClose', './dropdown/closeOnSelect', './i18n/en'], function ($, require, ResultsList, SingleSelection, MultipleSelection, Placeholder, AllowClear, SelectionSearch, EventRelay, Utils, Translation, DIACRITICS, SelectData, ArrayData, AjaxData, Tags, Tokenizer, MinimumInputLength, MaximumInputLength, MaximumSelectionLength, Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll, AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect, EnglishTranslation) {
      function Defaults() {
        this.reset();
      }

      Defaults.prototype.apply = function (options) {
        options = $.extend(true, {}, this.defaults, options);

        if (options.dataAdapter == null) {
          if (options.ajax != null) {
            options.dataAdapter = AjaxData;
          } else if (options.data != null) {
            options.dataAdapter = ArrayData;
          } else {
            options.dataAdapter = SelectData;
          }

          if (options.minimumInputLength > 0) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, MinimumInputLength);
          }

          if (options.maximumInputLength > 0) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, MaximumInputLength);
          }

          if (options.maximumSelectionLength > 0) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, MaximumSelectionLength);
          }

          if (options.tags) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
          }

          if (options.tokenSeparators != null || options.tokenizer != null) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, Tokenizer);
          }

          if (options.query != null) {
            var Query = require(options.amdBase + 'compat/query');

            options.dataAdapter = Utils.Decorate(options.dataAdapter, Query);
          }

          if (options.initSelection != null) {
            var InitSelection = require(options.amdBase + 'compat/initSelection');

            options.dataAdapter = Utils.Decorate(options.dataAdapter, InitSelection);
          }
        }

        if (options.resultsAdapter == null) {
          options.resultsAdapter = ResultsList;

          if (options.ajax != null) {
            options.resultsAdapter = Utils.Decorate(options.resultsAdapter, InfiniteScroll);
          }

          if (options.placeholder != null) {
            options.resultsAdapter = Utils.Decorate(options.resultsAdapter, HidePlaceholder);
          }

          if (options.selectOnClose) {
            options.resultsAdapter = Utils.Decorate(options.resultsAdapter, SelectOnClose);
          }
        }

        if (options.dropdownAdapter == null) {
          if (options.multiple) {
            options.dropdownAdapter = Dropdown;
          } else {
            var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

            options.dropdownAdapter = SearchableDropdown;
          }

          if (options.minimumResultsForSearch !== 0) {
            options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, MinimumResultsForSearch);
          }

          if (options.closeOnSelect) {
            options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, CloseOnSelect);
          }

          if (options.dropdownCssClass != null || options.dropdownCss != null || options.adaptDropdownCssClass != null) {
            var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

            options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, DropdownCSS);
          }

          options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, AttachBody);
        }

        if (options.selectionAdapter == null) {
          if (options.multiple) {
            options.selectionAdapter = MultipleSelection;
          } else {
            options.selectionAdapter = SingleSelection;
          }

          // Add the placeholder mixin if a placeholder was specified
          if (options.placeholder != null) {
            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, Placeholder);
          }

          if (options.allowClear) {
            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, AllowClear);
          }

          if (options.multiple) {
            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, SelectionSearch);
          }

          if (options.containerCssClass != null || options.containerCss != null || options.adaptContainerCssClass != null) {
            var ContainerCSS = require(options.amdBase + 'compat/containerCss');

            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, ContainerCSS);
          }

          options.selectionAdapter = Utils.Decorate(options.selectionAdapter, EventRelay);
        }

        if (typeof options.language === 'string') {
          // Check if the language is specified with a region
          if (options.language.indexOf('-') > 0) {
            // Extract the region information if it is included
            var languageParts = options.language.split('-');
            var baseLanguage = languageParts[0];

            options.language = [options.language, baseLanguage];
          } else {
            options.language = [options.language];
          }
        }

        if ($.isArray(options.language)) {
          var languages = new Translation();
          options.language.push('en');

          var languageNames = options.language;

          for (var l = 0; l < languageNames.length; l++) {
            var name = languageNames[l];
            var language = {};

            try {
              // Try to load it with the original name
              language = Translation.loadPath(name);
            } catch (e) {
              try {
                // If we couldn't load it, check if it wasn't the full path
                name = this.defaults.amdLanguageBase + name;
                language = Translation.loadPath(name);
              } catch (ex) {
                // The translation could not be loaded at all. Sometimes this is
                // because of a configuration problem, other times this can be
                // because of how Select2 helps load all possible translation files.
                if (options.debug && window.console && console.warn) {
                  console.warn('Select2: The language file for "' + name + '" could not be ' + 'automatically loaded. A fallback will be used instead.');
                }

                continue;
              }
            }

            languages.extend(language);
          }

          options.translations = languages;
        } else {
          var baseTranslation = Translation.loadPath(this.defaults.amdLanguageBase + 'en');
          var customTranslation = new Translation(options.language);

          customTranslation.extend(baseTranslation);

          options.translations = customTranslation;
        }

        return options;
      };

      Defaults.prototype.reset = function () {
        function stripDiacritics(text) {
          // Used 'uni range + named function' from http://jsperf.com/diacritics/18
          function match(a) {
            return DIACRITICS[a] || a;
          }

          return text.replace(/[^\u0000-\u007E]/g, match);
        }

        function matcher(params, data) {
          // Always return the object if there is nothing to compare
          if ($.trim(params.term) === '') {
            return data;
          }

          // Do a recursive check for options with children
          if (data.children && data.children.length > 0) {
            // Clone the data object if there are children
            // This is required as we modify the object to remove any non-matches
            var match = $.extend(true, {}, data);

            // Check each child of the option
            for (var c = data.children.length - 1; c >= 0; c--) {
              var child = data.children[c];

              var matches = matcher(params, child);

              // If there wasn't a match, remove the object in the array
              if (matches == null) {
                match.children.splice(c, 1);
              }
            }

            // If any children matched, return the new object
            if (match.children.length > 0) {
              return match;
            }

            // If there were no matching children, check just the plain object
            return matcher(params, match);
          }

          var original = stripDiacritics(data.text).toUpperCase();
          var term = stripDiacritics(params.term).toUpperCase();

          // Check if the text contains the term
          if (original.indexOf(term) > -1) {
            return data;
          }

          // If it doesn't contain the term, don't return anything
          return null;
        }

        this.defaults = {
          amdBase: './',
          amdLanguageBase: './i18n/',
          closeOnSelect: true,
          debug: false,
          dropdownAutoWidth: false,
          escapeMarkup: Utils.escapeMarkup,
          language: EnglishTranslation,
          matcher: matcher,
          minimumInputLength: 0,
          maximumInputLength: 0,
          maximumSelectionLength: 0,
          minimumResultsForSearch: 0,
          selectOnClose: false,
          sorter: function sorter(data) {
            return data;
          },
          templateResult: function templateResult(result) {
            return result.text;
          },
          templateSelection: function templateSelection(selection) {
            return selection.text;
          },
          theme: 'default',
          width: 'resolve'
        };
      };

      Defaults.prototype.set = function (key, value) {
        var camelKey = $.camelCase(key);

        var data = {};
        data[camelKey] = value;

        var convertedData = Utils._convertData(data);

        $.extend(this.defaults, convertedData);
      };

      var defaults = new Defaults();

      return defaults;
    });

    S2.define('select2/options', ['require', 'jquery', './defaults', './utils'], function (require, $, Defaults, Utils) {
      function Options(options, $element) {
        this.options = options;

        if ($element != null) {
          this.fromElement($element);
        }

        this.options = Defaults.apply(this.options);

        if ($element && $element.is('input')) {
          var InputCompat = require(this.get('amdBase') + 'compat/inputData');

          this.options.dataAdapter = Utils.Decorate(this.options.dataAdapter, InputCompat);
        }
      }

      Options.prototype.fromElement = function ($e) {
        var excludedData = ['select2'];

        if (this.options.multiple == null) {
          this.options.multiple = $e.prop('multiple');
        }

        if (this.options.disabled == null) {
          this.options.disabled = $e.prop('disabled');
        }

        if (this.options.language == null) {
          if ($e.prop('lang')) {
            this.options.language = $e.prop('lang').toLowerCase();
          } else if ($e.closest('[lang]').prop('lang')) {
            this.options.language = $e.closest('[lang]').prop('lang');
          }
        }

        if (this.options.dir == null) {
          if ($e.prop('dir')) {
            this.options.dir = $e.prop('dir');
          } else if ($e.closest('[dir]').prop('dir')) {
            this.options.dir = $e.closest('[dir]').prop('dir');
          } else {
            this.options.dir = 'ltr';
          }
        }

        $e.prop('disabled', this.options.disabled);
        $e.prop('multiple', this.options.multiple);

        if ($e.data('select2Tags')) {
          if (this.options.debug && window.console && console.warn) {
            console.warn('Select2: The `data-select2-tags` attribute has been changed to ' + 'use the `data-data` and `data-tags="true"` attributes and will be ' + 'removed in future versions of Select2.');
          }

          $e.data('data', $e.data('select2Tags'));
          $e.data('tags', true);
        }

        if ($e.data('ajaxUrl')) {
          if (this.options.debug && window.console && console.warn) {
            console.warn('Select2: The `data-ajax-url` attribute has been changed to ' + '`data-ajax--url` and support for the old attribute will be removed' + ' in future versions of Select2.');
          }

          $e.attr('ajax--url', $e.data('ajaxUrl'));
          $e.data('ajax--url', $e.data('ajaxUrl'));
        }

        var dataset = {};

        // Prefer the element's `dataset` attribute if it exists
        // jQuery 1.x does not correctly handle data attributes with multiple dashes
        if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
          dataset = $.extend(true, {}, $e[0].dataset, $e.data());
        } else {
          dataset = $e.data();
        }

        var data = $.extend(true, {}, dataset);

        data = Utils._convertData(data);

        for (var key in data) {
          if ($.inArray(key, excludedData) > -1) {
            continue;
          }

          if ($.isPlainObject(this.options[key])) {
            $.extend(this.options[key], data[key]);
          } else {
            this.options[key] = data[key];
          }
        }

        return this;
      };

      Options.prototype.get = function (key) {
        return this.options[key];
      };

      Options.prototype.set = function (key, val) {
        this.options[key] = val;
      };

      return Options;
    });

    S2.define('select2/core', ['jquery', './options', './utils', './keys'], function ($, Options, Utils, KEYS) {
      var Select2 = function Select2($element, options) {
        if ($element.data('select2') != null) {
          $element.data('select2').destroy();
        }

        this.$element = $element;

        this.id = this._generateId($element);

        options = options || {};

        this.options = new Options(options, $element);

        Select2.__super__.constructor.call(this);

        // Set up the tabindex

        var tabindex = $element.attr('tabindex') || 0;
        $element.data('old-tabindex', tabindex);
        $element.attr('tabindex', '-1');

        // Set up containers and adapters

        var DataAdapter = this.options.get('dataAdapter');
        this.dataAdapter = new DataAdapter($element, this.options);

        var $container = this.render();

        this._placeContainer($container);

        var SelectionAdapter = this.options.get('selectionAdapter');
        this.selection = new SelectionAdapter($element, this.options);
        this.$selection = this.selection.render();

        this.selection.position(this.$selection, $container);

        var DropdownAdapter = this.options.get('dropdownAdapter');
        this.dropdown = new DropdownAdapter($element, this.options);
        this.$dropdown = this.dropdown.render();

        this.dropdown.position(this.$dropdown, $container);

        var ResultsAdapter = this.options.get('resultsAdapter');
        this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
        this.$results = this.results.render();

        this.results.position(this.$results, this.$dropdown);

        // Bind events

        var self = this;

        // Bind the container to all of the adapters
        this._bindAdapters();

        // Register any DOM event handlers
        this._registerDomEvents();

        // Register any internal event handlers
        this._registerDataEvents();
        this._registerSelectionEvents();
        this._registerDropdownEvents();
        this._registerResultsEvents();
        this._registerEvents();

        // Set the initial state
        this.dataAdapter.current(function (initialData) {
          self.trigger('selection:update', {
            data: initialData
          });
        });

        // Hide the original select
        $element.addClass('select2-hidden-accessible');
        $element.attr('aria-hidden', 'true');

        // Synchronize any monitored attributes
        this._syncAttributes();

        $element.data('select2', this);
      };

      Utils.Extend(Select2, Utils.Observable);

      Select2.prototype._generateId = function ($element) {
        var id = '';

        if ($element.attr('id') != null) {
          id = $element.attr('id');
        } else if ($element.attr('name') != null) {
          id = $element.attr('name') + '-' + Utils.generateChars(2);
        } else {
          id = Utils.generateChars(4);
        }

        id = id.replace(/(:|\.|\[|\]|,)/g, '');
        id = 'select2-' + id;

        return id;
      };

      Select2.prototype._placeContainer = function ($container) {
        $container.insertAfter(this.$element);

        var width = this._resolveWidth(this.$element, this.options.get('width'));

        if (width != null) {
          $container.css('width', width);
        }
      };

      Select2.prototype._resolveWidth = function ($element, method) {
        var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

        if (method == 'resolve') {
          var styleWidth = this._resolveWidth($element, 'style');

          if (styleWidth != null) {
            return styleWidth;
          }

          return this._resolveWidth($element, 'element');
        }

        if (method == 'element') {
          var elementWidth = $element.outerWidth(false);

          if (elementWidth <= 0) {
            return 'auto';
          }

          return elementWidth + 'px';
        }

        if (method == 'style') {
          var style = $element.attr('style');

          if (typeof style !== 'string') {
            return null;
          }

          var attrs = style.split(';');

          for (var i = 0, l = attrs.length; i < l; i = i + 1) {
            var attr = attrs[i].replace(/\s/g, '');
            var matches = attr.match(WIDTH);

            if (matches !== null && matches.length >= 1) {
              return matches[1];
            }
          }

          return null;
        }

        return method;
      };

      Select2.prototype._bindAdapters = function () {
        this.dataAdapter.bind(this, this.$container);
        this.selection.bind(this, this.$container);

        this.dropdown.bind(this, this.$container);
        this.results.bind(this, this.$container);
      };

      Select2.prototype._registerDomEvents = function () {
        var self = this;

        this.$element.on('change.select2', function () {
          self.dataAdapter.current(function (data) {
            self.trigger('selection:update', {
              data: data
            });
          });
        });

        this.$element.on('focus.select2', function (evt) {
          self.trigger('focus', evt);
        });

        this._syncA = Utils.bind(this._syncAttributes, this);
        this._syncS = Utils.bind(this._syncSubtree, this);

        if (this.$element[0].attachEvent) {
          this.$element[0].attachEvent('onpropertychange', this._syncA);
        }

        var observer = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

        if (observer != null) {
          this._observer = new observer(function (mutations) {
            $.each(mutations, self._syncA);
            $.each(mutations, self._syncS);
          });
          this._observer.observe(this.$element[0], {
            attributes: true,
            childList: true,
            subtree: false
          });
        } else if (this.$element[0].addEventListener) {
          this.$element[0].addEventListener('DOMAttrModified', self._syncA, false);
          this.$element[0].addEventListener('DOMNodeInserted', self._syncS, false);
          this.$element[0].addEventListener('DOMNodeRemoved', self._syncS, false);
        }
      };

      Select2.prototype._registerDataEvents = function () {
        var self = this;

        this.dataAdapter.on('*', function (name, params) {
          self.trigger(name, params);
        });
      };

      Select2.prototype._registerSelectionEvents = function () {
        var self = this;
        var nonRelayEvents = ['toggle', 'focus'];

        this.selection.on('toggle', function () {
          self.toggleDropdown();
        });

        this.selection.on('focus', function (params) {
          self.focus(params);
        });

        this.selection.on('*', function (name, params) {
          if ($.inArray(name, nonRelayEvents) !== -1) {
            return;
          }

          self.trigger(name, params);
        });
      };

      Select2.prototype._registerDropdownEvents = function () {
        var self = this;

        this.dropdown.on('*', function (name, params) {
          self.trigger(name, params);
        });
      };

      Select2.prototype._registerResultsEvents = function () {
        var self = this;

        this.results.on('*', function (name, params) {
          self.trigger(name, params);
        });
      };

      Select2.prototype._registerEvents = function () {
        var self = this;

        this.on('open', function () {
          self.$container.addClass('select2-container--open');
        });

        this.on('close', function () {
          self.$container.removeClass('select2-container--open');
        });

        this.on('enable', function () {
          self.$container.removeClass('select2-container--disabled');
        });

        this.on('disable', function () {
          self.$container.addClass('select2-container--disabled');
        });

        this.on('blur', function () {
          self.$container.removeClass('select2-container--focus');
        });

        this.on('query', function (params) {
          if (!self.isOpen()) {
            self.trigger('open', {});
          }

          this.dataAdapter.query(params, function (data) {
            self.trigger('results:all', {
              data: data,
              query: params
            });
          });
        });

        this.on('query:append', function (params) {
          this.dataAdapter.query(params, function (data) {
            self.trigger('results:append', {
              data: data,
              query: params
            });
          });
        });

        this.on('keypress', function (evt) {
          var key = evt.which;

          if (self.isOpen()) {
            if (key === KEYS.ESC || key === KEYS.TAB || key === KEYS.UP && evt.altKey) {
              self.close();

              evt.preventDefault();
            } else if (key === KEYS.ENTER) {
              self.trigger('results:select', {});

              evt.preventDefault();
            } else if (key === KEYS.SPACE && evt.ctrlKey) {
              self.trigger('results:toggle', {});

              evt.preventDefault();
            } else if (key === KEYS.UP) {
              self.trigger('results:previous', {});

              evt.preventDefault();
            } else if (key === KEYS.DOWN) {
              self.trigger('results:next', {});

              evt.preventDefault();
            }
          } else {
            if (key === KEYS.ENTER || key === KEYS.SPACE || key === KEYS.DOWN && evt.altKey) {
              self.open();

              evt.preventDefault();
            }
          }
        });
      };

      Select2.prototype._syncAttributes = function () {
        this.options.set('disabled', this.$element.prop('disabled'));

        if (this.options.get('disabled')) {
          if (this.isOpen()) {
            this.close();
          }

          this.trigger('disable', {});
        } else {
          this.trigger('enable', {});
        }
      };

      Select2.prototype._syncSubtree = function (evt, mutations) {
        var changed = false;
        var self = this;

        // Ignore any mutation events raised for elements that aren't options or
        // optgroups. This handles the case when the select element is destroyed
        if (evt && evt.target && evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP') {
          return;
        }

        if (!mutations) {
          // If mutation events aren't supported, then we can only assume that the
          // change affected the selections
          changed = true;
        } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
          for (var n = 0; n < mutations.addedNodes.length; n++) {
            var node = mutations.addedNodes[n];

            if (node.selected) {
              changed = true;
            }
          }
        } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
          changed = true;
        }

        // Only re-pull the data if we think there is a change
        if (changed) {
          this.dataAdapter.current(function (currentData) {
            self.trigger('selection:update', {
              data: currentData
            });
          });
        }
      };

      /**
       * Override the trigger method to automatically trigger pre-events when
       * there are events that can be prevented.
       */
      Select2.prototype.trigger = function (name, args) {
        var actualTrigger = Select2.__super__.trigger;
        var preTriggerMap = {
          'open': 'opening',
          'close': 'closing',
          'select': 'selecting',
          'unselect': 'unselecting'
        };

        if (args === undefined) {
          args = {};
        }

        if (name in preTriggerMap) {
          var preTriggerName = preTriggerMap[name];
          var preTriggerArgs = {
            prevented: false,
            name: name,
            args: args
          };

          actualTrigger.call(this, preTriggerName, preTriggerArgs);

          if (preTriggerArgs.prevented) {
            args.prevented = true;

            return;
          }
        }

        actualTrigger.call(this, name, args);
      };

      Select2.prototype.toggleDropdown = function () {
        if (this.options.get('disabled')) {
          return;
        }

        if (this.isOpen()) {
          this.close();
        } else {
          this.open();
        }
      };

      Select2.prototype.open = function () {
        if (this.isOpen()) {
          return;
        }

        this.trigger('query', {});
      };

      Select2.prototype.close = function () {
        if (!this.isOpen()) {
          return;
        }

        this.trigger('close', {});
      };

      Select2.prototype.isOpen = function () {
        return this.$container.hasClass('select2-container--open');
      };

      Select2.prototype.hasFocus = function () {
        return this.$container.hasClass('select2-container--focus');
      };

      Select2.prototype.focus = function (data) {
        // No need to re-trigger focus events if we are already focused
        if (this.hasFocus()) {
          return;
        }

        this.$container.addClass('select2-container--focus');
        this.trigger('focus', {});
      };

      Select2.prototype.enable = function (args) {
        if (this.options.get('debug') && window.console && console.warn) {
          console.warn('Select2: The `select2("enable")` method has been deprecated and will' + ' be removed in later Select2 versions. Use $element.prop("disabled")' + ' instead.');
        }

        if (args == null || args.length === 0) {
          args = [true];
        }

        var disabled = !args[0];

        this.$element.prop('disabled', disabled);
      };

      Select2.prototype.data = function () {
        if (this.options.get('debug') && arguments.length > 0 && window.console && console.warn) {
          console.warn('Select2: Data can no longer be set using `select2("data")`. You ' + 'should consider setting the value instead using `$element.val()`.');
        }

        var data = [];

        this.dataAdapter.current(function (currentData) {
          data = currentData;
        });

        return data;
      };

      Select2.prototype.val = function (args) {
        if (this.options.get('debug') && window.console && console.warn) {
          console.warn('Select2: The `select2("val")` method has been deprecated and will be' + ' removed in later Select2 versions. Use $element.val() instead.');
        }

        if (args == null || args.length === 0) {
          return this.$element.val();
        }

        var newVal = args[0];

        if ($.isArray(newVal)) {
          newVal = $.map(newVal, function (obj) {
            return obj.toString();
          });
        }

        this.$element.val(newVal).trigger('change');
      };

      Select2.prototype.destroy = function () {
        this.$container.remove();

        if (this.$element[0].detachEvent) {
          this.$element[0].detachEvent('onpropertychange', this._syncA);
        }

        if (this._observer != null) {
          this._observer.disconnect();
          this._observer = null;
        } else if (this.$element[0].removeEventListener) {
          this.$element[0].removeEventListener('DOMAttrModified', this._syncA, false);
          this.$element[0].removeEventListener('DOMNodeInserted', this._syncS, false);
          this.$element[0].removeEventListener('DOMNodeRemoved', this._syncS, false);
        }

        this._syncA = null;
        this._syncS = null;

        this.$element.off('.select2');
        this.$element.attr('tabindex', this.$element.data('old-tabindex'));

        this.$element.removeClass('select2-hidden-accessible');
        this.$element.attr('aria-hidden', 'false');
        this.$element.removeData('select2');

        this.dataAdapter.destroy();
        this.selection.destroy();
        this.dropdown.destroy();
        this.results.destroy();

        this.dataAdapter = null;
        this.selection = null;
        this.dropdown = null;
        this.results = null;
      };

      Select2.prototype.render = function () {
        var $container = $('<span class="select2 select2-container">' + '<span class="selection"></span>' + '<span class="dropdown-wrapper" aria-hidden="true"></span>' + '</span>');

        $container.attr('dir', this.options.get('dir'));

        this.$container = $container;

        this.$container.addClass('select2-container--' + this.options.get('theme'));

        $container.data('element', this.$element);

        return $container;
      };

      return Select2;
    });

    S2.define('jquery-mousewheel', ['jquery'], function ($) {
      // Used to shim jQuery.mousewheel for non-full builds.
      return $;
    });

    S2.define('jquery.select2', ['jquery', 'jquery-mousewheel', './select2/core', './select2/defaults'], function ($, _, Select2, Defaults) {
      if ($.fn.select2 == null) {
        // All methods that should return the element
        var thisMethods = ['open', 'close', 'destroy'];

        $.fn.select2 = function (options) {
          options = options || {};

          if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            this.each(function () {
              var instanceOptions = $.extend(true, {}, options);

              var instance = new Select2($(this), instanceOptions);
            });

            return this;
          } else if (typeof options === 'string') {
            var ret;
            var args = Array.prototype.slice.call(arguments, 1);

            this.each(function () {
              var instance = $(this).data('select2');

              if (instance == null && window.console && console.error) {
                console.error('The select2(\'' + options + '\') method was called on an ' + 'element that is not using Select2.');
              }

              ret = instance[options].apply(instance, args);
            });

            // Check if we should be returning `this`
            if ($.inArray(options, thisMethods) > -1) {
              return this;
            }

            return ret;
          } else {
            throw new Error('Invalid arguments for Select2: ' + options);
          }
        };
      }

      if ($.fn.select2.defaults == null) {
        $.fn.select2.defaults = Defaults;
      }

      return Select2;
    });

    // Return the AMD loader configuration so it can be used outside of this file
    return {
      define: S2.define,
      require: S2.require
    };
  }();

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
});

},{"jquery":4}],6:[function(require,module,exports){
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function (Math) {

    var trimLeft = /^\s+/,
        trimRight = /\s+$/,
        tinyCounter = 0,
        mathRound = Math.round,
        mathMin = Math.min,
        mathMax = Math.max,
        mathRandom = Math.random;

    function tinycolor(color, opts) {

        color = color ? color : '';
        opts = opts || {};

        // If input is already a tinycolor, return itself
        if (color instanceof tinycolor) {
            return color;
        }
        // If we are called as a function, call using new instead
        if (!(this instanceof tinycolor)) {
            return new tinycolor(color, opts);
        }

        var rgb = inputToRGB(color);
        this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = mathRound(100 * this._a) / 100, this._format = opts.format || rgb.format;
        this._gradientType = opts.gradientType;

        // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by `inputToRgb`
        if (this._r < 1) {
            this._r = mathRound(this._r);
        }
        if (this._g < 1) {
            this._g = mathRound(this._g);
        }
        if (this._b < 1) {
            this._b = mathRound(this._b);
        }

        this._ok = rgb.ok;
        this._tc_id = tinyCounter++;
    }

    tinycolor.prototype = {
        isDark: function isDark() {
            return this.getBrightness() < 128;
        },
        isLight: function isLight() {
            return !this.isDark();
        },
        isValid: function isValid() {
            return this._ok;
        },
        getOriginalInput: function getOriginalInput() {
            return this._originalInput;
        },
        getFormat: function getFormat() {
            return this._format;
        },
        getAlpha: function getAlpha() {
            return this._a;
        },
        getBrightness: function getBrightness() {
            //http://www.w3.org/TR/AERT#color-contrast
            var rgb = this.toRgb();
            return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
        },
        getLuminance: function getLuminance() {
            //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
            var rgb = this.toRgb();
            var RsRGB, GsRGB, BsRGB, R, G, B;
            RsRGB = rgb.r / 255;
            GsRGB = rgb.g / 255;
            BsRGB = rgb.b / 255;

            if (RsRGB <= 0.03928) {
                R = RsRGB / 12.92;
            } else {
                R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
            }
            if (GsRGB <= 0.03928) {
                G = GsRGB / 12.92;
            } else {
                G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
            }
            if (BsRGB <= 0.03928) {
                B = BsRGB / 12.92;
            } else {
                B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
            }
            return 0.2126 * R + 0.7152 * G + 0.0722 * B;
        },
        setAlpha: function setAlpha(value) {
            this._a = boundAlpha(value);
            this._roundA = mathRound(100 * this._a) / 100;
            return this;
        },
        toHsv: function toHsv() {
            var hsv = rgbToHsv(this._r, this._g, this._b);
            return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
        },
        toHsvString: function toHsvString() {
            var hsv = rgbToHsv(this._r, this._g, this._b);
            var h = mathRound(hsv.h * 360),
                s = mathRound(hsv.s * 100),
                v = mathRound(hsv.v * 100);
            return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
        },
        toHsl: function toHsl() {
            var hsl = rgbToHsl(this._r, this._g, this._b);
            return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
        },
        toHslString: function toHslString() {
            var hsl = rgbToHsl(this._r, this._g, this._b);
            var h = mathRound(hsl.h * 360),
                s = mathRound(hsl.s * 100),
                l = mathRound(hsl.l * 100);
            return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
        },
        toHex: function toHex(allow3Char) {
            return rgbToHex(this._r, this._g, this._b, allow3Char);
        },
        toHexString: function toHexString(allow3Char) {
            return '#' + this.toHex(allow3Char);
        },
        toHex8: function toHex8(allow4Char) {
            return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
        },
        toHex8String: function toHex8String(allow4Char) {
            return '#' + this.toHex8(allow4Char);
        },
        toRgb: function toRgb() {
            return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
        },
        toRgbString: function toRgbString() {
            return this._a == 1 ? "rgb(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" : "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
        },
        toPercentageRgb: function toPercentageRgb() {
            return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
        },
        toPercentageRgbString: function toPercentageRgbString() {
            return this._a == 1 ? "rgb(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" : "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
        },
        toName: function toName() {
            if (this._a === 0) {
                return "transparent";
            }

            if (this._a < 1) {
                return false;
            }

            return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
        },
        toFilter: function toFilter(secondColor) {
            var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
            var secondHex8String = hex8String;
            var gradientType = this._gradientType ? "GradientType = 1, " : "";

            if (secondColor) {
                var s = tinycolor(secondColor);
                secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
            }

            return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
        },
        toString: function toString(format) {
            var formatSet = !!format;
            format = format || this._format;

            var formattedString = false;
            var hasAlpha = this._a < 1 && this._a >= 0;
            var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

            if (needsAlphaFormat) {
                // Special case for "transparent", all other non-alpha formats
                // will return rgba when there is transparency.
                if (format === "name" && this._a === 0) {
                    return this.toName();
                }
                return this.toRgbString();
            }
            if (format === "rgb") {
                formattedString = this.toRgbString();
            }
            if (format === "prgb") {
                formattedString = this.toPercentageRgbString();
            }
            if (format === "hex" || format === "hex6") {
                formattedString = this.toHexString();
            }
            if (format === "hex3") {
                formattedString = this.toHexString(true);
            }
            if (format === "hex4") {
                formattedString = this.toHex8String(true);
            }
            if (format === "hex8") {
                formattedString = this.toHex8String();
            }
            if (format === "name") {
                formattedString = this.toName();
            }
            if (format === "hsl") {
                formattedString = this.toHslString();
            }
            if (format === "hsv") {
                formattedString = this.toHsvString();
            }

            return formattedString || this.toHexString();
        },
        clone: function clone() {
            return tinycolor(this.toString());
        },

        _applyModification: function _applyModification(fn, args) {
            var color = fn.apply(null, [this].concat([].slice.call(args)));
            this._r = color._r;
            this._g = color._g;
            this._b = color._b;
            this.setAlpha(color._a);
            return this;
        },
        lighten: function lighten() {
            return this._applyModification(_lighten, arguments);
        },
        brighten: function brighten() {
            return this._applyModification(_brighten, arguments);
        },
        darken: function darken() {
            return this._applyModification(_darken, arguments);
        },
        desaturate: function desaturate() {
            return this._applyModification(_desaturate, arguments);
        },
        saturate: function saturate() {
            return this._applyModification(_saturate, arguments);
        },
        greyscale: function greyscale() {
            return this._applyModification(_greyscale, arguments);
        },
        spin: function spin() {
            return this._applyModification(_spin, arguments);
        },

        _applyCombination: function _applyCombination(fn, args) {
            return fn.apply(null, [this].concat([].slice.call(args)));
        },
        analogous: function analogous() {
            return this._applyCombination(_analogous, arguments);
        },
        complement: function complement() {
            return this._applyCombination(_complement, arguments);
        },
        monochromatic: function monochromatic() {
            return this._applyCombination(_monochromatic, arguments);
        },
        splitcomplement: function splitcomplement() {
            return this._applyCombination(_splitcomplement, arguments);
        },
        triad: function triad() {
            return this._applyCombination(_triad, arguments);
        },
        tetrad: function tetrad() {
            return this._applyCombination(_tetrad, arguments);
        }
    };

    // If input is an object, force 1 into "1.0" to handle ratios properly
    // String input requires "1.0" as input, so 1 will be treated as 1
    tinycolor.fromRatio = function (color, opts) {
        if ((typeof color === "undefined" ? "undefined" : _typeof(color)) == "object") {
            var newColor = {};
            for (var i in color) {
                if (color.hasOwnProperty(i)) {
                    if (i === "a") {
                        newColor[i] = color[i];
                    } else {
                        newColor[i] = convertToPercentage(color[i]);
                    }
                }
            }
            color = newColor;
        }

        return tinycolor(color, opts);
    };

    // Given a string or object, convert that input to RGB
    // Possible string inputs:
    //
    //     "red"
    //     "#f00" or "f00"
    //     "#ff0000" or "ff0000"
    //     "#ff000000" or "ff000000"
    //     "rgb 255 0 0" or "rgb (255, 0, 0)"
    //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
    //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
    //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
    //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
    //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
    //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
    //
    function inputToRGB(color) {

        var rgb = { r: 0, g: 0, b: 0 };
        var a = 1;
        var s = null;
        var v = null;
        var l = null;
        var ok = false;
        var format = false;

        if (typeof color == "string") {
            color = stringInputToObject(color);
        }

        if ((typeof color === "undefined" ? "undefined" : _typeof(color)) == "object") {
            if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
                rgb = rgbToRgb(color.r, color.g, color.b);
                ok = true;
                format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
            } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
                s = convertToPercentage(color.s);
                v = convertToPercentage(color.v);
                rgb = hsvToRgb(color.h, s, v);
                ok = true;
                format = "hsv";
            } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
                s = convertToPercentage(color.s);
                l = convertToPercentage(color.l);
                rgb = hslToRgb(color.h, s, l);
                ok = true;
                format = "hsl";
            }

            if (color.hasOwnProperty("a")) {
                a = color.a;
            }
        }

        a = boundAlpha(a);

        return {
            ok: ok,
            format: color.format || format,
            r: mathMin(255, mathMax(rgb.r, 0)),
            g: mathMin(255, mathMax(rgb.g, 0)),
            b: mathMin(255, mathMax(rgb.b, 0)),
            a: a
        };
    }

    // Conversion Functions
    // --------------------

    // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
    // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

    // `rgbToRgb`
    // Handle bounds / percentage checking to conform to CSS color spec
    // <http://www.w3.org/TR/css3-color/>
    // *Assumes:* r, g, b in [0, 255] or [0, 1]
    // *Returns:* { r, g, b } in [0, 255]
    function rgbToRgb(r, g, b) {
        return {
            r: bound01(r, 255) * 255,
            g: bound01(g, 255) * 255,
            b: bound01(b, 255) * 255
        };
    }

    // `rgbToHsl`
    // Converts an RGB color value to HSL.
    // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
    // *Returns:* { h, s, l } in [0,1]
    function rgbToHsl(r, g, b) {

        r = bound01(r, 255);
        g = bound01(g, 255);
        b = bound01(b, 255);

        var max = mathMax(r, g, b),
            min = mathMin(r, g, b);
        var h,
            s,
            l = (max + min) / 2;

        if (max == min) {
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);break;
                case g:
                    h = (b - r) / d + 2;break;
                case b:
                    h = (r - g) / d + 4;break;
            }

            h /= 6;
        }

        return { h: h, s: s, l: l };
    }

    // `hslToRgb`
    // Converts an HSL color value to RGB.
    // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
    // *Returns:* { r, g, b } in the set [0, 255]
    function hslToRgb(h, s, l) {
        var r, g, b;

        h = bound01(h, 360);
        s = bound01(s, 100);
        l = bound01(l, 100);

        function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }

        if (s === 0) {
            r = g = b = l; // achromatic
        } else {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }

        return { r: r * 255, g: g * 255, b: b * 255 };
    }

    // `rgbToHsv`
    // Converts an RGB color value to HSV
    // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
    // *Returns:* { h, s, v } in [0,1]
    function rgbToHsv(r, g, b) {

        r = bound01(r, 255);
        g = bound01(g, 255);
        b = bound01(b, 255);

        var max = mathMax(r, g, b),
            min = mathMin(r, g, b);
        var h,
            s,
            v = max;

        var d = max - min;
        s = max === 0 ? 0 : d / max;

        if (max == min) {
            h = 0; // achromatic
        } else {
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);break;
                case g:
                    h = (b - r) / d + 2;break;
                case b:
                    h = (r - g) / d + 4;break;
            }
            h /= 6;
        }
        return { h: h, s: s, v: v };
    }

    // `hsvToRgb`
    // Converts an HSV color value to RGB.
    // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
    // *Returns:* { r, g, b } in the set [0, 255]
    function hsvToRgb(h, s, v) {

        h = bound01(h, 360) * 6;
        s = bound01(s, 100);
        v = bound01(v, 100);

        var i = Math.floor(h),
            f = h - i,
            p = v * (1 - s),
            q = v * (1 - f * s),
            t = v * (1 - (1 - f) * s),
            mod = i % 6,
            r = [v, q, p, p, t, v][mod],
            g = [t, v, v, q, p, p][mod],
            b = [p, p, t, v, v, q][mod];

        return { r: r * 255, g: g * 255, b: b * 255 };
    }

    // `rgbToHex`
    // Converts an RGB color to hex
    // Assumes r, g, and b are contained in the set [0, 255]
    // Returns a 3 or 6 character hex
    function rgbToHex(r, g, b, allow3Char) {

        var hex = [pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16))];

        // Return a 3 character hex if possible
        if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
            return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
        }

        return hex.join("");
    }

    // `rgbaToHex`
    // Converts an RGBA color plus alpha transparency to hex
    // Assumes r, g, b are contained in the set [0, 255] and
    // a in [0, 1]. Returns a 4 or 8 character rgba hex
    function rgbaToHex(r, g, b, a, allow4Char) {

        var hex = [pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16)), pad2(convertDecimalToHex(a))];

        // Return a 4 character hex if possible
        if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
            return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
        }

        return hex.join("");
    }

    // `rgbaToArgbHex`
    // Converts an RGBA color to an ARGB Hex8 string
    // Rarely used, but required for "toFilter()"
    function rgbaToArgbHex(r, g, b, a) {

        var hex = [pad2(convertDecimalToHex(a)), pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16))];

        return hex.join("");
    }

    // `equals`
    // Can be called with any tinycolor input
    tinycolor.equals = function (color1, color2) {
        if (!color1 || !color2) {
            return false;
        }
        return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
    };

    tinycolor.random = function () {
        return tinycolor.fromRatio({
            r: mathRandom(),
            g: mathRandom(),
            b: mathRandom()
        });
    };

    // Modification Functions
    // ----------------------
    // Thanks to less.js for some of the basics here
    // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

    function _desaturate(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var hsl = tinycolor(color).toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return tinycolor(hsl);
    }

    function _saturate(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var hsl = tinycolor(color).toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return tinycolor(hsl);
    }

    function _greyscale(color) {
        return tinycolor(color).desaturate(100);
    }

    function _lighten(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var hsl = tinycolor(color).toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return tinycolor(hsl);
    }

    function _brighten(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var rgb = tinycolor(color).toRgb();
        rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * -(amount / 100))));
        rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * -(amount / 100))));
        rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * -(amount / 100))));
        return tinycolor(rgb);
    }

    function _darken(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var hsl = tinycolor(color).toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return tinycolor(hsl);
    }

    // Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
    // Values outside of this range will be wrapped into this range.
    function _spin(color, amount) {
        var hsl = tinycolor(color).toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return tinycolor(hsl);
    }

    // Combination Functions
    // ---------------------
    // Thanks to jQuery xColor for some of the ideas behind these
    // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

    function _complement(color) {
        var hsl = tinycolor(color).toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return tinycolor(hsl);
    }

    function _triad(color) {
        var hsl = tinycolor(color).toHsl();
        var h = hsl.h;
        return [tinycolor(color), tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }), tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })];
    }

    function _tetrad(color) {
        var hsl = tinycolor(color).toHsl();
        var h = hsl.h;
        return [tinycolor(color), tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }), tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }), tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })];
    }

    function _splitcomplement(color) {
        var hsl = tinycolor(color).toHsl();
        var h = hsl.h;
        return [tinycolor(color), tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }), tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l })];
    }

    function _analogous(color, results, slices) {
        results = results || 6;
        slices = slices || 30;

        var hsl = tinycolor(color).toHsl();
        var part = 360 / slices;
        var ret = [tinycolor(color)];

        for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(tinycolor(hsl));
        }
        return ret;
    }

    function _monochromatic(color, results) {
        results = results || 6;
        var hsv = tinycolor(color).toHsv();
        var h = hsv.h,
            s = hsv.s,
            v = hsv.v;
        var ret = [];
        var modification = 1 / results;

        while (results--) {
            ret.push(tinycolor({ h: h, s: s, v: v }));
            v = (v + modification) % 1;
        }

        return ret;
    }

    // Utility Functions
    // ---------------------

    tinycolor.mix = function (color1, color2, amount) {
        amount = amount === 0 ? 0 : amount || 50;

        var rgb1 = tinycolor(color1).toRgb();
        var rgb2 = tinycolor(color2).toRgb();

        var p = amount / 100;

        var rgba = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b,
            a: (rgb2.a - rgb1.a) * p + rgb1.a
        };

        return tinycolor(rgba);
    };

    // Readability Functions
    // ---------------------
    // <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

    // `contrast`
    // Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
    tinycolor.readability = function (color1, color2) {
        var c1 = tinycolor(color1);
        var c2 = tinycolor(color2);
        return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
    };

    // `isReadable`
    // Ensure that foreground and background color combinations meet WCAG2 guidelines.
    // The third argument is an optional Object.
    //      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
    //      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
    // If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

    // *Example*
    //    tinycolor.isReadable("#000", "#111") => false
    //    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
    tinycolor.isReadable = function (color1, color2, wcag2) {
        var readability = tinycolor.readability(color1, color2);
        var wcag2Parms, out;

        out = false;

        wcag2Parms = validateWCAG2Parms(wcag2);
        switch (wcag2Parms.level + wcag2Parms.size) {
            case "AAsmall":
            case "AAAlarge":
                out = readability >= 4.5;
                break;
            case "AAlarge":
                out = readability >= 3;
                break;
            case "AAAsmall":
                out = readability >= 7;
                break;
        }
        return out;
    };

    // `mostReadable`
    // Given a base color and a list of possible foreground or background
    // colors for that base, returns the most readable color.
    // Optionally returns Black or White if the most readable color is unreadable.
    // *Example*
    //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
    //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
    //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
    //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
    tinycolor.mostReadable = function (baseColor, colorList, args) {
        var bestColor = null;
        var bestScore = 0;
        var readability;
        var includeFallbackColors, level, size;
        args = args || {};
        includeFallbackColors = args.includeFallbackColors;
        level = args.level;
        size = args.size;

        for (var i = 0; i < colorList.length; i++) {
            readability = tinycolor.readability(baseColor, colorList[i]);
            if (readability > bestScore) {
                bestScore = readability;
                bestColor = tinycolor(colorList[i]);
            }
        }

        if (tinycolor.isReadable(baseColor, bestColor, { "level": level, "size": size }) || !includeFallbackColors) {
            return bestColor;
        } else {
            args.includeFallbackColors = false;
            return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
        }
    };

    // Big List of Colors
    // ------------------
    // <http://www.w3.org/TR/css3-color/#svg-color>
    var names = tinycolor.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
    };

    // Make it easy to access colors via `hexNames[hex]`
    var hexNames = tinycolor.hexNames = flip(names);

    // Utilities
    // ---------

    // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
    function flip(o) {
        var flipped = {};
        for (var i in o) {
            if (o.hasOwnProperty(i)) {
                flipped[o[i]] = i;
            }
        }
        return flipped;
    }

    // Return a valid alpha value [0,1] with all invalid values being set to 1
    function boundAlpha(a) {
        a = parseFloat(a);

        if (isNaN(a) || a < 0 || a > 1) {
            a = 1;
        }

        return a;
    }

    // Take input from [0, n] and return it as [0, 1]
    function bound01(n, max) {
        if (isOnePointZero(n)) {
            n = "100%";
        }

        var processPercent = isPercentage(n);
        n = mathMin(max, mathMax(0, parseFloat(n)));

        // Automatically convert percentage into number
        if (processPercent) {
            n = parseInt(n * max, 10) / 100;
        }

        // Handle floating point rounding errors
        if (Math.abs(n - max) < 0.000001) {
            return 1;
        }

        // Convert into [0, 1] range if it isn't already
        return n % max / parseFloat(max);
    }

    // Force a number between 0 and 1
    function clamp01(val) {
        return mathMin(1, mathMax(0, val));
    }

    // Parse a base-16 hex value into a base-10 integer
    function parseIntFromHex(val) {
        return parseInt(val, 16);
    }

    // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
    // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
    function isOnePointZero(n) {
        return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
    }

    // Check to see if string passed in is a percentage
    function isPercentage(n) {
        return typeof n === "string" && n.indexOf('%') != -1;
    }

    // Force a hex value to have 2 characters
    function pad2(c) {
        return c.length == 1 ? '0' + c : '' + c;
    }

    // Replace a decimal with it's percentage value
    function convertToPercentage(n) {
        if (n <= 1) {
            n = n * 100 + "%";
        }

        return n;
    }

    // Converts a decimal to a hex value
    function convertDecimalToHex(d) {
        return Math.round(parseFloat(d) * 255).toString(16);
    }
    // Converts a hex value to a decimal
    function convertHexToDecimal(h) {
        return parseIntFromHex(h) / 255;
    }

    var matchers = function () {

        // <http://www.w3.org/TR/css3-values/#integers>
        var CSS_INTEGER = "[-\\+]?\\d+%?";

        // <http://www.w3.org/TR/css3-values/#number-value>
        var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

        // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
        var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

        // Actual matching.
        // Parentheses and commas are optional, but not required.
        // Whitespace can take the place of commas or opening paren
        var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
        var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

        return {
            CSS_UNIT: new RegExp(CSS_UNIT),
            rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
            rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
            hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
            hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
            hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
            hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
    }();

    // `isValidCSSUnit`
    // Take in a single string / number and check to see if it looks like a CSS unit
    // (see `matchers` above for definition).
    function isValidCSSUnit(color) {
        return !!matchers.CSS_UNIT.exec(color);
    }

    // `stringInputToObject`
    // Permissive string parsing.  Take in a number of formats, and output an object
    // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
    function stringInputToObject(color) {

        color = color.replace(trimLeft, '').replace(trimRight, '').toLowerCase();
        var named = false;
        if (names[color]) {
            color = names[color];
            named = true;
        } else if (color == 'transparent') {
            return { r: 0, g: 0, b: 0, a: 0, format: "name" };
        }

        // Try to match string input using regular expressions.
        // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
        // Just return an object and let the conversion functions handle that.
        // This way the result will be the same whether the tinycolor is initialized with string or object.
        var match;
        if (match = matchers.rgb.exec(color)) {
            return { r: match[1], g: match[2], b: match[3] };
        }
        if (match = matchers.rgba.exec(color)) {
            return { r: match[1], g: match[2], b: match[3], a: match[4] };
        }
        if (match = matchers.hsl.exec(color)) {
            return { h: match[1], s: match[2], l: match[3] };
        }
        if (match = matchers.hsla.exec(color)) {
            return { h: match[1], s: match[2], l: match[3], a: match[4] };
        }
        if (match = matchers.hsv.exec(color)) {
            return { h: match[1], s: match[2], v: match[3] };
        }
        if (match = matchers.hsva.exec(color)) {
            return { h: match[1], s: match[2], v: match[3], a: match[4] };
        }
        if (match = matchers.hex8.exec(color)) {
            return {
                r: parseIntFromHex(match[1]),
                g: parseIntFromHex(match[2]),
                b: parseIntFromHex(match[3]),
                a: convertHexToDecimal(match[4]),
                format: named ? "name" : "hex8"
            };
        }
        if (match = matchers.hex6.exec(color)) {
            return {
                r: parseIntFromHex(match[1]),
                g: parseIntFromHex(match[2]),
                b: parseIntFromHex(match[3]),
                format: named ? "name" : "hex"
            };
        }
        if (match = matchers.hex4.exec(color)) {
            return {
                r: parseIntFromHex(match[1] + '' + match[1]),
                g: parseIntFromHex(match[2] + '' + match[2]),
                b: parseIntFromHex(match[3] + '' + match[3]),
                a: convertHexToDecimal(match[4] + '' + match[4]),
                format: named ? "name" : "hex8"
            };
        }
        if (match = matchers.hex3.exec(color)) {
            return {
                r: parseIntFromHex(match[1] + '' + match[1]),
                g: parseIntFromHex(match[2] + '' + match[2]),
                b: parseIntFromHex(match[3] + '' + match[3]),
                format: named ? "name" : "hex"
            };
        }

        return false;
    }

    function validateWCAG2Parms(parms) {
        // return valid WCAG2 parms for isReadable.
        // If input parms are invalid, return {"level":"AA", "size":"small"}
        var level, size;
        parms = parms || { "level": "AA", "size": "small" };
        level = (parms.level || "AA").toUpperCase();
        size = (parms.size || "small").toLowerCase();
        if (level !== "AA" && level !== "AAA") {
            level = "AA";
        }
        if (size !== "small" && size !== "large") {
            size = "small";
        }
        return { "level": level, "size": size };
    }

    // Node: Export function
    if (typeof module !== "undefined" && module.exports) {
        module.exports = tinycolor;
    }
    // AMD/requirejs: Define the module
    else if (typeof define === 'function' && define.amd) {
            define(function () {
                return tinycolor;
            });
        }
        // Browser: Expose to window
        else {
                window.tinycolor = tinycolor;
            }
})(Math);

},{}],7:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Picker = require("./modules/picker");
var window_var_1 = require("@src-works/window-var");
var ns = 'namedColorPicker';
var $ = window_var_1.win.jQuery || window_var_1.win.$ || require('jquery');

var Instance = function () {
    function Instance(element, options) {
        _classCallCheck(this, Instance);

        Instance.counter = Instance.counter || 0;
        Instance.counter++; // Increment counter.
        this.instance = Instance.counter;
        var $element = $(element);
        var existingInstance = this.$element.data(ns);
        if (existingInstance) existingInstance.destroy();
        this.options = $.extend({}, {
            i18n: {},
            mode: 'swatch-after',
            openSearch: false,
            colorizeElement: true,
            titleizeElement: true
        }, options || {});
        if (!Instance.picker) {
            var pickerOptions = { i18n: this.options.i18n };
            Instance.picker = new Picker.Instance(this.instance, pickerOptions);
        }
        this.$element = $element;
        this.$element.data(ns, this);
        this.elementTagName = this.$element.prop('tagName');
        this.elementTagName = this.elementTagName.toLowerCase();
        this.elementTagType = this.$element.attr('type') || '';
        this.elementTagType = this.elementTagType.toLowerCase();
        this.setupSwatch(); // Setup swatch/events.
    }

    _createClass(Instance, [{
        key: "setupSwatch",
        value: function setupSwatch() {
            this.$swatch = $(this.swatchMarkup());
            if (this.options.mode === 'swatch-before') {
                this.$element.before(this.$swatch);
            } else if (this.options.mode === 'swatch-after') {
                this.$element.after(this.$swatch);
            } else if (this.options.mode === 'swatch-only') {
                this.$element.after(this.$swatch);
                this.$element.hide();
            } else {
                this.$element.after(this.$swatch);
            }
            this.$swatch.on('click', this.onSwatchClick.bind(this));
        }
    }, {
        key: "onSwatchClick",
        value: function onSwatchClick(e) {
            Instance.picker.open({
                openSearch: this.options.openSearch,
                setActiveColor: this.$element.val() || '',
                onSelect: this.onSelect.bind(this)
            });
        }
    }, {
        key: "onSelect",
        value: function onSelect(color, picker) {
            picker.close(); // Close color picker.
            this.$element.val(color.hexString).trigger('change');
            this.$swatch.css('color', color.hexString);
            if (this.options.colorizeElement) {
                this.$element.css({
                    background: color.hexString,
                    color: color.isDark ? '#fff' : '#000'
                });
            }
            if (this.options.titleizeElement) {
                this.$element.attr('title', color.name + '(' + color.hexString + ')');
            }
        }
    }, {
        key: "destroy",
        value: function destroy() {
            var keepPicker = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            this.$swatch.remove();
            if (this.options.mode === 'swatch-only') this.$element.show();
            this.$element.removeData(ns);
            Instance.counter--;
            this.instance = -1;
            if (!Instance.counter && !keepPicker) {
                Instance.picker.destroy();
                delete Instance.picker;
            }
        }
    }, {
        key: "swatchMarkup",
        value: function swatchMarkup() {
            var markup = ''; // Initialize.
            markup += '<span class="named-color-picker-swatch -' + this.options.mode + '">';
            markup += ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g><path d="M57.6 0H6.4C3 0 0 3 0 6.4v51.2C0 61 3 64 6.4 64h51.2c3.5 0 6.4-3 6.4-6.4V6.4C64 3 61 0 57.6 0zM22.4 41.6H9.6V28.8h12.8v12.8zm0-19.2H9.6V9.6h12.8v12.8zm19.2 0H28.8V9.6h12.8v12.8z"/></g></svg>';
            markup += '</span>';
            return markup;
        }
    }]);

    return Instance;
}();

exports.Instance = Instance;
exports.default = $.fn.namedColorPicker = setup(); // Auto-setup (default export).
function setup() {
    var _$ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $;

    var _ns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ns;

    $ = _$, ns = _ns; // Allow these to be overridden when called upon directly.
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

},{"./modules/picker":9,"@src-works/window-var":3,"jquery":4}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
require("./index");

},{"./index":7}],9:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var namedColorVars = require("@src-works/named-color-vars");
var window_var_1 = require("@src-works/window-var");
var ns = 'namedColorPicker';
var $ = window_var_1.win.jQuery || window_var_1.win.$ || require('jquery');
var tinycolor = window_var_1.win.tinycolor || require('tinycolor2');
if (!$.fn.select2) require('select2'); // jQuery extension.

var Instance = function () {
    // Constructor.
    function Instance(instance, options) {
        _classCallCheck(this, Instance);

        this.emPixels = 0;
        this.searchIcon = '';
        this.totalGridColors = 0;
        this.instance = instance; // Instance number.
        this.options = $.extend({}, {
            i18n: {
                copied: 'copied',
                select: 'Select',
                searchColors: 'Search Colors'
            }
        }, options || {});
        this.$window = $(window_var_1.win);
        this.$document = $(window_var_1.win.document);
        this.windowWidth = this.$window.width();
        this.windowHeight = this.$window.height();
        this.$head = $('head');
        this.$body = $('body');
        this.$picker = $(this.pickerMarkup());
        this.$picker.data(ns, this);
        this.$body.append(this.$picker);
        this.$info = this.$picker.find('> .-info');
        this.$grid = this.$picker.find('> .-grid');
        this.$search = this.$picker.find('> .-search');
        this.$searchSelect = this.$search.find('> select');
        this.$searchOverlay = this.$picker.find('> .-search-overlay');
        this.$textarea = this.$picker.find('> .-textarea');
        this.emPixels = parseInt(getComputedStyle(this.$picker[0]).fontSize);
        this.searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 446.3 446.3"><g><path d="M318.8 280.5h-20.5l-7.6-7.7c25.5-28 40.8-66.2 40.8-107 0-92-74-165.8-165.8-165.8S0 74 0 165.8s74 165.7 165.8 165.7c40.7 0 79-15.3 107-40.8l7.7 7.6v20.4L408 446.3l38.3-38.3-127.6-127.5zm-153 0C102 280.5 51 229.5 51 165.7S102 51 165.8 51s114.7 51 114.7 114.8-51 114.7-114.8 114.7z"/></g></svg>';
        this.setupColors();
        this.setupEvents();
    }
    // Setup helpers.


    _createClass(Instance, [{
        key: "setupColors",
        value: function setupColors() {
            var _this = this;

            this.colorVars = namedColorVars.colors;
            this.colors = {}; // Initialize.
            $.each(this.colorVars, function (key, hex) {
                _this.colors[key] = _this.colorProps(key, hex);
            });
            this.colorKeysByHue = this.sortColorKeys(this.colors, 'hue');
            this.colorKeyByName = this.sortColorKeys(this.colors, 'name');
            this.colorKeysByHue.forEach(function (key) {
                var color = _this.colors[key];
                var $anchor = $(_this.colorAnchorMarkup(color));
                $anchor.data('color', color);
                _this.$grid.append($anchor);
                _this.totalGridColors++;
            });
            this.$grid.prepend($(this.searchAnchorMarkup()));
            this.totalGridColors++; // One more color.
            this.colorOptions = [], this.colorKeyByName.forEach(function (key) {
                var color = _this.colors[key];
                var $option = $(_this.colorOptionMarkup(color));
                _this.colorOptions.push({
                    color: color,
                    $option: $option,
                    index: _this.colorOptions.length,
                    id: color.slug,
                    text: color.name
                });
            });
        }
    }, {
        key: "setupEvents",
        value: function setupEvents() {
            this.$window.on('resize.' + ns, this.onWindowResize.bind(this));
            this.$grid.on('click.' + ns, '> .-color', this.onColorClick.bind(this));
            this.$info.on('click.' + ns, '> .-hex, > .-rgb, > .-hsl, > .-hsv', this.onInfoCopyClick.bind(this));
            this.$info.on('click.' + ns, '> .-select', this.onInfoSelectClick.bind(this));
            this.$searchOverlay.on('click.' + ns, this.onSearchOverlayClick.bind(this));
            this.$searchSelect.on('select2:select.' + ns, this.onSearchSelect.bind(this));
        }
        // Event handlers.

    }, {
        key: "onWindowResize",
        value: function onWindowResize(e) {
            this.resizeGrid(); // Resize grid colors.
        }
    }, {
        key: "onColorClick",
        value: function onColorClick(e) {
            var $color = $(e.currentTarget);
            if ($color.hasClass('-search')) {
                return this.toggleSearch();
            } else if ($color.hasClass('-active')) {
                return this.closeActiveColor();
            }
            this.closeSearch();
            this.closeActiveColor();
            var color = $color.data('color');
            $color.addClass('-active');
            this.$info.html(this.infoMarkup(color)).show();
            var infoCssData = this.infoCssData($color, color);
            this.$info.css(infoCssData.css).attr('class', '-info ' + infoCssData.arrowClass);
            if (infoCssData.arrowClass && infoCssData.arrowStyles) {
                this.$head.append(this.infoArrowStylesMarkup(infoCssData.arrowClass, infoCssData.arrowStyles));
            }
        }
    }, {
        key: "onInfoCopyClick",
        value: function onInfoCopyClick(e) {
            var $this = $(e.target);
            var text = $.trim($this.text());
            var $copied = this.$info.find('> .-copied');
            this.$textarea.val(text).select();
            document.execCommand('copy');
            this.$textarea.val('').blur();
            $copied.css('visibility', 'visible');
            setTimeout(function () {
                return $copied.css('visibility', 'hidden');
            }, 500);
        }
    }, {
        key: "onInfoSelectClick",
        value: function onInfoSelectClick(e) {
            if (typeof this.onSelect === 'function') {
                this.onSelect(this.getActiveColor(), this);
            } else {
                this.close(); // Close picker.
            }
        }
    }, {
        key: "onSearchSelect",
        value: function onSearchSelect(e) {
            this.setActiveColor(e.params.data.color.key);
        }
    }, {
        key: "onSearchOverlayClick",
        value: function onSearchOverlayClick(e) {
            this.closeSearch();
        }
        // Public API.

    }, {
        key: "open",
        value: function open(options) {
            this.closeSearch();
            this.closeActiveColor();
            this.$picker.show();
            options = $.extend({}, {
                openSearch: false,
                setActiveColor: '',
                onSelect: undefined
            }, options || {});
            this.resizeGrid();
            this.onSelect = options.onSelect;
            if (options.openSearch) this.openSearch();
            if (options.setActiveColor) this.setActiveColor(options.setActiveColor);
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
            this.closeSearch();
            this.closeActiveColor();
            this.$picker.hide();
            this.removeGridStyles();
            this.onSelect = undefined;
        }
    }, {
        key: "resizeGrid",
        value: function resizeGrid() {
            if (!this.$picker.is(':visible')) return; // Not possible.
            var gridPadding = 1,
                colorMargin = 1;
            this.windowWidth = this.$window.width();
            this.windowHeight = this.$window.height();
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
        key: "setActiveColor",
        value: function setActiveColor(x) {
            if (!this.$picker.is(':visible')) return; // Not possible.
            var key = (typeof x === "undefined" ? "undefined" : _typeof(x)) === 'object' && x.key ? x.key : String(x);
            this.$grid.find('> .-color[href="#' + key + '"]').click();
        }
    }, {
        key: "getActiveColor",
        value: function getActiveColor() {
            if (!this.$picker.is(':visible')) return; // Not possible.
            var $color = this.$grid.find('> .-color.-active');
            return $color.data('color') || undefined;
        }
    }, {
        key: "closeActiveColor",
        value: function closeActiveColor() {
            this.$info.hide().html(''), this.removeInfoStyles();
            this.$grid.find('> .-color.-active').removeClass('-active');
        }
    }, {
        key: "openSearch",
        value: function openSearch() {
            if (!this.$picker.is(':visible')) return; // Not possible.
            this.closeActiveColor();
            this.$searchOverlay.show();
            this.$search.show();
            this.maybeInitSearchSelect2();
            this.$searchSelect.val('').trigger('change');
            this.$searchSelect.select2('open');
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
            this.$search.hide();
            this.$searchOverlay.hide();
        }
    }, {
        key: "destroy",
        value: function destroy() {
            this.close();
            this.removeInfoStyles();
            this.removeGridStyles();
            this.maybeDestroySearchSelect2();
            this.$window.off('resize' + ns);
            this.$picker.remove();
        }
        // Utilities.

    }, {
        key: "removeGridStyles",
        value: function removeGridStyles() {
            this.$head.find('.named-color-picker-grid-styles-' + this.instance).remove();
        }
    }, {
        key: "removeInfoStyles",
        value: function removeInfoStyles() {
            this.$head.find('.named-color-picker-info-styles-' + this.instance).remove();
        }
    }, {
        key: "colorProps",
        value: function colorProps(key, hex) {
            var tinyColor = tinycolor(hex);
            return {
                key: key,
                slug: key.replace(/[A-Z]/g, function (m) {
                    return '-' + m.toLowerCase();
                }),
                name: key.replace(/[A-Z]/g, function (m) {
                    return ' ' + m;
                }).replace(/^./, function (m) {
                    return m.toUpperCase();
                }),
                hex: tinyColor.toHex(),
                rgb: tinyColor.toRgb(),
                hsl: tinyColor.toHsl(),
                hsv: tinyColor.toHsv(),
                hexString: tinyColor.toHexString(),
                rgbString: tinyColor.toRgbString(),
                hslString: tinyColor.toHslString(),
                hsvString: tinyColor.toHsvString(),
                isDark: tinyColor.isDark(),
                isLight: tinyColor.isLight()
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
        key: "maybeInitSearchSelect2",
        value: function maybeInitSearchSelect2() {
            var _this2 = this;

            if (this.$searchSelect.data('initialized')) return; // Did this already.
            this.$searchSelect.select2({
                allowClear: true,
                data: this.colorOptions,
                dropdownParent: this.$search,
                placeholder: this.options.i18n.searchColors,
                templateResult: function templateResult(data) {
                    if (data && typeof data.index === 'number') return _this2.colorOptions[data.index].$option;
                    return data && data.text ? data.text : '';
                }
            }).data('initialized', true);
        }
    }, {
        key: "maybeDestroySearchSelect2",
        value: function maybeDestroySearchSelect2() {
            if (this.$searchSelect.data('initialized')) return; // Nothing to destroy.
            this.$searchSelect.select2('destroy');
            this.$searchSelect.removeData('initialized');
        }
        // Markup utils.

    }, {
        key: "pickerMarkup",
        value: function pickerMarkup() {
            var markup = ''; // Initialize.
            markup += '<div class="named-color-picker named-color-picker-' + this.instance + '">';
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
            markup += '<style class="named-color-picker-grid-styles-' + this.instance + '">';
            markup += '.named-color-picker-' + this.instance + ' > .-grid { padding: ' + gridPadding + 'px; }';
            markup += '.named-color-picker-' + this.instance + ' > .-grid > .-color {';
            markup += '  margin:' + colorMargin + 'px; width:' + colorSize + 'px; height:' + colorSize + 'px;';
            markup += '}';
            markup += '</style>';
            return markup;
        }
    }, {
        key: "colorAnchorMarkup",
        value: function colorAnchorMarkup(color) {
            return '<a class="-color" style="background-color:' + color.hexString + ';" href="#' + color.key + '"></a>';
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
            var markup = ''; // Initialize.
            markup += '<div class="-title">' + color.name + '</div>';
            markup += '<a class="-hex" href="#">' + color.hexString + '</a>';
            markup += '<a class="-rgb" href="#">' + color.rgbString + '</a>';
            markup += '<a class="-hsl" href="#">' + color.hslString + '</a>';
            markup += '<a class="-hsv" href="#">' + color.hsvString + '</a>';
            markup += '<div class="-copied">' + this.options.i18n.copied + '</div>';
            if (this.onSelect !== null) {
                markup += '<button type="button" class="-select">' + this.options.i18n.select + '</button>';
            }
            return markup;
        }
    }, {
        key: "infoArrowStylesMarkup",
        value: function infoArrowStylesMarkup(arrowClass, styles) {
            var markup = ''; // Initialize.
            markup += '<style class="named-color-picker-info-styles-' + this.instance + '">';
            markup += '.named-color-picker' + this.instance + ' > .-info.' + arrowClass.replace(/\s/g, '.') + '::after {';
            markup += '  ' + styles;
            markup += '}';
            markup += '</style>';
            return markup;
        }
        // CSS data utils.

    }, {
        key: "infoCssData",
        value: function infoCssData($color, color) {
            var css = {
                top: 'auto',
                right: 'auto',
                bottom: 'auto',
                left: 'auto',
                backgroundColor: color.hexString,
                color: color.isDark ? '#fff' : '#000'
            }; // Initialize.
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

},{"@src-works/named-color-vars":2,"@src-works/window-var":3,"jquery":4,"select2":5,"tinycolor2":6}]},{},[8])(8)
});