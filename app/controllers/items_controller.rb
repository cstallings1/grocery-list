class ItemsController < ApplicationController
  respond_to :json, :html

  def index
  end

  def create
    @list = List.find_or_create_by(id: item_params[:list_id])
    item = @list.items.new(item_params)
    if item.save
      respond_to do |format|
        format.json  { render :json => @list.to_json(:include => [:items])}
      end
    end
  end

  def destroy
    @list = List.find(item_params[:list_id])
    item = Item.find(params[:id])
    item.destroy
    flash[:notice] = "Your item has been deleted."
    if request.xhr?
      respond_to do |format|
        format.json  { render :json => @list.to_json(:include => [:items])}
      end
    end
  end

  private
    def item_params
      params.require(:item).permit(:name, :complete, :list_id)
    end
end


