declare module '#gql' {
  type GqlClients = 'default'
  type GqlOps = 'GetPosts' | 'GetAllTags' | 'GetRecentPosts'
  const GqClientOps = {"default":["GetPosts","GetAllTags","GetRecentPosts"]}
}