Rails.application.routes.draw do
  resources :users
  resources :carts
  resources :plants
  
  get '/hello', to: 'application#hello_world'
  
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
