import React from 'react'
import recipes from '../recipes';
import Swal from 'sweetalert2';

const Menu = () => {

    const handleOrder = (id) =>{
        console.log(id,"id is clicked");
        Swal.fire({
            title: "Are you sure?",
            text: "You want to order this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered!",
                text: "Your Order has been taken in.",
                icon: "success"
              });
            }
          });
    }



  return (
    <div className='menu-container'>
        <div className='menu-header'>
            <h2>This week's Specials!</h2>
            <button>Order Menu</button>
        </div>

        {/* Menu cards */}

        <div className='cards'>
            {
                recipes.map((recipe) =>{return(
                    <div key={recipe.id} className='menu-items'>
                        <img src={recipe.image} alt={recipe.title}></img>

                        <div className='menu-content'>
                            <div className='heading'>
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p className='description'>{recipe.description}</p>
                            <button className='orderBtn' onClick={()=> handleOrder(recipe.id)}>Order Now</button>
                        </div>
                    </div>
                    
                    )})
            }
        </div>
    </div>
  )
}

export default Menu;