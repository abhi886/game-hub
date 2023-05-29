import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";
import { CardBody } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton>
        <CardBody>
          <SkeletonText
            mt='4'
            noOfLines={4}
            spacing='4'
            skeletonHeight='12'
            width='300px'
          />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkeleton;
