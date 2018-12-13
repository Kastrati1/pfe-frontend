import React from "react";
import CategoryComponent from "./category_component";

import sendApiRequest from "../../utils/api";


class CategoryContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      isloading:true,
      products:[]
    };
    this.getproductsbycat = this.getproductsbycat.bind(this);
    this.getcategories = this.getcategories.bind(this);
  }
  getproductsbycat(cat_id) {
    const url = "app1/productsByCat";
    const obj = {name : cat_id}
    sendApiRequest({ url , method:"POST", params : obj })
      .then(response => {
        console.log(response);
        this.setState({ products: response});
      })
      .catch(err => {
        console.log("Error in getCat container", err);
        
      });
  
  }

  getcategories(){
    const url = "app1/allCategories";
    sendApiRequest({ url })
      .then(response => {
        
        this.setState({ categories: response, isloading:false });

      })
      .catch(err => {
        console.log("Error in getCat container", err);
        this.setState({isloading:false });
      });
  }
  

  componentWillMount() {
    this.getcategories();
  }

  render() {
    if(this.state.isloading){
      return <h1>is loading...</h1>
    }
    return (
      <React.Fragment>        
        <CategoryComponent getproductsbycat={this.getproductsbycat} categories={this.state.categories} products = {this.state.products}/>
      </React.Fragment>
    );
  }
}

export default CategoryContainer;
