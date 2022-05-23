import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import './Featured.scss'

const Featured = ({type}) => {
    return (
        <>
            <div className='featured'>
            {type && (
                <div className='category'>
                    <span>{type==="movie" ? "Movies" : "TVSeries"}</span>
                    <select name="genre" id="genre">
                      <option>Genre</option>
                      <option value="adventure">Adventure</option>
                      <option value="adventure">Adventure</option>
                      <option value="adventure">Adventure</option>
                      <option value="adventure">Adventure</option>
                      <option value="adventure">Adventure</option>
                      <option value="adventure">Adventure</option>
                      <option value="adventure">Adventure</option>
                      <option value="adventure">Adventure</option>
                      <option value="adventure">Adventure</option>
                      <option value="adventure">Adventure</option>
                      <option value="adventure">Adventure</option>
                      <option value="adventure">Adventure</option>
                    </select>
                </div>
            )}
                <img src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_14/2812356/190405-chilling-adventures-of-sabrina-1-ew-656p.jpg" alt="" />
                <div className='info'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chilling_Adventures_of_Sabrina_Logo.svg/1200px-Chilling_Adventures_of_Sabrina_Logo.svg.png" alt="" />
                    <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum!
                    </span>
                    <div className='buttons'>
                        <button className='play'><PlayArrow/><span>Play</span></button>
                        <button className='more'><InfoOutlined/><span>Info</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured