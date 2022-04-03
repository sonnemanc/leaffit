class PlantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :common_name, :botanical_name, :light_level, :water_needs, :description, :special_notes, :flower_color
end
