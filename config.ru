use Rack::Static,
  :urls => ["/assets/images", "/assets/js", "/assets/css", "/assets/type"],
  :root => "public"

use Rack::Auth::Basic, "Restricted Area" do |username, password|
  [username, password] == ['master', "abrakadabra"]
end

map "/" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/index.html', File::RDONLY)
    ]
  }
end

map "/slider" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/slider.html', File::RDONLY)
    ]
  }
end

