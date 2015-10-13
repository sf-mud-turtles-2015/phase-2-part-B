get "/posts" do
  @posts = Post.order("created_at DESC")
  @post = Post.new
  erb :'posts/index'
end

post "/posts" do
  content_type :json
  if request.xhr?
    @post = Post.new(params[:post])
    if @post.save
      date = @post.created_at.strftime("%m/%d/%Y")
      {message: 'OK', date: date}.to_json
    end
  end
end

get "/posts/:id" do
  @post = Post.find(params[:id])
  erb :'posts/show'
end
