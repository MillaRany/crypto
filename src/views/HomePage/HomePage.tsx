function HomePage() {

  function logout() {
    localStorage.clear();
    window.location.href = '/';
  }

  return (
    <div>
      <button onClick={logout}>sair</button>
    </div>
  )
}

export default HomePage

