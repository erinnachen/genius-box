class Idea < ActiveRecord::Base
  validates :title, presence: true
  validates :body, presence: true

  enum quality: [:meh, :plausible, :genius]

  default_scope { order(created_at: :desc) }

  def short_body
    body[0..99]
  end
end
