defmodule App.Router do
  use Plug.Router

  plug :match

  plug Plug.Parsers, parsers: [:urlencoded, :multipart, :json], json_decoder: Jason

  plug :dispatch

  get "/" do
    App.Ctrl.Index.run(conn)
  end

  match _ do
    send_resp(conn, 404, "404 - Não Encotrado")
  end

end
