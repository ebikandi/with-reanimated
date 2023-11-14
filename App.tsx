import { View } from "react-native";
import { AnimatedView } from "./components/1-FirstAnimation";

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AnimatedView />;
    </View>
  );
};

export default App;
