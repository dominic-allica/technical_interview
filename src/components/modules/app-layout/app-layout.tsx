import { FC, PropsWithChildren } from 'react';
import { styles } from './app-layout.styles';
import { Box } from '@chakra-ui/react';
import { Header } from '../header/header';
import { Outlet } from 'react-router';

export const AppLayoutRoute = () => (
  <AppLayout>
    <Outlet />
  </AppLayout>
);

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Box {...styles.minViewport}>
        <Header />
        <Box {...styles.remainingViewportContainer}>{children}</Box>

        {/* <Footer /> */}
      </Box>
    </div>
  );
};
