class CreateCartItems < ActiveRecord::Migration[7.0]
  def change
    create_table :cart_items do |t|
      t.integer :quantity, default: 1
      t.integer :plant_id
      t.integer :cart_id

      t.timestamps
    end
  end
end
