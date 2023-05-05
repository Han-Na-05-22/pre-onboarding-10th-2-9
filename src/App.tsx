/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-constructed-context-values */

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import Main from './pages/Main';

export const CachingDataContext = createContext<any>(undefined);
export const CachingDataContextProvider = ({ children }: any) => {
  const [searchDataCaching, setSearchDataCaching] = useState<any[]>([]);

  const value = {
    searchDataCaching,
    setSearchDataCaching,
  };

  return <CachingDataContext.Provider value={value}>{children}</CachingDataContext.Provider>;
};

export const useCachingDataContext = () => {
  return useContext(CachingDataContext);
};

const App = () => {
  return (
    <div>
      <CachingDataContextProvider>
        <Main />
      </CachingDataContextProvider>
    </div>
  );
};

export default App;
