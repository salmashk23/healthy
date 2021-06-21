import React from 'react';
import Modal from 'react-modal';
import {ModalHeader,ModalBody,Label,FormGroup,ModalFooter,Button} from 'reactstrap';
import '../../../../general/modal/modal_card.css';


export class AddRecipe extends React.Component {
  constructor(props) {//create a state to handle the new recipe
    super(props);
    this.state = {image:"", name: "", written_by:"", ingredients: "", steps:""};
    this.handleRecipeImageChange = this.handleRecipeImageChange.bind(this);
    this.handleRecipeNameChange = this.handleRecipeNameChange.bind(this);
    this.handleRecipeByChange = this.handleRecipeByChange.bind(this);
    this.handleRecipeIngredientsChange = this.handleRecipeIngredientsChange.bind(this);
    this.handleRecipeStepsChange = this.handleRecipeStepsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleRecipeImageChange(e) {//change the image to reflect user input
    this.setState({image: e.target.value});
  }
  handleRecipeNameChange(e) {//change the name to reflect user input
    this.setState({name: e.target.value});
  }
  handleRecipeByChange(e) {//change the written by to reflect user input
    this.setState({written_by: e.target.value});
  }
  handleRecipeIngredientsChange(e) {//change the ingredients to reflect user input
    this.setState({ingredients: e.target.value});
  }
  handleRecipeStepsChange(e) {//change the steps to reflect user input
    this.setState({steps: e.target.value});
  }
  handleSubmit(e) {//get the recipe data, manipulate it and call the function for creating a new recipe
    e.preventDefault();
    const onAdd = this.props.onAdd;
    const regExp = /\s*;\s*/;
    var newImage = this.state.image;
    var newName = this.state.name;
    var newBy = this.state.written_by;
    var newIngredients = this.state.ingredients.split(regExp);
    var newSteps = this.state.steps.split(regExp);
    var newRecipe = {image: newImage, name: newName, written_by: newBy, ingredients: newIngredients,Steps: newSteps};
    onAdd(newRecipe);
    this.setState({image:"" , name: "", written_by:"", ingredients: "" , steps:""});
  }
  handleCancel() {
    const onAddModal = this.props.onAddModal;
    this.setState({image:"" , name: "", written_by:"", ingredients: "", steps:""});
    onAddModal();
  }
  
  render() {
    const onShow = this.props.onShow;
    var regex1 = /^\S/;
    var regex2 = /^[^;\s]/;
    var regex3 = /[^;\s]$/;
    const validRecipe = regex1.test(this.state.name) && regex2.test(this.state.ingredients) && regex3.test(this.state.ingredients) && regex2.test(this.state.steps) && regex3.test(this.state.steps);
    return(
      <Modal 
        show={onShow}
        onHide={this.handleCancel}
        className="mymodal"
        overlayClassName="myoverlay"
      >
        <ModalHeader closeButton>
          <Modal.Title>New Recipe</Modal.Title>
        </ModalHeader>
        <ModalBody>
          <FormGroup controlId="formControlsImage">
            <Label>Recipe Image</Label>
            <img src={this.state.image}  onChange={this.handleRecipeImageChange} width="240px" height="240px"   />
          </FormGroup>
          <FormGroup controlId="formControlsName">
            <Label>Recipe Name</Label>
            <div className="form-control" type="text" required onChange={this.handleRecipeNameChange} value={this.state.name} placeholder="Enter Name" />
          </FormGroup>
          <FormGroup controlId="formControlsBy">
            <Label>Recipe Name</Label>
            <div  className="form-control" type="text" required onChange={this.handleRecipeByChange} value={this.state.written_by} placeholder="Written By ..." />
          </FormGroup>
          <FormGroup controlId="formControlsIngredients">
            <Label>Recipe Ingredients</Label>
            <div className="form-control" componentClass="textarea" type="text" required onChange={this.handleRecipeIngredientsChange} value={this.state.ingredients} placeholder="Enter Ingredients (separate by ;)" />
          </FormGroup>
          <FormGroup controlId="formControlsIngredients">
            <Label>Recipe Steps</Label>
            <div className="form-control" componentClass="textarea" type="text" required onChange={this.handleRecipeStepsChange} value={this.state.steps} placeholder="Enter Steps (separate by ;)" />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button disabled={!validRecipe} bsStyle="success" onClick={this.handleSubmit}>Save Recipe</Button>
        </ModalFooter>
      </Modal>
    );
  }
};

export default AddRecipe;