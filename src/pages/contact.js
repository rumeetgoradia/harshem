import { Field, Form, Formik, useField } from "formik"
import React, { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { FaEnvelope, FaFax, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import styled from "styled-components"
import * as yup from "yup"
import Hero from "../components/Hero"
import { LabeledTextArea, LabeledTextInput } from "../components/Inputs"
import { BorderedButton } from "../components/styles/StyledClickables"
import {
  InfoContainer,
  StyledParagraph,
  StyledSubheader,
} from "../components/styles/StyledContainer"
import content from "../data/content.json"
import offices from "../data/offices.json"

function Contact({ setTitle }) {
  useEffect(() => {
    setTitle("Contact Us")
  }, [setTitle])

  const [success, setSuccess] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    if (success) {
      const timeout = setTimeout(() => {
        setSuccess(false)
        clearTimeout(timeout)
      }, 60000)
    }
  }, [success])

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    const errorText = meta.error && meta.touched ? meta.error : ""
    return <LabeledTextInput label={label} errorText={errorText} {...field} />
  }

  const TextAreaField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    const errorText = meta.error && meta.touched ? meta.error : ""
    return <LabeledTextArea label={label} errorText={errorText} {...field} />
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const validationSchema = yup.object({
    name: yup.string().required("Please enter your name."),
    phone: yup
      .string()
      .matches(/^[0-9]*$/, "Please enter a valid phone number.")
      .required("Please enter your phone number."),
    email: yup.string().email("Please enter a valid email."),
    message: yup.string().required("Please enter a message."),
  })

  const SmallAnchor = styled.a`
    font-size: 14px;
    @media screen and (min-width: 768px) {
      font-size: 1.25rem;
    }
  `

  return (
    <>
      <Hero title="Contact Us" />
      <InfoContainer header="Contact Information">
        <>
          <Row style={{ marginBottom: width < 1200 ? 0 : -24 }}>
            {offices.map((office, index) => {
              return (
                <Col
                  xs={12}
                  md={6}
                  xl={4}
                  className="text-center text-md-left mb-4"
                >
                  <StyledSubheader>{office.office}</StyledSubheader>
                  <StyledParagraph className="mb-1">
                    <FaPhoneAlt style={{ marginRight: width < 768 ? 6 : 10 }} />
                    {office.phone}
                  </StyledParagraph>
                  <StyledParagraph className="mb-1">
                    <FaFax style={{ marginRight: width < 768 ? 6 : 10 }} />
                    {office.fax}
                  </StyledParagraph>
                  <StyledParagraph className="mb-1">
                    <FaMapMarkerAlt
                      style={{ marginRight: width < 768 ? 6 : 10 }}
                    />
                    {office.addressLine1}
                    <br />
                    <span style={{ marginLeft: width < 768 ? 19 : 30 }}>
                      {office.addressLine2}
                    </span>
                  </StyledParagraph>
                </Col>
              )
            })}
            <Col xs={12} xl={4} className="text-center text-xl-left">
              <StyledSubheader>Email</StyledSubheader>
              <StyledParagraph className="mb-0">
                <SmallAnchor
                  href="mailto:info@harshemfamilypractice.com"
                  title="Email"
                >
                  <FaEnvelope style={{ marginRight: width < 768 ? 6 : 10 }} />
                  {content.email}
                </SmallAnchor>
              </StyledParagraph>
            </Col>
          </Row>
        </>
      </InfoContainer>
      <InfoContainer header="Contact Form" secondary>
        <Formik
          initialValues={{
            "bot-field": "",
            "form-name": "contact-form",
            name: "",
            phone: "",
            email: "",
            message: "",
          }}
          onSubmit={(data, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            fetch("/", {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: encode({ ...data }),
            })
              .then(() => {
                setSuccess(true)
                setSubmitting(false)
                resetForm()
              })
              .catch(error => {
                setSuccess(false)
                alert(
                  "There was an issue when submitting your form. Please try again later!"
                )
              })
          }}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          }) => {
            return (
              <Form
                id="appointment-request"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <Field type="hidden" name="bot-field" />
                <Field type="hidden" name="form-name" />
                <Row>
                  <Col xs={12} md={4} className="mb-4">
                    <TextField name="name" type="input" label="Name" />
                  </Col>
                  <Col xs={12} md={4} className="mb-4">
                    <TextField name="phone" type="input" label="Phone Number" />
                  </Col>
                  <Col xs={12} md={4} className="mb-4">
                    <TextField
                      name="email"
                      type="input"
                      label="Email Address"
                    />
                  </Col>
                  <Col xs={12} className="mb-5">
                    <TextAreaField
                      name="message"
                      type="input"
                      label="Message"
                    />
                  </Col>
                  <Col xs={12}>
                    <BorderedButton
                      onClick={() => setSuccess(false)}
                      type="submit"
                      disabled={isSubmitting}
                      id="submit-button"
                      style={{ width: "100%" }}
                    >
                      Submit
                    </BorderedButton>
                  </Col>
                  {success ? (
                    <Col className="mt-3">
                      <StyledParagraph
                        style={{
                          color: "#53a653",
                          margin: 0,
                          textAlign: "center",
                        }}
                      >
                        Thank you for contacting us! Your request is very
                        important to us, and all information will remain
                        confidential. We will contact you as soon as we review
                        your request!
                      </StyledParagraph>
                    </Col>
                  ) : null}
                </Row>
                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
              </Form>
            )
          }}
        </Formik>
      </InfoContainer>
    </>
  )
}

export default Contact
