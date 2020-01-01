Rails.application.routes.draw do
  devise_for :users
  root to: redirect("https://web.kuru-anime.com/")
end
