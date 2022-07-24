import {Component} from "react";
import "./note-card.scss"
class NoteCard extends Component{
    render() {
        return (
            <div className="note">
                <h2>{this.props.note}</h2>
            </div>
        )
    }
}

export default NoteCard