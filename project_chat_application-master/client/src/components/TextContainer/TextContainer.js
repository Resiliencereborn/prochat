import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Pro Chat<span role="img" aria-label="emoji">💬</span></h1>
      <h2>Direnç uyanık tarafında socket.io kütüpahanesi kullanılarak oluşturuldu.</h2>
      <h2>Yandaki kutudan mesajızını yazarak siz de bir ProChater olun!<span role="img" aria-label="emoji">⬅️</span></h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>Şu anda bu grupta olan kişiler:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;
