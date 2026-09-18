import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { BackButton } from "../components/BackButton";
import { bottleCatalog, BottleId } from "../components/BottleGrid";
import {
  clearBottleSelectionForId,
  clearBottleSelection,
  loadBottleSelections,
  saveBottleSelection,
} from "../storage/bottleSelection";

type SelectionScreenProps = {
  onBack: () => void;
};

export function SelectionScreen({ onBack }: SelectionScreenProps) {
  const [quantities, setQuantities] = useState<Record<BottleId, number> | null>(
    null,
  );
  const [activeBottle, setActiveBottle] = useState<
    (typeof bottleCatalog)[number] | null
  >(null);

  useEffect(() => {
    let isMounted = true;

    Promise.all([
      loadBottleSelections(1),
      loadBottleSelections(2),
      loadBottleSelections(3),
      loadBottleSelections(4),
      loadBottleSelections(5),
    ])
      .then(
        ([
          firstFridge,
          secondFridge,
          thirdFridge,
          fourthFridge,
          fifthFridge,
        ]) => {
          if (isMounted) {
            const mergedQuantities = { ...firstFridge };
            Object.entries(secondFridge).forEach(([id, count]) => {
              mergedQuantities[id as BottleId] =
                (mergedQuantities[id as BottleId] ?? 0) + count;
            });
            Object.entries(thirdFridge).forEach(([id, count]) => {
              mergedQuantities[id as BottleId] =
                (mergedQuantities[id as BottleId] ?? 0) + count;
            });
            Object.entries(fourthFridge).forEach(([id, count]) => {
              mergedQuantities[id as BottleId] =
                (mergedQuantities[id as BottleId] ?? 0) + count;
            });
            Object.entries(fifthFridge).forEach(([id, count]) => {
              mergedQuantities[id as BottleId] =
                (mergedQuantities[id as BottleId] ?? 0) + count;
            });
            setQuantities(mergedQuantities);
          }
        },
      )
      .catch(() => {
        if (isMounted) {
          setQuantities({} as Record<BottleId, number>);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const isLoading = quantities === null;
  const selectedBottles = bottleCatalog.filter(
    (bottle) => (quantities?.[bottle.id] ?? 0) > 0,
  );
  const totalBottleCount = selectedBottles.reduce(
    (total, bottle) => total + (quantities?.[bottle.id] ?? 0),
    0,
  );

  const clearSelection = async () => {
    await clearBottleSelection();
    setQuantities({} as Record<BottleId, number>);
  };

  const handleClearSelection = () => {
    Alert.alert(
      "Selectie wissen?",
      "Wil je alle geselecteerde flessen verwijderen?",
      [
        { text: "Annuleren", style: "cancel" },
        { text: "Wissen", style: "destructive", onPress: clearSelection },
      ],
    );
  };

  const updateActiveBottleAmount = (change: number) => {
    if (!activeBottle || !quantities) return;

    const nextCount = Math.max(0, (quantities[activeBottle.id] ?? 0) + change);
    setQuantities((current) =>
      current ? { ...current, [activeBottle.id]: nextCount } : current,
    );
    Promise.all(
      [1, 2, 3, 4, 5].map((fridgeNumber) =>
        saveBottleSelection(
          activeBottle.id,
          fridgeNumber === 1 ? nextCount : 0,
          fridgeNumber as 1 | 2 | 3 | 4 | 5,
        ),
      ),
    ).catch(() => undefined);
  };

  const deleteActiveBottle = async () => {
    if (!activeBottle) return;
    await clearBottleSelectionForId(activeBottle.id);
    setQuantities((current) =>
      current ? { ...current, [activeBottle.id]: 0 } : current,
    );
    setActiveBottle(null);
  };

  const handleDeleteActiveBottle = () => {
    if (!activeBottle) return;

    Alert.alert(
      `${activeBottle.name} verwijderen?`,
      "Wil je deze fles uit je selectie verwijderen?",
      [
        { text: "Annuleren", style: "cancel" },
        {
          text: "Verwijderen",
          style: "destructive",
          onPress: deleteActiveBottle,
        },
      ],
    );
  };

  return (
    <View className="flex-1 bg-[#090b0e] px-5 pt-28">
      <BackButton onPress={onBack} />
      {!isLoading && totalBottleCount > 0 && (
        <Pressable
          accessibilityLabel="Clear selected bottles"
          accessibilityRole="button"
          className="absolute right-5 top-14 h-10 justify-center rounded-full border border-red-400/30 bg-red-400/10 px-3 active:bg-red-400/20"
          onPress={handleClearSelection}>
          <Text className="text-xs font-bold text-red-200">Wissen</Text>
        </Pressable>
      )}
      <Text className="text-xs font-bold uppercase tracking-[4px] text-cyan-300">
        Mijn selectie
      </Text>
      <Text className="mt-3 text-4xl font-bold text-white">
        Geselecteerde flessen
      </Text>
      <Text className="mb-7 mt-2 text-base text-slate-400">
        {isLoading
          ? "Selectie wordt geladen..."
          : `${totalBottleCount} flessen geselecteerd`}
      </Text>

      <ScrollView contentContainerClassName="gap-3 pb-8">
        {isLoading ? (
          <View className="rounded-2xl border border-white/10 bg-[#11151a] p-5">
            <Text className="text-base text-slate-400">
              Selectie wordt geladen...
            </Text>
          </View>
        ) : selectedBottles.length === 0 ? (
          <View className="rounded-2xl border border-white/10 bg-[#11151a] p-5">
            <Text className="text-base text-slate-400">
              Je hebt nog geen flessen geselecteerd.
            </Text>
          </View>
        ) : (
          selectedBottles.map((bottle) => {
            const count = quantities[bottle.id];

            return (
              <Pressable
                key={bottle.id}
                className="h-24 flex-row items-center rounded-2xl border border-amber-400/20 bg-[#11151a] px-4"
                onPress={() => setActiveBottle(bottle)}
                accessibilityRole="button"
                accessibilityLabel={`Edit ${bottle.name} selection`}>
                <Image
                  accessibilityLabel={`${bottle.name} bottle`}
                  className="mr-4 h-16 w-12"
                  resizeMode="contain"
                  source={bottle.image}
                />
                <View className="flex-1">
                  <Text className="text-lg font-bold text-amber-100">
                    {bottle.name}
                  </Text>
                  <Text className="mt-1 text-sm text-slate-400">
                    Aantal: {count}
                  </Text>
                </View>
                <Text className="text-2xl font-bold text-amber-300">
                  {count}x
                </Text>
              </Pressable>
            );
          })
        )}
      </ScrollView>
      <Modal
        animationType="fade"
        onRequestClose={() => setActiveBottle(null)}
        transparent
        visible={activeBottle !== null}>
        <View className="flex-1 items-center justify-center bg-black/70 px-6">
          <View className="w-full max-w-[340px] rounded-[28px] border border-amber-400/20 bg-[#171b21] p-6 shadow-2xl">
            <Text className="text-2xl font-bold text-white">
              {activeBottle?.name}
            </Text>
            <Text className="mt-2 text-sm text-slate-400">
              Pas het geselecteerde aantal aan.
            </Text>
            <View className="my-7 flex-row items-center justify-center gap-6">
              <Pressable
                accessibilityRole="button"
                className="h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5"
                onPress={() => updateActiveBottleAmount(-1)}>
                <Text className="text-2xl text-white">-</Text>
              </Pressable>
              <Text className="text-4xl font-bold text-amber-300">
                {activeBottle ? (quantities?.[activeBottle.id] ?? 0) : 0}
              </Text>
              <Pressable
                accessibilityRole="button"
                className="h-12 w-12 items-center justify-center rounded-full bg-amber-400"
                onPress={() => updateActiveBottleAmount(1)}>
                <Text className="text-2xl text-slate-950">+</Text>
              </Pressable>
            </View>
            <Pressable
              accessibilityRole="button"
              className="mb-3 h-14 items-center justify-center rounded-2xl bg-red-500"
              onPress={handleDeleteActiveBottle}>
              <Text className="font-bold text-white">Verwijderen</Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              className="h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
              onPress={() => setActiveBottle(null)}>
              <Text className="font-bold text-slate-200">Annuleren</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <StatusBar style="light" />
    </View>
  );
}
