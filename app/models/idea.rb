class Idea < ActiveRecord::Base
  validates :title, presence: true
  validates :body, presence: true

  enum quality: [:meh, :plausible, :genius]

  default_scope { order(created_at: :desc) }

  def short_body
    body[0..99]
  end

  def plus_one
    qint = Idea.qualities[quality]
    return qint+1 if qint < 2
    2
  end

  def minus_one
    qint = Idea.qualities[quality]
    return qint-1 if qint > 0
    0
  end
end
