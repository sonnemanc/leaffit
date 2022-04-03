class Api::V1::CartsController < ApplicationController
    before_action :set_cart

    def show
        user_cart = current_user.cart
        #cart_items = user_cart.cart_items
        render json: CartSerializer.new(user_cart, include: [:cart_items])
    end

    def update

    end

    private

    def set_cart
        @cart = Cart.find(params[:id])
    end

end
