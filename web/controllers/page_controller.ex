defmodule Phaser.PageController do
  use Phaser.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
