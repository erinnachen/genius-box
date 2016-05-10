require 'rails_helper'

RSpec.feature "user can downvote an idea", js: true do
  context "quality is not 0" do
    scenario "quality goes down by one" do
      idea = create(:idea, quality: 2)
      visit '/'

      first(".downvote").click
      sleep 1

      within(".idea") do
        expect(page).to have_content "plausible"
        expect(page).to_not have_content "genius"
      end

      first(".downvote").click
      sleep 1

      within(".idea") do
        expect(page).to have_content "meh"
        expect(page).to_not have_content "plausible"
      end
    end
  end

  context "quality is 0" do
    scenario "quality stays at 0" do
      idea = create(:idea)
      visit '/'

      first(".downvote").click
      sleep 1

      within(".idea") do
        expect(page).to have_content "meh"
      end
    end
  end

end
