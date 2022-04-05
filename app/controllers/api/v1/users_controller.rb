class Api::V1::UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]

    def index
        @users = User.all

        render json: UserSerializer.new(@users)
    end

    def show
        render json: UserSerializer.new(@user, include: ['cart', 'cart.cart_items'])
    end

    def create
        @user = User.new(user_params)

        if @user.save
            @new_cart = @user.cart.build(user_id: @user.id)
            @new_cart.save
            render json: @user, status: :created, location: @user
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end

    def update
        if @user.update(user_params)
            render json: @user
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @user.destroy
    end

    private

    def set_user
        @user = User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:name, :username, :password)
    end
end
