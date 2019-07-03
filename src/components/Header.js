import React from 'react';

import logoFacebook from '../assets/logo_facebook.png';
import userFacebook from '../assets/user_facebook.png';

function Header() {
  return (
    <header>
      <nav>
        <img src={logoFacebook} alt="" />
        <div>
          <span>Meu Perfil</span>
          <img src={userFacebook} alt="" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
