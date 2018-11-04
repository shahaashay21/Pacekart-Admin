import React, { Component } from 'react';
import { SideBar, Header } from './index';

class MainLayout extends Component {
    render(){
        const { children } = this.props;
        return (
            <div>
                {/* <div>Header</div> */}
                <Header />
                <SideBar activePage = { children.props.activePage }/>
                {/* { children } */}
                {/* <div>Footer</div> */}
            </div>
        );
    }
}

export default MainLayout;