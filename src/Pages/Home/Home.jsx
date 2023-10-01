import { useEffect, useState } from "react";
import Item from "../../components/Item/Item";


const Home = () => {
    const  [dress, setDress] = useState([]);

    useEffect(()=>{
        fetch('/public/data.json')
        .then(res => res.json())
        .then(data => setDress(data))


    }, []);

    

    return (
        <div className="grid md:grid-cols-3 gap-4">
           {
            dress.map(item => <Item
                key={item.id}
                item={item}
                ></Item>)
           }
        </div>
    );
};

export default Home;