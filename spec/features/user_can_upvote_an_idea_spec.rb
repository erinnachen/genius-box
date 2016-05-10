require 'rails_helper'

RSpec.feature "user can upvote an idea" do
  context "quality is less than 2" do
    scenario "quality goes up by one" do
      idea = create(:idea)
      visit '/'

      first(".upvote").click

      within(".idea") do
        expect(page).to have_content "plausible"
        expect(page).to_not have_content "meh"
      end

      first(".upvote").click

      within(".idea") do
        expect(page).to have_content "genius"
        expect(page).to_not have_content "plausible"
      end
    end
  end

end
