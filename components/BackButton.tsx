import { Pressable, Text } from "react-native";

type BackButtonProps = {
  onPress: () => void;
};

export function BackButton({ onPress }: BackButtonProps) {
  return (
    <Pressable
      accessibilityLabel="Terug naar start"
      accessibilityRole="button"
      className="absolute left-5 top-14 z-50 h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 active:bg-white/10"
      onPress={onPress}
      style={{ elevation: 50, zIndex: 50 }}>
      <Text className="-mt-0.5 text-2xl font-light text-slate-300">‹</Text>
    </Pressable>
  );
}
