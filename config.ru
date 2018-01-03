require 'rubygems'
require 'bundler'

Bundler.require

require 'pry'
require 'sinatra'

require './app/lib/controllers/colors_api'
run ColorsApi
