get "/posts" do
  @posts = Post.order("created_at DESC")
  erb :'posts/index'
end

post "/posts" do
  @post = Post.create(params[:post])

  # if @post.save
  #   redirect "posts/#{@post.id}"
  # end
  p @post
  p params[:post][:title]
  if request.xhr?
    erb :'posts/show',{ layout: false, locals: { post: @post } }
  else
    redirect "/posts"
  end
end

#   <h1>The Post ...</h1>


# <section id="sidebar" class="sidebar right">
# </section>

# <section id="post" class="left content">
# </section>

get "/posts/new" do
  @post = Post.new
  if request.xhr?
    erb :'posts/new',{ layout: false, locals: { post: @post } }
  else
    erb :'posts/new',{locals: { post: @post } }
  end

end

get "/posts/:id" do
  @post = Post.find(params[:id])
  erb :'posts/show'
end


  # <%= erb :'posts/_form', { layout: false, locals: { post: @post } } %>
