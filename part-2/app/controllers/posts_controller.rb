get "/posts" do
  @posts = Post.order("created_at DESC")
  erb :'posts/index'
end

post "/posts" do
  @post = Post.new(params[:post])

  if request.xhr?
    # content_type :json
    # @post.to_json
    # erb aka render the post partial with layout false and the locals
  else
    redirect "posts/#{@post.id}"
  end

  # if @post.save
  #   if request.xhr?
  #     content_type :json
  #     @post.to_json
  #   else
  #     redirect "posts/#{@post.id}"
  #   end
  # else
  #   if request.xhr?
  #     p "didn't save! and this is an XHR request"
  #   else
  #     p "didn't save! and this is a normal request"
  #   end
  # end
end

get "/posts/new" do
  @post = Post.new
  if request.xhr?
    # new behavior to erb just the form partial
    # layout is false
    # pass 1 local variable to the partial, which expects a variable called post
  else
    erb :'posts/new'
  end
end

get "/posts/:id" do
  @post = Post.find(params[:id])
  erb :'posts/show'
end
