declare module '#gql' {
  type GqlClients = 'default'
  type GqlOps = 'GetRecentPosts' | 'GetAllTags'
  const GqClientOps = {"default":["GetRecentPosts","GetAllTags"]}
}