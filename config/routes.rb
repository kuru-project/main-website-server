Rails.application.routes.draw do
  post "/data", to: "graphql#execute"
  mount_devise_token_auth_for 'User', at: 'auth'
  root to: redirect("https://web.kuru-anime.com/")
end
