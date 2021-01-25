class CreateVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :videos do |t|
      t.string :video_type
      t.string :title
      t.text :summary
      t.string :country
      t.string :video_src
      t.date :release_date

      t.timestamps
    end
  end
end
