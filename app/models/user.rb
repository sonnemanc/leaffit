class User < ApplicationRecord
    has_one :cart
    has_many :plants, through: :cart
end
