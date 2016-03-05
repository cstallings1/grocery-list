class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.boolean :complete, default: false

      t.timestamps null: false
    end
  end
end
