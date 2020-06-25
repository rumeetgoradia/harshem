import { Field, Form, Formik, useField } from "formik"
import React, { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import * as yup from "yup"
import Hero from "../components/Hero"
import {
  ErrorText,
  Label,
  LabeledDateTimePicker,
  LabeledRadioButton,
  LabeledSelect,
  LabeledTextInput
} from "../components/Inputs"
import { BorderedButton } from "../components/styles/StyledClickables"
import {
  InfoContainer,
  StyledParagraph
} from "../components/styles/StyledContainer"

function Appointment({ setTitle }) {
  useEffect(() => {
    setTitle("Appointment Request")
  }, [setTitle])

  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (success) {
      const timeout = setTimeout(() => {
        setSuccess(false)
        clearTimeout(timeout)
      }, 60000)
      
    }
  }, [success])

  const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    const errorText = meta.error && meta.touched ? meta.error : ""
    return <LabeledTextInput label={label} errorText={errorText} {...field} />
  }

  const SelectField = ({ label, options, ...props }) => {
    const [field, meta] = useField(props)
    const errorText = meta.error && meta.touched ? meta.error : ""
    return (
      <LabeledSelect
        label={label}
        options={options}
        errorText={errorText}
        {...field}
      />
    )
  }

  const RadioField = ({ label, ...props }) => {
    const [field] = useField(props)
    return <LabeledRadioButton label={label} {...field} />
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const validationSchema = yup.object({
    firstName: yup.string().required("Please enter your first name."),
    lastName: yup.string().required("Please enter your last name."),
    phone: yup
      .string()
      .matches(/^[0-9]*$/, "Please enter a valid phone number.")
      .required("Please enter your phone number."),
    email: yup.string().email("Please enter a valid email."),
    patientType: yup
      .string()
      .required("Please indicate if you are a new or existing patient."),
    appointmentType: yup
      .string()
      .required("Please choose the type of appointment."),
    firstDate: yup
      .date()
      .required("Please choose your preferred appointment date.")
      .nullable(),
  })

  return (
    <>
      <Hero title="Online Appointment Request" />
      <InfoContainer header="Request an Appointment Today!">
        <>
          <StyledParagraph>
            Walk-ins are welcome! If you need an urgent, same-day, or next-day
            appointment, please call the appropriate office location. We look
            forward to seeing you soon!
          </StyledParagraph>
          <StyledParagraph>
            Use this form for non-urgent appointments only.
          </StyledParagraph>
          <Formik
            initialValues={{
              "bot-field": "",
              "form-name": "appointment-request",
              firstName: "",
              lastName: "",
              phone: "",
              email: "",
              officePref: "",
              physicianPref: "",
              patientType: "",
              appointmentType: "",
              firstDate: null,
              secondDate: null,
              thirdDate: null,
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
                    <Col xs={12} sm={6} className="mb-4">
                      <TextField
                        name="firstName"
                        type="input"
                        label="First Name"
                      />
                    </Col>
                    <Col xs={12} sm={6} className="mb-4">
                      <TextField
                        name="lastName"
                        type="input"
                        label="Last Name"
                      />
                    </Col>
                    <Col xs={12} sm={6} className="mb-4">
                      <TextField
                        name="phone"
                        type="input"
                        label="Phone Number"
                      />
                    </Col>
                    <Col xs={12} sm={6} className="mb-4">
                      <TextField
                        name="email"
                        type="input"
                        label="Email Address"
                      />
                    </Col>
                    <Col xs={12} sm={6} className="mb-4">
                      <SelectField
                        name="officePref"
                        label="Office Preference"
                        options={[
                          { label: "No Preference", value: "" },
                          { label: "Rahway, NJ", value: "Rahway" },
                          { label: "Elizabeth, NJ", value: "Elizabeth" },
                        ]}
                      />
                    </Col>
                    <Col xs={12} sm={6} className="mb-4">
                      <SelectField
                        name="physicianPref"
                        label="Provider Preference"
                        options={[
                          { label: "No Preference", value: "" },
                          { label: "Dr. Rita Goradia", value: "Goradia" },
                          { label: "Dr. Concepcion Dancel", value: "Dancel" },
                        ]}
                      />
                    </Col>
                    <Col xs={12} md={6} className="mb-4">
                      <Label>Patient Type</Label>
                      <Row xs={1} sm={2} className="pl-2 pl-sm-0">
                        <Col>
                          <RadioField
                            name="patientType"
                            value="new"
                            type="radio"
                            label="New Patient"
                          />
                        </Col>
                        <Col>
                          <RadioField
                            name="patientType"
                            value="existing"
                            type="radio"
                            label="Existing Patient"
                          />
                        </Col>
                      </Row>
                      {errors.patientType && touched.patientType ? (
                        <ErrorText>{errors.patientType}</ErrorText>
                      ) : null}
                    </Col>
                    <Col xs={12} md={6} className="mb-4">
                      <SelectField
                        name="appointmentType"
                        label="Appointment Type"
                        options={[
                          { label: "", value: "" },
                          { label: "Sick Visit", value: "sick visit" },
                          { label: "Follow Up", value: "follow up" },
                          {
                            label: "Annual/Wellness",
                            value: "annual/wellness",
                          },
                          {
                            label: "Pre-Op Clearance",
                            value: "pre-op clearance",
                          },
                          {
                            label: "Women's Health Issues",
                            value: "women's health issues",
                          },
                        ]}
                      />
                    </Col>
                    <Col xs={12} xl={4} className="mb-4">
                      <LabeledDateTimePicker
                        name="firstDate"
                        label="First Date Preference"
                        onChange={date => setFieldValue("firstDate", date)}
                        onBlur={handleBlur}
                        value={values.firstDate}
                      />
                      {errors.firstDate && touched.firstDate ? (
                        <ErrorText>{errors.firstDate}</ErrorText>
                      ) : null}
                    </Col>
                    <Col xs={12} lg={6} xl={4} className="mb-4">
                      <LabeledDateTimePicker
                        name="secondDate"
                        label="Second Date Preference"
                        onChange={date => setFieldValue("secondDate", date)}
                        onBlur={handleBlur}
                        value={values.secondDate}
                        disabled={!values.firstDate}
                      />
                    </Col>
                    <Col xs={12} lg={6} xl={4} className="mb-5">
                      <LabeledDateTimePicker
                        name="thirdDate"
                        label="Third Date Preference"
                        onChange={date => setFieldValue("thirdDate", date)}
                        onBlur={handleBlur}
                        value={values.thirdDate}
                        disabled={!values.secondDate}
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
        </>
      </InfoContainer>
    </>
  )
}

export default Appointment
