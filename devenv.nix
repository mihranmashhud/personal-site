{
  pkgs,
  lib,
  config,
  inputs,
  ...
}: {
  languages = {
    javascript = {
      enable = true;
      pnpm.enable = true;
      pnpm.install.enable = true;
    };
    typescript.enable = true;
  };

  scripts = {
    dev.exec =
      # bash
      ''
        pnpm run dev $@
      '';
  };
  dotenv.enable = true;
}
