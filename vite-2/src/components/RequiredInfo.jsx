import React, { useState } from "react";
import "../styles/RequiredInfo.css";
import ViewPoliciesIcon from "../assets/svg/viewpolice.svg";

const RequiredInfo = ({ onClick, className = "" }) => {
  const [formData, setFormData] = useState({
    empName: "Penaganti",
    computerName: "SRIB-QKQACM7C26",
    softwareName: "SRIB-QKQACM7C26",
    ipAddress: "107.110.240.110",
    macAddress: "70:CD:0D:C5:05:8F",
    softwareGroup: "Docker Desktop",
    installReason: "",
    remarks: "",
    complianceIssue: "yes",
    category: "",
    justification: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onClick) onClick();
    // Replace with API integration
    // For now, just log the data so you can wire it later
    // eslint-disable-next-line no-console
    console.log("RequiredInfo submission", formData);
  };

  return (
    <div className={`required-info-section ${className}`}>
      <div className="info-card">
        <div className="section-heading">Unauthorized Software List</div>

        <div className="table-container">
          <div className="table-header">
            <div className="cell-header">Emp Name</div>
            <div className="cell-header">Computer Name</div>
            <div className="cell-header">Software Name</div>
            <div className="cell-header">IP Address</div>
            <div className="cell-header">MAC</div>
            <div className="cell-header">S/W Group</div>
            <div className="cell-header">Install Reason</div>
            <div className="cell-header">Remarks(If Any)</div>
          </div>

          <div className="table-row">
            <div className="cell" title={formData.empName}>{formData.empName}</div>
            <div className="cell" title={formData.computerName}>{formData.computerName}</div>
            <div className="cell" title={formData.softwareName}>{formData.softwareName}</div>
            <div className="cell">{formData.ipAddress}</div>
            <div className="cell">{formData.macAddress}</div>
            <div className="cell">{formData.softwareGroup}</div>
            <div className="cell">
              <div className={`select-wrapper${formData.installReason ? "" : " placeholder"}`}>
                <select
                  className="reason-select"
                  value={formData.installReason}
                  onChange={(e) => handleChange("installReason", e.target.value)}
                >
                  <option value="">Select reason</option>
                  <option value="work-requirement">Work requirement</option>
                  <option value="poc">POC / Testing</option>
                  <option value="learning">Learning</option>
                  <option value="sublime-text">Sublime Text</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="cell">
              <input
                className="remarks-input"
                type="text"
                placeholder="xxx-xxx-xxx-xxxx"
                value={formData.remarks}
                onChange={(e) => handleChange("remarks", e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <div className="form-section">
          <div className="section-subheading">Please mention Reason for Installation</div>

          <div className="radio-group">
            <div className="radio-title"> 
             <div className="yesno_label">Is it Compliance issue ?
              <br />
              
            <label className="radio-option">
              <input
                type="radio"
                name="compliance"
                value="yes"
                checked={formData.complianceIssue === "yes"}
                onChange={(e) => handleChange("complianceIssue", e.target.value)}
              />
              <span>Yes</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="compliance"
                value="no"
                checked={formData.complianceIssue === "no"}
                onChange={(e) => handleChange("complianceIssue", e.target.value)}
              />
              <span>No</span>
            </label>
            </div>
              
          </div>
          </div>


          <div className="category-row">
            <label className="section-subheading" htmlFor="category-select"> Select Category</label>
            <div className={`select-wrapper${formData.category ? "" : " placeholder"}`}>
              <select
                id="category-select"
                className="category-select"
                value={formData.category}
                onChange={(e) => handleChange("category", e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="security">Security</option>
                <option value="productivity">Productivity</option>
                <option value="development">Development</option>
              </select>
            </div>
          </div>

          <div className="justification-block">
            <label className="section-subheading" htmlFor="justification-textarea"> <b>Justification</b></label>
            <textarea
              id="justification-textarea"
              className="justification-textarea"
              placeholder="its non compliance, The usage of unlicensed software is prohibited and can result in severe fines and legal danger ..."
              value={formData.justification}
              onChange={(e) => handleChange("justification", e.target.value)}
            />
          </div>
        </div>

        <div className="view-policies-section">
          <div className="view-policies-link">
            <img
              src={ViewPoliciesIcon}
              alt="View Policies"
              width="20"
              height="20"
            />
            <span>View Policies</span>
          </div>
        </div>

        
      </div>

      {/* View Policies Link */}
     
    </div>
  );
};

export default RequiredInfo;
