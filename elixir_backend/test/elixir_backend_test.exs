defmodule ElixirBackendTest do
  use ExUnit.Case
  doctest ElixirBackend

  test "greets the world" do
    assert ElixirBackend.hello() == :world
  end
end
