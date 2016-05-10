Rails.application.routes.draw do
  root to: "ideas#index"

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :ideas, only: [:create, :show, :destroy] do
        member do
          patch "upvote"
        end
      end
    end
  end
end
