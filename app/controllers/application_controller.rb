class ApplicationController < ActionController::API
  include ActionController::Cookies


    def current_user
      #User.find_by(id: session[:user_id])     #currently a mocked version of 'being logged in'
      User.first
    end

    def logged_in?
      !!current_user
    end


end
