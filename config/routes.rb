Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users do
        resources :carts, only: [:new, :show, :update] do 
          resources :cart_items
        end
      end
      resources :plants
      
    end
  end
  
  get '/hello', to: 'application#hello_world'
  
  #get '*path',
  #    to: 'fallback#index',
  #    constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
