import { useState } from 'react';
import * as Yup from 'yup';

const Demo = () => {
  const [formData, setFormData] = useState({
    institution: '',
    degree: '',
    fromDate: '',
    toDate: '',
    isCurrent: false
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validationSchema = Yup.object().shape({
    institution: Yup.string().required('Institution name is required'),
    degree: Yup.string().required('Degree is required'),
    fromDate: Yup.date()
      .required('Start date is required')
      .max(new Date(), 'Start date cannot be in the future'),
    toDate: Yup.date()
      .when('isCurrent', {
        is: false,
        then: Yup.date()
          .required('End date is required when not currently studying')
          .min(Yup.ref('fromDate'), 'End date must be after start date')
          .max(new Date(), 'End date cannot be in the future')
      }),
    isCurrent: Yup.boolean()
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      // Validation passed - submit the form
      console.log('Form data', formData);
      setErrors({});
      // Add your form submission logic here
    } catch (err) {
      const newErrors = {};
      err.inner.forEach(error => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    // Validate just this field when it loses focus
    validationSchema.validateAt(name, formData)
      .then(() => {
        if (errors[name]) {
          setErrors(prev => ({ ...prev, [name]: undefined }));
        }
      })
      .catch(err => {
        setErrors(prev => ({ ...prev, [name]: err.message }));
      });
  };

  return (
    <div className="form-container">
      <h2>Educational Qualifications</h2>
      <form onSubmit={handleSubmit}>
        {/* Institution Name */}
        <div className="form-group">
          <label htmlFor="institution">Institution Name*</label>
          <input
            type="text"
            id="institution"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.institution ? 'error' : ''}
          />
          {errors.institution && touched.institution && (
            <div className="error-message">{errors.institution}</div>
          )}
        </div>

        {/* Degree */}
        <div className="form-group">
          <label htmlFor="degree">Degree*</label>
          <input
            type="text"
            id="degree"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.degree ? 'error' : ''}
          />
          {errors.degree && touched.degree && (
            <div className="error-message">{errors.degree}</div>
          )}
        </div>

        {/* From Date */}
        <div className="form-group">
          <label htmlFor="fromDate">From Date*</label>
          <input
            type="date"
            id="fromDate"
            name="fromDate"
            value={formData.fromDate}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.fromDate ? 'error' : ''}
          />
          {errors.fromDate && touched.fromDate && (
            <div className="error-message">{errors.fromDate}</div>
          )}
        </div>

        {/* Currently Studying Checkbox */}
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="isCurrent"
            name="isCurrent"
            checked={formData.isCurrent}
            onChange={handleChange}
          />
          <label htmlFor="isCurrent">Currently studying here</label>
        </div>

        {/* To Date (conditionally shown) */}
        {!formData.isCurrent && (
          <div className="form-group">
            <label htmlFor="toDate">To Date*</label>
            <input
              type="date"
              id="toDate"
              name="toDate"
              value={formData.toDate}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.toDate ? 'error' : ''}
            />
            {errors.toDate && touched.toDate && (
              <div className="error-message">{errors.toDate}</div>
            )}
          </div>
        )}

        <button type="submit" className="submit-btn">
          Save Education
        </button>
      </form>

      <style jsx>{`
        .form-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
         
        
        h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }
        
        .form-group {
          margin-bottom: 15px;
        }
        
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: 500;
        }
        
        input[type="text"],
        input[type="date"] {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }
        
        .error {
          border-color: #ff4444;
        }
        
        .error-message {
          color: #ff4444;
          font-size: 14px;
          margin-top: 5px;
        }
        
        .checkbox-group {
          display: flex;
          align-items: center;
        }
        
        .checkbox-group input {
          width: auto;
          margin-right: 8px;
        }
        
        .submit-btn {
          background-color: #4CAF50;
          color: white;
          padding: 10px 15px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          width: 100%;
        }
        
        .submit-btn:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

export default Demo;