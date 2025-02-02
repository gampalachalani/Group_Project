import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import './Entreform.css';
import cmplogo from '../components/assets/logo1.png';


const Entreform: React.FC = () => {
    const [formData, setFormData] = useState({
      enterpriseName: "",
      enterpriseEmail: "",
      registerNumber: "",
      enterpriseType: "",
      startingDate: "",
      address: "",
      city: "",
      telNumber: "",
      webUrl: "",
      contentType: "",
      imageName: "",

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
        if (!formData.enterpriseName) newErrors.enterpriseName = "Enterprise Name is required.";
        if (!formData.enterpriseEmail) newErrors.enterpriseEmail = "Enterprise Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.enterpriseEmail)) newErrors.enterpriseEmail = "Invalid email format.";
        if (!formData.enterpriseType) newErrors.enterpriseType = "Enterprise Type is required.";
        if (!formData.address) newErrors.address = "Address is required.";
        if (!formData.city) newErrors.city = "City is required.";
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

    <div className="entreform-cont">
      <div className="entre-container">
      <div className='cmp-logo'>
      <img src={cmplogo} alt='Company Logo' />
        </div>
    <Form className="entre-form" onSubmit={handleSubmit}>
        <h1>Entrepreneur Form</h1>

      <Form.Group className="mb-3" controlId="formEnterpriseName">
        <Form.Label>Enterprise Name</Form.Label>
        <Form.Control
          type="text"
          name="enterpriseName"
          placeholder="Enter Enterprise Name"
          value={formData.enterpriseName}
          onChange={handleChange}
          isInvalid={!!errors.enterpriseName} />
        <Form.Control.Feedback type="invalid">{errors.enterpriseName}</Form.Control.Feedback>
      </Form.Group>


    <Form.Group className="mb-3" controlId="formEnterpriseEmail">
        <Form.Label>Enterprise Email</Form.Label>
        <Form.Control
          type="email"
          name="enterpriseEmail"
          placeholder="Enter Enterprise Email"
          value={formData.enterpriseEmail}
          onChange={handleChange}
          isInvalid={!!errors.enterpriseEmail}/>
        <Form.Control.Feedback type="invalid">{errors.enterpriseEmail}</Form.Control.Feedback>
      </Form.Group>


    <Form.Group className="mb-3" controlId="formRegisterNumber">
      <Form.Label>Register Number</Form.Label>
      <Form.Control type="text" placeholder="Enter Register Number" required />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formEnterpriseType">
        <Form.Label>Enterprise Type</Form.Label>
        <Form.Control
          type="text"
          name="enterpriseType"
          placeholder="Enter Enterprise Type"
          value={formData.enterpriseType}
          onChange={handleChange}
          isInvalid={!!errors.enterpriseType}/>
        <Form.Control.Feedback type="invalid">{errors.enterpriseType}</Form.Control.Feedback>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formStartingDate">
      <Form.Label>Starting Date</Form.Label>
      <Form.Control type="date" required />
    </Form.Group>
      
      <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="address"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleChange}
          isInvalid={!!errors.address}/>
        <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formCity">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          name="city"
          placeholder="Enter City"
          value={formData.city}
          onChange={handleChange}
          isInvalid={!!errors.city}/>
        <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formTelNumber">
        <Form.Label>Telephone Number</Form.Label>
        <Form.Control
          type="tel"
          name="telNumber"
          placeholder="Enter Telephone Number"
          value={formData.telNumber}
          onChange={handleChange}
          isInvalid={!!errors.telNumber}/>
        <Form.Control.Feedback type="invalid">{errors.telNumber}</Form.Control.Feedback>
      </Form.Group>

      
    <Form.Group className="mb-3" controlId="formWebUrl">
      <Form.Label>Web URL</Form.Label>
      <Form.Control 
      type="url" 
      name="weburl"
      placeholder="Enter Web URL"
      value={formData.contentType}
      onChange={handleChange} />
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
   </div>
  </div>
  </>
  );
};

export default Entreform;