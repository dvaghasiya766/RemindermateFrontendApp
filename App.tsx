import { StatusBar, StyleSheet, View } from 'react-native';
import Navigation from './src/Navigations/Navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/Store/Store';
import AppLoader from './src/Components/UI/Loader';
import Loader from './src/Utils/AppLoader';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle={'light-content'} />
          <Navigation />
          <AppLoader ref={e => Loader.setLoader(e)} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
