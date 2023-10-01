import PropTypes from 'prop-types';


const Item = ({item}) => {
   
    const { name, picture, price} = item;
    return (
        <div>
        <div className="card bg-base-100 shadow-2xl border">
        <figure className="px-10 pt-10">
          <img  src={picture} alt="Shoes" className="rounded-xl w-full h-60" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>  
        </div>
    );
};

export default Item;

Item.propTypes = {
   
    item: PropTypes.object

}