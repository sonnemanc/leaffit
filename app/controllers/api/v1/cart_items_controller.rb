class Api::V1::CartItemsController < ApplicationController

    def create
        @user = User.find_by(id: session[:user_id])
        user_cart = @user.cart
        item = CartItem.new(cart_item_params)
        item.save
        render json: CartSerializer.new(user_cart, include: [:cart_items])
    end

    def update

    end

    def destroy

    end

    private

    def cart_item_params
        params.require(:cart_item).permit(:quantity, :plant_id, :cart_id)
    end

end
