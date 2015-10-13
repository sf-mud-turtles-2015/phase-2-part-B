get "/posts" do
  @posts = Post.order("created_at DESC")
  erb :'posts/index'
end

post "/posts" do
  @post = Post.new(params[:post])
  p @post
  @title = @post.title
  @author_name = @post.author_name
  @body = @post.body
  if @post.save
    if request.xhr?
      { title: @title, author_name: @author_name, body: @body, time: @post.created_at.strftime("%m/%d/%Y") }.to_json
    else
      redirect "posts/#{@post.id}"
    end
  end
end

get "/posts/new" do
  @post = Post.new
  erb :'posts/new', layout: false
  # erb :'posts/_form'
end

get "/posts/:id" do
  @post = Post.find(params[:id])
  erb :'posts/show'
end
