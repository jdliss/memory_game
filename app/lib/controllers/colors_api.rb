class ColorsApi < Sinatra::Base
  set :root, File.expand_path("..", __dir__)

  get '/colors/:color' do
    { color: "http://via.placeholder.com/200x200/#{params[:color]}/#{params[:color]}" }.to_json
  end
end
