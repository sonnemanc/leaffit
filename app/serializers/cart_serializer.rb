class CartSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id
  has_many :cart_items
end
