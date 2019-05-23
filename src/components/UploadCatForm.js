import React from 'react'

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



    render() {
      return (
        <div className="UploadCatFormDiv">
        <h4>Upload a Cat</h4>
          <form
            className="UploadCatForm"
            onSubmit={event=>this.props.addCat(event, this.state.formInput)}
          >
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

export default UploadCatForm
