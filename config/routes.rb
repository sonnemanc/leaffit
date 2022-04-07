Rails.application.routes.draw do
  post "/api/v1/login", to: "api/v1/sessions#create"
  get "/api/v1/get_current_user", to: "api/v1/sessions#get_current_user"
  delete "/api/v1/logout", to: "api/v1/sessions#destroy"

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
