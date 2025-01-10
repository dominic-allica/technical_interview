import { AllicaLogo } from '@/components/ui/allica-logo';
import { Box, Flex, FlexProps } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

const styles = {
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  } as FlexProps,
};

export const Logo = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <Flex {...styles.root}>
      <Box data-testid="allica-logo" onClick={handleNavigate}>
        <AllicaLogo w={'220px'} h={'29px'} />
      </Box>
    </Flex>
  );
};
