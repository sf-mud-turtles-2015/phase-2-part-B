get "/posts" do
  @posts = Post.order("created_at DESC")
  erb :'posts/index'
end

post "/posts" do
 @post = Post.new(params[:post])
p @post
    if request.xhr?
    erb :'posts/_post', layout: false, locals: { post: @post }
    else
      redirect "posts/#{@post.id}"
    end
end

get "/posts/new" do

  if request.xhr?
    @post = Post.new
    erb :'posts/new', layout: false
  end
end

get "/posts/:id" do
  @post = Post.find(params[:id])
  erb :'posts/show'
end

