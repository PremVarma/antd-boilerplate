import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
const { SubMenu } = Menu;
const SidebarItem = () => {
  return (
    <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="home" />
            <span>Dashboard</span>
          </span>
        }
      >
        <Menu.Item key="1">
          <NavLink to="/">Google Analytics Social Media</NavLink>
        </Menu.Item>
        <Menu.Item key="2">Fintech / Business Dashboard</Menu.Item>
        <Menu.Item key="3">Site Performance Dashboard</Menu.Item>
        <Menu.Item key="4">Ecommerce</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span>
            <Icon type="mail" />
            <span>Email</span>
          </span>
        }
      >
        <Menu.Item key="5">Inbox</Menu.Item>
        <Menu.Item key="6">Read Email</Menu.Item>
        <Menu.Item key="7">Compose Email</Menu.Item>
      </SubMenu>
      <Menu.Item key="8">
        <Icon type="message" />
        <span>Chat</span>
      </Menu.Item>

      <SubMenu
        key="sub3"
        title={
          <span>
            <Icon type="shopping-cart" />
            <span>eCommerce</span>
          </span>
        }
      >
        <Menu.Item key="9">Products grid</Menu.Item>
        <Menu.Item key="10">Products list</Menu.Item>
        <Menu.Item key="11">Product edit</Menu.Item>
        <Menu.Item key="12">Product detail</Menu.Item>
        <Menu.Item key="13">Cart</Menu.Item>
        <Menu.Item key="14">Orders</Menu.Item>
        <Menu.Item key="15">Credit Card</Menu.Item>
        <Menu.Item key="16">Sellers</Menu.Item>
        <Menu.Item key="17">Invoices</Menu.Item>
        <Menu.Item key="18">Transactions</Menu.Item>
      </SubMenu>
      <Menu.Item key="19">
        <Icon type="calendar" />
        <span>Calendar</span>
      </Menu.Item>
      <SubMenu
        key="sub4"
        title={
          <span>
            <Icon type="layout" />
            <span>Layouts</span>
          </span>
        }
      >
        <Menu.Item key="20">Sidebar with User</Menu.Item>
        <Menu.Item key="21">Light Sidebar</Menu.Item>
        <Menu.Item key="22">Dark Sidebar</Menu.Item>
        <Menu.Item key="23">Light Topbar</Menu.Item>
        <Menu.Item key="24">Dark Topbar</Menu.Item>
        <Menu.Item key="25">Sidebar Collapsed</Menu.Item>
      </SubMenu>

      <SubMenu
        key="sub5"
        title={
          <span>
            <Icon type="user" />
            <span>Profile</span>
          </span>
        }
      >
        <Menu.Item key="26">Profile</Menu.Item>
        <Menu.Item key="27">Settings</Menu.Item>
        <Menu.Item key="28">Login</Menu.Item>
        <Menu.Item key="29">Register</Menu.Item>
        <Menu.Item key="30">Forgot Password</Menu.Item>
      </SubMenu>

      <SubMenu
        key="sub6"
        title={
          <span>
            <Icon type="folder" />
            <span>Pages</span>
          </span>
        }
      >
        <Menu.Item key="31">Team</Menu.Item>
        <Menu.Item key="32">Users</Menu.Item>
        <Menu.Item key="33">Gallery</Menu.Item>
        <Menu.Item key="34">Pricing</Menu.Item>
        <Menu.Item key="35">Faq`s</Menu.Item>
        <Menu.Item key="36">Search Results</Menu.Item>
        <Menu.Item key="37">Coming Soon</Menu.Item>
        <Menu.Item key="38">404</Menu.Item>
      </SubMenu>
      <p>Components</p>
      <SubMenu
        key="sub7"
        title={
          <span>
            <Icon type="ant-design" />
            <span>UI Elements</span>
          </span>
        }
      ></SubMenu>

      <SubMenu
        key="sub8"
        title={
          <span>
            <Icon type="appstore" />
            <span>Icons</span>
          </span>
        }
      >
        <Menu.Item key="39">Feather icons (svg)</Menu.Item>
        <Menu.Item key="40">Font Awesome</Menu.Item>
        <Menu.Item key="41">Line Awesome</Menu.Item>
        <Menu.Item key="42">Ant Design icons</Menu.Item>
      </SubMenu>

      <SubMenu
        key="sub9"
        title={
          <span>
            <Icon type="bar-chart" />
            <span>Charts</span>
          </span>
        }
      >
        <Menu.Item key="43">
          <NavLink to="/chartjs">Chart Js</NavLink>
        </Menu.Item>
        <Menu.Item key="44">
          <NavLink to="/google-chart">Google Chart</NavLink>
        </Menu.Item>

        <SubMenu
          key="sub12"
          title={
            <span>
              <Icon type="area-chart" />
              <span>Recharts</span>
            </span>
          }
        >
          <Menu.Item key="45">
            <NavLink to="/recharts/bar">Bar Chart</NavLink>
          </Menu.Item>
          <Menu.Item key="46">
            <NavLink to="/recharts/area">Area Chart</NavLink>
          </Menu.Item>
        </SubMenu>
      </SubMenu>

      <SubMenu
        key="sub10"
        title={
          <span>
            <Icon type="table" />
            <span>Table</span>
          </span>
        }
      ></SubMenu>

      <SubMenu
        key="sub11"
        title={
          <span>
            <Icon type="form" />
            <span>Forms</span>
          </span>
        }
      ></SubMenu>
      <SubMenu
        key="sub12"
        title={
          <span>
            <Icon type="heat-map" />
            <span>Maps</span>
          </span>
        }
      ></SubMenu>
    </Menu>
  );
};
export default SidebarItem;
