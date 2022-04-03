class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :username
  has_one :cart
end
