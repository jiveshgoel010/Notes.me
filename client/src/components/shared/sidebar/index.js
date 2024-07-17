import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router-dom';

import styles from './sidebar.module.scss';
import BrandLogo from '../brand';

import sidebarData from '../../../data/sidebar.json';

function Sidebar() {
    const navigate = useNavigate();
    return (
        <aside className={styles.sidebar}>
            <BrandLogo logoOnly={true} type={"dark"} className={styles.logo}/>
            <section>
                {
                    sidebarData.map(item => {
                        return (
                            <article className={styles.item}>
                                <Icon icon={item.icon} />
                            </article>
                        );
                    })
                }
            </section>
            <article className={styles.logoutBtn}>
                <Icon icon={"material-symbols:logout"} onClick={()=> navigate("/")}/>
            </article>
        </aside>
    )
}

export default Sidebar
