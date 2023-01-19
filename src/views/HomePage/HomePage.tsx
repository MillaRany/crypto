import React from 'react'

function HomePage() {
  
 function logout() {
    localStorage.clear();
    window.location.href = '/';
}

  return (
    <button onClick={logout}>sair</button>
  )
}

export default HomePage

