/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLeaveMessageData = /* GraphQL */ `
  query GetLeaveMessageData($id: ID!) {
    getLeaveMessageData(id: $id) {
      id
      Field0
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listLeaveMessageData = /* GraphQL */ `
  query ListLeaveMessageData(
    $filter: ModelLeaveMessageDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeaveMessageData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Field0
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
