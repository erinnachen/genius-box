class Api::V1::IdeasController < Api::V1::BaseController
  respond_to :json

  def create
    respond_with :api, :v1, Idea.create(idea_params)
  end

  def destroy
    respond_with :nothing, status: 204 if Idea.delete(params[:id])
  end

  private

    def idea_params
      params.require(:idea).permit(:title, :body)
    end
end
