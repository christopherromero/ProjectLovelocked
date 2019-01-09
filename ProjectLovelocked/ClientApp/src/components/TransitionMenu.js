import { BurgerMenu } from 'react-burger-menu';
import { MenuWrap } from './MenuWrap';
import React, { Component } from 'react';
import classNames from 'classnames';
import { slide as Menu } from 'react-burger-menu';


export class TransitionMenu extends Component {
    displayName = TransitionMenu.name

    constructor(props) {
        super(props);
        this.state = {
            currentMenu: 'slide',
            side: 'left'
        };
    }

    changeMenu(menu) {
        this.setState({ currentMenu: menu });
    }

    changeSide(side) {
        this.setState({ side });
    }

    getItems() {
        let items;
                items = [
                    <a key="0" href="/"><i className="fa fa-fw fa-star-o" /><span>Home</span></a>,
                    <a key="1" href="/thewedding"><i className="fa fa-fw fa-bell-o" /><span>The Wedding</span></a>,
                    <a key="2" href="/ourstory"><i className="fa fa-fw fa-envelope-o" /><span>Our Story</span></a>,
                    <a key="3" href="/directions"><i className="fa fa-fw fa-comment-o" /><span>Directions</span></a>,
                    <a key="4" href="/dresscode"><i className="fa fa-fw fa-bar-chart-o" /><span>Dress Code</span></a>,
                    <a key="5" href="/registry"><i className="fa fa-fw fa-newspaper-o" /><span>Registry</span></a>,
                    <a key="6" href="/rsvp"><i className="fa fa-fw fa-newspaper-o" /><span>RSVP</span></a>,
                    <a key="7" href="/bridalparty"><i className="fa fa-fw fa-newspaper-o" /><span>Bridal Party</span></a>

                ];

        return items;
    }

    getMenu() {
        const items = this.getItems();
        let jsx;

        jsx = (
            <MenuWrap wait={20}>
                <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
                    {items}
                </Menu>
            </MenuWrap>
        );

        return jsx;
    }

    render() {

        //const buttons = Object.keys(this.props.menus).map((menu) => {
        //    return (
        //        <a key={menu}
        //            className={classNames({ 'current-demo': menu === this.state.currentMenu })}
        //            onClick={this.changeMenu.bind(this, menu)}>
        //            {this.props.menus[menu].buttonText}
        //        </a>
        //    );
        //});

        return (
            <div id="outer-container" style={{ height: '100%' }}>
                {this.getMenu()}
                <main id="page-wrap">
                </main>
            </div>
        );
    };
}

