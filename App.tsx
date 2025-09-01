// import { StatusBar, useColorScheme, View } from 'react-native';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import Navigation from './src/Navigation/Navigation';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider style={{ flex: 1 }}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <SafeAreaView style={{ flex: 1 }}>
//         <Navigation />
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// }

// export default App;
import { StatusBar, Text, useColorScheme, View } from 'react-native';
import Navigation from './src/Navigations/Navigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { SignInScreen } from './src/Screens';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Navigation />
    </>
  );
}

export default App;
