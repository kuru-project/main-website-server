Rails.application.routes.draw do
  # Base Redirect
  root to: redirect("https://web.kuru-anime.com/")

  # Data Management (GraphQL)
  post "/data", to: "graphql#execute"
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/data"
  end
end
