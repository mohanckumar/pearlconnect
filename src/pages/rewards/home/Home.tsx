import React from "react";
import "simple-line-icons/css/simple-line-icons.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const Home = () => {
  return (
    <>
      <div id="page-container">
        <div className="section pt-5">
          {/* BEGIN container */}
          <div className="container">
            {/* BEGIN row */}
            <div className="row">
              <div className="col-lg-3 d-lg-block">
                <div className="card rounded-2 mb-5">
                  <div className="card-body p-4">
                    <h4 className="text-default text-gray-500 fs-17px">
                      Rewards balance
                    </h4>
                    <div className="row">
                      <div className="col-6">
                        <div className="mb-3 fs-2 d-flex justify-content-center position-relative">
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
                <h4>Your are recognized by</h4>
                <div className="card rounded-2 mb-5">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-3">
                        <div className="widget-list-item row ">
                          <div className="widget-list-media col-3">
                            <img
                              src="../assets/img/user/user-12.jpg"
                              width={50}
                              alt=""
                              className="rounded-5"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-8 text-start align-self-center">
                        <h5 className="widget-list-title text-vinous">
                          Raveendra
                        </h5>
                        <p className="widget-list-desc">
                          Recognized 3 days ago
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <div className="widget-list-item row ">
                          <div className="widget-list-media col-3">
                            <img
                              src="../assets/img/user/user-12.jpg"
                              width={50}
                              alt=""
                              className="rounded-5"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-8 text-start align-self-center">
                        <h5 className="widget-list-title text-vinous">
                          Thejashree
                        </h5>
                        <p className="widget-list-desc">
                          Recognized 5 days ago
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <div className="widget-list-item row ">
                          <div className="widget-list-media col-3">
                            <img
                              src="../assets/img/user/user-12.jpg"
                              width={50}
                              alt=""
                              className="rounded-5"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-8 text-start align-self-center">
                        <h5 className="widget-list-title text-vinous">Sunil</h5>
                        <p className="widget-list-desc">
                          Recognized 2 days ago
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <div className="widget-list-item row ">
                          <div className="widget-list-media col-3">
                            <img
                              src="../assets/img/user/user-12.jpg"
                              width={50}
                              alt=""
                              className="rounded-5"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-8 text-start align-self-center">
                        <h5 className="widget-list-title text-vinous">
                          Skandana
                        </h5>
                        <p className="widget-list-desc">Recognized every min</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <div className="widget-list-item row ">
                          <div className="widget-list-media col-3">
                            <img
                              src="../assets/img/user/user-12.jpg"
                              width={50}
                              alt=""
                              className="rounded-5"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-8 text-start align-self-center">
                        <h5 className="widget-list-title text-vinous">
                          Shwetha
                        </h5>
                        <p className="widget-list-desc">
                          Recognized on Workout Day
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <div className="widget-list-item row ">
                          <div className="widget-list-media col-3">
                            <img
                              src="../assets/img/user/user-12.jpg"
                              width={50}
                              alt=""
                              className="rounded-5"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-8 text-start align-self-center">
                        <h5 className="widget-list-title text-vinous">
                          Harshan
                        </h5>
                        <p className="widget-list-desc">
                          Recognized on Valentines day
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <div className="widget-list-item row ">
                          <div className="widget-list-media col-3">
                            <img
                              src="../assets/img/user/user-12.jpg"
                              width={50}
                              alt=""
                              className="rounded-5"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-8 text-start align-self-center">
                        <h5 className="widget-list-title text-vinous">
                          Jatin abrol
                        </h5>
                        <p className="widget-list-desc">Bank Transfer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Middle  Content*/}
              <div className="col-lg-6">
                <div className="container">
                  <div className="pt-0 p-2">
                    <div className="row ">
                      <img
                        className=" col-auto"
                        src="../assets/img/icon/Union.svg"
                      />
                      <h4 className="col-auto align-self-center">
                        Recognize your Fellow employee by
                      </h4>
                    </div>
                    <div className="row pt-2">
                      <div className="col-md-2">
                        <div className="form-check form-check-inline">
                          <p>
                            <input
                              className="form-check-input"
                              type="radio"
                              id="inlineRadio1"
                              name="inlineRadio"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio1"
                            >
                              <b>Reward</b>
                            </label>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-check form-check-inline">
                          <p>
                            <input
                              className="form-check-input"
                              type="radio"
                              id="customRadio2"
                              name="inlineRadio"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadio2"
                            >
                              <b>Recommended</b>
                            </label>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="form-check form-check-inline">
                          <p>
                            <input
                              className="form-check-input"
                              type="radio"
                              id="customRadio3"
                              name="inlineRadio"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadio3"
                            >
                              <b>Thank an employee</b>
                            </label>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 p-0 pt-2">
                        {/* Nested card */}
                        <div className="card rounded-2 mb-2">
                          <div className="card-body p-4">
                            <div className="row">
                              <div className="btn-group col-auto ">
                                <a
                                  href="#"
                                  className="col-auto btn btn-outline-primary fw-bold rounded-pill"
                                >
                                  @Recipent
                                </a>
                                <ul className="dropdown-menu">
                                  <li>@skandana</li>
                                  <li>@Mohan</li>
                                  <li>@Sunil</li>
                                  <li>@Thejashree</li>
                                  <li>@Rakshith</li>
                                </ul>
                              </div>
                              <div className=" col-auto btn btn-outline-primary fw-bold rounded-pill">
                                + points
                              </div>
                              <div className=" col-auto btn btn-outline-primary fw-bold rounded-pill ms-2">
                                #Reason
                              </div>
                              <small className="col-auto text-danger align-self-center">
                                <b>Maximum points to reward - 50</b>
                              </small>
                              <div className="col-12">
                                <p className="mb-3 mt-2 justify-content-center position-relative">
                                  <b className="text-vinous">@Julai +5</b> for
                                  helping me launch a marketing campaign so that
                                  we can generate new business
                                </p>
                                <p>
                                  <b className="text-vinous">#teamwork</b>
                                </p>

                                <div className="row justify-content-between">
                                  <div className=" col-auto btn btn-outline-primary">
                                    <i className="bi bi-emoji-smile-fill text-warning me-3 " />
                                    <i className="bi bi-images me-3 text-primary" />
                                    <i className="bi bi-link me-3 text-dark" />
                                  </div>
                                  <p className="col-auto btn btn-outline-primary justify-content-end mb-0 ">
                                    Give Recognition
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4 justify-content-center">
                    <img
                      className=" col-auto"
                      src="../assets/img/icon/Union.svg"
                    />
                    <h4 className=" col-auto align-self-center">
                      Your Recognitions
                    </h4>
                    <img
                      className=" col-auto h-100px"
                      src="../assets/img/icon/InterfaceSuccess01.svg"
                    />
                  </div>
                  <div className="d-flex mb-2">
                    <a className="w-40px col-3 " href="javascript:;">
                      <img
                        src="../assets/img/user/user-1.jpg"
                        alt=""
                        className="mw-100 rounded-pill"
                      />
                    </a>
                    <div className="card py-2 ms-2">
                      <div className="row">
                        <div className="col-auto mx-2 ">
                          <i className="bi bi-star-fill text-warning display-5" />
                        </div>
                        <div className="col-auto align-self-center">
                          <p className="mb-0">
                            <b>@Sonkar thanked you</b>
                          </p>
                        </div>
                        <div className="col-auto align-self-center">
                          <p className="text-end mb-0">10 min ago</p>
                        </div>
                      </div>
                      <p className="px-2">
                        <b className="text-vinous">@skandana</b> for helping me
                        resolve the bug in user authentication of the recently
                        developed ATG application
                      </p>
                      <b className="px-2 text-vinous">#TeamWork #LederShip</b>
                      <div className="col-12 row px-2 justify-content-between mt-2">
                        <div className="col-auto">
                          <div className="btn btn-white border-0">
                            <i className="bi bi-chat" /> Comment
                          </div>
                        </div>
                        <div className="col-auto text-end">
                          <div className="row">
                            <div className="col-auto btn btn-outline-default border-dark">
                              <i className="fas fa-lg fa-fw fa-thumbs-up text-dark" />
                            </div>
                            <div className="col-auto btn btn-outline-default ms-2 border-dark">
                              <i className="bi bi-arrow-down text-dark" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card2 */}
                  <div className="d-flex mb-2">
                    <a className="w-40px col-3 " href="javascript:;">
                      <img
                        src="../assets/img/user/user-1.jpg"
                        alt=""
                        className="mw-100 rounded-pill"
                      />
                    </a>
                    <div className="card py-2 ms-2 ">
                      <div className="row">
                        <div className="col-auto mx-2">
                          <i className="bi bi-star-fill text-warning display-5" />
                        </div>
                        <div className="col-auto align-self-center">
                          <p className="mb-0">
                            <b>@Sonkar thanked you</b>
                          </p>
                        </div>
                        <div className="col-auto align-self-center">
                          <p className="text-end mb-0">10 min ago</p>
                        </div>
                      </div>
                      <p className="px-2">
                        <b className="text-vinous">@skandana </b>for helping me
                        resolve the bug in user authentication of the recently
                        developed ATG application
                      </p>
                      <b className="px-2 text-vinous">#TeamWork #LederShip</b>
                      <div className="col-12 row px-2 justify-content-between mt-2">
                        <div className="col-auto">
                          <div className="btn btn-white border-0">
                            <i className="bi bi-chat" /> Comment
                          </div>
                        </div>
                        <div className="col-auto text-end">
                          <div className="row">
                            <div className="col-auto btn btn-outline-default border-dark">
                              <i className="fas fa-lg fa-fw fa-thumbs-up text-dark" />
                            </div>
                            <div className="col-auto btn btn-outline-default ms-2 border-dark">
                              <i className="bi bi-arrow-down text-dark" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card2 */}
                  {/* Cadr 3 */}
                  <div className="d-flex mb-2">
                    <a className="w-40px col-3 " href="javascript:;">
                      <img
                        src="../assets/img/user/user-1.jpg"
                        alt=""
                        className="mw-100 rounded-pill"
                      />
                    </a>
                    <div className="card py-2 ms-2 ">
                      <div className="row">
                        <div className="col-auto mx-2">
                          <i className="bi bi-star-fill text-warning display-5" />
                        </div>
                        <div className="col-auto align-self-center">
                          <p className="mb-0">
                            <b>@Sonkar thanked you</b>
                          </p>
                        </div>
                        <div className="col-auto align-self-center">
                          <p className="text-end mb-0">10 min ago</p>
                        </div>
                      </div>
                      <p className="px-2">
                        <b className="text-vinous">@skandana</b> for helping me
                        resolve the bug in user authentication of the recently
                        developed ATG application
                      </p>
                      <b className="px-2 text-vinous">#TeamWork #LederShip</b>
                      <div className="col-12 row px-2 justify-content-between mt-2">
                        <div className="col-auto">
                          <div className="btn btn-white border-0">
                            <i className="bi bi-chat" /> Comment
                          </div>
                        </div>
                        <div className="col-auto text-end">
                          <div className="row">
                            <div className="col-auto btn btn-outline-default border-dark">
                              <i className="fas fa-lg fa-fw fa-thumbs-up text-dark" />
                            </div>
                            <div className="col-auto btn btn-outline-default ms-2 border-dark">
                              <i className="bi bi-arrow-down text-dark" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Cadr 3 */}
                  {/* card 4 */}
                  <div className="d-flex mb-2">
                    <a className="w-40px col-3 " href="javascript:;">
                      <img
                        src="../assets/img/user/user-1.jpg"
                        alt=""
                        className="mw-100 rounded-pill"
                      />
                    </a>
                    <div className="card py-2 ms-2 ">
                      <div className="row">
                        <div className="col-auto mx-2">
                          <i className="bi bi-star-fill text-warning display-5" />
                        </div>
                        <div className="col-auto align-self-center">
                          <p className="mb-0">
                            <b>@Sonkar Recommended you</b>
                          </p>
                        </div>
                        <div className="col-auto align-self-center">
                          <p className="text-end mb-0">10 min ago</p>
                        </div>
                      </div>
                      <p className="px-2">
                        <b className="text-vinous">Sonkar : @skandana </b>is a
                        great developer and I would like to Recommened her to
                        your upcoming project.
                      </p>
                      <b className="px-2 text-vinous">#TeamWork #LederShip</b>
                      <p className="px-2">
                        <b className="text-vinous">Manager : @skandana + 50</b>{" "}
                        keep up your great work
                      </p>
                      <b className="px-2 text-vinous">#TeamWork #LederShip</b>
                      <div className="col-12 row px-2 justify-content-between mt-2">
                        <div className="col-auto">
                          <div className="btn btn-white border-0">
                            <i className="bi bi-chat" /> Comment
                          </div>
                        </div>
                        <div className="col-auto text-end">
                          <div className="row">
                            <div className="col-auto btn btn-outline-default border-dark">
                              <i className="fas fa-lg fa-fw fa-thumbs-up text-dark" />
                            </div>
                            <div className="col-auto btn btn-outline-default ms-2 border-dark">
                              <i className="bi bi-arrow-down text-dark" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card 4 */}
                </div>
              </div>
              {/* Middle  Content*/}
              {/* Right Side Content */}
              <div className="col-lg-3">
                <h4>You are recognized</h4>
                <div className="card rounded-2 mb-5">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-3">
                        <div className="widget-list-item row ">
                          <div className="widget-list-media col-3">
                            <img
                              src="../assets/img/user/user-12.jpg"
                              width={50}
                              alt=""
                              className="rounded-5"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-6 text-start align-self-center">
                        <h5 className="widget-list-title text-vinous">
                          Raveendra
                        </h5>
                        <p className="widget-list-desc">
                          Recognized 3 days ago
                        </p>
                      </div>
                      <div className="col-3">
                        <img src="../assets/img/icon/Vectorhand.svg" alt="" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <div className="widget-list-item row ">
                          <div className="widget-list-media col-3">
                            <img
                              src="../assets/img/user/user-12.jpg"
                              width={50}
                              alt=""
                              className="rounded-5"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-6 text-start align-self-center">
                        <h5 className="widget-list-title text-vinous">
                          skandana
                        </h5>
                        <p className="widget-list-desc">
                          Recognized 1 week ago
                        </p>
                      </div>
                      <div className="col-3">
                        <img src="../assets/img/icon/Vectorhand.svg" alt="" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <div className="widget-list-item row ">
                          <div className="widget-list-media col-3">
                            <img
                              src="../assets/img/user/user-12.jpg"
                              width={50}
                              alt=""
                              className="rounded-5"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-6 text-start align-self-center">
                        <h5 className="widget-list-title text-vinous">
                          Thejashree
                        </h5>
                        <p className="widget-list-desc">
                          Recognized 6 months ago
                        </p>
                      </div>
                      <div className="col-3">
                        <img src="../assets/img/icon/Vectorhand.svg" alt="" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <div className="widget-list-item row ">
                          <div className="widget-list-media col-3">
                            <img
                              src="../assets/img/user/user-12.jpg"
                              width={50}
                              alt=""
                              className="rounded-5"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-6 text-start align-self-center">
                        <h5 className="widget-list-title text-vinous">Sunil</h5>
                        <p className="widget-list-desc">
                          Recognized 12 months ago
                        </p>
                      </div>
                      <div className="col-3">
                        <img src="../assets/img/icon/Vectorhand.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <h4>Most recognized</h4>
                <div className="card rounded-2 mb-5">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-3">
                        <div className="widget-list-item row ">
                          <div className="widget-list-media col-3">
                            <img
                              src="../assets/img/user/user-12.jpg"
                              width={50}
                              alt=""
                              className="rounded-5"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col text-start align-self-center">
                        <h5 className="widget-list-title text-vinous">
                          Raveendra
                        </h5>
                        <p className="widget-list-desc">Recognized 10 times</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <div className="widget-list-item row ">
                          <div className="widget-list-media col-3">
                            <img
                              src="../assets/img/user/user-12.jpg"
                              width={50}
                              alt=""
                              className="rounded-5"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col text-start align-self-center">
                        <h5 className="widget-list-title text-vinous">
                          skandana
                        </h5>
                        <p className="widget-list-desc">Recognized 8 times</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <div className="widget-list-item row ">
                          <div className="widget-list-media col-3">
                            <img
                              src="../assets/img/user/user-12.jpg"
                              width={50}
                              alt=""
                              className="rounded-5"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col text-start align-self-center">
                        <h5 className="widget-list-title text-vinous">
                          Thejashree
                        </h5>
                        <p className="widget-list-desc">Recognized 6 times</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <div className="widget-list-item row ">
                          <div className="widget-list-media col-3">
                            <img
                              src="../assets/img/user/user-12.jpg"
                              width={50}
                              alt=""
                              className="rounded-5"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col text-start align-self-center">
                        <h5 className="widget-list-title text-vinous">Sunil</h5>
                        <p className="widget-list-desc">Recognized 3 times</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Side Content */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
