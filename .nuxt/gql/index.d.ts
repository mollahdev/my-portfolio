declare module '#gql' {
  type GqlClients = 'default'
  type GqlOps = 'GetRecentPosts' | 'GetQueryPosts' | 'GetAllTags'
  const GqClientOps = {"default":["GetRecentPosts","GetQueryPosts","GetAllTags"]}
}