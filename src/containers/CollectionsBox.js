import React, {Component} from 'react'
import Collection from './Collection'
import {Form} from 'react-bootstrap'

export class CollectionsBox extends Component {

  render() {
    return (
      <div>
        <h4>Your Topics</h4>
        <Form onSubmit={this.props.createCollection}>
          <Form.Control 
            type="text" 
            name="collectionName" 
            placeholder='Create a New Collection'
            value={this.props.collectionName}
            onChange={this.props.handleChange}
          />
          <input type="submit" value="Add Collection"/>
        </Form>
        <br/>
        {this.props.collections.sort((a, b) => a.name.localeCompare(b.name)).map(collection =>
          <Collection 
            key={collection.id} 
            collection={collection}
            handleChange={this.props.handleChange}
            notepad={this.props.notepad}
            saveNotes={this.props.saveNotes}
            editName={this.props.editName}
            collectionName={this.props.collectionName}
            updateCollectionName={this.props.updateCollectionName}
            deleteCollection={this.props.deleteCollection}
            deleteClipping={this.props.deleteClipping}
          />
        )} 
      </div>
    )
  }

}

export default CollectionsBox
