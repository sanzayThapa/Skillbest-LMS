// src/components/ReduxProvider.tsx
'use client'; // This marks it as a Client Component

import store from '@/core/redux/store';
import { Provider } from 'react-redux';// Adjust path if needed

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}