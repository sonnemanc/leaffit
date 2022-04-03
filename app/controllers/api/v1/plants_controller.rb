class Api::V1::PlantsController < ApplicationController

    def index
        @plants = Plant.all

        render json: PlantSerializer.new(@plants)
    end
end
