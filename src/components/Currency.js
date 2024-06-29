import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {currency, dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }

  return (
        <div className='alert alert-success'> Currency {
            <select class="form-select" name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="£">£ Pound</option>
                <option value="₹">₹ Ruppee</option>
            </select>	
        }	
        </div>
    );
};

export default Currency;