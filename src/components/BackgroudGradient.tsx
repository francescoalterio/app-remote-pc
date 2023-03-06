import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../config/colors";

interface Props {
  children: React.ReactElement;
}

export function BackgroundGradient({ children }: Props) {
  return (
    <LinearGradient
      colors={[COLORS.backgroundGradientLight, COLORS.backgroundGradientDark]}
      start={{ x: 0, y: 0 }}
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
}
