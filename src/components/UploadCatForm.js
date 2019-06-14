import React from 'react'
import { uploadCat } from '../actions/cats.js'
import { connect } from 'react-redux'

class UploadCatForm extends React.Component {
    constructor(){
      super()
      this.state = {
        formInput: {
          name: "",
          image_url: "",
          status: "undecided",
        }
      }
    }

    handleChange = (event) => {
      const { name, value } = event.target
      this.setState({
        formInput: {
          ...this.state.formInput,
          [name]: value
        }
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      this.props.uploadCat(this.state.formInput).then(()=>{this.setState(
        {
          formInput: {
            name: "",
            image_url: "",
            status: "undecided",
          }
        }
      )})
    }

    render() {
      return (
        <div className="UploadCatFormDiv">
        <h4>Upload a Cat</h4>
          <form className="UploadCatForm" onSubmit={this.handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="name"
              value={this.state.formInput.name}
              onChange={this.handleChange}
            />
            <input
              name="image_url"
              type="text"
              placeholder="image_url"
              value={this.state.formInput.image_url}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value="Upload a Cat"
            />

          </form>
        </div>

      )
    }
}

export default connect(null, { uploadCat })(UploadCatForm)
