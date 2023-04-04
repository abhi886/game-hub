import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";
import { CardBody } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width='300px' borderRadius={"10px"} overflow='hidden'>
      <Skeleton height='200px'>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkeleton;
