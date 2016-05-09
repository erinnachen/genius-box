require "rails_helper"

RSpec.describe "DELETE /api/v1/ideas/:id" do
  it "deletes an item" do
    idea = create(:idea)

    delete "/api/v1/ideas/#{idea.id}"

    expect(response.status).to eq 204
  end
end
