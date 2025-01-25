import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext.jsx";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && style.navMobileActive}`}
      >
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
    </>
  );
};

export default UserHeaderNav;
