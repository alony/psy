use Rack::Static,
  :urls => ["/assets/images", "/assets/js", "/assets/css", "/assets/type"],
  :root => "public"

# use Rack::Auth::Basic, "Restricted Area" do |username, password|
#   [username, password] == ['master', "abrakadabra"]
# end

require './app.rb'
run App.new


