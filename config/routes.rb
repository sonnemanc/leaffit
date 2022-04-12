Rails.application.routes.draw do
  post "/api/v1/login", to: "api/v1/sessions#create"
  get "/api/v1/get_current_user", to: "api/v1/sessions#get_current_user"
  delete "/api/v1/logout", to: "api/v1/sessions#destroy"
  post "/api/v1/cart_items", to: "api/v1/cart_items#create"
  #delete "/api/v1/cart_items", to: "api/v1/cart_items#destroy"

  namespace :api do
    namespace :v1 do
      resources :users do
        resources :carts do 
          resources :cart_items, only: [:index, :show, :update, :new]
        end
      end
      resources :plants, only: [:index]
      resources :cart_items, only: [:destroy]
      
    end
  end
  
  #get '*path',
  #    to: 'fallback#index',
  #    constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
