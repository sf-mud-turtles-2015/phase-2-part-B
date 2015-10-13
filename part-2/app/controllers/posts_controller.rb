get "/posts" do
  @posts = Post.order("created_at DESC")
  erb :'posts/index'
end

post "/posts" do

    post = Post.create(params[:post])

  if request.xhr?
    {title: post.title, author_name: post.author_name, body: post.body, created: post.created_at.strftime("%m/%d/%Y")}.to_json
   else

      redirect "/posts"
    end
end

get "/posts/new" do
  @post = Post.new

  if request.xhr?
    erb :'/posts/_form', layout: false
  else
    erb :'posts/new'
  end
end

get "/posts/:id" do
  @post = Post.find(params[:id])
  erb :'posts/show'
end
