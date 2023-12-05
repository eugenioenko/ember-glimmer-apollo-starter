import { gql, useQuery } from "glimmer-apollo";
import type { UseQuery } from "glimmer-apollo";
import type { UserByIdQuery, UserByIdQueryVariables } from "graphqlzero-api";

export function useUserByIdQuery<
  T extends UseQuery<UserByIdQuery, UserByIdQueryVariables>
>(ctx: Object, args?: T["args"]): T["return"] {
  return useQuery(ctx, () => [
    gql`
      query UserById($id: ID!) {
        user(id: $id) {
          id
          name
        }
      }
    `,
    args ? args() : {},
  ]);
}
