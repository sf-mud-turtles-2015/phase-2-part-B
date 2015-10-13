get "/posts" do
  @posts = Post.order("created_at DESC")
  erb :'posts/index'
end

post "/posts" do
  @post = Post.new(params[:post])
  if @post.save
    if request.xhr?
      erb :'posts/_post', layout: false, locals: {post: @post}
    else
      redirect "/posts/#{@post.id}"
    end
  else
    redirect '/posts'
  end
end

get "/posts/new" do
  if request.xhr?
    @post = Post.new
    erb :'posts/_form', layout: false, locals: { post: @post }
  else
    erb :'posts/new'
  end
end

get "/posts/:id" do
  @post = Post.find(params[:id])
  erb :'posts/show'
end
