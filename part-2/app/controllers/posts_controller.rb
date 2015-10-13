get "/posts" do
  if request.xhr?
    @posts = Post.order("created_at DESC")
    erb :'posts/_post', { layout: false, locals: { post: @post }}
  else
    @posts = Post.order("created_at DESC")
    erb :'posts/index'
  end
end

post "/posts" do
  if request.xhr?
    @post = Post.new(params[:post])
    if @post.save
      @post.to_json
    end
  else
    @post = Post.new(params[:post])
    if @post.save
      redirect "posts/#{@post.id}"
    end
  end
end

get "/posts/new" do
  if request.xhr?
    @post = Post.new
    erb :'posts/_form', { layout: false, locals: { post: @post }}
  else
    @post = Post.new
    erb :'posts/new'
  end
end

get "/posts/:id" do
  @post = Post.find(params[:id])
  erb :'posts/show'
end
