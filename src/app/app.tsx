import { Box } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Provider } from '@/components/ui/provider';
import { HomePage } from '@/components/pages/home-page/home-page';
import { AppLayoutRoute } from '@/components/modules/app-layout/app-layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DetailsPage } from '@/components/pages/details-page';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayoutRoute />}>
              <Route index element={<HomePage />} />
              <Route path="/details/:id" element={<DetailsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
