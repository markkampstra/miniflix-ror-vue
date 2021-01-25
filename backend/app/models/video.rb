class Video < ApplicationRecord
  validates :title, :summary, presence: true
end
