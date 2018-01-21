import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
  renderField(field){
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    //field argument contains event handlers!
    return (
      <div className={className}>
        <label>{field.foolabel}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-danger">
          {touched ? error : ''}
        </div>
      </div>
    )
  }
  onSubmit(values){
    console.log(values);
  }
  render(){
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          component={this.renderField}
          foolabel="Title"
        />
        <Field
          name="categories"
          component={this.renderField}
          foolabel="Categories"
        />
        <Field
          name="content"
          component={this.renderField}
          foolabel="Enter your Blog!"
        />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
          <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
      </form>
    )
  }
}

function validate(values){
  //console.log(values) === {title:'as', categories:'adffsda', content:'adsf'}
  const errors = {};

  //Validate the inputs from values
  if(!values.title){errors.title="Enter a title!";}
  if(!values.categories){errors.categories="Enter some categories!";}
  if(!values.content){errors.content="Enter content!";}

  //If errors object empty, valid form inputs.
  //Else, issues.
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
