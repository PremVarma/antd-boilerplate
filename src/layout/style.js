import Styled from 'styled-components';

const Div = Styled.div`
    header{
        box-shadow: 0 2px 30px ${({ theme }) => theme['gray-solid']}10;
        ${({ darkMode }) => (darkMode ? `background: #272B41;` : '')};
        z-index: 999;

        .ant-btn-link{
            ${({ darkMode }) =>
              darkMode ? `background: #272B41;border-color: #272B41;color: #7D808D !important` : ''};
        }

        .head-example{
            ${({ darkMode }) => (darkMode ? `color: #A8AAB3;` : '')};
        }
    }
    .header-more{
        .head-example{
            ${({ darkMode }) => (darkMode ? `color: #A8AAB3;` : '')};
        }
    }
    .striking-logo{
        @media only screen and (max-width: 875px){
            margin-right: 4px;
        }
        @media only screen and (max-width: 767px){
            margin-right: 0;
        }
        img{
            max-width: 120px;
            width: 100%;
        }
    }
    .certain-category-search-wrapper{
        ${({ darkMode }) => (darkMode ? `border-right: 1px solid #272B41;` : '')};
        @media only screen and (max-width: 767px){
            padding: 0 15px;
        }
        input{
            ${({ darkMode }) => (darkMode ? `background: #272B41;` : '')};
            ${({ darkMode }) => (darkMode ? `color: #fff;` : '#5A5F7D')};
            @media only screen and (max-width: 875px){
                padding-left: 5px;
            }
        }
    }
    
    .navbar-brand{
        button{
            padding: 0 25px 0 15px;
            line-height: 0;
            margin-top: 4px;
            color: ${({ theme }) => theme['extra-light-color']};
            @media only screen and (max-width: 875px){
                padding: 0 25px 0 10px;
            }
            @media only screen and (max-width: 767px){
                padding: 0 15px 0 0px;
            }
        }
    }

    /* Sidebar styles */
    .ant-layout-sider{
        box-shadow: 0 0 30px #9299B810;
        @media (max-width: 991px){
            box-shadow: 0 0 10px #00000020;
        }
        &.ant-layout-sider-dark{
            background: ${({ theme }) => theme['dark-color']};
            .ant-layout-sider-children{
                .ant-menu{
                    .ant-menu-submenu-inline{
                        > .ant-menu-submenu-title{
                            padding: 0 30px !important;
                        }
                    }
                    .ant-menu-item{
                        padding: 0 30px !important;
                    }
                }
            }
        }
        
        .ant-layout-sider-children{
            padding-bottom: 15px;
            >.sidebar-nav-title{
                margin-top: 8px;
            }

            .ant-menu{
                overflow-x: hidden;
                border-right: 0 none;
                .ant-menu-submenu, .ant-menu-item{
                    .feather{
                        width: 16px;
                        font-size: 16px;
                        color: ${({ theme }) => theme['extra-light-color']};
                    }
                    span{
                        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 20px;
                        display: inline-block;
                        color: ${({ theme }) => theme['dark-color']};
                        transition: 0.3s ease;
                    }
                }
                .ant-menu-submenu{
                    .ant-menu-submenu-title{
                        display: flex;
                        align-items: center;
                    }
                }
                .ant-menu-submenu-inline{
                    > .ant-menu-submenu-title{
                        display: flex;
                        align-items: center;
                        padding: 0 15px !important;
                        svg,
                        img{
                            width: 16px;
                            height: 16px;
                        }
                                                
                        .ant-menu-submenu-arrow{
                            right: auto;
                            ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 24px;
                            &:after,
                            &:before{
                                width: 7px;
                                background: #868EAE;
                                height: 1.25px;
                            }
                            &:before{
                                transform: rotate(45deg) ${({ theme }) =>
                                  !theme.rtl ? 'translateY(-3.3px)' : 'translateY(3.3px)'};
                            }
                            &:after{
                                transform: rotate(-45deg) ${({ theme }) =>
                                  theme.rtl ? 'translateY(-3.3px)' : 'translateY(3.3px)'};
                            }
                        }
                    }
                    &.ant-menu-submenu-open{
                        > .ant-menu-submenu-title{
                            .ant-menu-submenu-arrow{
                                transform: translateY(4px);
                                &:before{
                                    transform: rotate(45deg) translateX(-3.3px);
                                }
                                &:after{
                                    transform: rotate(-45deg) translateX(3.3px);
                                }
                            }
                        }
                    }
                    .ant-menu-item{
                        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 50px !important;
                        ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 0 !important;
                        transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
                    }
                }
                .ant-menu-item{
                    display: flex;
                    align-items: center;
                    padding: 0 15px !important;
                    &.ant-menu-item-active{
                        border-radius: 4px;
                        ${({ darkMode }) => (darkMode ? `background-color: rgba(255, 255, 255, .05);` : '')};
                    }
                    a{
                        display: flex !important;
                        align-items: center;
                        .feather{
                            width: 16px;
                            color: ${({ theme }) => theme['extra-light-color']};
                        }
                        span{
                            padding-left: 20px;
                            display: inline-block;
                            color: ${({ theme }) => theme['dark-color']};
                        }
                    }
                    &.ant-menu-item-selected{
                        svg,
                        i{
                            color: ${({ theme }) => theme['primary-color']};
                        }
                    }
                }
                .ant-menu-submenu,
                .ant-menu-item{
                    ${({ theme }) => theme.rtl && `padding-right: 5px;`}
                    
                    &.ant-menu-item-selected{
                        border-radius: 4px;
                        &:after{
                            content: none;
                        }
                    }
                    &.ant-menu-submenu-active{
                        border-radius: 4px;
                        ${({ darkMode }) => (darkMode ? `background-color: rgba(255, 255, 255, .05);` : '')};
                    }
                }
                .sidebar-nav-title{
                    margin-top: 40px;
                    margin-bottom: 24px;
                }
                &.ant-menu-inline-collapsed{
                    .ant-menu-submenu{
                        text-align: left;                        
                        .ant-menu-submenu-title{
                            padding: 0 20px;
                            justify-content: center;
                        }
                    }
                    .ant-menu-item{
                        padding: 0 20px !important;
                        justify-content: center;
                    }
                    .ant-menu-submenu, .ant-menu-item{
                        span{
                            display: none;
                        }
                    }
                }
            }
        }
        .sidebar-nav-title{
            font-size: 12px;
            font-weight: 500;
            text-transform: uppercase;
            ${({ darkMode }) => (darkMode ? `color: rgba(255, 255, 255, .38);` : 'color: #9299B8;')};
            padding: 0 ${({ theme }) => (theme.rtl ? '20px' : '15px')};
            display: flex;
        }
        &.ant-layout-sider-collapsed{
            padding: 15px 0px 55px !important;
            .sidebar-nav-title{
                display: none;
            }
            & + .atbd-main-layout{
                margin-left: 80px;
            }
        }
    }
    @media only screen and (max-width: 991px){
        .ant-layout-sider.ant-layout-sider-collapsed{
            left: -80px !important;
        }

    }

    .atbd-main-layout{
    ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 280px;
        margin-top: 64px;
        transition: 0.3s ease;
        @media only screen and (max-width: 991px){
            margin-left: auto !important;
        }
    }

    /* Mobile Actions */
    .mobile-action{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        display: inline-flex;
        align-items: center;
        @media only screen and (max-width: 767px){
            right: 0;
        }
        a{
            display: inline-flex;
            color: ${({ theme }) => theme['light-color']};
            &.btn-search{
                margin-right: 18px;
            }
            svg{
                width: 20px
                height: 20px;
            }
        }
    }
    .admin-footer{
        .admin-footer__copyright{
            display: inline-block;
            width: 100%;
            color: ${({ theme }) => theme['light-color']};
            @media only screen and (max-width: 767px){
                text-align: center;
                margin-bottom: 10px;
            }
        }
        .admin-footer__links{
            text-align: right;
            @media only screen and (max-width: 767px){
                text-align: center;
            }
            a{
                color: ${({ theme }) => theme['light-color']};
                &:not(:last-child){
                    margin-right: 15px;
                }
                &:hover{
                    color: ${({ theme }) => theme['primary-color']};
                }
            }
        }
    }    
`;

const SmallScreenAuthInfo = Styled.div`
        ${({ darkMode }) => (darkMode ? `background: #272B41;` : 'background: #fff')};
        width: 100%;
        position: fixed;
        margin-top: ${({ hide }) => (hide ? '0px' : '64px')};
        top: 0;
        left: 0;
        transition: .3s;
        opacity: ${({ hide }) => (hide ? 0 : 1)}
        z-index: ${({ hide }) => (hide ? -1 : 1)}
        box-shadow: 0 2px 30px #9299b810;

`;

const SmallScreenSearch = Styled.div`
        ${({ darkMode }) => (darkMode ? `background: #272B41;` : 'background: #fff')};
        width: 100%;
        position: fixed;
        margin-top: ${({ hide }) => (hide ? '0px' : '64px')};
        top: 0;
        left: 0;
        transition: .3s;
        opacity: ${({ hide }) => (hide ? 0 : 1)}
        z-index: ${({ hide }) => (hide ? -1 : 999)}
        box-shadow: 0 2px 30px #9299b810;

`;

const ModeSwitch = Styled.div`
    background: #ddd;
    width: 200px;
    position: fixed;
    right: 0;
    top: 50%;
    margin-top: -100px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    padding: 15px;
    border-radius: 5px;
    button{
        margin-top: 5px;
    }
`;
export { Div, SmallScreenAuthInfo, SmallScreenSearch, ModeSwitch };
