export const Colors = {
  // Primary colors
  primary: '#3b82f6',
  primaryLight: '#89b5fcff',
  primaryDark: '#FF8833',

  // Accent colors
  accent: '#ecbd00',
  accentLight: '#f9ebb2',

  // Background & Surface
  blueBackground: '#e9f0ffff',
  greenBackground: '#e9ffecff',
  accentBackground: '#fffce9ff',
  orangeBackground: '#fff5e9ff',
  cardBlueBackground: '#f9f9faff',

  // Text colors
  textPrimary: '#000000',
  textSecondary: '#333333',

  // Semantic colors
  success: '#00D166',
  info: '#009AFF',
  warning: '#FFBB00',
  danger: '#FF3B30',

  // Neutral colors
  white: '#FFFFFF',
  gray100: '#D0D0D0',
  gray200: '#A0A0A0',
  gray300: '#808080',
  gray400: '#606060',
  gray500: '#404040',
  gray600: '#303030',
  gray700: '#202020',
  gray800: '#101010',
  gray900: '#080808',
  black: '#000000',

  // Overlays
  overlayBlack10: 'rgba(255, 255, 255, 0.1)',
  overlayBlack20: 'rgba(255, 255, 255, 0.2)',
  overlayBlack30: 'rgba(255, 255, 255, 0.3)',
  overlayBlack40: 'rgba(255, 255, 255, 0.4)',
  overlayBlack50: 'rgba(255, 255, 255, 0.5)',
  overlayBlack60: 'rgba(0, 0, 0, 0.6)',

  // Additional colors
  error: '#FF3B30',
  green: '#00D166',
  grey: '#707070',
  lightGrey: '#909090',
  pending: '#FFBB00',
  confirmed: '#00D166',
  cancelled: '#FF3B30',
  delivered: '#00D166',
  orange: '#FF8000',
  red: '#FF3B30',

  // Gradient colors for better organization
  gradientGreen: '#4CAF50',
  gradientGreenDark: '#45A049',
  gradientBlue: '#2196F3',
  gradientBlueDark: '#1976D2',
  gradientPink: '#c17388',
  gradientPinkDark: '#C2185B',
  gradientRed: '#F44336',
  gradientRedDark: '#D32F2F',
  gradientOrange: '#FF9800',
  gradientOrangeDark: '#F57C00',
  gradientGray: '#9E9E9E',
  gradientGrayDark: '#757575',
  gradientPurple: '#9C27B0', // medium purple
  gradientPurpleDark: '#6A1B9A', // deep purple
};

export const gradientColors = [
  Colors.primary,
  Colors.primaryDark,
  Colors.primaryLight,
];

// Status gradient colors for AgencyItem
export type GradientTuple = (string | number)[];
export const statusGradients: Record<
  | 'active'
  | 'inactive'
  | 'pending'
  | 'default'
  | 'primary'
  | 'FollowUp'
  | 'Reciver',
  GradientTuple
> = {
  active: [Colors.gradientGreen, Colors.gradientGreenDark],
  inactive: [Colors.gradientRed, Colors.gradientRedDark],
  pending: [Colors.gradientOrange, Colors.gradientOrangeDark],
  default: [Colors.gradientGray, Colors.gradientGrayDark],
  FollowUp: [Colors.gradientPink, Colors.gradientPinkDark],
  Reciver: [Colors.gradientPurple, Colors.gradientPurpleDark],
  primary: ['#60a5fa', '#a78bfa', '#e2e8f0'],
};

// Stat bubble gradient colors
export const statGradients = {
  total: [Colors.gradientGreen, Colors.gradientGreenDark],
  male: [Colors.gradientBlue, Colors.gradientBlueDark],
  female: [Colors.gradientPink, Colors.gradientPinkDark],
  proof: [Colors.primary, Colors.primaryDark],
};
