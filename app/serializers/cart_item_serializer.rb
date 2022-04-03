class CartItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :quantity, :plant_id, :cart_id
end
