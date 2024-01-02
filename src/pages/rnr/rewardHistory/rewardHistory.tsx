import React from 'react'

const RewardHistory = () => {
  return (
   <>
   <div id="page-container">
    
  {/* BEGIN section */}
  <div className="section pt-5">
    {/* BEGIN container */}
    <div className="container">
      {/* BEGIN row */}
      <div className="panel-body">
        <form>
          <div className="row mb-15px">
            <div className="col-md-6">
              <div className="input-group" id="default-daterange">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Filter by daterange"
                  id="datepicker-autoClose"
                />
                <div className="input-group-text">
                  <i className="fa fa-calendar" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <select className="form-select">
                <option value={1}>Filter By Reason</option>
                <option value={2}>Problem Solving</option>
                <option value={3}>LeaderShip</option>
                <option value={4}>Teamwork</option>
              </select>
            </div>
          </div>
          <div className="row mb-15px">
            <div className="col-md-6">
              <select className="form-select">
                <option value={1}>Filter By Status</option>
                <option value={2}>Received</option>
                <option value={3}>Given</option>
              </select>
            </div>
            <div className="col-md-6">
              <select className="form-select">
                <option value={1}>Filter By Reward Type</option>
                <option value={2}>Recognised</option>
                <option value={3}>Recommended</option>
                <option value={4}>Thanked</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    
      <button type="button" className="btn btn-outline-primary">
        Apply Filter
      </button>
      <button type="button" className="btn btn-outline-secondary ms-2">
        Clear All
      </button>
      {/* END row */}
    </div>
    {/* END container */}
  </div>
  {/* END section */}
  {/* BEGIN section */}
  <div className="section pt-5">
    {/* BEGIN container */}
    <div className="container">
      <div className="table-responsive">
        <table className="table align-middle table-responsive">
          <thead className="table-active">
            <tr>
              <th>Date</th>
              <th>Reason</th>
              <th>From</th>
              <th>To</th>
              <th>Amount</th>
              <th>Balance</th>
              <th>Status</th>
              <th>Message</th>
              <th>Recognition Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>06/DEC/2023</td>
              <td>Bonus</td>
              <td>Malpe</td>
              <td>You</td>
              <td>20 points</td>
              <td>60 points</td>
              <td>Received </td>
              <td>
                Thank you so much for working with me to get a customer story on
                web sites
              </td>
              <td>Recognised</td>
            </tr>
            <tr>
              <td>06/DEC/2023</td>
              <td>Problem Solving</td>
              <td>syed Ahamed</td>
              <td>You</td>
              <td>20 points</td>
              <td>70 points</td>
              <td>Received </td>
              <td>
                Thank you so much for working with me to get a customer story on
                web sites
              </td>
              <td>Thanked</td>
            </tr>
            <tr>
              <td>06/MAR/2023</td>
              <td>Leadership</td>
              <td>syed Ahamed</td>
              <td>You</td>
              <td>50 points</td>
              <td>60 points</td>
              <td>Received </td>
              <td>
                Thank you so much for working with me to get a customer story on
                web sites
              </td>
              <td>Thanked</td>
            </tr>
            <tr>
              <td>06/AUG/2023</td>
              <td>Team work</td>
              <td>Ahamed</td>
              <td>You</td>
              <td>20 points</td>
              <td>80 points</td>
              <td>Received </td>
              <td>
                Thank you so much for working with me to get a customer story on
                web sites
              </td>
              <td>Recommened</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  {/* END section */}


   </div>
   </>
  )
}

export default RewardHistory
