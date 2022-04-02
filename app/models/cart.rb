class Cart < ApplicationRecord
    has_many :cart_items
    has_many :plants, through: :cart_items
end
