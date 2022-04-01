class CreatePlants < ActiveRecord::Migration[7.0]
  def change
    create_table :plants do |t|
      t.string :common_name
      t.string :botanical_name
      t.text :light_level
      t.integer :water_needs
      t.text :description
      t.text :special_notes
      t.string :flower_color

      t.timestamps
    end
  end
end
