import { FlexProps } from '@chakra-ui/react';

export const styles = {
  root: {
    flexDir: 'row',
    backgroundColor: 'blue.900',
    pt: '21px',
    pb: '21px',
    m: '0 auto',
    position: 'sticky',
    top: 0,
    zIndex: 'sticky',
    width: '100%',
  } as FlexProps,
  desktopRoot: {
    pl: '30px',
    pr: '30px',
  } as FlexProps,
  mobileRoot: {
    pl: '16px',
    pr: '16px',
  } as FlexProps,
};
