
import { NavLink } from 'react-router-dom';


const Categories = ({ categories }) => {
    return (
        <div>
            <div className='rounded-2xl  flex flex-col items-center gap-5'>
                {categories.map(category => (
                        <NavLink
                            key={category.id}
                            className={({isActive}) =>`btn btn-wide p-5 rounded-3xl ${isActive? 'bg-[#9538E2] text-white':''}`}
                            to={`/category/${category.name}`}
                        >
                            {category.name}</NavLink>
                    ))
                }

            </div>




        </div>
    );
};

export default Categories;