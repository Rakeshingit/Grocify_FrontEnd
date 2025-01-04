import React, {useState, useMemo, useEffect} from 'react';
import '../Admin Page StylesSheets/ManageUsers.css';
import BestButton from './Button';
import {LuUserPlus2} from "react-icons/lu";
import '../Admin Page StylesSheets/Comman.css'
import {MdSort} from "react-icons/md";
import DialogBox from "./DialogBox";
import ProductListingTable from "./ProductListingTable";

const ManageUsers = () => {

    const [isDialogBoxOpen, setIsDialogBoxOpen] = useState(false);
    const [userList, setUserList] = useState([]);

    const columns = useMemo(() => [
        {
            Header: 'UserId',
            accessor: '_id',
        },
        {
            Header: 'First Name',
            accessor: 'userFirstName',
        },
        {
            Header: 'Last Name',
            accessor: 'userLastName',
        },
        {
            Header: 'Email',
            accessor: 'userEmail',
        },
        {
            Header: 'Role',
            accessor: 'role',
        },
    ], []);

    const inputConfig = [
        {name: "firstName", type: "text", placeholder: "First Name"},
        {name: "lastName", type: "text", placeholder: "Last Name"},
        {name: "age", type: "date", placeholder: "Age"},
    ];

    useEffect(() => {
        fetch('https://localhost:8901/admin/get-users', {
            method: "GET",
            credentials: "include",
        }).then((response) => {
            response.json().then((data) => {
                setUserList(data);
            })
        })
    }, []);

    return (
        <>
            <div className="main-container">
                <div className="Users-header">
                    <h3>Platform Users</h3>
                    <div className="interactions">
                        <input placeholder="Search Profiles..." type={"text"}/>
                        <BestButton
                            variant={"Outlined"}
                            size={"small"}
                            icon={<MdSort/>}
                        />
                        <BestButton
                            variant="Primary"
                            icon={<LuUserPlus2/>}
                            btnText={"Add user"}
                            size={"large"}
                            onClick={() => setIsDialogBoxOpen(true)}
                        />
                    </div>
                </div>
                <div>
                    {<ProductListingTable columnsData={columns} rowsData={userList}/>}
                </div>
            </div>
            <DialogBox
                open={isDialogBoxOpen}
                onClose={() => setIsDialogBoxOpen(false)}
                title={"Your title here"}
                subTitle={"Nam condimentum est lacus, ac bibendum magna tempus et. Integer vestibulum nec nibh eu posuere. Quisque in erat suscipit, lobortis eros at, accumsan turpis."}
                btnText={"Submit"}
                inputs={inputConfig}
            />
        </>
    )
}

export default ManageUsers;