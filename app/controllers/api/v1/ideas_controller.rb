class Api::V1::IdeasController < Api::V1::BaseController
  respond_to :json

  def index
    respond_with :api, :v1, Idea.all
  end

  def create
    respond_with :api, :v1, Idea.create(idea_params), location: nil
  end

  def destroy
    respond_with :nothing, status: 204 if Idea.delete(params[:id])
  end

  def update
    respond_with :api, :v1, Idea.update(params[:id], idea_params)
  end

  private

    def idea_params
      params[:idea][:quality]= params[:idea][:quality].to_i if params[:idea][:quality]
      params.require(:idea).permit(:title, :body, :quality)
    end
end
