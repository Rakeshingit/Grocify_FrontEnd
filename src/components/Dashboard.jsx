import React from 'react';
import '../Admin Page StylesSheets/Dashboard.css';
import '../Admin Page StylesSheets/Comman.css'
import SalesOverview from "./SalesOverviewChart";
import OrdersOverviewChart from "./OrdersOverviewChart";
import BestButton from "./Button";
import {IoMdSettings} from "react-icons/io";
import {IoMdNotifications} from "react-icons/io";


const Dashboard = () => {

    return (
        <div className="main-container">
            <header className="dashboard-header">
                <h1>Welcome, {sessionStorage.getItem('username')}</h1>
                <div className="quick-actions">
                    <input type="text" placeholder="Search..."/>
                    <BestButton
                        btnText={"Notifications"}
                        size="large"
                        variant={"Primary"}
                        icon={<IoMdNotifications/>}/>
                    <BestButton
                        btnText={"Settings"}
                        size="large"
                        variant={"Primary"}
                        icon={<IoMdSettings/>}/>
                    {/*<button>🔔 Notifications</button>*/}
                    {/*<button>⚙️ Settings</button>*/}
                </div>
            </header>

            {/* Statistics Overview Cards */}
            <div className="stats-overview">
                <div className="card">
                    <h3>Total Sales</h3>
                    <p>$50,000</p>
                </div>
                <div className="card">
                    <h3>Total Orders</h3>
                    <p>1200</p>
                </div>
                <div className="card">
                    <h3>Total Products</h3>
                    <p>150</p>
                </div>
                <div className="card">
                    <h3>Total Customers</h3>
                    <p>500</p>
                </div>
            </div>

            {/* Sales and Orders Charts */}
            <div className="charts-section">
                <div className="chart-card">
                    <h3>Sales Overview</h3>
                    <div className="chart-placeholder"><SalesOverview/></div>
                </div>
                <div className="chart-card">
                    <h3>Orders Overview</h3>
                    {/* Replace with a bar chart */}
                    <div className="chart-placeholder"><OrdersOverviewChart/></div>
                </div>
            </div>

            {/* Recent Orders Table */}
            <div className="recent-orders">
                <h3>Recent Orders</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>#12345</td>
                        <td>John Doe</td>
                        <td>2024-10-02</td>
                        <td>Shipped</td>
                        <td>$200</td>
                    </tr>
                    <tr>
                        <td>#12346</td>
                        <td>Jane Smith</td>
                        <td>2024-10-01</td>
                        <td>Processing</td>
                        <td>$150</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            {/* Top Selling Products and Activity Feed */}
            <div className="additional-info">
                <div className="top-products">
                    <h3>Top Selling Products</h3>
                    <ul>
                        <li>Product A - 300 Sales</li>
                        <li>Product B - 200 Sales</li>
                        <li>Product C - 150 Sales</li>
                    </ul>
                </div>
                <div className="activity-feed">
                    <h3>Activity Feed</h3>
                    <ul>
                        <li>Order #12345 was shipped.</li>
                        <li>New user Jane Smith signed up.</li>
                        <li>Product C was updated.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
