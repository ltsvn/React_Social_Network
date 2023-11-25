import React from 'react';
import s from './Footer.module.css'

const MyComponent = () => {
    return (
        <div className={s.footer}>
            <div className={s.footer_items}>
                <div>The Social Network. 2023.</div>
                <div>Follow</div>
                <div>Navigate</div>
                <div>Useful Links</div>
                <div>Download Apps</div>
            </div>
        </div>
    );
};

export default MyComponent;
