class CartItem < ApplicationRecord
    belongs_to :plant
    belongs_to :cart
end
