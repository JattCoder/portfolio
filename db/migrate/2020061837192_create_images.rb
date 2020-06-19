class CreateImages < ActiveRecord::Migration[6.0]
    def change
        create_table :images do |i|
            i.string :app_id
            i.string :url
        end
    end
end