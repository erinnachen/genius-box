class IdeaSerializer < ActiveModel::Serializer
  attributes :id, :title, :short_body, :created_at, :quality

  def short_body
    object.body[0..99]
  end
end
