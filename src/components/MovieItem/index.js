// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {eachMovieDetails} = props
  const {thumbnailUrl, videoUrl} = eachMovieDetails

  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} className="thumbnail" alt="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              aria-label="Save"
              className="close-button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="movie-player-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
