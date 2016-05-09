require "rails_helper"

RSpec.feature "User can delete an idea", js:true do
  scenario "no longer sees idea on page" do
    ideas = []
    2.times { |n| ideas[n] = create(:idea, created_at: Date.new(2016, 05, 01+n), quality: n) }

    visit '/'

    within(".ideas") do
     expect(page).to have_selector('.delete', count: 2)
    end

    first(".delete").click
    sleep 1

    within(".ideas") do
     expect(page).to have_selector('.delete', count: 1)
     expect(page).to have_selector('.idea', count: 1)
     expect(page).to have_content ideas.first.title
     expect(page).to have_content ideas.first.short_body
     expect(page).to_not have_content ideas.last.title
     expect(page).to_not have_content ideas.last.short_body
    end

    visit '/'
    within(".ideas") do
     expect(page).to have_selector('.delete', count: 1)
     expect(page).to have_selector('.idea', count: 1)
     expect(page).to have_content ideas.first.title
     expect(page).to have_content ideas.first.short_body
     expect(page).to_not have_content ideas.last.title
     expect(page).to_not have_content ideas.last.short_body
    end
  end
end
