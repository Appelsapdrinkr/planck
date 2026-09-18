import { Image, Pressable, Text, View } from "react-native";

export type BottleId =
  | "orval"
  | "westmalle-tripel"
  | "westmalle-dubbel"
  | "extra-westmalle"
  | "kasteel-tripel"
  | "kasteel-donker"
  | "chimay-blue"
  | "chimay-rood"
  | "chimay-wit"
  | "la-blond"
  | "la-quad"
  | "la-trip"
  | "la-epos"
  | "la-nili"
  | "roch-10"
  | "roch-8"
  | "ename-trip"
  | "ename-blond"
  | "filou"
  | "gent-trip"
  | "piraat"
  | "gulden-draak"
  | "poes"
  | "papagaai"
  | "tietje"
  | "ouwen-duiker"
  | "omer"
  | "cuvee-blond"
  | "ezel"
  | "zee-zuiper"
  | "valier-extra"
  | "valier-blond"
  | "larogante"
  | "sloeber"
  | "duvel"
  | "vedett-extra"
  | "vedett-ipa"
  | "liefmans-0"
  | "lindemans-peche"
  | "lindemans"
  | "liefmans"
  | "framboise-max"
  | "palm"
  | "carlsberg"
  | "carlsberg-0"
  | "rodenbach"
  | "hommel"
  | "bolleke"
  | "blanche-de-bruge"
  | "salitos"
  | "cidre-ruwet"
  | "somersby"
  | "lipton-0"
  | "lipton-green"
  | "lipton"
  | "sweet-white"
  | "white"
  | "chard"
  | "rose"
  | "cava"
  | "cola"
  | "fanta"
  | "cola-0"
  | "sprite"
  | "cola-light"
  | "schweppes-spritz"
  | "gerolsteiner-sprudel"
  | "gerolsteiner-naturel"
  | "gerolsteiner-lemon"
  | "gerolsteiner-orange"
  | "ginger-beer"
  | "cecemel"
  | "fristi"
  | "gini"
  | "canada-dry"
  | "schweppes-indian"
  | "schweppes-agrum"
  | "almuddler"
  | "looza-orange"
  | "looza-apple"
  | "looza-apple-cherry"
  | "looza-ace"
  | "looza-pineapple"
  | "looza-grapefruit"
  | "looza-tomato"
  | "fever-tree-indian"
  | "fever-tree-mediterranean"
  | "fever-tree-raspberry"
  | "fever-tree-grapefruit"
  | "red-bull"
  | "red-bull-0"
  | "barbar-blond"
  | "barbar-bok"
  | "kerel"
  | "slaapmuts-tripel"
  | "slaapmuts-blond"
  | "erdinger"
  | "boerken"
  | "boerinneken"
  | "delirium"
  | "bush"
  | "tripel-plukker"
  | "hete-klinke"
  | "hete-klote"
  | "rodenbach-alexander"
  | "adrian-oaked"
  | "duvel-666"
  | "leutebok"
  | "lachouffe"
  | "nettebuk"
  | "seef"
  | "duchesse"
  | "cornet-oaked"
  | "troublador-magma"
  | "st-bernardus-abt-12"
  | "st-bernardus-tripel"
  | "gentse-strop"
  | "achel-tripel"
  | "saison-dry"
  | "lefort-tripel"
  | "kwaremont"
  | "blauw"
  | "moinette"
  | "goedendag"
  | "la-corne"
  | "la-trap-isid"
  | "la-trap-wit"
  | "rochefort-tripel"
  | "st-bern-8"
  | "brugse-zot"
  | "sport-zot"
  | "witkap"
  | "steenuil"
  | "carolus-tripel"
  | "carolus-hops"
  | "xx-bitter"
  | "erdinger-0"
  | "kannunik"
  | "keikoppenbier"
  | "plajas"
  | "adrian-tripel"
  | "duvel-trip-hops"
  | "dikkenek"
  | "floreffe"
  | "bootje"
  | "vanderginste"
  | "wipers-times"
  | "achel-dubbel"
  | "saison-dubbel"
  | "wieze"
  | "tongerlo"
  | "moinette-bio"
  | "suzanne"
  | "gruut"
  | "la-trap-dubbel"
  | "st-bern-9"
  | "viven-nada"
  | "walibi"
  | "goliath"
  | "carolus-white"
  | "sterke-hendrik";

export type BottleDefinition = {
  id: BottleId;
  name: string;
  image: number;
  alternateName?: string;
  alternateId?: BottleId;
};

const orval: BottleDefinition = {
  id: "orval",
  name: "Orval",
  image: require("../assets/orval.png"),
};
const westmalleTripel: BottleDefinition = {
  id: "westmalle-tripel",
  name: "Westmalle Tripel",
  image: require("../assets/westmalle.png"),
};
const westmalleDubbel: BottleDefinition = {
  id: "westmalle-dubbel",
  name: "Westmalle Dubbel",
  image: require("../assets/dubbel_westmalle.png"),
};
const extraWestmalle: BottleDefinition = {
  id: "extra-westmalle",
  name: "Extra Westmalle",
  image: require("../assets/extra_westmalle.png"),
};

export const bottleRows: BottleDefinition[][] = [
  [orval, westmalleTripel, westmalleDubbel, extraWestmalle],
  [
    {
      id: "kasteel-tripel",
      name: "Kasteel Tripel",
      image: require("../assets/Kasteel-tripel.png"),
    },
    {
      id: "kasteel-donker",
      name: "Kasteel Donker",
      image: require("../assets/Kasteel-Donker-33cl.png"),
    },
    {
      id: "chimay-blue",
      name: "Chimay Blue",
      image: require("../assets/chimay-blue-1005128.png"),
    },
    {
      id: "chimay-rood",
      name: "Chimay Rood",
      image: require("../assets/chimay-7-rood-fles-33cl.png"),
    },
    {
      id: "chimay-wit",
      name: "Chimay Wit",
      image: require("../assets/chimay_wit.png"),
    },
  ],
  [
    {
      id: "la-blond",
      name: "La Blond",
      image: require("../assets/La-Trappe-Blond.png"),
    },
    { id: "la-quad", name: "La Quad", image: require("../assets/la_quad.png") },
    { id: "la-trip", name: "La Trip", image: require("../assets/la_trip.png") },
    {
      id: "la-epos",
      name: "La Epos",
      image: require("../assets/LaTrappe-Epos.png"),
    },
    { id: "la-nili", name: "La Nili", image: require("../assets/la_nili.png") },
    {
      id: "roch-10",
      name: "Roch 10",
      image: require("../assets/roche_10.png"),
    },
    { id: "roch-8", name: "Roch 8", image: require("../assets/roch_8.png") },
  ],
];

export const fridgeTwoRows: BottleDefinition[][] = [
  [
    {
      id: "ename-trip",
      name: "Ename Tripel",
      image: require("../assets/ename_trip.png"),
    },
    {
      id: "ename-blond",
      name: "Ename Blond",
      image: require("../assets/ename_blond.png"),
    },
    { id: "filou", name: "Filou", image: require("../assets/filou.png") },
    {
      id: "gent-trip",
      name: "Gentse Tripel",
      image: require("../assets/gent_trip.png"),
    },
    { id: "piraat", name: "Piraat", image: require("../assets/piraat.png") },
    {
      id: "gulden-draak",
      name: "Gulden Draak",
      image: require("../assets/gulden_draak.png"),
    },
  ],
  [
    { id: "poes", name: "Poes", image: require("../assets/poes.png") },
    {
      id: "papagaai",
      name: "Papegaai",
      image: require("../assets/papagaai.png"),
    },
    { id: "tietje", name: "Tietje", image: require("../assets/tietje.png") },
    {
      id: "ouwen-duiker",
      name: "Ouwen Duiker",
      image: require("../assets/ouwen_duiker.png"),
    },
    { id: "omer", name: "Omer", image: require("../assets/omer.png") },
  ],
  [
    {
      id: "cuvee-blond",
      name: "Cuvée Blond",
      image: require("../assets/cuvee_blond.png"),
    },
    { id: "ezel", name: "Ezel", image: require("../assets/ezel.png") },
    {
      id: "zee-zuiper",
      name: "Zeezuiper",
      image: require("../assets/zee_zuiper.png"),
    },
    {
      id: "valier-extra",
      name: "Valier Extra",
      image: require("../assets/vailer_ext.png"),
    },
    {
      id: "valier-blond",
      name: "Valier Blond",
      image: require("../assets/valier_blond.png"),
    },
    {
      id: "larogante",
      name: "Larogante",
      image: require("../assets/larogante.png"),
    },
    { id: "sloeber", name: "Sloeber", image: require("../assets/sloeber.png") },
  ],
];

export const fridgeThreeRows: BottleDefinition[][] = [
  [
    { id: "duvel", name: "Duvel", image: require("../assets/duvel.png") },
    {
      id: "vedett-extra",
      name: "Vedett Extra",
      image: require("../assets/vedett_ex.png"),
    },
    {
      id: "vedett-ipa",
      name: "Vedett IPA",
      image: require("../assets/vedett_ipa.png"),
    },
  ],
  [
    {
      id: "liefmans-0",
      name: "Liefmans 0",
      image: require("../assets/liefman_0.png"),
    },
    {
      id: "lindemans-peche",
      name: "Lindemans Peche",
      image: require("../assets/linde_pech.png"),
    },
    {
      id: "lindemans",
      name: "Lindemans",
      image: require("../assets/lindemans.png"),
    },
    {
      id: "liefmans",
      name: "Liefmans",
      image: require("../assets/liefmans.png"),
    },
    {
      id: "framboise-max",
      name: "Framboise Max",
      image: require("../assets/framboise_max.png"),
    },
  ],
  [
    { id: "palm", name: "Palm", image: require("../assets/palm.png") },
    {
      id: "carlsberg",
      name: "Carlsberg",
      image: require("../assets/carlsberg.png"),
    },
    {
      id: "carlsberg-0",
      name: "Carlsberg 0",
      image: require("../assets/carlsberg_0.png"),
    },
    {
      id: "rodenbach",
      name: "Rodenbach",
      image: require("../assets/rodenbach.png"),
    },
    { id: "hommel", name: "Hommel", image: require("../assets/hommel.png") },
    { id: "bolleke", name: "Bolleke", image: require("../assets/bolleke.png") },
    {
      id: "blanche-de-bruge",
      name: "Blanche de Bruges",
      image: require("../assets/blanche_de_bruge.png"),
    },
  ],
];

export const fridgeFourRows: BottleDefinition[][] = [
  [
    { id: "salitos", name: "Salitos", image: require("../assets/salitos.png") },
    {
      id: "cidre-ruwet",
      name: "Cidre Ruwet",
      image: require("../assets/cidre_ruwet.png"),
    },
    {
      id: "somersby",
      name: "Somersby",
      image: require("../assets/somersby.png"),
    },
    {
      id: "lipton-0",
      name: "Lipton 0",
      image: require("../assets/lipton0.png"),
    },
    {
      id: "lipton-green",
      name: "Lipton Green",
      image: require("../assets/lipton green.png"),
    },
    { id: "lipton", name: "Lipton", image: require("../assets/lipton.png") },
  ],
  [
    {
      id: "sweet-white",
      name: "Sweet White",
      image: require("../assets/sweetwhite.png"),
    },
    { id: "white", name: "White", image: require("../assets/white.png") },
    { id: "chard", name: "Chard", image: require("../assets/chard.png") },
    { id: "rose", name: "Rosé", image: require("../assets/rose.png") },
    { id: "cava", name: "Cava", image: require("../assets/cava.png") },
  ],
];

export const colaRows: BottleDefinition[][] = [
  [
    { id: "cola", name: "Cola", image: require("../assets/cola.png") },
    { id: "fanta", name: "Fanta", image: require("../assets/fanta.png") },
  ],
  [
    { id: "cola-0", name: "Cola 0", image: require("../assets/cola0.png") },
    { id: "sprite", name: "Sprite", image: require("../assets/sprite.png") },
    {
      id: "cola-light",
      name: "Cola Light",
      image: require("../assets/colalight.png"),
    },
    {
      id: "schweppes-spritz",
      name: "Schweppes Spritz",
      image: require("../assets/schwspritz.png"),
    },
  ],
  [
    {
      id: "gerolsteiner-sprudel",
      name: "Gerolsteiner Sprudel",
      image: require("../assets/gerolsteiner sprudel.png"),
    },
    {
      id: "gerolsteiner-naturel",
      name: "Gerolsteiner Naturel",
      image: require("../assets/gerolsteiner naturel.png"),
    },
    {
      id: "gerolsteiner-lemon",
      name: "Gerolsteiner Lemon",
      image: require("../assets/gerolsteiner lemon.png"),
    },
    {
      id: "gerolsteiner-orange",
      name: "Gerolsteiner Orange",
      image: require("../assets/gerolsteiner orange.png"),
    },
    {
      id: "ginger-beer",
      name: "Ginger Beer",
      image: require("../assets/ginger beer.png"),
    },
  ],
  [
    { id: "cecemel", name: "Cecemel", image: require("../assets/cece.png") },
    { id: "fristi", name: "Fristi", image: require("../assets/fristi.png") },
    { id: "gini", name: "Gini", image: require("../assets/gini.png") },
    {
      id: "canada-dry",
      name: "Canada Dry",
      image: require("../assets/canada drypng.png"),
    },
    {
      id: "schweppes-indian",
      name: "Schweppes Indian",
      image: require("../assets/schweppez indian.png"),
    },
    {
      id: "schweppes-agrum",
      name: "Schweppes Agrum",
      image: require("../assets/schweppez agrum.png"),
    },
    {
      id: "almuddler",
      name: "Almuddler",
      image: require("../assets/almuddler.png"),
    },
  ],
  [
    {
      id: "looza-orange",
      name: "Looza Orange",
      image: require("../assets/looza orange.png"),
    },
    {
      id: "looza-apple",
      name: "Looza Apple",
      image: require("../assets/looza apple.png"),
    },
    {
      id: "looza-apple-cherry",
      name: "Looza Apple Cherry",
      image: require("../assets/looza apple cherry.png"),
    },
    {
      id: "looza-ace",
      name: "Looza Ace",
      image: require("../assets/looza ace.png"),
    },
    {
      id: "looza-pineapple",
      name: "Looza Pineapple",
      image: require("../assets/looza pineapple.png"),
    },
    {
      id: "looza-grapefruit",
      name: "Looza Grapefruit",
      image: require("../assets/looza grapefruit.png"),
    },
    {
      id: "looza-tomato",
      name: "Looza Tomato",
      image: require("../assets/looza tomaat.png"),
    },
  ],
  [
    {
      id: "fever-tree-indian",
      name: "Fever Tree Indian",
      image: require("../assets/fever indian.png"),
    },
    {
      id: "fever-tree-mediterranean",
      name: "Fever Tree Mediterranean",
      image: require("../assets/fever mediterranean.png"),
    },
    {
      id: "fever-tree-raspberry",
      name: "Fever Tree Raspberry",
      image: require("../assets/fever raspberry.png"),
    },
    {
      id: "fever-tree-grapefruit",
      name: "Fever Tree Grapefruit",
      image: require("../assets/fever grapefruit.png"),
    },
    {
      id: "red-bull",
      name: "Red Bull",
      image: require("../assets/red bull.png"),
    },
    {
      id: "red-bull-0",
      name: "Red Bull 0",
      image: require("../assets/red bull0.png"),
    },
  ],
  [
    {
      id: "barbar-blond",
      name: "Barbar Blond",
      image: require("../assets/barbarBlond.png"),
    },
    {
      id: "barbar-bok",
      name: "Barbar Bok",
      image: require("../assets/barbarBok.png"),
    },
    { id: "kerel", name: "Kerel", image: require("../assets/kerel.png") },
    {
      id: "slaapmuts-tripel",
      name: "Slaapmuts Tripel",
      image: require("../assets/slaapmuts tripel.png"),
    },
    {
      id: "slaapmuts-blond",
      name: "Slaapmuts Blond",
      image: require("../assets/slaapmuts blond.png"),
    },
  ],
];

export const fridgeFiveRows: BottleDefinition[][] = [
  [
    {
      id: "erdinger",
      name: "Erdinger",
      alternateName: "Erdinger 0",
      alternateId: "erdinger-0",
      image: require("../assets/erdinger.png"),
    },
    { id: "boerken", name: "Boerken", image: require("../assets/boerken.png") },
    {
      id: "boerinneken",
      name: "Boerinneken",
      image: require("../assets/boerken.png"),
    },
    {
      id: "delirium",
      name: "Delirium",
      image: require("../assets/delirium.png"),
    },
    {
      id: "bush",
      name: "Bush",
      alternateName: "Kannunik",
      alternateId: "kannunik",
      image: require("../assets/bush.png"),
    },
    {
      id: "tripel-plukker",
      name: "Tripel Plukker",
      alternateName: "Keikoppenbier",
      alternateId: "keikoppenbier",
      image: require("../assets/tripel plukker.png"),
    },
    {
      id: "hete-klinke",
      name: "Hete Klinke",
      image: require("../assets/hete klinke.png"),
    },
    {
      id: "hete-klote",
      name: "Hete Klote",
      image: require("../assets/hete klinke.png"),
    },
    {
      id: "rodenbach-alexander",
      name: "Rodenbach Alexander",
      alternateName: "Plajas",
      alternateId: "plajas",
      image: require("../assets/rodenbach alexander.png"),
    },
    {
      id: "adrian-oaked",
      name: "Adrian Oaked",
      alternateName: "Adrian Tripel",
      alternateId: "adrian-tripel",
      image: require("../assets/adriean oaked.png"),
    },
  ],
  [
    {
      id: "duvel-666",
      name: "Duvel 666",
      alternateName: "Duvel Trip Hops",
      alternateId: "duvel-trip-hops",
      image: require("../assets/duvel 666.png"),
    },
    {
      id: "leutebok",
      name: "Leutebok",
      alternateName: "Dikkenek",
      alternateId: "dikkenek",
      image: require("../assets/leutebok.png"),
    },
    {
      id: "lachouffe",
      name: "La Chouffe",
      image: require("../assets/chouffe.png"),
    },
    {
      id: "nettebuk",
      name: "Nettebuk",
      alternateName: "Floreffe",
      alternateId: "floreffe",
      image: require("../assets/boerken.png"),
    },
    {
      id: "seef",
      name: "Seef",
      alternateName: "Bootje",
      alternateId: "bootje",
      image: require("../assets/seef.png"),
    },
  ],
  [
    {
      id: "duchesse",
      name: "Duchesse",
      alternateName: "Vanderginste",
      alternateId: "vanderginste",
      image: require("../assets/duchesse.png"),
    },
    {
      id: "cornet-oaked",
      name: "Cornet Oaked",
      image: require("../assets/cornet.png"),
    },
    {
      id: "troublador-magma",
      name: "Troublador Magma",
      alternateName: "Wipers Times",
      alternateId: "wipers-times",
      image: require("../assets/troublador magma.png"),
    },
    {
      id: "st-bernardus-abt-12",
      name: "St Bernardus Abt 12",
      image: require("../assets/st bern abt 12.png"),
    },
    {
      id: "st-bernardus-tripel",
      name: "St Bernardus Tripel",
      image: require("../assets/st bern trip.png"),
    },
    {
      id: "gentse-strop",
      name: "Gentse Strop",
      image: require("../assets/gente strop.png"),
    },
    {
      id: "achel-tripel",
      name: "Achel Tripel",
      alternateName: "Achel Dubbel",
      alternateId: "achel-dubbel",
      image: require("../assets/ache trip.png"),
    },
    {
      id: "saison-dry",
      name: "Saison Dry",
      alternateName: "Saison Dubbel",
      alternateId: "saison-dubbel",
      image: require("../assets/saison dupont.png"),
    },
  ],
  [
    {
      id: "lefort-tripel",
      name: "Lefort Tripel",
      alternateName: "Wieze",
      alternateId: "wieze",
      image: require("../assets/lefor trip.png"),
    },
    {
      id: "kwaremont",
      name: "Kwaremont",
      alternateName: "Tongerlo",
      alternateId: "tongerlo",
      image: require("../assets/kwaremont.png"),
    },
    { id: "blauw", name: "Blauw", image: require("../assets/blauw.png") },
    {
      id: "moinette",
      name: "Moinette",
      alternateName: "Moinette Bio",
      alternateId: "moinette-bio",
      image: require("../assets/moinette blond.png"),
    },
    {
      id: "goedendag",
      name: "Goedendag",
      alternateName: "Suzanne",
      alternateId: "suzanne",
      image: require("../assets/goedendag.png"),
    },
    {
      id: "la-corne",
      name: "La Corne",
      alternateName: "Gruut",
      alternateId: "gruut",
      image: require("../assets/la corne.png"),
    },
    {
      id: "la-trap-isid",
      name: "La Trappe Isid",
      alternateName: "La Trappe Dubbel",
      alternateId: "la-trap-dubbel",
      image: require("../assets/la trap dubbel.png"),
    },
    {
      id: "la-trap-wit",
      name: "La Trappe Wit",
      image: require("../assets/la trap wit.png"),
    },
    {
      id: "rochefort-tripel",
      name: "Rochefort Tripel",
      image: require("../assets/roche_10.png"),
    },
  ],
  [
    {
      id: "st-bern-8",
      name: "St Bernard 8",
      alternateName: "St Bernard 9",
      alternateId: "st-bern-9",
      image: require("../assets/st bern 8.png"),
    },
    {
      id: "brugse-zot",
      name: "Brugse Zot",
      image: require("../assets/brugse zot.png"),
    },
    {
      id: "sport-zot",
      name: "Sport Zot",
      alternateName: "Viven Nada",
      alternateId: "viven-nada",
      image: require("../assets/sport zot.png"),
    },
    {
      id: "witkap",
      name: "Witkap",
      alternateName: "Walibi",
      alternateId: "walibi",
      image: require("../assets/witkap.png"),
    },
    {
      id: "steenuil",
      name: "Steenuil",
      alternateName: "Goliath",
      alternateId: "goliath",
      image: require("../assets/steenuil.png"),
    },
    {
      id: "carolus-tripel",
      name: "Carolus Tripel",
      image: require("../assets/carolus trip.png"),
    },
    {
      id: "carolus-hops",
      name: "Carolus Hops",
      alternateName: "Carolus White",
      alternateId: "carolus-white",
      image: require("../assets/carolus hops.png"),
    },
    {
      id: "xx-bitter",
      name: "XX Bitter",
      alternateName: "Sterke Hendrik",
      alternateId: "sterke-hendrik",
      image: require("../assets/xx bitter.png"),
    },
  ],
];

export const bottleCatalog: BottleDefinition[] = Array.from(
  new Map(
    [
      orval,
      westmalleTripel,
      westmalleDubbel,
      extraWestmalle,
      ...bottleRows[1],
      ...bottleRows[2],
      ...fridgeTwoRows.flat(),
      ...fridgeThreeRows.flat(),
      ...fridgeFourRows.flat(),
      ...colaRows.flat(),
      ...fridgeFiveRows.flat(),
      ...fridgeFiveRows.flat().flatMap((bottle) =>
        bottle.alternateId && bottle.alternateName
          ? [
              {
                id: bottle.alternateId,
                name: bottle.alternateName,
                image: bottle.image,
              },
            ]
          : [],
      ),
    ].map((bottle) => [bottle.id, bottle] as const),
  ).values(),
);

type BottleGridProps = {
  rows?: BottleDefinition[][];
  quantities: Partial<Record<BottleId, number>>;
  onSelect: (bottle: BottleDefinition) => void;
};

export function BottleGrid({
  rows = bottleRows,
  quantities,
  onSelect,
}: BottleGridProps) {
  return (
    <View className="w-[300px] gap-1">
      {rows.map((row, rowIndex) => (
        <View className="flex-row justify-center gap-1" key={rowIndex}>
          {row.map((bottle, bottleIndex) => (
            <Pressable
              accessibilityLabel={`Select how many ${bottle.name} bottles you need`}
              accessibilityRole="button"
              className="h-[100px] w-[40px]"
              key={`${bottle.id}-${rowIndex}-${bottleIndex}`}
              onPress={() => onSelect(bottle)}>
              <Image
                accessibilityLabel={`${bottle.name} bottle`}
                className="h-full w-full"
                resizeMode="contain"
                source={bottle.image}
              />
              {(quantities[bottle.id] ?? 0) > 0 && (
                <View className="absolute right-0 top-0 min-w-4 rounded-full bg-amber-400 px-1">
                  <Text className="text-center text-[9px] font-bold text-slate-950">
                    {quantities[bottle.id]}
                  </Text>
                </View>
              )}
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
}
