class Item < ActiveRecord::Base
  validates :item, uniqueness: true
end
