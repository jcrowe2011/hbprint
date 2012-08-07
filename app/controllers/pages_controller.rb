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
  def mens
    @title = "mens"
    render :layout => 'white_body'
  end
  def categories
    @title = "categories"
    render :layout => 'white_body'
  end
end
