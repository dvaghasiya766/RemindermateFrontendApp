import { StatusBar, StyleSheet, View } from 'react-native';
import Navigation from './src/Navigations/Navigation';

function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Navigation />
    </>
  );
}

export default App;
