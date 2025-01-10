import { BoxProps } from '@chakra-ui/react';

export const styles = {
  minViewport: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  } as BoxProps,
  remainingViewportContainer: {
    flex: 1,
    position: 'relative',
  } as BoxProps,
};
