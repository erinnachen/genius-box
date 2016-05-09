require "rails_helper"

RSpec.feature "User can add a new idea" do
  scenario "sees newly saved idea at top of page" do
    body = "Ideas really need to be more than 100 chracters. I think that will allow for really crazy brainstorms such as happy bunnies, sharp teeth, etc."

    visit '/'

    fill_in "Title", with: "Another genius idea"
    fill_in "Body", with: body

    click_on "Save it!"

    within(".ideas") do
      expect(first("li")).to have_content "Another genius idea"
      expect(first("li")).to have_content body[0..99]
      expect(first("li")).to_not have_content body
      expect(first("li")).to have_content "meh idea"
    end
  end
end
