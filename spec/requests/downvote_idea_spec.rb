require "rails_helper"

RSpec.describe "PATCH /api/v1/ideas/:id/downvote" do
  it "downvotes an idea" do
    idea = create(:idea)

    patch "/api/v1/ideas/#{idea.id}/downvote"

    expect(response.status).to eq 204
  end
end
