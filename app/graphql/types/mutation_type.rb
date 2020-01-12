module Types
  class MutationType < Types::BaseObject
    field :create_link, mutation: Mutations::CreateLink
  end
end
