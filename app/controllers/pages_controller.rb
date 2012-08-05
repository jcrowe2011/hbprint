class PagesController < ApplicationController
  def home 
    @title = "Home"
  end
  def blog
    @blog =  "blog"
  end  
  def sample_work
    @title = "Sample Work"
  end
  def about_us
    @title = "about_us"
  end
  def contact_us
    @title = "contact_us"
  end
end
