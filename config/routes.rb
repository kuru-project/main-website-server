Rails.application.routes.draw do
  # Base Redirect
  root to: redirect("https://web.kuru-anime.com/")

  # Authentication
  mount_devise_token_auth_for 'User', at: 'auth'

  # Data Management (GraphQL)
  post "/data", to: "graphql#execute"
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/data"
  end
end
