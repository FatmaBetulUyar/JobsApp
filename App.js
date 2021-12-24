import React from 'react';
import FavoriteProvider from './src/context/FavoriteProvider/FavoriteProvider';
import AppContainer from './src/navigations/AppNavigation';

export default function App() {
  return (
    <FavoriteProvider>
     <AppContainer />
     </FavoriteProvider>
  );
}
