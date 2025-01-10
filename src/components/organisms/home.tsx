import { useQueryLaunches } from '@/api/use-get-launches';
import { LoadingSkeleton } from '../modules/loading-skeleton';
import { Box, Card, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

export const Home = () => {
  const { data, isError, isFetching } = useQueryLaunches();
  const navigate = useNavigate();

  if (isFetching) {
    return <LoadingSkeleton />;
  }

  if (isError) {
    return <div>Error state</div>;
  }

  const handleNavigate = (id: string) => {
    navigate(`/details/${id}`);
  };

  return (
    <Flex flexDirection="row" flexWrap="wrap">
      {data?.docs.map((launch) => (
        <Box
          key={launch.id}
          p={2}
          w="50%"
          onClick={() => handleNavigate(launch.id)}
          cursor={'pointer'}
        >
          <Card.Root key={launch.id}>
            <Card.Header>
              Status: {launch.success ? 'Success' : 'Failure'}
            </Card.Header>
            <Card.Body>{launch.name}</Card.Body>

            <Card.Footer>{launch.date_utc}</Card.Footer>
          </Card.Root>
        </Box>
      ))}
    </Flex>
  );
};
