get "/posts" do
  @posts = Post.order("created_at DESC")
  erb :'posts/index'
end

post "/posts" do
  @post = Post.new(params[:post])

  if request.xhr?
    p "*" * 100
    p params
    p "*" * 100
    @post = Post.create(title: params[:title],
                        author_name: params[:author_name],
                        body: params[:body])
    erb :'posts/_post', layout: false, locals: {:post => @post}
  else
    if @post.save
      redirect "posts/#{@post.id}"
    end
  end
end

get "/posts/new" do
  @post = Post.new
  erb :'posts/new'
end

get "/posts/:id" do
  @post = Post.find(params[:id])
  erb :'posts/show'
end
