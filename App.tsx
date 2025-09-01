import { StatusBar } from 'react-native';
import Navigation from './src/Navigations/Navigation';

function App() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Navigation />
    </>
  );
}

export default App;
