require 'rails_helper'

RSpec.describe Video, type: :model do
  subject {
    described_class.new(title: 'A title',
                        summary: 'A summary',
                        country: 'NL',
                        video_src: 'http://some-url',
                        release_date: Date.new(2021, 1, 25))
  }

  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  it "is not valid without a title" do
    subject.title = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a description" do
    subject.summary = nil
    expect(subject).to_not be_valid
  end
end
