/* eslint-disable */
import React from "react";
import icStar from '../assets/img/ic-star.svg';

const FeedComponent = (props) => {

  return (
    <div className="col-md-9">
      <div className="mb-4 px-3 d-flex justify-content-between">
        <div className="d-flex">
          <h2>All {props.title}</h2>
          <p className="total-grey ml-2">30 {props.title}</p>
        </div>
        <div className="form-group d-flex">
          <label className="sort">Sort By</label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Newest</option>
            <option value="1">Oldest</option>
          </select>
        </div>
      </div>
      <div className="row px-2">
        <div className="col-md-4">
          <div className="card-recomend card-list-recomend">
            <div className="recomend-card-img">
              <img src={require("../assets/img/banner/education/banner-edu-01.jpg")} />
            </div>
            <div className="recomend-edu-info">
              <h3>Ilustrator CC 2020 Masterclass</h3>
              <label>Martin Perhiniak</label>
              <p>
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <b>5.0</b> (20.578)
              </p>
              <h5>Rp. 236.600<span>Rp. 2.800.000</span></h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-recomend card-list-recomend">
            <div className="recomend-card-img">
              <img src={require("../assets/img/banner/education/banner-edu-02.jpg")} />
            </div>
            <div className="recomend-edu-info">
              <h3>Ilustrator CC 2020 Masterclass</h3>
              <label>Martin Perhiniak</label>
              <p>
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <b>5.0</b> (20.578)
              </p>
              <h5>Rp. 236.600<span>Rp. 2.800.000</span></h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-recomend card-list-recomend">
            <div className="recomend-card-img">
              <img src={require("../assets/img/banner/education/banner-edu-03.jpg")} />
            </div>
            <div className="recomend-edu-info">
              <h3>Ilustrator CC 2020 Masterclass</h3>
              <label>Martin Perhiniak</label>
              <p>
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <b>5.0</b> (20.578)
              </p>
              <h5>Rp. 236.600<span>Rp. 2.800.000</span></h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-recomend card-list-recomend">
            <div className="recomend-card-img">
              <img src={require("../assets/img/banner/education/banner-edu-01.jpg")} />
            </div>
            <div className="recomend-edu-info">
              <h3>Ilustrator CC 2020 Masterclass</h3>
              <label>Martin Perhiniak</label>
              <p>
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <b>5.0</b> (20.578)
              </p>
              <h5>Rp. 236.600<span>Rp. 2.800.000</span></h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-recomend card-list-recomend">
            <div className="recomend-card-img">
              <img src={require("../assets/img/banner/education/banner-edu-01.jpg")} />
            </div>
            <div className="recomend-edu-info">
              <h3>Ilustrator CC 2020 Masterclass</h3>
              <label>Martin Perhiniak</label>
              <p>
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <b>5.0</b> (20.578)
              </p>
              <h5>Rp. 236.600<span>Rp. 2.800.000</span></h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-recomend card-list-recomend">
            <div className="recomend-card-img">
              <img src={require("../assets/img/banner/education/banner-edu-01.jpg")} />
            </div>
            <div className="recomend-edu-info">
              <h3>Ilustrator CC 2020 Masterclass</h3>
              <label>Martin Perhiniak</label>
              <p>
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <b>5.0</b> (20.578)
              </p>
              <h5>Rp. 236.600<span>Rp. 2.800.000</span></h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-recomend card-list-recomend">
            <div className="recomend-card-img">
              <img src={require("../assets/img/banner/education/banner-edu-01.jpg")} />
            </div>
            <div className="recomend-edu-info">
              <h3>Ilustrator CC 2020 Masterclass</h3>
              <label>Martin Perhiniak</label>
              <p>
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <b>5.0</b> (20.578)
              </p>
              <h5>Rp. 236.600<span>Rp. 2.800.000</span></h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-recomend card-list-recomend">
            <div className="recomend-card-img">
              <img src={require("../assets/img/banner/education/banner-edu-01.jpg")} />
            </div>
            <div className="recomend-edu-info">
              <h3>Ilustrator CC 2020 Masterclass</h3>
              <label>Martin Perhiniak</label>
              <p>
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <b>5.0</b> (20.578)
              </p>
              <h5>Rp. 236.600<span>Rp. 2.800.000</span></h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-recomend card-list-recomend">
            <div className="recomend-card-img">
              <img src={require("../assets/img/banner/education/banner-edu-01.jpg")} />
            </div>
            <div className="recomend-edu-info">
              <h3>Ilustrator CC 2020 Masterclass</h3>
              <label>Martin Perhiniak</label>
              <p>
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <b>5.0</b> (20.578)
              </p>
              <h5>Rp. 236.600<span>Rp. 2.800.000</span></h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-recomend card-list-recomend">
            <div className="recomend-card-img">
              <img src={require("../assets/img/banner/education/banner-edu-01.jpg")} />
            </div>
            <div className="recomend-edu-info">
              <h3>Ilustrator CC 2020 Masterclass</h3>
              <label>Martin Perhiniak</label>
              <p>
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <b>5.0</b> (20.578)
              </p>
              <h5>Rp. 236.600<span>Rp. 2.800.000</span></h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-recomend card-list-recomend">
            <div className="recomend-card-img">
              <img src={require("../assets/img/banner/education/banner-edu-01.jpg")} />
            </div>
            <div className="recomend-edu-info">
              <h3>Ilustrator CC 2020 Masterclass</h3>
              <label>Martin Perhiniak</label>
              <p>
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <b>5.0</b> (20.578)
              </p>
              <h5>Rp. 236.600<span>Rp. 2.800.000</span></h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-recomend card-list-recomend">
            <div className="recomend-card-img">
              <img src={require("../assets/img/banner/education/banner-edu-01.jpg")} />
            </div>
            <div className="recomend-edu-info">
              <h3>Ilustrator CC 2020 Masterclass</h3>
              <label>Martin Perhiniak</label>
              <p>
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <b>5.0</b> (20.578)
              </p>
              <h5>Rp. 236.600<span>Rp. 2.800.000</span></h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-recomend card-list-recomend">
            <div className="recomend-card-img">
              <img src={require("../assets/img/banner/education/banner-edu-01.jpg")} />
            </div>
            <div className="recomend-edu-info">
              <h3>Ilustrator CC 2020 Masterclass</h3>
              <label>Martin Perhiniak</label>
              <p>
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <b>5.0</b> (20.578)
              </p>
              <h5>Rp. 236.600<span>Rp. 2.800.000</span></h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-recomend card-list-recomend">
            <div className="recomend-card-img">
              <img src={require("../assets/img/banner/education/banner-edu-01.jpg")} />
            </div>
            <div className="recomend-edu-info">
              <h3>Ilustrator CC 2020 Masterclass</h3>
              <label>Martin Perhiniak</label>
              <p>
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <b>5.0</b> (20.578)
              </p>
              <h5>Rp. 236.600<span>Rp. 2.800.000</span></h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-recomend card-list-recomend">
            <div className="recomend-card-img">
              <img src={require("../assets/img/banner/education/banner-edu-01.jpg")} />
            </div>
            <div className="recomend-edu-info">
              <h3>Ilustrator CC 2020 Masterclass</h3>
              <label>Martin Perhiniak</label>
              <p>
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <img src={icStar} />
                <b>5.0</b> (20.578)
              </p>
              <h5>Rp. 236.600<span>Rp. 2.800.000</span></h5>
            </div>
          </div>
        </div>
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
        <div className="col-md-12 seo-description">
          <h6>Explore Illustration Classes Online</h6>
          <p>What will you discover as you learn more about illustration? With these Skillshare classes, you can take your skills further, exploring new techniques and topics, like figure drawing, lighting, anatomy, textures, expression, hand lettering, and logo and graphic design. Whether you’re looking for illustration basics for beginners, or you’re an artist looking to take your illustration to the next level, you’ll find tutorials for every skill level, taught by expert illustrators, artists, designers and creative professionals. You can discover different illustration styles, like sketching, comics, editorial and architectural drawing, and learn to use digital illustration tools like Adobe illustrator, Procreate, and Adobe Fresco. With hands-on projects, short lessons, and a community of creators, these Skillshare classes will set your creative journey on the right path.</p>
        </div>
      </div>
    </div>
  );
}

export default FeedComponent;