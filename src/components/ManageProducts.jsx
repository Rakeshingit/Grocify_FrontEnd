import React, {useEffect, useState} from 'react';
import '../Admin Page StylesSheets/ManageProducts.css';
import '../Admin Page StylesSheets/Comman.css'
// import { useTable } from "react-table";
import ProductListingTable from "./ProductListingTable";
import AddProductsForm from "./AddProductsForm";
// import ErrorMessage from "./ErrorMessage";
import BestButton from "./Button";
import {FaPlus} from "react-icons/fa6";
import AlertDialog from "./AlertDialog";

const ManageProducts = () => {
    const [isProductFormOpen, setIsProductFormOpen] = useState(false);
    const [isEditingProduct, setIsEditingProduct] = useState(false);
    const [isAlert, setIsAlert] = useState(false);
    const [alertDialogResponse, setAlertDialogResponse] = useState(false);
    const [editData, setEditData] = useState(null);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        if (!isProductFormOpen) {
            resetState();
        }
    }, [isProductFormOpen]);

    const resetState = () => {
        setIsEditingProduct(false);
        setEditData(null);
    }


    function openProductEdit(rowValue) {
        setEditData(rowValue);
        setIsEditingProduct(true)
        setIsProductFormOpen(true);
    }

    const deleteProduct = (rowValue) => {
        setIsAlert(true);
        if (alertDialogResponse === true) {
            console.log(rowValue.name);
            // const response = fetch("https://localhost:8901/admin/deleteProduct/:id", {})
        } else {
            console.log("Unable to perform delete operation");
        }
    }

    const handleAlertDialogResponse = (value) => {
        // setConfirmDelete(value);
        setAlertDialogResponse(value);
        console.log(alertDialogResponse);
        setIsAlert(false);
    }

    const columns = React.useMemo(
        () => [
            {
                Header: 'Product Name',
                accessor: 'name', // accessor is the "key" in the data object
            },
            {
                Header: 'Category',
                accessor: (originalRow) => {
                    return originalRow.categoryId.name
                },
            },
            {
                Header: 'SKU',
                accessor: 'SKU',
            },
            {
                Header: 'Price',
                accessor: 'price',
            },
            {
                Header: 'Stock',
                accessor: 'stockQuantity',
                Cell: ({value}) => {
                    return <span className={
                        value > 10 ? "stock-green" :
                            value > 0 ? "stock-yellow" : "stock-red"
                    }>{value > 0 ? value : "Out of stock"}</span>;
                }
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Actions',
                id: 'actions',
                Cell: ({row}) => {
                    return (
                        <div className={"action-links-container"}>
                            <button id={"action-link-edit"} onClick={() => openProductEdit(row.original)}>Edit</button>
                            <button id={"action-link-delete"} onClick={() => deleteProduct(row.original)}>Delete
                            </button>
                        </div>
                    )
                }
            },
        ],
        [] // Dependency array; use an empty array to prevent redefinition on re-renders
    );


    useEffect(() => {
        fetch('https://localhost:8901/get-products').then((response) => {
            response.json().then((data) => {
                setProductList(data);
            })
        })
    }, []);
    return (
        <>
            <div className="main-container">
                <div className="Listed-Products">
                    <header className="Listed-Products-header">
                        <h3>Listed Products</h3>
                        <BestButton icon={<FaPlus/>} btnText="Add Product" size={"large"} variant="Primary"
                                    onClick={() => setIsProductFormOpen(true)}/>
                    </header>
                    <div>
                        <ProductListingTable columnsData={columns} rowsData={productList}/>
                    </div>
                </div>
            </div>
            <AlertDialog
                isOpen={isAlert}
                onClose={(response) => handleAlertDialogResponse(response)}
                title={"Delete this Product ?"}
                subTitle={"Changes can not be undone."}
            />
            <AddProductsForm isOpen={isProductFormOpen} onClose={() => setIsProductFormOpen(false)}
                             editingData={editData} isEditing={isEditingProduct}/>
        </>
    )
}

export default ManageProducts;