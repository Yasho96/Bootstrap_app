import '../styles/Cards.css';
import { Card } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1
    }
  };
  return (
    <div className="App">
      <div style={{ position: "relative" }}>
        <Carousel responsive={responsive} className="Carousel">
          <div class="carouselCard">
          <Card className='card'>
              <Card.Img  src= "https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/03/1*u_ULYT4pOBHhBx5bO4596Q.png" className="img" />
              <Card.Body>
              <button>LKR1000</button>
                <Card.Title className='title'>SHERLOCK HOLMES <br/> The man with the twisted lip</Card.Title>
                <Card.Text className="description">
                 Learn basic web development as you build web pages.
                </Card.Text>
                <span class= "starGroup">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-half-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i className='count'>4.8</i>
                </span>
                <div className='icon-group'>
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                  <i className='iconName'>Preview</i>
                  <i class="fa fa-video-camera" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <i className='iconName'>125</i>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div class="carouselCard">
          <Card className='card'>
              <Card.Img  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/a7159230480213.56057cb033583.png" className="img" />
              <Card.Body>
              <button>LKR1000</button>
                <Card.Title className='title'>THE LORD OF THE RINGS <br/> The return of the king</Card.Title>
                <Card.Text className="description">
                  Be the first one to write a review
                </Card.Text>
                <span class= "starGroup">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-half-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i className='count'>4.8</i>
                </span>
                <div className='icon-group'>
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                  <i className='iconName'>Preview</i>
                  <i class="fa fa-video-camera" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <i className='iconName'>125</i>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div class="carouselCard">
          <Card className='card'>
              <Card.Img  src="https://assets.mugglenet.com/wp-content/uploads/2021/02/De-Lucchi-all-Harry-Potter-covers.jpg" className="img" />
              <Card.Body>
              <button>LKR1000</button>
                <Card.Title className='title'>HARRY POTTER <br/> Deathly Hollows</Card.Title>
                <Card.Text className="description">
                  Be the first one to write a review
                </Card.Text>
                <span class= "starGroup">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-half-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i className='count'>4.8</i>
                </span>
                <div className='icon-group'>
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                  <i className='iconName'>Preview</i>
                  <i class="fa fa-video-camera" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <i className='iconName'>125</i>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div class="carouselCard">
          <Card className='card'>
              <Card.Img  src="https://agathachristie.imgix.net/image-store/Landing-Pages-2021/Square_DOTNWebsite.jpg?auto=compress,format&fit=crop&q=80&w=300" className="img" />
              <Card.Body>
              <button>LKR1000</button>
                <Card.Title className='title'>AGATHA CHRISTIE <br/> Death of the Nile</Card.Title>
                <Card.Text className="description">
                   Be the first one to write a review
                </Card.Text>
                <span class= "starGroup">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-half-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i className='count'>4.8</i>
                </span>
                <div className='icon-group'>
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                  <i className='iconName'>Preview</i>
                  <i class="fa fa-video-camera" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <i className='iconName'>125</i>
                </div>
              </Card.Body>
             </Card>
          </div>
          <div class="carouselCard">
          <Card className='card'>
              <Card.Img  src= "https://i.pinimg.com/originals/72/9a/10/729a103c5a7c328d7ea54730fb48b6d8.jpg" className="img" />
              <Card.Body>
              <button>LKR1000</button>
                <Card.Title className='title'>ANNA TODD <br/> After</Card.Title>
                <Card.Text className="description">
                  Be the first one to write a review
                </Card.Text>
                <div class= "starGroup">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-half-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i className='count'>4.8</i>
                </div>
                <div className='icon-group'>
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                  <i className='iconName'>Preview</i>
                  <i class="fa fa-video-camera" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <i className='iconName'>125</i>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div class="carouselCard">
          <Card className='card'>
              <Card.Img  src="https://agathachristie.imgix.net/news/Inline_ABCExtract.png" className="img" />
              <Card.Body>
              <button>LKR1000</button>
                <Card.Title className='title'>AGATHA CHRISTIE <br/> The ABC Murders</Card.Title>
                <Card.Text className="description">
                   Be the first one to write a review
                </Card.Text>
                <span class= "starGroup">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-half-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i className='count'>4.8</i>
                </span>
                <div className='icon-group'>
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                  <i className='iconName'>Preview</i>
                  <i class="fa fa-video-camera" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <i className='iconName'>125</i>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div class="carouselCard">
          <Card className='card'>
              <Card.Img  src="https://s3images.coroflot.com/user_files/individual_files/original_496994_qaNJg7V3AiG3NpOLrzMsdUw3M.jpg" className="img" />
              <Card.Body>
              <button>LKR1000</button>
                <Card.Title className='title'>J.R.R. TOLKIEN <br/> The Hobbit </Card.Title>
                <Card.Text className="description">
                  Be the first one to write a review
                </Card.Text>
                <span class= "starGroup">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-half-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i className='count'>4.8</i>
                </span>
                <div className='icon-group'>
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                  <i className='iconName'>Preview</i>
                  <i class="fa fa-video-camera" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <i className='iconName'>125</i>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div class="carouselCard">
          <Card className='card'>
              <Card.Img  src="https://www.getlitt.co/blog/wp-content/uploads/2019/05/list-of-2016-sherlock-holmes-books.jpg" className="img" />
              <Card.Body>
              <button>LKR1000</button>
                <Card.Title className='title'>SHERLOCK HOLMES <br/> Study In Scarlet</Card.Title>
                <Card.Text className="description">
                  Be the first one to write a review
                </Card.Text>
                <span class= "starGroup">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-half-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i className='count'>4.8</i>
                </span>
                <div className='icon-group'>
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                  <i className='iconName'>Preview</i>
                  <i class="fa fa-video-camera" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <i className='iconName'>125</i>
                </div>
              </Card.Body>
             </Card>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
