import React, {useState, useRef, useEffect} from 'react';
import '../Admin Page StylesSheets/ManageProducts.css'
import ErrorMessage from "./ErrorMessage";

function AddProductsForm({isOpen, onClose, editingData, isEditing = false}) {

    const [images, setImages] = useState([]);
    const formContainer = useRef(null);
    const [showMsg, setShowMsg] = useState({
        message: "",
        showWarning: false
    });
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState(() => {
        if (isEditing)
            return editingData
        return null
    });
    const sbmBtn = document.getElementById("submitButton");

    useEffect(() => {
        if (isEditing) {
            handleImageChange()
            setFormData(editingData);
        } else
            setImages([])

    }, [editingData]);

    useEffect(() => {
        if (!(formData === editingData)) {
            try {
                sbmBtn.classList.remove("disabled");
            } catch (e) {
                console.error(e)
            }
        } else if (formData === editingData) {
            try {
                sbmBtn.classList.add("disabled");
            } catch (e) {
                console.error(e)
            }
        }
    }, [formData]);
    useEffect(() => {
        // return resetState;
    }, []);


    if (!isOpen) return null;

    const resetState = () => {
        setFormData(null);
        setShowMsg(() => ({
            message: "",
            showWarning: false,
        }))
    }

    const handleImageChange = (e) => {
        if (editingData) {
            setIsLoading(true);
            const images = Array.from(editingData.imageUrl);
            setImages(images);
            setIsLoading(false);
            return
        }

        setIsLoading(true);
        const files = Array.from(e.target.files);
        const readers = [];

        files.forEach(file => {
            const reader = new FileReader();
            readers.push(
                new Promise(resolve => {
                    reader.onloadend = () => {
                        resolve(reader.result);
                    };
                    reader.readAsDataURL(file);
                })
            )
        })
        Promise.all(readers).then((results) => {
            setImages(results);
            setIsLoading(false);
        })

    }


    const handleDeleteImage = (index) => {
        setImages((prevImage) => prevImage.filter((_, i) => i !== index));
    }

    const handleValidationAndSubmissionOfNewProduct = async (e) => {
        console.log(showMsg)
        e.preventDefault();

        //Checking for empty images input
        // const imagesInput = document.getElementById('image-upload');
        if (images.length === 0) {
            setShowMsg(() => ({
                message: "Please upload images",
                showWarning: true,
            }));
            formContainer.current.scrollTo({top: 0, behavior: "smooth"});
            console.log(showMsg.showWarning)
        } else if (images.length > 0) {
            setShowMsg(() => ({
                message: "",
                showWarning: false,
            }))
        }

        //Uploading the form to the backend
        const formData = new FormData(e.target);
        formData.forEach(field => {
            console.log(field)
        })

        if (!isEditing) {
            fetch("https://localhost:8901/admin/create-product", {
                method: "POST",
                credentials: "include",
                body: formData
            }).then((response) => response.json())
                .then(data => {
                    console.log("Success ", data)
                    onClose();
                })
                .catch((err) => console.log("Failed to submit", err.message));
        } else {
            fetch("https://localhost:8901/admin/create-product", {
                method: "PUT",
                credentials: "include",
                body: formData
            }).then((response) => response.json())
                .then(data => {
                    console.log("Success ", data)
                    onClose();
                })
                .catch((err) => console.log("Failed to submit", err.message));
        }


    }


    const handleCategorySelection = async () => {
        const categorySelect = document.getElementById("category-list");
        const response = await fetch("https://localhost:8901/get-subcategories", {
            method: 'GET',
            credentials: "include"
        })
        if (!response.ok) {
            console.log(`${response}`);
            return;
        }
        const data = await response.json();
        data.forEach(item => {
            const newElement = document.createElement('option');
            newElement.value = item._id;
            newElement.text = item.name;
            categorySelect.appendChild(newElement);
        })
    }


    return (
        <>
            <div className="overlay active">
                <div className={'add-products-form-container'} ref={formContainer}>
                    {
                        showMsg.showWarning &&
                        <ErrorMessage message={showMsg.message} type="error" dismissible={true}/>
                    }
                    <h1>Enter the details of the product</h1>
                    <form encType="multipart/form-data" className="add-products-form"
                          onSubmit={handleValidationAndSubmissionOfNewProduct}>
                        <div className="form-input-element">
                            <label>Product Name</label>
                            <input type='text' name="name" required={true} onChange={(e) => setFormData({
                                ...formData,
                                name: e.target.value
                            })} defaultValue={editingData ? editingData.name : ""}/>
                        </div>
                        <div className="form-input-element">
                            <label>Description</label>
                            <textarea rows={5} cols={90} name={"description"} onChange={(e) => setFormData({
                                ...formData,
                                description: e.target.value
                            })} required={true} defaultValue={editingData ? editingData.description : ""}/>
                        </div>
                        <div className="form-input-element">
                            <label>Category</label>
                            <select id={"category-list"} name={"category"} onChange={(e) => setFormData({
                                ...formData,
                                category: e.target.value
                            })} onClick={handleCategorySelection}>
                                <option>{editingData ? editingData.categoryId.name : "Select option"}</option>
                            </select>
                        </div>
                        <div className="form-input-element">
                            <label>SKU</label>
                            <input name={"SKU"} onChange={(e) => setFormData({
                                ...formData,
                                sku: e.target.value
                            })} required={true} defaultValue={editingData ? editingData.SKU : ""}/>
                        </div>
                        <div className="form-input-element">
                            <label>Price (₹)</label>
                            <input type={'number'} onChange={(e) => setFormData({
                                ...formData,
                                price: e.target.value
                            })} name={"price"} required={true} defaultValue={editingData ? editingData.price : ""}/>
                        </div>
                        <div className="form-input-element">
                            <label>Stock Quantity</label>
                            <input type='number' onChange={(e) => setFormData({
                                ...formData,
                                stockQuantity: e.target.value
                            })} name={"stockQuantity"} required={true}
                                   defaultValue={editingData ? editingData.stockQuantity : ""}/>
                        </div>
                        <div className="form-input-element">
                            <label className={"custom-file-upload"} htmlFor={"image-upload"}>Upload images</label>
                            <input name={"productImg"} multiple id={"image-upload"} type={"file"} accept={'image/*'}
                                   onChange={handleImageChange}/>
                            <br/>
                            <div className="image-preview-container">
                                {isLoading ? "Loading..." : ""}
                                {
                                    images.map((image, index) => (
                                        <div className={"image-preview-wrapper"}>
                                            {/*{isLoading ? "Loading..."}*/}
                                            <img key={index} src={image} alt={`Preview ${index + 1}`}
                                                 className="image-preview"/>
                                            <button className={"delete-button"} type={"button"}
                                                    onClick={() => handleDeleteImage(index)}>Delete
                                            </button>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="form-input-element">
                            <select defaultValue={editingData ? editingData.status : "Active"} name={"status"}>
                                <option value={"Active"}>Active</option>
                                <option value={"Inactive"}>Inactive</option>
                            </select>
                        </div>
                        <div className="add-product-controls">
                            <button onClick={onClose}>Cancel</button>
                            <button id={"submitButton"} className={"disabled"}
                                    type={"submit"}>{isEditing ? "Save changes" : "Add Product"}</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default AddProductsForm;