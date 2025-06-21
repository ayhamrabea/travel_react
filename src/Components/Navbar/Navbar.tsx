import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import type { RootState } from "../../app/story";
import {  useLogoutUserMutation } from "../../services/travel";
import { logout as logoutAction } from "../../features/auth/authSlice";

import DropdownEl from "../Bootstrap/Dropdown";

export const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state: RootState) => state.auth.user);

    

    const [logout] = useLogoutUserMutation();

    

    //  تسجيل الخروج
    const handleLogout = async () => {
        try {
            await logout({}).unwrap();
        } catch (error) {
            console.error("Logout error:", error);
        } finally {
            dispatch(logoutAction()); 
            navigate("/auth");
        }
    };

    const handleProfileNavigate = () => {
        navigate("/profile");
    };



    return (
        <header className="header">
            <div className="container">
                <nav className="navbar">
                    <div className="navbar__logo">
                        <Link to="/">
                            <img src="logo.png" alt="Логотип Travel Blog" />
                        </Link>
                    </div>
                    <div className="navbar__auth">
                        {user ? (
                            <DropdownEl
                                toggle={user.full_name ||  "Пользователь"}
                                goToProfile={handleProfileNavigate}
                                logout={handleLogout}
                            />
                        ) : (
                            <Link className="my-btn my-btn-auth" to="/auth">
                                Войти
                            </Link>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};
