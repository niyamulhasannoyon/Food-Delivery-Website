import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({category, setCategory}) => {
    return (
        <div className='explore-menu' id='works'>
            <h1>Explore recent works</h1>
            <p className='explore-menu-text'>Explore my recent video editing projects crafted for brands, creators, and businesses. From TikTok and Instagram Reels to YouTube Shorts, ads, and storytelling videos – each project reflects creativity, precision, and audience-focused impact.</p>
            <div className="explore-menu-list">
                {
                    menu_list.map((item, index) => {
                        return(
                            <div onClick={() => setCategory(prev => prev===item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                                <img className={category===item.menu_name? "active": ""} src={item.menu_image} alt={item.name} />
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <hr />
        </div>
    );
};

export default ExploreMenu;