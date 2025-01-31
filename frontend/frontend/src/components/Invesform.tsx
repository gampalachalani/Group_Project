import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const InvestorForm: React.FC = () => {
  const [formData, setFormData] = useState({
    investorName: "",
    investorJob: "",
    investorInterest: "",
    otherDetails: "",
    budgetLimit: "",
    address: "",
    telNumber: "",
    imageName: "",
    contentType: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.investorName) newErrors.investorName = "Investor Name is required.";
    if (!formData.investorJob) newErrors.investorJob = "Investor Job is required.";
    if (!formData.investorInterest) newErrors.investorInterest = "Investor Interest is required.";
    if (!formData.budgetLimit) newErrors.budgetLimit = "Budget Limit is required.";
    else if (isNaN(Number(formData.budgetLimit))) newErrors.budgetLimit = "Budget Limit must be a number.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.telNumber) newErrors.telNumber = "Telephone Number is required.";
    else if (!/^\d{10}$/.test(formData.telNumber)) newErrors.telNumber = "Telephone Number must be 10 digits.";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage(null); 
      setErrorMessage("Please fix the errors above.");
    } else {
      setErrors({});
      setSuccessMessage("Form submitted successfully!");
      setErrorMessage(null);
      console.log("Form submitted successfully:", formData);
    }
  };

  return (
    <>
      {successMessage && (
        <Alert variant="success" onClose={() => setSuccessMessage(null)} dismissible>
          {successMessage}
        </Alert>
      )}
      {errorMessage && (
        <Alert variant="danger" onClose={() => setErrorMessage(null)} dismissible>
          {errorMessage}
        </Alert>
      )}

      
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formInvestorName">
          <Form.Label>Investor Name</Form.Label>
          <Form.Control
            type="text"
            name="investorName"
            placeholder="Enter Investor Name"
            value={formData.investorName}
            onChange={handleChange}
            isInvalid={!!errors.investorName}
          />
          <Form.Control.Feedback type="invalid">{errors.investorName}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formInvestorJob">
          <Form.Label>Investor Job</Form.Label>
          <Form.Control
            type="text"
            name="investorJob"
            placeholder="Enter Investor Job"
            value={formData.investorJob}
            onChange={handleChange}
            isInvalid={!!errors.investorJob}
          />
          <Form.Control.Feedback type="invalid">{errors.investorJob}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formInvestorInterest">
          <Form.Label>Investor Interest</Form.Label>
          <Form.Control
            type="text"
            name="investorInterest"
            placeholder="Enter Investor Interest"
            value={formData.investorInterest}
            onChange={handleChange}
            isInvalid={!!errors.investorInterest}
          />
          <Form.Control.Feedback type="invalid">{errors.investorInterest}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formOtherDetails">
          <Form.Label>Other Details</Form.Label>
          <Form.Control
            as="textarea"
            name="otherDetails"
            rows={3}
            placeholder="Enter Other Details"
            value={formData.otherDetails}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBudgetLimit">
          <Form.Label>Budget Limit</Form.Label>
          <Form.Control
            type="text"
            name="budgetLimit"
            placeholder="Enter Budget Limit"
            value={formData.budgetLimit}
            onChange={handleChange}
            isInvalid={!!errors.budgetLimit}
          />
          <Form.Control.Feedback type="invalid">{errors.budgetLimit}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            name="address"
            rows={3}
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleChange}
            isInvalid={!!errors.address}
          />
          <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTelNumber">
          <Form.Label>Telephone Number</Form.Label>
          <Form.Control
            type="tel"
            name="telNumber"
            placeholder="Enter Telephone Number"
            value={formData.telNumber}
            onChange={handleChange}
            isInvalid={!!errors.telNumber}
          />
          <Form.Control.Feedback type="invalid">{errors.telNumber}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImageName">
          <Form.Label>Image File</Form.Label>
          <Form.Control
            type="file"
            name="imageName"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, imageName: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContentType">
          <Form.Label>Content Type</Form.Label>
          <Form.Control
            type="text"
            name="contentType"
            placeholder="Enter Content Type"
            value={formData.contentType}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default InvestorForm;
