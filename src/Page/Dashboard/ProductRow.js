import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({ product, index, refetch, setDeletingProduct }) => {
    const { name, speciality, img, email } = product;

    
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-20 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td>
                <label onClick={() => setDeletingProduct(product)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
                
            </td>
        </tr>
    );
};

export default ProductRow;