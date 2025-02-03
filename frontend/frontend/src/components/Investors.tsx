import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Investors: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [investment, setInvestment] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInvestment = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/investment/getInvestmentByUserId/${userId}`);
        setInvestment(response.data);
      } catch (err) {
        console.error("Error fetching investment", err);
        setError("Failed to fetch investment data.");
      }
    };

    fetchInvestment();
  }, [userId]);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!investment) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="hero_area">
      <div className="my-app">

        <main>
          <section className="my-app__header py-4">
            <div className="appcontainer">
              <div className="my-app__header-inner">
                <div className="my-app__header-text media">
                  <div className="media-body">
                    <h1 className="my-app__header-title mt-5">Hi there, I'm {investment.investorName}!</h1>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="my-action-buttons my-app__header__buttons my-3">
                      <img
                        className="my-action-button__icon rounded-circle"
                        src={`data:${investment.contentType};base64,${investment.imageData}`}
                        style={{ height: "220px", width: "auto" }}
                        alt="Investor"
                      />
                    </div>
                    <div className="my-action-buttons my-app__header__buttons my-3 mx-3">
                      <div className="mt-5 mx-5">
                        <h3>{investment.investorName}</h3>
                        <h4>{investment.telNumber}</h4>
                        <small className="text-primary">
                          <b>{investment.investorJob}</b>
                        </small>
                        <div>
                        {userId !== investment.userId ? (
                          <div className="text-primary my-2">
                        </div>
                      ) : (
                        <div className="text-primary my-2">
                            <Link to={""}>
                            <i className="fa-solid fa-pen-to-square"></i>
                            <span className="mx-2">Edit My Profile</span></Link>
                          </div>
                      )}
                        </div>

                        

                      </div>
                    </div>
                  </div>

                  <div>
                      {userId !== investment.userId ? (
                          <div className="text-primary my-2">
                            <button className="btn btn-primary mt-4">Invest in me</button>
                          </div>
                      ) : (
                        <div className="my-5">
                  </div>
                      )}
                     </div>


                  
                </div>
              </div>
            </div>
          </section>

          <section className="my-app__body pb-4">
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <div className="my-card card">
                    <div className="my-card__header card-header">
                      <div className="my-card__header-title">
                        <div className="my-text-overline">Budget Limit</div>
                        <h3 className="my-text-headline">Rs.{investment.budgetLimit}.00</h3>
                      </div>
                    </div>
                    <div className="my-card__body card-body">
                      <div className="my-text-overline">Details</div>
                      <p><strong>Address:</strong> {investment.address}</p>
                      <p><strong>Interest:</strong> {investment.investorInterest}</p>
                      <p><strong>Other Details:</strong> {investment.otherDetails}</p>
                      <p>ID: {investment.userId}</p>
                    </div>
                  </div>
                </div>

                <div className="col-8">
                  <div className="my-alert alert alert-info">
                    <span className="my-alert__text">
                      Latest updates for this investor profile.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
     
      </div>
    </div>
  );
};
export default Investors;