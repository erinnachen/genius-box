require 'rails_helper'

RSpec.describe Idea, type: :model do
  it { should validate_presence_of :title }
  it { should validate_presence_of :body }
  it { should define_enum_for(:quality).with([:meh, :plausible, :genius]) }

  it "should by default have value of meh" do
    idea = Idea.new(title: "New idea", body: "Another thought")
    expect(idea.quality).to eq "meh"
  end

  it "should return ideas sorted by newly created" do
    idea1 = create(:idea, created_at: Date.new(2015, 01, 03))
    idea2 = create(:idea, created_at: Date.new(2016, 04, 18))
    ideas = Idea.all

    expect(ideas.first).to eq idea2
  end

  it "should have a shortened body of 100 characters or less" do
    idea = Idea.new(title: "New idea", body: "*"*125)
    expect(idea.short_body).to eq "*"*100
  end
end
