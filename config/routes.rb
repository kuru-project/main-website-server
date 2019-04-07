Rails.application.routes.draw do
  get '/', to: redirect('http://kuru-anime.com/')
end
