import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { BackButton } from "../components/BackButton";
import {
  BottleDefinition,
  BottleGrid,
  BottleId,
  colaRows,
} from "../components/BottleGrid";
import {
  loadBottleSelections,
  saveBottleSelection,
} from "../storage/bottleSelection";

type ColaFridgeScreenProps = {
  onBack: () => void;
};

export function ColaFridgeScreen({ onBack }: ColaFridgeScreenProps) {
  const [quantities, setQuantities] = useState<
    Partial<Record<BottleId, number>>
  >({});
  const [isLoaded, setLoaded] = useState(false);
  const [activeBottle, setActiveBottle] = useState<BottleDefinition | null>(
    null,
  );

  useEffect(() => {
    let isMounted = true;
    loadBottleSelections(5)
      .then((loadedQuantities) => {
        if (isMounted) setQuantities(loadedQuantities);
      })
      .finally(() => {
        if (isMounted) setLoaded(true);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    Promise.all(
      Object.entries(quantities).map(([id, count]) =>
        saveBottleSelection(id as BottleId, count ?? 0, 5),
      ),
    ).catch(() => undefined);
  }, [isLoaded, quantities]);

  const count = activeBottle ? (quantities[activeBottle.id] ?? 0) : 0;
  const changeCount = (change: number) => {
    if (!activeBottle) return;
    setQuantities((current) => ({
      ...current,
      [activeBottle.id]: Math.max(0, (current[activeBottle.id] ?? 0) + change),
    }));
  };

  return (
    <View className="flex-1 items-center justify-center bg-[#090b0e] px-5">
      <BackButton onPress={onBack} />
      <View className="items-center rounded-[28px] border border-red-400/20 bg-[#11151a] px-4 py-10 shadow-2xl">
        <Text className="mb-4 text-xs font-bold uppercase tracking-[3px] text-red-300">
          Cola frigo
        </Text>
        <BottleGrid
          onSelect={setActiveBottle}
          quantities={quantities}
          rows={colaRows}
        />
      </View>
      <Modal
        animationType="fade"
        onRequestClose={() => setActiveBottle(null)}
        transparent
        visible={activeBottle !== null}>
        <View className="flex-1 items-center justify-center bg-black/70 px-6">
          <View className="w-full max-w-[340px] rounded-[28px] border border-red-400/20 bg-[#171b21] p-6 shadow-2xl">
            <Text className="text-2xl font-bold text-white">
              Hoeveel {activeBottle?.name}-flessen heb je nodig?
            </Text>
            <View className="my-7 flex-row items-center justify-center gap-6">
              <Pressable
                accessibilityRole="button"
                className="h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5"
                onPress={() => changeCount(-1)}>
                <Text className="text-2xl text-white">-</Text>
              </Pressable>
              <Text className="text-4xl font-bold text-red-300">{count}</Text>
              <Pressable
                accessibilityRole="button"
                className="h-12 w-12 items-center justify-center rounded-full bg-red-400"
                onPress={() => changeCount(1)}>
                <Text className="text-2xl text-slate-950">+</Text>
              </Pressable>
            </View>
            <Pressable
              className="h-14 items-center justify-center rounded-2xl bg-red-400"
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
