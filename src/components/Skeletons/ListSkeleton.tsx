import { HStack, VStack } from '@chakra-ui/react';
import { List, ListItem } from '@chakra-ui/react';
import { Skeleton, SkeletonText } from '@chakra-ui/react';

function ListSkeleton() {
  return (
    <List width="full" spacing={8} py={16}>
      <ListItem>
        <HStack align="flex-start" spacing={4}>
          <Skeleton />

          <VStack align="flex-start" spacing={4}>
            <VStack align="flex-start">
              <Skeleton />

              <Skeleton />
            </VStack>

            <VStack align="flex-start" spacing={4}>
              <SkeletonText noOfLines={[2, 3]} />

              <Skeleton />
            </VStack>
          </VStack>
        </HStack>
      </ListItem>
    </List>
  );
}

export default ListSkeleton;
