import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import './SideBar.css';
// import 'bootstrap';

class SideBar extends Component {
    componentDidMount(){
        // It is used to collapse sidebar using below id (Not in use for now)
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
        this.componentDidUpdate();
    }

    componentDidUpdate(){
        this.setDefaultBehavior();
    }

    setDefaultBehavior(){
        $(".collapse").collapse("hide");
        this.setActiveMenu();
    }

    setActiveMenu(){
        let pathname = window.location.pathname;
        $("li").removeClass("active");
        if(pathname === "/"){
            $(".activeHome").addClass("active");
        } else if (pathname === "/products"){
            $(".activeProducts").addClass("active");
        }
    }

    render() {
        const styles = {
            sidebar: {
                marginTop: "50px"
            }
        }
        return (
            <div className="sidebar-wrapper">
                {/* Sidebar */}
                <nav id="sidebar" style = { styles.sidebar }>
                    <div className="sidebar-header">
                        <h3>Bootstrap Sidebar</h3>
                        <strong>BS</strong>
                    </div>

                    <ul className="list-unstyled components">
                        <li className="activeHome">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                <i className="fas fa-home"></i>
                                Home
                            </a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <Link to="/" >Home 1</Link>
                                </li>
                                <li>
                                    <a href="#">Home 2</a>
                                </li>
                                <li>
                                    <a href="#">Home 3</a>
                                </li>
                            </ul>
                        </li>
                        <li className="activeProducts">
                            <Link to="/products">
                                <i className="fas fa-briefcase"></i>
                                Products
                            </Link>
                        </li>
                        <li className="activePages">
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                <i className="fas fa-copy"></i>
                                Pages
                            </a>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#">Page 1</a>
                                </li>
                                <li>
                                    <a href="#">Page 2</a>
                                </li>
                                <li>
                                    <a href="#">Page 3</a>
                                </li>
                            </ul>
                        </li>
                        <li className="activePortfolio">
                            <a href="#">
                                <i className="fas fa-image"></i>
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-question"></i>
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-paper-plane"></i>
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-paper-plane"></i>
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-paper-plane"></i>
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-paper-plane"></i>
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-paper-plane"></i>
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-paper-plane"></i>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <ul className="list-unstyled CTAs">
                        <li>
                            <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a>
                        </li>
                        <li>
                            <a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default SideBar;