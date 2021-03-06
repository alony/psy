class App
  def initialize
    @routes = {
      "/" => "public/index.html",
      "/1" => "public/index1.html",
      "/2" => "public/index2.html",
      "/slider" => "public/slider.html",
      "/anfahrt" => "public/pages/anfahrt.html",
      "/honorar" => "public/pages/honorar.html",
      "/kontakt" => "public/pages/kontakt.html",
      "/methoden" => "public/pages/methoden.html",
      "/ueber-mich" => "public/pages/ueber-mich.html",
      "/ziel" => "public/pages/ziel.html",
      "/impressum" => "public/pages/impressum.html",
      "/kooperation" => "public/pages/kooperation.html",
      "/ueberbrueckungszeit" => "public/pages/ueberbrueckungszeit.html"
    }
  end

  def default
    [ 404, {'Content-Type' => 'text/html'}, ["inexisting route"] ]
  end

  def call(env)
    return default unless template_to_render = @routes[env['REQUEST_PATH']]

    [
      200,
      {
        'Content-Type'  => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open(template_to_render, File::RDONLY)
    ]

  end
end