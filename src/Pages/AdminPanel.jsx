import React, {useState} from 'react';
import '../Admin Page StylesSheets/AdminPanel.css';
import Dashboard from "../components/Dashboard";
import ManageProducts from "../components/ManageProducts";
import ManageUsers from "../components/ManageUsers";
import AlertDialog from "../components/AlertDialog";
import {Link, useNavigate} from "react-router-dom";

const AdminPanel = () => {
    const [activeSection, setActiveSection] = useState('users');
    const [isAlert, setIsAlert] = useState(false);
    const [confirmLogout, setconfirmLogout] = useState(false);
    const navigate = useNavigate();

    const authCheck = sessionStorage.getItem("auth");
    if (!authCheck) {
        return "Your are not authenticated to view this page!!!!!!!!!!";
    }

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const handleLogout = async (data) => {
        setconfirmLogout(data);
        setIsAlert(false);
        if (confirmLogout) {
            const response = await fetch("https://localhost:8901/admin/logout", {
                method: "POST",
                credentials: "include",
                headers: {"content-type": "application/json"},
            });
            if (!response) {
                window.alert("Could not logout");
                return;
            }
            sessionStorage.clear();
            console.log("User logged out");
            navigate("/admin")
        }
    }

    return (
        <div className="admin-container">
            <aside className="sidebar">
                <h1>Admin Panel</h1>
                <ul>
                    <li className={activeSection === 'dashboard' ? 'active' : ''}
                        onClick={() => handleSectionChange('dashboard')}>
                        <button>
                            Dashboard
                        </button>
                    </li>
                    <li className={activeSection === 'products' ? 'active' : ''}
                        onClick={() => handleSectionChange('products')}>
                        <button>
                            Manage Products
                        </button>
                    </li>
                    <li className={activeSection === 'orders' ? 'active' : ''}
                        onClick={() => handleSectionChange('orders')}>
                        <button>
                            View Orders
                        </button>
                    </li>
                    <li className={activeSection === 'users' ? 'active' : ''}
                        onClick={() => handleSectionChange('users')}>
                        <button>
                            Manage Users
                        </button>
                    </li>
                    <li className={activeSection === 'logout' ? 'active' : ''} onClick={() => {
                        // handleSectionChange('logout');
                        setIsAlert(true)
                    }}>
                        <button>
                            Logout
                        </button>
                    </li>
                </ul>
            </aside>
            <main className="content">
                {activeSection === 'dashboard' && (
                    <div className="content-section">
                        <Dashboard/>
                    </div>
                )}
                {activeSection === 'products' && (
                    <div className="content-section">
                        <ManageProducts/>
                    </div>
                )}
                {activeSection === 'orders' && (
                    <div className="content-section">
                        {/*<ManageUsers />*/}
                    </div>
                )}
                {activeSection === 'users' && (
                    <div className="content-section">
                        <ManageUsers/>
                    </div>
                )}
            </main>
            <AlertDialog
                isOpen={isAlert}
                onClose={() => setIsAlert(false)}
                title={"Are you sure!!!"}
                subTitle={"Your unsaved work will be lost."}
                response={handleLogout}
            />
        </div>
    );
};

export default AdminPanel;
