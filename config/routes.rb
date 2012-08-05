Hbprint::Application.routes.draw do
    
    root :to => 'pages#home'
    
  
    match '/sample_work', :to => 'pages#sample_work'
    
end
