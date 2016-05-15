ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Phaser.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Phaser.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Phaser.Repo)

