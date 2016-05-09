require "rails_helper"

RSpec.feature "User can add a new idea", js:true do
  scenario "sees newly saved idea at top of page" do
    body = "Ideas really need to be more than 100 chracters. I think that will allow for really crazy brainstorms such as happy bunnies, sharp teeth, etc."

    visit '/'

    fill_in "Title", with: "Another genius idea"
    fill_in "Body", with: body

    click_on "Save it!"
    sleep 1

    within(".ideas") do
      expect(first(".idea")).to have_content "Another genius idea"
      expect(first(".idea")).to have_content body[0..99]
      expect(first(".idea")).to_not have_content body
      expect(first(".idea")).to have_content "meh idea"
    end

    within(".new-idea") do
      expect('#idea_title').to_not have_content "Another genius idea"
      expect('#idea_body').to_not have_content body
    end

    visit '/'
    within(".ideas") do
      expect(first(".idea")).to have_content "Another genius idea"
    end
  end
end
