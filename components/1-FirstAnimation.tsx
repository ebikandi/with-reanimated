import { Button, Easing, View } from "react-native";
import Animated, {
  ReduceMotion,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

export const AnimatedView = () => {
  const width = useSharedValue<number>(100);
  const onButtonPress = () => {
    // width.value = withSpring(width.value + 50);
    width.value = withSequence(
      withTiming(width.value + 45, {
        duration: 500,
        easing: Easing.in(Easing.quad),
        reduceMotion: ReduceMotion.System,
      }),
      withSpring(width.value + 50)
    );
  };

  return (
    <View
      style={{
        alignItems: "center",
        gap: 10,
      }}
    >
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: "violet",
          borderRadius: 25,
        }}
      />
      <Button title="Click me!" onPress={onButtonPress} />
    </View>
  );
};
