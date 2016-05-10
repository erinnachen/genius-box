class Api::V1::IdeasController < Api::V1::BaseController
  respond_to :json

  def create
    respond_with :api, :v1, Idea.create(idea_params)
  end

  def show
    respond_with :api, :v1, Idea.find(params[:id])
  end

  def destroy
    respond_with :nothing, status: 204 if Idea.delete(params[:id])
  end

  def update
    respond_with :api, :v1, Idea.update(params[:id], idea_params)
  end

  def upvote
    @idea = Idea.find(params[:id])
    respond_with :api, :v1, @idea.update(quality: @idea.plus_one)
  end

  def downvote
    @idea = Idea.find(params[:id])
    respond_with :api, :v1, @idea.update(quality: @idea.minus_one)
  end


  private

    def idea_params
      params.require(:idea).permit(:title, :body)
    end
end
