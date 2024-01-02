import React from 'react'

const Rewards = () => {
  return (
   <>
      <div id="page-container">
      <div className="section pt-5">
  {/* BEGIN container */}
  <div className="container">
    {/* BEGIN row */}
    <div className="row">
      {/* BEGIN col-3 */}
      <div className="col-lg-3">
        <div className="card rounded-2 mb-5">
          <div className="card-body p-4">
            <h4 className="text-default text-gray-500 fs-17px">
              Rewards balance
            </h4>
            <div className="row">
              <div className="col-6">
                <div className="mb-3 fs-2 d-flex align-items-center justify-content-center position-relative">
                  <img src="../assets/img/icon/AddProductsToCartOrBasket.svg" />
                </div>
              </div>
              <div className="col-6 align-self-center">
                <p>
                  {" "}
                  <b className="text-default text-gray-500 fs-17px">
                    50 points
                  </b>
                </p>
              </div>
            </div>
            <a
              href="careers.html"
              className="fw-bold btn btn-primary col-12 mb-0"
            >
              Reward History
            </a>
          </div>
        </div>
        {/*End col-3*/}
        <div className="fw-bolder fs-16px mb-2">
          <select className="form-select" id="exampleFormControlSelect1">
            <option>Categories</option>
            <option>Foods and Drinks</option>
            <option>Money</option>
            <option>Entertainment</option>
            <option>Shop All</option>
          </select>
        </div>
        <div className="mt-5">
          <h4 className="text-gray-600">Recommendation</h4>
          <div>
            <div className="news">
              <div className="card border-1">
                <div className="news-media mb-3">
                  <div
                    className="news-media-img news-media-img-lg"
                    style={{
                      backgroundImage: "url(../assets/img/food/mug.jpg)"
                    }}
                  />
                </div>
                <div className="row m-0">
                  <div className="fw-bold fs-16px col-7">Coffee Mug</div>
                  <div className="col-auto fw-bold text-end align-self-center">
                    100 points
                  </div>
                </div>
                <span className="text-gray-600 p-2 pt-0">
                  3 items left in store
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="news">
              <div className="card border-1">
                <div className="news-media mb-3">
                  <div
                    className="news-media-img news-media-img-lg"
                    style={{
                      backgroundImage: "url(../assets/img/food/mug.jpg)"
                    }}
                  />
                </div>
                <div className="row m-0">
                  <div className="fw-bold fs-16px col-7">Coffee Mug</div>
                  <div className="col-auto fw-bold text-end align-self-center">
                    100 points
                  </div>
                </div>
                <span className="text-gray-600 p-2 pt-0 ">
                  3 items left in store
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BEGIN col-9 */}
      <div className="col-lg-9">
        {/* BEGIN news */}
        <div className="news">
          {/* BEGIN row */}
          <div className="row align-items-center">
            <div className="row ">
              <div className="news-title mb-3 text-gray-600">
                Previously Purchased
              </div>
              {/* BEGIN col-3 */}
              <div className="col-sm-6 col-md-4 col-lg-4">
                {/* BEGIN news */}
                <div className="news">
                  <div className="card border-1">
                    <div className="news-media mb-3">
                      <div
                        className="news-media-img news-media-img-lg"
                        style={{
                          backgroundImage: "url(../assets/img/food/mug.jpg)"
                        }}
                      />
                    </div>
                    <div className="row m-0">
                      <div className="fw-bold text-gray-600 fs-16px col-7">
                        Coffee Mug
                      </div>
                      <div className="col-auto fw-bold text-gray-600 text-end align-self-center">
                        100 points
                      </div>
                    </div>
                    <span className="text-gray-600 p-2 pt-0">
                      3 items left in store
                    </span>
                  </div>
                </div>
                {/* END news */}
              </div>
              {/* END col-3 */}
              {/* BEGIN col-3 */}
              <div className="col-sm-6 col-md-4 col-lg-4">
                {/* BEGIN news */}
                <div className="news">
                  <div className="card border-1">
                    <div className="news-media mb-3">
                      <div
                        className="news-media-img news-media-img-lg"
                        style={{
                          backgroundImage:
                            "url(../assets/img/food/headphones.jpg)"
                        }}
                      ></div>
                    </div>
                    <div className="row m-0">
                      <div className="fw-bold text-gray-600 fs-16px col-7">
                        Headphone
                      </div>
                      <div className="col-auto text-gray-600 fw-bold text-end align-self-center">
                        100 points
                      </div>
                    </div>
                    <span className="text-gray-600 p-2 pt-0">
                      3 items left in store
                    </span>
                  </div>
                </div>
                {/* END news */}
              </div>
              {/* END col-3 */}
              {/* BEGIN news */}
              <div className="news">
                {/* BEGIN row */}
                <div className="row align-items-center">
                  <div className="row">
                    <div className="news-title text-gray-600 mb-3">
                      Show All &nbsp;
                      <a className="news-date text-gray-600 fs-17px">9 items</a>
                    </div>
                    {/* BEGIN col-3 */}
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      {/* BEGIN news */}
                      <div className="news ">
                        <div className="card border-1">
                          <div className="news-media mb-3">
                            <div
                              className="news-media-img news-media-img-lg"
                              style={{
                                backgroundImage:
                                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_1yUdFI9vm5R6aFx7J7KNq49ZNQfhFHswAw9q8bMNLUrfd-WoRWNXlroo5BvZeLUZwjs&usqp=CAU)"
                              }}
                            ></div>
                          </div>
                          <div className="row m-0">
                            <div className="fw-bold fs-16px text-gray-600 col-7">
                              Grilled Chicken
                            </div>
                            <div className="col-auto fw-bold text-end align-self-center text-gray-600">
                              100 points
                            </div>
                          </div>
                          <span className="text-gray-600 p-2 pt-0">
                            3 items left in store
                          </span>
                        </div>
                      </div>
                      {/* END news */}
                    </div>
                    {/* END col-3 */}
                    {/* BEGIN col-3 */}
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      {/* BEGIN news */}
                      <div className="news">
                        <div className="card border-1">
                          <div className="news-media mb-3">
                            <div
                              className="news-media-img news-media-img-lg"
                              style={{
                                backgroundImage:
                                  "url(../assets/img/food/pancake.jpg)"
                              }}
                            ></div>
                          </div>
                          <div className="row m-0">
                            <div className="fw-bold fs-16px col-7 text-gray-600">
                              Pancake
                            </div>
                            <div className="col-auto fw-bold text-end align-self-center text-gray-600">
                              100 points
                            </div>
                          </div>
                          <span className="text-gray-600 p-2 pt-0">
                            3 items left in store
                          </span>
                        </div>
                      </div>
                      {/* END news */}
                    </div>
                    {/* END col-3 */}
                    {/* BEGIN col-3 */}
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      {/* BEGIN news */}
                      <div className="news">
                        <div className="card border-1">
                          <div className="news-media ">
                            <div
                              className="news-media-img news-media-img-lg"
                              style={{
                                backgroundImage:
                                  "url(../assets/img/food/burger.jpg)"
                              }}
                            ></div>
                          </div>
                          <div className="row m-0">
                            <div className="fw-bold fs-16px col-7 text-gray-600">
                              Burger
                            </div>
                            <div className="col-auto fw-bold text-end align-self-center text-gray-600">
                              100 points
                            </div>
                          </div>
                          <span className="text-gray-600 p-2 pt-0">
                            3 items left in store
                          </span>
                        </div>
                      </div>
                      {/* END news */}
                    </div>
                    {/* END col-3 */}
                    {/* BEGIN col-3 */}
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      {/* BEGIN news */}
                      <div className="news">
                        <div className="card border-1">
                          <div className="news-media">
                            <div
                              className="news-media-img news-media-img-lg"
                              style={{
                                backgroundImage:
                                  "url(../assets/img/food/sprite.jpg)"
                              }}
                            ></div>
                          </div>
                          <div className="row m-0">
                            <div className="fw-bold fs-16px col-7 text-gray-600">
                              Sprite
                            </div>
                            <div className="col-auto fw-bold text-end align-self-center text-gray-600">
                              100 points
                            </div>
                          </div>
                          <span className="text-gray-600 p-2 pt-0">
                            3 items left in store
                          </span>
                        </div>
                      </div>
                      {/* END news */}
                    </div>
                    {/* END col-3 */}
                    {/* BEGIN col-3 */}
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      {/* BEGIN news */}
                      <div className="news">
                        <div className="card border-1">
                          <div className="news-media mb-3">
                            <div
                              className="news-media-img news-media-img-lg"
                              style={{
                                backgroundImage:
                                  "url(../assets/img/food/donut.jpg)"
                              }}
                            ></div>
                          </div>
                          <div className="row m-0">
                            <div className="fw-bold fs-16px col-7 text-gray-600">
                              Donut
                            </div>
                            <div className="col-auto fw-bold text-end align-self-center text-gray-600">
                              100 points
                            </div>
                          </div>
                          <span className="text-gray-600 p-2 pt-0">
                            3 items left in store
                          </span>
                        </div>
                      </div>
                      {/* END news */}
                    </div>
                    {/* END col-3 */}
                    {/* BEGIN col-3 */}
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      {/* BEGIN news */}
                      <div className="news">
                        <div className="card border-1">
                          <div className="news-media mb-3">
                            <div
                              className="news-media-img news-media-img-lg"
                              style={{
                                backgroundImage:
                                  "url(../assets/img/food/pizza.jpg)"
                              }}
                            ></div>
                          </div>
                          <div className="row m-0">
                            <div className="fw-bold fs-16px col-7 text-gray-600">
                              Pizza
                            </div>
                            <div className="col-auto fw-bold text-end align-self-center text-gray-600">
                              100 points
                            </div>
                          </div>
                          <span className="text-gray-600 p-2 pt-0">
                            3 items left in store
                          </span>
                        </div>
                      </div>
                      {/* END news */}
                    </div>
                    {/* END col-3 */}
                    {/* BEGIN col-3 */}
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      {/* BEGIN news */}
                      <div className="news">
                        <div className="card border-1">
                          <div className="news-media mb-3">
                            <div
                              className="news-media-img news-media-img-lg"
                              style={{
                                backgroundImage:
                                  "url(../assets/img/food/nachos.jpg)"
                              }}
                            ></div>
                          </div>
                          <div className="row m-0">
                            <div className="fw-bold fs-16px col-7 text-gray-600">
                              Nachos
                            </div>
                            <div className="col-auto fw-bold text-end align-self-center text-gray-600">
                              100 points
                            </div>
                          </div>
                          <span className="text-gray-600 p-2 pt-0">
                            3 items left in store
                          </span>
                        </div>
                      </div>
                      {/* END news */}
                    </div>
                    {/* END col-3 */}
                    {/* BEGIN col-3 */}
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      {/* BEGIN news */}
                      <div className="news">
                        <div className="card border-1">
                          <div className="news-media mb-3">
                            <div
                              className="news-media-img news-media-img-lg"
                              style={{
                                backgroundImage:
                                  "url(../assets/img/food/Coke.jpg)"
                              }}
                            ></div>
                          </div>
                          <div className="row m-0">
                            <div className="fw-bold fs-16px col-7 text-gray-600">
                              Coke
                            </div>
                            <div className="col-auto fw-bold text-end align-self-center text-gray-600">
                              100 points
                            </div>
                          </div>
                          <span className="text-gray-600 p-2 pt-0">
                            3 items left in store
                          </span>
                        </div>
                      </div>
                      {/* END news */}
                    </div>
                    {/* END col-3 */}
                    {/* BEGIN col-3 */}
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      {/* BEGIN news */}
                      <div className="news">
                        <div className="card border-1">
                          <div className="news-media mb-3">
                            <div
                              className="news-media-img news-media-img-lg"
                              style={{
                                backgroundImage:
                                  "url(../assets/img/food/museli.jpg)"
                              }}
                            ></div>
                          </div>
                          <div className="row m-0">
                            <div className="fw-bold fs-16px col-7 text-gray-600">
                              Muesli
                            </div>
                            <div className="col-auto fw-bold text-end align-self-center text-gray-600">
                              100 points
                            </div>
                          </div>
                          <span className="text-gray-600 p-2 pt-0">
                            3 items left in store
                          </span>
                        </div>
                      </div>
                      {/* END news */}
                    </div>
                    {/* END col-3 */}
                  </div>
                  {/* END row */}
                </div>
                {/* END row */}
              </div>
              {/* END row */}
            </div>
          </div>
        </div>
        {/* END container */}
      </div>
      {/* END section */}
    </div>
  </div>
</div>

      </div>
   </>
  )
}

export default Rewards