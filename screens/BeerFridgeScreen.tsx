import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { BackButton } from "../components/BackButton";
import { FrigoButton } from "../components/FrigoButton";

type BeerFridgeScreenProps = {
  onNavigate: (screen: `fridge-${1 | 2 | 3 | 4 | 5}` | "home") => void;
  onBack: () => void;
};

export function BeerFridgeScreen({
  onNavigate,
  onBack,
}: BeerFridgeScreenProps) {
  return (
    <View className="flex-1 justify-center bg-[#090b0e] px-5">
      <BackButton onPress={onBack} />
      <View className="mb-5 flex-row items-center">
        <View className="mr-3 h-2.5 w-2.5 rounded-full bg-amber-400" />
        <Text className="text-xs font-bold uppercase tracking-[4px] text-amber-300">
          Bier frigo's
        </Text>
      </View>
      <View className="rounded-[28px] border border-white/10 bg-[#11151a] p-6 shadow-2xl">
        <Text className="text-3xl font-bold text-white">Kies een frigo</Text>
        <Text className="mb-7 mt-2 text-base text-slate-400">
          Selecteer een van de vijf koelkasten.
        </Text>
        <View className="gap-3">
          {[1, 2, 3, 4, 5].map((number) => (
            <FrigoButton
              key={number}
              label={`Fridge ${number}`}
              variant="beer"
              onPress={() =>
                onNavigate(`fridge-${number as 1 | 2 | 3 | 4 | 5}`)
              }
            />
          ))}
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
