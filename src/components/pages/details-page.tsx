import { Box, Flex, Heading } from '@chakra-ui/react';
import { PageLayout } from '../modules/page-layout/page-layout';
import { Details } from '../organisms/details';

export const DetailsPage = () => {
  return (
    <Box mt={{ base: '48px', md: '64px' }}>
      <PageLayout>
        <Flex
          flexDir={'column'}
          justifyContent={'space-between'}
          w={'100%'}
          mb={{ base: '34px', md: '40px' }}
        >
          <Heading size="3xl">Launch Details</Heading>
          <Details />
        </Flex>
      </PageLayout>
    </Box>
  );
};
