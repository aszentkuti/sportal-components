import React from "react";

function Logo() {
  return (
    <a className="flex self-center w-full align-center lg:max-w-[264px] max-w-[124px]" href="/">
      <picture>
        <source
          srcSet="https://sportal.blic.rs/theme/img/logo-mobile.svg"
          media="(max-width: 1024px)"
        />
        <img src="https://sportal.blic.rs/theme/img/logo-desktop.svg" alt="" />
      </picture>
    </a>
  );
}

export default Logo;
