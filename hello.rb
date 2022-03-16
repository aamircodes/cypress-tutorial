require 'sinatra'

get '/' do
    send_file 'button.html'
end

get '/hi' do
    'hi!'
end