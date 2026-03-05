import React, { createContext, useContext } from 'react';

// 1. Context(창고) 생성
const ApiContext = createContext();

// 2. Provider(창고 관리자) 컴포넌트 생성
export const ApiProvider = ({ children }) => {
  // Vite 환경에서 .env 파일의 변수를 불러오는 방법입니다.
  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  return (
    // 하위 컴포넌트들에게 WEATHER_API_KEY를 공유합니다.
    <ApiContext.Provider value={{ WEATHER_API_KEY }}>
      {children}
    </ApiContext.Provider>
  );
};

// 3. 쉽게 가져다 쓸 수 있도록 커스텀 훅 만들기
export const useApi = () => {
  return useContext(ApiContext);
};