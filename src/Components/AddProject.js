import React, {Component} from 'react';
import uuid from 'uuid';
class AddProject extends Component {
    constructor(){
        super();
        this.state = {
            newProject:{},
            titleError: ''
        };
    }
    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'Mobile Development']
    };

    handleSubmit(e) {
        e.preventDefault();
        console.log('submitted', this.refs.title.value);
        if(this.refs.title.value === ''){
            this.setState({
                titleError:"Title is required"
            });
        } else {
            this.setState({
                newProject: {
                    id: uuid.v4(),
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }
            }, function(){
                this.props.addProject(this.state.newProject);
            });
        }
    }
    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });
        return (
            <div className="Projects">
                <h3> Add Project </h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                    <label>Title</label><br/>
                    <input type="text" ref="title"/><br/>
                        <small>{this.state.titleError}</small>
                    </div>
                    <div>
                        <label>Categories</label><br/>
                        <select ref="category">
                            {categoryOptions}
                        </select>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default AddProject;
