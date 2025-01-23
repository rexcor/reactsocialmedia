import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext.jsx";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    useLogout();
    navigate("/login");
  }

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <MinhasFotos /> {mobile && "Minhas Fotos"} Minhas Fotos
      </NavLink>
      <NavLink to="/conta/estatísticas">
        <Estatisticas /> {mobile && "Estatísticas"}
        Estatísticas
      </NavLink>
      <NavLink to="/conta/postar">
        <AdicionarFoto /> {mobile && "Adicionar Foto"}
        Adicionar Foto
      </NavLink>
      <button onClick={handleLogout}>
        <Sair /> {mobile && "Sair"}
        Sair
      </button>
    </nav>
  );
};

export default UserHeaderNav;
