import React from "react";

const Checkout = () => {
  return (
    <>
      <div id="page-container">
        <div className="section pt-5">
          {/* BEGIN container */}
          <div className="container">
            {/* BEGIN row */}
            <div className="row">
              {/* BEGIN col-3 */}
              <div className="col-lg-3 d-lg-block">
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
                      className="fw-bold btn btn-primary  col-12 mb-0"
                    >
                      Reward History
                    </a>
                  </div>
                </div>
                <div
                  className="fw-bolder fs-16px mb-2 text-gray-600"
                  data-bs-toggle="collapse"
                  data-bs-target="#topics-collapse"
                >
                  Recomendations
                </div>
                <div className="news mb-5">
                  <div className="card border-1">
                    <div className="news-media mb-3">
                      <div
                        className="news-media-img news-media-img-lg"
                        style={{
                          backgroundImage:
                            "url(../assets/img/food/headphones.jpg)",
                        }}
                      />
                    </div>
                    <div className="row m-0">
                      <div className="fw-bold fs-16px col-7 text-gray-600">
                        Headphones
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
                <div className="news mb-5">
                  <div className="card border-1">
                    <div className="news-media mb-3">
                      <div
                        className="news-media-img news-media-img-lg"
                        style={{
                          backgroundImage: "url(../assets/img/food/bottle.jpg)",
                        }}
                      />
                    </div>
                    <div className="row m-0">
                      <div className="fw-bold fs-16px col-7 text-gray-600">
                        Bottle
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
                <div className="news mb-5">
                  <div className="card border-1">
                    <div className="news-media mb-3">
                      <div
                        className="news-media-img news-media-img-lg"
                        style={{
                          backgroundImage: "url(../assets/img/food/jersey.jpg)",
                        }}
                      ></div>
                    </div>
                    <div className="row m-0">
                      <div className="fw-bold fs-16px col-7 text-gray-600">
                        Jersey
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
              </div>
              {/* BEGIN col-9 */}
              <div className="col-lg-9">
                <div className="container">
                  <div
                    className="fw-bolder fs-16px mb-2 text-gray-600"
                    data-bs-toggle="collapse"
                    data-bs-target="#topics-collapse"
                  >
                    Previously Purchased
                  </div>
                  <div className="row gx-5">
                    {/* BEGIN col-3 */}
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="news mb-5">
                        <div className="card border-1">
                          <div className="news-media mb-3">
                            <div
                              className="news-media-img news-media-img-lg"
                              style={{
                                backgroundImage:
                                  "url(../assets/img/food/amazon.jpg)",
                              }}
                            ></div>
                          </div>
                          <div className="row m-0">
                            <div className="fw-bold fs-16px col-auto text-gray-600">
                              Amazon Voucher
                            </div>
                            <div className="col-auto fw-bold text-end text-gray-600 align-self-center">
                              100 points
                            </div>
                          </div>
                          <span className="text-gray-600 p-2 pt-0">
                            3 items left in store
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* END col-3 */}
                    {/* BEGIN col-3 */}
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="news mb-5">
                        <div className="card border-1">
                          <div className="news-media mb-3">
                            <div
                              className="news-media-img news-media-img-lg"
                              style={{
                                backgroundImage:
                                  "url(../assets/img/food/hat.jpg)",
                              }}
                            />
                          </div>
                          <div className="row m-0">
                            <div className="fw-bold fs-16px col-7 text-gray-600">
                              Hat
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
                    </div>
                    {/* END col-3 */}
                    {/* BEGIN col-3 */}
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="news mb-5">
                        <div className="card border-1">
                          <div className="news-media mb-3">
                            <div
                              className="news-media-img news-media-img-lg"
                              style={{
                                backgroundImage:
                                  "url(../assets/img/food/mug.jpg)",
                              }}
                            />
                          </div>
                          <div className="row m-0">
                            <div className="fw-bold fs-16px col-7 text-gray-600">
                              Coffee Mug
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
                    </div>
                    <div
                      className="fw-bolder fs-16px mb-2 text-gray-600"
                      data-bs-toggle="collapse"
                      data-bs-target="#topics-collapse"
                    >
                      Checkout
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-6">
                      {/* BEGIN news */}
                      <div className="news mb-5">
                        <div className="card border-1">
                          <div className="news-media mb-3">
                            <div
                              className="news-media-img news-media-img-lg"
                              style={{
                                backgroundImage:
                                  "url(../assets/img/food/zomato.jpg)",
                              }}
                            ></div>
                          </div>
                          <div className="d-flex justify-content-between p-1">
                            <div className="fw-bold fs-16px text-gray-600">
                              Zomato Voucher
                            </div>
                            <div className="fw-bold fs-16px text-gray-600">
                              300 points
                            </div>
                          </div>
                          <p className="fs-18px ps-1 text-gray-600">
                            www.zomatogold.com
                          </p>
                          <p className="fs-12px ps-1 text-gray-600 ">
                            This product will expire in 36 months
                          </p>
                          <h5 className="text-dark px-1">Total points = 600</h5>
                        </div>
                      </div>
                      {/* END news */}
                    </div>
                    <div className="row">
                      <div className="col-sm-3 col-6">
                        <div className="input-group qty">
                          <div className="input-group-append">
                            <a
                              href="#"
                              className="btn btn-default rounded-pill"
                            >
                              <i className="fa fa-minus" />
                            </a>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={2}
                          />
                          <div className="input-group-prepend">
                            <a
                              href="#"
                              className="btn btn-default rounded-pill"
                            >
                              <i className="fa fa-plus" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-danger">
                      You have 50 points available to redeem
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-primary ms-2 col-auto btn-lg"
                    >
                      Claim now
                      <i className="bi bi-cart3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
