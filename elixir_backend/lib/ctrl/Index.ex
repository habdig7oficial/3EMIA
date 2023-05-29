defmodule App.Ctrl.Index do

  import Plug.Conn

  def run(conn) do
    headers = [
      {"content-type", "application/json"},
      {"Access-Control-Allow-Origin", "*"}
    ]

    conn = %{conn | resp_headers: headers }

    response = [%{:Foo => :Bar}, %{:Foo => :Baz}]

    
    send_resp(conn, 200, Jason.encode!(response))
  end
end
