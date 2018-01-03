class ColorsApi < Sinatra::Base
  set :root, File.expand_path("..", __dir__)

  get '/colors/:color' do
    { color: params[:color] }.to_json
  end
end
