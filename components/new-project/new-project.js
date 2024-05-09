import NewProjectCss from "./new-project.module.css";
import React, { useEffect, useState } from "react";
import InnerHeader from "../inner-header/InnerHeader";
import TopSearch from "../top-search/top-serarch";
import DatePicker from "react-multi-date-picker";
import Link from "next/link";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
} from "reactstrap";
import { useRouter } from "next/router";

// import Icon18Hover from "../images/icon18-hover.svg";
// import uplaodIcon from "../images/Upload-Icon.svg";
// import icon37 from "../images/icon37.svg";
import Image from "next/image";
import { useMutation } from "react-query";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Project Name is required")
    .min(5, "Project Name must be at least 5 characters"),
  description: yup
    .string()
    .required("Project Description is required")
    .min(5, "Project Name must be at least 5 characters"),
  frequency: yup.string().required("Project Frequency is required"),
  startDate: yup
    .date()
    .required("Project startDate is required")
    .typeError("Invalid date"),
  endDate: yup
    .date()
    .required("Project endDate is required")
    .typeError("Invalid date"),
});
function NewProject(props) {
  const today = new Date();
  const tomorrow = new Date();
  const router = useRouter();

  tomorrow.setDate(tomorrow.getDate() + 1);

  const [values, setValues] = useState([today, tomorrow]);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // console.log("Form data submitted:", data);
    mutation.mutate(data);
  };
  const mutation = useMutation({
    mutationFn: (data) => {
      return axios
        .post("api/project", data)
        .then((response) => {
          Swal.fire("Saved!", "Your item has been Saved.", "success");
          reset();
          router.push("/project-list");
        })
        .catch((error) => {
          Swal.fire("Not Saved", "Server Error.", "error");
          console.error("Error:", error);
        });
    },
  });
  useEffect(() => {}, [isSubmitSuccessful]);
  return (
    <>
      <InnerHeader />
      <section className={NewProjectCss.newProject}>
        <TopSearch />
        <div className={NewProjectCss.newProjectWrap}>
          <h3>You are almost done! Now create your ﬁrst extraction project.</h3>
          <Form>
            <FormGroup className={NewProjectCss.newFile}>
              <Label for="file" className="mt-4" >
                <span className="d-flex align-item-center" onClick={toggle}>
                  <span>
                    <Image
                      width={50}
                      height={50}
                      src={"/images/icon18-hover.svg"}
                      alt="Icon18Hover"
                    />
                  </span>
                  {/* <Input id="file" type="file"  /> */}
                  <span className={NewProjectCss.input_text}>New Project</span>
                </span>
              </Label>
            </FormGroup>
          </Form>
        </div>
      </section>

      <Modal isOpen={modal} toggle={toggle} className={"modalWrap new-project new-bg"}>
        <ModalHeader>
          <span className={NewProjectCss.modalTitle}>
            New Extraction Project - Creation Panel
          </span>
          <span className={"closeButton"} onClick={toggle}></span>
        </ModalHeader>
        <ModalBody>
          <div className={"modalBodyContent"}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup className="project-name-con">
                <Label className="left-text">Project name:</Label>
                <input
                  className="form-control right-part"
                  {...register("name")}
                  placeholder="Write your extration project name here"
                  type="text"
                />
                {errors?.name && (
                  <p>
                    <span style={{ color: "red" }}>
                      {errors?.name?.message}
                    </span>
                  </p>
                )}
                {/* <Input
                  placeholder="Write your extration project name here"
                  type="email"
                /> */}
              </FormGroup>
              <FormGroup className="project-name-con">
                <Label className="left-text">Description:</Label>
                <input
                  className="form-control right-part"
                  {...register("description")}
                  placeholder="Write a brief description of your extration project here"
                  type="textarea"
                />
                {errors?.description && (
                  <p>
                    <span style={{ color: "red" }}>
                      {errors?.description?.message}
                    </span>
                  </p>
                )}
                {/* <Input
                  placeholder="Write a brief description of your extration project here"
                  type="textarea"
                /> */}
              </FormGroup>
              {/* <FormGroup>
                <Label>Upload image:</Label>
                <span className={"uploadIcon"}>
                  <Input type="file" />
                  <Image
                    width={50}
                    height={50}
                    src={"/images/Upload-Icon.svg"}
                    alt="Upload"
                  />
                </span>
              </FormGroup> */}
              <FormGroup >
               <div className="project-name-con">
                <div className={`${NewProjectCss.form_group_inner} mb-3 w-100`}>
                  <Label className="left-text">Extraction frequency:</Label>

                  <select
                    {...register("frequency")}
                    id="exampleSelectMulti"
                    type="select"
                    className="form-control right-part"
                  >
                    <option value="">--select--</option>
                    {/* <option>One-Time</option> */}
                    {/* <option>Hourly</option> */}
                    <option value="DAILY">Daily</option>
                    <option value="WEEKLY">Weekly</option>
                    <option value="REAL_TIME">REAL_TIME</option>
                    <option value="MONTHLY">Monthly</option>
                  </select>
                  {errors?.frequency && (
                    <p>
                      <span style={{ color: "red" }}>
                        {errors?.frequency?.message}
                      </span>
                    </p>
                  )}
                </div>
                </div>
                <div className={`${NewProjectCss.form_group_inner} mb-3 project-name-con`}>
                <div className="row">
                  <div className="col-sm-6">
                  <Label>
                    Schedule start and end date:
                    <span>(only start date for one-time extraction)</span>
                  </Label>
                  </div>
                  <div className="col-sm-6">
                  <span className="date-picker datepicker-right">
                    <Image
                      width={50}
                      height={50}
                      multiple
                      value={values}
                      onChange={setValues}
                      src={"/images/icon37.svg"}
                      alt="Planner"
                    />
                    <Controller
                      name="startDate"
                      control={control}
                      render={({ field: { ref, ...rest } }) => (
                        <DatePicker
                          {...rest}
                          // You can add more specific props for Datepicker if needed
                        />
                      )}
                    />
                    {/* <DatePicker {...register("startDate")} /> */}
                    {errors?.startDate && (
                      <p>
                        <span style={{ color: "red" }}>
                          {errors?.startDate?.message}
                        </span>
                      </p>
                    )}
                    <Controller
                      name="endDate"
                      control={control}
                      render={({ field: { ref, ...rest } }) => (
                        <DatePicker
                          {...rest}
                          // You can add more specific props for Datepicker if needed
                        />
                      )}
                    />
                    {errors?.endDate && (
                      <p>
                        <span style={{ color: "red" }}>
                          {errors?.endDate?.message}
                        </span>
                      </p>
                    )}
                  </span>
                  </div>
                </div>
                 
                 
                </div>
              </FormGroup>
              <div className={"btn_block"}>
                <Button
                  color="danger"
                  style={{ marginRight: "10px" }}
                  onClick={toggle}
                >
                  CANCEL
                </Button>
                {/* <Link href="/project-list" className={"style_two"}> */}
                <Button color="primary" type="submit">
                  SAVE
                </Button>
                {/* </Link> */}
              </div>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

export default NewProject;
