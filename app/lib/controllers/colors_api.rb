class ColorsApi < Sinatra::Base
  set :root, File.expand_path("..", __dir__)

  def colors_map
    {
      'red'    => 'ff0000',
      'green'  => '008000',
      'yellow' => 'ffff00',
      'blue'   => '0000ff'
    }
  end

  get '/colors/:color' do
    headers 'Access-Control-Allow-Origin' => '*'
    color = colors_map[params[:color]]
    { color: "http://via.placeholder.com/200x200/#{color}/#{color}" }.to_json
  end
end
