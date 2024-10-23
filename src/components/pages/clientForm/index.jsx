import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./index.scss";
import Button from "../../button";
import { Link } from "react-router-dom";
import StaticCubes from "../../Animations/staticCubes";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet";

const ClientDiscoveryForm = () => {
  const refForm = useRef();

  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    industry: "",
    contactMethod: "",
    services: [],
    projectDescription: "",
    existingWebsite: false,
    websiteUrl: "",
    websiteGoal: "",
    timeline: "",
    targetAudience: "",
    branding: false,
    features: [],
    maintenancePlan: false,
    maintenanceServices: [],
    hostingProvider: false,
    hostingDetails: "",
    traffic: "",
    managedHosting: false,
    hostingConcerns: [],
    aiSolutions: [],
    aiChatbotPurpose: "",
    preferredChatbotPlatform: "",
    eCommerceAutomationGoals: "",
    socialMediaAutomationGoals: "",
    crmIntegration: false,
    otherAutomationNeeds: "",
    budget: "",
    startTimeline: "",
    criticalDeadlines: "",
    competitorSites: "",
    uniqueSellingPoints: "",
    competitors: "",
    additionalInfo: "",
    referral: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else if (type === "select-multiple") {
      const selectedOptions = Array.from(
        e.target.selectedOptions,
        (option) => option.value,
      );
      setFormData({
        ...formData,
        [name]: selectedOptions,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => {
      const updatedArray = checked
        ? [...prevData[name], value]
        : prevData[name].filter((item) => item !== value);
      return {
        ...prevData,
        [name]: updatedArray,
      };
    });
  };

  const handleSubmit = (e) => {
    const formEle = document.querySelector("form");
    e.preventDefault();
    const formInput = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbwe5VpmExd6eS87VEDdXnB_mjyK5_nr8T1KGeY_oh6Q8OcRW36Zs53rKJCk4Ni7jEFa/exec",
      {
        method: "POST",
        body: formInput,
      },
    );
    console.log("Form Data Submitted:", formData);

    emailjs
      .sendForm(
        "p.rossiter83@gmail.com",
        "discovery_form",
        refForm.current,
        "w1ULsXxchzrjhuclR",
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert(" Failed to send your message, pleease try again");
        },
      );
  };

  return (
    <>
      <div className="client-discovery-form">
        <section className="hero">
          <StaticCubes />
          <div className="text-box">
            <h1 className="title">Client Discovery Form</h1>
            <p className="fadeInUp">
              This is the ultimate worksheet to help you collect all the
              information, ideas and prep work you need before starting your
              project with us.
            </p>
            <div className="btn-container fadeInUp">
              <Button text="Contact us" link="/contact" />
              <Button
                text="Book A Call"
                link="https://calendly.com/immutable-studio/website-consultancy?month=2024-05"
              />
            </div>
          </div>
        </section>

        <form ref={refForm} onSubmit={handleSubmit} className="discovery-form">

          <section className="form-section">
            <h2>Client Information</h2>
            <label htmlFor="companyName">
              Company Name:
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Contact Person:
              <input
                type="text"
                name="contactPerson"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email Address:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <label>
              Website (if applicable):
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </label>
            <label>
              Industry:
              <input
                type="text"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
              />
            </label>
            <label>
              Preferred Contact Method:
              <select
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
              >
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
              </select>
            </label>
          </section>

          <section className="form-section">
            <h2>Project Overview</h2>
            <label htmlFor="service">
              What services are you interested in?
              <select
                name="services"
                value={formData.services}
                onChange={handleChange}
                multiple
              >
                <option value="Web Design">Web Design</option>
                <option value="Website Maintenance">Website Maintenance</option>
                <option value="Hosting Services">Hosting Services</option>
                <option value="AI & Automation Solutions">
                  AI & Automation Solutions
                </option>
              </select>
            </label>
            <label>
              Please describe your project or service needs:
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                rows={2}
              />
            </label>
          </section>

          {formData.services.includes("Web Design") && (
            <section className="form-section">
              <h2>Web Design Specific Questions</h2>
              <label className="checkbox">
                Do you have an existing website?
                <input
                  type="checkbox"
                  name="existingWebsite"
                  checked={formData.existingWebsite}
                  onChange={handleChange}
                />
              </label>
              {formData.existingWebsite && (
                <label>
                  If yes, what is the URL?
                  <input
                    type="url"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleChange}
                  />
                </label>
              )}
              <label>
                What is the primary goal of your website?
                <input
                  type="text"
                  name="websiteGoal"
                  value={formData.websiteGoal}
                  onChange={handleChange}
                />
              </label>
              <label>
                Do you have a specific timeline or launch date in mind?
                <input
                  type="text"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                />
              </label>
              <label>
                Who is your target audience?
                <input
                  type="text"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleChange}
                />
              </label>
              <label className="checkbox">
                Do you have existing branding materials (logo, colors, fonts)?
                <input
                  type="checkbox"
                  name="branding"
                  checked={formData.branding}
                  onChange={handleChange}
                />
              </label>
              <label>
                What features do you need?
                <div className="features">
                  <label>
                    <input
                      type="checkbox"
                      name="features"
                      value="Blog"
                      checked={formData.features.includes("Blog")}
                      onChange={handleCheckboxChange}
                    />
                    Blog
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="features"
                      value="eCommerce"
                      checked={formData.features.includes("eCommerce")}
                      onChange={handleCheckboxChange}
                    />
                    eCommerce
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="features"
                      value="Portfolio/Gallery"
                      checked={formData.features.includes("Portfolio/Gallery")}
                      onChange={handleCheckboxChange}
                    />
                    Portfolio/Gallery
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="features"
                      value="Contact Form"
                      checked={formData.features.includes("Contact Form")}
                      onChange={handleCheckboxChange}
                    />
                    Contact Form
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="features"
                      value="Social Media Integration"
                      checked={formData.features.includes(
                        "Social Media Integration",
                      )}
                      onChange={handleCheckboxChange}
                    />
                    Social Media Integration
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="features"
                      value="SEO Optimization"
                      checked={formData.features.includes("SEO Optimization")}
                      onChange={handleCheckboxChange}
                    />
                    SEO Optimization
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="features"
                      value="Newsletter Signup"
                      checked={formData.features.includes("Newsletter Signup")}
                      onChange={handleCheckboxChange}
                    />
                    Newsletter Signup
                  </label>
                </div>
              </label>
            </section>
          )}

          {formData.services.includes("Website Maintenance") && (
            <section className="form-section">
              <h2>Website Maintenance Specific Questions</h2>
              <label>
                Do you currently have a maintenance plan?
                <input
                  type="checkbox"
                  name="maintenancePlan"
                  checked={formData.maintenancePlan}
                  onChange={handleChange}
                />
              </label>
              <label>
                What maintenance services are you interested in?
                <select
                  name="maintenanceServices"
                  value={formData.maintenanceServices}
                  onChange={handleChange}
                  multiple
                >
                  <option value="Content Updates">Content Updates</option>
                  <option value="Security Monitoring">
                    Security Monitoring
                  </option>
                  <option value="Backups">Backups</option>
                  <option value="Software/Plugin Updates">
                    Software/Plugin Updates
                  </option>
                  <option value="Performance Optimization">
                    Performance Optimization
                  </option>
                  <option value="Bug Fixes">Bug Fixes</option>
                </select>
              </label>
            </section>
          )}

          {formData.services.includes("Hosting Services") && (
            <section className="form-section">
              <h2>Hosting Specific Questions</h2>
              <label className="checkbox">
                Do you have a current hosting provider?
                <input
                  type="checkbox"
                  name="hostingProvider"
                  checked={formData.hostingProvider}
                  onChange={handleChange}
                />
              </label>
              {formData.hostingProvider && (
                <label>
                  If yes, who is your hosting provider?
                  <input
                    type="text"
                    name="hostingDetails"
                    value={formData.hostingDetails}
                    onChange={handleChange}
                  />
                </label>
              )}
              <label>
                How much traffic does your website receive monthly?
                <input
                  type="text"
                  name="traffic"
                  value={formData.traffic}
                  onChange={handleChange}
                />
              </label>
              <label className="checkbox">
                Do you need managed hosting services?
                <input
                  type="checkbox"
                  name="managedHosting"
                  checked={formData.managedHosting}
                  onChange={handleChange}
                />
              </label>
              <label>
                What are your primary concerns with hosting?
                <div className="features">
                  <label>
                    <input
                      type="checkbox"
                      name="hostingConcerns"
                      value="Speed"
                      checked={formData.hostingConcerns.includes("Pricing")}
                      onChange={handleCheckboxChange}
                    />
                    Pricing
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="hostingConcerns"
                      value="Speed"
                      checked={formData.hostingConcerns.includes("Speed")}
                      onChange={handleCheckboxChange}
                    />
                    Speed
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="hostingConcerns"
                      value="Security"
                      checked={formData.hostingConcerns.includes("Security")}
                      onChange={handleCheckboxChange}
                    />
                    Security
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="hostingConcerns"
                      value="Scalability"
                      checked={formData.hostingConcerns.includes("Scalability")}
                      onChange={handleCheckboxChange}
                    />
                    Scalability
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="hostingConcerns"
                      value="Support"
                      checked={formData.hostingConcerns.includes("Support")}
                      onChange={handleCheckboxChange}
                    />
                    Support
                  </label>
                </div>
              </label>
            </section>
          )}

          {formData.services.includes("AI & Automation Solutions") && (
            <section className="form-section">
              <h2>AI & Automation Solutions</h2>

              <label className="checkbox">
                Are you interested in AI chat assistants?
                <input
                  type="checkbox"
                  name="aiSolutions"
                  value="AI Chat Assistants"
                  onChange={handleCheckboxChange}
                />
              </label>
              {formData.aiSolutions.includes("AI Chat Assistants") && (
                <div>
                  <label>
                    What is the primary purpose of the AI chatbot? (e.g.,
                    customer support, lead generation, etc.)
                    <textarea
                      name="aiChatbotPurpose"
                      value={formData.aiChatbotPurpose}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Do you have a preferred platform for your chatbot? (e.g.,
                    website, Facebook Messenger, WhatsApp)
                    <input
                      type="text"
                      name="preferredChatbotPlatform"
                      value={formData.preferredChatbotPlatform}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              )}

              <label className="checkbox">
                Are you interested in workflow automation?
                <input
                  type="checkbox"
                  name="aiSolutions"
                  value="Workflow Automation"
                  onChange={handleCheckboxChange}
                />
              </label>
              {formData.aiSolutions.includes("Workflow Automation") && (
                <div>
                  <label>
                    What are your primary goals for eCommerce automation? (e.g.,
                    order processing, inventory management)
                    <textarea
                      name="eCommerceAutomationGoals"
                      value={formData.eCommerceAutomationGoals}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    What are your primary goals for social media automation?
                    (e.g., content scheduling, analytics tracking)
                    <textarea
                      name="socialMediaAutomationGoals"
                      value={formData.socialMediaAutomationGoals}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="checkbox">
                    Do you need CRM integration?
                    <input
                      type="checkbox"
                      name="crmIntegration"
                      checked={formData.crmIntegration}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Do you have any other automation needs?
                    <textarea
                      name="otherAutomationNeeds"
                      value={formData.otherAutomationNeeds}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              )}
            </section>
          )}

          <section className="form-section">
            <h2>Budget and Timeline</h2>
            <label>
              What is your budget for this project? (Provide a range if
              possible)
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              />
            </label>
            <label>
              When would you like to get started?
              <input
                type="text"
                name="startTimeline"
                value={formData.startTimeline}
                onChange={handleChange}
              />
            </label>
            <label>
              Are there any critical deadlines?
              <input
                type="text"
                name="criticalDeadlines"
                value={formData.criticalDeadlines}
                onChange={handleChange}
              />
            </label>
          </section>

          <section className="form-section">
            <h3>Competitor and Inspiration</h3>
            <label>
              Are there any websites you admire or want to emulate? (Please list
              URLs)
              <textarea
                name="competitorSites"
                value={formData.competitorSites}
                onChange={handleChange}
              />
            </label>
            <label>
              Who are your main competitors?
              <textarea
                name="competitors"
                value={formData.competitors}
                onChange={handleChange}
              />
            </label>
            <label>
              What makes you unique in your industry?
              <textarea
                name="uniqueSellingPoints"
                value={formData.uniqueSellingPoints}
                onChange={handleChange}
              />
            </label>
          </section>

          <section className="form-section">
            <h2>Additional Information</h2>
            <label>
              Is there anything else we should know about your project?
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
              />
            </label>
            <label>
              How did you hear about us?
              <input
                type="text"
                name="referral"
                value={formData.referral}
                onChange={handleChange}
              />
            </label>
          </section>

          <section className="form-section">
            <label>
              <input type="checkbox" name="acknowledgment" required />I
              understand that this is an initial inquiry and not a binding
              contract.
            </label>
            <label>
              <input type="checkbox" name="gdpr" required />I consent to having
              this website store my submitted information.
            </label>
            <Link to="/privacy-policy" className="privacy-policy">
              Privacy Policy
            </Link>
            <button type="submit" value="send">
              Submit
            </button>
          </section>
        </form>
      </div>
      <div>
        <HelmetProvider>
          <Helmet>
            <title>
              Discovery Form | Immutable Studio Web Development Agency
            </title>
            <meta
              name="description"
              content="Immutable Studio is a leading website development and website design agency. We build fast and responsive websites and create AI solutions for businesses."
            />
            <meta
              name="keywords"
              content="Website, Website Design, Website Development, Web design, website design agency, AI Solutions, Chatbot, workflows, London, Greenwich London"
            />
          </Helmet>
        </HelmetProvider>
      </div>
    </>
  );
};

export default ClientDiscoveryForm;
