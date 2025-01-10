import { Box, Flex, Heading } from '@chakra-ui/react';
import { PageLayout } from '../../modules/page-layout/page-layout';
import { Home } from '../../organisms/home';

export const HomePage = () => {
  return (
    <Box mt={{ base: '48px', md: '64px' }}>
      <PageLayout>
        <Flex
          flexDir={'column'}
          justifyContent={'space-between'}
          w={'100%'}
          mb={{ base: '34px', md: '40px' }}
        >
          <Heading size="3xl">Launches</Heading>
          <Home />
        </Flex>
      </PageLayout>
    </Box>
  );
};
