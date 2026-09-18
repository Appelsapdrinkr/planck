import { Pressable, Text, View } from "react-native";

type FrigoButtonProps = {
  label: string;
  variant: "beer" | "cola";
  onPress?: () => void;
};

export function FrigoButton({ label, variant, onPress }: FrigoButtonProps) {
  const buttonStyles =
    variant === "beer"
      ? "border-amber-400/30 bg-amber-400/10 active:bg-amber-400/20"
      : "border-red-400/30 bg-red-400/10 active:bg-red-400/20";
  const accentColor = variant === "beer" ? "bg-amber-400" : "bg-red-400";
  const textColor = variant === "beer" ? "text-amber-100" : "text-red-100";

  return (
    <Pressable
      accessibilityRole="button"
      className={`h-[72px] w-full flex-row items-center rounded-2xl border px-5 shadow-lg ${buttonStyles}`}
      onPress={onPress}>
      <View className={`mr-4 h-3 w-3 rounded-full ${accentColor}`} />
      <Text className={`text-lg font-bold ${textColor}`}>{label}</Text>
      <Text className="ml-auto text-2xl font-light text-slate-500">›</Text>
    </Pressable>
  );
}
