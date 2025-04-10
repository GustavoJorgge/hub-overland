import {PencilLine} from "phosphor-react"
import styles from './Sidebar.module.css'
import { Avatar } from "./Avatar"


export function Sidebar(){
    return(
        <aside className={styles.Sidebar}>
            <img className={styles.cover}
                src="https://images.unsplash.com/photo-1627666259356-03a116b7dde9?q=60&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
            />
            <div className={styles.profile}>
           <Avatar src="https://github.com/GustavoJorgge.png"/>
            <strong>Gustavo Jorge</strong>
            <span>Overlander | Desenvolvedor</span>

            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar Seu Perfil
                </a>
            </footer>
        
        </aside>
    )
}