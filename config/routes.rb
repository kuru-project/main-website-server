Rails.application.routes.draw do
  use_doorkeeper
  devise_for :users
  root to: redirect("https://web.kuru-anime.com/")
end
