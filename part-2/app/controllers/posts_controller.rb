get "/posts" do
  @posts = Post.order("created_at DESC")
  erb :'posts/index'
end

post "/posts" do

  @post = Post.create(params[:post])
  if request.xhr?
    erb :'posts/show', layout: false
  else
    redirect "posts/#{@post.id}"
  end
end

get "/posts/new" do
  p params
  @post = Post.new
  if request.xhr?
    erb :'posts/new', layout: false
  else
    erb :'posts/new'
  end
end

get "/posts/:id" do
  @post = Post.find(params[:id])
  erb :'posts/show'
end
