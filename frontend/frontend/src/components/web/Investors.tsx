import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD:frontend/frontend/src/components/Investors.tsx
import { Invesformdata } from "../interfaces/Invesformdata";
import { getAllInvesters } from "../services/Investorservice";
=======
import { InvestFormData } from "../../interfaces/InvestFormData";
import { getAllInvesters } from "../../services/Investorservice";
>>>>>>> chalani:frontend/frontend/src/components/web/Investors.tsx

const InvestorList: React.FC = () => {
  const [investors, setInvestors] = useState<Invesformdata[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredInvestors, setFilteredInvestors] = useState<Invesformdata[]>([]);

  useEffect(() => {
    const fetchInvestors = async () => {
      const data = await getAllInvesters();
      setInvestors(data);
      setFilteredInvestors(data);
    };
    fetchInvestors();
  }, []);

  useEffect(() => {
    const filtered = investors.filter(investor =>
      investor.investorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      investor.investorJob.toLowerCase().includes(searchTerm.toLowerCase()) ||
      investor.investorInterest.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredInvestors(filtered);
  }, [searchTerm, investors]);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between">
        <h2 className="mb-4 text-center">Investor List</h2>
        <div className="input-group mb-3" style={{ maxWidth: "400px" }}>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search..." 
            aria-label="Search" 
            aria-describedby="search-button"
            style={{ height: "38px" }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary mx-1" type="button" id="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      
      <div className="row">
        {filteredInvestors.length > 0 ? (
          filteredInvestors.map((investor) => (
            <div key={investor.investmentId} className="col-md-4">
              <div className="card mb-3 shadow">
                {investor.imageFile && (
                  <img
                    src={`data:${investor.contentType};base64,${investor.imageFile}`}
                    className="card-img-top"
                    alt={investor.imageName}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{investor.investorName}</h5>
                  <p className="card-text">
                    <strong>Contact:</strong> {investor.telNumber}
                  </p>
                  <p className="card-text">
                    <strong>Job:</strong> {investor.investorJob}
                  </p>
                  <p className="card-text">
                    <strong>Interest:</strong> {investor.investorInterest}
                  </p>
                  <a href={`/invsProfile/${investor.investmentId}`} className="btn btn-primary">View Profile</a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No investors available.</p>
        )}
      </div>
    </div>
  );
};

export default InvestorList;