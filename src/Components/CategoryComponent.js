import '../App.css';
import React from "react";
class CategoryComponent extends React.Component {
    render() {
        return(
      <>
      { <h2><span key={this.props.selectedCategory}>
       {this.props.selectedCategory}
       </span></h2>
       }
        </>);
    }
  }

export default CategoryComponent;