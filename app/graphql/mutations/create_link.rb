module Mutations
  class CreateLink < BaseMutation
    # arguments passed to the `resolved` method
    argument :description, String, required: true
    argument :url, String, required: true

    # return type from the mutation
    type Types::LinkType

    def resolve(description: nil, url: nil)
      Link.create!(
        description: description,
        url: url,
      )
    end
  end
end
