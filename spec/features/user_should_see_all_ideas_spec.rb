require 'rails_helper'

RSpec.feature "user sees all ideas on root page" do
  scenario "sees all ideas, body limited to 100 characters, sorted by date" do
    3.times { |n| create(:idea, created_at: Date.new(2016, 05, 01+n), quality: n) }
    idea = Idea.last

    visit '/'

    within(".items") do
      expect(first("li")).to have_content idea.title
      expect(first("li")).to have_content idea.body
      expect(first("li")).to have_content "genius"
    end
  end
end
