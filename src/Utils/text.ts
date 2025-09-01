import { Colors } from './Colors';
import { Fonts } from './Fonts';
import { font } from './Responsive';

export const text = (
  size = 3.5,
  color = Colors.black,
  fontFamily = Fonts.regular,
) => {
  return {
    includeFontPadding: false,
    fontSize: (size && font(size)) || font(3.5),
    color,
    fontFamily,
  };
};
