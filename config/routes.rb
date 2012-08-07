Hbprint::Application.routes.draw do
    
    root :to => 'pages#home'
    match '/categories', :to => 'pages#categories'
    match '/mens', :to => 'pages#mens'
    match '/sample_work', :to => 'pages#sample_work'
    
end
