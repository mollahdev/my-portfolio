declare module '#gql' {
  type GqlClients = 'default'
  type GqlOps = 'GetQueryPosts' | 'GetSinglePost' | 'GetAllTags'
  const GqClientOps = {"default":["GetQueryPosts","GetSinglePost","GetAllTags"]}
}