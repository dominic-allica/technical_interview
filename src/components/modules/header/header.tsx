import { Flex } from '@chakra-ui/react';
import { styles } from './header.styles';
import { FC, PropsWithChildren } from 'react';
import { Logo } from '../logo/logo';

export const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex {...{ ...styles.root, ...styles.desktopRoot }}>
      <MainContext>{children}</MainContext>
    </Flex>
  );
};

const MainContext: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex>
      <Logo />
      {children}
    </Flex>
  );
};
