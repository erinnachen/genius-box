require 'rails_helper'

RSpec.describe Idea, type: :model do
  it { should validate_presence_of :title }
  it { should validate_presence_of :body }
  it { should define_enum_for(:quality).with([:meh, :plausible, :genius]) }

  it "should by default have value of meh" do
    idea = Idea.new(title: "New idea", body: "Another thought")
    expect(idea.quality).to eq "meh"
  end

  xit "should return ideas sorted by newly created" do

  end
end
