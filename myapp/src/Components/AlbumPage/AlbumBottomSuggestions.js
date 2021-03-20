import { useContext} from "react";
import UserContext from "../../ContextFolder/Context";
import SuggestionCard from './AlbumBottomSuggestionCard'
const AlbumBottomSuggestions = (props) => {
  const genre = props.albumGenre;
  const context = useContext(UserContext);
  const sameGenre = context.myStateData.albums.filter(
    (album) => album.genre === genre
  );
  const Random = Math.floor(Math.random()*sameGenre.length)
  const selection = sameGenre.slice(Random,Random+4)




  return (
    <div className='d-flex mb-5 flex-wrap justify-content-around' >
     
      {selection.map((album) => {
      
        return (
          
          <SuggestionCard
            key={album.id}
            id={album.id}
            title={album.title}
            artist={album.artist}
            releasedYear={album.releaseYear}
            price={album.price}
            image={album.image}
          />
        );
      })}
    </div>
  );
};

export default AlbumBottomSuggestions;
