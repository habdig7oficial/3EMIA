defmodule App.Trigger do
  use Application
  require Logger

  def start(_types, _args) do

    port = 7777

    config = [
      { Plug.Cowboy, scheme: :http, plug: App.Router, options: [ port: port ] }
    ]

    opts = [ strategy: :one_for_one, name: App.Supervisor ]

    Logger.info("The elixir backend is up on #{port}")

    Supervisor.start_link(config, opts)

  end

end
