require "rails_helper"

RSpec.describe "PATCH /api/v1/ideas/:id/upvote" do
  it "upvotes an item" do
    idea = create(:idea)

    patch "/api/v1/ideas/#{idea.id}/upvote"

    expect(response.status).to eq 204
  end
end
