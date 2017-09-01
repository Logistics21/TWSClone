class Api::UsersController < ApplicationController
  # def index
    # @users = Event.all.select { |event| event.host }
    # maybe change users to hosts???
  # end

  def create
    debugger
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    debugger
    @user = User.find(current_user.id)

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :first_name, :password, :last_name, :city_code, :city_name, :city_id, :is_host)
  end
end
