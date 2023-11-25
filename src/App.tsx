import { ReactNode, Suspense } from 'react';

function App({ children }: { children: ReactNode }) {
  return <Suspense fallback={<>Loading</>}>{children}</Suspense>;
}

export default App;
