import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { FrigoButton } from "../components/FrigoButton";

type HomeScreenProps = {
  onNavigate: (screen: "beer" | "cola" | "selection") => void;
};

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <View className="flex-1 justify-center bg-[#090b0e] px-5">
      <View className="mb-5 flex-row items-center">
        <View className="mr-3 h-2.5 w-2.5 rounded-full bg-cyan-300" />
        <Text className="text-xs font-bold uppercase tracking-[4px] text-cyan-300">
          Frigo control
        </Text>
      </View>
      <View className="rounded-[28px] border border-white/10 bg-[#11151a] p-6 shadow-2xl">
        <Text className="text-4xl font-bold tracking-tight text-white">
          Kies je drankje
        </Text>
        <Text className="mb-8 mt-3 text-base leading-6 text-slate-400">
          Selecteer een koelkast om verder te gaan.
        </Text>
        <View className="gap-3">
          <FrigoButton
            label="Bier frigo's"
            variant="beer"
            onPress={() => onNavigate("beer")}
          />
          <FrigoButton
            label="Cola frigo"
            variant="cola"
            onPress={() => onNavigate("cola")}
          />
          <FrigoButton
            label="Geselecteerde flessen"
            variant="beer"
            onPress={() => onNavigate("selection")}
          />
        </View>
      </View>
      <Text className="mt-5 text-center text-xs uppercase tracking-[2px] text-slate-600">
        Kies een optie
      </Text>
      <StatusBar style="light" />
    </View>
  );
}
