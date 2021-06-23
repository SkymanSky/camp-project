import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar space="right" src="https://www.cenuta.com/blog/wp-content/uploads/2021/02/github-nedir-github-kullanimi-ve-basit-git-komutlari.png"></Image>
                <Dropdown pointing="top left" text="Skyman">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out alternate"/>
                </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
