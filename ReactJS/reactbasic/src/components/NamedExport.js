import React from "react";
export const Home = ()=><h1>Home Page</h1>
export const About = ()=><h1>About Page</h1>
export const Contact = ()=><h1>Contact Page</h1>

export function Product(){
    return<h1>Product Page</h1>
}
export class Blog extends React.Component
{
    render()
    {
        return<h1>Blog Page</h1>
    }
    //In App.js import {Home,Contact,About,Product,Blog} from "./components/NamedExport";
}