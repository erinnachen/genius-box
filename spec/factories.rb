FactoryGirl.define do
  factory :idea do
    title
    body
    quality 0
  end

  sequence :title do |n|
    "Genius idea #" + n.to_s
  end

  sequence :body do |n|
    'Details: '+ "#{n}"*100
  end
end
