import { useQueryLaunches } from '@/api/use-get-launches';
import { LoadingSkeleton } from '../modules/loading-skeleton';
import { Box, Card, Flex } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router';
import { useGetLaunch } from '@/api/use-get-lauch';

export const Details = () => {
  const params = useParams();
  const {
    data: launch,
    isError,
    isPending,
  } = useGetLaunch({ id: params.id || '' });
  const navigate = useNavigate();

  if (isPending) {
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
    </Flex>
  );
};
