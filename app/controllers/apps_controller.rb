class AppsController < ApplicationController
    def index
        render json: Apps.all
    end
end