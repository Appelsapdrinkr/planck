import AsyncStorage from "@react-native-async-storage/async-storage";

const BOTTLE_COUNT_STORAGE_KEY = "@planck/fridge-1-bottle-count";
const WESTMALLE_COUNT_STORAGE_KEY = "@planck/fridge-1-westmalle-tripel-count";
const DUBBEL_WESTMALLE_COUNT_STORAGE_KEY =
  "@planck/fridge-1-westmalle-dubbel-count";
const EXTRA_WESTMALLE_COUNT_STORAGE_KEY =
  "@planck/fridge-1-extra-westmalle-count";
import type { BottleId } from "../components/BottleGrid";

type FridgeNumber = 1 | 2 | 3 | 4 | 5;

const STORAGE_PREFIX = "@planck/bottle-count/";
const legacyKeys: Partial<Record<BottleId, string>> = {
  orval: "@planck/fridge-1-bottle-count",
  "westmalle-tripel": "@planck/fridge-1-westmalle-tripel-count",
  "westmalle-dubbel": "@planck/fridge-1-westmalle-dubbel-count",
  "extra-westmalle": "@planck/fridge-1-extra-westmalle-count",
};

const bottleIds: BottleId[] = [
  "orval",
  "westmalle-tripel",
  "westmalle-dubbel",
  "extra-westmalle",
  "kasteel-tripel",
  "kasteel-donker",
  "chimay-blue",
  "chimay-rood",
  "chimay-wit",
  "la-blond",
  "la-quad",
  "la-trip",
  "la-epos",
  "la-nili",
  "roch-10",
  "roch-8",
  "ename-trip",
  "ename-blond",
  "filou",
  "gent-trip",
  "piraat",
  "gulden-draak",
  "poes",
  "papagaai",
  "tietje",
  "ouwen-duiker",
  "omer",
  "cuvee-blond",
  "ezel",
  "zee-zuiper",
  "valier-extra",
  "valier-blond",
  "larogante",
  "sloeber",
  "duvel",
  "vedett-extra",
  "vedett-ipa",
  "liefmans-0",
  "lindemans-peche",
  "lindemans",
  "liefmans",
  "framboise-max",
  "palm",
  "carlsberg",
  "carlsberg-0",
  "rodenbach",
  "hommel",
  "bolleke",
  "blanche-de-bruge",
  "salitos",
  "cidre-ruwet",
  "somersby",
  "lipton-0",
  "lipton-green",
  "lipton",
  "sweet-white",
  "white",
  "chard",
  "rose",
  "cava",
  "cola",
  "fanta",
  "cola-0",
  "sprite",
  "cola-light",
  "schweppes-spritz",
  "gerolsteiner-sprudel",
  "gerolsteiner-naturel",
  "gerolsteiner-lemon",
  "gerolsteiner-orange",
  "ginger-beer",
  "cecemel",
  "fristi",
  "gini",
  "canada-dry",
  "schweppes-indian",
  "schweppes-agrum",
  "almuddler",
  "looza-orange",
  "looza-apple",
  "looza-apple-cherry",
  "looza-ace",
  "looza-pineapple",
  "looza-grapefruit",
  "looza-tomato",
  "fever-tree-indian",
  "fever-tree-mediterranean",
  "fever-tree-raspberry",
  "fever-tree-grapefruit",
  "red-bull",
  "red-bull-0",
  "barbar-blond",
  "barbar-bok",
  "kerel",
  "slaapmuts-tripel",
  "slaapmuts-blond",
  "erdinger",
  "boerken",
  "boerinneken",
  "delirium",
  "bush",
  "tripel-plukker",
  "hete-klinke",
  "hete-klote",
  "rodenbach-alexander",
  "adrian-oaked",
  "duvel-666",
  "leutebok",
  "lachouffe",
  "nettebuk",
  "seef",
  "duchesse",
  "cornet-oaked",
  "troublador-magma",
  "st-bernardus-abt-12",
  "st-bernardus-tripel",
  "gentse-strop",
  "achel-tripel",
  "saison-dry",
  "lefort-tripel",
  "kwaremont",
  "blauw",
  "moinette",
  "goedendag",
  "la-corne",
  "la-trap-isid",
  "la-trap-wit",
  "rochefort-tripel",
  "st-bern-8",
  "brugse-zot",
  "sport-zot",
  "witkap",
  "steenuil",
  "carolus-tripel",
  "carolus-hops",
  "xx-bitter",
  "erdinger-0",
  "kannunik",
  "keikoppenbier",
  "plajas",
  "adrian-tripel",
  "duvel-trip-hops",
  "dikkenek",
  "floreffe",
  "bootje",
  "vanderginste",
  "wipers-times",
  "achel-dubbel",
  "saison-dubbel",
  "wieze",
  "tongerlo",
  "moinette-bio",
  "suzanne",
  "gruut",
  "la-trap-dubbel",
  "st-bern-9",
  "viven-nada",
  "walibi",
  "goliath",
  "carolus-white",
  "sterke-hendrik",
];

function storageKey(id: BottleId, fridgeNumber: FridgeNumber) {
  return `@planck/fridge-${fridgeNumber}/bottle-count/${id}`;
}

function parseCount(value: string | null) {
  const parsedCount = Number.parseInt(value ?? "0", 10);
  return Number.isFinite(parsedCount) && parsedCount >= 0 ? parsedCount : 0;
}

export async function loadBottleSelections(
  fridgeNumber: FridgeNumber = 1,
): Promise<Record<BottleId, number>> {
  const values = await Promise.all(
    bottleIds.map(async (id) => {
      const storedValue = await AsyncStorage.getItem(
        storageKey(id, fridgeNumber),
      );
      if (storedValue !== null) {
        return [id, parseCount(storedValue)] as const;
      }

      const legacyKey = fridgeNumber === 1 ? legacyKeys[id] : undefined;
      const legacyValue = legacyKey
        ? await AsyncStorage.getItem(legacyKey)
        : null;
      const oldGenericValue =
        fridgeNumber === 1 && legacyValue === null
          ? await AsyncStorage.getItem(`${STORAGE_PREFIX}${id}`)
          : null;
      return [id, parseCount(legacyValue ?? oldGenericValue)] as const;
    }),
  );

  return Object.fromEntries(values) as Record<BottleId, number>;
}

export function saveBottleSelection(
  id: BottleId,
  count: number,
  fridgeNumber: FridgeNumber = 1,
) {
  return AsyncStorage.setItem(storageKey(id, fridgeNumber), count.toString());
}

export function clearBottleSelectionForId(id: BottleId) {
  return AsyncStorage.multiRemove(
    [
      ...[1, 2, 3, 4, 5].map((fridgeNumber) =>
        storageKey(id, fridgeNumber as FridgeNumber),
      ),
      legacyKeys[id],
    ].filter((key): key is string => key !== undefined),
  );
}

export function clearBottleSelection() {
  const currentKeys = [1, 2, 3, 4, 5].flatMap((fridgeNumber) =>
    bottleIds.map((id) => storageKey(id, fridgeNumber as FridgeNumber)),
  );

  return AsyncStorage.multiRemove([
    ...currentKeys,
    ...bottleIds.map((id) => `${STORAGE_PREFIX}${id}`),
    ...Object.values(legacyKeys).filter(
      (key): key is string => key !== undefined,
    ),
  ]);
}
