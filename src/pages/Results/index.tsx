import { Flex, Heading } from '@chakra-ui/react';

function Results() {
  return (
    <Flex h="100vh" direction="column" align="center" as="form">
      <Heading as="h1" fontSize={['4rem', '6rem']} isTruncated>
        Results
      </Heading>
    </Flex>
  );
}

export default Results;
