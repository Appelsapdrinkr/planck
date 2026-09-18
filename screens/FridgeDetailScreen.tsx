import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { BackButton } from "../components/BackButton";
import {
  BottleDefinition,
  BottleGrid,
  BottleId,
  bottleRows,
  fridgeThreeRows,
  fridgeFourRows,
  fridgeFiveRows,
  fridgeTwoRows,
} from "../components/BottleGrid";
import {
  loadBottleSelections,
  saveBottleSelection,
} from "../storage/bottleSelection";

type FridgeNumber = 1 | 2 | 3 | 4 | 5;

type FridgeDetailScreenProps = {
  number: FridgeNumber;
  onBack: () => void;
};

export function FridgeDetailScreen({
  number,
  onBack,
}: FridgeDetailScreenProps) {
  const [quantities, setQuantities] = useState<
    Partial<Record<BottleId, number>>
  >({});
  const [isBottleCountLoaded, setBottleCountLoaded] = useState(false);
  const [activeBottle, setActiveBottle] = useState<BottleDefinition | null>(
    null,
  );

  useEffect(() => {
    let isMounted = true;

    loadBottleSelections(
      number === 2
        ? 2
        : number === 3
          ? 3
          : number === 4
            ? 4
            : number === 5
              ? 5
              : 1,
    )
      .then((loadedQuantities) => {
        if (isMounted) {
          setQuantities(loadedQuantities);
        }
      })
      .finally(() => {
        if (isMounted) {
          setBottleCountLoaded(true);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [number]);

  useEffect(() => {
    if (
      (number === 1 ||
        number === 2 ||
        number === 3 ||
        number === 4 ||
        number === 5) &&
      isBottleCountLoaded
    ) {
      Promise.all(
        Object.entries(quantities).map(([id, count]) =>
          saveBottleSelection(
            id as BottleId,
            count ?? 0,
            number === 2
              ? 2
              : number === 3
                ? 3
                : number === 4
                  ? 4
                  : number === 5
                    ? 5
                    : 1,
          ),
        ),
      ).catch(() => undefined);
    }
  }, [isBottleCountLoaded, number, quantities]);

  const updateBottleCount = (id: BottleId, change: number) => {
    setQuantities((current) => ({
      ...current,
      [id]: Math.max(0, (current[id] ?? 0) + change),
    }));
  };

  const activeBottleChoices = activeBottle
    ? [
        { id: activeBottle.id, name: activeBottle.name },
        ...(activeBottle.alternateId && activeBottle.alternateName
          ? [{ id: activeBottle.alternateId, name: activeBottle.alternateName }]
          : []),
      ]
    : [];

  return (
    <View className="flex-1 items-center justify-center bg-[#090b0e] px-5">
      <BackButton onPress={onBack} />
      <View className="items-center rounded-[28px] border border-amber-400/20 bg-[#11151a] px-4 py-10 shadow-2xl">
        {number === 1 ||
        number === 2 ||
        number === 3 ||
        number === 4 ||
        number === 5 ? (
          <>
            <Text className="mb-4 text-xs font-bold uppercase tracking-[3px] text-amber-300">
              Fridge {number}
            </Text>
            <BottleGrid
              onSelect={setActiveBottle}
              quantities={quantities}
              rows={
                number === 2
                  ? fridgeTwoRows
                  : number === 3
                    ? fridgeThreeRows
                    : number === 4
                      ? fridgeFourRows
                      : number === 5
                        ? fridgeFiveRows
                        : bottleRows
              }
            />
          </>
        ) : (
          <>
            <Text className="mb-4 text-xs font-bold uppercase tracking-[3px] text-amber-300">
              Fridge
            </Text>
            <Text className="text-7xl font-bold text-white">{number}</Text>
          </>
        )}
      </View>
      <Modal
        animationType="fade"
        onRequestClose={() => setActiveBottle(null)}
        transparent
        visible={activeBottle !== null}>
        <View className="flex-1 items-center justify-center bg-black/70 px-6">
          <View className="w-full max-w-[340px] rounded-[28px] border border-amber-400/20 bg-[#171b21] p-6 shadow-2xl">
            <Text className="text-2xl font-bold text-white">
              Selecteer je flessen
            </Text>
            <Text className="mt-2 text-sm leading-5 text-slate-400">
              Kies elk type afzonderlijk.
            </Text>
            <View className="my-5 gap-4">
              {activeBottleChoices.map((choice) => (
                <View key={choice.id}>
                  <Text className="mb-2 text-base font-semibold text-amber-100">
                    {choice.name}
                  </Text>
                  <View className="flex-row items-center justify-center gap-6">
                    <Pressable
                      accessibilityLabel={`Decrease ${choice.name} quantity`}
                      accessibilityRole="button"
                      className="h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5"
                      onPress={() => updateBottleCount(choice.id, -1)}>
                      <Text className="text-xl text-white">-</Text>
                    </Pressable>
                    <Text className="min-w-[40px] text-center text-3xl font-bold text-amber-300">
                      {quantities[choice.id] ?? 0}
                    </Text>
                    <Pressable
                      accessibilityLabel={`Increase ${choice.name} quantity`}
                      accessibilityRole="button"
                      className="h-10 w-10 items-center justify-center rounded-full bg-amber-400"
                      onPress={() => updateBottleCount(choice.id, 1)}>
                      <Text className="text-xl text-slate-950">+</Text>
                    </Pressable>
                  </View>
                </View>
              ))}
            </View>
            <Pressable
              accessibilityRole="button"
              className="h-14 items-center justify-center rounded-2xl bg-amber-400 active:bg-amber-500"
              onPress={() => setActiveBottle(null)}>
              <Text className="font-bold text-slate-950">Gereed</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <StatusBar style="light" />
    </View>
  );
}
