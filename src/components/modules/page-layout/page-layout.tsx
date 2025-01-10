import { GridItem, SimpleGrid } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  const layoutProps = {
    mx: { base: '16px', sm: '48px', md: '80px', lg: '96px', xl: 'auto' },
    maxW: { base: 'none', xl: '1128px' },
  };
  return (
    <SimpleGrid
      columns={{ base: 4, sm: 8, lg: 12 }}
      // spacing={{ base: '16px', md: '24px' }}
      {...layoutProps}
    >
      <GridItem colStart={{ base: 0 }} colSpan={{ base: 12, md: 5, lg: 8 }}>
        {children}
      </GridItem>
    </SimpleGrid>
  );
};
