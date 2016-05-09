require "rails_helper"

RSpec.describe "POST /api/v1/ideas" do
  it "creates a new item" do
    payload = {idea: {title: "New Idea", body: "Super fun idea"}}
    post "/api/v1/ideas", payload

    parsed = JSON.parse(response.body)["idea"]
    expect(response.status).to eq 201
    expect(parsed["id"]).to be_truthy
    expect(parsed["title"]).to eq "New Idea"
    expect(parsed["short_body"]).to eq "Super fun idea"
    expect(parsed["created_at"]).to be_truthy
  end
end
