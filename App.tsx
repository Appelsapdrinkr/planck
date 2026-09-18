import "./global.css";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect, useState } from "react";
import { BackHandler } from "react-native";
import { BeerFridgeScreen } from "./screens/BeerFridgeScreen";
import { ColaFridgeScreen } from "./screens/ColaFridgeScreen";
import { FridgeDetailScreen } from "./screens/FridgeDetailScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { SelectionScreen } from "./screens/SelectionScreen";

type Screen =
  "home" | "beer" | "cola" | "selection" | `fridge-${1 | 2 | 3 | 4 | 5}`;

export default function App() {
  const [history, setHistory] = useState<Screen[]>(["home"]);
  const screen = history[history.length - 1];

  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden").catch(() => undefined);

    return () => {
      NavigationBar.setVisibilityAsync("visible").catch(() => undefined);
    };
  }, []);

  const navigate = (nextScreen: Screen) => {
    setHistory((currentHistory) => [...currentHistory, nextScreen]);
  };

  const goBack = () => {
    setHistory((currentHistory) =>
      currentHistory.length > 1 ? currentHistory.slice(0, -1) : currentHistory,
    );
  };

  useEffect(() => {
    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (history.length <= 1) {
          return false;
        }

        goBack();
        return true;
      },
    );

    return () => subscription.remove();
  }, [history.length]);

  if (screen === "home") {
    return <HomeScreen onNavigate={navigate} />;
  }

  if (screen === "beer") {
    return <BeerFridgeScreen onNavigate={navigate} onBack={goBack} />;
  }

  if (screen === "cola") {
    return <ColaFridgeScreen onBack={goBack} />;
  }

  if (screen === "selection") {
    return <SelectionScreen onBack={goBack} />;
  }

  const fridgeNumber = Number(screen.replace("fridge-", "")) as
    1 | 2 | 3 | 4 | 5;

  return <FridgeDetailScreen number={fridgeNumber} onBack={goBack} />;
}
