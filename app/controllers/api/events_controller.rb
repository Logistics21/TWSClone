class Api::EventsController < ApplicationController
  def index
    @city = City.find_by(id: params[:city_id])

    if @city
      render json: @city.events
    else
      render json: "There are no events in this city"
    end
  end

  def create
    @event = Event.new(event_params)
    @event.host_id = current_user.id

    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def show
    @event = Event.find_by(id: params[:id])
    @host = User.find_by(id: @event.host_id)

    if @event
      render :show
    else
      render json: "Event not found", status: 422
    end
  end

  def destroy
    event = Event.find(params[:id])
    event.destroy!
    render json: { eventId: event.id }
  end

  def update
  end

  private

  def event_params
    params.require(:event).permit(:date, :address, :city_id)
  end
end
