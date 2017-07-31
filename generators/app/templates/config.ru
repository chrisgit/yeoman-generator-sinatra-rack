require 'sinatra'

# Change to init
require_relative 'app/init'

run ApplicationController.new
