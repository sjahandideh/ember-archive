require 'sinatra'
require 'json'

set :public_folder, 'public'

get '/' do
  redirect 'index.html'
end

get '/notes' do
  notes.to_json
  { notes: notes}.to_json
end

#get '/posts/:id' do
  #id = params[:id].to_i
  #{ post: posts[id - 1] }.to_json
#end

def notes
  [{
    id: 1,
    content: "rm -rf dir_name",
    tags: ["unix commands"],
    url: "http://www.linux-commands.com",
    createdAt: "08-27-2013"
  }, {
    id: 2,
    content: "brew info postgres
.bash_profile => export PGHOST=localhost",
    tags: ["new mac", "postgres", "db"],
    url: "http://www.brew.com",
    createdAt: "09-02-2013"
  }]
end
