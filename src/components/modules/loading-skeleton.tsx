import { HStack, Skeleton, Stack } from '@chakra-ui/react';
import { SkeletonCircle, SkeletonText } from '../ui/skeleton';

export const LoadingSkeleton = () => {
  return (
    <Stack gap="6" maxW="xs" data-testid="loading-skeleton">
      <HStack width="full">
        <SkeletonText noOfLines={4} />
      </HStack>
    </Stack>
  );
};
