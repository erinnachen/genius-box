require 'rails_helper'

RSpec.feature "user sees all ideas on root page" do
  scenario "sees all ideas, body limited to 100 characters, sorted by date" do
    ideas = []
    3.times { |n| ideas[n] = create(:idea, created_at: Date.new(2016, 05, 01+n), quality: n) }
    idea = ideas.last

    visit '/'

    within(".ideas") do
      expect(first(".idea")).to have_content idea.title
      expect(first(".idea")).to have_content idea.body[0...100]
      expect(first(".idea")).to_not have_content idea.body
      expect(first(".idea")).to have_content "genius"
    end
  end
end
