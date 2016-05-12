require 'rails_helper'

RSpec.describe "user can edit the title of an idea", type: :feature, js: true do
  scenario "sees title changed" do
    idea = create(:idea, title: "A")
    visit '/'

    # # first('.idea-title').click
    # # el = find(:xpath, "//div[@contenteditable='true']")
    # # el.set("New title")
    # # el.native.send_keys(:enter)
    # # wait_for_ajax
    #
    # page.execute_script('$(".idea-title").addClass("edit-title");
    #                      $(".edit-title")[0].innerHTML = "New title";
    #                      $(".edit-title").trigger("keydown",[13]);')

    el = find(:xpath, "//div[@contenteditable='true']")
    #page.execute_script('$(".idea-title").addClass("edit-title");')
    el.set("NEW TITLE")
    el.native.send_keys(:enter)
    wait_for_ajax

    within(".idea") do
      expect(page).to have_content("NEW TITLE")
    end

    # visit '/'
    # within(".idea") do
    #   expect(page).to have_content("NEW TITLE")
    #   expect(page).to_not have_content("A")
    # end
  end
end
