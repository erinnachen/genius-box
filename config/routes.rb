Rails.application.routes.draw do
  root to: "ideas#index"

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :ideas, only: [:create, :show, :update, :destroy] do
        member do
          patch "upvote"
          patch "downvote"
        end
      end
    end
  end
end
